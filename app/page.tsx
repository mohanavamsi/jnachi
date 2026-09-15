import Link from 'next/link';
import { ArrowRight, Activity, Zap, Compass, Award, Layers, CheckCircle2 } from 'lucide-react';
import { CERT_TIERS, TIER_ORDER } from '@/lib/certTypes';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-slate-50 py-16 md:py-24 px-4 relative overflow-hidden border-b border-slate-200/60">
        {/* Background decorative brand mark */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 -translate-y-12 translate-x-16 sm:translate-x-24 md:translate-x-32 w-[380px] sm:w-[500px] md:w-[620px] h-[380px] sm:h-[500px] md:h-[620px] pointer-events-none opacity-45 z-0 text-indigo-200"
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="3" />
            <circle cx="50" cy="50" r="36" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.7" />
            <circle cx="50" cy="50" r="6" fill="currentColor" />
          </svg>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
            {/* Left Column: Text & Actions */}
            <div className="md:col-span-7 flex flex-col items-start text-left">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-indigo-600 mb-3 block">
                Know it. Use it. Prove it.
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
                Get a precise reading of your AI momentum
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                Not a grade. A measure of how activated your AI knowledge is right now.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/assessment"
                  className="inline-flex items-center justify-center gap-2.5 bg-indigo-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-indigo-700 transition-colors"
                >
                  <span>Start assessment</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/certification"
                  className="inline-flex items-center justify-center bg-white text-slate-700 border border-slate-300 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-colors"
                >
                  4-Tier Certifications
                </Link>
              </div>
            </div>

            {/* Right Column: Tilted Preview Card */}
            <div className="md:col-span-5 flex justify-center md:justify-end w-full">
              <div className="w-full max-w-sm bg-white border-2 border-slate-200 rounded-3xl p-8 flex flex-col items-center text-center transform rotate-0 md:-rotate-3 transition-transform">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
                  Jnachi score
                </span>

                {/* Circular Progress Ring (SVG) */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80"
                      cy="80"
                      r="66"
                      fill="none"
                      stroke="#f1f5f9"
                      strokeWidth="12"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="66"
                      fill="none"
                      stroke="#4f46e5"
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray="414.69"
                      strokeDashoffset="178.32"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-slate-900 tracking-tight leading-none">
                      57
                    </span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1.5">
                      out of 100
                    </span>
                  </div>
                </div>

                {/* Level Label in Accent Color */}
                <div className="mt-6 inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold text-sm">
                  Level 3: Builder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formal Credential: 4-Tier Progression Ladder Callout */}
      <section className="w-full py-20 bg-slate-900 text-white px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                Formal Credentials
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                The Jnachi 4-Tier Certification Ladder
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Comprehensive, proctored examinations designed to evaluate applied AI fluency across four structured career progression milestones.
              </p>
            </div>

            <Link
              href="/certification"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-colors shrink-0"
            >
              <span>Explore All 4 Tiers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Tier Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TIER_ORDER.map((tierKey) => {
              const tier = CERT_TIERS[tierKey];
              return (
                <div
                  key={tierKey}
                  className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 hover:border-indigo-500/50 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span
                      className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full inline-block"
                      style={{
                        backgroundColor: tier.colorScheme.bgBadge,
                        color: tier.colorScheme.textBadge,
                      }}
                    >
                      Tier 0{tier.levelNumber}
                    </span>
                    <h3 className="text-xl font-bold text-white">{tier.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{tier.shortDescription}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                    <span>40 Questions (45m)</span>
                    <span className="text-emerald-400 font-bold">80% Pass</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Hub Feature Section */}
      <section className="w-full py-20 bg-slate-50 border-y border-slate-200/60 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100 inline-block mb-3">
                Actionable Curriculum
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                17 Lessons Built for Immediate Practice
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl">
                No vague hype or corporate lecture videos. Each lesson gives you a concrete technique, copyable prompt patterns, and an immediate 5-minute activation challenge.
              </p>
            </div>
            <Link
              href="/lessons"
              className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors text-base"
            >
              <span>View All 17 Lessons</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/lessons" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all group">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md block w-fit mb-3">
                Track 1 • 5 Lessons
              </span>
              <h3 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                AI Literacy & Prompting
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Prompt anatomy, iterative calibration, hallucination detection, personas, and structured schemas.
              </p>
            </Link>

            <Link href="/lessons" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md block w-fit mb-3">
                Track 2 • 4 Lessons
              </span>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                Workflow Automation
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Micro-task audits, personal prompt libraries, chaining multi-step processes, and first-draft clay.
              </p>
            </Link>

            <Link href="/lessons" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all group">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md block w-fit mb-3">
                Track 3 • 4 Lessons
              </span>
              <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-2">
                Data Privacy & Ethics
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Session vs. training data, personal red lines, Zero Data Retention (ZDR), and corporate AI policies.
              </p>
            </Link>

            <Link href="/lessons" className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-md transition-all group">
              <span className="text-xs font-bold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md block w-fit mb-3">
                Track 4 • 4 Lessons
              </span>
              <h3 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors mb-2">
                Growth & Problem Solving
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Cognitive sparring partners, multimodal inputs, anti-hype tool filters, and calibration matrices.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="w-full py-24 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your Knowledge, Activated</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The Jnachi Score measures where your AI understanding currently sits on the activation spectrum. It highlights where to focus your energy next.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Measure the Momentum</h3>
              <p className="text-slate-600">
                A dynamic assessment that reads your current state. Are you emerging, or fully energized?
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Where to Activate Next</h3>
              <p className="text-slate-600">
                Clear, judgment-free guidance on the skills and concepts that will push your practice forward.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50">
              <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">See Your Energy Shift</h3>
              <p className="text-slate-600">
                Knowledge is meant to move. Recheck your reading over time and watch your understanding come alive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-indigo-900 py-24 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to see your energy shift?</h2>
        <p className="text-indigo-200 mb-10 max-w-xl mx-auto text-lg">
          Take the Jnachi assessment today to get your baseline reading and discover your path to full activation.
        </p>
        <Link 
          href="/assessment" 
          className="inline-flex items-center gap-3 bg-white text-indigo-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-50 transition-colors shadow-lg"
        >
          Start Assessment
        </Link>
      </section>
    </div>
  );
}
