'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  Award,
  Layers,
  Code2,
  Users2,
  Cpu,
  Brain,
  Check,
  Zap,
} from 'lucide-react';
import {
  CERT_TIERS,
  CORE_TIER_ORDER,
  ROLE_TIER_ORDER,
  PYTHON_TIER_ORDER,
  AGENTIC_TIER_ORDER,
  FINANCE_TIER_ORDER,
  INTEGRATION_TIER_ORDER,
  CertTier,
  getSlugByTier,
} from '@/lib/certTypes';

type CategoryFilter = 'all' | 'core' | 'agentic' | 'finance' | 'role' | 'python' | 'integration';

export function HomeCertificationCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('core');

  const categories: { id: CategoryFilter; label: string; count: number; icon: typeof Sparkles }[] = [
    { id: 'core', label: 'Core AI Ladder (Featured)', count: CORE_TIER_ORDER.length, icon: Brain },
    { id: 'agentic', label: 'Agentic AI & RAG', count: AGENTIC_TIER_ORDER.length, icon: Zap },
    { id: 'finance', label: 'Finance & FinOps AI', count: FINANCE_TIER_ORDER.length, icon: Award },
    { id: 'role', label: 'Role-Based AI Tracks', count: ROLE_TIER_ORDER.length, icon: Users2 },
    { id: 'python', label: 'Applied Python', count: PYTHON_TIER_ORDER.length, icon: Code2 },
    { id: 'integration', label: 'Enterprise Integration', count: INTEGRATION_TIER_ORDER.length, icon: Cpu },
    { id: 'all', label: 'All 23 Certifications', count: 23, icon: Layers },
  ];

  const getTiersForCategory = (): CertTier[] => {
    switch (activeCategory) {
      case 'core':
        return CORE_TIER_ORDER;
      case 'agentic':
        return AGENTIC_TIER_ORDER;
      case 'finance':
        return FINANCE_TIER_ORDER;
      case 'role':
        return ROLE_TIER_ORDER;
      case 'python':
        return PYTHON_TIER_ORDER;
      case 'integration':
        return INTEGRATION_TIER_ORDER;
      case 'all':
      default:
        return [
          ...CORE_TIER_ORDER,
          ...AGENTIC_TIER_ORDER,
          ...FINANCE_TIER_ORDER,
          ...ROLE_TIER_ORDER,
          ...PYTHON_TIER_ORDER,
          ...INTEGRATION_TIER_ORDER,
        ];
    }
  };

  const displayedTiers = getTiersForCategory();

  return (
    <div className="w-full space-y-8">
      {/* Category Tab Selector */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 border ${
                isSelected
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-slate-400'}`} />
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-800 text-slate-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid of Certification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {displayedTiers.map((tierKey, index) => {
          const tier = CERT_TIERS[tierKey];
          const slug = getSlugByTier(tierKey);
          const isFlagship = tierKey === 'beginner' || tierKey === 'practitioner';

          return (
            <div
              key={tierKey}
              className={`relative rounded-3xl border bg-slate-900/90 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/70 hover:shadow-2xl hover:shadow-indigo-500/10 group ${
                isFlagship ? 'border-indigo-500/50 shadow-lg shadow-indigo-500/5' : 'border-slate-800'
              }`}
            >
              {/* Top Accent Light */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-12 w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"
              />

              <div className="space-y-4">
                {/* Header Pills: Level + Launch Free Banner */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm"
                      style={{
                        backgroundColor: tier.colorScheme.bgBadge,
                        color: tier.colorScheme.textBadge,
                        borderColor: tier.colorScheme.border,
                      }}
                    >
                      {tier.badgeLabel}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/60">
                      Level {tier.levelNumber}
                    </span>
                  </div>

                  {/* Free Launch Pill */}
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    $0 (Free Launch Access)
                  </span>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-300 transition-colors">
                    {tier.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {tier.shortDescription}
                  </p>
                </div>

                {/* Exam Key Specifications */}
                <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 text-center">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Format</span>
                    <span className="text-xs font-bold text-slate-100">{tier.questionCount} Proctored MCQs</span>
                  </div>
                  <div className="space-y-0.5 border-x border-slate-800/80">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Duration</span>
                    <span className="text-xs font-bold text-slate-100">{tier.durationMinutes} Minutes</span>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Standard</span>
                    <span className="text-xs font-bold text-emerald-400">{tier.passingScorePercent}% to Pass</span>
                  </div>
                </div>

                {/* Key Tested Competencies */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Evaluated Skills:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tier.keyTopics.slice(0, 4).map((topic, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-300 bg-slate-800/40 p-2 rounded-xl border border-slate-800/60"
                      >
                        <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Award className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Includes 1-Click LinkedIn Digital Badge</span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/certification/${slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-indigo-600/30 hover:scale-[1.02] active:scale-98 group/btn"
                  >
                    <span>Get Certified</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Certifications Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-indigo-950/60 border border-indigo-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="space-y-1">
          <h4 className="text-base font-bold text-white flex items-center justify-center sm:justify-start gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Looking for a specialized role or enterprise system?</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-400">
            Explore all 18 tracks across Core AI, Roles (Sales, Devs, Marketers, Support, HR, Managers), Python, and Enterprise Integration.
          </p>
        </div>
        <Link
          href="/certification"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0"
        >
          <span>View Full Catalog (18 Tracks)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
