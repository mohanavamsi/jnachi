import { Metadata } from 'next';
import CertificationClient from './CertificationClient';
import { CERT_TIERS, TIER_ORDER } from '@/lib/certTypes';

export const metadata: Metadata = {
  title: 'Official AI & Python Certifications | Jnachi Industry Credentials',
  description:
    'Earn official, proctored AI & Python certifications across 12 specialized tiers: Core Engineering Ladder (Beginner, Practitioner, Builder, Master), Role Tracks (Sales, Developers, Marketers, Support, HR, Managers), and Python AI & Automation Specializations. Verifiable LinkedIn digital badges.',
  keywords: [
    'AI Certification',
    'Python AI Certification',
    'Applied Python Certification',
    'Python Prompt Engineering Certificate',
    'Applied AI Credentials',
    'AI for Sales Certification',
    'AI for Developers Certification',
    'AI for Marketers Certification',
    'AI for Customer Support Certification',
    'AI for HR Certification',
    'AI for Managers Certification',
    'Proctored AI Exam',
    'Verifiable AI Diploma',
    'Jnachi AI Certification',
  ],
  openGraph: {
    title: 'Jnachi AI & Python Certifications | 12 Official Industry Credentials',
    description:
      'Proctored examinations evaluating applied AI and Python fluency across Core Ladders, Role Tracks, and Python Specializations. Verifiable credentials with 1-click LinkedIn badges.',
    url: 'https://jnachi.com/certification',
    siteName: 'Jnachi',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jnachi Official AI & Python Certifications',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jnachi AI & Python Certifications | 12 Official Industry Credentials',
    description:
      'Proctored examinations evaluating applied AI and Python fluency across Core Ladders, Role Tracks, and Python Specializations. Free 30-day launch access.',
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
    name: 'Jnachi Professional AI Certification Suite',
    description:
      'A comprehensive suite of 10 proctored AI examinations spanning core career levels and specialized role tracks.',
    itemListElement: TIER_ORDER.map((tierKey, index) => {
      const tier = CERT_TIERS[tierKey];
      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Course',
          name: `${tier.title} (${tier.badgeLabel})`,
          description: tier.shortDescription,
          provider: {
            '@type': 'Organization',
            name: 'Jnachi Certification Council',
            sameAs: 'https://jnachi.com',
          },
          hasCourseInstance: {
            '@type': 'CourseInstance',
            courseMode: 'online',
            duration: 'PT45M',
          },
          offers: {
            '@type': 'Offer',
            price: '0.00',
            priceCurrency: 'USD',
            category: 'Free Launch Promotion',
            availability: 'https://schema.org/InStock',
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
      <CertificationClient />
    </>
  );
}
