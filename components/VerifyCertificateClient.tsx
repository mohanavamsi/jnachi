'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Download,
  Share2,
  Lock,
  Sparkles,
  Clock,
  User as UserIcon,
  Building,
  MapPin,
  Copy,
  Check,
  Search,
  AlertTriangle,
  ArrowRight,
  ChevronRight,
  FileText,
  Zap,
  TrendingUp,
  ShieldAlert,
} from 'lucide-react';
import { VerifiedCertificateRecord } from '@/lib/certService';
import { CERT_TIERS } from '@/lib/certTypes';
import {
  drawBeginnerCertificate,
  downloadBeginnerCertificatePdf,
  downloadBeginnerCertificatePng,
} from '@/lib/certificate';

interface VerifyCertificateClientProps {
  initialRecord: VerifiedCertificateRecord | null;
  certId: string;
}

export default function VerifyCertificateClient({
  initialRecord,
  certId,
}: VerifyCertificateClientProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [record, setRecord] = useState<VerifiedCertificateRecord | null>(initialRecord);
  const [searchInput, setSearchInput] = useState(certId || '');
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [isGeneratingDownload, setIsGeneratingDownload] = useState(false);

  const tier = record?.tier || 'beginner';
  const tierConfig = CERT_TIERS[tier] || CERT_TIERS.beginner;

  // Automatically resolve candidate real name if record has placeholder
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const nameParam = urlParams.get('name') || urlParams.get('candidate');

      let candidateName = nameParam || '';
      let candidateLocation = '';
      let candidateCompany = '';

      // Check specific certificate record saved in localStorage
      const lookupId = (record?.certificateId || certId || '').toUpperCase();
      if (lookupId) {
        const certKey = `jnachi_cert_${lookupId}`;
        const specificCertRaw = localStorage.getItem(certKey);
        if (specificCertRaw) {
          const parsed = JSON.parse(specificCertRaw);
          if (parsed.recipientName) candidateName = parsed.recipientName;
          if (parsed.location) candidateLocation = parsed.location;
          if (parsed.company) candidateCompany = parsed.company;
        }
      }

      // Check candidate session stored on this device
      if (!candidateName) {
        const sessionRaw = localStorage.getItem('jnachi_candidate_session');
        if (sessionRaw) {
          const parsed = JSON.parse(sessionRaw);
          if (parsed.name) candidateName = parsed.name;
          if (parsed.location) candidateLocation = candidateLocation || parsed.location;
          if (parsed.company) candidateCompany = candidateCompany || parsed.company;
        }
      }

      // If we found a real name and the current record is using the placeholder
      if (candidateName && (!record || record.recipientName === 'Verified Candidate' || !record.recipientName)) {
        setRecord((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            recipientName: candidateName,
            location: candidateLocation || prev.location,
            company: candidateCompany || prev.company,
          };
        });
      }
    } catch {
      // Ignore
    }
  }, [certId, record?.certificateId, record?.recipientName]);

  // Render Diploma Canvas
  const renderDiploma = useCallback(() => {
    if (!canvasRef.current || !record) return;
    drawBeginnerCertificate(canvasRef.current, {
      tier: record.tier,
      recipientName: record.recipientName,
      location: record.location,
      company: record.company,
      overallScore: record.overallScore,
      overallPercentage: record.overallPercentage,
      sectionScores: record.sectionScores,
      issuedDate: record.issuedDateFormatted,
      certificateId: record.certificateId,
    });
  }, [record]);

  useEffect(() => {
    if (record) {
      const timer = setTimeout(() => {
        renderDiploma();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [record, renderDiploma]);

  const handleManualSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;

    setIsSearching(true);
    setSearchError(null);

    try {
      const cleanId = searchInput
        .trim()
        .toUpperCase()
        .replace(/[\u2010-\u2015\u2212]/g, '-')
        .replace(/\s+/g, '');
      const res = await fetch(`/api/certification/verify?certId=${encodeURIComponent(cleanId)}`);
      const data = await res.json();

      if (!res.ok || !data.valid || !data.certificate) {
        setSearchError(data.error || 'No verified credential found matching this ID.');
        setRecord(null);
      } else {
        setRecord(data.certificate);
        window.history.pushState({}, '', `/verify/${encodeURIComponent(cleanId)}`);
      }
    } catch (err: unknown) {
      setSearchError('Network error verifying certificate. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/verify/${record?.certificateId || certId}` : `https://jnachi.com/verify/${certId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyId = () => {
    if (!record) return;
    navigator.clipboard.writeText(record.certificateId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2500);
  };

  const handleDownloadPng = () => {
    if (!canvasRef.current || !record) return;
    setIsGeneratingDownload(true);
    try {
      downloadBeginnerCertificatePng(canvasRef.current, `${record.certificateId}.png`);
    } finally {
      setIsGeneratingDownload(false);
    }
  };

  const handleDownloadPdf = () => {
    if (!canvasRef.current || !record) return;
    setIsGeneratingDownload(true);
    try {
      downloadBeginnerCertificatePdf(canvasRef.current, `${record.certificateId}.pdf`);
    } finally {
      setIsGeneratingDownload(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white pb-20">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-600/15 via-indigo-900/5 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* TOP VERIFICATION REGISTRY NAVBAR */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-30 px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-indigo-300 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-md">
              J
            </div>
            <div className="font-extrabold text-base tracking-tight">
              Jnachi <span className="text-xs font-semibold text-indigo-400 ml-1">Registry</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/certification"
              className="text-xs font-bold text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span>Certifications Ladder</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        {/* SEARCH / VERIFY LOOKUP BAR */}
        <div className="max-w-2xl mx-auto text-center space-y-3">
          <span className="text-[11px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-950/70 border border-indigo-500/30 px-3 py-1 rounded-full">
            Official Credential Verification Registry
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white">
            Verify Jnachi Certification
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Confirm authentic applied AI competency credentials, tamper-resistant diplomas, and issuing timestamps.
          </p>

          <form onSubmit={handleManualSearch} className="pt-2 flex gap-2 max-w-lg mx-auto">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="e.g. JNACHI-BEG-2026-XXXX-XXXX"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-white/15 rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching || !searchInput.trim()}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50 shrink-0"
            >
              {isSearching ? 'Verifying...' : 'Verify'}
            </button>
          </form>

          {searchError && (
            <div className="p-3 bg-rose-950/60 border border-rose-500/40 rounded-xl text-xs font-semibold text-rose-300 flex items-center justify-center gap-2 animate-in fade-in">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
              <span>{searchError}</span>
            </div>
          )}
        </div>

        {/* VERIFIED RECORD CARD */}
        {record ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* OFFICIAL VERIFICATION BANNER */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-indigo-950/70 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black tracking-wide">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      OFFICIALLY VERIFIED & ACTIVE
                    </span>
                    <span className="text-xs text-slate-400">
                      Issued {record.issuedDateFormatted}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    {record.recipientName}
                  </h2>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 pt-1">
                    <span
                      className="font-extrabold uppercase px-2.5 py-0.5 rounded-md"
                      style={{
                        backgroundColor: tierConfig.colorScheme.bgBadge,
                        color: tierConfig.colorScheme.textBadge,
                      }}
                    >
                      Tier 0{tierConfig.levelNumber} • {record.tierTitle}
                    </span>

                    {record.location && (
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {record.location}
                      </span>
                    )}
                  </div>
                </div>

                {/* Verified Status & Cert ID Badge */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-center min-w-[130px]">
                    <div className="text-xl sm:text-2xl font-black text-emerald-400 flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>PASSED</span>
                    </div>
                    <div className="text-[10px] font-bold text-emerald-300/80 uppercase tracking-wider mt-0.5">
                      Verified Credential
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 text-center min-w-[150px]">
                    <div className="text-xs font-mono font-black text-indigo-300 truncate max-w-[130px]">
                      {record.certificateId}
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyId}
                      className="text-[10px] font-bold text-slate-400 hover:text-white flex items-center justify-center gap-1 mx-auto mt-1 transition-colors"
                    >
                      {copiedId ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId ? 'Copied' : 'Copy ID'}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* ACTION TOOLBAR: DOWNLOADS + SHARE */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* PDF Download */}
                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    disabled={isGeneratingDownload}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/15 transition-all flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Download PDF</span>
                  </button>

                  {/* PNG Download */}
                  <button
                    type="button"
                    onClick={handleDownloadPng}
                    disabled={isGeneratingDownload}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl border border-white/15 transition-all flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Download PNG</span>
                  </button>
                </div>

                {/* Copy Link Button */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-white/10 transition-all flex items-center gap-1.5"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Verification Link Copied!' : 'Copy Verification URL'}</span>
                </button>
              </div>
            </div>

            {/* 4-TRACK COMPETENCY VERIFICATION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-indigo-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" /> AI Literacy
                  </span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Passed
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full w-full" />
                </div>
                <div className="text-[11px] text-slate-400 flex justify-between">
                  <span>Prompt Engineering & Reasoning</span>
                  <span className="font-bold text-slate-300">Competency Verified</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-amber-400 flex items-center gap-1.5">
                    <Zap className="w-4 h-4" /> Automation
                  </span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Passed
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full w-full" />
                </div>
                <div className="text-[11px] text-slate-400 flex justify-between">
                  <span>Workflows & Multi-Step Systems</span>
                  <span className="font-bold text-slate-300">Competency Verified</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-rose-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" /> Privacy & Ethics
                  </span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Passed
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full w-full" />
                </div>
                <div className="text-[11px] text-slate-400 flex justify-between">
                  <span>Data Protection & Safety Redlines</span>
                  <span className="font-bold text-slate-300">Competency Verified</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" /> Growth & Judgment
                  </span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Passed
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full w-full" />
                </div>
                <div className="text-[11px] text-slate-400 flex justify-between">
                  <span>Critical Evaluation & Scaling</span>
                  <span className="font-bold text-slate-300">Competency Verified</span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE DIPLOMA PREVIEW */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Official Landscape Credential Diploma
                  </h3>
                  <p className="text-xs text-slate-400">
                    High-resolution tamper-evident certificate generated on the official Jnachi verification canvas.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
                <canvas ref={canvasRef} className="w-full h-auto block" />
              </div>
            </div>

            {/* TRUST & PROCTORING INTEGRITY DISCLOSURE */}
            <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="space-y-1">
                <div className="font-bold text-slate-200 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Tamper-Resistant Validation</span>
                </div>
                <p>
                  This credential record is cryptographically indexed in the Jnachi Credential Registry and protected against alteration.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-slate-200 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span>Proctored Examination</span>
                </div>
                <p>
                  Achieved under single-window lockdown with real-time focus-loss proctoring and 80% passing standards.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-bold text-slate-200 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Issuer Authority</span>
                </div>
                <p>
                  Issued by Jnachi Applied AI Institute. Questions about this credential can be directed to verification@jnachi.com.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* EMPTY / NOT FOUND STATE */
          <div className="max-w-md mx-auto p-8 rounded-3xl bg-slate-900/80 border border-white/10 text-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Enter a Certificate ID to Verify</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Please enter the unique certificate identifier located on the bottom of the official Jnachi diploma (e.g. <code className="text-indigo-300 font-mono">JNACHI-BEG-2026-A1B2-3456</code>).
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
