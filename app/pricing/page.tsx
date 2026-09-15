import { Metadata } from 'next';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing & Certification Plans | Jnachi',
  description: 'Transparent pricing for Jnachi AI assessments and professional certifications. 100% free during the 30-day launch window with secure Razorpay checkout.',
};

export default function PricingPage() {
  return <PricingClient />;
}

