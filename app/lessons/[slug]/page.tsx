import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LessonClient from './LessonClient';
import { getLessonBySlug, getAdjacentLessons, LESSONS } from '@/lib/lessonsData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LESSONS.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return {
      title: 'Lesson Not Found | Jnachi',
      description: 'The requested AI micro-lesson could not be found.',
    };
  }

  const pageUrl = `https://jnachi.com/lessons/${slug}`;
  const title = `${lesson.title} | Jnachi AI Lessons`;
  const description = `${lesson.description} Includes practical prompt examples, 5-minute activation challenge, and comprehension check.`;

  return {
    title,
    description,
    keywords: [
      lesson.title,
      `${lesson.title} tutorial`,
      `${lesson.title} guide`,
      lesson.category,
      'Jnachi AI Lesson',
      'AI Prompt Engineering',
      'AI for Students',
      'AI for Professionals',
      ...(lesson.tools || []),
      ...(lesson.keyTakeaways || []),
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'Jnachi',
      type: 'article',
      images: [
        {
          url: '/og-default.png',
          width: 1200,
          height: 630,
          alt: lesson.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og-default.png'],
    },
  };
}

export default async function LessonDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  const { prev, next } = getAdjacentLessons(slug);
  const canonicalUrl = `https://jnachi.com/lessons/${slug}`;

  // Structured JSON-LD Data for Google Search
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: lesson.title,
    description: lesson.description,
    url: canonicalUrl,
    proficiencyLevel: lesson.difficulty || 'Beginner',
    timeRequired: lesson.readTime,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      name: 'Jnachi Certification Council',
      url: 'https://jnachi.com',
      logo: 'https://jnachi.com/icon.svg',
    },
    author: {
      '@type': 'Organization',
      name: 'Jnachi Editorial Team',
    },
    about: {
      '@type': 'Thing',
      name: lesson.category,
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
      {
        '@type': 'ListItem',
        position: 3,
        name: lesson.title,
        item: canonicalUrl,
      },
    ],
  };

  const quizFaqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: lesson.quiz.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Correct answer: ${q.options[q.correctIndex]}. Explanation: ${q.explanation}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quizFaqJsonLd) }}
      />
      <LessonClient
        lesson={lesson}
        prevLesson={prev ? { slug: prev.slug, title: prev.title, lessonNumber: prev.lessonNumber } : null}
        nextLesson={next ? { slug: next.slug, title: next.title, lessonNumber: next.lessonNumber } : null}
      />
    </>
  );
}
