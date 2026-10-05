'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, CreditCard, Briefcase, Layers, Sparkles, Building2 } from 'lucide-react';
import { CertTier } from '@/lib/certTypes';
import RazorpayModal from '@/components/RazorpayModal';

type CurrencyMode = 'INR' | 'USD';

export default function PricingClient() {
  const [currency, setCurrency] = useState<CurrencyMode>('INR');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedTierForCheckout, setSelectedTierForCheckout] = useState<CertTier>('sales');

  const handleOpenCheckout = (tier: CertTier) => {
    setSelectedTierForCheckout(tier);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <div className="w-full bg-[#F9FAFB] py-16 px-4 sm:px-6">
        <div className="max-w-[1160px] mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21B6] bg-[#EDE9FE] px-3 py-1 rounded">
              Examination Pricing & Launch Access
            </span>
            <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0F0F14] tracking-tight">
              Transparent, progressive credential pricing
            </h1>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Entry-level AI Foundations and all specialized role examinations are 100% complimentary during our active launch window. Advanced engineering tracks scale predictably with certification tier.
            </p>

            {/* Currency Selector */}
            <div className="pt-2 flex items-center justify-center gap-2">
              <div className="inline-flex items-center p-1 bg-white border border-[#E5E7EB] rounded-lg shadow-xs">
                <button
                  type="button"
                  onClick={() => setCurrency('INR')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    currency === 'INR'
                      ? 'bg-[#2E1065] text-white shadow-xs'
                      : 'text-[#4B5563] hover:text-[#0F0F14]'
                  }`}
                >
                  INR (₹)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                    currency === 'USD'
                      ? 'bg-[#2E1065] text-white shadow-xs'
                      : 'text-[#4B5563] hover:text-[#0F0F14]'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: Free Foundations */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase text-[#0F766E] bg-[#F0FDFA] border border-[#99F6E4] px-2.5 py-0.5 rounded tracking-wider inline-flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Tier 01 • Foundation
                  </span>
                </div>

                <h2 className="font-serif-heading text-xl text-[#0F0F14]">AI Foundations</h2>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-[#0F0F14] font-mono">
                    {currency === 'INR' ? '₹0' : '$0'}
                  </span>
                  <span className="text-xs text-[#6B7280]">/ Always Free</span>
                </div>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Foundational evaluation covering prompt anatomy, hallucination mitigation, and workplace data confidentiality redlines.
                </p>

                <div className="pt-4 border-t border-[#E5E7EB]">
                  <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mb-2.5">
                    What is Included:
                  </p>
                  <ul className="space-y-2.5 text-xs text-[#4B5563]">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <span>Adaptive 20-question momentum diagnostic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <span><strong>Tier 01: AI Foundations Exam</strong> (40 Qs, 45m)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <span>Official verifiable digital credential & scorecard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                      <span>1-Click LinkedIn profile certificate addition</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/certification/ai-foundations"
                  className="btn-secondary w-full text-xs py-2.5 justify-center"
                >
                  <span>Start AI Foundations Exam</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: 30-Day Launch Special (Role & Practitioner Tracks) */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border-2 border-[#5B21B6] shadow-sm flex flex-col justify-between relative">
              <div className="absolute top-4 right-4 bg-[#EDE9FE] text-[#2E1065] text-[10px] font-bold uppercase px-2.5 py-0.5 rounded flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#5B21B6]" />
                Launch Access Active
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-[11px] font-semibold uppercase text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-0.5 rounded tracking-wider inline-flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3" />
                    Tier 02 • Role Specializations
                  </span>
                </div>

                <h2 className="font-serif-heading text-xl text-[#0F0F14]">Role Tracks & Practitioner</h2>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-[#0F0F14] font-mono">
                    {currency === 'INR' ? '₹0' : '$0'}
                  </span>
                  <span className="text-xs text-[#9CA3AF] line-through font-medium">
                    Standard {currency === 'INR' ? '₹1,499' : '$29'}
                  </span>
                </div>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  Specialized role credentials for Sales, Devs, Marketers, Support, HR, Managers, and Applied Python.
                </p>

                <div className="pt-4 border-t border-[#E5E7EB]">
                  <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mb-2.5">
                    Launch Pass Benefits:
                  </p>
                  <ul className="space-y-2.5 text-xs text-[#4B5563]">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#5B21B6] shrink-0 mt-0.5" />
                      <span><strong>All 6 role-based tracks + Python AI 100% free</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#5B21B6] shrink-0 mt-0.5" />
                      <span>Role-specific scenario questions & case studies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#5B21B6] shrink-0 mt-0.5" />
                      <span>Verifiable digital credential & registry scorecard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#5B21B6] shrink-0 mt-0.5" />
                      <span>3 proctored exam attempts per specialization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#5B21B6] shrink-0 mt-0.5" />
                      <span>Immutable registry verification URL</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 space-y-2">
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('sales')}
                  className="btn-primary w-full text-xs py-2.5 justify-center"
                >
                  <span>Claim Role Voucher</span>
                </button>
                <Link
                  href="/certification"
                  className="w-full inline-flex items-center justify-center text-[11px] text-[#6B7280] hover:text-[#0F0F14] transition-colors"
                >
                  Or explore all 23 tracks →
                </Link>
              </div>
            </div>

            {/* Card 3: Advanced Core Ladder & Enterprise iPaaS */}
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E5E7EB] shadow-xs flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-[11px] font-semibold uppercase text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-0.5 rounded tracking-wider flex items-center gap-1.5 w-fit">
                    <Layers className="w-3 h-3" />
                    Tiers 03–04 & Enterprise iPaaS
                  </span>
                </div>

                <h2 className="font-serif-heading text-xl text-[#0F0F14]">Professional & Enterprise</h2>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-[#0F0F14] font-mono">
                    {currency === 'INR' ? 'From ₹2,499' : 'From $49'}
                  </span>
                  <span className="text-xs text-[#6B7280]">/ Tier Ladder</span>
                </div>

                <p className="text-xs text-[#4B5563] leading-relaxed">
                  High-stakes validation for Systems Builders, Master Architects, and Enterprise iPaaS Middleware engineers.
                </p>

                <div className="pt-4 border-t border-[#E5E7EB]">
                  <p className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider mb-2.5">
                    Tier Fee Schedule:
                  </p>
                  <ul className="space-y-2 text-xs text-[#4B5563]">
                    <li className="flex items-center justify-between pb-1 border-b border-[#F3F4F6]">
                      <span>Tier 03: AI Systems Builder</span>
                      <strong className="text-[#0F0F14] font-mono">
                        {currency === 'INR' ? '₹2,499' : '$49'}
                      </strong>
                    </li>
                    <li className="flex items-center justify-between pb-1 border-b border-[#F3F4F6]">
                      <span>Tier 04: AI Master Architect</span>
                      <strong className="text-[#0F0F14] font-mono">
                        {currency === 'INR' ? '₹3,999' : '$79'}
                      </strong>
                    </li>
                    <li className="flex items-center justify-between pb-1 border-b border-[#F3F4F6]">
                      <span>Enterprise iPaaS (MuleSoft/Boomi/MQ)</span>
                      <strong className="text-[#0F0F14] font-mono">
                        {currency === 'INR' ? '₹3,499' : '$69'}
                      </strong>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Agentic AI & RAG Engineering</span>
                      <strong className="text-[#0F0F14] font-mono">
                        {currency === 'INR' ? '₹3,499' : '$69'}
                      </strong>
                    </li>
                    <li className="flex items-center gap-2 pt-2 text-[#6B7280] text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E] shrink-0" />
                      <span>Live proctored exam with persistent HUD security</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('builder')}
                  className="btn-secondary w-full text-xs py-2.5 justify-center"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Enroll in Professional Track</span>
                </button>
              </div>
            </div>
          </div>

          {/* Enterprise & Organization Banner */}
          <div className="bg-[#2E1065] text-white p-8 rounded-lg border border-[#4C1D95] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-[11px] font-semibold uppercase text-[#EDE9FE] tracking-wider flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#EDE9FE]" />
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
