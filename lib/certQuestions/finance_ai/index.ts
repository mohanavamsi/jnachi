import { FINANCE_AI_LITERACY_QUESTIONS } from './literacy';
import { FINANCE_AI_AUTOMATION_QUESTIONS } from './automation';
import { FINANCE_AI_PRIVACY_QUESTIONS } from './privacy';
import { FINANCE_AI_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const FINANCE_AI_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: FINANCE_AI_LITERACY_QUESTIONS,
  automation: FINANCE_AI_AUTOMATION_QUESTIONS,
  privacy: FINANCE_AI_PRIVACY_QUESTIONS,
  growth: FINANCE_AI_GROWTH_QUESTIONS,
};

export const ALL_FINANCE_AI_QUESTIONS: CertQuestion[] = [
  ...FINANCE_AI_LITERACY_QUESTIONS,
  ...FINANCE_AI_AUTOMATION_QUESTIONS,
  ...FINANCE_AI_PRIVACY_QUESTIONS,
  ...FINANCE_AI_GROWTH_QUESTIONS,
];
