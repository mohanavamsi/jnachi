import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jnachi',
  description: 'Learn how Jnachi collects, uses, and protects your personal information and examination data in compliance with data privacy standards.',
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block mb-3">
            Data Protection & Privacy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">Last Updated: September 15, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>We collect only the minimum necessary information to deliver our assessment and certification services:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li><strong>Account & Candidate Data:</strong> Name, email address, optional location and company details for diploma generation.</li>
            <li><strong>Assessment & Examination Records:</strong> Answers submitted, score breakdowns across the 4 competency tracks, completion timestamps, and anti-cheating proctoring event logs.</li>
            <li><strong>Payment Information:</strong> Transaction identifiers and payment status provided by our payment gateway partners (e.g. Razorpay, Stripe). We do NOT store complete credit card numbers or banking passwords on our servers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li>To evaluate examination answers and issue official verifiable digital credentials.</li>
            <li>To host public credential verification pages (<code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-indigo-600 font-mono">/verify/[certId]</code>) when shared by the candidate.</li>
            <li>To provide customer support and notify candidates regarding exam results and re-attempt cooldowns.</li>
            <li>To prevent fraud, multiple account abuses, and examination tampering.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">3. Zero Data Retention (ZDR) & Third-Party Disclosure</h2>
          <p>
            We respect your privacy. We never sell, rent, or monetize your personal information to third-party data brokers or marketing agencies. Data is shared exclusively with:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-sm text-slate-600">
            <li>Authorized payment processors (Razorpay, Stripe) for secure transaction settlement.</li>
            <li>Cloud infrastructure providers (e.g., Vercel, Firebase) with industry-standard encryption protocols.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">4. Cookies & Analytics</h2>
          <p>
            We use essential cookies and session storage to maintain authentication state, save exam timer progress, and store temporary user preferences (e.g., dismissing promotion modals). You can control cookie settings through your web browser.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">5. Data Retention & Your Rights</h2>
          <p>
            You have the right to access, rectify, or request deletion of your candidate profile data at any time by contacting our support desk. Please note that earned credentials may retain a record in our cryptographic registry for verification integrity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">6. Grievance Officer & Contact</h2>
          <p>
            In accordance with applicable Information Technology regulations, if you have any questions or grievances regarding this Privacy Policy, please contact our Grievance Desk:
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm">
            <p className="font-bold text-slate-900">Jnachi Privacy & Grievance Desk</p>
            <p>Email: <a href="mailto:jnachiteam@gmail.com" className="text-indigo-600 hover:underline">jnachiteam@gmail.com</a></p>
            <p>Response Timeline: Within 24–48 business hours</p>
          </div>
        </section>
      </div>
    </div>
  );
}
