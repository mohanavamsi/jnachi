import { PYTHON_DEV_LITERACY_QUESTIONS } from './literacy';
import { PYTHON_DEV_AUTOMATION_QUESTIONS } from './automation';
import { PYTHON_DEV_PRIVACY_QUESTIONS } from './privacy';
import { PYTHON_DEV_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const PYTHON_DEV_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: PYTHON_DEV_LITERACY_QUESTIONS,
  automation: PYTHON_DEV_AUTOMATION_QUESTIONS,
  privacy: PYTHON_DEV_PRIVACY_QUESTIONS,
  growth: PYTHON_DEV_GROWTH_QUESTIONS,
};

export const ALL_PYTHON_DEV_QUESTIONS: CertQuestion[] = [
  ...PYTHON_DEV_LITERACY_QUESTIONS,
  ...PYTHON_DEV_AUTOMATION_QUESTIONS,
  ...PYTHON_DEV_PRIVACY_QUESTIONS,
  ...PYTHON_DEV_GROWTH_QUESTIONS,
];
