/**
 * Jnachi Certification Exam Question Bank
 * 
 * Supports the 4-Tier Progression Ladder & Enterprise Tracks:
 * - Core Levels: Beginner, Practitioner, Builder, Master
 * - Role-Based Tracks: Sales, Developers, Marketers, Support, HR, Managers
 * - Python Specializations: Python AI, Python Dev
 * - Enterprise Integration Tracks: MuleSoft, Salesforce Integration, IBM MQ, IBM ACE, Boomi
 * 
 * Each exam attempt samples 10 questions per section (40 questions total).
 */

import { CertTier } from './certTypes';
import {
  CertSection,
  CertOption,
  CertQuestion,
  ClientCertQuestion,
} from './certQuestions/types';

import {
  BEGINNER_QUESTIONS_BY_SECTION,
  ALL_BEGINNER_QUESTIONS,
} from './certQuestions/beginner';

import {
  PRACTITIONER_QUESTIONS_BY_SECTION,
  ALL_PRACTITIONER_QUESTIONS,
} from './certQuestions/practitioner';

import {
  BUILDER_QUESTIONS_BY_SECTION,
  ALL_BUILDER_QUESTIONS,
} from './certQuestions/builder';

import {
  ARCHITECT_QUESTIONS_BY_SECTION,
  ALL_ARCHITECT_QUESTIONS,
  MASTER_QUESTIONS_BY_SECTION,
  ALL_MASTER_QUESTIONS,
} from './certQuestions/architect';

import { SALES_QUESTIONS_BY_SECTION } from './certQuestions/sales';
import { DEVELOPERS_QUESTIONS_BY_SECTION } from './certQuestions/developers';
import { MARKETERS_QUESTIONS_BY_SECTION } from './certQuestions/marketers';
import { SUPPORT_QUESTIONS_BY_SECTION } from './certQuestions/support';
import { HR_QUESTIONS_BY_SECTION } from './certQuestions/hr';
import { MANAGERS_QUESTIONS_BY_SECTION } from './certQuestions/managers';
import {
  PYTHON_AI_QUESTIONS_BY_SECTION,
  ALL_PYTHON_AI_QUESTIONS,
} from './certQuestions/python_ai';
import {
  PYTHON_DEV_QUESTIONS_BY_SECTION,
  ALL_PYTHON_DEV_QUESTIONS,
} from './certQuestions/python_dev';
import {
  MULESOFT_QUESTIONS_BY_SECTION,
  ALL_MULESOFT_QUESTIONS,
} from './certQuestions/mulesoft';
import {
  SALESFORCE_INTEGRATION_QUESTIONS_BY_SECTION,
  ALL_SALESFORCE_INTEGRATION_QUESTIONS,
} from './certQuestions/salesforce_integration';
import {
  IBM_MQ_QUESTIONS_BY_SECTION,
  ALL_IBM_MQ_QUESTIONS,
} from './certQuestions/ibm_mq';
import {
  IBM_ACE_QUESTIONS_BY_SECTION,
  ALL_IBM_ACE_QUESTIONS,
} from './certQuestions/ibm_ace';
import {
  BOOMI_QUESTIONS_BY_SECTION,
  ALL_BOOMI_QUESTIONS,
} from './certQuestions/boomi';
import {
  WEBMETHODS_QUESTIONS_BY_SECTION,
  ALL_WEBMETHODS_QUESTIONS,
} from './certQuestions/webmethods';

export type { CertSection, CertOption, CertQuestion, ClientCertQuestion };

export {
  BEGINNER_QUESTIONS_BY_SECTION,
  ALL_BEGINNER_QUESTIONS,
  PRACTITIONER_QUESTIONS_BY_SECTION,
  ALL_PRACTITIONER_QUESTIONS,
  BUILDER_QUESTIONS_BY_SECTION,
  ALL_BUILDER_QUESTIONS,
  ARCHITECT_QUESTIONS_BY_SECTION,
  ALL_ARCHITECT_QUESTIONS,
  MASTER_QUESTIONS_BY_SECTION,
  ALL_MASTER_QUESTIONS,
  SALES_QUESTIONS_BY_SECTION,
  DEVELOPERS_QUESTIONS_BY_SECTION,
  MARKETERS_QUESTIONS_BY_SECTION,
  SUPPORT_QUESTIONS_BY_SECTION,
  HR_QUESTIONS_BY_SECTION,
  MANAGERS_QUESTIONS_BY_SECTION,
  PYTHON_AI_QUESTIONS_BY_SECTION,
  ALL_PYTHON_AI_QUESTIONS,
  PYTHON_DEV_QUESTIONS_BY_SECTION,
  ALL_PYTHON_DEV_QUESTIONS,
  MULESOFT_QUESTIONS_BY_SECTION,
  ALL_MULESOFT_QUESTIONS,
  SALESFORCE_INTEGRATION_QUESTIONS_BY_SECTION,
  ALL_SALESFORCE_INTEGRATION_QUESTIONS,
  IBM_MQ_QUESTIONS_BY_SECTION,
  ALL_IBM_MQ_QUESTIONS,
  IBM_ACE_QUESTIONS_BY_SECTION,
  ALL_IBM_ACE_QUESTIONS,
  BOOMI_QUESTIONS_BY_SECTION,
  ALL_BOOMI_QUESTIONS,
  WEBMETHODS_QUESTIONS_BY_SECTION,
  ALL_WEBMETHODS_QUESTIONS,
};

export const CERT_SECTIONS: { id: CertSection; title: string; description: string }[] = [
  {
    id: 'literacy',
    title: 'AI Literacy & Architecture',
    description: 'Core architectural principles, syntax, protocol definitions, specifications, and foundational knowledge.',
  },
  {
    id: 'automation',
    title: 'Workflow Automation & Integration',
    description: 'Data transformation, event streams, batch pipelines, connectors, message handlers, and orchestration.',
  },
  {
    id: 'privacy',
    title: 'Security, Privacy & Governance',
    description: 'Authentication (OAuth2, mTLS, JWT, Kerberos), encryption, access policies, audit logging, and compliance.',
  },
  {
    id: 'growth',
    title: 'High Availability & Scaling',
    description: 'Clustering, Disaster Recovery, CI/CD pipelines, automated testing, performance tuning, and resilience.',
  },
];

export const CERT_SECTION_LABELS: Record<CertSection, string> = {
  literacy: 'AI Literacy & Architecture',
  automation: 'Workflow Automation & Integration',
  privacy: 'Security, Privacy & Governance',
  growth: 'High Availability & Scaling',
};

// =========================================================================
// ASSEMBLED COMPLETE QUESTION BANKS PER TIER (CORE + ROLES + PYTHON + INTEGRATION)
// =========================================================================

export const TIER_QUESTION_BANK: Record<CertTier, Record<CertSection, CertQuestion[]>> = {
  // Core Levels
  beginner: BEGINNER_QUESTIONS_BY_SECTION,
  practitioner: PRACTITIONER_QUESTIONS_BY_SECTION,
  builder: BUILDER_QUESTIONS_BY_SECTION,
  master: ARCHITECT_QUESTIONS_BY_SECTION,
  // Role-Based Tracks
  sales: SALES_QUESTIONS_BY_SECTION,
  developers: DEVELOPERS_QUESTIONS_BY_SECTION,
  marketers: MARKETERS_QUESTIONS_BY_SECTION,
  support: SUPPORT_QUESTIONS_BY_SECTION,
  hr: HR_QUESTIONS_BY_SECTION,
  managers: MANAGERS_QUESTIONS_BY_SECTION,
  // Python Specializations
  python_ai: PYTHON_AI_QUESTIONS_BY_SECTION,
  python_dev: PYTHON_DEV_QUESTIONS_BY_SECTION,
  // Enterprise Integration Tracks
  mulesoft: MULESOFT_QUESTIONS_BY_SECTION,
  salesforce_integration: SALESFORCE_INTEGRATION_QUESTIONS_BY_SECTION,
  ibm_mq: IBM_MQ_QUESTIONS_BY_SECTION,
  ibm_ace: IBM_ACE_QUESTIONS_BY_SECTION,
  boomi: BOOMI_QUESTIONS_BY_SECTION,
  webmethods: WEBMETHODS_QUESTIONS_BY_SECTION,
};

// Backward compatibility alias for Beginner bank
export const CERT_QUESTION_BANK: Record<CertSection, CertQuestion[]> = TIER_QUESTION_BANK.beginner;

// Flat map of ALL questions across ALL tiers for instant lookup by ID
export const ALL_QUESTIONS_MAP: Map<string, CertQuestion> = new Map();

Object.values(TIER_QUESTION_BANK).forEach((sectionMap) => {
  Object.values(sectionMap).forEach((questions) => {
    questions.forEach((q) => ALL_QUESTIONS_MAP.set(q.id, q));
  });
});

/**
 * Randomly samples 10 questions per section (40 total) for a specific tier.
 * Prioritizes questions not previously encountered in `excludeQuestionIds`
 * so subsequent attempts for the same user maximize variety!
 */
export function drawExamQuestions(
  tier: CertTier = 'beginner',
  excludeQuestionIds: string[] = [],
  countPerSection = 10
): CertQuestion[] {
  const excludedSet = new Set(excludeQuestionIds);
  const selected: CertQuestion[] = [];

  const tierBank = TIER_QUESTION_BANK[tier] || TIER_QUESTION_BANK.beginner;
  const sections: CertSection[] = ['literacy', 'automation', 'privacy', 'growth'];

  for (const section of sections) {
    const bank = tierBank[section] || [];
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
  overallScore: number; // raw correct count (e.g. 35 out of 40)
  overallPercentage: number; // 0 - 100 percentage
  passed: boolean;
  passingThreshold: number; // 80%
  sectionScores: Record<CertSection, SectionScore>;
  weakestSection: CertSection;
}

/**
 * Grades an exam submission server-side.
 * Passing threshold: 80% overall (minimum 32 out of 40 correct).
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
