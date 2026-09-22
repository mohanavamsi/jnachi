import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2, ShieldCheck, Clock, BookOpen, Layers } from 'lucide-react';
import CertificationClient from '../CertificationClient';
import {
  CERT_TIERS,
  CertTier,
  TIER_ORDER,
  TIER_SLUGS,
  getTierBySlug,
  getAllTierSlugs,
  getSlugByTier,
} from '@/lib/certTypes';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllTierSlugs().map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tierKey = getTierBySlug(slug);

  if (!tierKey || !CERT_TIERS[tierKey]) {
    return {
      title: 'Certification Not Found | Jnachi',
      description: 'The requested certification track could not be found.',
    };
  }

  const tier = CERT_TIERS[tierKey];
  const pageUrl = `https://jnachi.com/certification/${TIER_SLUGS[tierKey] || slug}`;

  const title = `${tier.title} | Official Jnachi Credential`;
  const description = `Earn your official ${tier.title}. ${tier.shortDescription} Proctored 40-question exam, ${tier.durationMinutes} min limit, ${tier.passingScorePercent}% passing standard. Includes 1-click LinkedIn digital badge.`;

  return {
    title,
    description,
    keywords: [
      tier.title,
      tier.badgeLabel,
      `${tier.title} Exam`,
      `${tier.title} Syllabus`,
      `${tier.title} Questions`,
      'Jnachi Certification',
      'Proctored AI Exam',
      'Verifiable Credential',
      'LinkedIn Digital Badge',
      ...tier.keyTopics,
    ],
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'Jnachi',
      type: 'website',
      images: [
        {
          url: '/og-default.png',
          width: 1200,
          height: 630,
          alt: tier.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-default.png'],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function DedicatedCertificationPage({ params }: PageProps) {
  const { slug } = await params;
  const tierKey = getTierBySlug(slug);

  if (!tierKey || !CERT_TIERS[tierKey]) {
    notFound();
  }

  const tier = CERT_TIERS[tierKey];
  const canonicalUrl = `https://jnachi.com/certification/${TIER_SLUGS[tierKey] || slug}`;

  // Find related tracks in the same category or adjacent tiers
  const relatedTiers = TIER_ORDER.filter(
    (t) => t !== tierKey && (CERT_TIERS[t].category === tier.category || tier.category === 'core')
  ).slice(0, 3);

  // Structured JSON-LD Data for Rich Search Results
  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: tier.title,
    description: tier.fullDescription,
    provider: {
      '@type': 'Organization',
      name: 'Jnachi Certification Council',
      sameAs: 'https://jnachi.com',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      duration: `PT${tier.durationMinutes}M`,
    },
    offers: {
      '@type': 'Offer',
      price: '0.00',
      priceCurrency: 'USD',
      category: 'Free Launch Promotion',
      availability: 'https://schema.org/InStock',
      url: canonicalUrl,
    },
    educationalCredentialAwarded: {
      '@type': 'EducationalOccupationalCredential',
      name: tier.title,
      credentialCategory: 'Professional Certification',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Jnachi Certification Council',
      },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://jnachi.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Certifications',
        item: 'https://jnachi.com/certification',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: tier.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the exam format for the ${tier.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `The exam contains ${tier.questionCount} proctored multiple-choice questions covering Literacy, Automation, Privacy, and Applied Architecture. Candidates have ${tier.durationMinutes} minutes to complete the test.`,
        },
      },
      {
        '@type': 'Question',
        name: `What is the passing score for the ${tier.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Candidates must achieve a minimum score of ${tier.passingScorePercent}% to earn the official credential and digital badge.`,
        },
      },
      {
        '@type': 'Question',
        name: `How is the credential verified?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Every passing graduate receives a tamper-proof certificate ID and direct 1-click integration with LinkedIn Licenses & Certifications. Anyone can verify authenticity at jnachi.com/verify.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-slate-50/50">
        {/* Render the interactive exam gate / proctored assessment client */}
        <CertificationClient initialTier={tierKey} singleTrackMode={true} />

        {/* SEO Deep-Dive Content: Track Syllabus & Related Tracks */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 space-y-12">
          {/* Track Exam Specifications Breakdown */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <span>Exam Objectives & Tested Competencies</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tier.keyTopics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{topic}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Evaluated in scenario-based proctored questions.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Exam Duration: <strong>{tier.durationMinutes} Minutes</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Passing Criteria: <strong>{tier.passingScorePercent}% Score</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Digital Credential: <strong>LinkedIn Verified Badge</strong></span>
              </div>
            </div>
          </section>

          {/* Related Certification Tracks for Internal Linking */}
          {relatedTiers.length > 0 && (
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-600" />
                    <span>Explore Complementary Tracks</span>
                  </h2>
                  <p className="text-xs text-slate-500">Accelerate your career with adjacent specialized industry certifications.</p>
                </div>
                <Link
                  href="/certification"
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 hover:underline"
                >
                  <span>All 17 Tracks</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedTiers.map((relTierKey) => {
                  const relTier = CERT_TIERS[relTierKey];
                  const relSlug = getSlugByTier(relTierKey);
                  return (
                    <Link
                      key={relTierKey}
                      href={`/certification/${relSlug}`}
                      className="group p-5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
                    >
                      <div className="space-y-2">
                        <span
                          className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: relTier.colorScheme.bgBadge,
                            color: relTier.colorScheme.textBadge,
                          }}
                        >
                          {relTier.badgeLabel}
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm group-hover:text-indigo-600 transition-colors">
                          {relTier.title}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {relTier.shortDescription}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-indigo-600">
                        <span>View Exam Details</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
