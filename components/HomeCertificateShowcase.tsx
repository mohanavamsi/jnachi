'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Share2,
  Download,
  Sparkles,
  QrCode,
  ArrowRight,
  Check,
} from 'lucide-react';

export function HomeCertificateShowcase() {
  const [copiedLink, setCopiedLink] = useState(false);

  const sampleCert = {
    id: 'JNA-89241-AI',
    candidateName: 'Alex Morgan',
    trackName: 'Jnachi Certified AI Practitioner (Level 2)',
    badgeLabel: 'JNACHI CERTIFIED AI PRACTITIONER',
    score: 92,
    passingScore: 80,
    issuedDate: 'September 2026',
  };

  const handleCopySample = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(`https://jnachi.com/verify/${sampleCert.id}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* Left Column: Clear Deliverable Value Prop */}
      <div className="lg:col-span-6 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
          <Award className="w-3.5 h-3.5" />
          <span>Verifiable Proof of Capability</span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
          What you earn when you pass a Jnachi proctored exam.
        </h3>

        <p className="text-base text-slate-300 leading-relaxed">
          Jnachi doesn&apos;t just grant a generic course completion paper. You earn an official, anti-cheating verified credential that proves practical mastery to employers, clients, and peers.
        </p>

        <div className="space-y-4 pt-2">
          {/* Deliverable 1 */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Cryptographic Verification Registry</h4>
              <p className="text-xs text-slate-400 mt-1">
                Every certificate has a unique, tamper-proof ID hosted permanently on <code className="text-[11px] text-indigo-300 font-mono">jnachi.com/verify</code> for 1-click recruiter checks.
              </p>
            </div>
          </div>

          {/* Deliverable 2 */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">1-Click &ldquo;Add to LinkedIn&rdquo; Integration</h4>
              <p className="text-xs text-slate-400 mt-1">
                Directly attaches the official license name, issuing authority (Jnachi), certificate ID, and verification link to your LinkedIn profile.
              </p>
            </div>
          </div>

          {/* Deliverable 3 */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">High-Resolution Diploma & Scorecard</h4>
              <p className="text-xs text-slate-400 mt-1">
                Instant PNG/PDF downloads with high-resolution seals, official timestamps, and four-domain competency score breakdowns.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link
            href="/certification"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition-all shadow-md shadow-indigo-600/30"
          >
            <span>Explore Certifications</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/verify"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <span>Try Verification Lookup →</span>
          </Link>
        </div>
      </div>

      {/* Right Column: Realistic Certificate Mockup with Live Controls */}
      <div className="lg:col-span-6 relative">
        {/* Glowing backdrop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-amber-500/10 rounded-3xl blur-2xl pointer-events-none"
        />

        {/* Certificate Card Mockup */}
        <div className="relative bg-slate-900 border-2 border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-100 overflow-hidden">
          {/* Decorative Corner Seals */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-black text-sm">
                J
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-200 block">
                  Jnachi Certification Council
                </span>
                <span className="text-[10px] text-slate-400">Official Credential Registry</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-[11px] font-bold text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Authentic</span>
            </div>
          </div>

          {/* Certificate Body */}
          <div className="text-center space-y-3 py-2">
            <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 block">
              Official Credential Awarded To
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {sampleCert.candidateName}
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
              having demonstrated applied mastery in prompt engineering, automated workflows, and data security by passing the proctored examination.
            </p>

            <div className="pt-2">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-400/30">
                {sampleCert.trackName}
              </span>
            </div>
          </div>

          {/* Score & Credential Specs Banner */}
          <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Exam Score</span>
              <span className="text-sm font-black text-emerald-400">{sampleCert.score}% (Pass)</span>
            </div>
            <div className="border-x border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Issued</span>
              <span className="text-xs font-bold text-slate-200">{sampleCert.issuedDate}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-bold block">Certificate ID</span>
              <span className="text-xs font-mono font-bold text-amber-300">{sampleCert.id}</span>
            </div>
          </div>

          {/* Interactive Share / Verify Simulation */}
          <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <button
              onClick={handleCopySample}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700 transition-all"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <QrCode className="w-3.5 h-3.5 text-indigo-400" />}
              <span>{copiedLink ? 'Link Copied!' : 'Copy Verification URL'}</span>
            </button>

            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>1-Click LinkedIn Digital Badge</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
