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
            All 10 Professional AI Certifications are <strong className="text-white font-bold underline decoration-amber-400 underline-offset-2">100% Free</strong> for the next 30 days!
          </span>
          <span className="font-medium text-slate-100 sm:hidden">
            All 10 AI Certifications 100% Free!
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Gradient Banner with Badge */}
        <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 p-6 sm:p-8 text-white relative">
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Limited 30-Day Launch Offer
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Earn Your Official AI Certification for <span className="text-amber-400 underline decoration-amber-400/50">100% Free</span>
          </h3>

          <p className="mt-2 text-indigo-100 text-sm sm:text-base leading-relaxed">
            To celebrate the official launch of Jnachi, all 10 Core Ladder & Role-Based proctored examination fees are completely waived for the next 30 days.
          </p>

          {/* Live Countdown Grid */}
          {timeLeft && (
            <div className="mt-5 grid grid-cols-4 gap-2 bg-black/30 border border-white/10 rounded-2xl p-3 text-center">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono">{timeLeft.days}</span>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Days</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono">{timeLeft.hours}</span>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Hours</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono">{timeLeft.minutes}</span>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Mins</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono">{timeLeft.seconds}</span>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">Secs</span>
              </div>
            </div>
          )}
        </div>

        {/* Benefits & CTA Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">
                <strong>All 10 Tracks Included:</strong> Core Ladder (Beginner, Practitioner, Specialist, Master) + 6 Specialized Role Tracks (Sales, Dev, Mkt, Support, HR, Managers).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700">
                <strong>Verifiable Digital Diplomas:</strong> Permanent public verification URL (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono">/verify/[id]</code>) and 1-Click LinkedIn Credential Integration.
              </p>
            </div>
          </div>

          {/* Pricing Comparison Bar */}
          <div className="flex items-center justify-between bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
            <div>
              <span className="text-xs text-slate-600 uppercase font-bold tracking-wider block">Standard Exam Fee</span>
              <span className="text-base text-slate-500 line-through font-bold">$49 / Exam</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-emerald-700 uppercase font-bold tracking-wider block">Launch Promo</span>
              <span className="text-2xl font-black text-emerald-600">$0 Free</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href="/certification"
              onClick={handleDismiss}
              className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md hover:shadow-lg text-sm sm:text-base group"
            >
              <Award className="w-5 h-5 text-amber-300" />
              <span>Explore Certifications & Start Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={handleDismiss}
              className="w-full sm:w-auto text-xs text-slate-600 hover:text-slate-800 font-medium py-2 px-3 transition-colors"
            >
              Remind me later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
