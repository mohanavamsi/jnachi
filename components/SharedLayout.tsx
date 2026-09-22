'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { AuthNav } from '@/components/AuthNav';
import { PromoBanner } from '@/components/LaunchPromoModal';
import { BookOpen, Award, Menu, X, ArrowRight, Layers } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <PromoBanner />
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        {/* Left: Brand Logo */}
        <Link href="/" className="hover:opacity-85 transition-opacity flex items-center">
          <Logo />
        </Link>

        {/* Right: Desktop Navigation Links & Actions */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link 
            href="/lessons" 
            className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition-colors py-1"
          >
            <BookOpen className="w-4 h-4 text-indigo-500" />
            <span>Lessons</span>
          </Link>
          <Link 
            href="/certification" 
            className="flex items-center gap-1.5 text-slate-600 hover:text-indigo-600 transition-colors py-1"
          >
            <Award className="w-4 h-4 text-indigo-500" />
            <span>Certifications</span>
          </Link>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          <Link 
            href="/assessment" 
            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors shadow-sm whitespace-nowrap text-sm font-medium"
          >
            Start Assessment
          </Link>

          <AuthNav />
        </div>

        {/* Mobile: Assessment CTA + Hamburger */}
        <div className="flex md:hidden items-center gap-2.5">
          <Link 
            href="/assessment" 
            className="px-3 py-1.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors text-xs font-medium"
          >
            Assessment
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <Link
              href="/lessons"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" />
              <span>Lessons & Curriculum</span>
            </Link>
            <Link
              href="/certification"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
            >
              <Award className="w-4 h-4 text-indigo-600" />
              <span>4-Tier Certifications</span>
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
            >
              <span>Our Story</span>
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <AuthNav />
            <Link
              href="/assessment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <span>Take Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 py-16 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="hover:opacity-90 transition-opacity inline-block">
              <Logo className="text-white" />
            </Link>
            <p className="text-slate-400 text-xs italic">Pronounced &quot;juh-NAH-chee&quot; • Where knowing becomes doing.</p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The premier platform for measuring applied AI momentum and earning official, proctored industry credentials.
            </p>
            <div className="pt-2 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">Support Email:</span>
                <a href="mailto:jnachiteam@gmail.com" className="text-amber-400 hover:text-amber-300 font-semibold underline decoration-amber-400/40">
                  jnachiteam@gmail.com
                </a>
              </div>
              <div className="text-slate-400">Response SLA: Within 24 business hours</div>
            </div>
          </div>

          {/* Column 2: Platform & Learning */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/certification" className="hover:text-white transition-colors">
                  18 Industry Certifications
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="hover:text-white transition-colors">
                  17 Practical Lessons
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-white transition-colors">
                  Momentum Assessment
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-white transition-colors">
                  Verify Credentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Role Certifications */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Role Tracks</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/certification/ai-for-sales" className="hover:text-white transition-colors">
                  Jnachi for Sales
                </Link>
              </li>
              <li>
                <Link href="/certification/ai-for-developers" className="hover:text-white transition-colors">
                  Jnachi for Developers
                </Link>
              </li>
              <li>
                <Link href="/certification/ai-for-marketers" className="hover:text-white transition-colors">
                  Jnachi for Marketers
                </Link>
              </li>
              <li>
                <Link href="/certification/ai-for-customer-support" className="hover:text-white transition-colors">
                  Jnachi for Support
                </Link>
              </li>
              <li>
                <Link href="/certification/ai-for-hr" className="hover:text-white transition-colors">
                  Jnachi for HR & Ops
                </Link>
              </li>
              <li>
                <Link href="/certification/ai-for-managers" className="hover:text-white transition-colors">
                  Jnachi for Managers
                </Link>
              </li>
              <li>
                <Link href="/certification/mulesoft-integration" className="hover:text-white transition-colors">
                  MuleSoft Integration
                </Link>
              </li>
              <li>
                <Link href="/certification/webmethods-integration" className="hover:text-white transition-colors">
                  IBM webMethods / SAG
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Razorpay Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Legal & Compliance</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  Cancellation & Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-white transition-colors">
                  Shipping & Delivery Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Jnachi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trademark & Independence Disclaimer */}
        <div className="pt-6 pb-2 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed max-w-4xl">
          <p>
            <strong>Disclaimer:</strong> Jnachi certifications are independently developed and administered by Jnachi. They are not issued, endorsed, or affiliated with IBM, Salesforce, MuleSoft, or Boomi. Product names and logos referenced are trademarks or registered trademarks of their respective owners.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Jnachi. All rights reserved. Registered Provider of Applied AI & Integration Competency Credentials.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-slate-300">Terms</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-slate-300">Privacy</Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-slate-300">Refunds</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
