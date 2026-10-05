import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Award, ShieldCheck, BookOpen } from 'lucide-react';
import { TOTAL_CERTIFICATIONS_COUNT, TOTAL_LESSONS_COUNT } from '@/lib/certTypes';

export const metadata: Metadata = {
  title: 'About Jnachi | Professional AI & Integration Credentialing Authority',
  description:
    'Learn about Jnachi (Jñāna + Chi = Activated Wisdom). We provide structured, proctored examinations and practical study curricula that evaluate applied capabilities across artificial intelligence and enterprise systems.',
  keywords: [
    'About Jnachi',
    'Jnachi credentialing',
    'Jnana and Chi',
    'AI skills benchmarking',
    'Applied AI certification council',
  ],
  alternates: {
    canonical: 'https://jnachi.com/about',
  },
};

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Jnachi',
    url: 'https://jnachi.com/about',
    description:
      'Jnachi evaluates practical execution across AI workflows and enterprise integrations through proctored examinations and verifiable credentials.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Jnachi',
      url: 'https://jnachi.com',
      knowsAbout: [
        'Artificial Intelligence',
        'Prompt Engineering',
        'Workflow Automation',
        'Enterprise Integration',
        'Python Development',
      ],
    },
  };

  return (
    <div className="flex flex-col w-full bg-white text-[#0F0F14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      
      {/* Hero Header */}
      <section className="w-full bg-[#F5F3FF] border-b border-[#E5E7EB] py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-[1120px] text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded">
            Our Mission & Origin
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0F0F14] max-w-3xl mx-auto leading-tight">
            Where understanding becomes measurable execution.
          </h1>
          <p className="text-base text-[#4B5563] max-w-xl mx-auto leading-relaxed">
            Bridging theoretical AI understanding and real-world execution through standardized proctored evaluations and verifiable credentials.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="w-full py-16 px-4">
        <div className="container mx-auto max-w-3xl space-y-10">
          <div className="space-y-4 text-base text-[#4B5563] leading-relaxed">
            <p className="text-lg text-[#0F0F14] font-medium leading-relaxed">
              Jnachi originates from two foundational roots: <em>Jna</em>, from the Sanskrit <em>jñāna</em> (knowledge, wisdom, deep understanding), and <em>chi</em> (active, kinetic energy).
            </p>
            <p>
              Together, Jnachi represents <strong>activated knowledge</strong> — the transition from merely reading about artificial intelligence to actively operating, verifying, and integrating it into production workflows.
            </p>
          </div>

          <div className="border-t border-[#E5E7EB] pt-8 space-y-4">
            <h2 className="font-serif-heading text-2xl text-[#0F0F14]">
              The Credentialing Standard
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              In an evolving technology landscape, self-reported skills and passive video completion certificates fail to provide clear proof of competence. Jnachi administers standardized 40-question scenario evaluations across {TOTAL_CERTIFICATIONS_COUNT} specialized certifications, measuring four distinct competency domains:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] space-y-1">
                <span className="text-xs font-semibold text-[#5B21B6] uppercase tracking-wider">Domain 1</span>
                <h3 className="text-sm font-semibold text-[#0F0F14]">AI Literacy & Prompt Anatomy</h3>
                <p className="text-xs text-[#4B5563]">Context hygiene, multi-turn reasoning, and hallucination guardrails.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] space-y-1">
                <span className="text-xs font-semibold text-[#5B21B6] uppercase tracking-wider">Domain 2</span>
                <h3 className="text-sm font-semibold text-[#0F0F14]">Workflow Automation</h3>
                <p className="text-xs text-[#4B5563]">Tool augmentation, pipeline architecture, and structured outputs.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] space-y-1">
                <span className="text-xs font-semibold text-[#5B21B6] uppercase tracking-wider">Domain 3</span>
                <h3 className="text-sm font-semibold text-[#0F0F14]">Data Privacy & Confidentiality</h3>
                <p className="text-xs text-[#4B5563]">Enterprise PII boundaries, zero-data retention, and regulatory compliance.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] space-y-1">
                <span className="text-xs font-semibold text-[#5B21B6] uppercase tracking-wider">Domain 4</span>
                <h3 className="text-sm font-semibold text-[#0F0F14]">Practical Problem Solving</h3>
                <p className="text-xs text-[#4B5563]">Real-world role scenarios and enterprise integration patterns.</p>
              </div>
            </div>
          </div>

          {/* Trademark & Independence Notice */}
          <div className="bg-[#F9FAFB] rounded-lg p-5 border border-[#E5E7EB] text-xs text-[#6B7280] leading-relaxed">
            <p>
              <strong>Trademark & Independence Notice:</strong> Jnachi certifications are independently developed and administered by Jnachi. They are not issued, endorsed, or affiliated with IBM, Salesforce, MuleSoft, or Boomi. All enterprise product names and marks referenced are trademarks of their respective owners.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-[#2E1065] text-white rounded-lg p-8 space-y-4 text-center">
            <h3 className="font-serif-heading text-xl text-white">Evaluate your current competency level</h3>
            <p className="text-xs text-[#EDE9FE]/80 max-w-md mx-auto">
              Take our 3-minute diagnostic assessment to receive an initial breakdown across literacy, automation, and privacy domains.
            </p>
            <div className="pt-2">
              <Link
                href="/assessment"
                className="btn-primary bg-white text-[#2E1065] hover:bg-[#F5F3FF] text-xs px-5 py-2.5"
              >
                <span>Start Skills Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
