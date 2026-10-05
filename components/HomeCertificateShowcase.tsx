'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  Share2,
  Download,
  ArrowRight,
  Check,
  ExternalLink,
} from 'lucide-react';

export function HomeCertificateShowcase() {
  const [copiedLink, setCopiedLink] = useState(false);

  const sampleCert = {
    id: 'JNA-89241-AI',
    candidateName: 'Jane Doe',
    trackName: 'Jnachi Certified AI Practitioner (Level 2)',
    badgeLabel: 'JNACHI CERTIFIED AI PRACTITIONER',
    score: 92,
    passingScore: 80,
    issuedDate: 'October 2026',
  };

  const handleCopySample = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(`https://jnachi.com/verify/${sampleCert.id}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left Column: Verification Value Prop */}
      <div className="lg:col-span-6 space-y-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded">
          Credential Standard
        </span>

        <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0F0F14] leading-tight">
          Verifiable credentials with permanent registry records
        </h2>

        <p className="text-base text-[#4B5563] leading-relaxed">
          Candidates who pass the proctored examination receive an official credential backed by an immutable record in our public registry. Third parties and employers can confirm authenticity in seconds.
        </p>

        <div className="space-y-4 pt-2">
          <div className="flex items-start gap-3.5 p-4 rounded-lg bg-white border border-[#E5E7EB]">
            <div className="w-9 h-9 rounded-md bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">
              01
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#0F0F14]">Public Registry Verification</h3>
              <p className="text-xs text-[#4B5563] mt-1">
                Each certificate includes a unique ID that can be validated at <code className="text-xs text-[#5B21B6] font-mono bg-[#F5F3FF] px-1 py-0.5 rounded">jnachi.com/verify</code>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-lg bg-white border border-[#E5E7EB]">
            <div className="w-9 h-9 rounded-md bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">
              02
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#0F0F14]">LinkedIn License Integration</h3>
              <p className="text-xs text-[#4B5563] mt-1">
                Attach the credential, issuing organization, and verification link directly to your professional profile with one click.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-lg bg-white border border-[#E5E7EB]">
            <div className="w-9 h-9 rounded-md bg-[#EDE9FE] text-[#5B21B6] flex items-center justify-center shrink-0 mt-0.5 font-semibold text-sm">
              03
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#0F0F14]">High-Resolution Diplomas & Scorecards</h3>
              <p className="text-xs text-[#4B5563] mt-1">
                Download publication-ready PDF and PNG credentials with section-by-section competency ratings.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-2 flex items-center gap-4">
          <Link
            href="/verify"
            className="btn-primary text-xs"
          >
            <span>Search Credential Registry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/certification"
            className="btn-text text-xs"
          >
            <span>View All Tracks →</span>
          </Link>
        </div>
      </div>

      {/* Right Column: Realistic Sample Certificate Card */}
      <div className="lg:col-span-6">
        <div className="relative bg-white border border-[#D1D5DB] rounded-lg p-6 sm:p-8 shadow-sm space-y-6 text-[#0F0F14]">
          {/* Sample Banner Label */}
          <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6]">
                Jnachi Certification Council
              </span>
            </div>
            <span className="text-[11px] font-semibold bg-[#F5F3FF] text-[#5B21B6] border border-[#EDE9FE] px-2 py-0.5 rounded">
              Sample Credential
            </span>
          </div>

          {/* Certificate Body */}
          <div className="text-center space-y-3 py-2">
            <span className="text-[11px] uppercase font-semibold tracking-wider text-[#6B7280] block">
              Official Credential Awarded To
            </span>
            <div className="font-serif-heading text-2xl sm:text-3xl text-[#0F0F14]">
              {sampleCert.candidateName}
            </div>
            <p className="text-xs text-[#4B5563] max-w-sm mx-auto leading-relaxed">
              for demonstrating applied competency in prompt engineering, automated workflows, and context hygiene in proctored examination.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[#2E1065] bg-[#EDE9FE] border border-[#DDD6FE] rounded">
                {sampleCert.trackName}
              </span>
            </div>
          </div>

          {/* Credential Specs */}
          <div className="grid grid-cols-3 gap-2 p-3 rounded-md bg-[#F9FAFB] border border-[#E5E7EB] text-center">
            <div>
              <span className="text-[10px] text-[#6B7280] uppercase font-semibold block">Score</span>
              <span className="text-xs font-bold text-[#0F766E]">{sampleCert.score}% (Pass)</span>
            </div>
            <div className="border-x border-[#E5E7EB]">
              <span className="text-[10px] text-[#6B7280] uppercase font-semibold block">Issue Date</span>
              <span className="text-xs font-medium text-[#0F0F14]">{sampleCert.issuedDate}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#6B7280] uppercase font-semibold block">Credential ID</span>
              <span className="text-xs font-mono font-semibold text-[#5B21B6]">{sampleCert.id}</span>
            </div>
          </div>

          {/* Verification Bar */}
          <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between gap-3 text-xs">
            <button
              onClick={handleCopySample}
              className="btn-secondary text-xs py-1.5 px-3"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                  <span>URL Copied</span>
                </>
              ) : (
                <>
                  <span>Copy Verification URL</span>
                </>
              )}
            </button>

            <span className="inline-flex items-center gap-1.5 text-xs text-[#0F766E] font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Record</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
