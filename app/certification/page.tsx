import { Metadata } from 'next';
import CertificationClient from './CertificationClient';

export const metadata: Metadata = {
  title: 'Jnachi Certification Ladder | Official AI Competency Credentials',
  description:
    'Earn your official Jnachi AI Certifications across 4 progression tiers: Beginner, Practitioner, Builder, and Master Architect. Comprehensive 40-question proctored examinations with 80% passing standards.',
};

export default function CertificationPage() {
  return <CertificationClient />;
}
