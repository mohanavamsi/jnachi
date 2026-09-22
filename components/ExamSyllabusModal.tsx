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
  Target,
  FileCheck2,
} from 'lucide-react';
import {
  CertTier,
  CERT_TIERS,
  CORE_TIER_ORDER,
  ROLE_TIER_ORDER,
  PYTHON_TIER_ORDER,
} from '@/lib/certTypes';
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

const SECTION_COLORS: Record<CertSection, { text: string; bg: string; border: string }> = {
  literacy: { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  automation: { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
  privacy: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  growth: { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
};

export default function ExamSyllabusModal({
  isOpen,
  onClose,
  initialTier = 'beginner',
  onSelectTier,
}: ExamSyllabusModalProps) {
  const [activeTier, setActiveTier] = useState<CertTier>(initialTier);
  const [activeSection, setActiveSection] = useState<CertSection | 'all'>('all');
  const [categoryTab, setCategoryTab] = useState<'core' | 'role' | 'python'>('core');

  React.useEffect(() => {
    if (isOpen && initialTier) {
      setActiveTier(initialTier);
      const tierConfig = CERT_TIERS[initialTier];
      if (tierConfig) {
        setCategoryTab(tierConfig.category);
      }
    }
  }, [isOpen, initialTier]);

  if (!isOpen) return null;

  const syllabus = CERT_SYLLABUS[activeTier] || CERT_SYLLABUS.beginner;
  const tierConfig = CERT_TIERS[activeTier] || CERT_TIERS.beginner;

  const handleTierChange = (tier: CertTier) => {
    setActiveTier(tier);
    if (onSelectTier) onSelectTier(tier);
  };

  const sectionsList: CertSection[] = ['literacy', 'automation', 'privacy', 'growth'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[94vh] max-h-[950px]">
        {/* COMPACT & SLEEK MODAL HEADER */}
        <div className="px-6 py-4 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
              style={{
                backgroundColor: tierConfig.colorScheme.bgBadge,
                color: tierConfig.colorScheme.textBadge,
              }}
            >
              0{tierConfig.levelNumber}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white leading-tight">
                  {syllabus.title}
                </h2>
                <span className="hidden sm:inline-block text-[11px] font-bold text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded-md border border-indigo-800/50">
                  Official Syllabus
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 line-clamp-1 max-w-2xl">
                {syllabus.overview}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Quick Track Switcher Dropdown / Category Selector */}
            <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700/80">
              <button
                type="button"
                onClick={() => setCategoryTab('core')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  categoryTab === 'core'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Core
              </button>
              <button
                type="button"
                onClick={() => setCategoryTab('role')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  categoryTab === 'role'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Roles
              </button>
              <button
                type="button"
                onClick={() => setCategoryTab('python')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  categoryTab === 'python'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Python
              </button>
            </div>

            <button
              onClick={onClose}
              aria-label="Close syllabus"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TRACK SELECTOR PILLS BAR */}
        <div className="px-6 py-2.5 bg-slate-950/90 text-white border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto shrink-0 scrollbar-none">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1">
            Tracks:
          </span>
          {(categoryTab === 'core'
            ? CORE_TIER_ORDER
            : categoryTab === 'role'
            ? ROLE_TIER_ORDER
            : PYTHON_TIER_ORDER
          ).map((tierKey) => {
            const cfg = CERT_TIERS[tierKey];
            const isSelected = activeTier === tierKey;
            return (
              <button
                key={tierKey}
                type="button"
                onClick={() => handleTierChange(tierKey)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-md font-extrabold'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cfg.colorScheme.primary }}
                />
                <span>{cfg.roleName || cfg.title}</span>
              </button>
            );
          })}
        </div>

        {/* EXAM KEY SPECS & DOMAIN FILTER TOOLBAR */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center flex-wrap gap-2 sm:gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <FileCheck2 className="w-4 h-4 text-indigo-600" />
              <span>
                <strong>{syllabus.examSpecs.totalQuestions}</strong> Questions
              </span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>
                <strong>{syllabus.examSpecs.durationMinutes}m</strong> Time Limit
              </span>
            </span>
            <span className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>
                <strong>{syllabus.examSpecs.passingScorePercent}%</strong> Standard (32/40)
              </span>
            </span>
          </div>

          {/* Domain Filter Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveSection('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                activeSection === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-200/70 hover:bg-slate-200 text-slate-700'
              }`}
            >
              All 4 Domains (100%)
            </button>
            {sectionsList.map((secKey) => {
              const sec = syllabus.sections[secKey];
              const Icon = SECTION_ICONS[secKey];
              const isSelected = activeSection === secKey;
              return (
                <button
                  key={secKey}
                  type="button"
                  onClick={() => setActiveSection(secKey)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-200/70 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{sec.title.split(' ')[0]}</span>
                  <span className="text-[10px] opacity-75">(25%)</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN EXPANSIVE SYLLABUS CONTENT BODY (SCROLLABLE) */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 bg-slate-50/50">
          {sectionsList
            .filter((secKey) => activeSection === 'all' || activeSection === secKey)
            .map((secKey) => {
              const sectionData: SyllabusSection = syllabus.sections[secKey];
              if (!sectionData) return null;
              const Icon = SECTION_ICONS[secKey];
              const colors = SECTION_COLORS[secKey];

              return (
                <div
                  key={secKey}
                  className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6"
                >
                  {/* Domain Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${colors.bg} ${colors.text} shadow-2xs`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                            Domain 0{sectionsList.indexOf(secKey) + 1}
                          </span>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}
                          >
                            {sectionData.weightPercent}% Weight (10 Questions)
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-0.5">
                          {sectionData.title}
                        </h3>
                      </div>
                    </div>

                    {sectionData.recommendedLessonSlugs &&
                      sectionData.recommendedLessonSlugs.length > 0 && (
                        <Link
                          href="/lessons"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 bg-indigo-50/70 hover:bg-indigo-100 px-3.5 py-2 rounded-xl transition-colors border border-indigo-100 shrink-0 self-start sm:self-auto"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Study Hub ({sectionData.recommendedLessonSlugs.length} Lessons)</span>
                        </Link>
                      )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-4xl">
                    {sectionData.overview}
                  </p>

                  {/* Competency Modules Grid */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Tested Competencies & Scenario Objectives:
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sectionData.topics.map((topic, i) => (
                        <div
                          key={i}
                          className="bg-slate-50/70 border border-slate-200/80 rounded-2xl p-5 space-y-3 hover:border-indigo-300 hover:bg-white transition-all shadow-2xs"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                            <div>
                              <div className="text-sm font-bold text-slate-900">
                                {topic.title}
                              </div>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                {topic.description}
                              </p>
                            </div>
                          </div>

                          {topic.skillsAssessed && topic.skillsAssessed.length > 0 && (
                            <div className="pl-8 pt-1 flex flex-wrap gap-1.5 border-t border-slate-200/60 mt-2">
                              {topic.skillsAssessed.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[10px] font-semibold bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs"
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
              );
            })}

          {/* PREPARATION ROADMAP & PROCTORING RULES */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-600" />
              <span>Candidate Preparation Roadmap & Examination Rules</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {syllabus.preparationPath.map((step) => (
                <div
                  key={step.stepNumber}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                      {step.stepNumber}
                    </span>
                    <span className="text-xs font-bold text-slate-900">{step.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-8 leading-relaxed">
                    {step.action}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900 space-y-1.5">
              <div className="font-bold flex items-center gap-2 text-amber-950">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Active Proctoring Integrity Standards:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-amber-900">
                {syllabus.examSpecs.proctoringRules.map((rule, idx) => (
                  <li key={idx}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500">
            Ready to test? Close this guide to proceed with candidate verification and start the exam.
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all active:scale-95"
          >
            Close & Start Exam
          </button>
        </div>
      </div>
    </div>
  );
}
