'use client';

import { useState, useEffect } from 'react';
import { CertTier, CERT_TIERS, TIER_ORDER } from '@/lib/certTypes';
import { TIER_PRICING, VALID_PROMO_CODES } from '@/lib/pricing';
import { X, ShieldCheck, Check, Sparkles, AlertCircle, Loader2, CreditCard, ArrowRight, Tag } from 'lucide-react';

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: CertTier;
  candidateName?: string;
  candidateEmail?: string;
  onPaymentSuccess?: (tier: CertTier, paymentId: string) => void;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

export default function RazorpayModal({
  isOpen,
  onClose,
  initialTier = 'sales',
  candidateName: propName = '',
  candidateEmail: propEmail = '',
  onPaymentSuccess,
}: RazorpayModalProps) {
  const [selectedTier, setSelectedTier] = useState<CertTier>(initialTier);
  const [name, setName] = useState(propName);
  const [email, setEmail] = useState(propEmail);
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number; desc: string } | null>(null);
  const [promoError, setPromoError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSelectedTier(initialTier);
      if (propName) setName(propName);
      if (propEmail) setEmail(propEmail);
      setErrorMessage('');
      setPromoError('');
    }
  }, [isOpen, initialTier, propName, propEmail]);

  // Load Razorpay Checkout Script
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  if (!isOpen) return null;

  const currentPricing = TIER_PRICING[selectedTier];
  const tierConfig = CERT_TIERS[selectedTier];

  const handleApplyPromo = () => {
    setPromoError('');
    const code = promoCode.trim().toUpperCase();
    if (!code) return;

    if (VALID_PROMO_CODES[code]) {
      const promo = VALID_PROMO_CODES[code];
      setAppliedPromo({
        code,
        discount: promo.discountPercent,
        desc: promo.description,
      });
    } else {
      setPromoError('Invalid promo code. Try "LAUNCH30" or "JNACHIFREE".');
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode('');
    setPromoError('');
  };

  const calculateFinalPrice = () => {
    if (currentPricing.isFree) return 0;
    const base = currentPricing.amountInr;
    if (appliedPromo) {
      return Math.round(base * (1 - appliedPromo.discount / 100));
    }
    return base;
  };

  const finalAmountInr = calculateFinalPrice();

  const handleInitiatePayment = async () => {
    if (!email.trim() || !name.trim()) {
      setErrorMessage('Please provide your name and email address to register.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      // 1. Request Order Creation from Server
      const res = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tier: selectedTier,
          candidateName: name,
          candidateEmail: email,
          promoCode: appliedPromo?.code,
          currency: 'INR',
        }),
      });

      const orderData = await res.json();

      if (!res.ok) {
        throw new Error(orderData.error || 'Failed to create payment order.');
      }

      // If 100% Free / Promo waiver
      if (orderData.isFree) {
        const waiverRes = await fetch('/api/razorpay/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            tier: selectedTier,
            candidateEmail: email,
            candidateName: name,
            promoCode: appliedPromo?.code,
            isPromoWaiver: true,
          }),
        });

        const waiverData = await waiverRes.json();
        if (waiverRes.ok && waiverData.verified) {
          if (onPaymentSuccess) {
            onPaymentSuccess(selectedTier, waiverData.paymentId || `waiver_${Date.now()}`);
          }
          onClose();
        } else {
          setErrorMessage(waiverData.error || 'Failed to claim promotional voucher.');
        }
        return;
      }

      // If in Sandbox/Test Mode (Razorpay keys not yet added to .env)
      if (orderData.isSimulated) {
        const verifyRes = await fetch('/api/razorpay/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            razorpay_order_id: orderData.orderId,
            razorpay_payment_id: `pay_sim_${Date.now()}`,
            razorpay_signature: 'simulated_test_sig',
            tier: selectedTier,
            candidateEmail: email,
            candidateName: name,
            isSimulated: true,
          }),
        });

        const verifyData = await verifyRes.json();
        if (verifyRes.ok && verifyData.verified) {
          if (onPaymentSuccess) {
            onPaymentSuccess(selectedTier, verifyData.paymentId);
          }
          onClose();
        } else {
          setErrorMessage(verifyData.error || 'Failed to initialize test voucher.');
        }
        return;
      }

      // 2. Open Official Razorpay Checkout Modal
      const options = {
        key: orderData.keyId,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Jnachi Certification Council',
        description: `${tierConfig.title} Proctored Examination Voucher`,
        image: '/icon.svg',
        order_id: orderData.orderId,
        prefill: {
          name: name,
          email: email,
        },
        theme: {
          color: '#4f46e5',
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler: async function (response: any) {
          try {
            // 3. Verify Payment Signature
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id || orderData.orderId,
                razorpay_payment_id: response.razorpay_payment_id || `pay_${Date.now()}`,
                razorpay_signature: response.razorpay_signature || '',
                tier: selectedTier,
                candidateEmail: email,
                candidateName: name,
                isSimulated: false,
              }),
            });

            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.verified) {
              if (onPaymentSuccess) {
                onPaymentSuccess(selectedTier, verifyData.paymentId);
              }
              onClose();
            } else {
              setErrorMessage(verifyData.error || 'Payment signature verification failed.');
            }
          } catch (vErr) {
            console.error('Verification error:', vErr);
            setErrorMessage('Network error while verifying payment.');
          }
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
      };

      if (window.Razorpay) {
        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (resp: any) {
          setErrorMessage(resp?.error?.description || 'Payment transaction failed or was cancelled.');
          setIsLoading(false);
        });
        rzp.open();
      } else {
        throw new Error('Razorpay SDK script is still loading. Please try again in 2 seconds.');
      }
    } catch (err: unknown) {
      console.error('Checkout error:', err);
      setErrorMessage(err instanceof Error ? err.message : 'An error occurred during checkout.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-400/30 text-[10px] font-bold uppercase tracking-wider">
              Razorpay Secure Checkout
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
              30-Day Launch Special
            </span>
          </div>

          <h3 className="text-xl font-extrabold text-white">Enroll in AI Certification</h3>
          <p className="text-xs text-indigo-200 mt-1">
            Official proctored examination voucher with cryptographic verification on <code className="text-white font-mono">/verify/[id]</code>.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          {errorMessage && (
            <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Tier Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Select Certification Track
            </label>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value as CertTier)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            >
              <optgroup label="Core Career Ladder">
                <option value="beginner">Tier 01: Beginner (Foundational AI)</option>
                <option value="practitioner">Tier 02: Practitioner (Applied AI)</option>
                <option value="builder">Tier 03: Specialist (Applied AI)</option>
                <option value="master">Tier 04: Master Architect</option>
              </optgroup>
              <optgroup label="Role-Based Certifications">
                <option value="sales">Jnachi for Sales</option>
                <option value="developers">Jnachi for Developers</option>
                <option value="marketers">Jnachi for Marketers</option>
                <option value="support">Jnachi for Customer Support</option>
                <option value="hr">Jnachi for HR & People Ops</option>
                <option value="managers">Jnachi for Managers & Leads</option>
              </optgroup>
            </select>
          </div>

          {/* Candidate Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Candidate Full Name *</label>
              <input
                type="text"
                placeholder="e.g. Alex Morgan"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Email Address *</label>
              <input
                type="email"
                placeholder="alex@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          {/* Promo Code Input */}
          <div className="space-y-1.5 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-indigo-600" />
                <span>Launch Promo Code</span>
              </label>
              <span className="text-[10px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
                Try &quot;LAUNCH30&quot; for 100% Off
              </span>
            </div>

            {appliedPromo ? (
              <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-emerald-900">{appliedPromo.code}: {appliedPromo.desc}</span>
                </div>
                <button
                  type="button"
                  onClick={handleRemovePromo}
                  className="text-xs text-rose-600 hover:text-rose-800 font-semibold underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter coupon (e.g. LAUNCH30)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  className="flex-1 px-3.5 py-2 rounded-xl border border-slate-300 text-xs uppercase font-mono focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={handleApplyPromo}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors shrink-0"
                >
                  Apply
                </button>
              </div>
            )}
            {promoError && <p className="text-[11px] text-rose-600 mt-1">{promoError}</p>}
          </div>

          {/* Price Summary Breakdown */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-2 text-xs">
            <div className="flex justify-between text-slate-600">
              <span>Standard Exam Fee:</span>
              <span className="line-through font-semibold">₹{currentPricing.amountInr || 2499}</span>
            </div>

            {appliedPromo && (
              <div className="flex justify-between text-emerald-700 font-bold">
                <span>Launch Discount ({appliedPromo.discount}%):</span>
                <span>- ₹{currentPricing.amountInr}</span>
              </div>
            )}

            <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
              <span className="font-bold text-slate-900 text-sm">Total Payable:</span>
              <span className="text-xl font-black text-slate-900">
                {finalAmountInr === 0 ? (
                  <span className="text-emerald-600">₹0 (Free Launch)</span>
                ) : (
                  `₹${finalAmountInr}`
                )}
              </span>
            </div>
          </div>

          {/* Action CTA Button */}
          <button
            type="button"
            disabled={isLoading}
            onClick={handleInitiatePayment}
            className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md hover:shadow-lg disabled:opacity-50 text-sm"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Order...</span>
              </>
            ) : finalAmountInr === 0 ? (
              <>
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Claim Free Exam Voucher</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                <span>Pay ₹{finalAmountInr} via Razorpay</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Trust Footer */}
          <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              256-Bit SSL Encrypted
            </span>
            <span>•</span>
            <span>Instant Access</span>
            <span>•</span>
            <span>UPI / Cards / NetBanking</span>
          </div>
        </div>
      </div>
    </div>
  );
}
