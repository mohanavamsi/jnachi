import { PYTHON_AI_LITERACY_QUESTIONS } from './literacy';
import { PYTHON_AI_AUTOMATION_QUESTIONS } from './automation';
import { PYTHON_AI_PRIVACY_QUESTIONS } from './privacy';
import { PYTHON_AI_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const PYTHON_AI_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: PYTHON_AI_LITERACY_QUESTIONS,
  automation: PYTHON_AI_AUTOMATION_QUESTIONS,
  privacy: PYTHON_AI_PRIVACY_QUESTIONS,
  growth: PYTHON_AI_GROWTH_QUESTIONS,
};

export const ALL_PYTHON_AI_QUESTIONS: CertQuestion[] = [
  ...PYTHON_AI_LITERACY_QUESTIONS,
  ...PYTHON_AI_AUTOMATION_QUESTIONS,
  ...PYTHON_AI_PRIVACY_QUESTIONS,
  ...PYTHON_AI_GROWTH_QUESTIONS,
];
