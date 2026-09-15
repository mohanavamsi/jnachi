import { Metadata } from 'next';
import { Mail, Clock, MapPin, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Jnachi',
  description: 'Get in touch with the Jnachi team for certification support, enterprise licensing, and general inquiries at jnachiteam@gmail.com.',
};

export default function ContactPage() {
  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3.5 py-1.5 rounded-full inline-block">
            Support & Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact the Jnachi Team
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Have questions about certifications, payment verification, proctored examinations, or enterprise team licensing? We are here to help.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Support */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Email Support</h2>
            <p className="text-xs text-slate-500">For general inquiries, exam support & feedback</p>
            <a
              href="mailto:jnachiteam@gmail.com"
              className="text-sm font-bold text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300"
            >
              jnachiteam@gmail.com
            </a>
          </div>

          {/* Operating Hours */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Response Time</h2>
            <p className="text-xs text-slate-500">Monday – Saturday</p>
            <span className="text-sm font-bold text-slate-800">
              Within 24 Business Hours
            </span>
          </div>

          {/* Verification & Legal */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-bold text-slate-900">Credential Registry</h2>
            <p className="text-xs text-slate-500">Official certificate verification</p>
            <Link
              href="/verify"
              className="text-sm font-bold text-indigo-600 hover:text-indigo-800 underline decoration-indigo-300"
            >
              jnachi.com/verify
            </Link>
          </div>
        </div>

        {/* Business & Operations Information */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Business & Grievance Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Platform Operator</h3>
              <p>Jnachi — Applied AI Skill Assessment & Certification Platform</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Primary Email Contact</h3>
              <p>
                <a href="mailto:jnachiteam@gmail.com" className="text-indigo-600 hover:underline">
                  jnachiteam@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Grievance & Compliance Officer</h3>
              <p>Jnachi Compliance Desk</p>
              <p>Email: jnachiteam@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">Service Nature</h3>
              <p>Online Digital Educational Assessments & Professional Credentials (SaaS / EdTech)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
