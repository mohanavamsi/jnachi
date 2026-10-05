'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { AuthNav } from '@/components/AuthNav';
import { PromoBanner } from '@/components/LaunchPromoModal';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { TOTAL_CERTIFICATIONS_COUNT, TOTAL_LESSONS_COUNT } from '@/lib/certTypes';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <PromoBanner />
      <header className="sticky top-0 z-40 w-full border-b border-[#E5E7EB] bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-[1120px]">
          {/* Brand Logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4B5563]" aria-label="Main Navigation">
            <Link
              href="/certification"
              className="hover:text-[#5B21B6] transition-colors py-1"
            >
              Certifications
            </Link>
            <Link
              href="/lessons"
              className="hover:text-[#5B21B6] transition-colors py-1"
            >
              Lessons
            </Link>
            <Link
              href="/verify"
              className="hover:text-[#5B21B6] transition-colors py-1"
            >
              Verify Credential
            </Link>
            <Link
              href="/pricing"
              className="hover:text-[#5B21B6] transition-colors py-1"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="hover:text-[#5B21B6] transition-colors py-1"
            >
              About
            </Link>
          </nav>

          {/* Desktop Right CTA and Auth */}
          <div className="hidden md:flex items-center gap-4">
            <AuthNav />
            <Link
              href="/assessment"
              className="btn-primary text-sm px-4 py-2"
            >
              Start Diagnostic
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/assessment"
              className="btn-primary text-xs px-3 py-1.5"
            >
              Diagnostic
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4B5563] hover:text-[#0F0F14] rounded-md hover:bg-[#F9FAFB] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#E5E7EB] bg-white px-4 py-4 space-y-3 shadow-sm animate-in slide-in-from-top-1 duration-150">
            <div className="flex flex-col space-y-1 text-sm font-medium text-[#4B5563]">
              <Link
                href="/certification"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5F3FF] hover:text-[#5B21B6] transition-colors"
              >
                All {TOTAL_CERTIFICATIONS_COUNT} Certifications
              </Link>
              <Link
                href="/lessons"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5F3FF] hover:text-[#5B21B6] transition-colors"
              >
                Lessons & Curriculum ({TOTAL_LESSONS_COUNT})
              </Link>
              <Link
                href="/verify"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5F3FF] hover:text-[#5B21B6] transition-colors"
              >
                Verify Credential
              </Link>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5F3FF] hover:text-[#5B21B6] transition-colors"
              >
                Pricing & Plans
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5F3FF] hover:text-[#5B21B6] transition-colors"
              >
                About Jnachi
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F5F3FF] hover:text-[#5B21B6] transition-colors"
              >
                Contact Support
              </Link>
            </div>

            <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
              <AuthNav />
              <Link
                href="/assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-[#5B21B6] hover:underline inline-flex items-center gap-1"
              >
                <span>Take Diagnostic</span>
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
    <footer className="border-t border-[#E5E7EB] bg-[#2E1065] text-[#EDE9FE] py-16 mt-auto">
      <div className="container mx-auto px-4 max-w-[1120px] space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="hover:opacity-90 transition-opacity inline-block">
              <Logo light />
            </Link>
            <p className="text-xs text-[#EDE9FE]/80 leading-relaxed max-w-sm">
              Professional credentialing platform for applied artificial intelligence, specialized role competencies, and enterprise integration systems.
            </p>
            <div className="pt-2 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[#EDE9FE]/70">Support:</span>
                <a
                  href="mailto:jnachiteam@gmail.com"
                  className="text-white hover:underline font-medium"
                >
                  jnachiteam@gmail.com
                </a>
              </div>
              <div className="text-[#EDE9FE]/70">Response SLA: Within 24 business hours</div>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-xs text-[#EDE9FE]/80">
              <li>
                <Link href="/certification" className="hover:text-white transition-colors">
                  All {TOTAL_CERTIFICATIONS_COUNT} Certifications
                </Link>
              </li>
              <li>
                <Link href="/lessons" className="hover:text-white transition-colors">
                  {TOTAL_LESSONS_COUNT} Study Lessons
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-white transition-colors">
                  Skills Diagnostic
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing & Vouchers
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-white transition-colors">
                  Credential Registry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Tracks */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tracks</h4>
            <ul className="space-y-2 text-xs text-[#EDE9FE]/80">
              <li>
                <Link href="/certification/ai-foundations" className="hover:text-white transition-colors">
                  Core AI Foundations
                </Link>
              </li>
              <li>
                <Link href="/certification/ai-for-developers" className="hover:text-white transition-colors">
                  AI for Developers
                </Link>
              </li>
              <li>
                <Link href="/certification/python-ai" className="hover:text-white transition-colors">
                  Applied Python AI
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
              <li>
                <Link href="/certification/boomi-integration" className="hover:text-white transition-colors">
                  Boomi Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company & Legal</h4>
            <ul className="space-y-2 text-xs text-[#EDE9FE]/80">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Jnachi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  Cancellation & Refunds
                </Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-white transition-colors">
                  Delivery Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Retained Trademark & Independence Notice */}
        <div className="pt-6 pb-2 border-t border-white/10 text-[11px] text-[#EDE9FE]/70 leading-relaxed max-w-4xl">
          <p>
            <strong>Disclaimer:</strong> Jnachi certifications are independently developed and administered by Jnachi. They are not issued, endorsed, or affiliated with IBM, Salesforce, MuleSoft, or Boomi. Product names and logos referenced are trademarks or registered trademarks of their respective owners.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EDE9FE]/60">
          <div>
            &copy; {new Date().getFullYear()} Jnachi. All rights reserved. Provider of Applied AI & Integration Competency Credentials.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <span>•</span>
            <Link href="/refund-policy" className="hover:text-white">Refunds</Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
