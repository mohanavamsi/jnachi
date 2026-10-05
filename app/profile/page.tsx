'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { useAuth } from '@/components/AuthProvider';
import { db, OperationType, handleFirestoreError } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import {
  Activity,
  Award,
  Calendar,
  FileText,
  MapPin,
  Building,
  Phone,
  Edit2,
  Check,
  X,
  Sparkles,
  ArrowRight,
  Layers,
  Download,
  ShieldCheck,
  Search,
  CheckCircle2,
  Lock,
  ExternalLink,
  RotateCcw,
  Zap,
} from 'lucide-react';
import {
  CERT_TIERS,
  TIER_ORDER,
  CORE_TIER_ORDER,
  ROLE_TIER_ORDER,
  PYTHON_TIER_ORDER,
  AGENTIC_TIER_ORDER,
  FINANCE_TIER_ORDER,
  SYSTEMS_TIER_ORDER,
  INTEGRATION_TIER_ORDER,
  CertTier,
  CertCategory,
  TIER_SLUGS,
  getSlugByTier,
  TOTAL_CERTIFICATIONS_COUNT,
} from '@/lib/certTypes';
import { CouncilSeal } from '@/components/CouncilSeal';
import BeginnerCertificateModal from '@/components/BeginnerCertificateModal';

interface Score {
  id: string;
  score: number;
  level: string;
  createdAt: number;
}

interface Certification {
  id: string;
  title: string;
  issuedAt: number;
  url?: string;
}

interface CertLadderStatus {
  tier: CertTier;
  passed: boolean;
  certificateId?: string;
  highestScore?: number;
  totalAttempts: number;
  issuedDate?: string;
}

type CategoryFilter = 'all' | 'core' | 'agentic' | 'finance' | 'role' | 'python' | 'systems' | 'integration';
type StatusFilter = 'all' | 'earned' | 'available';

export default function ProfilePage() {
  const { user, userProfile, loading, updateUserProfile } = useAuth();
  const [scores, setScores] = useState<Score[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [tierStatuses, setTierStatuses] = useState<Record<CertTier, CertLadderStatus>>(() => {
    const initial = {} as Record<CertTier, CertLadderStatus>;
    TIER_ORDER.forEach((t) => {
      initial[t] = { tier: t, passed: false, totalAttempts: 0 };
    });
    return initial;
  });
  const [fetching, setFetching] = useState(true);

  // Category & Status filter state
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Edit Candidate Profile State
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [locInput, setLocInput] = useState('');
  const [compInput, setCompInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Diploma Modal State
  const [activeDiplomaTier, setActiveDiplomaTier] = useState<CertTier | null>(null);

  useEffect(() => {
    if (userProfile) {
      setNameInput(userProfile.displayName || '');
      setLocInput(userProfile.location || '');
      setCompInput(userProfile.company || '');
      setPhoneInput(userProfile.phone || '');
    } else if (user) {
      setNameInput(user.displayName || '');
    }
  }, [userProfile, user]);

  useEffect(() => {
    if (!user) {
      if (!loading) setFetching(false);
      return;
    }

    const fetchProfileData = async () => {
      try {
        const scoresRef = collection(db, 'users', user.uid, 'scores');
        const scoresQ = query(scoresRef, orderBy('createdAt', 'desc'));
        const scoresSnap = await getDocs(scoresQ);

        const fetchedScores = scoresSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toMillis?.() || Date.now(),
        })) as Score[];

        setScores(fetchedScores);

        const certsRef = collection(db, 'users', user.uid, 'certifications');
        const certsQ = query(certsRef, orderBy('issuedAt', 'desc'));
        const certsSnap = await getDocs(certsQ);

        const fetchedCerts = certsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          issuedAt: doc.data().issuedAt?.toMillis?.() || Date.now(),
        })) as Certification[];

        setCertifications(fetchedCerts);

        // Also fetch multi-tier certification ladder status
        if (user.email) {
          try {
            const statusRes = await fetch(`/api/certification/status?email=${encodeURIComponent(user.email)}`);
            if (statusRes.ok) {
              const statusData = await statusRes.json();
              if (statusData.allTiersProgress) {
                const updated: Record<CertTier, CertLadderStatus> = { ...tierStatuses };
                TIER_ORDER.forEach((t) => {
                  const p = statusData.allTiersProgress[t];
                  updated[t] = {
                    tier: t,
                    passed: Boolean(p?.passed),
                    certificateId: p?.certificateId,
                    totalAttempts: p?.attempts || 0,
                    issuedDate: p?.issuedDate,
                  };
                });
                setTierStatuses(updated);
              }
            }
          } catch {
            // Non-blocking
          }
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, 'users/scores_or_certs');
      } finally {
        setFetching(false);
      }
    };

    fetchProfileData();
  }, [user, loading]);

  const handleSaveProfile = async () => {
    if (!nameInput.trim()) return;
    setIsSaving(true);
    try {
      await updateUserProfile({
        displayName: nameInput.trim(),
        location: locInput.trim(),
        company: compInput.trim(),
        phone: phoneInput.trim(),
      });
      setIsEditing(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to update profile:', err);
    } finally {
      setIsSaving(false);
    }
  };

  // Count earned certifications
  const earnedTiers = useMemo(() => {
    return TIER_ORDER.filter((t) => tierStatuses[t]?.passed);
  }, [tierStatuses]);

  const totalEarnedCount = earnedTiers.length;

  // Filtered tiers list for portfolio
  const filteredTiers = useMemo(() => {
    let list: CertTier[] = [];
    if (activeCategory === 'all') {
      list = [...TIER_ORDER];
    } else if (activeCategory === 'core') {
      list = [...CORE_TIER_ORDER];
    } else if (activeCategory === 'agentic') {
      list = [...AGENTIC_TIER_ORDER];
    } else if (activeCategory === 'finance') {
      list = [...FINANCE_TIER_ORDER];
    } else if (activeCategory === 'role') {
      list = [...ROLE_TIER_ORDER];
    } else if (activeCategory === 'python') {
      list = [...PYTHON_TIER_ORDER];
    } else if (activeCategory === 'systems') {
      list = [...SYSTEMS_TIER_ORDER];
    } else if (activeCategory === 'integration') {
      list = [...INTEGRATION_TIER_ORDER];
    }

    if (statusFilter === 'earned') {
      list = list.filter((t) => tierStatuses[t]?.passed);
    } else if (statusFilter === 'available') {
      list = list.filter((t) => !tierStatuses[t]?.passed);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((t) => {
        const cfg = CERT_TIERS[t];
        if (!cfg) return false;
        return (
          cfg.title.toLowerCase().includes(q) ||
          cfg.shortDescription.toLowerCase().includes(q) ||
          cfg.badgeLabel.toLowerCase().includes(q)
        );
      });
    }

    return list;
  }, [activeCategory, statusFilter, searchQuery, tierStatuses]);

  if (loading || fetching) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-16rem)] bg-slate-50/50">
        <div className="w-9 h-9 border-3 border-[#EDE9FE] border-t-[#5B21B6] rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] px-4 bg-slate-50/50">
        <div className="text-center max-w-md bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center mx-auto shadow-xs">
            <Award className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Sign in to view Candidate Profile</h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Access your verified credential registry, official PDF diplomas, and diagnostic momentum scores.
            </p>
          </div>
          <Link
            href="/certification"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#5B21B6] text-white text-xs sm:text-sm font-semibold hover:bg-[#2E1065] transition-colors shadow-xs"
          >
            <span>Go to Certification Portal</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    );
  }

  const effectiveDisplayName =
    userProfile?.displayName || user.displayName || user.email?.split('@')[0] || 'Candidate';
  const effectiveLocation = userProfile?.location || '';
  const effectiveCompany = userProfile?.company || '';
  const effectivePhone = userProfile?.phone || '';

  const initials = effectiveDisplayName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase() || 'C';

  return (
    <div className="flex-1 bg-[#FAFAFC] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* 1. CANDIDATE IDENTITY & VERIFIED REGISTRY HEADER */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-linear-to-br from-[#2E1065] to-[#5B21B6] text-white font-extrabold text-2xl sm:text-3xl flex items-center justify-center shrink-0 shadow-md shadow-[#5B21B6]/15 border border-[#7C3AED]/20">
              {initials}
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {effectiveDisplayName}
                </h1>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#EDE9FE] text-[#5B21B6] border border-[#DDD6FE]">
                  <ShieldCheck className="w-3 h-3 text-[#5B21B6]" />
                  Verified Candidate
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 font-mono">{user.email}</p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-0.5">
                {effectiveLocation ? (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {effectiveLocation}
                  </span>
                ) : (
                  <span className="text-slate-400 italic text-[11px]">Location not set</span>
                )}
                <span className="text-slate-300">·</span>
                {effectiveCompany ? (
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    {effectiveCompany}
                  </span>
                ) : (
                  <span className="text-slate-400 italic text-[11px]">Organization not set</span>
                )}
                {effectivePhone && (
                  <>
                    <span className="text-slate-300">·</span>
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-400" />
                      {effectivePhone}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-center shrink-0">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="px-3.5 py-2 border border-slate-200 hover:border-[#5B21B6] hover:text-[#5B21B6] text-slate-700 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5 bg-white shadow-2xs"
            >
              <Edit2 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Close Editor' : 'Edit Credentials'}</span>
            </button>
            <Link
              href="/certification"
              className="px-4 py-2 bg-[#5B21B6] hover:bg-[#2E1065] text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-xs"
            >
              <span>Explore Certifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 2. INLINE EDIT CREDENTIALS FORM */}
        {isEditing && (
          <div className="bg-white rounded-2xl p-6 shadow-xs border border-slate-200 space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">
                  Update Candidate Identity Details
                </h3>
                <p className="text-xs text-slate-500">
                  These verified legal details are embossed directly on your official diploma and public registry verification record.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Full Legal Name</label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:bg-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Location (City, Country)</label>
                <input
                  type="text"
                  value={locInput}
                  onChange={(e) => setLocInput(e.target.value)}
                  placeholder="e.g. London, UK"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:bg-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Organization / Company</label>
                <input
                  type="text"
                  value={compInput}
                  onChange={(e) => setCompInput(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:bg-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="tel"
                  value={phoneInput}
                  onChange={(e) => setPhoneInput(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:bg-white"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSaveProfile}
                disabled={isSaving || !nameInput.trim()}
                className="px-5 py-2 bg-[#5B21B6] hover:bg-[#2E1065] text-white text-xs font-semibold rounded-xl shadow-xs disabled:opacity-50 inline-flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                {isSaving ? 'Saving...' : 'Save Profile Changes'}
              </button>
            </div>
          </div>
        )}

        {saveSuccess && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Candidate profile credentials updated and verified successfully.
          </div>
        )}

        {/* 3. EXECUTIVE PORTFOLIO SUMMARY METRICS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs space-y-1">
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
              Earned Credentials
            </span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-bold text-slate-900">{totalEarnedCount}</span>
              <span className="text-xs text-slate-400">/ {TOTAL_CERTIFICATIONS_COUNT}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs space-y-1">
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
              Registry Status
            </span>
            <div className="flex items-center gap-1 text-emerald-700 font-semibold text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Active & Verifiable</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs space-y-1">
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
              Diagnostic Readouts
            </span>
            <div className="text-2xl font-bold text-slate-900">{scores.length}</div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-2xs space-y-1">
            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
              Public Verification
            </span>
            <Link
              href="/verify"
              className="text-xs font-semibold text-[#5B21B6] hover:text-[#2E1065] flex items-center gap-1 mt-1 hover:underline"
            >
              <span>jnachi.com/verify</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* 4. COMPLETE CERTIFICATION PORTFOLIO (All 28 tracks with Category & Status Filters) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xs border border-slate-200/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  Certification Registry Portfolio
                </h2>
                <p className="text-xs text-slate-500">
                  Track your proctored examination status across all {TOTAL_CERTIFICATIONS_COUNT} official tracks.
                </p>
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-semibold self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  statusFilter === 'all'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All ({TOTAL_CERTIFICATIONS_COUNT})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('earned')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  statusFilter === 'earned'
                    ? 'bg-white text-[#5B21B6] shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Earned ({totalEarnedCount})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('available')}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  statusFilter === 'available'
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Available ({TOTAL_CERTIFICATIONS_COUNT - totalEarnedCount})
              </button>
            </div>
          </div>

          {/* Category Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs font-medium">
              {[
                { id: 'all', label: 'All Tracks' },
                { id: 'core', label: 'Core AI Ladder' },
                { id: 'agentic', label: 'Agentic AI' },
                { id: 'finance', label: 'Finance & FinOps' },
                { id: 'role', label: 'Role Tracks' },
                { id: 'python', label: 'Applied Python' },
                { id: 'systems', label: 'Systems & Software' },
                { id: 'integration', label: 'Integration' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                    activeCategory === tab.id
                      ? 'bg-[#5B21B6] text-white font-semibold shadow-2xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-64 shrink-0">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by skill or title..."
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:bg-white"
              />
            </div>
          </div>

          {/* Certifications Cards Grid */}
          {filteredTiers.length === 0 ? (
            <div className="text-center py-12 bg-slate-50/50 rounded-2xl border border-slate-100 space-y-2">
              <p className="text-slate-600 text-sm font-medium">No certifications match your filter criteria.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory('all');
                  setStatusFilter('all');
                  setSearchQuery('');
                }}
                className="text-xs font-semibold text-[#5B21B6] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTiers.map((tierKey) => {
                const tier = CERT_TIERS[tierKey];
                const status = tierStatuses[tierKey];
                const isPassed = status?.passed;
                const tierSlug = getSlugByTier(tierKey);

                return (
                  <div
                    key={tierKey}
                    className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                      isPassed
                        ? 'border-emerald-200 bg-emerald-50/20 shadow-2xs'
                        : 'border-slate-200/80 bg-white hover:border-[#5B21B6]/30 hover:shadow-xs'
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: tier.colorScheme.bgBadge,
                            color: tier.colorScheme.textBadge,
                          }}
                        >
                          {tier.badgeLabel}
                        </span>

                        {isPassed ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                            <Check className="w-3 h-3" /> Certified
                          </span>
                        ) : (
                          <span className="text-[11px] text-slate-400 font-medium">
                            40 MCQs · 45 min
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900 text-sm leading-snug">
                          {tier.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                          {tier.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      {isPassed ? (
                        <div className="space-y-2">
                          {status.certificateId && (
                            <div
                              className="text-[10px] font-mono text-slate-500 truncate"
                              title={status.certificateId}
                            >
                              ID: {status.certificateId}
                            </div>
                          )}
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setActiveDiplomaTier(tierKey)}
                              className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors flex items-center justify-center gap-1"
                            >
                              <Download className="w-3.5 h-3.5" />
                              <span>Diploma</span>
                            </button>
                            <Link
                              href={`/certification/${tierSlug}`}
                              className="w-full py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1"
                            >
                              <span>Details</span>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                            Free Launch
                          </span>
                          <Link
                            href={`/certification/${tierSlug}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#5B21B6] hover:bg-[#2E1065] text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs"
                          >
                            <span>Take Exam</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 5. DIAGNOSTIC MOMENTUM HISTORY & MILESTONE BADGES */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Diagnostic Scores History */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Diagnostic Momentum History</h2>
                <p className="text-xs text-slate-500">3-Minute baseline assessment results over time.</p>
              </div>
            </div>

            {scores.length === 0 ? (
              <div className="text-center py-8 bg-slate-50/60 rounded-xl border border-slate-100 space-y-2">
                <p className="text-slate-500 text-xs">No diagnostic baseline readings recorded yet.</p>
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#5B21B6] hover:underline"
                >
                  <span>Take 3-minute diagnostic assessment</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {scores.map((score) => (
                  <div
                    key={score.id}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-[#EDE9FE] hover:bg-slate-50/80 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-slate-900">{score.score} pts</span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#EDE9FE] text-[#5B21B6] capitalize">
                          {score.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        {new Date(score.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Legacy Milestone Badges */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xs border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">Milestone Achievements</h2>
                <p className="text-xs text-slate-500">Diagnostic milestones and institutional seals.</p>
              </div>
            </div>

            {certifications.length === 0 ? (
              <div className="text-center py-8 bg-slate-50/60 rounded-xl border border-slate-100 space-y-1">
                <p className="text-slate-500 text-xs">No milestone badges unlocked yet.</p>
                <p className="text-[11px] text-slate-400">
                  Score 76+ on the Diagnostic Assessment to earn the Architect Milestone.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-emerald-100 hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-xs truncate">{cert.title}</h3>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                        <Calendar className="w-3 h-3" />
                        {new Date(cert.issuedAt).toLocaleDateString()}
                      </div>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-emerald-600 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Diploma Modal Preview */}
      {activeDiplomaTier && (
        <BeginnerCertificateModal
          isOpen={Boolean(activeDiplomaTier)}
          onClose={() => setActiveDiplomaTier(null)}
          data={{
            tier: activeDiplomaTier,
            recipientName: effectiveDisplayName,
            location: effectiveLocation,
            company: effectiveCompany,
            overallScore: 36,
            overallPercentage: 90,
            sectionScores: {
              literacy: { correct: 9, total: 10, percentage: 90 },
              automation: { correct: 9, total: 10, percentage: 90 },
              privacy: { correct: 9, total: 10, percentage: 90 },
              growth: { correct: 9, total: 10, percentage: 90 },
            },
            issuedDate:
              tierStatuses[activeDiplomaTier]?.issuedDate ||
              new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              }),
            certificateId:
              tierStatuses[activeDiplomaTier]?.certificateId ||
              `JNACHI-${activeDiplomaTier.toUpperCase()}-CERT`,
          }}
        />
      )}
    </div>
  );
}
