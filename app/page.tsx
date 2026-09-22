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
  Terminal,
} from 'lucide-react';
import { CERT_TIERS, CORE_TIER_ORDER, ROLE_TIER_ORDER, PYTHON_TIER_ORDER } from '@/lib/certTypes';
import { LaunchPromoModal } from '@/components/LaunchPromoModal';
import { HomeHeroInteractiveWidget } from '@/components/HomeHeroInteractiveWidget';
import { HomeRoleBenchmarkPicker } from '@/components/HomeRoleBenchmarkPicker';
import { HomeScorecardPreview } from '@/components/HomeScorecardPreview';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* 30-Day Free Launch Promo Modal */}
      <LaunchPromoModal />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Gen-Z Diagnostic Launcher & Interactive Teaser          */}
      {/* ========================================================================= */}
      <section className="w-full relative overflow-hidden pt-12 pb-20 md:py-24 px-4 border-b border-white/10 bg-radial-gradient">
        {/* Ambient Neon Mesh Glows */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-32 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/20 to-cyan-500/15 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Welcoming Headline & Diagnostic Pitch */}
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              {/* Urgency Pill */}
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold hover:bg-amber-400/25 transition-all shadow-sm group"
              >
                <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                <span className="font-black uppercase tracking-wider text-[11px] text-amber-200">
                  Instant AI Diagnostic:
                </span>
                <span className="text-white">3 Mins • 100% Free • No BS</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Main Headline */}
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-indigo-400 block">
                  Know it. Use it. Prove it.
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
                  How sharp is your real-world{' '}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-amber-300 bg-clip-text text-transparent">
                    AI instinct?
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Not a boring generic quiz. A high-signal diagnostic evaluating prompt engineering, agent chaining, data privacy redlines, and critical judgment in under 3 minutes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 px-8 py-4 rounded-2xl text-base font-black hover:from-amber-300 hover:to-yellow-300 transition-all shadow-xl hover:shadow-amber-400/20 hover:scale-[1.02] active:scale-[0.99]"
                >
                  <Zap className="w-4 h-4 fill-slate-950" />
                  <span>Take 3-Min Assessment →</span>
                </Link>
                <Link
                  href="/certification"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/15 px-7 py-4 rounded-2xl text-sm font-bold transition-all hover:text-white"
                >
                  <Award className="w-4 h-4 text-indigo-400" />
                  <span>Browse 12 Certifications</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant Radar Scorecard
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Login Needed
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 1-Click LinkedIn Badges
                </span>
              </div>
            </div>

            {/* Right Column: Live Interactive Question Teaser */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <HomeHeroInteractiveWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. LIVE BENCHMARK STATS TICKER                                            */}
      {/* ========================================================================= */}
      <section className="w-full bg-slate-900/90 border-b border-white/10 py-6 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-2">
            <div className="text-2xl sm:text-3xl font-black text-amber-300">14,200+</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Professionals Tested
            </div>
          </div>
          <div className="p-2">
            <div className="text-2xl sm:text-3xl font-black text-indigo-400">64 / 100</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Avg Industry Score
            </div>
          </div>
          <div className="p-2">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">12 Tracks</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              Official Credentials
            </div>
          </div>
          <div className="p-2">
            <div className="text-2xl sm:text-3xl font-black text-purple-400">100% Free</div>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
              30-Day Launch Access
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PICK YOUR TRACK: Interactive Role Diagnostic Selector                 */}
      {/* ========================================================================= */}
      <section className="w-full py-20 md:py-28 bg-slate-950 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
              Tailored Diagnostic Tracks
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pick Your Domain & Benchmark Your AI Edge
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Every job uses AI differently. Choose your specialty to test real-world prompt workflows, tool chaining, and security practices.
            </p>
          </div>

          {/* Interactive Role Benchmark Picker Component */}
          <HomeRoleBenchmarkPicker />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE DIAGNOSTIC EXPERIENCE: Interactive Scorecard Simulator            */}
      {/* ========================================================================= */}
      <section className="w-full py-20 bg-slate-900/60 border-y border-white/10 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block">
              High-Signal Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Actionable Diagnosis, Not Just a Letter Grade
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Discover your exact score across 4 pillars, uncover blindspots, and unlock tailored micro-lessons to accelerate your mastery.
            </p>
          </div>

          {/* Interactive Scorecard Preview Component */}
          <HomeScorecardPreview />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FROM BENCHMARK TO CREDENTIAL: 12 Verifiable Certifications           */}
      {/* ========================================================================= */}
      <section className="w-full py-20 md:py-28 bg-slate-950 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" /> 30-Day Free Launch Celebration
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" /> 12 Official Credentials
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Turn Your AI Momentum into Verifiable Credentials
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                4 Core Progression Milestones, 6 Role-Based Tracks, plus 2 Python AI & Automation Specializations. Proctored, verifiable, and free for the next 30 days.
              </p>
            </div>

            <Link
              href="/certification"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-xs sm:text-sm rounded-2xl transition-all shadow-md shrink-0 hover:scale-102"
            >
              <span>Explore All 12 Certifications →</span>
            </Link>
          </div>

          {/* 4 Core Tier Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_TIER_ORDER.map((tierKey) => {
              const tier = CERT_TIERS[tierKey];
              return (
                <Link
                  key={tierKey}
                  href="/certification"
                  className="p-6 rounded-3xl bg-slate-900/90 border border-white/10 hover:border-indigo-400 hover:bg-slate-900 transition-all flex flex-col justify-between space-y-4 group shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full inline-block"
                        style={{
                          backgroundColor: tier.colorScheme.bgBadge,
                          color: tier.colorScheme.textBadge,
                        }}
                      >
                        Tier 0{tier.levelNumber}
                      </span>
                      {tierKey === 'beginner' ? (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          100% Free
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Official Exam
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {tier.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>40 Questions (45m)</span>
                    <span className="text-amber-300 font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      {tierKey === 'beginner' ? 'Start Free →' : 'Enroll →'}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Role & Python Track Highlights Strip */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-sm font-bold text-white">8 Specialized Tracks: 6 Roles & 2 Python Tracks</h4>
                  <span className="text-[10px] font-black uppercase bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded-full">
                    100% Free for 30 Days
                  </span>
                </div>
                <p className="text-xs text-indigo-200 mt-0.5">
                  Python for AI • Applied Python Automation • Sales • Developers • Marketers • Support • HR • Managers
                </p>
              </div>
            </div>
            <Link
              href="/certification"
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200 text-xs font-bold uppercase tracking-wider shrink-0 bg-amber-400/10 border border-amber-400/30 px-4 py-2.5 rounded-xl transition-all hover:bg-amber-400/20"
            >
              <span>Explore Specializations (Free)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ACTIONABLE LESSON LIBRARY: 17 Concrete Lessons                         */}
      {/* ========================================================================= */}
      <section className="w-full py-20 bg-slate-900/60 border-t border-white/10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1.5 rounded-full border border-indigo-500/20 inline-block mb-3">
                Actionable Curriculum
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                17 Lessons Built for Immediate Practice
              </h2>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                No corporate lecture videos or vague hype. Each lesson gives you a concrete technique, copyable prompt patterns, and an immediate 5-minute activation challenge.
              </p>
            </div>
            <Link
              href="/lessons"
              className="inline-flex items-center gap-2 text-indigo-300 font-bold hover:text-indigo-200 transition-colors text-sm"
            >
              <span>View All 17 Lessons</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/lessons" className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 hover:border-indigo-400 hover:shadow-lg transition-all group">
              <span className="text-xs font-bold text-indigo-300 bg-indigo-500/20 px-2.5 py-1 rounded-md block w-fit mb-3">
                Track 1 • 5 Lessons
              </span>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-indigo-300 transition-colors">
                AI Literacy & Prompting
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Persona modeling, structured output formatting, few-shot calibration, and reducing context noise.
              </p>
            </Link>

            <Link href="/lessons" className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 hover:border-indigo-400 hover:shadow-lg transition-all group">
              <span className="text-xs font-bold text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded-md block w-fit mb-3">
                Track 2 • 4 Lessons
              </span>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-amber-300 transition-colors">
                Workflow Automation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-step chaining, batch data structuring, automated documentation, and template libraries.
              </p>
            </Link>

            <Link href="/lessons" className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 hover:border-indigo-400 hover:shadow-lg transition-all group">
              <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-md block w-fit mb-3">
                Track 3 • 4 Lessons
              </span>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-emerald-300 transition-colors">
                Data Privacy & Safety
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enterprise ZDR guidelines, PII redaction protocols, bias checks, and verifying AI generated facts.
              </p>
            </Link>

            <Link href="/lessons" className="bg-slate-900/90 p-6 rounded-2xl border border-white/10 hover:border-indigo-400 hover:shadow-lg transition-all group">
              <span className="text-xs font-bold text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-md block w-fit mb-3">
                Track 4 • 4 Lessons
              </span>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-purple-300 transition-colors">
                Problem Solving & Sparring
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Adversarial pressure testing, counter-argument generation, strategic trade-off modeling, and critical AI judgment.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOTTOM CALL TO ACTION: Instant Assessment Invitation                  */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/10">
        <div className="container mx-auto max-w-4xl bg-gradient-to-r from-indigo-900 via-purple-950 to-indigo-900 border-2 border-amber-400/50 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-black uppercase tracking-wider text-amber-300 bg-amber-400/20 px-3.5 py-1.5 rounded-full inline-block">
              ⚡ Free 3-Minute Momentum Reading
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to see where your AI skills rank?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join 14,200+ professionals. Answer 20 scenario-driven questions, unlock your 4-pillar radar scorecard, and prove your capabilities.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              href="/assessment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 text-slate-950 px-9 py-4 rounded-2xl text-base font-black hover:from-amber-300 hover:to-yellow-300 transition-all shadow-xl hover:scale-102"
            >
              <Zap className="w-4 h-4 fill-slate-950" />
              <span>Launch 3-Min Assessment (Free) →</span>
            </Link>
            <Link
              href="/certification"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-4 rounded-2xl text-sm font-bold transition-all"
            >
              <span>Explore Certifications</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
