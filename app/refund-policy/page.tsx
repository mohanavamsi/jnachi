import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cancellation and Refund Policy | Jnachi',
  description: 'Understand the cancellation, refund, and payment dispute policy for Jnachi certification examination vouchers and services.',
};

export default function RefundPolicyPage() {
  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block mb-3">
            Payment & Refund Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">Last Updated: September 15, 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">1. Overview of Digital Services</h2>
          <p>
            Jnachi provides digital learning assessments, proctored examination attempts, and verified professional digital certificates. Because these services grant instant digital access and evaluation infrastructure, our refund policy is designed to be fair, clear, and transparent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">2. Examination Fee Refunds</h2>
          <div className="space-y-3 text-sm text-slate-600">
            <p>
              <strong>Eligible for 100% Refund:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>If you purchased an examination voucher or fee and have <strong>not yet started or commenced the exam attempt</strong>, you are eligible for a full refund within <strong>7 calendar days</strong> of purchase.</li>
              <li>In the rare event of a technical failure originating on our servers (such as an unrecoverable system crash during an ongoing examination where the attempt cannot be restored or re-issued).</li>
              <li>Duplicate transactions or accidental double charges charged by the payment gateway.</li>
            </ul>

            <p className="pt-2">
              <strong>Non-Refundable Circumstances:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Once an examination attempt has been started, completed, and graded by the system.</li>
              <li>If an attempt is disqualified due to severe violations of the Anti-Cheating & Proctoring Policy (e.g., exceeding 3 proctor strikes for unauthorized tab switching).</li>
              <li>Failure to achieve the required 80% passing threshold on an examination. (Candidates are granted subsequent retake attempts according to tier guidelines).</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">3. Cancellation Policy</h2>
          <p>
            Users may cancel their order prior to initiating the examination by sending an email with their registered email address and transaction reference number to <a href="mailto:jnachiteam@gmail.com" className="text-indigo-600 font-semibold hover:underline">jnachiteam@gmail.com</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">4. Refund Processing Timeline</h2>
          <p>
            Approved refunds will be processed within <strong>2 business days</strong> of approval. The refunded amount will be credited back to your original mode of payment (Credit Card, Debit Card, Net Banking, UPI, or Wallet) within <strong>5 to 7 business days</strong>, depending on your bank&apos;s settlement schedule.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">5. How to Request a Refund</h2>
          <p>To request a cancellation or refund, please contact our support desk with your details:</p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-1">
            <p><strong>Support Email:</strong> <a href="mailto:jnachiteam@gmail.com" className="text-indigo-600 hover:underline font-semibold">jnachiteam@gmail.com</a></p>
            <p><strong>Subject Line:</strong> Refund Request - [Transaction ID or Registered Email]</p>
            <p><strong>Details to Include:</strong> Candidate Name, Registered Email, Date of Transaction, and Reason for Request.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
