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

      // Optional: Also save to Firebase if the user happens to be logged in
      if (user) {
        const scoresRef = collection(db, 'users', user.uid, 'scores');
        await addDoc(scoresRef, {
          score: score,
          level: level.split(':')[0].toLowerCase().replace('level ', ''),
          createdAt: serverTimestamp()
        });
        
        if (score >= 76) {
          const certsRef = collection(db, 'users', user.uid, 'certifications');
          await addDoc(certsRef, {
            title: 'Jnachi Architect',
            issuedAt: serverTimestamp()
          });
        }
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

  if (showEmailGate) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 bg-slate-50 min-h-[calc(100vh-16rem)]">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 text-center">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your assessment is complete</h2>
          <p className="text-slate-600 mb-8">Enter your email to reveal your Jnachi Score and personalized activation plan.</p>
          
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Analyzing...' : 'Show My Score'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const currentQuestion = QUESTIONS[currentStep];

  if (!currentQuestion) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 bg-slate-50 min-h-[calc(100vh-16rem)]">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 bg-slate-50 min-h-[calc(100vh-16rem)]">
      <div className="max-w-2xl w-full">
        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
            <span>Question {currentStep + 1} of {QUESTIONS.length}</span>
            <span className="uppercase tracking-wider text-xs">{currentQuestion.category}</span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-indigo-600 h-full transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / QUESTIONS.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 relative">
          {currentStep > 0 && (
            <button 
              onClick={handlePrev}
              className="absolute top-8 left-8 text-slate-400 hover:text-indigo-600 transition-colors"
              aria-label="Previous question"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}

          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Assessment in progress</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 leading-tight">
              {currentQuestion.prompt}
            </h2>
          </div>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={option.id}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all ${
                  answers[currentStep] === idx
                    ? 'border-indigo-600 bg-indigo-50 shadow-md'
                    : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-slate-800">{option.label}</span>
                  {answers[currentStep] === idx && (
                    <ArrowRight className="w-5 h-5 text-indigo-600" />
                  )}
                </div>
              </button>
            ))}
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
