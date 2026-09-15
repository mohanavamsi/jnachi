import { Metadata } from 'next';
import VerifyCertificateClient from '@/components/VerifyCertificateClient';

export const metadata: Metadata = {
  title: 'Official Credential Verification Registry | Jnachi',
  description: 'Search and verify authentic Jnachi Applied AI Certifications, scorecards, and issuing timestamps.',
  openGraph: {
    title: 'Official Credential Verification Registry | Jnachi',
    description: 'Search and verify authentic Jnachi Applied AI Certifications, scorecards, and issuing timestamps.',
    url: 'https://jnachi.com/verify',
    siteName: 'Jnachi',
    type: 'website',
  },
};

export default function VerifyRootPage() {
  return <VerifyCertificateClient initialRecord={null} certId="" />;
}
