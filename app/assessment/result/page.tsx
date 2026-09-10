import type { Metadata } from 'next';
import { Suspense } from 'react';
import ResultClient from './ResultClient';
import { calculateScores } from '@/lib/assessmentData';

export const dynamic = 'force-dynamic';

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const resolvedParams = await searchParams;
  const rawAnswers = typeof resolvedParams.a === 'string' ? resolvedParams.a : '';

  if (rawAnswers) {
    const answers = rawAnswers.split(',').map((n) => parseInt(n, 10) || 0);
    const { overallScore, overallLevel } = calculateScores(answers);
    const title = `My Jnachi Score: ${overallScore} — ${overallLevel}`;
    const description = `I scored ${overallScore}/100 (${overallLevel}) on the Jnachi AI Skills Assessment. Check how activated your AI knowledge is.`;
    const ogImageUrl = `/api/og?a=${encodeURIComponent(rawAnswers)}`;
    const pageUrl = `/assessment/result?a=${encodeURIComponent(rawAnswers)}`;

    return {
      title: `${title} | Jnachi`,
      description,
      openGraph: {
        title,
        description,
        type: 'website',
        url: pageUrl,
        images: [
          {
            url: ogImageUrl,
            width: 1200,
            height: 630,
            alt: `Jnachi Score: ${overallScore} — ${overallLevel}`,
            type: 'image/png',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [ogImageUrl],
      },
    };
  }

  return {
    title: 'Assessment Results | Jnachi',
    description: 'A precise reading of how activated your AI knowledge is. Know it. Use it. Prove it.',
    openGraph: {
      title: 'Assessment Results | Jnachi',
      description: 'A precise reading of how activated your AI knowledge is. Know it. Use it. Prove it.',
      type: 'website',
      url: '/assessment/result',
      images: [
        {
          url: '/og-default.png',
          width: 1200,
          height: 630,
          alt: 'Jnachi — Know it. Use it. Prove it.',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Assessment Results | Jnachi',
      description: 'A precise reading of how activated your AI knowledge is.',
      images: ['/og-default.png'],
    },
  };
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex-1 flex items-center justify-center min-h-[calc(100vh-16rem)]">
          <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
        </div>
      }
    >
      <ResultClient />
    </Suspense>
  );
}
