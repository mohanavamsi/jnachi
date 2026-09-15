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
    'Measure your AI momentum and earn 10 official industry certifications spanning Core Engineering Ladders and Role-Based Tracks (Sales, Developers, Marketers, Support, HR, Managers). Know it. Use it. Prove it.',
  keywords: [
    'AI Skills Assessment',
    'AI Certification',
    'AI Prompt Engineering',
    'AI for Sales',
    'AI for Developers',
    'AI for Marketers',
    'AI for Customer Support',
    'AI for HR',
    'AI for Managers',
    'Applied AI Certification',
    'AI Competency Test',
    'LinkedIn AI Badge',
  ],
  openGraph: {
    title: 'Jnachi | AI Skills Assessment & Professional Certifications',
    description:
      'Measure your AI momentum and earn 10 official industry certifications spanning Core Engineering Ladders and Role-Based Tracks. 100% free 30-day launch access.',
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
      'Measure your AI momentum and earn 10 official industry certifications. Free 30-day launch access.',
    images: ['/og-default.png'],
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
  return (
    <html lang="en">
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
