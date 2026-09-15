import { Metadata } from 'next';
import Link from 'next/link';
import { Download, Zap, Mail, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping and Delivery Policy | Jnachi',
  description: 'Shipping and electronic delivery policy for Jnachi digital assessments, proctored examinations, and verified diplomas.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block mb-3">
            Fulfillment & Delivery
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2">Last Updated: September 15, 2026</p>
        </div>

        {/* Digital Delivery Badge Banner */}
        <div className="p-5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-900 flex items-start gap-3">
          <Zap className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <p className="text-sm">
            <strong>100% Digital Delivery:</strong> Jnachi delivers all products electronically. No physical goods or packages are shipped via post or courier.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">1. Nature of Products & Services</h2>
          <p>
            All products and services offered on <Link href="/" className="text-indigo-600 hover:underline">jnachi.com</Link>—including AI skill assessments, learning curriculum lessons, proctored examination vouchers, and official verifiable diplomas—are <strong>purely digital goods and online software services (SaaS / EdTech)</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">2. Electronic Delivery Method & Timelines</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Examination Access</span>
              </div>
              <p className="text-xs text-slate-600">
                Instantly activated in the browser upon registration or voucher checkout. Candidates can immediately commence their proctored exam attempt.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Diplomas & Badges</span>
              </div>
              <p className="text-xs text-slate-600">
                Generated instantly upon achieving the required 80% passing threshold. Immediate access to high-res PNG/PDF downloads and public verification link (<code className="text-[11px] bg-slate-200 px-1 py-0.5 rounded">/verify/[id]</code>).
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">3. Confirmation & Receipts</h2>
          <p>
            Upon successful transaction completion, a digital receipt and confirmation are sent automatically to the email address specified during registration.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">4. Delivery Issues & Assistance</h2>
          <p>
            If you encounter any difficulty accessing your exam voucher, reading report, or earned digital diploma after completion, please reach out to our technical support desk immediately:
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm">
            <p className="font-bold text-slate-900">Digital Fulfillment Desk</p>
            <p>Email: <a href="mailto:jnachiteam@gmail.com" className="text-indigo-600 hover:underline">jnachiteam@gmail.com</a></p>
            <p>Resolution Window: Within 24 hours</p>
          </div>
        </section>
      </div>
    </div>
  );
}
