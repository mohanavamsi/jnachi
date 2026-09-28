import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Jnachi — AI Skills Assessment & Professional Certifications',
    short_name: 'Jnachi',
    description:
      'Benchmark your AI momentum and earn 18 official industry certifications for students and working professionals.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#4f46e5',
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
