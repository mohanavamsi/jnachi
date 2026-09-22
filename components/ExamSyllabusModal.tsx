'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  X,
  BookOpen,
  CheckCircle2,
  Clock,
  Award,
  ShieldCheck,
  Zap,
  Lock,
  Sparkles,
  TrendingUp,
  Layers,
  ArrowRight,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { CertTier, CERT_TIERS, TIER_ORDER, CORE_TIER_ORDER, ROLE_TIER_ORDER, PYTHON_TIER_ORDER } from '@/lib/certTypes';
import { CERT_SYLLABUS, SyllabusSection } from '@/lib/certSyllabus';
import { CertSection } from '@/lib/certQuestions/types';

interface ExamSyllabusModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: CertTier;
  onSelectTier?: (tier: CertTier) => void;
}

const SECTION_ICONS: Record<CertSection, React.ElementType> = {
  literacy: Sparkles,
  automation: Zap,
  privacy: ShieldCheck,
  growth: TrendingUp,
};

export default function ExamSyllabusModal({
  isOpen,
  onClose,
  initialTier = 'beginner',
  onSelectTier,
}: ExamSyllabusModalProps) {
  const [activeTier, setActiveTier] = useState<CertTier>(initialTier);
  const [activeSection, setActiveSection] = useState<CertSection>('literacy');

  // Keep active tier synced with initialTier when modal opens
  React.useEffect(() => {
    if (isOpen && initialTier) {
      setActiveTier(initialTier);
    }
  }, [isOpen, initialTier]);

  if (!isOpen) return null;

  const syllabus = CERT_SYLLABUS[activeTier] || CERT_SYLLABUS.beginner;
  const tierConfig = CERT_TIERS[activeTier] || CERT_TIERS.beginner;
  const currentSectionData: SyllabusSection = syllabus.sections[activeSection];
  const SectionIcon = SECTION_ICONS[activeSection];

  const handleTierChange = (tier: CertTier) => {
    setActiveTier(tier);
    if (onSelectTier) onSelectTier(tier);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] my-auto">
        {/* MODAL HEADER */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white relative">
          <button
            onClick={onClose}
            aria-label="Close syllabus"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className="text-xs font-black uppercase px-3 py-1 rounded-full tracking-wider"
              style={{
                backgroundColor: tierConfig.colorScheme.bgBadge,
                color: tierConfig.colorScheme.textBadge,
              }}
            >
              Tier 0{tierConfig.levelNumber} Exam Syllabus
            </span>
            <span className="text-xs text-indigo-200 font-semibold flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" /> Official Candidate Study Guide
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{syllabus.title}</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mt-2 leading-relaxed">
            {syllabus.overview}
          </p>

          {/* Tier Switcher Pills (Grouped by Category) */}
          <div className="space-y-2 mt-5 pt-4 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mr-1">Core:</span>
              {CORE_TIER_ORDER.map((tierKey) => {
                const cfg = CERT_TIERS[tierKey];
                const isSelected = activeTier === tierKey;
                return (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => handleTierChange(tierKey)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-white text-slate-950 shadow-md font-extrabold'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.colorScheme.primary }} />
                    {cfg.title}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mr-1">Roles:</span>
              {ROLE_TIER_ORDER.map((tierKey) => {
                const cfg = CERT_TIERS[tierKey];
                const isSelected = activeTier === tierKey;
                return (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => handleTierChange(tierKey)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-white text-slate-950 shadow-md font-extrabold'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.colorScheme.primary }} />
                    {cfg.roleName || cfg.title}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 mr-1">Python:</span>
              {PYTHON_TIER_ORDER.map((tierKey) => {
                const cfg = CERT_TIERS[tierKey];
                const isSelected = activeTier === tierKey;
                return (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => handleTierChange(tierKey)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-white text-slate-950 shadow-md font-extrabold'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cfg.colorScheme.primary }} />
                    {cfg.roleName || cfg.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* EXAM SPECIFICATION SUMMARY BAR */}
        <div className="bg-slate-50 border-b border-slate-200 p-4 sm:px-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-2">
            <div className="text-lg sm:text-xl font-black text-slate-900">{syllabus.examSpecs.totalQuestions} Questions</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Exam Length</div>
          </div>
          <div className="p-2">
            <div className="text-lg sm:text-xl font-black text-amber-600">{syllabus.examSpecs.durationMinutes} Minutes</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Time Limit</div>
          </div>
          <div className="p-2">
            <div className="text-lg sm:text-xl font-black text-emerald-600">{syllabus.examSpecs.passingScorePercent}% (32/40)</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Passing Standard</div>
          </div>
          <div className="p-2">
            <div className="text-lg sm:text-xl font-black text-indigo-600">80 Pool / 4 Tracks</div>
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Dynamic Sampling</div>
          </div>
        </div>

        {/* MODAL BODY WITH TABS & CURRICULUM */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* SECTION 1: 4 CORE CURRICULUM TRACKS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Curriculum Breakdown (25% per Track)</h3>
                <p className="text-xs text-slate-500">Each examination attempt draws 10 balanced questions per domain.</p>
              </div>
            </div>

            {/* Section Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(['literacy', 'automation', 'privacy', 'growth'] as CertSection[]).map((secKey) => {
                const sec = syllabus.sections[secKey];
                const Icon = SECTION_ICONS[secKey];
                const isSelected = activeSection === secKey;

                return (
                  <button
                    key={secKey}
                    type="button"
                    onClick={() => setActiveSection(secKey)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/60 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-600' : 'text-slate-400'}`} />
                      <span className={`text-[11px] font-black px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {sec.weightPercent}%
                      </span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 leading-snug">{sec.title}</div>
                  </button>
                );
              })}
            </div>

            {/* Active Section Content Card */}
            {currentSectionData && (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5 animate-in fade-in duration-150">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                      <SectionIcon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-900">{currentSectionData.title}</h4>
                      <p className="text-xs text-slate-600 mt-0.5">{currentSectionData.overview}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-100/70 px-3 py-1 rounded-full shrink-0">
                    Weight: {currentSectionData.weightPercent}% (10 Questions)
                  </span>
                </div>

                {/* Sub-Topics & Assessed Competencies */}
                <div className="space-y-4">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">Detailed Topics & Assessed Skills</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentSectionData.topics.map((topic, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 space-y-2.5 shadow-2xs">
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{topic.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{topic.description}</p>
                        <div className="pt-2 border-t border-slate-100">
                          <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider mb-1.5">
                            Assessed Competencies:
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {topic.skillsAssessed.map((skill, si) => (
                              <span
                                key={si}
                                className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Lesson Link */}
                {currentSectionData.recommendedLessonSlugs && currentSectionData.recommendedLessonSlugs.length > 0 && (
                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-600">
                      Recommended Practice Modules: <span className="font-semibold text-slate-800">Review lesson modules in the library for direct hands-on exercises.</span>
                    </div>
                    <Link
                      href="/lessons"
                      onClick={onClose}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 shrink-0"
                    >
                      Browse Lessons <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* SECTION 2: CANDIDATE PREPARATION ROADMAP */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-900">Recommended Preparation Roadmap</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {syllabus.preparationPath.map((step) => (
                <div key={step.stepNumber} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
                  <div className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-black flex items-center justify-center">
                    {step.stepNumber}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900">{step.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{step.action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3: EXAM PROCTORING & INTEGRITY RULES */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
              <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Proctored Examination Integrity Guardrails</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-800">
              {syllabus.examSpecs.proctoringRules.map((rule, ri) => (
                <li key={ri} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="p-5 sm:px-8 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            Target Audience: <span className="font-semibold text-slate-700">{syllabus.targetRole}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
          >
            Ready to Take Exam <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
