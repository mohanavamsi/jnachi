'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Brain, TrendingUp, CheckCircle, Award } from 'lucide-react';

interface ScoreLevel {
  id: string;
  name: string;
  score: number;
  badge: string;
  color: string;
  literacy: number;
  automation: number;
  privacy: number;
  growth: number;
  insight: string;
  recommendedCert: string;
}

const SAMPLE_LEVELS: ScoreLevel[] = [
  {
    id: 'explorer',
    name: 'Foundational Explorer',
    score: 48,
    badge: 'LEVEL 1: FOUNDATION',
    color: '#6366f1',
    literacy: 60,
    automation: 35,
    privacy: 55,
    growth: 42,
    insight: 'Strong curiosity. Needs structured JSON schemas and few-shot formatting patterns to avoid non-deterministic outputs.',
    recommendedCert: 'Jnachi Certified AI Foundations (Tier 01)',
  },
  {
    id: 'practitioner',
    name: 'Active AI Practitioner',
    score: 74,
    badge: 'LEVEL 2: PRACTITIONER',
    color: '#0284c7',
    literacy: 88,
    automation: 70,
    privacy: 82,
    growth: 56,
    insight: 'Daily AI user with strong prompt hygiene. Ready to scale into multi-step agent chaining and programmatic tools.',
    recommendedCert: 'Jnachi Certified AI Practitioner (Tier 02)',
  },
  {
    id: 'builder',
    name: 'Advanced AI Builder',
    score: 88,
    badge: 'LEVEL 3: BUILDER',
    color: '#059669',
    literacy: 95,
    automation: 90,
    privacy: 86,
    growth: 82,
    insight: 'Exceptional automation instincts. Deep understanding of tool execution loops, RAG, and error resilience.',
    recommendedCert: 'Jnachi Certified AI Builder (Tier 03)',
  },
  {
    id: 'master',
    name: 'Master AI Architect',
    score: 96,
    badge: 'LEVEL 4: ARCHITECT',
    color: '#7c3aed',
    literacy: 98,
    automation: 96,
    privacy: 98,
    growth: 92,
    insight: 'Elite strategic judgment. Excels at adversarial robustness, cost vs latency optimization, and enterprise governance.',
    recommendedCert: 'Jnachi Certified AI Master Architect (Tier 04)',
  },
];

export function HomeScorecardPreview() {
  const [selectedLevelId, setSelectedLevelId] = useState('practitioner');
  const level = SAMPLE_LEVELS.find((l) => l.id === selectedLevelId) || SAMPLE_LEVELS[1];

  const circumference = 2 * Math.PI * 66;
  const strokeDashoffset = circumference - (level.score / 100) * circumference;

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Simulator Pill Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Instant Assessment Output Preview
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
            What Your 3-Minute Diagnostic Delivers
          </h3>
        </div>

        {/* Level Switcher buttons */}
        <div className="flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-2xl border border-white/10 overflow-x-auto">
          {SAMPLE_LEVELS.map((lvl) => {
            const isSelected = selectedLevelId === lvl.id;
            return (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setSelectedLevelId(lvl.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lvl.name.split(' ')[0]} ({lvl.score})
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Scorecard Visual Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 relative z-10">
        {/* Left Column: Circular Progress Ring & Badge */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-800/50 border border-white/5 text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
            Jnachi Momentum Score
          </span>

          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r="66"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="12"
              />
              <circle
                cx="80"
                cy="80"
                r="66"
                fill="none"
                stroke={level.color}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-700 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                {level.score}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                out of 100
              </span>
            </div>
          </div>

          <div
            className="mt-5 inline-flex items-center px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider"
            style={{ backgroundColor: `${level.color}25`, color: '#ffffff', border: `1px solid ${level.color}50` }}
          >
            {level.badge}
          </div>
        </div>

        {/* Right Column: 4-Pillar Radar Breakdown & Prescription */}
        <div className="lg:col-span-8 space-y-6">
          {/* 4 Skill Pillar Progress Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Pillar 1 */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <Brain className="w-3.5 h-3.5 text-indigo-400" /> Prompt Literacy
                </span>
                <span className="font-black text-white">{level.literacy}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${level.literacy}%` }}
                />
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Workflow Automation
                </span>
                <span className="font-black text-white">{level.automation}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-amber-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${level.automation}%` }}
                />
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Enterprise Privacy
                </span>
                <span className="font-black text-white">{level.privacy}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${level.privacy}%` }}
                />
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-300 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-pink-400" /> Problem Solving
                </span>
                <span className="font-black text-white">{level.growth}%</span>
              </div>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-pink-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${level.growth}%` }}
                />
              </div>
            </div>
          </div>

          {/* Diagnostic Recommendation Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/90 to-slate-900 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-300">
                Personalized Learning & Credential Recommendation
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                {level.insight}
              </p>
              <div className="text-xs font-bold text-white pt-1">
                Target Certification: <span className="text-indigo-300">{level.recommendedCert}</span>
              </div>
            </div>

            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-md shrink-0 hover:scale-102"
            >
              <span>Get Your Exact Score →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
