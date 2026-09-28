import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Award,
  Layers,
  CheckCircle2,
  Brain,
  TrendingUp,
  Compass,
  Users,
  Check,
  X,
  Lock,
  FileCheck2,
  Share2,
  GraduationCap,
  Briefcase,
  ExternalLink,
} from 'lucide-react';
import { LaunchPromoModal } from '@/components/LaunchPromoModal';
import { HomeCertificationCatalog } from '@/components/HomeCertificationCatalog';
import { HomeAudienceSwitcher } from '@/components/HomeAudienceSwitcher';
import { HomeCertificateShowcase } from '@/components/HomeCertificateShowcase';

export const metadata: Metadata = {
  title: 'Jnachi | Get Certified. Prove What You Know.',
  description:
    'Earn official, proctored AI & Enterprise Integration certifications that test your actual knowledge and practical execution — not just course completion. 100% Free 30-Day Launch Access for students and professionals. Verifiable LinkedIn credentials.',
  keywords: [
    'Jnachi',
    'Jnachi AI Certification',
    'Jnachi Certifications',
    'Get Certified AI',
    'Prove AI Skills',
    'Proctored AI Exam',
    'AI Certification for Students',
    'AI Certification for Professionals',
    'LinkedIn AI Badge',
    'Verifiable AI Certificate',
    'MuleSoft Certification',
    'Salesforce Integration Certification',
    'IBM MQ Certification',
    'Python AI Certification',
  ],
  alternates: {
    canonical: 'https://jnachi.com',
  },
  openGraph: {
    title: 'Jnachi | Get Certified. Prove What You Know.',
    description:
      'Take structured, proctored certification exams that test your actual knowledge and practical understanding. Free 30-day launch access for students and professionals.',
    url: 'https://jnachi.com',
    siteName: 'Jnachi',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jnachi — Get Certified. Prove What You Know.',
      },
    ],
  },
};

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Jnachi — Get Certified. Prove What You Know.',
    url: 'https://jnachi.com',
    description:
      'Jnachi offers proctored industry certifications across Core AI, Role-Based Tracks, Applied Python, and Enterprise Integration with verifiable credentials and 1-click LinkedIn badges.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Jnachi',
      url: 'https://jnachi.com',
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a Jnachi Certification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Jnachi Certification is an official, proctored industry credential that evaluates your practical understanding and applied capabilities across artificial intelligence, specialized role tracks, Python engineering, and enterprise integration systems.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Jnachi different from a standard online course?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional courses only verify that you watched video modules. Jnachi provides a structured, proctored examination with anti-cheating security measures that proves your actual practical ability, providing a verifiable credential ID and 1-click LinkedIn badge.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a free launch access period?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All 18 Jnachi certification tracks and exams are currently 100% free to attempt during the 30-day launch window.',
          },
        },
      ],
    },
  };

  return (
    <div className="flex flex-col items-center w-full bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      {/* 30-Day Free Launch Promo Modal */}
      <LaunchPromoModal />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Certification-First Primary Proposition                  */}
      {/* ========================================================================= */}
      <section className="w-full relative overflow-hidden pt-12 pb-20 md:py-24 px-4 border-b border-slate-800/80 bg-radial-gradient">
        {/* Ambient Glows */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-32 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-500/15 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container mx-auto max-w-5xl relative z-10 text-center space-y-8">
          {/* Tagline Urgency Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            <span className="uppercase tracking-wider text-[11px] text-amber-200">Limited Launch Window:</span>
            <span className="text-white">100% Free Official Certifications & LinkedIn Badges</span>
          </div>

          {/* Primary Main Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Get Certified.{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-amber-300 bg-clip-text text-transparent">
                Prove What You Know.
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
              Take structured, proctored certification exams that test your <strong>actual knowledge and practical understanding</strong> — not just whether you watched a course.
            </p>
          </div>

          {/* Value Mantra Pill */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-indigo-400">
            <span>Learn it</span>
            <span className="text-slate-600">•</span>
            <span>Test it</span>
            <span className="text-slate-600">•</span>
            <span>Prove it</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-300">Get certified</span>
          </div>

          {/* Dual Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="#certifications"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-base transition-all shadow-xl shadow-indigo-600/40 hover:scale-[1.02] active:scale-98 group"
            >
              <span>Explore Certifications</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-slate-700 transition-all shadow-md"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Take Free 3-Min Diagnostic</span>
            </Link>
          </div>

          {/* Trust Highlights Row */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">Proctored Security</span>
                <span className="text-[11px] text-slate-400">Anti-cheating integrity</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">18 Industry Tracks</span>
                <span className="text-[11px] text-slate-400">AI, Roles, Python, iPaaS</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <Share2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">1-Click LinkedIn</span>
                <span className="text-[11px] text-slate-400">Verifiable digital badge</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900/60 border border-slate-800/60">
              <FileCheck2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">Tamper-Proof ID</span>
                <span className="text-[11px] text-slate-400">Public registry lookup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CERTIFICATION DISCOVERY: Interactive Catalog (The Visual Focus)       */}
      {/* ========================================================================= */}
      <section id="certifications" className="w-full py-20 px-4 scroll-mt-20 border-b border-slate-800/80">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Official Industry Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Choose Your Certification Track
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Select a specialized credential below. Review exam objectives, practice with micro-study modules, and pass the proctored test to earn your official diploma.
            </p>
          </div>

          {/* Interactive Catalog Component */}
          <HomeCertificationCatalog />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY GET CERTIFIED WITH JNACHI? (Vs. Passive Courses)                  */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 bg-slate-900/40 border-b border-slate-800/80">
        <div className="container mx-auto max-w-6xl space-y-14">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1.5 rounded-full inline-block">
              The Credential Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Why Jnachi Certification Instead of Just a Course?
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Jnachi doesn&apos;t just teach you a skill — it gives you an authentic way to prove you actually know it.
            </p>
          </div>

          {/* Comparison Cards: Courses vs Jnachi Proctored Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Traditional Course Box */}
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5 opacity-80">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Traditional Online Courses</span>
                <span className="text-xs font-semibold text-rose-400 bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-800/60">Passive</span>
              </div>
              <h3 className="text-xl font-bold text-slate-300">
                &ldquo;Certificate of Completion&rdquo;
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Only proves you clicked through video playback.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Zero proctoring or anti-cheating verification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <span>Ignored by recruiters as unvalidated resume filler.</span>
                </li>
              </ul>
            </div>

            {/* Jnachi Proctored Certification Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-indigo-950/70 to-slate-900 border-2 border-indigo-500/60 shadow-xl shadow-indigo-600/10 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">Jnachi Proctored Certification</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800">Verified</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Proof of Actual Applied Knowledge
              </h3>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Rigorous 40-question scenario exam (80% passing standard).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Anti-cheating proctoring and integrity cooldown protections.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Tamper-proof verification registry at <code className="text-indigo-300 font-mono text-xs">/verify/[id]</code> with 1-click LinkedIn badge.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4-Step User Certification Journey */}
          <div className="pt-8 space-y-8">
            <h3 className="text-center text-xl sm:text-2xl font-black text-white">
              How the Certification Journey Works
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm">
                  1
                </div>
                <h4 className="text-base font-bold text-white">1. Select Track & Assess</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Choose from 18 specialized tracks or take the 3-minute diagnostic to find your exact baseline.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm">
                  2
                </div>
                <h4 className="text-base font-bold text-white">2. Prepare with Lessons</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Review exam objectives, copyable prompt templates, and 5-minute practical micro-study modules.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black text-sm">
                  3
                </div>
                <h4 className="text-base font-bold text-white">3. Pass Proctored Exam</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Complete the 40-question proctored test within the time limit and achieve the 80% passing standard.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative space-y-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm">
                  4
                </div>
                <h4 className="text-base font-bold text-white">4. Showcase Credential</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Download high-res diploma, share your tamper-proof verification link, and attach to LinkedIn with 1 click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DUAL AUDIENCE PATHWAYS (Students vs Working Professionals)             */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 border-b border-slate-800/80">
        <div className="container mx-auto max-w-6xl">
          <HomeAudienceSwitcher />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. WHAT YOU EARN: Realistic Credential & Verification Showcase           */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 bg-slate-900/30 border-b border-slate-800/80">
        <div className="container mx-auto max-w-6xl">
          <HomeCertificateShowcase />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. TRUST & ASSESSMENT INTEGRITY                                          */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 border-b border-slate-800/80">
        <div className="container mx-auto max-w-5xl space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Exam Security & Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Why Employers & Candidates Trust Jnachi
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Credentials only carry value when the examination process cannot be gamed. Jnachi implements active security measures to protect certification prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Active Proctor Strikes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Tab-switching, window blur, and unauthorized external aids trigger automated security strikes. 3 strikes results in immediate attempt cancellation.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">24-Hour Integrity Cooldown</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Failed attempts require a mandatory 24-hour preparation cooldown before a retake is permitted, preventing brute-force guessing of questions.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Permanent Cryptographic ID</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Earned certificates are recorded in our public registry. Anyone can verify recipient name, issue date, track, and score at <code className="text-indigo-300 font-mono text-[11px]">jnachi.com/verify</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FINAL CONVERSION SECTION: Direct High-Impact CTA                      */}
      {/* ========================================================================= */}
      <section className="w-full py-24 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950/60 to-slate-950">
        {/* Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none"
        />

        <div className="container mx-auto max-w-4xl text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/80 text-emerald-300 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Launch Offer: 100% Free Access Active</span>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
              Ready to Prove What You Know?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore Jnachi certifications, test your practical capabilities, and earn verifiable industry credentials today.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              href="/certification"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-base transition-all shadow-xl shadow-indigo-600/40 hover:scale-[1.02] active:scale-98 group"
            >
              <span>Explore All 18 Certifications</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-sm sm:text-base border border-slate-700 transition-all shadow-md"
            >
              <span>Take Free Diagnostic</span>
            </Link>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>✓ No credit card required</span>
            <span>•</span>
            <span>✓ 100% Free Launch Window</span>
            <span>•</span>
            <span>✓ Official Verifiable LinkedIn Badges</span>
          </div>
        </div>
      </section>
    </div>
  );
}
