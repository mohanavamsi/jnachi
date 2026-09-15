import { DEVELOPERS_LITERACY_QUESTIONS } from './literacy';
import { DEVELOPERS_AUTOMATION_QUESTIONS } from './automation';
import { DEVELOPERS_PRIVACY_QUESTIONS } from './privacy';
import { DEVELOPERS_GROWTH_QUESTIONS } from './growth';
import { CertSection, CertQuestion } from '../types';

export const DEVELOPERS_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: DEVELOPERS_LITERACY_QUESTIONS,
  automation: DEVELOPERS_AUTOMATION_QUESTIONS,
  privacy: DEVELOPERS_PRIVACY_QUESTIONS,
  growth: DEVELOPERS_GROWTH_QUESTIONS,
};
