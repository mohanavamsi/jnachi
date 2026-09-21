'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Timer, ArrowRight, X, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

const LAUNCH_EXPIRY_KEY = 'jnachi_launch_promo_end_date';
const PROMO_DISMISSED_KEY = 'jnachi_launch_promo_dismissed_v1';

function getPromoEndDate(): Date {
  if (typeof window === 'undefined') {
    return new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  }
  const saved = localStorage.getItem(LAUNCH_EXPIRY_KEY);
  if (saved) {
    const parsed = new Date(saved);
    if (!isNaN(parsed.getTime()) && parsed.getTime() > Date.now()) {
      return parsed;
    }
  }
  const newEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  localStorage.setItem(LAUNCH_EXPIRY_KEY, newEnd.toISOString());
  return newEnd;
}

export function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('jnachi_banner_dismissed');
    if (isDismissed) {
      setVisible(false);
      return;
    }

    const targetDate = getPromoEndDate();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Limited Launch Promotion" className="relative z-50 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white text-xs md:text-sm py-2 px-4 shadow-sm border-b border-indigo-700/50">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 px-2 py-0.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider shadow-sm animate-pulse">
            <Sparkles className="w-3 h-3 text-slate-950" />
            30-Day Free Launch
          </span>
          <span className="font-medium text-slate-100 hidden sm:inline">
            Jnachi AI Foundations + All 6 Role-Based AI Certifications are <strong className="text-white font-bold underline decoration-amber-400 underline-offset-2">100% Free</strong> for the next 30 days!
          </span>
          <span className="font-medium text-slate-100 sm:hidden">
            AI Foundations & All 6 Role Certifications Free!
          </span>

          {timeLeft && (
            <span className="inline-flex items-center gap-1 bg-black/30 border border-white/10 px-2.5 py-0.5 rounded-md text-[11px] font-mono text-amber-300 font-bold ml-1">
              <Timer className="w-3 h-3 text-amber-400" />
              <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s left</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/certification"
            className="inline-flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1 rounded-full text-xs font-bold transition-all shadow-sm hover:scale-105"
          >
            <span>Claim Free Exam</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => {
              setVisible(false);
              sessionStorage.setItem('jnachi_banner_dismissed', 'true');
            }}
            className="text-slate-400 hover:text-white p-1 rounded-full transition-colors"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

export function LaunchPromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    const dismissed = localStorage.getItem(PROMO_DISMISSED_KEY);
    if (dismissed) {
      const dismissedTime = parseInt(dismissed, 10);
      if (Date.now() - dismissedTime < 24 * 60 * 60 * 1000) {
        return;
      }
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    const targetDate = getPromoEndDate();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;
      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem(PROMO_DISMISSED_KEY, Date.now().toString());
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Gradient Banner with Badge */}
        <div className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-950 p-4 sm:p-5 text-white relative shrink-0">
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider mb-2.5 shadow-sm">
            <Sparkles className="w-3 h-3" />
            30-Day Launch Celebration
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug pr-6">
            Get Certified for <span className="text-amber-400 underline decoration-amber-400/50">100% Free</span>
          </h3>

          <p className="mt-1 text-indigo-200 text-xs sm:text-sm leading-relaxed">
            All 6 Role-Based Certifications + AI Foundations fees are fully waived for 30 days.
          </p>

          {/* Live Countdown Grid - Compact */}
          {timeLeft && (
            <div className="mt-3 grid grid-cols-4 gap-1.5 bg-black/40 border border-white/10 rounded-xl p-2 text-center">
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black text-amber-300 font-mono leading-none">{timeLeft.days}</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-0.5">Days</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black text-amber-300 font-mono leading-none">{timeLeft.hours}</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-0.5">Hours</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black text-amber-300 font-mono leading-none">{timeLeft.minutes}</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-0.5">Mins</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black text-amber-300 font-mono leading-none">{timeLeft.seconds}</span>
                <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider mt-0.5">Secs</span>
              </div>
            </div>
          )}
        </div>

        {/* Benefits & CTA Body - Compact */}
        <div className="p-4 sm:p-5 space-y-3.5 overflow-y-auto">
          <div className="space-y-2">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                <strong>7 Free Tracks:</strong> AI Foundations + Sales, Developers, Marketers, Support, HR & Managers.
              </p>
            </div>
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                <strong>Verifiable Credentials:</strong> Permanent verification URL (<code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono">/verify/[id]</code>) + 1-Click LinkedIn addition.
              </p>
            </div>
          </div>

          {/* Pricing Comparison Bar - Compact */}
          <div className="flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Standard Fee</span>
              <span className="text-xs sm:text-sm text-slate-400 line-through font-bold">$49 / Exam</span>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-emerald-700 uppercase font-bold tracking-wider block">Launch Promo</span>
              <span className="text-lg sm:text-xl font-black text-emerald-600 leading-none">$0 Free</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-1">
            <Link
              href="/certification"
              onClick={handleDismiss}
              className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold py-2.5 sm:py-3 px-4 rounded-xl transition-all shadow-md text-xs sm:text-sm group"
            >
              <Award className="w-4 h-4 text-amber-300" />
              <span>Explore Certifications & Start Free</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={handleDismiss}
              className="text-[11px] text-slate-500 hover:text-slate-800 font-medium py-1 transition-colors text-center"
            >
              Remind me later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
