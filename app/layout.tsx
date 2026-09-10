import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Navigation, Footer } from '@/components/SharedLayout';
import { AuthProvider } from '@/components/AuthProvider';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://jnachi.com'),
  title: {
    default: 'Jnachi | AI Skills Assessment & Learning Hub',
    template: '%s | Jnachi',
  },
  description: 'A precise reading of how activated your AI knowledge is. Know it. Use it. Prove it.',
  openGraph: {
    title: 'Jnachi | AI Skills Assessment & Learning Hub',
    description: 'A precise reading of how activated your AI knowledge is. Know it. Use it. Prove it.',
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
    title: 'Jnachi | AI Skills Assessment & Learning Hub',
    description: 'A precise reading of how activated your AI knowledge is. Know it. Use it. Prove it.',
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
