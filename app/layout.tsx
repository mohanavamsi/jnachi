import type { Metadata } from 'next';
import './globals.css';
import { Navigation, Footer } from '@/components/SharedLayout';
import { AuthProvider } from '@/components/AuthProvider';
import { TOTAL_CERTIFICATIONS_COUNT, TOTAL_LESSONS_COUNT } from '@/lib/certTypes';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://jnachi.com'),
  title: {
    default: 'Jnachi | Professional AI & Enterprise Integration Certifications',
    template: '%s | Jnachi',
  },
  description:
    `Jnachi provides proctored competency examinations and interactive study curriculum across ${TOTAL_CERTIFICATIONS_COUNT} certifications spanning Core AI, Role-Based Tracks, Applied Python, and Enterprise Integration (MuleSoft, Salesforce, IBM MQ, ACE, Boomi, webMethods).`,
  applicationName: 'Jnachi',
  authors: [{ name: 'Jnachi Certification Council', url: 'https://jnachi.com' }],
  creator: 'Jnachi',
  publisher: 'Jnachi',
  keywords: [
    'Jnachi',
    'Jnachi AI',
    'Jnachi Certification',
    'Jnachi Assessment',
    'AI Exam',
    'AI certification for students',
    'AI certification for developers',
    'AI for sales professionals',
    'AI for marketers',
    'AI for customer support',
    'AI for HR and talent',
    'AI for managers and executives',
    'Applied Python AI certification',
    'MuleSoft AI Integration certification',
    'Salesforce AI Integration certification',
    'IBM MQ certification',
    'IBM App Connect Enterprise certification',
    'Boomi Integration certification',
    'Software AG webMethods certification',
    'verifiable AI diploma',
    'LinkedIn AI certification badge',
    'proctored AI skills assessment',
  ],
  category: 'education',
  classification: 'Professional AI & Integration Certification Authority',
  alternates: {
    canonical: 'https://jnachi.com',
    languages: {
      'en-US': 'https://jnachi.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Jnachi | Professional AI & Enterprise Integration Certifications',
    description:
      `Proctored examinations and structured micro-curriculum across ${TOTAL_CERTIFICATIONS_COUNT} specialized tracks. Verifiable digital credentials for students and professionals.`,
    url: 'https://jnachi.com',
    siteName: 'Jnachi',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jnachi — Professional AI & Integration Certifications',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jnachi | Professional AI & Enterprise Integration Certifications',
    description:
      `Benchmark skills and earn verifiable credentials across ${TOTAL_CERTIFICATIONS_COUNT} certifications. Free 30-day launch access for students and professionals.`,
    images: ['/og-default.png'],
    creator: '@jnachi',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': 'https://jnachi.com/#organization',
    name: 'Jnachi',
    legalName: 'Jnachi',
    url: 'https://jnachi.com',
    logo: 'https://jnachi.com/icon.svg',
    image: 'https://jnachi.com/og-default.png',
    description:
      `Jnachi provides skills assessment diagnostics, interactive study lessons, and ${TOTAL_CERTIFICATIONS_COUNT} proctored professional certifications for developers, marketers, managers, and enterprise integration architects.`,
    foundingDate: '2026',
    sameAs: [
      'https://www.linkedin.com/company/jnachi',
      'https://twitter.com/jnachi',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'jnachiteam@gmail.com',
      contactType: 'customer support',
      availableLanguage: ['English'],
    },
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://jnachi.com/#website',
    url: 'https://jnachi.com',
    name: 'Jnachi',
    description: 'Applied AI & Integration Skills Assessment, Curriculum & Professional Certifications',
    publisher: {
      '@id': 'https://jnachi.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://jnachi.com/lessons?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-sans text-[#0F0F14] bg-white antialiased">
        <AuthProvider>
          <Navigation />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
