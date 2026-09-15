'use client';

import { useEffect, useState } from 'react';
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
  Edit2,
  Check,
  X,
  Sparkles,
  ArrowRight,
  Layers,
  Download,
} from 'lucide-react';
import { CERT_TIERS, TIER_ORDER, CertTier } from '@/lib/certTypes';
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
}

export default function ProfilePage() {
  const { user, userProfile, loading, updateUserProfile } = useAuth();
  const [scores, setScores] = useState<Score[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [tierStatuses, setTierStatuses] = useState<Record<CertTier, CertLadderStatus>>({
    beginner: { tier: 'beginner', passed: false, totalAttempts: 0 },
    practitioner: { tier: 'practitioner', passed: false, totalAttempts: 0 },
    builder: { tier: 'builder', passed: false, totalAttempts: 0 },
    master: { tier: 'master', passed: false, totalAttempts: 0 },
  });
  const [fetching, setFetching] = useState(true);

  // Edit Candidate Profile State
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [locInput, setLocInput] = useState('');
  const [compInput, setCompInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Diploma Modal State
  const [activeDiplomaTier, setActiveDiplomaTier] = useState<CertTier | null>(null);

  useEffect(() => {
    if (userProfile) {
      setNameInput(userProfile.displayName || '');
      setLocInput(userProfile.location || '');
      setCompInput(userProfile.company || '');
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

  if (loading || fetching) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-16rem)]">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] px-4">
        <div className="text-center max-w-md">
          <Award className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Sign in to view your profile</h2>
          <p className="text-slate-600 mb-6">Track your Jnachi Momentum scores and official certifications over time.</p>
          <Link
            href="/certification"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Go to Certification Portal
          </Link>
        </div>
      </div>
    );
  }

  const effectiveDisplayName = userProfile?.displayName || user.displayName || user.email?.split('@')[0] || 'Candidate';
  const effectiveLocation = userProfile?.location || '';
  const effectiveCompany = userProfile?.company || '';

  return (
    <div className="flex-1 bg-slate-50/50 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Candidate Profile Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-md shadow-indigo-200">
              {effectiveDisplayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{effectiveDisplayName}</h1>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                  Candidate Profile
                </span>
              </div>
              <p className="text-slate-500 text-sm mt-0.5">{user.email}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-2">
                {effectiveLocation && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {effectiveLocation}
                  </span>
                )}
                {effectiveCompany && (
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    {effectiveCompany}
                  </span>
                )}
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="self-start sm:self-auto px-4 py-2 border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5"
          >
            <Edit2 className="w-3.5 h-3.5" />
            <span>{isEditing ? 'Cancel' : 'Edit Legal Credentials'}</span>
          </button>
        </div>

        {/* Profile Edit Card */}
        {isEditing && (
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4 animate-in fade-in">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Update Credential Details
            </h3>
            <p className="text-xs text-slate-500">
              These details are printed on all official Jnachi diplomas and verification records.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Full Name</label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Location (City, Country)</label>
                <input
                  type="text"
                  value={locInput}
                  onChange={(e) => setLocInput(e.target.value)}
                  placeholder="e.g. San Francisco, USA"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Current Organization / Company</label>
                <input
                  type="text"
                  value={compInput}
                  onChange={(e) => setCompInput(e.target.value)}
                  placeholder="e.g. Anthropic"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
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
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs disabled:opacity-50 inline-flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" />
                {isSaving ? 'Saving...' : 'Save Profile Changes'}
              </button>
            </div>
          </div>
        )}

        {saveSuccess && (
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            Candidate profile details saved successfully.
          </div>
        )}

        {/* 4-TIER PROGRESSION LADDER SECTION */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Jnachi 4-Tier Certification Ladder</h2>
                <p className="text-xs text-slate-500">Track your verified competency credentials across all tiers.</p>
              </div>
            </div>

            <Link
              href="/certification"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors self-start sm:self-auto"
            >
              <span>Go to Certification Portal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TIER_ORDER.map((tierKey) => {
              const tier = CERT_TIERS[tierKey];
              const status = tierStatuses[tierKey];
              const isPassed = status?.passed;

              return (
                <div
                  key={tierKey}
                  className={`p-5 rounded-2xl border-2 transition-all flex flex-col justify-between space-y-4 ${
                    isPassed
                      ? 'border-emerald-300 bg-emerald-50/40 shadow-xs'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: tier.colorScheme.bgBadge,
                          color: tier.colorScheme.textBadge,
                        }}
                      >
                        Tier 0{tier.levelNumber}
                      </span>
                      {isPassed ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" /> Certified
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400 font-medium">Not Certified</span>
                      )}
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-base">{tier.title}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2">{tier.shortDescription}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-100/80">
                    {isPassed ? (
                      <div className="space-y-2">
                        {status.certificateId && (
                          <div className="text-[10px] font-mono text-slate-500 truncate" title={status.certificateId}>
                            ID: {status.certificateId}
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={() => setActiveDiplomaTier(tierKey)}
                          className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>View Diploma</span>
                        </button>
                      </div>
                    ) : (
                      <Link
                        href="/certification"
                        className="w-full py-2 bg-slate-100 hover:bg-indigo-600 hover:text-white text-slate-700 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1"
                      >
                        <span>Take Exam</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Scores History */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Diagnostic Momentum History</h2>
                <p className="text-xs text-slate-500">3-Minute baseline assessment results.</p>
              </div>
            </div>

            {scores.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-slate-500 mb-4 text-sm">No diagnostic assessment readings taken yet.</p>
                <Link href="/assessment" className="text-indigo-600 font-bold text-xs hover:underline">
                  Take your first 3-minute assessment
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {scores.map((score) => (
                  <div
                    key={score.id}
                    className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-bold text-slate-900">{score.score}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 capitalize">
                          {score.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(score.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Legacy Saved Certifications / Milestone Badges */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">Milestone Badges</h2>
                <p className="text-xs text-slate-500">Diagnostic milestone achievements.</p>
              </div>
            </div>

            {certifications.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <p className="text-slate-500 text-sm">No milestone badges unlocked yet.</p>
                <p className="text-xs text-slate-400">Score 76+ on the Diagnostic Assessment to earn the Architect Milestone.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-emerald-100 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{cert.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(cert.issuedAt).toLocaleDateString()}
                      </div>
                    </div>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-emerald-600 transition-colors"
                      >
                        <FileText className="w-5 h-5" />
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
            overallScore: 36, // default representation
            overallPercentage: 90,
            sectionScores: {
              literacy: { correct: 9, total: 10, percentage: 90 },
              automation: { correct: 9, total: 10, percentage: 90 },
              privacy: { correct: 9, total: 10, percentage: 90 },
              growth: { correct: 9, total: 10, percentage: 90 },
            },
            issuedDate: new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            }),
            certificateId: tierStatuses[activeDiplomaTier]?.certificateId || `JNACHI-${activeDiplomaTier.toUpperCase()}-CERT`,
          }}
        />
      )}
    </div>
  );
}
