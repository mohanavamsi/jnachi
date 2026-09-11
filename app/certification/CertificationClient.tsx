'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
  Award,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Download,
  Share2,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Lock,
  BookOpen,
  ArrowRight,
  Copy,
  Check,
  FileText,
  HelpCircle,
  User as UserIcon,
  Mail,
  RefreshCw,
  Wifi,
  WifiOff,
  MapPin,
  Building,
  LogIn,
  UserPlus,
  Key,
} from 'lucide-react';
import {
  CertSection,
  ClientCertQuestion,
  CERT_SECTIONS,
  CERT_SECTION_LABELS,
  ExamGradingResult,
} from '@/lib/certQuestionBank';
import {
  CertStatusResponse,
  EXAM_DURATION_MINUTES,
  EXAM_DURATION_MS,
  PASSING_THRESHOLD,
} from '@/lib/certService';
import { LESSONS, CategoryKey } from '@/lib/lessonsData';
import BeginnerCertificateModal from '@/components/BeginnerCertificateModal';
import { useAuth } from '@/components/AuthProvider';
import {
  loginWithGoogle,
  signUpWithEmail,
  signInWithEmail,
} from '@/lib/firebase';

type ExamView = 'gate' | 'exam' | 'result';
type AuthGateMode = 'signup' | 'signin' | 'portal';
type SyncStatus = 'synced' | 'syncing' | 'offline_saved' | 'error';

interface ExamState {
  attemptId: string;
  attemptNumber: number;
  email: string;
  recipientName: string;
  location?: string;
  company?: string;
  startedAt: number;
  questions: ClientCertQuestion[];
  answers: Record<string, string>; // questionId -> optionId ('a' | 'b' | 'c' | 'd')
  flagged: Record<string, boolean>; // questionId -> boolean
  currentIndex: number;
}

interface ExamSubmissionResult {
  attemptId: string;
  email: string;
  attemptNumber: number;
  recipientName: string;
  location?: string;
  company?: string;
  grading: ExamGradingResult;
  certificateId?: string;
  attemptsRemaining: number;
  cooldownNextAvailableAt?: number;
}

export default function CertificationClient() {
  const { user, userProfile, loading: authLoading, updateUserProfile } = useAuth();

  const [view, setView] = useState<ExamView>('gate');

  // Gate Form & Auth State
  const [authMode, setAuthMode] = useState<AuthGateMode>('signup');
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authName, setAuthName] = useState('');
  const [authLocation, setAuthLocation] = useState('');
  const [authCompany, setAuthCompany] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmittingAuth, setIsSubmittingAuth] = useState(false);
  const [candidateSessionEmail, setCandidateSessionEmail] = useState<string>('');

  // Candidate Details for Exam Launch
  const [candidateName, setCandidateName] = useState('');
  const [candidateLocation, setCandidateLocation] = useState('');
  const [candidateCompany, setCandidateCompany] = useState('');
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);

  // Eligibility Status State
  const [isCheckingStatus, setIsCheckingStatus] = useState(false);
  const [statusResponse, setStatusResponse] = useState<CertStatusResponse | null>(null);
  const [gateError, setGateError] = useState<string | null>(null);

  // Active Exam State
  const [examState, setExamState] = useState<ExamState | null>(null);
  const [selectedSectionTab, setSelectedSectionTab] = useState<CertSection>('literacy');
  const [isStartingExam, setIsStartingExam] = useState(false);
  const [isSubmittingExam, setIsSubmittingExam] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [paletteFilter, setPaletteFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');
  const [timeExpiredAlert, setTimeExpiredAlert] = useState(false);

  // Network Resilience & Cloud Sync State
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('synced');
  const [lastSyncedAt, setLastSyncedAt] = useState<number>(Date.now());
  const [networkErrorModal, setNetworkErrorModal] = useState<boolean>(false);
  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Result State
  const [submissionResult, setSubmissionResult] = useState<ExamSubmissionResult | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [copiedCertId, setCopiedCertId] = useState(false);

  // Tick clock for cooldown and 45-minute countdown
  const [now, setNow] = useState<number>(Date.now());
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Online / Offline Listeners
  useEffect(() => {
    if (typeof window === 'undefined') return;
    setIsOnline(navigator.onLine);

    const handleOnline = () => {
      setIsOnline(true);
      // Trigger instant flush of local answers to server
      if (examState) {
        syncAnswersToServer(examState.attemptId, examState.email, examState.answers);
      }
    };
    const handleOffline = () => {
      setIsOnline(false);
      setSyncStatus('offline_saved');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [examState]);

  // Sync profile details when user logs in or candidate session is restored
  useEffect(() => {
    if (user?.email) {
      setCandidateSessionEmail(user.email);
      const email = user.email;
      const name = userProfile?.displayName || user.displayName || email.split('@')[0] || '';
      const loc = userProfile?.location || '';
      const comp = userProfile?.company || '';

      setCandidateName((prev) => prev || name);
      setCandidateLocation((prev) => prev || loc);
      setCandidateCompany((prev) => prev || comp);

      handleCheckStatus(email);
    } else if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('jnachi_candidate_session');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.email) {
            setCandidateSessionEmail(parsed.email);
            if (parsed.name) setCandidateName((prev) => prev || parsed.name);
            if (parsed.location) setCandidateLocation((prev) => prev || parsed.location);
            if (parsed.company) setCandidateCompany((prev) => prev || parsed.company);
            handleCheckStatus(parsed.email);
          }
        }
      } catch {
        // ignore parse error
      }
    }
  }, [user, userProfile]);

  const effectiveEmail = (user?.email || candidateSessionEmail || '').trim().toLowerCase();
  const effectiveCandidateName = (candidateName || userProfile?.displayName || user?.displayName || (effectiveEmail ? effectiveEmail.split('@')[0] : '')).trim();
  const isAuthenticatedCandidate = Boolean(effectiveEmail);

  // Restore active attempt from localStorage / sessionStorage if present
  useEffect(() => {
    try {
      // Check localStorage first, then sessionStorage
      const allKeys = [...Object.keys(localStorage), ...Object.keys(sessionStorage)];
      const attemptKey = allKeys.find((k) => k.startsWith('jnachi_cert_attempt_'));

      if (attemptKey) {
        const raw = localStorage.getItem(attemptKey) || sessionStorage.getItem(attemptKey);
        if (raw) {
          const parsed = JSON.parse(raw) as ExamState;
          if (parsed && parsed.questions && parsed.questions.length > 0) {
            // Check if timer expired while away
            const elapsed = Date.now() - parsed.startedAt;
            if (elapsed > EXAM_DURATION_MS + 2 * 60 * 1000) {
              // Expired by over 2 minutes while away, clear state
              clearExamStorage(parsed.attemptId);
            } else {
              setExamState(parsed);
              setCandidateName(parsed.recipientName);
              setCandidateLocation(parsed.location || '');
              setCandidateCompany(parsed.company || '');
              setView('exam');
            }
          }
        }
      }
    } catch {
      // Storage unavailable or quota exceeded
    }
  }, []);

  // Sync exam state to local storage on every change
  useEffect(() => {
    if (examState && examState.attemptId) {
      try {
        const key = `jnachi_cert_attempt_${examState.attemptId}`;
        const serialized = JSON.stringify(examState);
        localStorage.setItem(key, serialized);
        sessionStorage.setItem(key, serialized);
      } catch {
        // Ignore quota limits
      }
    }
  }, [examState]);

  // Cloud Sync Handler (Debounced)
  const syncAnswersToServer = useCallback(
    async (attemptId: string, email: string, answers: Record<string, string>) => {
      if (!navigator.onLine) {
        setSyncStatus('offline_saved');
        return;
      }

      setSyncStatus('syncing');
      try {
        const res = await fetch('/api/certification/sync', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ attemptId, email, answers }),
        });

        if (res.ok) {
          const data = await res.json();
          setSyncStatus('synced');
          setLastSyncedAt(data.lastSyncedAt || Date.now());
        } else {
          setSyncStatus('offline_saved');
        }
      } catch {
        // Graceful handling of network timeout/interruptions
        setSyncStatus('offline_saved');
      }
    },
    []
  );

  // Trigger background sync whenever answers change
  useEffect(() => {
    if (!examState || view !== 'exam') return;

    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }

    syncTimeoutRef.current = setTimeout(() => {
      syncAnswersToServer(examState.attemptId, examState.email, examState.answers);
    }, 600);

    return () => {
      if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
    };
  }, [examState?.answers, examState?.attemptId, examState?.email, view, syncAnswersToServer]);

  // Periodic heartbeat sync to ensure offline progress is sent once back online
  useEffect(() => {
    if (view !== 'exam' || !examState) return;

    const interval = setInterval(() => {
      if (navigator.onLine && syncStatus === 'offline_saved') {
        syncAnswersToServer(examState.attemptId, examState.email, examState.answers);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [view, examState, syncStatus, syncAnswersToServer]);

  // Clean up completed attempt from local storage
  const clearExamStorage = (attemptId?: string) => {
    try {
      if (attemptId) {
        const key = `jnachi_cert_attempt_${attemptId}`;
        localStorage.removeItem(key);
        sessionStorage.removeItem(key);
      } else {
        [localStorage, sessionStorage].forEach((storage) => {
          Object.keys(storage).forEach((k) => {
            if (k.startsWith('jnachi_cert_attempt_')) {
              storage.removeItem(k);
            }
          });
        });
      }
    } catch {
      // Ignore
    }
  };

  // Cooldown countdown calculations
  const cooldownRemaining = useMemo(() => {
    let nextTime = 0;
    if (submissionResult?.cooldownNextAvailableAt) {
      nextTime = submissionResult.cooldownNextAvailableAt;
    } else if (statusResponse?.nextAvailableAt) {
      nextTime = statusResponse.nextAvailableAt;
    }
    if (!nextTime) return null;

    const diff = nextTime - now;
    if (diff <= 0) return { expired: true, text: 'Cooldown finished' };

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return {
      expired: false,
      hours,
      minutes,
      seconds,
      text: `${hours}h ${minutes}m ${seconds}s`,
    };
  }, [now, statusResponse, submissionResult]);

  // 45-Minute Exam Countdown Calculations
  const examTimer = useMemo(() => {
    if (!examState) return { remainingMs: 0, text: '45:00', isLow: false, isUrgent: false, expired: false };

    const expiresAt = examState.startedAt + EXAM_DURATION_MS;
    const remainingMs = Math.max(0, expiresAt - now);

    const totalSeconds = Math.floor(remainingMs / 1000);
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    return {
      remainingMs,
      text: formatted,
      isLow: totalSeconds <= 600 && totalSeconds > 180, // <= 10 mins
      isUrgent: totalSeconds <= 180 && totalSeconds > 0, // <= 3 mins
      expired: remainingMs === 0,
    };
  }, [examState, now]);

  // Handle auto-submit when 45 minutes expire
  useEffect(() => {
    if (view === 'exam' && examState && examTimer.expired && !isSubmittingExam) {
      setTimeExpiredAlert(true);
      handleSubmitExam(true);
    }
  }, [view, examState, examTimer.expired, isSubmittingExam]);

  // Check candidate status on the gate
  const handleCheckStatus = async (targetEmail: string) => {
    const cleanEmail = targetEmail.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) return;

    setGateError(null);
    setIsCheckingStatus(true);
    try {
      const res = await fetch(`/api/certification/status?email=${encodeURIComponent(cleanEmail)}`);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to retrieve exam status');
      }
      setStatusResponse(data);
      if (data.recipientName && !candidateName) setCandidateName(data.recipientName);
      if (data.location && !candidateLocation) setCandidateLocation(data.location);
      if (data.company && !candidateCompany) setCandidateCompany(data.company);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error checking eligibility';
      setGateError(msg);
    } finally {
      setIsCheckingStatus(false);
    }
  };

  // Sign Up Handler
  const handlePortalSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const cleanEmail = authEmail.trim().toLowerCase();
    const cleanName = authName.trim();
    const cleanLocation = authLocation.trim();
    const cleanCompany = authCompany.trim();

    if (!cleanName) {
      setAuthError('Full Name is required for official certificate issuance.');
      return;
    }
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setAuthError('Please enter a valid email address.');
      return;
    }
    if (authPassword.length < 6) {
      setAuthError('Password must be at least 6 characters.');
      return;
    }
    if (!cleanLocation) {
      setAuthError('Location (City, Country) is required before taking the exam.');
      return;
    }
    if (!cleanCompany) {
      setAuthError('Current Company / Organization is required.');
      return;
    }

    setIsSubmittingAuth(true);
    try {
      await signUpWithEmail(cleanEmail, authPassword, cleanName);
      try {
        await updateUserProfile({
          displayName: cleanName,
          location: cleanLocation,
          company: cleanCompany,
        });
      } catch {
        // Non-blocking firestore profile sync
      }
    } catch (err: unknown) {
      const isOpNotAllowed =
        (err as { code?: string })?.code === 'auth/operation-not-allowed' ||
        (err instanceof Error && err.message.includes('operation-not-allowed'));

      if (!isOpNotAllowed) {
        const msg = err instanceof Error ? err.message : 'Failed to register candidate account';
        setAuthError(msg);
        setIsSubmittingAuth(false);
        return;
      }
      // If Firebase project has Email/Password authentication disabled in Console,
      // activate candidate session directly so the candidate is never blocked!
      console.info('Firebase email auth not enabled on project; registering candidate session directly');
    }

    // Set active candidate credentials
    setCandidateName(cleanName);
    setCandidateLocation(cleanLocation);
    setCandidateCompany(cleanCompany);
    setCandidateSessionEmail(cleanEmail);

    if (typeof window !== 'undefined') {
      localStorage.setItem(
        'jnachi_candidate_session',
        JSON.stringify({
          email: cleanEmail,
          name: cleanName,
          location: cleanLocation,
          company: cleanCompany,
        })
      );
    }

    await handleCheckStatus(cleanEmail);
    setIsSubmittingAuth(false);
  };

  // Sign In Handler
  const handlePortalSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const cleanEmail = authEmail.trim().toLowerCase();
    if (!cleanEmail || !authPassword) {
      setAuthError('Email and password are required.');
      return;
    }

    setIsSubmittingAuth(true);
    try {
      await signInWithEmail(cleanEmail, authPassword);
      await handleCheckStatus(cleanEmail);
    } catch (err: unknown) {
      const isOpNotAllowed =
        (err as { code?: string })?.code === 'auth/operation-not-allowed' ||
        (err instanceof Error && err.message.includes('operation-not-allowed'));

      if (isOpNotAllowed) {
        // Activate candidate session directly with this email and look up exam history
        setCandidateSessionEmail(cleanEmail);
        if (typeof window !== 'undefined') {
          localStorage.setItem(
            'jnachi_candidate_session',
            JSON.stringify({
              email: cleanEmail,
              name: candidateName,
              location: candidateLocation,
              company: candidateCompany,
            })
          );
        }
        await handleCheckStatus(cleanEmail);
      } else {
        const msg = err instanceof Error ? err.message : 'Invalid login credentials.';
        setAuthError(msg);
      }
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Google Auth Handler
  const handleGoogleAuth = async () => {
    setAuthError(null);
    setIsSubmittingAuth(true);
    try {
      const loggedUser = await loginWithGoogle();
      if (loggedUser?.email) {
        setCandidateSessionEmail(loggedUser.email);
        await handleCheckStatus(loggedUser.email);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Google sign-in cancelled or failed.';
      setAuthError(msg);
    } finally {
      setIsSubmittingAuth(false);
    }
  };

  // Candidate Sign Out / Switch Account
  const handleCandidateSignOut = async () => {
    setCandidateSessionEmail('');
    setCandidateName('');
    setCandidateLocation('');
    setCandidateCompany('');
    setStatusResponse(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jnachi_candidate_session');
    }
    if (user) {
      const { logout } = await import('@/lib/firebase');
      await logout();
    }
  };

  // Save updated candidate profile (location, company, name)
  const handleSaveProfileDetails = async () => {
    if (!effectiveEmail) return;
    if (!candidateLocation.trim()) {
      setGateError('Location is required before starting the exam.');
      return;
    }
    if (!candidateCompany.trim()) {
      setGateError('Current company/organization is required before starting the exam.');
      return;
    }

    setIsUpdatingProfile(true);
    setGateError(null);
    try {
      if (user) {
        await updateUserProfile({
          displayName: candidateName.trim(),
          location: candidateLocation.trim(),
          company: candidateCompany.trim(),
        });
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem(
          'jnachi_candidate_session',
          JSON.stringify({
            email: effectiveEmail,
            name: candidateName.trim(),
            location: candidateLocation.trim(),
            company: candidateCompany.trim(),
          })
        );
      }
    } catch (err: unknown) {
      setGateError(err instanceof Error ? err.message : 'Failed to update profile');
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  // Start Exam Attempt (40 questions, 45 minutes)
  const handleStartExam = async () => {
    if (!effectiveEmail) {
      setGateError('Please register as a candidate or sign in before starting the examination.');
      return;
    }

    const cleanName = (candidateName || userProfile?.displayName || user?.displayName || '').trim();
    const cleanLocation = (candidateLocation || userProfile?.location || '').trim();
    const cleanCompany = (candidateCompany || userProfile?.company || '').trim();

    if (!cleanName) {
      setGateError('Full legal name is required for certificate issuance.');
      return;
    }
    if (!cleanLocation) {
      setGateError('Location (City, Country) is required before beginning the exam.');
      return;
    }
    if (!cleanCompany) {
      setGateError('Current Company / Organization is required before beginning the exam.');
      return;
    }

    setGateError(null);
    setIsStartingExam(true);
    try {
      const res = await fetch('/api/certification/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: effectiveEmail,
          recipientName: cleanName,
          location: cleanLocation,
          company: cleanCompany,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Unable to start examination attempt.');
      }

      const newExam: ExamState = {
        attemptId: data.attemptId,
        attemptNumber: data.attemptNumber,
        email: effectiveEmail,
        recipientName: cleanName,
        location: cleanLocation,
        company: cleanCompany,
        startedAt: data.startedAt,
        questions: data.questions,
        answers: {},
        flagged: {},
        currentIndex: 0,
      };

      setExamState(newExam);
      setSyncStatus('synced');
      setView('exam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to launch examination';
      setGateError(msg);
      if (user?.email) handleCheckStatus(user.email);
    } finally {
      setIsStartingExam(false);
    }
  };

  // Submit and grade active exam
  const handleSubmitExam = async (isAutoSubmitted = false) => {
    if (!examState) return;

    setIsSubmittingExam(true);
    setShowSubmitConfirm(false);

    try {
      const res = await fetch('/api/certification/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attemptId: examState.attemptId,
          email: examState.email,
          answers: examState.answers,
          recipientName: examState.recipientName,
          location: examState.location,
          company: examState.company,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit examination for grading.');
      }

      clearExamStorage(examState.attemptId);
      setSubmissionResult(data);
      setView('result');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      console.error('Submission error:', err);
      // If submission failed due to network disruption, keep exam state intact and show retry modal!
      setNetworkErrorModal(true);
    } finally {
      setIsSubmittingExam(false);
    }
  };

  // Active question and navigation helpers
  const currentQuestion = examState?.questions[examState.currentIndex];

  const answeredCount = useMemo(() => {
    if (!examState) return 0;
    return Object.keys(examState.answers).length;
  }, [examState]);

  const totalExamQuestions = examState?.questions.length || 40;

  const sectionProgress = useMemo(() => {
    if (!examState) {
      return {
        literacy: { answered: 0, total: 10 },
        automation: { answered: 0, total: 10 },
        privacy: { answered: 0, total: 10 },
        growth: { answered: 0, total: 10 },
      };
    }
    const counts: Record<CertSection, { answered: number; total: number }> = {
      literacy: { answered: 0, total: 0 },
      automation: { answered: 0, total: 0 },
      privacy: { answered: 0, total: 0 },
      growth: { answered: 0, total: 0 },
    };

    examState.questions.forEach((q) => {
      counts[q.section].total += 1;
      if (examState.answers[q.id]) {
        counts[q.section].answered += 1;
      }
    });

    return counts;
  }, [examState]);

  const handleSelectOption = (optionId: string) => {
    if (!examState || !currentQuestion) return;
    setExamState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [currentQuestion.id]: optionId,
        },
      };
    });
  };

  const handleToggleFlag = () => {
    if (!examState || !currentQuestion) return;
    setExamState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        flagged: {
          ...prev.flagged,
          [currentQuestion.id]: !prev.flagged[currentQuestion.id],
        },
      };
    });
  };

  const handleJumpToQuestion = (index: number) => {
    if (!examState) return;
    if (index >= 0 && index < examState.questions.length) {
      setExamState((prev) => (prev ? { ...prev, currentIndex: index } : null));
      const targetQ = examState.questions[index];
      if (targetQ) setSelectedSectionTab(targetQ.section);
    }
  };

  // Filter questions for the question navigator matrix
  const filteredIndices = useMemo(() => {
    if (!examState) return [];
    return examState.questions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q }) => {
        if (paletteFilter === 'unanswered') return !examState.answers[q.id];
        if (paletteFilter === 'flagged') return Boolean(examState.flagged[q.id]);
        return true;
      })
      .map(({ idx }) => idx);
  }, [examState, paletteFilter]);

  // Recommended lessons for results screen (weakest track)
  const recommendedLessons = useMemo(() => {
    if (!submissionResult?.grading?.weakestSection) return [];
    const secKey = submissionResult.grading.weakestSection as CategoryKey;
    return LESSONS.filter((l) => l.categoryKey === secKey).slice(0, 3);
  }, [submissionResult]);

  // =========================================================================
  // VIEW 1: GATE / SIGN-UP & VERIFICATION SCREEN
  // =========================================================================
  if (view === 'gate') {
    const isMissingRequiredProfile = isAuthenticatedCandidate && (!candidateLocation || !candidateCompany);

    return (
      <div className="py-10 px-4 sm:px-6 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-300">
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-semibold tracking-wide">
            <Award className="w-4 h-4 text-indigo-600" />
            Official Credential Program
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Jnachi Beginner Certification
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            The formal industry benchmark verifying foundational AI competency. 40 multiple-choice evaluations across 4 core curriculum tracks, a 45-minute timer, and an 80% passing mark.
          </p>
        </div>

        {/* 4 Core Track Cards (10 Questions Each) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERT_SECTIONS.map((sec, idx) => (
            <div
              key={sec.id}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-indigo-300 transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Track 0{idx + 1}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                  10 Questions
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base">{sec.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{sec.description}</p>
            </div>
          ))}
        </div>

        {/* Exam Specifications & Resilience Banner */}
        <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Examination Parameters & Zero-Data-Loss Protection
            </h3>
            <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed list-disc list-inside">
              <li><strong className="text-white">40 Questions Total:</strong> 10 randomly drawn per track from our verified 200-question pool.</li>
              <li><strong className="text-white">45-Minute Timer:</strong> Standard countdown with auto-submission on expiry.</li>
              <li><strong className="text-white">80% Passing Standard:</strong> Requires at least 32 correct answers to earn certification.</li>
              <li><strong className="text-white">Network Drop Resilience:</strong> Continuous local state caching and background Firestore sync so your progress is never lost even if your connection drops.</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-2.5 self-stretch md:self-auto shrink-0">
            <div className="text-center p-3 bg-white/10 rounded-2xl border border-white/10 min-w-[95px]">
              <div className="text-2xl font-black text-white">40</div>
              <div className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Questions</div>
            </div>
            <div className="text-center p-3 bg-white/10 rounded-2xl border border-white/10 min-w-[95px]">
              <div className="text-2xl font-black text-amber-300">45m</div>
              <div className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Time Limit</div>
            </div>
            <div className="text-center p-3 bg-white/10 rounded-2xl border border-white/10 min-w-[95px]">
              <div className="text-2xl font-black text-emerald-400">80%</div>
              <div className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider">Pass Mark</div>
            </div>
          </div>
        </div>

        {/* CANDIDATE PORTAL SIGN-UP & VERIFICATION GATE */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-10 space-y-8">
          {!isAuthenticatedCandidate ? (
            /* STEP 1: AUTHENTICATION GATE - User must sign up on our portal beforehand */
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <UserPlus className="w-5 h-5 text-indigo-600" />
                    Portal Registration Required Before Exam
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    To maintain official credential verification records, candidates must register with their location and current company.
                  </p>
                </div>

                <div className="inline-flex p-1 bg-slate-100 rounded-xl text-xs font-bold text-slate-600 self-start">
                  <button
                    type="button"
                    onClick={() => { setAuthMode('signup'); setAuthError(null); }}
                    className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                      authMode === 'signup' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    onClick={() => { setAuthMode('signin'); setAuthError(null); }}
                    className={`px-3.5 py-1.5 rounded-lg transition-colors ${
                      authMode === 'signin' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                    }`}
                  >
                    Sign In
                  </button>
                </div>
              </div>

              {/* Fast 1-Click Google Verification */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-700 shadow-xs">
                    G
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">Instant 1-Click Verification with Google</h3>
                    <p className="text-[11px] text-slate-500">Sign in securely using your pre-authorized Google Account</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleGoogleAuth}
                  disabled={isSubmittingAuth}
                  className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  {isSubmittingAuth ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <LogIn className="w-3.5 h-3.5 text-indigo-600" />}
                  Continue with Google
                </button>
              </div>

              <div className="relative flex py-1 items-center">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink mx-4 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                  Or Register Candidate Details
                </span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              {authError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              {authMode === 'signup' ? (
                /* Portal Sign Up Form */
                <form onSubmit={handlePortalSignUp} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <UserIcon className="w-3.5 h-3.5 text-indigo-600" />
                        Full Legal Name (for Certificate)
                      </label>
                      <input
                        type="text"
                        required
                        value={authName}
                        onChange={(e) => setAuthName(e.target.value)}
                        placeholder="e.g. Dr. Jane Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-indigo-600" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        placeholder="jane@organization.org"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                        Location (City, Country)
                      </label>
                      <input
                        type="text"
                        required
                        value={authLocation}
                        onChange={(e) => setAuthLocation(e.target.value)}
                        placeholder="e.g. Nairobi, Kenya or London, UK"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-indigo-600" />
                        Current Company / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={authCompany}
                        onChange={(e) => setAuthCompany(e.target.value)}
                        placeholder="e.g. Acme Corp or Independent"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                      />
                    </div>

                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Key className="w-3.5 h-3.5 text-indigo-600" />
                        Create Portal Password
                      </label>
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        placeholder="Minimum 6 characters"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                    <button
                      type="submit"
                      disabled={isSubmittingAuth}
                      className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-xs transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isSubmittingAuth ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Registering Candidate...
                        </>
                      ) : (
                        <>
                          <UserPlus className="w-4 h-4" />
                          Register & Unlock Examination
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* Portal Sign In Form */
                <form onSubmit={handlePortalSignIn} className="space-y-4 max-w-md">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      required
                      value={authEmail}
                      onChange={(e) => setAuthEmail(e.target.value)}
                      placeholder="you@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Password</label>
                    <input
                      type="password"
                      required
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      placeholder="Your portal password"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    />
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmittingAuth}
                      className="px-6 py-2.5 bg-slate-900 hover:bg-black text-white font-bold text-sm rounded-xl shadow-xs transition-all disabled:opacity-50 flex items-center gap-2"
                    >
                      {isSubmittingAuth ? <RefreshCw className="w-4 h-4 animate-spin" /> : <LogIn className="w-4 h-4" />}
                      Sign In to Portal
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* STEP 2: AUTHENTICATED CANDIDATE PROFILE & ELIGIBILITY BRIEFING */
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 font-black text-lg flex items-center justify-center">
                    {(effectiveCandidateName || effectiveEmail || 'U').charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      Verified Candidate: {effectiveCandidateName || effectiveEmail.split('@')[0]}
                    </h2>
                    <p className="text-xs text-slate-500">{effectiveEmail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start">
                  <div className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Portal Account Active
                  </div>
                  <button
                    type="button"
                    onClick={handleCandidateSignOut}
                    className="text-xs font-semibold text-slate-500 hover:text-rose-600 px-2.5 py-1 rounded-lg border border-slate-200 hover:border-rose-200 transition-colors"
                  >
                    Switch Account
                  </button>
                </div>
              </div>

              {/* Candidate Location & Company Fields */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-indigo-600" />
                    Required Candidate Profile Data
                  </h3>
                  {isMissingRequiredProfile && (
                    <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      Required Before Starting
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Certificate Full Name
                    </label>
                    <input
                      type="text"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      placeholder="Legal Name"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Location (City, Country) *
                    </label>
                    <input
                      type="text"
                      value={candidateLocation}
                      onChange={(e) => setCandidateLocation(e.target.value)}
                      placeholder="e.g. Nairobi, Kenya"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Current Company / Org *
                    </label>
                    <input
                      type="text"
                      value={candidateCompany}
                      onChange={(e) => setCandidateCompany(e.target.value)}
                      placeholder="e.g. Acme Corp"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-900 font-medium focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={handleSaveProfileDetails}
                    disabled={isUpdatingProfile || !candidateLocation.trim() || !candidateCompany.trim()}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 disabled:opacity-40"
                  >
                    {isUpdatingProfile ? 'Saving...' : 'Save Profile Changes'}
                  </button>
                </div>
              </div>

              {gateError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{gateError}</span>
                </div>
              )}

              {/* Status Outcome Cards */}
              {statusResponse && (
                <div className="space-y-4">
                  {/* PASSED */}
                  {statusResponse.passed && (
                    <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-emerald-950">
                              Jnachi Beginner Certified
                            </h3>
                            <p className="text-xs text-emerald-800">
                              Certificate ID: {statusResponse.latestCertificateId || 'VERIFIED'}
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setIsCertModalOpen(true)}
                          className="px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-colors flex items-center gap-1.5"
                        >
                          <Download className="w-3.5 h-3.5" />
                          View Diploma
                        </button>
                      </div>
                    </div>
                  )}

                  {/* LOCKED */}
                  {statusResponse.isLocked && (
                    <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center">
                          <Lock className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-rose-950">
                            Maximum Attempts Exhausted
                          </h3>
                          <p className="text-xs text-rose-700">
                            You&apos;ve used all 3 lifetime attempts. Contact support to request an attempt reset.
                          </p>
                        </div>
                      </div>
                      <div className="pt-2">
                        <Link
                          href="/lessons"
                          className="px-4 py-2 text-xs font-bold rounded-xl bg-rose-700 hover:bg-rose-800 text-white transition-colors inline-flex items-center gap-1.5"
                        >
                          <BookOpen className="w-4 h-4" />
                          Review Lesson Tracks
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* COOLDOWN */}
                  {statusResponse.cooldownActive && (
                    <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-amber-950">
                            24-Hour Cooldown In Effect
                          </h3>
                          <p className="text-xs text-amber-800">
                            Attempts used: {statusResponse.totalAttempts} of 3 • {statusResponse.attemptsRemaining} remaining
                          </p>
                        </div>
                      </div>
                      <div className="p-4 bg-white/90 rounded-xl border border-amber-200 flex items-center justify-between">
                        <span className="text-xs font-semibold text-amber-900">Next attempt unlocks in:</span>
                        <span className="text-sm sm:text-base font-bold font-mono text-amber-700 px-3 py-1 bg-amber-100 rounded-lg">
                          {cooldownRemaining?.text || 'Calculating...'}
                        </span>
                      </div>
                      <div className="pt-1">
                        <Link
                          href="/lessons"
                          className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-700 hover:bg-amber-800 text-white transition-colors inline-flex items-center gap-1.5"
                        >
                          <BookOpen className="w-4 h-4" />
                          Study Lessons While Waiting
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* ELIGIBLE */}
                  {statusResponse.eligible && (
                    <div className="p-6 rounded-2xl bg-indigo-50 border border-indigo-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                          <h3 className="text-sm font-bold text-indigo-950">Candidate Verified & Ready</h3>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-indigo-600 text-white">
                          Attempt {(statusResponse.totalAttempts || 0) + 1} of 3
                        </span>
                      </div>
                      <p className="text-xs text-indigo-800 leading-relaxed">
                        You have <strong>{statusResponse.attemptsRemaining} attempt{statusResponse.attemptsRemaining === 1 ? '' : 's'} remaining</strong>. The exam contains <strong>40 questions</strong> (10 per track) on a <strong>45-minute timer</strong> with an <strong>80% pass mark (32/40)</strong>. Your responses are auto-saved locally and to cloud continuously.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Action Launch Area */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-500">
                  {candidateLocation && candidateCompany ? (
                    <span className="text-emerald-700 font-medium">
                      ✓ Profile details verified ({candidateLocation} • {candidateCompany})
                    </span>
                  ) : (
                    <span className="text-amber-700 font-medium">
                      * Please complete your Location and Current Company above to unlock the exam.
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {statusResponse?.eligible && (
                    <button
                      type="button"
                      onClick={handleStartExam}
                      disabled={isStartingExam || isMissingRequiredProfile}
                      className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-extrabold rounded-xl shadow-md shadow-indigo-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {isStartingExam ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Drawing 40 Questions...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-amber-300" />
                          Start 40-Question Exam (45 Minutes)
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Certificate Modal if already passed */}
        {statusResponse?.passed && (
          <BeginnerCertificateModal
            isOpen={isCertModalOpen}
            onClose={() => setIsCertModalOpen(false)}
            data={{
              recipientName: candidateName || statusResponse.recipientName || 'Candidate',
              location: candidateLocation || statusResponse.location,
              company: candidateCompany || statusResponse.company,
              overallScore: statusResponse.highestScore || 35,
              overallPercentage: Math.round(((statusResponse.highestScore || 35) / 40) * 100),
              sectionScores: {
                literacy: { correct: 9, total: 10, percentage: 90 },
                automation: { correct: 8, total: 10, percentage: 80 },
                privacy: { correct: 9, total: 10, percentage: 90 },
                growth: { correct: 8, total: 10, percentage: 80 },
              },
              issuedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              certificateId: statusResponse.latestCertificateId || 'JNACHI-CERT-2026-VERIFIED',
            }}
          />
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: ACTIVE 40-QUESTION EXAMINATION RUNNER (45-MIN TIMER & RESILIENCE)
  // =========================================================================
  if (view === 'exam' && examState && currentQuestion) {
    const isAnswered = Boolean(examState.answers[currentQuestion.id]);
    const isFlagged = Boolean(examState.flagged[currentQuestion.id]);
    const unansweredCount = totalExamQuestions - answeredCount;

    return (
      <div className="min-h-screen bg-slate-50/70 pb-20">
        {/* Connection Interruption Warning Banner if offline */}
        {!isOnline && (
          <div className="bg-amber-500 text-slate-950 px-4 py-2.5 text-xs font-bold flex items-center justify-center gap-2 shadow-xs">
            <WifiOff className="w-4 h-4 shrink-0" />
            <span>Connection dropped! All answers are safely cached locally on your device. We will automatically sync when connection restores.</span>
          </div>
        )}

        {/* Sticky Exam Bar */}
        <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                  Jnachi Beginner Certification Exam
                </h1>
                <p className="text-[11px] text-slate-500 truncate">
                  Candidate: {examState.recipientName} • Attempt {examState.attemptNumber} of 3
                </p>
              </div>
            </div>

            {/* Middle: 45-Minute Autoritative Countdown Timer */}
            <div className="flex items-center gap-2">
              <div
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-xl border font-mono font-bold text-xs sm:text-sm shadow-xs transition-colors ${
                  examTimer.isUrgent
                    ? 'bg-rose-50 border-rose-300 text-rose-700 animate-pulse'
                    : examTimer.isLow
                    ? 'bg-amber-50 border-amber-300 text-amber-800'
                    : 'bg-slate-100 border-slate-200 text-slate-800'
                }`}
              >
                <Clock className={`w-4 h-4 ${examTimer.isUrgent ? 'text-rose-600' : 'text-slate-600'}`} />
                <span>{examTimer.text}</span>
              </div>
            </div>

            {/* Right: Progress, Sync Status, Submit */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Cloud Sync Status Indicator */}
              <div className="hidden md:flex items-center gap-1.5 text-[11px] font-medium text-slate-500 px-2.5 py-1 bg-slate-50 rounded-lg border border-slate-200">
                {syncStatus === 'synced' && (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Cloud Synced</span>
                  </>
                )}
                {syncStatus === 'syncing' && (
                  <>
                    <RefreshCw className="w-3 h-3 text-indigo-500 animate-spin" />
                    <span>Syncing...</span>
                  </>
                )}
                {syncStatus === 'offline_saved' && (
                  <>
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Saved Locally</span>
                  </>
                )}
              </div>

              {/* Progress Count */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">
                <span>{answeredCount} / 40</span>
                <div className="w-12 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-300"
                    style={{ width: `${(answeredCount / 40) * 100}%` }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowSubmitConfirm(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
              >
                Submit Exam
              </button>
            </div>
          </div>

          {/* 4 Track Tabs (10 questions per track) */}
          <div className="max-w-6xl mx-auto px-4 border-t border-slate-100 flex overflow-x-auto no-scrollbar">
            {CERT_SECTIONS.map((sec, sIdx) => {
              const prog = sectionProgress[sec.id];
              const isCurrentSection = currentQuestion.section === sec.id;

              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => {
                    setSelectedSectionTab(sec.id);
                    const firstIdx = examState.questions.findIndex((q) => q.section === sec.id);
                    if (firstIdx !== -1) handleJumpToQuestion(firstIdx);
                  }}
                  className={`px-4 py-2.5 text-xs font-bold border-b-2 whitespace-nowrap flex items-center gap-2 transition-colors ${
                    isCurrentSection
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{sIdx + 1}. {sec.title}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                      prog.answered === 10
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {prog.answered}/10
                  </span>
                </button>
              );
            })}
          </div>
        </header>

        {/* Main Examination Layout */}
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Active Question Workspace (8 cols) */}
          <main className="lg:col-span-8 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              {/* Question Header & Flag Toggle */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold">
                    Question {examState.currentIndex + 1} of 40
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {CERT_SECTION_LABELS[currentQuestion.section]}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleToggleFlag}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors ${
                    isFlagged
                      ? 'bg-amber-100 text-amber-800 border border-amber-300'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                  {isFlagged ? 'Flagged for Review' : 'Flag Question'}
                </button>
              </div>

              {/* Question Prompt */}
              <div className="py-2">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                  {currentQuestion.prompt}
                </h2>
              </div>

              {/* MCQ Options (A, B, C, D) */}
              <div className="space-y-3 pt-2">
                {currentQuestion.options.map((opt) => {
                  const isSelected = examState.answers[currentQuestion.id] === opt.id;

                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-start gap-4 transition-all ${
                        isSelected
                          ? 'bg-indigo-50/70 border-indigo-600 ring-2 ring-indigo-500/20 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 uppercase transition-colors ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-100 text-slate-700 border border-slate-300'
                        }`}
                      >
                        {opt.id}
                      </div>
                      <span className={`text-sm sm:text-base leading-relaxed ${
                        isSelected ? 'font-semibold text-indigo-950' : 'text-slate-800'
                      }`}>
                        {opt.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Controls (Prev / Next) */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => handleJumpToQuestion(examState.currentIndex - 1)}
                  disabled={examState.currentIndex === 0}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white flex items-center gap-1.5 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="text-xs text-slate-400 font-mono">
                  {examState.currentIndex + 1} / 40
                </div>

                {examState.currentIndex < 39 ? (
                  <button
                    type="button"
                    onClick={() => handleJumpToQuestion(examState.currentIndex + 1)}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    Next Question
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowSubmitConfirm(true)}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    Review & Submit
                    <Check className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </main>

          {/* Right Column: Question Navigator Palette (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Question Palette
                </h3>
                <span className="text-xs font-semibold text-slate-500">
                  {answeredCount} of 40 Answered
                </span>
              </div>

              {/* Filter Tabs */}
              <div className="flex gap-1 p-1 bg-slate-100 rounded-xl text-[11px] font-bold text-slate-600">
                <button
                  type="button"
                  onClick={() => setPaletteFilter('all')}
                  className={`flex-1 py-1 rounded-lg transition-colors ${
                    paletteFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                  }`}
                >
                  All (40)
                </button>
                <button
                  type="button"
                  onClick={() => setPaletteFilter('unanswered')}
                  className={`flex-1 py-1 rounded-lg transition-colors ${
                    paletteFilter === 'unanswered' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                  }`}
                >
                  Unanswered ({unansweredCount})
                </button>
                <button
                  type="button"
                  onClick={() => setPaletteFilter('flagged')}
                  className={`flex-1 py-1 rounded-lg transition-colors ${
                    paletteFilter === 'flagged' ? 'bg-white text-slate-900 shadow-xs' : 'hover:text-slate-900'
                  }`}
                >
                  Flagged ({Object.values(examState.flagged).filter(Boolean).length})
                </button>
              </div>

              {/* 40-Question Matrix */}
              <div className="max-h-[360px] overflow-y-auto pr-1">
                <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2">
                  {filteredIndices.map((qIdx) => {
                    const q = examState.questions[qIdx];
                    const isAns = Boolean(examState.answers[q.id]);
                    const isFlag = Boolean(examState.flagged[q.id]);
                    const isCurr = examState.currentIndex === qIdx;

                    return (
                      <button
                        key={q.id}
                        type="button"
                        onClick={() => handleJumpToQuestion(qIdx)}
                        className={`relative h-9 rounded-lg text-xs font-bold flex items-center justify-center transition-all ${
                          isCurr
                            ? 'ring-2 ring-indigo-600 ring-offset-2 bg-indigo-600 text-white'
                            : isAns
                            ? 'bg-indigo-100 text-indigo-900 border border-indigo-200 hover:bg-indigo-200'
                            : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {qIdx + 1}
                        {isFlag && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-500 ring-1 ring-white" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Palette Legend */}
              <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-indigo-100 border border-indigo-200" />
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300" />
                  <span>Unanswered</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-amber-400" />
                  <span>Flagged</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded bg-indigo-600" />
                  <span>Active</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Time Expired Notice */}
        {timeExpiredAlert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-4 text-center">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 mx-auto flex items-center justify-center">
                <Clock className="w-6 h-6 animate-pulse" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">45-Minute Time Limit Reached</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your 45-minute examination time limit has ended. All your recorded answers have been automatically saved and submitted for server grading.
              </p>
              <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-indigo-600">
                <RefreshCw className="w-4 h-4 animate-spin" />
                Processing official results...
              </div>
            </div>
          </div>
        )}

        {/* Network Resilience Retry Modal if submission encountered connection drop */}
        {networkErrorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <WifiOff className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Connection Interruption</h3>
                  <p className="text-xs text-slate-500">Your answers are 100% safe locally</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A network drop prevented reaching our grading server. All 40 questions and your selected choices are securely stored in your browser. Please check your connection and click below to complete your submission.
              </p>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setNetworkErrorModal(false)}
                  className="flex-1 py-2.5 border border-slate-200 text-xs font-bold rounded-xl hover:bg-slate-50"
                >
                  Review Answers
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setNetworkErrorModal(false);
                    handleSubmitExam();
                  }}
                  disabled={isSubmittingExam}
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs flex items-center justify-center gap-1.5"
                >
                  {isSubmittingExam ? <RefreshCw className="w-4 h-4 animate-spin" /> : 'Retry Submission Now'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Normal Submit Confirmation Modal */}
        {showSubmitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  unansweredCount > 0 ? 'bg-amber-100 text-amber-700' : 'bg-indigo-100 text-indigo-700'
                }`}>
                  {unansweredCount > 0 ? <AlertTriangle className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {unansweredCount > 0 ? 'Incomplete Exam Warning' : 'Ready to Submit Exam?'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Candidate: {examState.recipientName} • Time Left: {examTimer.text}
                  </p>
                </div>
              </div>

              {unansweredCount > 0 ? (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
                  You have <strong>{unansweredCount} unanswered question{unansweredCount === 1 ? '' : 's'}</strong> out of 40. Any unanswered questions will receive 0 points.
                </div>
              ) : (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  You have answered all 40 questions across all 4 tracks. Once submitted, your examination will be graded server-side against our 80% passing standard.
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitConfirm(false)}
                  disabled={isSubmittingExam}
                  className="flex-1 py-2.5 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  Return to Exam
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmitExam()}
                  disabled={isSubmittingExam}
                  className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors disabled:opacity-50 flex items-center justify-center gap-1.5"
                >
                  {isSubmittingExam ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Grading...
                    </>
                  ) : (
                    'Confirm & Submit'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: RESULTS SCREEN (PASSED OR FAILED WITH 80% BENCHMARK)
  // =========================================================================
  if (view === 'result' && submissionResult) {
    const passed = submissionResult.grading.passed;
    const score = submissionResult.grading.overallScore;
    const percentage = submissionResult.grading.overallPercentage;
    const certId = submissionResult.certificateId || 'JNACHI-CERT-2026-XXXX-XXXX';
    const sectionScores = submissionResult.grading.sectionScores;

    const handleCopyId = async () => {
      try {
        await navigator.clipboard.writeText(certId);
        setCopiedCertId(true);
        setTimeout(() => setCopiedCertId(false), 2500);
      } catch {
        // Fallback
      }
    };

    return (
      <div className="py-10 px-4 sm:px-6 max-w-4xl mx-auto space-y-10 animate-in fade-in duration-300">
        {/* PASSED STATE (>= 80%, i.e. 32/40) */}
        {passed ? (
          <div className="space-y-8">
            {/* Top Celebration Card */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-indigo-900 to-slate-950 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Credential Conferred
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                  Jnachi Beginner Certified
                </h1>
                <p className="text-indigo-200 text-sm sm:text-base max-w-xl mx-auto">
                  Congratulations, {submissionResult.recipientName}! You have successfully demonstrated foundational mastery across all 4 tracks with {percentage}% (Passed with 80%+ standard).
                </p>
              </div>

              {/* Big Score Box */}
              <div className="inline-flex flex-col items-center justify-center p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 min-w-[200px]">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">
                  {percentage}%
                </span>
                <span className="text-xs text-indigo-200 uppercase tracking-wider font-semibold mt-1">
                  {score} of 40 Correct (Needed 32)
                </span>
              </div>

              {/* Verification ID Pill */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="text-xs text-indigo-300 font-medium">Verification ID:</span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 rounded-xl border border-white/10 font-mono text-xs sm:text-sm text-amber-300">
                  <span>{certId}</span>
                  <button
                    onClick={handleCopyId}
                    className="hover:text-white transition-colors"
                    title="Copy Certificate ID"
                  >
                    {copiedCertId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Main Diploma CTA Button */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setIsCertModalOpen(true)}
                  className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-slate-900" />
                  View & Download Official Diploma
                </button>
                <Link
                  href="/lessons"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-colors"
                >
                  Explore Lessons Hub
                </Link>
              </div>
            </div>

            {/* Section Breakdown Grid */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider">
                Competency Breakdown by Track (10 Questions Each)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERT_SECTIONS.map((sec) => {
                  const sData = sectionScores[sec.id];
                  return (
                    <div
                      key={sec.id}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-slate-900">{sec.title}</h3>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                          {sData.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 rounded-full"
                          style={{ width: `${sData.percentage}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Score: {sData.correct} / {sData.total} correct</span>
                        <span>Track Threshold Met ✓</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* NOT PASSED STATE (< 80%, i.e. < 32/40) */
          <div className="space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    Not Certified Yet
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Required Pass Mark: 80% (32/40)
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Candidate: {submissionResult.recipientName} • Attempt {submissionResult.attemptNumber} of 3
                  </p>
                </div>

                <div className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-200 min-w-[140px]">
                  <div className="text-3xl font-black text-slate-900">{percentage}%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {score} / 40 (Needed 32)
                  </div>
                </div>
              </div>

              {/* Cooldown & Attempt Allowance Notice */}
              {submissionResult.attemptsRemaining > 0 ? (
                <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-amber-950 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-700" />
                      24-Hour Cooldown In Effect
                    </h3>
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-200/80 text-amber-900">
                      {submissionResult.attemptsRemaining} Attempt{submissionResult.attemptsRemaining === 1 ? '' : 's'} Remaining
                    </span>
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    To give you time to revise before retaking the exam, a 24-hour reflection interval is active. Your next attempt unlocks in:
                  </p>
                  <div className="text-base font-bold font-mono text-amber-900 pt-1">
                    {cooldownRemaining?.text || '24 hours from submission'}
                  </div>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                  <h3 className="text-sm font-bold text-rose-950 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-rose-600" />
                    All 3 Attempts Completed
                  </h3>
                  <p className="text-xs text-rose-800 leading-relaxed">
                    You&apos;ve used all 3 attempts. Focus on our comprehensive lessons below to build deeper mastery.
                  </p>
                </div>
              )}

              {/* Detailed Track Breakdown */}
              <div className="space-y-4 pt-2">
                <h2 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Detailed Track Performance (10 Questions Each)
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CERT_SECTIONS.map((sec) => {
                    const sData = sectionScores[sec.id];
                    const isWeak = submissionResult.grading.weakestSection === sec.id;

                    return (
                      <div
                        key={sec.id}
                        className={`p-4 rounded-xl border space-y-2 ${
                          isWeak
                            ? 'bg-amber-50/50 border-amber-300 ring-1 ring-amber-400/20'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-800">{sec.title}</span>
                          <span className={`text-xs font-bold ${
                            sData.percentage >= 80 ? 'text-emerald-600' : 'text-amber-700'
                          }`}>
                            {sData.correct} / {sData.total} ({sData.percentage}%)
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              sData.percentage >= 80 ? 'bg-emerald-600' : 'bg-amber-500'
                            }`}
                            style={{ width: `${sData.percentage}%` }}
                          />
                        </div>
                        {isWeak && (
                          <div className="text-[11px] font-semibold text-amber-800 flex items-center gap-1">
                            <span>Primary focus track for review</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Targeted Lesson Recommendations */}
            {recommendedLessons.length > 0 && (
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5" />
                    Targeted Study Plan
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 mt-1">
                    Recommended Lessons for {CERT_SECTION_LABELS[submissionResult.grading.weakestSection]}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Study these core lessons before starting your next attempt to bridge the score gap.
                  </p>
                </div>

                <div className="space-y-3">
                  {recommendedLessons.map((lesson) => (
                    <Link
                      key={lesson.id}
                      href={`/lessons/${lesson.slug}`}
                      className="p-4 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all flex items-center justify-between gap-4 group"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-indigo-600 uppercase">
                            Lesson 0{lesson.lessonNumber}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-[11px] text-slate-500">{lesson.readTime}</span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                          {lesson.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-1">{lesson.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  ))}
                </div>

                <div className="pt-2 flex justify-between items-center border-t border-slate-100 text-xs">
                  <span className="text-slate-500">17 lessons available in the learning hub</span>
                  <Link href="/lessons" className="font-bold text-indigo-600 hover:underline">
                    View All Lessons →
                  </Link>
                </div>
              </div>
            )}

            {/* Return Actions */}
            <div className="flex justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => {
                  setView('gate');
                  handleCheckStatus(submissionResult.email);
                }}
                className="px-6 py-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold shadow-xs transition-colors"
              >
                Return to Certification Portal
              </button>
              <Link
                href="/lessons"
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
              >
                Browse Learning Hub
              </Link>
            </div>
          </div>
        )}

        {/* Certificate Modal for Passed Result */}
        {passed && (
          <BeginnerCertificateModal
            isOpen={isCertModalOpen}
            onClose={() => setIsCertModalOpen(false)}
            data={{
              recipientName: submissionResult.recipientName,
              location: submissionResult.location,
              company: submissionResult.company,
              overallScore: score,
              overallPercentage: percentage,
              sectionScores,
              issuedDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
              certificateId: certId,
            }}
            onNameChange={(updatedName) => {
              setSubmissionResult((prev) => prev ? { ...prev, recipientName: updatedName } : null);
            }}
          />
        )}
      </div>
    );
  }

  return null;
}
