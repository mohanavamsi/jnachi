import { Metadata } from 'next';
import CertificationClient from './CertificationClient';
import { CERT_TIERS, TIER_ORDER, TIER_SLUGS } from '@/lib/certTypes';

export const metadata: Metadata = {
  title: 'Official AI, Python & Enterprise Integration Certifications | Jnachi',
  description:
    'Earn official, proctored industry certifications across 17 specialized tracks: Core AI Ladder, Role Specializations (Sales, Devs, Marketers, Support, HR, Managers), Applied Python, and Enterprise Integration (MuleSoft, Salesforce, IBM MQ, IBM ACE, Boomi). Verifiable LinkedIn digital badges.',
  keywords: [
    'AI Certification',
    'Python AI Certification',
    'Applied Python Certification',
    'MuleSoft Certification',
    'Salesforce Integration Certification',
    'IBM MQ Certification',
    'IBM ACE Certification',
    'Boomi Certification',
    'AI for Sales Certification',
    'AI for Developers Certification',
    'AI for Marketers Certification',
    'AI for Customer Support Certification',
    'AI for HR Certification',
    'AI for Managers Certification',
    'Proctored AI Exam',
    'Verifiable AI Diploma',
    'Jnachi Industry Certification',
  ],
  openGraph: {
    title: 'Jnachi Professional Certifications | 17 Official Industry Credentials',
    description:
      'Proctored examinations evaluating applied capability across Core AI Ladders, Role Tracks, Python Specializations, and Enterprise Integration systems. Verifiable credentials with 1-click LinkedIn badges.',
    url: 'https://jnachi.com/certification',
    siteName: 'Jnachi',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jnachi Official Certifications Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jnachi Professional Certifications | 17 Official Industry Credentials',
    description:
      'Proctored examinations evaluating applied capability across Core AI Ladders, Role Tracks, Python Specializations, and Enterprise Integration systems. Free launch access.',
    images: ['/og-default.png'],
  },
  alternates: {
    canonical: 'https://jnachi.com/certification',
  },
};

export default function CertificationPage() {
  // Structured JSON-LD Schema for Google Search Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Jnachi Professional Certification Suite',
    description:
      'A comprehensive suite of 17 proctored industry examinations spanning core AI career levels, specialized role tracks, Python engineering, and enterprise integration platforms.',
    itemListElement: TIER_ORDER.map((tierKey, index) => {
      const tier = CERT_TIERS[tierKey];
      const tierSlug = TIER_SLUGS[tierKey] || tierKey;
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Course',
          name: `${tier.title} (${tier.badgeLabel})`,
          description: tier.shortDescription,
          url: `https://jnachi.com/certification/${tierSlug}`,
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
            url: `https://jnachi.com/certification/${tierSlug}`,
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
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CertificationClient singleTrackMode={false} />
    </>
  );
}
