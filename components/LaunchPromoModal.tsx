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
    <aside aria-label="Limited Launch Promotion" className="relative z-50 bg-[#2E1065] text-[#EDE9FE] text-xs py-2 px-4 border-b border-[#4C1D95]">
      <div className="max-w-[1120px] mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-[#EDE9FE] text-[#2E1065] px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider">
            Launch Access
          </span>
          <span className="font-normal text-white hidden sm:inline">
            Jnachi AI Foundations and specialized role certifications are free during the 30-day launch period.
          </span>
          <span className="font-normal text-white sm:hidden">
            Free launch access for AI Foundations & Role Certifications.
          </span>

          {timeLeft && (
            <span className="inline-flex items-center gap-1 bg-[#0F0F14]/40 border border-white/10 px-2 py-0.5 rounded text-[11px] font-mono text-[#EDE9FE] ml-1">
              <Timer className="w-3 h-3 text-[#EDE9FE]" />
              <span>{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m remaining</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/certification"
            className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:underline"
          >
            <span>View Certifications</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => {
              setVisible(false);
              sessionStorage.setItem('jnachi_banner_dismissed', 'true');
            }}
            className="text-[#EDE9FE]/70 hover:text-white p-1 rounded transition-colors"
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
    }, 3000);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F0F14]/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-md bg-white rounded-lg shadow-xl border border-[#E5E7EB] overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="bg-[#2E1065] p-6 text-white relative">
          <button
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-1 rounded-md text-[#EDE9FE]/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#EDE9FE] block mb-1">
            Launch Access Window
          </span>

          <h3 className="font-serif-heading text-xl text-white">
            Complimentary Exam Access
          </h3>

          <p className="mt-2 text-xs text-[#EDE9FE]/80 leading-relaxed">
            Examination fees for AI Foundations and role-based certifications are waived for the duration of the 30-day launch period.
          </p>

          {timeLeft && (
            <div className="mt-4 grid grid-cols-4 gap-2 bg-[#0F0F14]/30 border border-white/10 rounded-md p-2.5 text-center">
              <div>
                <span className="text-base font-bold text-white font-mono">{timeLeft.days}</span>
                <span className="text-[10px] text-[#EDE9FE]/70 block">Days</span>
              </div>
              <div>
                <span className="text-base font-bold text-white font-mono">{timeLeft.hours}</span>
                <span className="text-[10px] text-[#EDE9FE]/70 block">Hours</span>
              </div>
              <div>
                <span className="text-base font-bold text-white font-mono">{timeLeft.minutes}</span>
                <span className="text-[10px] text-[#EDE9FE]/70 block">Mins</span>
              </div>
              <div>
                <span className="text-base font-bold text-white font-mono">{timeLeft.seconds}</span>
                <span className="text-[10px] text-[#EDE9FE]/70 block">Secs</span>
              </div>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <ul className="space-y-2.5 text-xs text-[#4B5563]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
              <span>Full access to 40-question proctored examinations and study materials.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
              <span>Verifiable digital credentials recorded in the public registry upon passing.</span>
            </li>
          </ul>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/certification"
              onClick={handleDismiss}
              className="btn-primary w-full text-xs py-2.5"
            >
              <span>Explore Certifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={handleDismiss}
              className="text-xs text-[#6B7280] hover:text-[#0F0F14] py-1 text-center"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
