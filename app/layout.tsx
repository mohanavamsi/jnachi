import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Navigation, Footer } from '@/components/SharedLayout';
import { AuthProvider } from '@/components/AuthProvider';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://jnachi.com'),
  title: {
    default: 'Jnachi | AI Skills Assessment & Professional Certifications',
    template: '%s | Jnachi',
  },
  description:
    'Jnachi is the premier applied AI competency and certification platform for students and working professionals. Benchmark your AI momentum with 3-minute diagnostics and earn 18 verifiable industry certifications across Core AI, Role-Based Tracks, Applied Python, and Enterprise Integration (MuleSoft, Salesforce, IBM MQ, ACE, Boomi).',
  applicationName: 'Jnachi',
  authors: [{ name: 'Jnachi Certification Council', url: 'https://jnachi.com' }],
  creator: 'Jnachi',
  publisher: 'Jnachi',
  keywords: [
    // Brand & Primary
    'Jnachi',
    'Jnachi AI',
    'Jnachi Certification',
    'Jnachi Assessment',
    'Jnachi Score',
    'Jnachi AI Exam',
    // Students & Early Career
    'AI certification for students',
    'AI courses for college students',
    'AI prompt engineering for beginners',
    'student AI skills assessment',
    'free AI certification for students',
    'entry level AI certifications',
    'AI resume credentials',
    'AI internship skills test',
    'learn applied AI online',
    // Professionals & Role Tracks
    'AI for working professionals',
    'AI certification for developers',
    'AI for sales professionals',
    'AI for marketers',
    'AI for customer support',
    'AI for HR and talent',
    'AI for managers and executives',
    'Applied Python AI certification',
    // Enterprise Integration Tracks
    'MuleSoft AI Integration certification',
    'Salesforce AI Integration certification',
    'IBM MQ certification',
    'IBM App Connect Enterprise certification',
    'Boomi Integration certification',
    'Software AG webMethods certification',
    // Credentialing & Verification
    'verifiable AI diploma',
    'LinkedIn AI certification badge',
    'proctored AI skills assessment',
    'applied AI benchmark score',
  ],
  category: 'education',
  classification: 'AI Education & Professional Certification',
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
    title: 'Jnachi | AI Skills Assessment & Professional Certifications',
    description:
      'Benchmark your AI momentum and earn official industry certifications. Tailored for students and working professionals across Core AI, Role Tracks, Python, and Enterprise Integration.',
    url: 'https://jnachi.com',
    siteName: 'Jnachi',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jnachi — Know it. Use it. Prove it.',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jnachi | AI Skills Assessment & Professional Certifications',
    description:
      'Measure your AI momentum and earn 18 official industry certifications. Free 30-day launch access for students and professionals.',
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

export default function RootLayout({children}: {children: React.ReactNode}) {
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
      'Jnachi provides AI momentum skills assessment diagnostics, interactive study lessons, and 18 proctored professional certifications for students, developers, marketers, managers, and enterprise integration architects.',
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
    description: 'Applied AI Skills Assessment, Curriculum & Official Industry Certifications',
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
      <body suppressHydrationWarning className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
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
