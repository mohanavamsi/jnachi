import { LLMOPS_LITERACY_QUESTIONS } from './literacy';
import { LLMOPS_AUTOMATION_QUESTIONS } from './automation';
import { LLMOPS_PRIVACY_QUESTIONS } from './privacy';
import { LLMOPS_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const LLMOPS_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: LLMOPS_LITERACY_QUESTIONS,
  automation: LLMOPS_AUTOMATION_QUESTIONS,
  privacy: LLMOPS_PRIVACY_QUESTIONS,
  growth: LLMOPS_GROWTH_QUESTIONS,
};

export const ALL_LLMOPS_QUESTIONS: CertQuestion[] = [
  ...LLMOPS_LITERACY_QUESTIONS,
  ...LLMOPS_AUTOMATION_QUESTIONS,
  ...LLMOPS_PRIVACY_QUESTIONS,
  ...LLMOPS_GROWTH_QUESTIONS,
];
