import Link from 'next/link';
import { ArrowRight, Activity, Zap, Compass } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-slate-50 py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl mb-6">
          Know it. Use it. Prove it.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mb-10 leading-relaxed">
          Get a precise reading of how activated your AI knowledge is. Not a grade—a measure of your momentum.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link 
            href="/assessment" 
            className="group inline-flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5"
          >
            Start Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/lessons" 
            className="inline-flex items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-50 transition-all shadow-sm hover:-translate-y-0.5"
          >
            Explore 17 Lessons
          </Link>
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
                No vague hype or 30-minute corporate lecture videos. Each lesson gives you a concrete technique, copyable prompt patterns, and an immediate 5-minute activation challenge.
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
