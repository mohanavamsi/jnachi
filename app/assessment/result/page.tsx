'use client';

import { Suspense, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { RefreshCw, Download, Share2, Linkedin, Twitter, Facebook, CheckCircle2, ArrowRight } from 'lucide-react';
import { calculateScores, getFindings, Category, CATEGORY_LABELS } from '@/lib/assessmentData';

function ResultContent() {
  const searchParams = useSearchParams();
  const rawAnswers = searchParams.get('a');
  
  const { scores, findings } = useMemo(() => {
    // Default answers if none provided (all 0s)
    const answers = rawAnswers ? rawAnswers.split(',').map(n => parseInt(n, 10)) : new Array(9).fill(0);
    const calculatedScores = calculateScores(answers);
    const calculatedFindings = getFindings(calculatedScores.subScores);
    return { scores: calculatedScores, findings: calculatedFindings };
  }, [rawAnswers]);

  const { subScores, overallScore, overallLevel, getSubScoreStatus } = scores;
  const { strengths, growthAreas, actionSteps } = findings;
  
  const shareUrl = encodeURIComponent(typeof window !== 'undefined' ? window.location.origin : 'https://jnachi.com');
  const shareText = encodeURIComponent(`I just scored an ${overallScore} (${overallLevel}) on my Jnachi assessment! Check your AI momentum at Jnachi.`);

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
        </div>

        {/* 4 Category Sub-scores */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 px-2">Category Breakdown</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {(Object.keys(subScores) as Category[]).map(cat => {
              const score = subScores[cat];
              const status = getSubScoreStatus(score);
              return (
                <div key={cat} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900">{CATEGORY_LABELS[cat]}</h4>
                      <span className="text-sm font-medium text-indigo-600">{status}</span>
                    </div>
                    <div className="text-3xl font-black text-slate-800">{score}</div>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${
                        score >= 70 ? 'bg-indigo-600' : score >= 40 ? 'bg-indigo-400' : 'bg-slate-300'
                      }`}
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Strengths and Growth Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Strengths */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Strengths Identified</h3>
            <ul className="space-y-6">
              {strengths.map((str, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 bg-indigo-50 text-indigo-600 rounded-full p-1 h-fit">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{str.label}</h4>
                    <p className="text-slate-600 mt-1">{str.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Growth Areas */}
          <div className="bg-slate-900 rounded-3xl p-8 shadow-sm text-white">
            <h3 className="text-2xl font-bold text-white mb-6">Where to Activate Next</h3>
            <ul className="space-y-6">
              {growthAreas.map((area, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 bg-white/10 text-indigo-300 rounded-full p-1 h-fit">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{area.label}</h4>
                    <p className="text-slate-300 mt-1">{area.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Plan */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Your Personalized 4-Step Action Plan</h3>
          <p className="text-slate-500 mb-10">Based on your dormant categories, here is exactly how to start building momentum this week.</p>
          
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
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} 
              target="_blank" rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-sm hover:shadow hover:-translate-y-0.5 transition-all"
            >
              <Twitter className="w-5 h-5" />
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
          <button className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors shadow">
            <Download className="w-4 h-4" />
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center min-h-[calc(100vh-16rem)]"><div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div></div>}>
      <ResultContent />
    </Suspense>
  );
}
