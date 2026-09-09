import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Navigation, Footer } from '@/components/SharedLayout';
import { AuthProvider } from '@/components/AuthProvider';

export const metadata: Metadata = {
  title: 'Jnachi | AI Skills Assessment',
  description: 'An AI skills assessment platform. Know it. Use it. Prove it.',
  openGraph: {
    title: 'Jnachi | AI Skills Assessment',
    description: 'An AI skills assessment platform. Know it. Use it. Prove it.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jnachi | AI Skills Assessment',
    description: 'An AI skills assessment platform. Know it. Use it. Prove it.',
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
