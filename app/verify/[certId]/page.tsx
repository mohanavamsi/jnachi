import { Metadata } from 'next';
import { getVerifiedCertificate } from '@/lib/certService';
import VerifyCertificateClient from '@/components/VerifyCertificateClient';

interface PageProps {
  params: Promise<{ certId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { certId } = await params;
  const record = await getVerifiedCertificate(certId);

  if (!record) {
    return {
      title: `Verify Certificate: ${certId} | Jnachi Registry`,
      description: 'Official credential verification lookup for Jnachi Applied AI Certifications.',
    };
  }

  return {
    title: `Verified: ${record.recipientName} — ${record.tierTitle} (${record.overallPercentage}%) | Jnachi`,
    description: `Official Verified Jnachi Credential for ${record.recipientName} in ${record.tierTitle}. Overall Score: ${record.overallPercentage}%. Credential ID: ${record.certificateId}`,
    openGraph: {
      title: `Verified Credential: ${record.recipientName} — ${record.tierTitle}`,
      description: `Officially verified credential issued by Jnachi. Passed with ${record.overallPercentage}% overall score across Literacy, Automation, Privacy, and Growth.`,
      url: `https://jnachi.com/verify/${record.certificateId}`,
      siteName: 'Jnachi',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Verified: ${record.recipientName} — ${record.tierTitle}`,
      description: `Official Jnachi Certified Credential (${record.overallPercentage}%). Credential ID: ${record.certificateId}`,
    },
  };
}

export default async function VerifyCertPage({ params }: PageProps) {
  const { certId } = await params;
  const record = await getVerifiedCertificate(certId);

  return <VerifyCertificateClient initialRecord={record} certId={certId} />;
}
