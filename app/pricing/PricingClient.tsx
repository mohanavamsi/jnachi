'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, Award, ArrowRight, ShieldCheck, Zap, CreditCard, Tag, Layers, Briefcase } from 'lucide-react';
import { CertTier, CERT_TIERS } from '@/lib/certTypes';
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
      <div className="w-full bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              30-Day Launch Promotion Active
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Transparent Pricing for Applied AI Mastery
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Jnachi AI Foundations is 100% free, and all 6 Specialized Role-Based Certifications are completely free during the 30-day launch period.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Free Foundations */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 inline-block tracking-wider">
                  Always Free
                </span>
                <h2 className="text-2xl font-bold text-slate-900">AI Foundations Certification</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">₹0</span>
                  <span className="text-xs text-slate-500 uppercase font-bold">/ Free Tier</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Momentum assessment plus the official Tier 01: Certified AI Foundations exam with verified diploma.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Adaptive 20-question momentum test</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> <strong>Tier 01: AI Foundations Exam</strong> (40 Qs, 45m)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Official verifiable digital diploma</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 1-Click LinkedIn Add to Profile</li>
                </ul>
              </div>

              <Link
                href="/certification"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-colors"
              >
                <span>Start AI Foundations Exam (Free)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: 30-Day Launch Special (Role-Based Tracks) - Highlighted */}
            <div className="bg-gradient-to-b from-indigo-900 via-indigo-900 to-slate-900 text-white p-8 rounded-3xl border-2 border-amber-400 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                30-Day Launch Special
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-amber-300 tracking-wider flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  Role & Python Tracks (8 Tracks)
                </span>
                <h2 className="text-2xl font-bold text-white">Specialized Certifications</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-amber-300">₹0</span>
                  <span className="text-sm text-slate-400 line-through font-bold">₹2,499 / $49</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specialized applied AI & Python exams for Python AI, Python Devs, Sales, Engineering, Marketing, Support, HR, and Managers.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-200 pt-4 border-t border-white/10">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> <strong>All 8 Specializations included free</strong></li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Python for AI, Python Dev, Sales, Devs, Marketers, Support, HR, Managers</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Official verifiable digital diploma</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Permanent verification link (<code className="text-amber-300">/verify/[id]</code>)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> 3 proctored exam attempts per specialization</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('sales')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-4 rounded-xl text-xs transition-all shadow-md hover:scale-102"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Claim Free Role Voucher</span>
                </button>
                <Link
                  href="/certification"
                  className="w-full inline-flex items-center justify-center text-[11px] text-slate-300 hover:text-white transition-colors"
                >
                  Or explore role tracks →
                </Link>
              </div>
            </div>

            {/* Card 3: Advanced Core Ladder (Paid Progression) */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200 inline-block tracking-wider flex items-center gap-1.5 w-fit">
                  <Layers className="w-3 h-3" />
                  Core Ladder (Tiers 02–04)
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Advanced AI Ladder</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">From ₹1,499</span>
                  <span className="text-xs text-slate-500 uppercase font-bold">/ $29</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rigorous engineering milestones from Applied AI Practitioner to Master Architect.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-slate-100">
                  <li className="flex items-center justify-between">
                    <span>• Tier 02: AI Practitioner</span>
                    <strong className="text-slate-900">₹1,499 ($29)</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>• Tier 03: AI Builder</span>
                    <strong className="text-slate-900">₹2,499 ($49)</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>• Tier 04: AI Master Architect</span>
                    <strong className="text-slate-900">₹3,999 ($79)</strong>
                  </li>
                  <li className="flex items-center gap-2 pt-1 text-slate-500 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Proctored, verifiable credential & badge
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleOpenCheckout('practitioner')}
                className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs transition-colors shadow-sm"
              >
                <CreditCard className="w-4 h-4" />
                <span>Enroll in Core Ladder (Razorpay)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Enterprise & Organization Banner */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-[11px] font-bold uppercase text-amber-400 tracking-wider">Enterprise Teams</span>
              <h3 className="text-xl font-bold">Certify Your Entire Organization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Bulk candidate seat vouchers, team readiness dashboard, and customized skill analytics for corporate teams.
              </p>
            </div>
            <a
              href="mailto:jnachiteam@gmail.com?subject=Jnachi%20Enterprise%20Team%20Inquiry"
              className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs rounded-xl transition-colors shrink-0"
            >
              Contact Enterprise Desk (jnachiteam@gmail.com)
            </a>
          </div>
        </div>
      </div>

      {/* Razorpay Checkout Modal */}
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
