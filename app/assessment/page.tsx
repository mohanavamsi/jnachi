import type { Metadata } from 'next';
import AssessmentClient from './AssessmentClient';
import { QUESTIONS } from '@/lib/assessmentData';

export const metadata: Metadata = {
  title: 'Free AI Skills Diagnostic Assessment (3 Mins) | Jnachi',
  description:
    'Test and benchmark your practical AI skills in 3 minutes. Evaluates AI Literacy & Prompting, Workflow Automation, Data Privacy & Ethics, and Problem Solving for students and professionals. Instant personalized score and curriculum guide.',
  keywords: [
    'AI Skills Assessment',
    'Free AI Skills Diagnostic',
    'AI Competency Test',
    'Student AI Benchmark',
    'Professional AI Readiness Quiz',
    'AI Prompt Engineering Test',
    'Jnachi Score Calculator',
    'AI Literacy Test',
    'AI Automation Benchmark',
  ],
  alternates: {
    canonical: 'https://jnachi.com/assessment',
  },
  openGraph: {
    title: 'Free AI Skills Diagnostic Assessment (3 Mins) | Jnachi',
    description:
      'Test your AI momentum in 3 minutes. Evaluate Literacy, Automation, Privacy, and Problem Solving with instant benchmarks.',
    url: 'https://jnachi.com/assessment',
    siteName: 'Jnachi',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jnachi Free AI Skills Assessment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Skills Diagnostic Assessment | Jnachi',
    description: '3 minutes. 4 competency dimensions. Measure your AI momentum now.',
    images: ['/og-default.png'],
  },
};

export default function AssessmentPage() {
  const quizJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: 'Jnachi Applied AI Skills Diagnostic Assessment',
    description:
      'A 3-minute interactive diagnostic evaluating practical AI capabilities across Literacy, Automation, Privacy, and Problem Solving.',
    educationalLevel: 'Beginner to Advanced',
    about: {
      '@type': 'Thing',
      name: 'Applied Artificial Intelligence',
    },
    provider: {
      '@type': 'Organization',
      name: 'Jnachi Certification Council',
      url: 'https://jnachi.com',
    },
    hasPart: QUESTIONS.map((q, idx) => ({
      '@type': 'Question',
      position: idx + 1,
      name: q.prompt,
      text: q.prompt,
      suggestedAnswer: q.options.map((opt) => ({
        '@type': 'Answer',
        text: opt.label,
      })),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizJsonLd) }}
      />
      <AssessmentClient />
    </>
  );
}
