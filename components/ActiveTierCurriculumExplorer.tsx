'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  Layers,
  Clock,
  Award,
  ChevronDown,
  ChevronUp,
  FileText,
  ExternalLink,
} from 'lucide-react';
import { CertTier, CERT_TIERS } from '@/lib/certTypes';
import { CERT_SYLLABUS, SyllabusSection } from '@/lib/certSyllabus';
import { CertSection } from '@/lib/certQuestions/types';

interface ActiveTierCurriculumExplorerProps {
  tier: CertTier;
  onOpenFullSyllabusModal: () => void;
}

const SECTION_METADATA: Record<
  CertSection,
  { label: string; icon: React.ElementType; color: string; bgLight: string; border: string }
> = {
  literacy: {
    label: 'Literacy & Foundations',
    icon: Sparkles,
    color: 'text-indigo-600',
    bgLight: 'bg-indigo-50/80',
    border: 'border-indigo-200',
  },
  automation: {
    label: 'Applied Automation',
    icon: Zap,
    color: 'text-amber-600',
    bgLight: 'bg-amber-50/80',
    border: 'border-amber-200',
  },
  privacy: {
    label: 'Privacy & Security',
    icon: ShieldCheck,
    color: 'text-emerald-600',
    bgLight: 'bg-emerald-50/80',
    border: 'border-emerald-200',
  },
  growth: {
    label: 'Growth & Optimization',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgLight: 'bg-purple-50/80',
    border: 'border-purple-200',
  },
};

export default function ActiveTierCurriculumExplorer({
  tier,
  onOpenFullSyllabusModal,
}: ActiveTierCurriculumExplorerProps) {
  const [activeSection, setActiveSection] = useState<CertSection>('literacy');
  const [showPrepRoadmap, setShowPrepRoadmap] = useState(false);

  const tierConfig = CERT_TIERS[tier] || CERT_TIERS.beginner;
  const syllabus = CERT_SYLLABUS[tier] || CERT_SYLLABUS.beginner;
  const currentSection: SyllabusSection = syllabus.sections[activeSection] || syllabus.sections.literacy;
  const activeMeta = SECTION_METADATA[activeSection];
  const ActiveIcon = activeMeta.icon;

  const sectionsList: CertSection[] = ['literacy', 'automation', 'privacy', 'growth'];

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl shadow-sm overflow-hidden transition-all">
      {/* 1. HERO HEADER */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider shadow-sm"
                style={{
                  backgroundColor: tierConfig.colorScheme.bgBadge,
                  color: tierConfig.colorScheme.textBadge,
                }}
              >
                Tier 0{tierConfig.levelNumber} Certification Exam
              </span>
              <span className="text-xs text-indigo-200/90 font-medium flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                80% Standard • Proctored
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {tierConfig.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {syllabus.overview}
            </p>
          </div>

          {/* Key Metric Badges */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 shrink-0">
            <div className="p-3 sm:p-3.5 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-sm min-w-[85px] sm:min-w-[100px]">
              <div className="text-xl sm:text-2xl font-black text-white">40</div>
              <div className="text-[10px] font-bold text-indigo-200 uppercase tracking-wider mt-0.5">Questions</div>
            </div>
            <div className="p-3 sm:p-3.5 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-sm min-w-[85px] sm:min-w-[100px]">
              <div className="text-xl sm:text-2xl font-black text-amber-400">45m</div>
              <div className="text-[10px] font-bold text-indigo-200 uppercase tracking-wider mt-0.5">Duration</div>
            </div>
            <div className="p-3 sm:p-3.5 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-sm min-w-[85px] sm:min-w-[100px]">
              <div className="text-xl sm:text-2xl font-black text-emerald-400">4</div>
              <div className="text-[10px] font-bold text-indigo-200 uppercase tracking-wider mt-0.5">Domains</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE DOMAIN SELECTOR TABS */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>Exam Competency Matrix & Domain Breakdown</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Select any domain below to inspect tested skills, real-world scenarios, and preparation materials.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenFullSyllabusModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-all border border-indigo-200/80 shadow-2xs self-start sm:self-auto active:scale-95"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Open Full Study Guide</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* 4 Interactive Domain Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
          {sectionsList.map((secKey) => {
            const meta = SECTION_METADATA[secKey];
            const secData = syllabus.sections[secKey];
            const isSelected = activeSection === secKey;
            const Icon = meta.icon;

            return (
              <button
                key={secKey}
                type="button"
                onClick={() => setActiveSection(secKey)}
                className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 relative ${
                  isSelected
                    ? `${meta.bgLight} ${meta.border} shadow-sm ring-2 ring-indigo-500/20`
                    : 'bg-slate-50 hover:bg-slate-100/80 border-slate-200/80 text-slate-600'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-white shadow-xs' : 'bg-slate-200/70'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? meta.color : 'text-slate-500'}`} />
                  </div>
                  <span
                    className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white text-slate-900 shadow-2xs font-mono' : 'text-slate-400 font-mono'
                    }`}
                  >
                    {secData?.weightPercent || 25}%
                  </span>
                </div>

                <div>
                  <div
                    className={`text-xs font-bold leading-tight ${
                      isSelected ? 'text-slate-900' : 'text-slate-700'
                    }`}
                  >
                    {meta.label}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    {secData?.topics?.length || 3} Core Skill Areas
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-indigo-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* 3. ACTIVE DOMAIN CONTENT CARD */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 sm:p-6 space-y-5 animate-in fade-in duration-150">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/60 pb-3.5">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-xl bg-white shadow-xs ${activeMeta.color}`}>
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Domain Blueprint • {currentSection.weightPercent}% Exam Weight
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  {currentSection.title}
                </h4>
              </div>
            </div>

            {currentSection.recommendedLessonSlugs && currentSection.recommendedLessonSlugs.length > 0 && (
              <Link
                href="/lessons"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs self-start sm:self-auto hover:bg-indigo-50 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Practice in Hub ({currentSection.recommendedLessonSlugs.length} Lessons)</span>
              </Link>
            )}
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {currentSection.overview}
          </p>

          {/* Competency Topics List */}
          <div className="space-y-3">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Assessed Competency Modules & Practical Scenarios:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentSection.topics.map((topic, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-2 hover:border-indigo-300 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-slate-900 leading-snug">
                        {topic.title}
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>

                  {topic.skillsAssessed && topic.skillsAssessed.length > 0 && (
                    <div className="pl-6 flex flex-wrap gap-1.5 pt-1">
                      {topic.skillsAssessed.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. PREPARATION PATH TOGGLE (OPTIONAL EXPANDABLE) */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowPrepRoadmap(!showPrepRoadmap)}
            className="w-full flex items-center justify-between p-3.5 bg-indigo-50/50 hover:bg-indigo-50 border border-indigo-100 rounded-2xl text-xs font-bold text-indigo-900 transition-all"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Recommended 4-Step Candidate Preparation Strategy</span>
            </div>
            <div className="flex items-center gap-1 text-indigo-600 text-xs font-semibold">
              <span>{showPrepRoadmap ? 'Hide Strategy' : 'View Strategy'}</span>
              {showPrepRoadmap ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showPrepRoadmap && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 animate-in fade-in duration-200">
              {syllabus.preparationPath.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center">
                      {step.stepNumber}
                    </span>
                    <span className="text-xs font-bold text-slate-900">{step.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed pl-7">
                    {step.action}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
