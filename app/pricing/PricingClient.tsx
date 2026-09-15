'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, Award, ArrowRight, ShieldCheck, Zap, CreditCard, Tag } from 'lucide-react';
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
        <div className="max-w-5xl mx-auto space-y-12">
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
              All 10 professional certifications—Core Progression Ladder and Specialized Role Tracks—are completely free for the next 30 days.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Tier */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Baseline Skills</span>
                <h2 className="text-2xl font-bold text-slate-900">Jnachi Assessment</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">₹0</span>
                  <span className="text-xs text-slate-500 uppercase font-bold">/ Always Free</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Take the adaptive assessment to get your baseline Jnachi Score across 4 activation dimensions.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Adaptive 20-question momentum test</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 4-Dimension radar scorecard</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Personalized lesson recommendations</li>
                </ul>
              </div>

              <Link
                href="/assessment"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                <span>Start Free Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Launch Special - Highlighted */}
            <div className="bg-gradient-to-b from-indigo-900 via-indigo-900 to-slate-900 text-white p-8 rounded-3xl border-2 border-amber-400 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                30-Day Launch
              </div>

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-amber-300 tracking-wider">All 10 Certifications</span>
                <h2 className="text-2xl font-bold text-white">Professional Exams</h2>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-amber-300">₹0</span>
                  <span className="text-sm text-slate-400 line-through font-bold">₹2,499 / $49</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Full access to all 4 Core ladder exams + 6 Role-Based tracks with proctoring and verified diplomas.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-200 pt-4 border-t border-white/10">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> All 10 proctored examination tracks</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Official verifiable digital diploma</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> 1-Click LinkedIn Add to Profile badge</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Permanent verification link (<code className="text-amber-300">/verify/[id]</code>)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> 3 proctored exam attempts</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => handleOpenCheckout('sales')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3 px-4 rounded-xl text-xs transition-all shadow-md hover:scale-102"
                >
                  <CreditCard className="w-4 h-4 text-slate-950" />
                  <span>Enroll / Claim Voucher (Razorpay)</span>
                </button>
                <Link
                  href="/certification"
                  className="w-full inline-flex items-center justify-center text-[11px] text-slate-300 hover:text-white transition-colors"
                >
                  Or explore curriculum tracks →
                </Link>
              </div>
            </div>

            {/* Enterprise Teams */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Organizations</span>
                <h2 className="text-2xl font-bold text-slate-900">Enterprise & Teams</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">Custom</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Certify your sales, engineering, HR, marketing, or support teams at scale with dedicated dashboards.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-700 pt-4 border-t border-slate-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /> Bulk candidate seat vouchers</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /> Organization readiness dashboard</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /> Custom employee credential registry</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-indigo-600" /> Dedicated priority support</li>
                </ul>
              </div>

              <a
                href="mailto:jnachiteam@gmail.com?subject=Jnachi%20Enterprise%20Inquiry"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50 font-bold py-3 px-4 rounded-xl text-xs transition-colors"
              >
                <span>Contact Enterprise Sales</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
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
