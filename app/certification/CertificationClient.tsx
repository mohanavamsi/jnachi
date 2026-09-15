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
  Zap,
  TrendingUp,
  Layers,
  Key,
  ShieldAlert,
  Maximize2,
  Minimize2,
  AlertOctagon,
  ExternalLink,
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
import { CertTier, CERT_TIERS, TIER_ORDER, CORE_TIER_ORDER, ROLE_TIER_ORDER, CertCategory } from '@/lib/certTypes';
import { LESSONS, CategoryKey } from '@/lib/lessonsData';
import BeginnerCertificateModal from '@/components/BeginnerCertificateModal';
import ExamSyllabusModal from '@/components/ExamSyllabusModal';
import RazorpayModal from '@/components/RazorpayModal';
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
  tier?: CertTier;
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
  strikes?: number; // Phase 2: Active security violations (0 - 3)
}

interface ExamSubmissionResult {
  attemptId: string;
  email: string;
  tier?: CertTier;
  tierTitle?: string;
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
  const [selectedTier, setSelectedTier] = useState<CertTier>('beginner');
  const [activeTrackTab, setActiveTrackTab] = useState<CertCategory>('core');

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

  // Phase 1: Security & Anti-Copy Protection State
  const [securityToast, setSecurityToast] = useState<string | null>(null);
  const securityToastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const triggerSecurityNotice = useCallback(
    (message: string = 'Copying, right-click, and text selection are disabled during the examination.') => {
      setSecurityToast(message);
      if (securityToastTimeoutRef.current) clearTimeout(securityToastTimeoutRef.current);
      securityToastTimeoutRef.current = setTimeout(() => {
        setSecurityToast(null);
      }, 3500);
    },
    []
  );

  // Result State
  const [submissionResult, setSubmissionResult] = useState<ExamSubmissionResult | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [isRazorpayModalOpen, setIsRazorpayModalOpen] = useState(false);
  const [copiedCertId, setCopiedCertId] = useState(false);

  // Active tier metadata
  const activeTierConfig = CERT_TIERS[selectedTier] || CERT_TIERS.beginner;

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

  // Phase 1 Security: Clipboard, Shortcut & Context Menu Lockdown
  useEffect(() => {
    if (view !== 'exam' || !examState) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // Intercept Copy (Ctrl/Cmd+C), Select All (Ctrl/Cmd+A), Cut (Ctrl/Cmd+X), View Source (Ctrl/Cmd+U), Print (Ctrl/Cmd+P), Save (Ctrl/Cmd+S)
      if (isCtrlOrCmd && ['c', 'a', 'x', 'u', 'p', 's'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        triggerSecurityNotice('Copying, printing, and keyboard shortcuts are disabled during the examination.');
        return false;
      }

      // Intercept DevTools shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C)
      if (e.key === 'F12' || (isCtrlOrCmd && e.shiftKey && ['i', 'j', 'c'].includes(key))) {
        e.preventDefault();
        e.stopPropagation();
        triggerSecurityNotice('Developer inspection tools are restricted during the examination.');
        return false;
      }
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      triggerSecurityNotice('Copying examination questions to clipboard is strictly prohibited.');
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      triggerSecurityNotice('Text modification is disabled during the examination.');
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerSecurityNotice('Right-click context menu is disabled during proctored exams.');
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    window.addEventListener('copy', handleCopy, { capture: true });
    window.addEventListener('cut', handleCut, { capture: true });
    window.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('selectstart', handleSelectStart, { capture: true });

    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true });
      window.removeEventListener('copy', handleCopy, { capture: true });
      window.removeEventListener('cut', handleCut, { capture: true });
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('selectstart', handleSelectStart, { capture: true });
    };
  }, [view, examState, triggerSecurityNotice]);

  // Phase 2: Tab-Switch & Focus Loss Proctoring State & Handlers
  const [strikeModal, setStrikeModal] = useState<{ strikeCount: number; reason: string } | null>(null);
  const lastViolationTimeRef = useRef<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const toggleFullscreen = useCallback(() => {
    if (typeof document === 'undefined') return;
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const registerSecurityViolation = useCallback(
    (reason: string = 'Left active examination window') => {
      if (view !== 'exam' || !examState || isSubmittingExam) return;

      // Debounce to prevent duplicate triggers (e.g. blur + visibilitychange within 1.5s)
      const nowMs = Date.now();
      if (nowMs - lastViolationTimeRef.current < 1500) return;
      lastViolationTimeRef.current = nowMs;

      const currentStrikes = (examState.strikes || 0) + 1;
      setExamState((prev) => (prev ? { ...prev, strikes: currentStrikes } : null));

      if (currentStrikes >= 3) {
        setStrikeModal({
          strikeCount: 3,
          reason: 'Maximum security violations (3/3) exceeded. Your examination has been automatically submitted for grading.',
        });
        setTimeout(() => {
          handleSubmitExam(true);
        }, 2800);
      } else {
        setStrikeModal({
          strikeCount: currentStrikes,
          reason,
        });
      }
    },
    [view, examState, isSubmittingExam]
  );

  // Phase 2 Focus & Visibility Change Listeners
  useEffect(() => {
    if (view !== 'exam' || !examState) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        registerSecurityViolation('Switched browser tabs or minimized examination window');
      }
    };

    const handleWindowBlur = () => {
      registerSecurityViolation('Left active examination window or switched focus');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [view, examState, registerSecurityViolation]);

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

      handleCheckStatus(email, selectedTier);
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
            handleCheckStatus(parsed.email, selectedTier);
          }
        }
      } catch {
        // ignore parse error
      }
    }
  }, [user, userProfile, selectedTier]);

  const effectiveEmail = (user?.email || candidateSessionEmail || '').trim().toLowerCase();
  const effectiveCandidateName = (candidateName || userProfile?.displayName || user?.displayName || (effectiveEmail ? effectiveEmail.split('@')[0] : '')).trim();
  const isAuthenticatedCandidate = Boolean(effectiveEmail);

  // Restore active attempt from localStorage / sessionStorage if present
  useEffect(() => {
    try {
      const allKeys = [...Object.keys(localStorage), ...Object.keys(sessionStorage)];
      const attemptKey = allKeys.find((k) => k.startsWith('jnachi_cert_attempt_'));

      if (attemptKey) {
        const raw = localStorage.getItem(attemptKey) || sessionStorage.getItem(attemptKey);
        if (raw) {
          const parsed = JSON.parse(raw) as ExamState;
          if (parsed && parsed.questions && parsed.questions.length > 0) {
            const elapsed = Date.now() - parsed.startedAt;
            if (elapsed > EXAM_DURATION_MS + 2 * 60 * 1000) {
              clearExamStorage(parsed.attemptId);
            } else {
              setExamState(parsed);
              if (parsed.tier) setSelectedTier(parsed.tier);
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
      isLow: totalSeconds <= 600 && totalSeconds > 180,
      isUrgent: totalSeconds <= 180 && totalSeconds > 0,
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
  const handleCheckStatus = async (targetEmail: string, tier: CertTier = selectedTier) => {
    const cleanEmail = targetEmail.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) return;

    setGateError(null);
    setIsCheckingStatus(true);
    try {
      const res = await fetch(`/api/certification/status?email=${encodeURIComponent(cleanEmail)}&tier=${encodeURIComponent(tier)}`);
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
    }

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

    await handleCheckStatus(cleanEmail, selectedTier);
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
      await handleCheckStatus(cleanEmail, selectedTier);
    } catch (err: unknown) {
      const isOpNotAllowed =
        (err as { code?: string })?.code === 'auth/operation-not-allowed' ||
        (err instanceof Error && err.message.includes('operation-not-allowed'));

      if (isOpNotAllowed) {
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
        await handleCheckStatus(cleanEmail, selectedTier);
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
        await handleCheckStatus(loggedUser.email, selectedTier);
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

  // Save updated candidate profile
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

  // Start Exam Attempt
  const handleStartExam = async (tierToLaunch: CertTier = selectedTier) => {
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
          tier: tierToLaunch,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Unable to start examination attempt.');
      }

      const newExam: ExamState = {
        attemptId: data.attemptId,
        tier: data.tier || tierToLaunch,
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
      setSelectedTier(data.tier || tierToLaunch);
      setSyncStatus('synced');
      setView('exam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to launch examination';
      setGateError(msg);
      if (effectiveEmail) handleCheckStatus(effectiveEmail, tierToLaunch);
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

  // Filter questions for the navigator matrix
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
  // VIEW 1: GATE / 4-TIER CERTIFICATION PORTAL
  // =========================================================================
  if (view === 'gate') {
    const isMissingRequiredProfile = isAuthenticatedCandidate && (!candidateLocation || !candidateCompany);

    return (
      <div className="py-10 px-4 sm:px-6 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-300">
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-900 text-xs font-bold tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Limited 30-Day Launch Event: 100% Free Examination Fees</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Jnachi Professional Certifications
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ten rigorous, proctored examinations designed to measure and certify applied AI capability—spanning the 4-tier Core Progression Ladder and 6 Specialized Role Tracks.
          </p>
        </div>

        {/* TRACK CATEGORY SELECTOR TABS */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600" />
                <span>Select Certification Track</span>
              </h2>
              <p className="text-xs text-slate-500">Choose between foundational engineering tiers or dedicated role certifications.</p>
            </div>

            <div className="flex p-1 bg-slate-200/80 rounded-2xl shrink-0 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => {
                  setActiveTrackTab('core');
                  if (!CORE_TIER_ORDER.includes(selectedTier)) {
                    setSelectedTier('beginner');
                    if (effectiveEmail) handleCheckStatus(effectiveEmail, 'beginner');
                  }
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTrackTab === 'core'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Core Ladder (Tiers 01 - 04)
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTrackTab('role');
                  if (!ROLE_TIER_ORDER.includes(selectedTier)) {
                    setSelectedTier('sales');
                    if (effectiveEmail) handleCheckStatus(effectiveEmail, 'sales');
                  }
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTrackTab === 'role'
                    ? 'bg-white text-indigo-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Role-Based Tracks (6 Roles)
              </button>
            </div>
          </div>

          {/* TIER CARDS GRID */}
          <div className={`grid gap-4 ${activeTrackTab === 'core' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
            {(activeTrackTab === 'core' ? CORE_TIER_ORDER : ROLE_TIER_ORDER).map((tierKey) => {
              const tier = CERT_TIERS[tierKey];
              const isSelected = selectedTier === tierKey;
              const tierProgress = statusResponse?.allTiersProgress?.[tierKey];
              const isPassed = tierProgress?.passed;

              return (
                <button
                  key={tierKey}
                  type="button"
                  onClick={() => {
                    setSelectedTier(tierKey);
                    if (effectiveEmail) handleCheckStatus(effectiveEmail, tierKey);
                  }}
                  className={`p-5 rounded-2xl text-left border-2 transition-all relative flex flex-col justify-between space-y-3 cursor-pointer ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/50 shadow-md ring-2 ring-indigo-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-full"
                        style={{
                          backgroundColor: tier.colorScheme.bgBadge,
                          color: tier.colorScheme.textBadge,
                        }}
                      >
                        {tier.category === 'core' ? `Tier 0${tier.levelNumber}` : (tier.roleName || 'Role Certified')}
                      </span>
                      {isPassed ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" /> Earned
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium">80% Standard</span>
                      )}
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-lg leading-snug">{tier.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{tier.shortDescription}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <span>40 Proctored Qs</span>
                    <span className="font-semibold text-slate-900">45 Mins</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE TIER SPOTLIGHT & CURRICULUM SYLLABUS */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: activeTierConfig.colorScheme.bgBadge,
                    color: activeTierConfig.colorScheme.textBadge,
                  }}
                >
                  Tier 0{activeTierConfig.levelNumber} Exam
                </span>
                <span className="text-xs text-slate-500 font-medium">• 80% Passing Standard</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{activeTierConfig.title}</h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">{activeTierConfig.fullDescription}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="text-center p-3 bg-slate-50 border border-slate-200 rounded-2xl min-w-[90px]">
                <div className="text-xl font-black text-slate-900">40</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Questions</div>
              </div>
              <div className="text-center p-3 bg-slate-50 border border-slate-200 rounded-2xl min-w-[90px]">
                <div className="text-xl font-black text-amber-600">45m</div>
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Duration</div>
              </div>
            </div>
          </div>

          {/* Key Topics Covered */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Core Competencies Assessed in {activeTierConfig.title}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {activeTierConfig.keyTopics.map((topic, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Syllabus & Study Guide CTA */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
            <div className="text-xs text-slate-500">
              Want to review the 4-track curriculum breakdown, assessed competencies, and preparation checklist?
            </div>
            <button
              type="button"
              onClick={() => setIsSyllabusModalOpen(true)}
              className="w-full sm:w-auto px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200 transition-colors flex items-center justify-center gap-2 shrink-0 shadow-2xs"
            >
              <BookOpen className="w-4 h-4" />
              View Exam Syllabus & Study Guide
            </button>
          </div>
        </div>

        {/* CANDIDATE PORTAL SIGN-UP & VERIFICATION GATE */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-6 sm:p-10 space-y-8">
          {!isAuthenticatedCandidate ? (
            /* STEP 1: AUTHENTICATION GATE */
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <UserPlus className="w-5 h-5 text-indigo-600" />
                    Portal Registration Required Before Exam
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Your full name, location, and organization are verified and printed directly on your official diploma.
                  </p>
                </div>
                <div className="flex bg-slate-100 p-1 rounded-xl shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('signup');
                      setAuthError(null);
                    }}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      authMode === 'signup' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Create Account
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode('signin');
                      setAuthError(null);
                    }}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      authMode === 'signin' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Sign In
                  </button>
                </div>
              </div>

              {authError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-800 flex items-center gap-2 animate-in fade-in">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{authError}</span>
                </div>
              )}

              {authMode === 'signup' ? (
                <form onSubmit={handlePortalSignUp} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Full Legal Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={authName}
                          onChange={(e) => setAuthName(e.target.value)}
                          placeholder="e.g. Alex Chen"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                      <p className="text-[11px] text-slate-400">Printed directly on your official diploma.</p>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          value={authEmail}
                          onChange={(e) => setAuthEmail(e.target.value)}
                          placeholder="alex@company.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                      <p className="text-[11px] text-slate-400">Used for attempt cooldowns & record retrieval.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Password <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="password"
                          required
                          minLength={6}
                          value={authPassword}
                          onChange={(e) => setAuthPassword(e.target.value)}
                          placeholder="At least 6 chars"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Location (City, Country) <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={authLocation}
                          onChange={(e) => setAuthLocation(e.target.value)}
                          placeholder="e.g. San Francisco, USA"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Organization / Company <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          value={authCompany}
                          onChange={(e) => setAuthCompany(e.target.value)}
                          placeholder="e.g. Anthropic / Independent"
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmittingAuth}
                      className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmittingAuth ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          Registering Candidate...
                        </>
                      ) : (
                        'Register & Continue to Exam'
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleGoogleAuth}
                      disabled={isSubmittingAuth}
                      className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                      Continue with Google
                    </button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handlePortalSignIn} className="space-y-4 max-w-md">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        placeholder="alex@company.com"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">Password</label>
                    <div className="relative">
                      <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        required
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmittingAuth}
                      className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                      {isSubmittingAuth ? 'Signing In...' : 'Sign In & Check Eligibility'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* STEP 2: VERIFIED CANDIDATE READY SCREEN */
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-extrabold text-slate-900 text-lg">{effectiveCandidateName}</h3>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        Verified Candidate
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      {effectiveEmail} • {candidateLocation || 'Location required'} • {candidateCompany || 'Company required'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCandidateSignOut}
                  className="text-xs font-semibold text-slate-500 hover:text-rose-600 transition-colors self-start sm:self-auto"
                >
                  Switch Account
                </button>
              </div>

              {/* Missing Details Warning */}
              {isMissingRequiredProfile && (
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    <span>Please provide Location and Company before starting {activeTierConfig.title}:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={candidateLocation}
                      onChange={(e) => setCandidateLocation(e.target.value)}
                      placeholder="Location (e.g. San Francisco, USA)"
                      className="px-3 py-2 bg-white border border-amber-200 rounded-xl text-xs"
                    />
                    <input
                      type="text"
                      value={candidateCompany}
                      onChange={(e) => setCandidateCompany(e.target.value)}
                      placeholder="Organization (e.g. Acme Corp)"
                      className="px-3 py-2 bg-white border border-amber-200 rounded-xl text-xs"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSaveProfileDetails}
                    disabled={isUpdatingProfile}
                    className="px-4 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-lg transition-colors"
                  >
                    {isUpdatingProfile ? 'Saving...' : 'Save Details'}
                  </button>
                </div>
              )}

              {/* Status Alert Banner */}
              {statusResponse && (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                      <span>{activeTierConfig.title} Status:</span>
                      {statusResponse.passed ? (
                        <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-bold">
                          Passed & Certified ✓
                        </span>
                      ) : statusResponse.cooldownActive ? (
                        <span className="text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full font-bold">
                          24-Hour Cooldown Active
                        </span>
                      ) : statusResponse.isLocked ? (
                        <span className="text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full font-bold">
                          3 Attempts Exhausted
                        </span>
                      ) : (
                        <span className="text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded-full font-bold">
                          Eligible to Launch
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">
                      Attempts Used: {statusResponse.totalAttempts} / 3 • Remaining: {statusResponse.attemptsRemaining}
                    </p>
                  </div>

                  {statusResponse.cooldownActive && cooldownRemaining && !cooldownRemaining.expired && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-100 text-amber-900 rounded-xl font-mono text-xs font-bold shrink-0">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>Next attempt in: {cooldownRemaining.text}</span>
                    </div>
                  )}
                </div>
              )}

              {gateError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-800 flex items-center gap-2 animate-in fade-in">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-rose-600" />
                  <span>{gateError}</span>
                </div>
              )}

              {/* Start Exam CTA Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleStartExam(selectedTier)}
                  disabled={
                    Boolean(
                      isStartingExam ||
                      isMissingRequiredProfile ||
                      (statusResponse && (!statusResponse.eligible || statusResponse.cooldownActive || statusResponse.isLocked))
                    )
                  }
                  className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isStartingExam ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Generating 40 Questions...
                    </>
                  ) : (
                    <>
                      <span>Begin {activeTierConfig.title} Exam</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-slate-400" />
                  <span>45m Countdown begins upon clicking. Zero-data-loss active.</span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsRazorpayModalOpen(true)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors shrink-0"
                >
                  Claim Voucher / Razorpay Checkout
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Exam Syllabus & Candidate Study Guide Modal */}
        <ExamSyllabusModal
          isOpen={isSyllabusModalOpen}
          onClose={() => setIsSyllabusModalOpen(false)}
          initialTier={selectedTier}
          onSelectTier={setSelectedTier}
        />

        {/* Razorpay Checkout & Voucher Modal */}
        <RazorpayModal
          isOpen={isRazorpayModalOpen}
          onClose={() => setIsRazorpayModalOpen(false)}
          initialTier={selectedTier}
          candidateName={effectiveCandidateName}
          candidateEmail={effectiveEmail}
          onPaymentSuccess={() => {
            if (effectiveEmail) handleCheckStatus(effectiveEmail, selectedTier);
          }}
        />
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: ACTIVE PROCTORED EXAM INTERFACE (40 QUESTIONS, 45 MINUTES)
  // =========================================================================
  if (view === 'exam' && examState) {
    const currentTier = examState.tier || selectedTier || 'beginner';
    const tierConfig = CERT_TIERS[currentTier] || CERT_TIERS.beginner;
    const isCurrentFlagged = Boolean(examState.flagged[currentQuestion?.id || '']);
    const unansweredCount = totalExamQuestions - answeredCount;

    return (
      <div
        className="min-h-screen bg-slate-100 flex flex-col exam-protected select-none"
        onContextMenu={(e) => {
          e.preventDefault();
          triggerSecurityNotice();
        }}
        onCopy={(e) => {
          e.preventDefault();
          triggerSecurityNotice('Copying examination questions is prohibited.');
        }}
        onCut={(e) => {
          e.preventDefault();
          triggerSecurityNotice();
        }}
        onDragStart={(e) => e.preventDefault()}
      >
        {/* Top Floating Exam Navbar */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-8 py-3.5 shadow-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            {/* Left Brand & Tier Badge */}
            <div className="flex items-center gap-3">
              <span
                className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shrink-0"
                style={{
                  backgroundColor: tierConfig.colorScheme.bgBadge,
                  color: tierConfig.colorScheme.textBadge,
                }}
              >
                {tierConfig.title}
              </span>
              <div className="hidden sm:block text-xs font-bold text-slate-700">
                Attempt #{examState.attemptNumber} • Candidate: {examState.recipientName}
              </div>
              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>Protected</span>
              </div>
              {/* Live Proctoring Strike Badge */}
              <div
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-colors ${
                  (examState.strikes || 0) === 0
                    ? 'bg-slate-50 border-slate-200 text-slate-600'
                    : (examState.strikes || 0) === 1
                    ? 'bg-amber-50 border-amber-300 text-amber-900'
                    : 'bg-rose-100 border-rose-300 text-rose-900 animate-pulse'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                <span>{examState.strikes || 0} / 3 Strikes</span>
              </div>
            </div>

            {/* Center 45-Minute Countdown Clock */}
            <div
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono font-bold text-sm border shadow-xs transition-colors ${
                examTimer.isUrgent
                  ? 'bg-rose-100 border-rose-300 text-rose-800 animate-pulse'
                  : examTimer.isLow
                  ? 'bg-amber-50 border-amber-300 text-amber-900'
                  : 'bg-slate-900 border-slate-800 text-white'
              }`}
            >
              <Clock className="w-4 h-4 shrink-0" />
              <span>{examTimer.text}</span>
            </div>

            {/* Right Progress & Submit Action */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span>
                  {answeredCount} / {totalExamQuestions} Answered
                </span>
                <div className="w-20 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                    style={{ width: `${(answeredCount / totalExamQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Fullscreen Toggle Button */}
              <button
                type="button"
                onClick={toggleFullscreen}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors shrink-0"
                title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
              >
                {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                <span className="text-[11px]">{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowSubmitConfirm(true)}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors shrink-0"
              >
                Submit Exam
              </button>
            </div>
          </div>
        </header>

        {/* Main Exam Workspace */}
        <main className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Active Question Canvas */}
          <div className="lg:col-span-8 space-y-6">
            {currentQuestion ? (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
                {/* Question Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-extrabold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md">
                      Question {examState.currentIndex + 1} of {totalExamQuestions}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-600">
                      {CERT_SECTION_LABELS[currentQuestion.section]}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleToggleFlag}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      isCurrentFlagged
                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                    <span>{isCurrentFlagged ? 'Flagged' : 'Flag for Review'}</span>
                  </button>
                </div>

                {/* Question Prompt */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                  {currentQuestion.prompt}
                </h2>

                {/* 4 Multiple Choice Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((opt) => {
                    const isSelected = examState.answers[currentQuestion.id] === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectOption(opt.id)}
                        className={`w-full p-4 sm:p-5 rounded-2xl text-left border-2 transition-all flex items-start gap-4 cursor-pointer ${
                          isSelected
                            ? 'border-indigo-600 bg-indigo-50/70 shadow-xs ring-2 ring-indigo-500/20'
                            : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                            isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {opt.id.toUpperCase()}
                        </span>
                        <span className="text-sm font-medium text-slate-800 leading-relaxed pt-0.5">
                          {opt.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom Stepper Navigation */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                  <button
                    type="button"
                    onClick={() => handleJumpToQuestion(examState.currentIndex - 1)}
                    disabled={examState.currentIndex === 0}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  <span className="text-xs font-bold text-slate-400">
                    {examState.currentIndex + 1} / {totalExamQuestions}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleJumpToQuestion(examState.currentIndex + 1)}
                    disabled={examState.currentIndex === totalExamQuestions - 1}
                    className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-xs"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          {/* Right Column: Question Navigator Matrix & Section Summary */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Question Navigator</h3>
                <span className="text-xs font-bold text-indigo-600">{answeredCount} / 40 Answered</span>
              </div>

              {/* Navigator Filter Tabs */}
              <div className="flex gap-1.5 bg-slate-100 p-1 rounded-xl text-[11px] font-bold">
                <button
                  type="button"
                  onClick={() => setPaletteFilter('all')}
                  className={`flex-1 py-1 rounded-lg transition-colors ${
                    paletteFilter === 'all' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  All (40)
                </button>
                <button
                  type="button"
                  onClick={() => setPaletteFilter('unanswered')}
                  className={`flex-1 py-1 rounded-lg transition-colors ${
                    paletteFilter === 'unanswered' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Pending ({unansweredCount})
                </button>
                <button
                  type="button"
                  onClick={() => setPaletteFilter('flagged')}
                  className={`flex-1 py-1 rounded-lg transition-colors ${
                    paletteFilter === 'flagged' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600'
                  }`}
                >
                  Flagged ({Object.values(examState.flagged).filter(Boolean).length})
                </button>
              </div>

              {/* 40-Button Question Grid */}
              <div className="grid grid-cols-5 sm:grid-cols-8 lg:grid-cols-5 gap-2">
                {examState.questions.map((q, idx) => {
                  const isAnswered = Boolean(examState.answers[q.id]);
                  const isFlagged = Boolean(examState.flagged[q.id]);
                  const isCurrent = examState.currentIndex === idx;

                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`relative h-10 rounded-xl font-bold text-xs transition-all flex items-center justify-center cursor-pointer ${
                        isCurrent
                          ? 'ring-2 ring-indigo-600 ring-offset-2 font-black shadow-xs'
                          : ''
                      } ${
                        isAnswered
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <span>{idx + 1}</span>
                      {isFlagged && (
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Submit Action */}
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(true)}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Review & Submit Examination</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>

        {/* Submit Confirmation Modal */}
        {showSubmitConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {unansweredCount > 0 ? 'Unanswered Questions Remaining' : `Submit ${tierConfig.title} Exam?`}
                </h3>
                <p className="text-xs text-slate-500">
                  {answeredCount} of 40 questions answered • Time left: {examTimer.text}
                </p>
              </div>

              {unansweredCount > 0 && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                  You have <strong>{unansweredCount} unanswered question(s)</strong>. Unanswered questions will receive 0 points.
                </div>
              )}

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowSubmitConfirm(false)}
                  className="flex-1 py-3 border border-slate-200 text-xs font-bold text-slate-700 rounded-xl hover:bg-slate-50"
                >
                  Return to Exam
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmitExam()}
                  disabled={isSubmittingExam}
                  className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm"
                >
                  {isSubmittingExam ? 'Grading...' : 'Confirm & Submit'}
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Floating Security Alert Toast */}
        {securityToast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 bg-slate-900/95 text-white rounded-2xl shadow-2xl border border-rose-500/40 backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-200 max-w-md w-[92%] sm:w-auto">
            <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <div className="text-xs font-black uppercase tracking-wider text-rose-400">Exam Security Notice</div>
              <div className="text-xs font-medium text-slate-200 leading-snug">{securityToast}</div>
            </div>
          </div>
        )}

        {/* Phase 2: Security Strike Warning & Disqualification Modal */}
        {strikeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 space-y-6 text-center">
              <div
                className={`w-16 h-16 rounded-3xl mx-auto flex items-center justify-center ${
                  strikeModal.strikeCount >= 3
                    ? 'bg-rose-100 text-rose-600 animate-bounce'
                    : strikeModal.strikeCount === 2
                    ? 'bg-amber-100 text-amber-600 animate-pulse'
                    : 'bg-amber-50 text-amber-600'
                }`}
              >
                {strikeModal.strikeCount >= 3 ? (
                  <AlertOctagon className="w-8 h-8" />
                ) : (
                  <ShieldAlert className="w-8 h-8" />
                )}
              </div>

              <div className="space-y-2">
                <div
                  className={`inline-block text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${
                    strikeModal.strikeCount >= 3
                      ? 'bg-rose-100 text-rose-700'
                      : strikeModal.strikeCount === 2
                      ? 'bg-rose-100 text-rose-700'
                      : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {strikeModal.strikeCount >= 3
                    ? 'Examination Terminated'
                    : strikeModal.strikeCount === 2
                    ? 'Final Warning: Strike 2 of 3'
                    : 'Security Warning: Strike 1 of 3'}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900">
                  {strikeModal.strikeCount >= 3
                    ? 'Disqualified & Auto-Submitted'
                    : strikeModal.strikeCount === 2
                    ? 'Final Violation Notice'
                    : 'Proctoring Notice'}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                  {strikeModal.strikeCount >= 3
                    ? 'Maximum security violations (3/3) reached. Your examination session has ended and answers have been submitted.'
                    : strikeModal.strikeCount === 2
                    ? 'You have navigated away from the exam window twice. One more focus violation will immediately disqualify and submit your exam.'
                    : 'Navigating away from the examination window, switching tabs, or opening external applications is recorded by proctoring.'}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs space-y-1">
                <div className="font-bold text-slate-700">Triggered Event:</div>
                <div className="text-slate-500 font-mono text-[11px]">{strikeModal.reason}</div>
              </div>

              {strikeModal.strikeCount < 3 ? (
                <button
                  type="button"
                  onClick={() => setStrikeModal(null)}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
                >
                  I Understand & Resume Exam
                </button>
              ) : (
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-rose-600">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Submitting Examination Answers...</span>
                </div>
              )}
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
    const resultTier = submissionResult.tier || selectedTier || 'beginner';
    const tierConfig = CERT_TIERS[resultTier] || CERT_TIERS.beginner;

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
        {passed ? (
          /* PASSED STATE (>= 80%) */
          <div className="space-y-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-indigo-900 to-slate-950 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Official Credential Conferred
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight">{tierConfig.title} Certified</h1>
                <p className="text-indigo-200 text-sm sm:text-base max-w-xl mx-auto">
                  Congratulations, {submissionResult.recipientName}! You have successfully demonstrated applied mastery across all 4 tracks of the proctored examination.
                </p>
              </div>

              <div className="inline-flex flex-col items-center justify-center p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 min-w-[200px]">
                <span className="text-3xl sm:text-4xl font-extrabold text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  VERIFIED PASS
                </span>
                <span className="text-xs text-indigo-200 uppercase tracking-wider font-semibold mt-1">
                  Official Proctored Credential Conferred
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="text-xs text-indigo-300 font-medium">Verification ID:</span>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/40 rounded-xl border border-white/10 font-mono text-xs sm:text-sm text-amber-300">
                  <span>{certId}</span>
                  <button onClick={handleCopyId} className="hover:text-white transition-colors" title="Copy Certificate ID">
                    {copiedCertId ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsCertModalOpen(true)}
                  className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-900" />
                  View & Download Official Diploma
                </button>
                {certId && (
                  <Link
                    href={`/verify/${encodeURIComponent(certId)}`}
                    target="_blank"
                    className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl border border-indigo-400/40 shadow-lg shadow-indigo-600/20 transition-all inline-flex items-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Public Verification Page</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                  </Link>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setView('gate');
                    if (effectiveEmail) handleCheckStatus(effectiveEmail, selectedTier);
                  }}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 transition-colors"
                >
                  Return to Ladder
                </button>
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
                    <div key={sec.id} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-slate-900">{sec.title}</h3>
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                          Passed
                        </span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 rounded-full w-full" />
                      </div>
                      <div className="flex justify-between text-xs text-slate-500">
                        <span>Status: Verified</span>
                        <span>Track Threshold Met ✓</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* NOT PASSED STATE (< 80%) */
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

              {/* 24-Hour Cooldown Alert */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong>24-Hour Cooldown Triggered:</strong> To protect exam integrity, you must wait 24 hours before re-attempting {tierConfig.title}. Use this time to review the recommended lessons below.
                </div>
              </div>

              {/* Section Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERT_SECTIONS.map((sec) => {
                  const sData = sectionScores[sec.id];
                  const passedSec = sData.percentage >= 80;
                  return (
                    <div key={sec.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-bold text-slate-800">{sec.title}</h4>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${passedSec ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                          {sData.percentage}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${passedSec ? 'bg-emerald-600' : 'bg-rose-500'}`}
                          style={{ width: `${sData.percentage}%` }}
                        />
                      </div>
                      <span className="text-[11px] text-slate-500">{sData.correct} / {sData.total} correct</span>
                    </div>
                  );
                })}
              </div>

              {/* Recommended Lessons */}
              {recommendedLessons.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Recommended Review in Your Weakest Domain
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {recommendedLessons.map((l) => (
                      <Link
                        key={l.slug}
                        href={`/lessons/${l.slug}`}
                        className="p-3 bg-white border border-slate-200 hover:border-indigo-400 rounded-xl transition-all space-y-1 block"
                      >
                        <span className="text-[10px] font-bold text-indigo-600">{l.readTime}</span>
                        <h5 className="text-xs font-bold text-slate-900 line-clamp-1">{l.title}</h5>
                        <p className="text-[11px] text-slate-500 line-clamp-2">{l.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setView('gate');
                    if (effectiveEmail) handleCheckStatus(effectiveEmail, selectedTier);
                  }}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Return to Certification Ladder
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Diploma Renderer */}
        {submissionResult && (
          <BeginnerCertificateModal
            isOpen={isCertModalOpen}
            onClose={() => setIsCertModalOpen(false)}
            data={{
              tier: submissionResult.tier || selectedTier || 'beginner',
              recipientName: submissionResult.recipientName,
              location: submissionResult.location,
              company: submissionResult.company,
              overallScore: submissionResult.grading.overallScore,
              overallPercentage: submissionResult.grading.overallPercentage,
              sectionScores: submissionResult.grading.sectionScores,
              issuedDate: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              }),
              certificateId: submissionResult.certificateId || 'JNACHI-CERT-2026-XXXX-XXXX',
            }}
            onNameChange={(name) => {
              setSubmissionResult((prev) => (prev ? { ...prev, recipientName: name } : null));
            }}
          />
        )}
      </div>
    );
  }

  return null;
}
