import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <section className="w-full bg-slate-50 py-24 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mb-6">
          Where knowing becomes doing.
        </h1>
      </section>

      <section className="w-full py-20 px-4">
        <div className="container mx-auto max-w-3xl prose prose-lg prose-indigo">
          <p className="text-2xl text-slate-700 leading-relaxed font-medium mb-12 text-center">
            Jnachi comes from two roots. <em>Jna</em>, from the Sanskrit <em>jñāna</em> — knowledge, wisdom, true understanding. And <em>chi</em> — the idea, found in both Chinese and Japanese thought, of living energy, of wisdom made active.
          </p>

          <p className="text-xl text-slate-600 mb-8">
            Put together, Jnachi means something simple: <strong>knowledge that&apos;s alive.</strong>
          </p>

          <div className="w-16 h-1 bg-indigo-600 my-12 rounded-full"></div>

          <h2 className="text-3xl font-bold text-slate-900 mb-6">More Than Just a Score</h2>
          <p className="text-lg text-slate-600 mb-6">
            Your Jnachi Score isn&apos;t a grade on how smart you are. It&apos;s a reading of how activated your AI knowledge is right now — and, like energy, it&apos;s built to move.
          </p>
          <p className="text-lg text-slate-600 mb-12">
            In a fast-moving field like artificial intelligence, accumulating facts isn&apos;t enough. We believe in kinetic knowledge. The Jnachi platform is designed to give you a clear, judgment-free reading of where you stand today, illuminating the path toward full activation.
          </p>

          <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-100 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Discover Your Current Reading</h3>
            <p className="text-indigo-800 mb-8">
              Take our interactive assessment to see where your skills are emerging, and where they are fully energized.
            </p>
            <Link 
              href="/reading" 
              className="group inline-flex items-center gap-3 bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-all shadow"
            >
              Check Your Reading
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
