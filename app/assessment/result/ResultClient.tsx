'use client';

import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { RefreshCw, Download, Share2, Linkedin, Twitter, Facebook, CheckCircle2, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { calculateScores, getFindings, Category, CATEGORY_LABELS } from '@/lib/assessmentData';
import CertificateModal from '@/components/CertificateModal';

export default function ResultClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawAnswers = searchParams.get('a');
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const verifiedEmail = sessionStorage.getItem('jnachi_assessed_email');
      if (!verifiedEmail) {
        // Redirect back to assessment email gate with preserved answers
        if (rawAnswers) {
          router.replace(`/assessment?a=${rawAnswers}&gate=true`);
        } else {
          router.replace('/assessment');
        }
      } else {
        setUserEmail(verifiedEmail);
        setIsAuthorized(true);
      }
    }
  }, [rawAnswers, router]);

  const { scores, findings } = useMemo(() => {
    // Default answers if none provided (all 0s)
    const answers = rawAnswers ? rawAnswers.split(',').map(n => parseInt(n, 10)) : new Array(9).fill(0);
    const calculatedScores = calculateScores(answers);
    const calculatedFindings = getFindings(calculatedScores.subScores);
    return { scores: calculatedScores, findings: calculatedFindings };
  }, [rawAnswers]);

  const { subScores, overallScore, overallLevel, getSubScoreStatus } = scores;
  const { strengths, growthAreas, actionSteps } = findings;
  
  const currentUrl = typeof window !== 'undefined' ? window.location.href : `https://jnachi.com/assessment/result?a=${rawAnswers || ''}`;
  const shareUrl = encodeURIComponent(currentUrl);
  const shareText = encodeURIComponent(`I just scored an ${overallScore} (${overallLevel}) on my Jnachi assessment! Check your AI momentum at Jnachi.`);

  if (!isAuthorized) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-16rem)]">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full py-12 px-4 bg-slate-50 min-h-[calc(100vh-16rem)]">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Your Current Assessment</h1>
          <p className="text-lg text-slate-600">
            This is a measure of your momentum. Knowledge is meant to move.
          </p>
        </div>

        {/* Main Scorecard */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-left z-10">
            <span className="text-sm font-bold tracking-widest uppercase text-indigo-600 mb-2">Overall Momentum</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{overallLevel}</h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              This score represents your aggregate activation across all key AI competencies. Review your category breakdown below to see exactly where your strengths lie.
            </p>
          </div>
          
          <div className="relative w-64 h-64 flex-shrink-0 flex items-center justify-center z-10">
            <svg className="absolute inset-0 w-full h-full -rotate-90 text-slate-100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" />
              <circle 
                cx="50" cy="50" r="45" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="8" 
                strokeLinecap="round" 
                strokeDasharray="283" 
                strokeDashoffset={283 - (283 * overallScore) / 100} 
                className="text-indigo-600 transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>
            <div className="text-center z-10">
              <div className="text-6xl font-black text-indigo-900 tracking-tighter">{overallScore}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-1">Jnachi Score</div>
            </div>
          </div>
          
          {/* Background Decorative Pattern */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60 z-0"></div>
        </div>

        {/* Categories Breakdown */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Category Breakdown</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {(Object.keys(subScores) as Category[]).map((cat) => {
              const score = subScores[cat];
              const status = getSubScoreStatus(score);
              const statusColor = 
                status === "Fully Activated" ? "bg-emerald-50 text-emerald-700 border-emerald-200" :
                status === "Active" ? "bg-indigo-50 text-indigo-700 border-indigo-200" :
                status === "Emerging" ? "bg-amber-50 text-amber-700 border-amber-200" :
                "bg-slate-100 text-slate-600 border-slate-200";

              return (
                <div key={cat} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="font-semibold text-slate-800 text-lg">{CATEGORY_LABELS[cat]}</span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColor}`}>
                        {status}
                      </span>
                    </div>
                    
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-slate-900">{score}</span>
                      <span className="text-sm text-slate-400">/ 100</span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-4">
                      <div 
                        className="bg-indigo-600 h-full rounded-full transition-all duration-500" 
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths & Growth Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Strengths */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Key Strengths</h3>
            </div>
            {strengths.length > 0 ? (
              <div className="space-y-4">
                {strengths.map((s, idx) => (
                  <div key={idx} className="border-l-2 border-emerald-500 pl-4 py-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">{s.label}</span>
                    <p className="text-slate-600">{s.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 italic">Continue developing across the four pillars to unlock distinct strength profiles.</p>
            )}
          </div>

          {/* Growth Areas */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Next Growth Edge</h3>
            </div>
            {growthAreas.length > 0 ? (
              <div className="space-y-4">
                {growthAreas.map((g, idx) => (
                  <div key={idx} className="border-l-2 border-amber-500 pl-4 py-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">{g.label}</span>
                    <p className="text-slate-600">{g.text}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-500 italic">No significant deficits identified. Focus on compounding your high performance.</p>
            )}
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Your Personalized 4-Step Action Plan</h3>
          <p className="text-slate-500 mb-10">
            Based on your assessment results{growthAreas.length > 0 ? `—prioritizing ${growthAreas.map(g => g.label).join(' and ')}` : ''}—here is a prioritized path to build momentum this week.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-8">
            {actionSteps.map((step, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center border-2 border-white shadow-sm">
                  {idx + 1}
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-2">{step.label}</span>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h4>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-white rounded-xl text-indigo-600 shadow-sm flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base">Activate These Skills in the Learning Hub</h4>
                <p className="text-slate-600 text-xs mt-0.5">Explore 17 short, practical lessons with copyable prompt templates and 5-minute activation challenges.</p>
              </div>
            </div>
            <Link
              href="/lessons"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-xs font-bold rounded-full hover:bg-indigo-700 transition-colors shadow-sm whitespace-nowrap flex-shrink-0"
            >
              <span>Explore 17 Lessons</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100">
          <span className="text-indigo-900 font-medium flex items-center gap-2">
            <Share2 className="w-5 h-5 text-indigo-600" /> Share your momentum:
          </span>
          <div className="flex items-center gap-4">
            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareText}`} 
              target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white text-[#0A66C2] flex items-center justify-center shadow-sm hover:shadow hover:-translate-y-0.5 transition-all"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`} 
              target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-sm hover:shadow hover:-translate-y-0.5 transition-all"
            >
              <Twitter className="w-5 h-5 fill-current" />
            </a>
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} 
              target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white text-[#1877F2] flex items-center justify-center shadow-sm hover:shadow hover:-translate-y-0.5 transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/assessment" 
            className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-medium hover:bg-slate-200 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Retake Assessment
          </Link>
          <button 
            onClick={() => setIsCertModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-all shadow hover:shadow-md active:scale-95"
          >
            <Download className="w-4 h-4" />
            Download Share Card (9:16)
          </button>
        </div>

        {/* Certificate Preview & Download Modal */}
        <CertificateModal
          isOpen={isCertModalOpen}
          onClose={() => setIsCertModalOpen(false)}
          overallScore={overallScore}
          overallLevel={overallLevel}
          subScores={subScores}
          initialEmail={userEmail}
          rawAnswers={rawAnswers}
        />
      </div>
    </div>
  );
}
