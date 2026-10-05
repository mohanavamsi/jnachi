import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  X,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { LaunchPromoModal } from '@/components/LaunchPromoModal';
import { HomeCertificationCatalog } from '@/components/HomeCertificationCatalog';
import { HomeCertificateShowcase } from '@/components/HomeCertificateShowcase';
import { CouncilSeal } from '@/components/CouncilSeal';
import {
  TOTAL_CERTIFICATIONS_COUNT,
  TOTAL_LESSONS_COUNT,
  TOTAL_TRACKS_COUNT,
} from '@/lib/certTypes';

export const metadata: Metadata = {
  title: 'Jnachi | Professional AI & Enterprise Integration Certifications',
  description:
    'Proctored AI and enterprise integration certification examinations for students and professionals. Benchmark knowledge, pass rigorous evaluations, and earn verifiable credentials.',
  keywords: [
    'Jnachi',
    'AI Certification',
    'Enterprise Integration Certification',
    'Proctored AI Exam',
    'MuleSoft Certification',
    'Python AI Certification',
    'Verifiable Credential',
  ],
  alternates: {
    canonical: 'https://jnachi.com',
  },
  openGraph: {
    title: 'Jnachi | Professional AI & Enterprise Integration Certifications',
    description:
      'Proctored certification examinations evaluating practical AI competency, prompt hygiene, and enterprise integration systems.',
    url: 'https://jnachi.com',
    siteName: 'Jnachi',
    type: 'website',
  },
};

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Jnachi — Professional AI & Enterprise Integration Certifications',
    url: 'https://jnachi.com',
    description:
      'Jnachi offers proctored industry certifications across Core AI, Role-Based Tracks, Applied Python, and Enterprise Integration with verifiable credentials and LinkedIn integrations.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Jnachi',
      url: 'https://jnachi.com',
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a Jnachi Certification?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A Jnachi Certification is a proctored credential validating practical understanding across artificial intelligence, specialized business role tracks, Python engineering, and enterprise integration platforms.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is a certification examination structured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Each examination consists of 40 proctored scenario-based questions administered within a 45-minute window, requiring an 80% passing standard to earn the verifiable credential.',
          },
        },
      ],
    },
  };

  return (
    <div className="flex flex-col w-full bg-white text-[#0F0F14]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <LaunchPromoModal />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Left Headline + Right Sample Credential Card              */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F5F3FF] border-b border-[#E5E7EB] py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-[1120px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#EDE9FE] text-[#5B21B6] text-xs font-semibold uppercase tracking-wider">
                Professional Credentialing Authority
              </div>

              <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-[#0F0F14] leading-[1.15]">
                Professional certifications for applied AI and enterprise integration.
              </h1>

              <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl">
                Evaluate practical execution across generative AI workflows, role-specific tools, and integration architecture through proctored examinations.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/certification"
                  className="btn-primary text-sm px-6 py-3 w-full sm:w-auto text-center"
                >
                  <span>Explore All {TOTAL_CERTIFICATIONS_COUNT} Certifications</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/assessment"
                  className="btn-text text-sm"
                >
                  <span>Take 3-minute skills diagnostic →</span>
                </Link>
              </div>
            </div>

            {/* Right Credential Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#D1D5DB] rounded-lg p-6 shadow-sm space-y-5 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                  <div className="flex items-center gap-2.5">
                    <CouncilSeal size={32} variant="brand" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5B21B6]">
                      Jnachi Credential Registry
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold bg-[#F5F3FF] text-[#5B21B6] border border-[#EDE9FE] px-2 py-0.5 rounded">
                    Sample credential
                  </span>
                </div>

                <div className="space-y-2 relative">
                  <div className="absolute right-0 top-0 opacity-15 pointer-events-none">
                    <CouncilSeal size={72} variant="gold" />
                  </div>
                  <span className="text-[10px] text-[#6B7280] uppercase tracking-wider font-semibold block">
                    Awarded To
                  </span>
                  <div className="font-serif-heading text-xl text-[#0F0F14]">
                    Candidate Name
                  </div>
                  <div className="text-xs text-[#5B21B6] font-semibold">
                    Jnachi Certified AI Foundations (Level 1)
                  </div>
                  <p className="text-xs text-[#4B5563] leading-relaxed pt-1">
                    Demonstrated applied competency across prompt anatomy, data confidentiality guardrails, and automated workflows.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 p-2.5 rounded bg-[#F9FAFB] border border-[#E5E7EB] text-center text-xs">
                  <div>
                    <span className="text-[10px] text-[#6B7280] block">Score</span>
                    <span className="font-bold text-[#0F766E]">90% Pass</span>
                  </div>
                  <div className="border-x border-[#E5E7EB]">
                    <span className="text-[10px] text-[#6B7280] block">Format</span>
                    <span className="font-medium text-[#0F0F14]">Proctored</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#6B7280] block">Registry ID</span>
                    <span className="font-mono text-[#5B21B6] text-[11px]">JNA-10492-AI</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-[#6B7280] pt-1">
                  <span className="inline-flex items-center gap-1 text-[#0F766E]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified credential
                  </span>
                  <span>Free launch access active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. TRUST STRIP: Single row of plain stats from code constants             */}
      {/* ========================================================================= */}
      <section className="w-full border-b border-[#E5E7EB] bg-white py-8 px-4">
        <div className="container mx-auto max-w-[1120px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div className="space-y-1">
              <span className="text-2xl font-bold text-[#0F0F14] font-mono block">
                {TOTAL_CERTIFICATIONS_COUNT}
              </span>
              <span className="text-xs font-semibold text-[#0F0F14] block">
                Specialized Certifications
              </span>
              <span className="text-xs text-[#6B7280]">
                Core AI, Roles, Python & iPaaS
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl font-bold text-[#0F0F14] font-mono block">
                40
              </span>
              <span className="text-xs font-semibold text-[#0F0F14] block">
                Scenario Questions per Exam
              </span>
              <span className="text-xs text-[#6B7280]">
                45-minute timed evaluation
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl font-bold text-[#0F766E] font-mono block">
                80%
              </span>
              <span className="text-xs font-semibold text-[#0F0F14] block">
                Passing Standard
              </span>
              <span className="text-xs text-[#6B7280]">
                Uniform competency benchmark
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl font-bold text-[#5B21B6] font-mono block">
                100%
              </span>
              <span className="text-xs font-semibold text-[#0F0F14] block">
                Public Verification
              </span>
              <span className="text-xs text-[#6B7280]">
                Permanent registry records
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CERTIFICATION TRACKS: High-density tabbed list layout                   */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 border-b border-[#E5E7EB] bg-[#F9FAFB]">
        <div className="container mx-auto max-w-[1120px] space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded">
              Certification Directory
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0F0F14]">
              Explore certification tracks
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl">
              Choose from {TOTAL_CERTIFICATIONS_COUNT} certifications across four major tracks. Review examination objectives, study with micro-lessons, and complete the proctored test.
            </p>
          </div>

          <HomeCertificationCatalog />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. COMPARISON: Course vs. Certification Comparison Table                  */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 border-b border-[#E5E7EB] bg-white">
        <div className="container mx-auto max-w-[1120px] space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded">
              Validation Standard
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0F0F14]">
              Course completion vs. proctored certification
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] max-w-2xl">
              Jnachi validates actual candidate competency against defined scenario benchmarks rather than tracking passive video playback.
            </p>
          </div>

          <div className="border border-[#E5E7EB] rounded-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB] text-xs font-semibold text-[#0F0F14]">
                  <th className="py-4 px-6 w-1/3">Evaluation Metric</th>
                  <th className="py-4 px-6 w-1/3 text-[#6B7280]">Standard Online Course</th>
                  <th className="py-4 px-6 w-1/3 bg-[#F5F3FF] text-[#5B21B6]">Jnachi Proctored Certification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB] text-xs text-[#4B5563]">
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#0F0F14]">Assessment Format</td>
                  <td className="py-3.5 px-6">Ungraded video consumption</td>
                  <td className="py-3.5 px-6 bg-[#F5F3FF]/40 font-medium text-[#0F0F14]">40-question scenario exam under timed conditions</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#0F0F14]">Integrity Controls</td>
                  <td className="py-3.5 px-6">None</td>
                  <td className="py-3.5 px-6 bg-[#F5F3FF]/40 font-medium text-[#0F0F14]">Tab-focus tracking and session violation limits</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#0F0F14]">Passing Standard</td>
                  <td className="py-3.5 px-6">100% completion click-through</td>
                  <td className="py-3.5 px-6 bg-[#F5F3FF]/40 font-medium text-[#0F0F14]">80% score threshold across four competency domains</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#0F0F14]">Verification Registry</td>
                  <td className="py-3.5 px-6">Static PDF without central lookup</td>
                  <td className="py-3.5 px-6 bg-[#F5F3FF]/40 font-medium text-[#0F0F14]">Public registry lookup with 1-click LinkedIn badge</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-6 font-medium text-[#0F0F14]">Retake Policy</td>
                  <td className="py-3.5 px-6">Instant unrestricted retries</td>
                  <td className="py-3.5 px-6 bg-[#F5F3FF]/40 font-medium text-[#0F0F14]">24-hour mandatory study cooldown between attempts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOW IT WORKS: Horizontal 4-Step Timeline                               */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 border-b border-[#E5E7EB] bg-[#F9FAFB]">
        <div className="container mx-auto max-w-[1120px] space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded">
              Examination Process
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0F0F14]">
              How the certification process works
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563] max-w-xl">
              A structured pathway from initial diagnostic to verified credential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-lg bg-white border border-[#E5E7EB] space-y-3">
              <span className="text-xs font-bold text-[#5B21B6] bg-[#EDE9FE] px-2 py-0.5 rounded">
                Step 01
              </span>
              <h3 className="text-sm font-semibold text-[#0F0F14]">Select Track & Diagnose</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Choose from {TOTAL_CERTIFICATIONS_COUNT} specialized tracks or take the 3-minute diagnostic to benchmark your starting level.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-[#E5E7EB] space-y-3">
              <span className="text-xs font-bold text-[#5B21B6] bg-[#EDE9FE] px-2 py-0.5 rounded">
                Step 02
              </span>
              <h3 className="text-sm font-semibold text-[#0F0F14]">Review Objectives</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Study the domain syllabus and practice with interactive micro-lessons covering literacy, automation, and privacy.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-[#E5E7EB] space-y-3">
              <span className="text-xs font-bold text-[#5B21B6] bg-[#EDE9FE] px-2 py-0.5 rounded">
                Step 03
              </span>
              <h3 className="text-sm font-semibold text-[#0F0F14]">Complete Exam</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Take the 40-question proctored exam within 45 minutes and score 80% or higher to achieve passing standard.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-white border border-[#E5E7EB] space-y-3">
              <span className="text-xs font-bold text-[#0F766E] bg-[#F0FDFA] border border-[#99F6E4] px-2 py-0.5 rounded">
                Step 04
              </span>
              <h3 className="text-sm font-semibold text-[#0F0F14]">Earn Credential</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Receive your official credential ID, download high-resolution diploma assets, and attach to LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CREDENTIAL AND VERIFICATION: Split Showcase Section                    */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 border-b border-[#E5E7EB] bg-white">
        <div className="container mx-auto max-w-[1120px]">
          <HomeCertificateShowcase />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. EXAM INTEGRITY: Restrained 3-column text block without icons            */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 border-b border-[#E5E7EB] bg-[#F9FAFB]">
        <div className="container mx-auto max-w-[1120px] space-y-10">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#5B21B6] bg-[#EDE9FE] px-2.5 py-1 rounded">
              Exam Standards
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0F0F14]">
              Assessment integrity standards
            </h2>
            <p className="text-sm sm:text-base text-[#4B5563]">
              Jnachi credentials maintain value because exam conditions are structured to measure individual understanding reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2 border-t border-[#D1D5DB] pt-4">
              <h3 className="text-sm font-semibold text-[#0F0F14]">
                Active Session Monitoring
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Examinations track window focus and tab-switch events. Reaching the threshold of three recorded violations invalidates the attempt automatically.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#D1D5DB] pt-4">
              <h3 className="text-sm font-semibold text-[#0F0F14]">
                24-Hour Preparation Cooldown
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Unsuccessful attempts enter a mandatory 24-hour waiting interval prior to re-examination to encourage syllabus review over repetitive guessing.
              </p>
            </div>

            <div className="space-y-2 border-t border-[#D1D5DB] pt-4">
              <h3 className="text-sm font-semibold text-[#0F0F14]">
                Public Registry Verification
              </h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">
                Earned credentials are permanently cataloged with recipient name, track name, examination date, and percentage score for independent third-party confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FINAL CONVERSION BANNER: Solid brand-900 band with one CTA             */}
      {/* ========================================================================= */}
      <section className="w-full py-20 px-4 bg-[#2E1065] text-white">
        <div className="container mx-auto max-w-[1120px] text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white/10 text-[#EDE9FE] text-xs font-semibold">
            <span>Free 30-Day Launch Access Window Active</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-white max-w-2xl mx-auto leading-tight">
            Begin your certification assessment
          </h2>

          <p className="text-sm sm:text-base text-[#EDE9FE]/80 max-w-lg mx-auto leading-relaxed">
            Select a specialized track, review the examination objectives, and earn an official verified credential.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/certification"
              className="bg-white text-[#2E1065] hover:bg-[#F5F3FF] font-semibold text-sm px-6 py-3 rounded-md transition-colors w-full sm:w-auto text-center"
            >
              Explore All {TOTAL_CERTIFICATIONS_COUNT} Certifications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
