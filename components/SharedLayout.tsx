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
    <footer className="border-t border-slate-200 bg-slate-50 py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo className="opacity-80" />
          <p className="text-slate-500 text-sm italic">Pronounced &quot;juh-NAH-chee&quot;</p>
          <p className="text-slate-500 text-sm mt-2">Where knowing becomes doing.</p>
        </div>
        
        <div className="flex flex-wrap gap-6 sm:gap-8 text-sm text-slate-600">
          <Link href="/lessons" className="hover:text-indigo-600 transition-colors font-medium text-indigo-600">Learning Hub (17 Lessons)</Link>
          <Link href="/certification" className="hover:text-indigo-600 transition-colors font-medium">4-Tier Certifications</Link>
          <Link href="/assessment" className="hover:text-indigo-600 transition-colors">Quick Assessment</Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">About Jnachi</Link>
          <Link href="/profile" className="hover:text-indigo-600 transition-colors">My Profile</Link>
        </div>
      </div>
      <div className="container mx-auto px-4 max-w-6xl mt-8 pt-8 border-t border-slate-200 text-center text-slate-400 text-xs">
        &copy; {new Date().getFullYear()} Jnachi. All rights reserved.
      </div>
    </footer>
  );
}
