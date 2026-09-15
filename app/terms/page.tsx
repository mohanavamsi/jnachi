import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Jnachi',
  description: 'Terms and conditions governing the use of Jnachi assessments, learning lessons, and digital certification examinations.',
};

export default function TermsPage() {
  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block mb-3">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs text-slate-500 mt-2">Last Updated: September 15, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Jnachi platform (<Link href="/" className="text-indigo-600 hover:underline">jnachi.com</Link>), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">2. Description of Services</h2>
          <p>
            Jnachi provides online digital educational tools, including AI momentum skill assessments, structured learning modules, and proctored certification examinations spanning 10 Core and Role-Based tracks. Upon successful examination completion, candidates are awarded verifiable digital credentials and diplomas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">3. Examination Integrity & Anti-Cheating Policy</h2>
          <p>
            To maintain credential prestige and employer trust, all certification examinations are strictly proctored and subject to anti-cheating monitoring:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li>Candidates must complete examinations independently without unauthorized external AI tool assistance during active test sessions.</li>
            <li>Tab switching, window unfocusing, and copy-pasting examination content trigger security proctor strikes. Accumulating 3 strikes results in immediate attempt disqualification.</li>
            <li>In the event of an unsuccessful attempt, a mandatory 24-hour integrity cooldown applies before a re-attempt is permitted.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">4. Payments, Pricing & Access</h2>
          <p>
            Certain advanced certifications and enterprise team packages may require payment of examination fees. Prices are listed in USD/INR and processed securely via authorized payment gateways (e.g., Razorpay, Stripe). All payments are subject to our <Link href="/refund-policy" className="text-indigo-600 hover:underline font-semibold">Cancellation and Refund Policy</Link>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">5. Intellectual Property Rights</h2>
          <p>
            All content, question banks, assessment scoring algorithms, graphics, lesson curricula, and brand marks on Jnachi are the exclusive intellectual property of Jnachi. Unauthorized copying, distribution, scraping, or commercial resale of examination materials is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">6. Limitation of Liability</h2>
          <p>
            Jnachi provides its assessments and certifications on an &quot;as-is&quot; basis. While our certifications measure competency against rigorous benchmarks, Jnachi makes no guarantees regarding specific employment outcomes, salary raises, or hiring decisions made by third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">7. Governing Law & Dispute Resolution</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in India.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">8. Contact Information</h2>
          <p>
            For any legal notices, questions, or clarification regarding these Terms, please contact:
          </p>
          <p className="font-semibold text-slate-800">
            Email: <a href="mailto:jnachiteam@gmail.com" className="text-indigo-600 hover:underline">jnachiteam@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
