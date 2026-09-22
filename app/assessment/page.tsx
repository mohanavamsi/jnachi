'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, ArrowLeft, Sparkles, Mail } from 'lucide-react';
import { useAuth } from '@/components/AuthProvider';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { QUESTIONS, calculateScores } from '@/lib/assessmentData';

function AssessmentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(QUESTIONS.length).fill(undefined));
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Restore state if redirected back from results page due to missing email authorization
  useEffect(() => {
    const isGate = searchParams.get('gate') === 'true';
    const rawAnswers = searchParams.get('a');
    if (isGate && rawAnswers) {
      const parsed = rawAnswers.split(',').map(n => parseInt(n, 10));
      if (parsed.length === QUESTIONS.length && parsed.every(n => !isNaN(n))) {
        setAnswers(parsed);
        setCurrentStep(QUESTIONS.length - 1);
        setShowEmailGate(true);
      }
    }
  }, [searchParams]);

  const handleSelect = (optionIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const newAnswers = [...answers];
    newAnswers[currentStep] = optionIndex;
    setAnswers(newAnswers);
    
    if (currentStep < QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsTransitioning(false);
      }, 300);
    } else {
      setTimeout(() => {
        setShowEmailGate(true);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0 && !isTransitioning) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setIsSubmitting(true);

    try {
      const { overallScore: score, overallLevel: level } = calculateScores(answers);
      
      // Save lead information to Firestore
      const leadsRef = collection(db, 'leads');
      await addDoc(leadsRef, {
        email: email,
        score: score,
        level: level.split(':')[0].toLowerCase().replace('level ', ''), // e.g. "explorer foundation"
        answers: answers,
        createdAt: serverTimestamp()
      });

      // Optional: Also save score to Firebase if the user happens to be logged in
      if (user) {
        const scoresRef = collection(db, 'users', user.uid, 'scores');
        await addDoc(scoresRef, {
          score: score,
          level: level.split(':')[0].toLowerCase().replace('level ', ''),
          createdAt: serverTimestamp()
        });
      }
    } catch (error) {
      console.error("Error saving assessment results:", error);
      // Non-blocking error since this is an anonymous gate primarily
    }

    // Save session state to authorize viewing results
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('jnachi_assessed_email', email);
    }

    // Redirect to results with the answers encoded in the URL
    router.push(`/assessment/result?a=${answers.join(',')}`);
  };

  const currentQuestion = QUESTIONS[currentStep];

  // Keyboard shortcuts (1-4, A-D) for rapid quiz answers
  useEffect(() => {
    if (showEmailGate || isTransitioning || !currentQuestion) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toLowerCase();
      let selectedIdx = -1;
      if (key === '1' || key === 'a') selectedIdx = 0;
      else if (key === '2' || key === 'b') selectedIdx = 1;
      else if (key === '3' || key === 'c') selectedIdx = 2;
      else if (key === '4' || key === 'd') selectedIdx = 3;

      if (selectedIdx !== -1 && currentQuestion && selectedIdx < currentQuestion.options.length) {
        e.preventDefault();
        handleSelect(selectedIdx);
      } else if (e.key === 'ArrowLeft' || e.key === 'Backspace') {
        if (currentStep > 0) {
          e.preventDefault();
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showEmailGate, isTransitioning, currentStep, currentQuestion]);

  if (showEmailGate) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-16 px-4 bg-slate-50 min-h-[calc(100vh-16rem)] animate-in fade-in duration-300">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-indigo-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Your assessment is complete!</h2>
          <p className="text-sm text-slate-600 mb-6">Enter your email to reveal your Jnachi Score and personalized competency action plan.</p>
          
          <form onSubmit={handleEmailSubmit} className="space-y-4 text-left">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Candidate Email Address</label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-sm font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-98 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Calculating Competency...</span>
                </>
              ) : (
                <>
                  <span>Reveal My Jnachi Score</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Trust badges */}
          <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <span>🔒 256-Bit SSL Encrypted</span>
            <span>•</span>
            <span>✨ Zero Spam Guarantee</span>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 bg-slate-50 min-h-[calc(100vh-16rem)]">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  const progressPercent = Math.round(((currentStep + 1) / QUESTIONS.length) * 100);

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-16 px-4 bg-slate-50 min-h-[calc(100vh-16rem)]">
      <div className="max-w-2xl w-full">
        {/* Progress header */}
        <div className="mb-8">
          <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-2.5">
            <span className="text-slate-700">Question {currentStep + 1} of {QUESTIONS.length} ({progressPercent}%)</span>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-extrabold uppercase tracking-wider text-[10px]">
              {currentQuestion.category}
            </span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden p-0.5">
            <div 
              className="bg-indigo-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-md border border-slate-100 relative transition-all">
          {currentStep > 0 && (
            <button 
              onClick={handlePrev}
              className="absolute top-8 left-8 p-2 rounded-xl text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              aria-label="Previous question"
              title="Previous question (Backspace / ArrowLeft)"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}

          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-xs font-bold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diagnostic Assessment</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              {currentQuestion.prompt}
            </h2>
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const keyBadge = String.fromCharCode(65 + idx); // A, B, C, D
              const isSelected = answers[currentStep] === idx;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelect(idx)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group active:scale-99 ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/70 shadow-sm'
                      : 'border-slate-200/80 hover:border-indigo-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-700'
                    }`}>
                      {keyBadge}
                    </span>
                    <span className="text-base font-semibold text-slate-800">{option.label}</span>
                  </div>
                  {isSelected && (
                    <ArrowRight className="w-5 h-5 text-indigo-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-6 text-center text-[11px] text-slate-400">
            Tip: Press keyboard keys <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">A</kbd> - <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">D</kbd> or <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">1</kbd> - <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded font-mono text-[10px]">4</kbd> to answer quickly.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AssessmentPage() {
  return (
    <Suspense fallback={<div className="flex-1 flex items-center justify-center min-h-[calc(100vh-16rem)]"><div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div></div>}>
      <AssessmentContent />
    </Suspense>
  );
}
