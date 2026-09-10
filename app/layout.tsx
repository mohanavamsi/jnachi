import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Navigation, Footer } from '@/components/SharedLayout';
import { AuthProvider } from '@/components/AuthProvider';

export const metadata: Metadata = {
  title: 'Jnachi | AI Skills Assessment & Learning Hub',
  description: 'An AI skills assessment and learning platform. Know it. Use it. Prove it.',
  openGraph: {
    title: 'Jnachi | AI Skills Assessment & Learning Hub',
    description: 'An AI skills assessment and learning platform. Know it. Use it. Prove it.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jnachi | AI Skills Assessment & Learning Hub',
    description: 'An AI skills assessment and learning platform. Know it. Use it. Prove it.',
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
