import { MARKETERS_LITERACY_QUESTIONS } from './literacy';
import { MARKETERS_AUTOMATION_QUESTIONS } from './automation';
import { MARKETERS_PRIVACY_QUESTIONS } from './privacy';
import { MARKETERS_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const MARKETERS_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: MARKETERS_LITERACY_QUESTIONS,
  automation: MARKETERS_AUTOMATION_QUESTIONS,
  privacy: MARKETERS_PRIVACY_QUESTIONS,
  growth: MARKETERS_GROWTH_QUESTIONS,
};
