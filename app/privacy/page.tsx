import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Lock, FileText, CheckCircle2, AlertCircle, HelpCircle, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jnachi',
  description: 'Learn how Jnachi collects, uses, and protects your personal information and examination data across AI and Enterprise Integration certification tracks in compliance with privacy standards.',
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-slate-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
        
        {/* Header Section */}
        <div className="border-b border-slate-100 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-indigo-600" />
              Data Protection & Privacy Policy
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-2">Last Updated: September 22, 2026</p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Jnachi (&ldquo;Jnachi,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates an applied-skills assessment and certification platform covering multiple professional tracks, including AI competency certifications and enterprise integration certifications (MuleSoft, Salesforce Integration, IBM MQ, IBM App Connect Enterprise, and Boomi). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use jnachi.com and any related services (collectively, the &ldquo;Platform&rdquo;).
          </p>
          <p className="mt-3 text-slate-600 font-medium">
            By accessing or using the Platform, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the Platform.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span>1. Information We Collect</span>
          </h2>
          <p>
            We collect only the information necessary to deliver assessment, certification, and credentialing services across all tracks offered on the Platform.
          </p>
          <div className="grid gap-3 pt-2">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">a. Account & Candidate Data</h3>
              <p className="text-sm text-slate-600">
                Name, email address, and optional details such as location, company, and job title, used for account creation and diploma/certificate generation.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">b. Assessment & Examination Records</h3>
              <p className="text-sm text-slate-600">
                Answers submitted, score breakdowns across competency tracks (including AI role-based tracks and enterprise integration tracks such as MuleSoft, Salesforce Integration, IBM MQ, IBM App Connect Enterprise, and Boomi), completion timestamps, attempt history, and anti-cheating/proctoring event logs (e.g., tab-switch detection, timing anomalies, session metadata).
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">c. Certification & Credential Data</h3>
              <p className="text-sm text-slate-600">
                Certification track selected, certificate ID, issue date, credential status, and any public verification page data associated with a certificate you choose to share.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">d. Payment Information</h3>
              <p className="text-sm text-slate-600">
                Transaction identifiers and payment status provided by our payment gateway partners (e.g., Razorpay, Stripe). We do <strong>not</strong> store complete credit card numbers, CVV codes, or banking passwords on our servers.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">e. Technical & Usage Data</h3>
              <p className="text-sm text-slate-600">
                IP address, browser type, device information, and session data collected automatically through essential cookies, used to maintain login state, exam timers, and platform security.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">f. Communications</h3>
              <p className="text-sm text-slate-600">
                Any information you provide when contacting support, submitting a grievance, or requesting corrections to your data.
              </p>
            </div>
          </div>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-base">
            <li>To evaluate examination answers and issue official, verifiable digital credentials across all Jnachi certification tracks.</li>
            <li>To host public credential verification pages (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono">/verify/[certId]</code>) when a candidate chooses to share a certificate.</li>
            <li>To generate and deliver certificates, diplomas, and transcripts reflecting the specific track(s) completed (e.g., IBM MQ & Enterprise Messaging Architect, MuleSoft API-Led Integration Architect).</li>
            <li>To provide customer support and notify candidates about exam results, re-attempt cooldowns, and certification renewals.</li>
            <li>To prevent fraud, multiple-account abuse, collusion, and examination tampering, including through automated proctoring signals.</li>
            <li>To maintain and improve the accuracy, security, and reliability of the Platform.</li>
            <li>To communicate updates about new certification tracks, lessons, or platform changes, where you have not opted out of such communications.</li>
          </ul>
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-indigo-950 text-sm mt-3">
            <p className="font-semibold">Our Commitment to Model Ethics & Data Independence:</p>
            <p className="mt-1 text-xs text-indigo-800 leading-relaxed">
              We do not use your examination content or personal data to train third-party AI models without your consent, and we do not use your data for purposes unrelated to delivering, verifying, or improving our assessment and certification services.
            </p>
          </div>
        </section>

        {/* 3. Trademark & Third-Party Certification Notice */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Trademark & Third-Party Certification Notice</h2>
          <p className="leading-relaxed text-slate-600">
            Jnachi&apos;s certification tracks are <strong>independently developed, administered, and issued by Jnachi</strong>. They are not issued, endorsed, sponsored, or affiliated with IBM, MuleSoft, Salesforce, Boomi, or any other technology vendor referenced in our course or examination content. All product and company names (including but not limited to IBM, IBM MQ, IBM App Connect Enterprise, MuleSoft, Salesforce, and Boomi) are trademarks of their respective owners and are used solely to describe the technical scope of the relevant certification track.
          </p>
          <p className="text-xs text-slate-500 italic">
            This section is provided for transparency and does not itself constitute a data-processing disclosure, but is included here because certification-track names and associated skill data (see Section 1(c)) are personal data we process on your behalf.
          </p>
        </section>

        {/* 4. Data Sharing & Disclosure */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Data Sharing & Disclosure</h2>
          <p className="text-slate-600">
            We do not sell, rent, or monetize your personal information to third-party data brokers or marketing agencies. We share data only in the following limited circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm sm:text-base">
            <li><strong>Payment Processors:</strong> Razorpay, Stripe, and other authorized payment gateways, solely to process transactions securely.</li>
            <li><strong>Cloud Infrastructure Providers:</strong> Providers such as Vercel and Firebase, which host our Platform under industry-standard encryption and security protocols.</li>
            <li><strong>Verification Requests:</strong> Limited certificate data (name, track, certificate ID, issue date, status) is made publicly viewable only on verification pages you choose to share, or when a third party (e.g., an employer) looks up a certificate ID you have provided to them.</li>
            <li><strong>Legal Requirements:</strong> Where required to comply with applicable law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Jnachi, our candidates, or the public.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, subject to standard confidentiality obligations, with notice provided to affected users where required by law.</li>
          </ul>
          <p className="text-xs text-slate-500 font-medium">
            We do not share your raw examination answers, proctoring logs, or payment details with any third party except as described above.
          </p>
        </section>

        {/* 5. Cookies & Analytics */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Cookies & Analytics</h2>
          <p className="text-slate-600">
            We use essential cookies and session storage to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm sm:text-base">
            <li>Maintain authentication state during login and exam sessions.</li>
            <li>Save exam timer progress and prevent data loss during an assessment.</li>
            <li>Store temporary user preferences (e.g., dismissing promotional modals).</li>
            <li>Support basic, privacy-respecting analytics to understand Platform usage and improve certification content.</li>
          </ul>
          <p className="text-xs text-slate-500">
            You can control cookie settings through your browser at any time. Disabling essential cookies may prevent you from completing an examination or maintaining a logged-in session.
          </p>
        </section>

        {/* 6. Data Retention & Your Rights */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">6. Data Retention & Your Rights</h2>
          <p className="text-slate-600">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600 text-sm sm:text-base">
            <li><strong>Access</strong> the personal data we hold about you.</li>
            <li><strong>Rectify</strong> inaccurate or incomplete candidate profile data.</li>
            <li><strong>Request deletion</strong> of your candidate profile and associated personal data, subject to the exception below.</li>
            <li><strong>Withdraw consent</strong> for optional communications (e.g., marketing emails) at any time.</li>
            <li><strong>Request a copy</strong> of your data in a portable format, where applicable.</li>
          </ul>
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-amber-950 text-xs sm:text-sm mt-3 leading-relaxed">
            <strong>Certification Registry Exception:</strong> Because Jnachi certificates function as verifiable credentials relied upon by third parties (e.g., employers), earned credential records (certificate ID, track name, issue date, and verification status) may be retained in our cryptographic verification registry even after a deletion request, in order to preserve the integrity of previously issued certifications. Underlying personal identifiers tied to a deleted account will be removed or anonymized to the extent this does not compromise verification integrity.
          </div>
          <p className="text-xs text-slate-500 pt-1">
            To exercise any of these rights, contact our Grievance Desk (Section 11).
          </p>
        </section>

        {/* 7. Data Security */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">7. Data Security</h2>
          <p className="text-slate-600 leading-relaxed">
            We implement industry-standard technical and organizational safeguards, including encryption in transit and at rest, access controls, and secure hosting infrastructure, to protect your information against unauthorized access, alteration, disclosure, or destruction. No system is completely secure, and we cannot guarantee absolute security of information transmitted to or from the Platform.
          </p>
        </section>

        {/* 8. Children's Privacy */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">8. Children&apos;s Privacy</h2>
          <p className="text-slate-600 leading-relaxed">
            The Platform is intended for working professionals and is not directed to individuals under the age of 16. We do not knowingly collect personal information from anyone under 16. If we become aware that we have inadvertently collected such information, we will take reasonable steps to delete it.
          </p>
        </section>

        {/* 9. International Data Transfers */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">9. International Data Transfers</h2>
          <p className="text-slate-600 leading-relaxed">
            Jnachi may process and store data on servers located in jurisdictions outside your country of residence, using the cloud infrastructure providers described in Section 4. Where required by applicable law, we take reasonable steps to ensure such transfers are subject to appropriate safeguards.
          </p>
        </section>

        {/* 10. Changes to This Policy */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">10. Changes to This Policy</h2>
          <p className="text-slate-600 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, new certification tracks, or legal requirements. The &ldquo;Last Updated&rdquo; date at the top of this page will reflect the most recent revision. Material changes will be communicated via email or a prominent notice on the Platform where required by law.
          </p>
        </section>

        {/* 11. Grievance Officer & Contact */}
        <section className="space-y-3 border-t border-slate-100 pt-8">
          <h2 className="text-xl font-bold text-slate-900">11. Grievance Officer & Contact</h2>
          <p className="text-slate-600">
            In accordance with applicable Information Technology regulations, if you have any questions, requests, or grievances regarding this Privacy Policy or your personal data, please contact our Grievance Desk:
          </p>
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-1">
            <p className="font-extrabold text-slate-900">Jnachi Privacy & Grievance Desk</p>
            <p className="text-slate-700">Email: <a href="mailto:jnachiteam@gmail.com" className="text-indigo-600 font-semibold hover:underline">jnachiteam@gmail.com</a></p>
            <p className="text-slate-500 text-xs">Response Timeline: Within 24–48 business hours</p>
          </div>
        </section>

        {/* Trademark Legal Footnote */}
        <div className="border-t border-slate-100 pt-6 text-[11px] text-slate-400 italic leading-relaxed">
          *IBM, IBM MQ, and IBM App Connect Enterprise are trademarks of International Business Machines Corporation. MuleSoft is a trademark of Salesforce, Inc. Salesforce is a trademark of Salesforce, Inc. Boomi is a trademark of Boomi, LP. All trademarks are the property of their respective owners and are referenced solely to describe the scope of Jnachi&apos;s independently developed certification tracks.*
        </div>
      </div>
    </div>
  );
}
