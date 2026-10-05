'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, CreditCard, Briefcase, Layers } from 'lucide-react';
import { CertTier, TOTAL_CERTIFICATIONS_COUNT } from '@/lib/certTypes';
import RazorpayModal from '@/components/RazorpayModal';

export default function PricingClient() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedTierForCheckout, setSelectedTierForCheckout] = useState<CertTier>('sales');

  const handleOpenCheckout = (tier: CertTier) => {
    setSelectedTierForCheckout(tier);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <div className="w-full bg-[#F9FAFB] py-16 px-4">
        <div className="max-w-[1120px] mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded">
              Examination Pricing & Launch Access
            </span>
            <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0F0F14] tracking-tight">
              Transparent certification plans
            </h1>
            <p className="text-base text-[#4B5563] leading-relaxed">
              AI Foundations and specialized role certifications are complimentary during the 30-day launch window.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Free Foundations */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E5E7EB] shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[11px] font-semibold uppercase text-[#0F766E] bg-[#F0FDFA] border border-[#99F6E4] px-2 py-0.5 rounded tracking-wider inline-block">
                  Complimentary
                </span>
                <h2 className="font-serif-heading text-xl text-[#0F0F14]">AI Foundations</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#0F0F14] font-mono">₹0 / $0</span>
                  <span className="text-xs text-[#6B7280]">/ Free Tier</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Foundational evaluation covering prompt anatomy, data confidentiality redlines, and workflow efficiency.
                </p>

                <ul className="space-y-2.5 text-xs text-[#4B5563] pt-4 border-t border-[#E5E7EB]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F766E] shrink-0" />
                    <span>Adaptive 20-question momentum diagnostic</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F766E] shrink-0" />
                    <span><strong>Tier 01: AI Foundations Exam</strong> (40 Qs, 45m)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F766E] shrink-0" />
                    <span>Official verifiable digital credential</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#0F766E] shrink-0" />
                    <span>1-Click LinkedIn profile addition</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/certification/ai-foundations"
                className="btn-secondary w-full text-xs py-2.5"
              >
                <span>Start AI Foundations Exam</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: 30-Day Launch Special (Role & Python Tracks) */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border-2 border-[#5B21B6] shadow-sm flex flex-col justify-between space-y-6 relative">
              <div className="absolute top-4 right-4 bg-[#EDE9FE] text-[#2E1065] text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                Launch Access Active
              </div>

              <div className="space-y-4">
                <span className="text-[11px] font-semibold uppercase text-[#5B21B6] tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  Specialized Tracks
                </span>
                <h2 className="font-serif-heading text-xl text-[#0F0F14]">Role & Python Tracks</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#0F0F14] font-mono">₹0 / $0</span>
                  <span className="text-xs text-[#9CA3AF] line-through font-medium">Standard $49</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Specialized examinations for Sales, Engineering, Marketing, Support, HR, Managers, and Applied Python.
                </p>

                <ul className="space-y-2.5 text-xs text-[#4B5563] pt-4 border-t border-[#E5E7EB]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#5B21B6] shrink-0" />
                    <span><strong>All specialized track exams included free</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#5B21B6] shrink-0" />
                    <span>Role-specific scenario questions & case studies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#5B21B6] shrink-0" />
                    <span>Official verifiable digital credential & scorecard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#5B21B6] shrink-0" />
                    <span>Permanent registry verification URL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#5B21B6] shrink-0" />
                    <span>3 proctored exam attempts per specialization</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('sales')}
                  className="btn-primary w-full text-xs py-2.5"
                >
                  <span>Claim Role Voucher</span>
                </button>
                <Link
                  href="/certification"
                  className="w-full inline-flex items-center justify-center text-[11px] text-[#6B7280] hover:text-[#0F0F14] transition-colors"
                >
                  Or explore all tracks →
                </Link>
              </div>
            </div>

            {/* Card 3: Advanced Core Ladder */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E5E7EB] shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[11px] font-semibold uppercase text-[#5B21B6] bg-[#EDE9FE] px-2 py-0.5 rounded tracking-wider flex items-center gap-1.5 w-fit">
                  <Layers className="w-3 h-3" />
                  Core Ladder (Tiers 02–04)
                </span>
                <h2 className="font-serif-heading text-xl text-[#0F0F14]">Advanced AI Ladder</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#0F0F14] font-mono">From ₹1,499</span>
                  <span className="text-xs text-[#6B7280]">/ $29</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Milestone certifications from Applied AI Practitioner through Strategic Master Architect.
                </p>

                <ul className="space-y-2.5 text-xs text-[#4B5563] pt-4 border-t border-[#E5E7EB]">
                  <li className="flex items-center justify-between">
                    <span>Tier 02: AI Practitioner</span>
                    <strong className="text-[#0F0F14] font-mono">₹1,499 ($29)</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Tier 03: AI Systems Builder</span>
                    <strong className="text-[#0F0F14] font-mono">₹2,499 ($49)</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Tier 04: AI Master Architect</span>
                    <strong className="text-[#0F0F14] font-mono">₹3,999 ($79)</strong>
                  </li>
                  <li className="flex items-center gap-2 pt-1 text-[#6B7280] text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                    <span>Proctored, verifiable credential & digital badge</span>
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleOpenCheckout('practitioner')}
                className="btn-secondary w-full text-xs py-2.5"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>Enroll in Advanced Tier</span>
              </button>
            </div>
          </div>

          {/* Enterprise & Organization Banner */}
          <div className="bg-[#2E1065] text-white p-8 rounded-lg border border-[#4C1D95] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-[11px] font-semibold uppercase text-[#EDE9FE] tracking-wider">
                Enterprise & Academic Teams
              </span>
              <h3 className="font-serif-heading text-xl text-white">
                Team licensing and cohort readiness
              </h3>
              <p className="text-xs text-[#EDE9FE]/80 leading-relaxed">
                Bulk candidate vouchers, administrative reporting dashboards, and aggregate competency analytics for university and enterprise cohorts.
              </p>
            </div>
            <a
              href="mailto:jnachiteam@gmail.com?subject=Jnachi%20Enterprise%20Team%20Inquiry"
              className="px-5 py-2.5 bg-white text-[#2E1065] hover:bg-[#F5F3FF] font-semibold text-xs rounded-md transition-colors shrink-0"
            >
              Contact Enterprise Desk (jnachiteam@gmail.com)
            </a>
          </div>
        </div>
      </div>

      <RazorpayModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        initialTier={selectedTierForCheckout}
        onPaymentSuccess={(tier, paymentId) => {
          window.location.href = `/certification?enrolled=${tier}&payId=${paymentId}`;
        }}
      />
    </>
  );
}
