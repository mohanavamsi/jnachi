import type { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing & Free Launch Access | Jnachi AI Certifications',
  description:
    'Transparent pricing for Jnachi AI assessments, study modules, and official industry certifications. 100% free launch access for students and working professionals. Take proctored exams and earn verifiable credentials.',
  keywords: [
    'Jnachi pricing',
    'free AI certification',
    'student AI certification discount',
    'AI certification cost',
    'proctored AI exam voucher',
    'enterprise AI licensing',
  ],
  alternates: {
    canonical: 'https://jnachi.com/pricing',
  },
  openGraph: {
    title: 'Pricing & Free Launch Access | Jnachi AI Certifications',
    description:
      'Transparent pricing for Jnachi AI assessments, study modules, and official certifications. Free launch access available for students and professionals.',
    url: 'https://jnachi.com/pricing',
    siteName: 'Jnachi',
    type: 'website',
  },
};

export default function PricingPage() {
  const pricingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Jnachi Professional AI Certification Access',
    description:
      'Access to proctored AI examinations, continuous assessment diagnostics, study curriculum, and verified LinkedIn badges.',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '0.00',
      highPrice: '49.00',
      offerCount: '3',
      offers: [
        {
          '@type': 'Offer',
          name: 'Free 30-Day Launch Access',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://jnachi.com/pricing',
        },
        {
          '@type': 'Offer',
          name: 'Student & Early Career Pass',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://jnachi.com/pricing',
        },
        {
          '@type': 'Offer',
          name: 'Professional Single Certification Exam',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: 'https://jnachi.com/pricing',
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingJsonLd) }}
      />
      <PricingClient />
    </>
  );
}

