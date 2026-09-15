import { SALES_LITERACY_QUESTIONS } from './literacy';
import { SALES_AUTOMATION_QUESTIONS } from './automation';
import { SALES_PRIVACY_QUESTIONS } from './privacy';
import { SALES_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const SALES_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: SALES_LITERACY_QUESTIONS,
  automation: SALES_AUTOMATION_QUESTIONS,
  privacy: SALES_PRIVACY_QUESTIONS,
  growth: SALES_GROWTH_QUESTIONS,
};
