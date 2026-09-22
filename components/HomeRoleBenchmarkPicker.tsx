'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Sparkles, TrendingUp, Users, MessageSquare, Terminal, Shield, Briefcase, Zap, CheckCircle2 } from 'lucide-react';

interface RoleTrackInfo {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  color: string;
  bgBadge: string;
  textColor: string;
  tagline: string;
  description: string;
  competencies: string[];
  certSlug: string;
}

const ROLE_TRACKS: RoleTrackInfo[] = [
  {
    id: 'developers',
    name: 'Developers & Software Engineers',
    badge: 'ENGINEERING',
    icon: Code2,
    color: '#3b82f6',
    bgBadge: '#eff6ff',
    textColor: '#1d4ed8',
    tagline: 'Code generation, debugging stack traces & safe AI workflows',
    description: 'Diagnoses developer instinct across multi-file coding agents, prompt-assisted debugging, hallucinated API detection, and licensing/IP boundaries.',
    competencies: [
      'AST & Precision Prompting for Codebases',
      'Debugging Complex Async Stack Traces',
      'Hallucination Audits & Code Security',
      'Licensing, ZDR & Codebase Confidentiality',
    ],
    certSlug: 'developers',
  },
  {
    id: 'python_ai',
    name: 'Python for AI & Automation',
    badge: 'PYTHON SPECIALIZATION',
    icon: Terminal,
    color: '#06b6d4',
    bgBadge: '#ecfeff',
    textColor: '#0e7490',
    tagline: 'LLM SDKs, Pydantic schemas, function calling & RAG',
    description: 'Tests Python proficiency in orchestrating OpenAI/Anthropic APIs, streaming, structured JSON extraction with Pydantic, vector search, and token optimization.',
    competencies: [
      'OpenAI / Anthropic Python SDKs & Streaming',
      'Structured Pydantic Extraction & JSON Schemas',
      'Tool Calling, Agents & Task Execution Loops',
      'Vector Embeddings & RAG Token Optimization',
    ],
    certSlug: 'python_ai',
  },
  {
    id: 'marketers',
    name: 'Marketers & Growth Leads',
    badge: 'MARKETING & CONTENT',
    icon: Sparkles,
    color: '#ec4899',
    bgBadge: '#fdf2f8',
    textColor: '#be185d',
    tagline: 'Omnichannel campaigns, brand voice & growth analytics',
    description: 'Measures content agility: generating high-converting campaign hooks, enforcing brand tone consistency, and turning raw analytics into growth narratives.',
    competencies: [
      'High-Converting Campaign Ideation & Hooks',
      'Brand Voice Calibration & Few-Shot Persona',
      'Performance Analytics & Reporting Synthesis',
      'Copyright Hygiene & Disclosure Protocols',
    ],
    certSlug: 'marketers',
  },
  {
    id: 'sales',
    name: 'Sales & Revenue Teams',
    badge: 'SALES & REVENUE',
    icon: TrendingUp,
    color: '#f59e0b',
    bgBadge: '#fffbeb',
    textColor: '#b45309',
    tagline: 'Account research, outbound personalization & CRM notes',
    description: 'Assesses commercial speed: transforming customer call recordings into CRM action items, drafting customized proposals, and protecting deal confidentiality.',
    competencies: [
      'Hyper-Personalized Account Research & Hooks',
      'Call Transcript Synthesis into CRM Systems',
      'Proposal & Custom Objection Response Drafting',
      'Sales Judgment & Deal Data Protection',
    ],
    certSlug: 'sales',
  },
  {
    id: 'managers',
    name: 'Managers & Team Leads',
    badge: 'LEADERSHIP',
    icon: Briefcase,
    color: '#6366f1',
    bgBadge: '#eef2ff',
    textColor: '#4338ca',
    tagline: 'Team adoption strategy, tool evaluation & AI ROI',
    description: 'Evaluates leadership fluency in driving safe AI adoption across teams, vetting enterprise tool security, upskilling reports, and preventing skill atrophy.',
    competencies: [
      'High-ROI Workflow Identification for Teams',
      'Tool Vetting for Security, Privacy & TCO',
      'Coaching Direct Reports & Prompt Enablement',
      'Measuring Real Productivity Gains vs Vanity',
    ],
    certSlug: 'managers',
  },
  {
    id: 'support',
    name: 'Customer Support & Success',
    badge: 'CUSTOMER EXPERIENCE',
    icon: MessageSquare,
    color: '#10b981',
    bgBadge: '#f0fdf4',
    textColor: '#047857',
    tagline: 'Ticket triage, empathetic drafts & privacy boundaries',
    description: 'Evaluates customer-facing operators on resolving complex tickets 3x faster while retaining human empathy, policy compliance, and customer PII safety.',
    competencies: [
      'Smart Ticket Triage & Priority Routing',
      'Accurate, Empathetic Draft Generation',
      'Escalation Judgment & Boundary Detection',
      'Customer PII Redaction & Data Protection',
    ],
    certSlug: 'support',
  },
];

export function HomeRoleBenchmarkPicker() {
  const [activeTab, setActiveTab] = useState('developers');
  const activeRole = ROLE_TRACKS.find((r) => r.id === activeTab) || ROLE_TRACKS[0];
  const IconComponent = activeRole.icon;

  return (
    <div className="w-full space-y-8">
      {/* Role Pill Switcher */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap justify-start sm:justify-center">
        {ROLE_TRACKS.map((role) => {
          const isSelected = activeTab === role.id;
          const RoleIcon = role.icon;
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => setActiveTab(role.id)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shrink-0 border ${
                isSelected
                  ? 'bg-slate-900 text-white border-indigo-500 shadow-md ring-2 ring-indigo-500/20 scale-[1.02]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <RoleIcon className="w-4 h-4" style={{ color: isSelected ? '#a5b4fc' : role.color }} />
              <span>{role.name.split('&')[0].trim()}</span>
            </button>
          );
        })}
      </div>

      {/* Active Role Benchmark Card */}
      <div className="bg-white border-2 border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl transition-all relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Role Details */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="text-[11px] font-black uppercase px-3 py-1 rounded-full tracking-wider"
                style={{ backgroundColor: activeRole.bgBadge, color: activeRole.textColor }}
              >
                {activeRole.badge}
              </span>
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-500" /> 3-Minute Diagnostic
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {activeRole.name}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-indigo-600">
                {activeRole.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {activeRole.description}
              </p>
            </div>

            {/* Competency Checkpoints */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Core Competencies Diagnosed:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeRole.competencies.map((comp, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-800 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Instant Action Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-7 text-white flex flex-col justify-between space-y-6 shadow-lg border border-indigo-500/20">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-amber-300" />
                </div>
                <span className="text-xs font-black uppercase tracking-wider bg-amber-400/20 border border-amber-400/40 text-amber-300 px-3 py-1 rounded-full">
                  100% Free
                </span>
              </div>

              <div>
                <div className="text-xs text-indigo-200 font-semibold uppercase tracking-wider">Benchmark Mode</div>
                <h4 className="text-xl font-black text-white mt-1">
                  {activeRole.name.split(' ')[0]} Diagnostic
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  20 adaptive scenario questions evaluating real practical execution without fluff.
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Estimated Time:</span>
                  <strong className="text-white">~3 Minutes</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Instant Output:</span>
                  <strong className="text-emerald-400">Scorecard & Radar Chart</strong>
                </div>
                <div className="flex items-center justify-between">
                  <span>Credential Link:</span>
                  <strong className="text-amber-300">Jnachi Certified Track</strong>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              <Link
                href="/assessment"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black py-3.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:scale-[1.02]"
              >
                <span>Start {activeRole.name.split(' ')[0]} Assessment →</span>
              </Link>
              <Link
                href="/certification"
                className="w-full inline-flex items-center justify-center text-xs text-slate-400 hover:text-white transition-colors"
              >
                Or view official {activeRole.name.split(' ')[0]} Certification syllabus →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
