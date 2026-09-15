import { HR_LITERACY_QUESTIONS } from './literacy';
import { HR_AUTOMATION_QUESTIONS } from './automation';
import { HR_PRIVACY_QUESTIONS } from './privacy';
import { HR_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const HR_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: HR_LITERACY_QUESTIONS,
  automation: HR_AUTOMATION_QUESTIONS,
  privacy: HR_PRIVACY_QUESTIONS,
  growth: HR_GROWTH_QUESTIONS,
};
