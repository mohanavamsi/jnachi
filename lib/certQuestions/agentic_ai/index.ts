import { AGENTIC_AI_LITERACY_QUESTIONS } from './literacy';
import { AGENTIC_AI_AUTOMATION_QUESTIONS } from './automation';
import { AGENTIC_AI_PRIVACY_QUESTIONS } from './privacy';
import { AGENTIC_AI_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const AGENTIC_AI_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: AGENTIC_AI_LITERACY_QUESTIONS,
  automation: AGENTIC_AI_AUTOMATION_QUESTIONS,
  privacy: AGENTIC_AI_PRIVACY_QUESTIONS,
  growth: AGENTIC_AI_GROWTH_QUESTIONS,
};

export const ALL_AGENTIC_AI_QUESTIONS: CertQuestion[] = [
  ...AGENTIC_AI_LITERACY_QUESTIONS,
  ...AGENTIC_AI_AUTOMATION_QUESTIONS,
  ...AGENTIC_AI_PRIVACY_QUESTIONS,
  ...AGENTIC_AI_GROWTH_QUESTIONS,
];
