'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/components/AuthProvider';
import { db, OperationType, handleFirestoreError } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { Activity, Award, Calendar, FileText } from 'lucide-react';

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
  const { user, loading } = useAuth();
  const [scores, setScores] = useState<Score[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [fetching, setFetching] = useState(true);

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
        
        const fetchedScores = scoresSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toMillis?.() || Date.now()
        })) as Score[];
        
        setScores(fetchedScores);

        const certsRef = collection(db, 'users', user.uid, 'certifications');
        const certsQ = query(certsRef, orderBy('issuedAt', 'desc'));
        const certsSnap = await getDocs(certsQ);
        
        const fetchedCerts = certsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          issuedAt: doc.data().issuedAt?.toMillis?.() || Date.now()
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
        <p className="text-slate-600 max-w-md">Your past readings, momentum scores, and certifications are safely stored in your account.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full py-12 px-4 bg-slate-50 min-h-[calc(100vh-16rem)]">
      <div className="max-w-5xl w-full">
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mb-8 flex items-center gap-6">
          {user.photoURL ? (
            <img src={user.photoURL} alt={user.displayName || 'User'} className="w-24 h-24 rounded-full shadow-sm" />
          ) : (
            <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-3xl font-bold">
              {(user.displayName || user.email || '?').charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{user.displayName || 'Jnachi Explorer'}</h1>
            <p className="text-slate-500">{user.email}</p>
          </div>
        </div>

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
                <p className="text-slate-500 mb-4">No readings taken yet.</p>
                <a href="/reading" className="text-indigo-600 font-medium hover:underline">Take your first assessment</a>
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
              <h2 className="text-2xl font-bold text-slate-900">Certifications</h2>
            </div>
            
            {certifications.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-slate-500 mb-4">No certifications earned yet.</p>
                <p className="text-sm text-slate-400">Complete an assessment with an energized reading to earn one.</p>
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
