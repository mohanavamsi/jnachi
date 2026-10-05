import type { Metadata } from 'next';
import { Mail, Clock, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Support & Enterprise Inquiries | Jnachi',
  description:
    'Get in touch with the Jnachi Certification Council for candidate support, enterprise licensing, and certificate verification assistance.',
  keywords: [
    'Contact Jnachi',
    'Jnachi support',
    'Jnachi email',
    'AI certification inquiries',
  ],
  alternates: {
    canonical: 'https://jnachi.com/contact',
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Jnachi',
    url: 'https://jnachi.com/contact',
    description: 'Contact Jnachi for examination support and enterprise team licensing.',
    mainEntity: {
      '@type': 'EducationalOrganization',
      name: 'Jnachi',
      url: 'https://jnachi.com',
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'jnachiteam@gmail.com',
        contactType: 'customer support',
        availableLanguage: ['English'],
      },
    },
  };

  return (
    <div className="w-full bg-[#F9FAFB] py-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <div className="max-w-[1120px] mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded">
            Support & Inquiries
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-4xl text-[#0F0F14]">
            Contact the Jnachi support desk
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed">
            Reach out for examination support, voucher queries, university cohort partnerships, or certificate registry checks.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Support */}
          <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-xs flex flex-col space-y-3">
            <div className="w-10 h-10 bg-[#EDE9FE] text-[#5B21B6] rounded-md flex items-center justify-center font-bold">
              <Mail className="w-5 h-5" />
            </div>
            <h2 className="font-serif-heading text-lg text-[#0F0F14]">Email Support</h2>
            <p className="text-xs text-[#4B5563]">General inquiries, exam support & candidate assistance</p>
            <div className="pt-2">
              <a
                href="mailto:jnachiteam@gmail.com"
                className="text-xs font-semibold text-[#5B21B6] hover:underline"
              >
                jnachiteam@gmail.com
              </a>
            </div>
          </div>

          {/* Operating Hours */}
          <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-xs flex flex-col space-y-3">
            <div className="w-10 h-10 bg-[#F0FDFA] text-[#0F766E] border border-[#99F6E4] rounded-md flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="font-serif-heading text-lg text-[#0F0F14]">Response SLA</h2>
            <p className="text-xs text-[#4B5563]">Monday through Saturday</p>
            <div className="pt-2 text-xs font-semibold text-[#0F0F14]">
              Within 24 business hours
            </div>
          </div>

          {/* Verification & Legal */}
          <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-xs flex flex-col space-y-3">
            <div className="w-10 h-10 bg-[#EDE9FE] text-[#5B21B6] rounded-md flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="font-serif-heading text-lg text-[#0F0F14]">Credential Registry</h2>
            <p className="text-xs text-[#4B5563]">Independent certificate and recipient lookup</p>
            <div className="pt-2">
              <Link
                href="/verify"
                className="text-xs font-semibold text-[#5B21B6] hover:underline"
              >
                jnachi.com/verify →
              </Link>
            </div>
          </div>
        </div>

        {/* Business & Operations Information */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#E5E7EB] shadow-xs space-y-6">
          <h2 className="font-serif-heading text-xl text-[#0F0F14]">Operations & Compliance Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#4B5563]">
            <div>
              <h3 className="font-semibold text-[#0F0F14] mb-1">Platform Operator</h3>
              <p>Jnachi — Applied AI & Integration Credentialing Platform</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0F0F14] mb-1">Primary Email Contact</h3>
              <p>
                <a href="mailto:jnachiteam@gmail.com" className="text-[#5B21B6] hover:underline">
                  jnachiteam@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0F0F14] mb-1">Grievance & Verification Desk</h3>
              <p>Jnachi Compliance & Registry Administration</p>
              <p>Email: jnachiteam@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0F0F14] mb-1">Service Classification</h3>
              <p>Digital Skill Evaluations & Professional Educational Credentials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
