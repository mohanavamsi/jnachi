import { MANAGERS_LITERACY_QUESTIONS } from './literacy';
import { MANAGERS_AUTOMATION_QUESTIONS } from './automation';
import { MANAGERS_PRIVACY_QUESTIONS } from './privacy';
import { MANAGERS_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const MANAGERS_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: MANAGERS_LITERACY_QUESTIONS,
  automation: MANAGERS_AUTOMATION_QUESTIONS,
  privacy: MANAGERS_PRIVACY_QUESTIONS,
  growth: MANAGERS_GROWTH_QUESTIONS,
};
