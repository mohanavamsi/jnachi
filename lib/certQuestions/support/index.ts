import { SUPPORT_LITERACY_QUESTIONS } from './literacy';
import { SUPPORT_AUTOMATION_QUESTIONS } from './automation';
import { SUPPORT_PRIVACY_QUESTIONS } from './privacy';
import { SUPPORT_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const SUPPORT_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: SUPPORT_LITERACY_QUESTIONS,
  automation: SUPPORT_AUTOMATION_QUESTIONS,
  privacy: SUPPORT_PRIVACY_QUESTIONS,
  growth: SUPPORT_GROWTH_QUESTIONS,
};
