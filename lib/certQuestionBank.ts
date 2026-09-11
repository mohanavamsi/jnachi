/**
 * Jnachi Beginner Certification Exam Question Bank
 * 
 * Total Bank: 200 Questions (50 per section across 4 tracks)
 * Each exam attempt randomly selects 10 questions per section (40 questions total).
 * 
 * Questions are modularized in /lib/certQuestions/*.ts for easy maintenance.
 */

import { LITERACY_QUESTIONS } from './certQuestions/literacy';
import { AUTOMATION_QUESTIONS } from './certQuestions/automation';
import { PRIVACY_QUESTIONS } from './certQuestions/privacy';
import { GROWTH_QUESTIONS } from './certQuestions/growth';

export type CertSection = 'literacy' | 'automation' | 'privacy' | 'growth';

export interface CertOption {
  id: string; // 'a' | 'b' | 'c' | 'd'
  label: string;
}

export interface CertQuestion {
  id: string;
  section: CertSection;
  prompt: string;
  options: CertOption[];
  correctOptionId: string;
}

export type ClientCertQuestion = Omit<CertQuestion, 'correctOptionId'>;

export const CERT_SECTIONS: { id: CertSection; title: string; description: string }[] = [
  {
    id: 'literacy',
    title: 'AI Literacy & Prompting',
    description: 'Structure, persona modeling, output formatting, few-shot prompting, and context hygiene.',
  },
  {
    id: 'automation',
    title: 'Workflow Automation',
    description: 'Transforming recurring manual tasks into resilient pipelines, templates, and batch workflows.',
  },
  {
    id: 'privacy',
    title: 'Data Privacy & Ethics',
    description: 'Enterprise data retention, confidentiality boundaries, bias detection, and verification protocols.',
  },
  {
    id: 'growth',
    title: 'Growth & Problem Solving',
    description: 'Multimodal analysis, cognitive sparring, strategic reasoning, and critical judgment.',
  },
];

export const CERT_SECTION_LABELS: Record<CertSection, string> = {
  literacy: 'AI Literacy & Prompting',
  automation: 'Workflow Automation',
  privacy: 'Data Privacy & Ethics',
  growth: 'Growth & Problem Solving',
};

// =========================================================================
// ASSEMBLED COMPLETE QUESTION BANK (200 Questions Total, 50 Per Track)
// =========================================================================
export const CERT_QUESTION_BANK: Record<CertSection, CertQuestion[]> = {
  literacy: LITERACY_QUESTIONS,
  automation: AUTOMATION_QUESTIONS,
  privacy: PRIVACY_QUESTIONS,
  growth: GROWTH_QUESTIONS,
};

// Flat list of all 200 questions for instant lookup by ID
export const ALL_QUESTIONS_MAP: Map<string, CertQuestion> = new Map();
Object.values(CERT_QUESTION_BANK).forEach((questions) => {
  questions.forEach((q) => ALL_QUESTIONS_MAP.set(q.id, q));
});

/**
 * Randomly samples 10 questions per section (40 total).
 * Prioritizes questions not previously encountered in `excludeQuestionIds`
 * so subsequent attempts for the same user maximize variety!
 */
export function drawExamQuestions(
  excludeQuestionIds: string[] = [],
  countPerSection = 10
): CertQuestion[] {
  const excludedSet = new Set(excludeQuestionIds);
  const selected: CertQuestion[] = [];

  const sections: CertSection[] = ['literacy', 'automation', 'privacy', 'growth'];

  for (const section of sections) {
    const bank = CERT_QUESTION_BANK[section];
    // Split into unencountered vs previously encountered
    const fresh = bank.filter((q) => !excludedSet.has(q.id));
    const used = bank.filter((q) => excludedSet.has(q.id));

    // Shuffle helper (Fisher-Yates)
    const shuffle = <T>(arr: T[]): T[] => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    };

    const shuffledFresh = shuffle(fresh);
    const shuffledUsed = shuffle(used);

    // Combine prioritizing fresh questions
    const pool = [...shuffledFresh, ...shuffledUsed];
    const sectionSelected = pool.slice(0, countPerSection);

    selected.push(...sectionSelected);
  }

  return selected;
}

/**
 * Strips `correctOptionId` before sending questions to the browser.
 * Protects exam integrity against client-side inspection.
 */
export function stripAnswersForClient(questions: CertQuestion[]): ClientCertQuestion[] {
  return questions.map((q) => ({
    id: q.id,
    section: q.section,
    prompt: q.prompt,
    options: q.options,
  }));
}

export interface SectionScore {
  section: CertSection;
  label: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface ExamGradingResult {
  overallScore: number; // 0 - 100
  overallPercentage: number; // 0 - 100
  passed: boolean;
  passingThreshold: number; // 80
  sectionScores: Record<CertSection, SectionScore>;
  weakestSection: CertSection;
}

/**
 * Grades an exam submission server-side.
 * Passing threshold: 80% overall (80 out of 100 correct).
 */
export function gradeExam(
  questionIds: string[],
  userAnswers: Record<string, string>
): ExamGradingResult {
  let overallCorrect = 0;
  const sectionCounts: Record<CertSection, { correct: number; total: number }> = {
    literacy: { correct: 0, total: 0 },
    automation: { correct: 0, total: 0 },
    privacy: { correct: 0, total: 0 },
    growth: { correct: 0, total: 0 },
  };

  questionIds.forEach((qId) => {
    const question = ALL_QUESTIONS_MAP.get(qId);
    if (!question) return;

    sectionCounts[question.section].total += 1;
    const userAnswer = userAnswers[qId];

    if (userAnswer && userAnswer.toLowerCase() === question.correctOptionId.toLowerCase()) {
      overallCorrect += 1;
      sectionCounts[question.section].correct += 1;
    }
  });

  const totalQuestions = questionIds.length || 40;
  const overallPercentage = Math.round((overallCorrect / totalQuestions) * 100);

  const sectionScores: Record<CertSection, SectionScore> = {
    literacy: {
      section: 'literacy',
      label: CERT_SECTION_LABELS.literacy,
      correct: sectionCounts.literacy.correct,
      total: sectionCounts.literacy.total,
      percentage: sectionCounts.literacy.total > 0
        ? Math.round((sectionCounts.literacy.correct / sectionCounts.literacy.total) * 100)
        : 0,
    },
    automation: {
      section: 'automation',
      label: CERT_SECTION_LABELS.automation,
      correct: sectionCounts.automation.correct,
      total: sectionCounts.automation.total,
      percentage: sectionCounts.automation.total > 0
        ? Math.round((sectionCounts.automation.correct / sectionCounts.automation.total) * 100)
        : 0,
    },
    privacy: {
      section: 'privacy',
      label: CERT_SECTION_LABELS.privacy,
      correct: sectionCounts.privacy.correct,
      total: sectionCounts.privacy.total,
      percentage: sectionCounts.privacy.total > 0
        ? Math.round((sectionCounts.privacy.correct / sectionCounts.privacy.total) * 100)
        : 0,
    },
    growth: {
      section: 'growth',
      label: CERT_SECTION_LABELS.growth,
      correct: sectionCounts.growth.correct,
      total: sectionCounts.growth.total,
      percentage: sectionCounts.growth.total > 0
        ? Math.round((sectionCounts.growth.correct / sectionCounts.growth.total) * 100)
        : 0,
    },
  };

  // Identify weakest section
  let weakestSection: CertSection = 'literacy';
  let lowestPct = 101;
  (['literacy', 'automation', 'privacy', 'growth'] as CertSection[]).forEach((sec) => {
    if (sectionScores[sec].percentage < lowestPct) {
      lowestPct = sectionScores[sec].percentage;
      weakestSection = sec;
    }
  });

  return {
    overallScore: overallCorrect,
    overallPercentage,
    passed: overallPercentage >= 80,
    passingThreshold: 80,
    sectionScores,
    weakestSection,
  };
}
