import { Metadata } from 'next';
import CertificationClient from './CertificationClient';

export const metadata: Metadata = {
  title: 'Jnachi Beginner Certification | Formal AI Competency Credential',
  description:
    'Earn your official Jnachi Beginner Certification. 40 comprehensive questions across AI Literacy, Workflow Automation, Data Privacy, and Growth with an 80% passing threshold.',
};

export default function CertificationPage() {
  return <CertificationClient />;
}
