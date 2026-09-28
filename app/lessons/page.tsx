import type { Metadata } from 'next';
import LessonsClient from './LessonsClient';
import { LESSONS } from '@/lib/lessonsData';

export const metadata: Metadata = {
  title: 'AI Micro-Lessons & Interactive Curriculum | Jnachi',
  description:
    'Explore practical, copyable micro-lessons in AI Literacy, Workflow Automation, Data Privacy, Applied Python, and Enterprise Integration (MuleSoft, Salesforce, IBM MQ, Boomi). Built for students and working professionals.',
  keywords: [
    'AI Lessons',
    'AI Tutorials',
    'AI Prompt Engineering Guide',
    'Learn AI Online Free',
    'AI for Students',
    'AI for Working Professionals',
    'Enterprise Integration Tutorials',
    'Python AI Micro-Courses',
    'Jnachi Learning Hub',
  ],
  alternates: {
    canonical: 'https://jnachi.com/lessons',
  },
  openGraph: {
    title: 'AI Micro-Lessons & Interactive Curriculum | Jnachi',
    description:
      'Master prompt engineering, workflow automation, and enterprise AI integrations with actionable 5-minute interactive micro-lessons.',
    url: 'https://jnachi.com/lessons',
    siteName: 'Jnachi',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Jnachi Learning Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Micro-Lessons & Interactive Curriculum | Jnachi',
    description: 'Master prompt engineering, workflow automation, and enterprise AI integrations.',
    images: ['/og-default.png'],
  },
};

export default function LessonsPage() {
  const lessonsJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Jnachi AI Learning Hub & Curriculum',
    description:
      'A structured collection of hands-on micro-lessons spanning prompt engineering, workflow automation, privacy, Python, and enterprise integration.',
    url: 'https://jnachi.com/lessons',
    provider: {
      '@type': 'Organization',
      name: 'Jnachi Certification Council',
      url: 'https://jnachi.com',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: LESSONS.length,
      itemListElement: LESSONS.map((lesson, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'LearningResource',
          name: lesson.title,
          description: lesson.description,
          url: `https://jnachi.com/lessons/${lesson.slug}`,
          educationalLevel: lesson.difficulty || 'All Levels',
          timeRequired: lesson.readTime,
          learningResourceType: 'Micro-lesson',
        },
      })),
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://jnachi.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Lessons',
        item: 'https://jnachi.com/lessons',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lessonsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LessonsClient />
    </>
  );
}
