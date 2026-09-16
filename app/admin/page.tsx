import { Metadata } from 'next';
import AdminClient from './AdminClient';

export const metadata: Metadata = {
  title: 'Admin Console | Jnachi Certification Authority',
  description: 'Master administrative console for candidate progression, contact intelligence, and verified credential tracking.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminClient />;
}
