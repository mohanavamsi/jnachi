'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Award,
} from 'lucide-react';

export function HomeAudienceSwitcher() {
  const [activeAudience, setActiveAudience] = useState<'students' | 'professionals'>('students');

  return (
    <div className="w-full bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 space-y-8">
      {/* Dual Audience Toggle Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
            Tailored Certification Pathways
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Built for Students & Working Professionals
          </h3>
        </div>

        {/* Toggle Pill Buttons */}
        <div className="flex items-center bg-slate-950 p-1 rounded-full border border-slate-800">
          <button
            onClick={() => setActiveAudience('students')}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeAudience === 'students'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Students & Graduates</span>
          </button>
          <button
            onClick={() => setActiveAudience('professionals')}
            className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeAudience === 'professionals'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Working Professionals</span>
          </button>
        </div>
      </div>

      {/* Content for Students */}
      {activeAudience === 'students' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Launch Your Career with Proven AI Literacy</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Stand out in recruiter screens with a verifiable AI certification.
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Anyone can list &ldquo;Prompt Engineering&rdquo; or &ldquo;ChatGPT&rdquo; on a resume. Jnachi provides proctored, tamper-proof credentials that prove you understand prompt hygiene, data privacy, and workflow automation.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Resume-Ready Credential ID:</strong> Direct verification URL employers and hiring managers can check in 1 click.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>100% Free 30-Day Launch Access:</strong> Earn official industry credentials without high examination fee barriers.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Interactive Micro-Study Guides:</strong> Access 5-minute practical lessons to master every exam topic before testing.
                </span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                href="/certification/ai-foundations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-md shadow-indigo-600/30"
              >
                <span>Start AI Foundations (Level 1)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all"
              >
                <span>Take 3-Min Diagnostic</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Top Recommended Tracks for Students:
            </span>
            <div className="space-y-3">
              <Link
                href="/certification/ai-foundations"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all block group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-400">Level 1 • Core</span>
                  <span className="text-[11px] font-semibold text-emerald-400">Free Launch</span>
                </div>
                <h5 className="text-sm font-bold text-white group-hover:text-indigo-300 mt-1">
                  Jnachi Certified AI Foundations
                </h5>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  Baseline literacy across prompts, hallucination guardrails, and privacy.
                </p>
              </Link>

              <Link
                href="/certification/python-ai"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all block group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">Engineering</span>
                  <span className="text-[11px] font-semibold text-emerald-400">Free Launch</span>
                </div>
                <h5 className="text-sm font-bold text-white group-hover:text-cyan-300 mt-1">
                  Applied Python for AI Engineering
                </h5>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  Python scripting, API integration, data wrangling, and model calling.
                </p>
              </Link>

              <Link
                href="/certification/ai-for-marketers"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all block group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400">Role Specialization</span>
                  <span className="text-[11px] font-semibold text-emerald-400">Free Launch</span>
                </div>
                <h5 className="text-sm font-bold text-white group-hover:text-purple-300 mt-1">
                  AI for Marketing & Growth
                </h5>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  Content pipelines, SEO prompts, campaign automation, and analytics.
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Content for Professionals */}
      {activeAudience === 'professionals' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Rigorous & Proctored Skill Validation</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Prove applied execution in your specific role or enterprise stack.
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Jnachi certifications go beyond generic conceptual overviews. Our proctored examinations evaluate applied workflows in Sales, Development, Management, and Enterprise Integration (MuleSoft, Salesforce, IBM MQ, Boomi).
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Role-Specific Depth:</strong> Specialized 40-question scenario evaluations tailored to daily workflows.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>Enterprise Integration Standards:</strong> Validate architecture in API-led integration, messaging queues, and iPaaS.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200">
                  <strong>1-Click LinkedIn Integration:</strong> Instantly attach your credential ID and official license to your LinkedIn profile.
                </span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                href="/certification"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-md shadow-indigo-600/30"
              >
                <span>Browse Professional Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/verify"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-700 transition-all"
              >
                <span>View Verification Registry</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Top Recommended Tracks for Professionals:
            </span>
            <div className="space-y-3">
              <Link
                href="/certification/ai-for-developers"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all block group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-400">Developers</span>
                  <span className="text-[11px] font-semibold text-emerald-400">Free Launch</span>
                </div>
                <h5 className="text-sm font-bold text-white group-hover:text-indigo-300 mt-1">
                  AI for Software Developers & QA
                </h5>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  Code synthesis, test generation, debugging workflows, and API security.
                </p>
              </Link>

              <Link
                href="/certification/mulesoft-integration"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all block group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">Integration</span>
                  <span className="text-[11px] font-semibold text-emerald-400">Free Launch</span>
                </div>
                <h5 className="text-sm font-bold text-white group-hover:text-emerald-300 mt-1">
                  MuleSoft Integration & AI Architect
                </h5>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  API-led connectivity, DataWeave transformations, and Anypoint workflows.
                </p>
              </Link>

              <Link
                href="/certification/ai-for-managers"
                className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500 transition-all block group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">Leadership</span>
                  <span className="text-[11px] font-semibold text-emerald-400">Free Launch</span>
                </div>
                <h5 className="text-sm font-bold text-white group-hover:text-amber-300 mt-1">
                  AI for Managers & Team Leaders
                </h5>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  AI governance, policy guardrails, team tooling adoption, and ROI measurement.
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
