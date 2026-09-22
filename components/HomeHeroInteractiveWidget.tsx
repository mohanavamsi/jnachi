'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, CheckCircle2, ArrowRight, Zap, RefreshCw, Trophy } from 'lucide-react';

interface TeaserQuestion {
  id: string;
  tag: string;
  scenario: string;
  options: { id: string; text: string; correct: boolean; explanation: string }[];
}

const TEASER_QUESTIONS: TeaserQuestion[] = [
  {
    id: 'q1',
    tag: '⚡ REAL-TIME PROMPT CALIBRATION',
    scenario: 'You need an LLM to reliably extract contact details into a structured JSON schema without hallucinating extra keys. Which strategy is most reliable?',
    options: [
      {
        id: 'a',
        text: 'Specify strict Pydantic/JSON schema response_format with temperature 0.0 and explicit schema keys.',
        correct: true,
        explanation: '🎯 Spot on! Low temperature + constrained JSON schema enforcement eliminates formatting hallucinations.',
      },
      {
        id: 'b',
        text: 'Ask nicely in natural language and say "please be accurate and do not make mistakes".',
        correct: false,
        explanation: '❌ Polite requests don\'t enforce schema constraints at the token sampling level.',
      },
      {
        id: 'c',
        text: 'Set temperature to 1.8 to allow the model more creative leeway in JSON formatting.',
        correct: false,
        explanation: '❌ High temperature increases randomness, leading to malformed syntax and hallucinations.',
      },
    ],
  },
  {
    id: 'q2',
    tag: '🛡️ ENTERPRISE PRIVACY & REDLINES',
    scenario: 'A team member wants to paste a client customer list into a public consumer AI chat to find churn patterns. What is the correct protocol?',
    options: [
      {
        id: 'a',
        text: 'Anonymize PII via synthetic IDs/Presidio first or use enterprise Zero Data Retention (ZDR) endpoints.',
        correct: true,
        explanation: '🎯 Exact! Never paste raw customer PII into non-ZDR consumer chat models.',
      },
      {
        id: 'b',
        text: 'Paste it directly since the chat session is password protected on their laptop.',
        correct: false,
        explanation: '❌ Public consumer chat inputs may be retained for model retraining.',
      },
      {
        id: 'c',
        text: 'Type "Confidential - Do Not Train" at the top of the prompt prompt.',
        correct: false,
        explanation: '❌ Natural language headers cannot override server-side logging or training pipelines.',
      },
    ],
  },
];

export function HomeHeroInteractiveWidget() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const currentQ = TEASER_QUESTIONS[questionIndex];

  const handleSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setAnswered(true);
  };

  const handleNextSample = () => {
    setSelectedOption(null);
    setAnswered(false);
    setQuestionIndex((prev) => (prev + 1) % TEASER_QUESTIONS.length);
  };

  const selectedOptObj = currentQ.options.find((o) => o.id === selectedOption);

  return (
    <div className="w-full max-w-lg bg-slate-900/90 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-6 sm:p-7 text-white shadow-2xl shadow-indigo-950/50 relative overflow-hidden group">
      {/* Decorative ambient neon background glows */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Card Header Bar */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-wider text-indigo-300">
            {currentQ.tag}
          </span>
        </div>
        <button
          type="button"
          onClick={handleNextSample}
          className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors px-2 py-1 rounded-lg hover:bg-white/10"
        >
          <RefreshCw className="w-3 h-3" />
          <span>Try another question</span>
        </button>
      </div>

      {/* Question Prompt */}
      <div className="space-y-3 relative z-10">
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
          {currentQ.scenario}
        </h3>

        {/* Options */}
        <div className="space-y-2.5 pt-1">
          {currentQ.options.map((option) => {
            const isSelected = selectedOption === option.id;
            let btnStyle = 'bg-slate-800/80 border-slate-700 hover:border-indigo-400 hover:bg-slate-800 text-slate-200';

            if (answered) {
              if (option.correct) {
                btnStyle = 'bg-emerald-950/70 border-emerald-400 text-emerald-100 shadow-sm ring-1 ring-emerald-500/30';
              } else if (isSelected && !option.correct) {
                btnStyle = 'bg-rose-950/70 border-rose-400 text-rose-200';
              } else {
                btnStyle = 'bg-slate-900/60 border-slate-800 text-slate-500 opacity-60';
              }
            }

            return (
              <button
                key={option.id}
                type="button"
                disabled={answered}
                onClick={() => handleSelect(option.id)}
                className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm transition-all flex items-start gap-3 relative ${btnStyle}`}
              >
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[11px] font-bold mt-0.5 uppercase">
                  {option.id}
                </span>
                <span className="leading-relaxed flex-1">{option.text}</span>
              </button>
            );
          })}
        </div>

        {/* Instant Animated Feedback */}
        {answered && selectedOptObj && (
          <div
            className={`p-3.5 rounded-2xl text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-200 border ${
              selectedOptObj.correct
                ? 'bg-emerald-900/40 border-emerald-500/40 text-emerald-200'
                : 'bg-rose-900/40 border-rose-500/40 text-rose-200'
            }`}
          >
            <p className="leading-relaxed">{selectedOptObj.explanation}</p>
          </div>
        )}

        {/* Action Button after trial or initial state */}
        <div className="pt-3">
          <Link
            href="/assessment"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 font-black py-3.5 px-5 rounded-2xl text-sm transition-all shadow-lg hover:shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.99]"
          >
            <Zap className="w-4 h-4 fill-slate-950" />
            <span>{answered ? 'Finish All 20 Questions (3 Mins) →' : 'Take 3-Min Assessment (Instant Score) →'}</span>
          </Link>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2.5 px-1">
            <span>✨ 100% Free • No credit card</span>
            <span className="text-amber-300 font-semibold">Instant Radar Breakdown</span>
          </div>
        </div>
      </div>
    </div>
  );
}
