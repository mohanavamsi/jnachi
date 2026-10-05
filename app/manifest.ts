import { MetadataRoute } from 'next';
import { TOTAL_CERTIFICATIONS_COUNT } from '@/lib/certTypes';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jnachi — Professional AI & Integration Certifications',
    short_name: 'Jnachi',
    description:
      `Proctored examinations and verified credentials across ${TOTAL_CERTIFICATIONS_COUNT} certifications for students and working professionals.`,
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#5B21B6',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  };
}
