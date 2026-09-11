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
} from 'lucide-react';

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

export default function ProfilePage() {
  const { user, userProfile, loading, updateUserProfile } = useAuth();
  const [scores, setScores] = useState<Score[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [fetching, setFetching] = useState(true);

  // Edit Candidate Profile State
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [locInput, setLocInput] = useState('');
  const [compInput, setCompInput] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

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
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] text-center px-4">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <Activity className="w-10 h-10 text-slate-400" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Sign in to view your profile</h1>
        <p className="text-slate-600 max-w-md">Your certifications, candidate information, and assessment records are safely stored in your account.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full py-12 px-4 bg-slate-50 min-h-[calc(100vh-16rem)]">
      <div className="max-w-5xl w-full space-y-8">
        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName || 'User'} className="w-20 h-20 rounded-2xl shadow-sm object-cover" />
            ) : (
              <div className="w-20 h-20 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center text-3xl font-black">
                {(userProfile?.displayName || user.displayName || user.email || '?').charAt(0).toUpperCase()}
              </div>
            )}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                {userProfile?.displayName || user.displayName || 'Candidate'}
              </h1>
              <p className="text-sm text-slate-500">{user.email}</p>

              {/* Location & Company Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-600">
                {userProfile?.location ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                    {userProfile.location}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-medium">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    No location set (required for exam)
                  </span>
                )}

                {userProfile?.company ? (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 font-medium">
                    <Building className="w-3.5 h-3.5 text-indigo-600" />
                    {userProfile.company}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-medium">
                    <Building className="w-3 h-3 text-amber-600" />
                    No company set
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
            >
              <Edit2 className="w-3.5 h-3.5" />
              {isEditing ? 'Cancel Editing' : 'Edit Candidate Info'}
            </button>
            <Link
              href="/certification"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors inline-flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Certification Exam
            </Link>
          </div>
        </div>

        {/* Edit Candidate Details Form Drawer */}
        {isEditing && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-indigo-200 space-y-4 animate-in fade-in duration-200">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Update Candidate Registration Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Certificate Name</label>
                <input
                  type="text"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  placeholder="Full Legal Name"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Location (City, Country)</label>
                <input
                  type="text"
                  value={locInput}
                  onChange={(e) => setLocInput(e.target.value)}
                  placeholder="e.g. Nairobi, Kenya"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Company / Organization</label>
                <input
                  type="text"
                  value={compInput}
                  onChange={(e) => setCompInput(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
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

        <div className="grid md:grid-cols-2 gap-8">
          {/* Scores History */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Momentum History</h2>
            </div>

            {scores.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-slate-500 mb-4">No assessment readings taken yet.</p>
                <Link href="/assessment" className="text-indigo-600 font-medium hover:underline">Take your first assessment</Link>
              </div>
            ) : (
              <div className="space-y-4">
                {scores.map(score => (
                  <div key={score.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-indigo-100 hover:bg-slate-50 transition-colors">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-bold text-slate-900">{score.score}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 capitalize">
                          {score.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(score.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Official Certifications</h2>
            </div>

            {certifications.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
                <p className="text-slate-500">No certifications earned yet.</p>
                <p className="text-xs text-slate-400">Pass the 40-question Jnachi Beginner Certification Exam with 80%+ to earn your official diploma credential.</p>
                <div className="pt-2">
                  <Link href="/certification" className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs inline-block">
                    Take Beginner Certification Exam
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {certifications.map(cert => (
                  <div key={cert.id} className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-emerald-100 hover:bg-slate-50 transition-colors">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-1">{cert.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(cert.issuedAt).toLocaleDateString()}
                      </div>
                    </div>
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-emerald-600 transition-colors">
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
    </div>
  );
}
