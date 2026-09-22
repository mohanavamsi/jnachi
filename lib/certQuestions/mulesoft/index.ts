import { CertSection, CertQuestion } from '../types';
import { MULESOFT_LITERACY_QUESTIONS } from './literacy';
import { MULESOFT_AUTOMATION_QUESTIONS } from './automation';
import { MULESOFT_PRIVACY_QUESTIONS } from './privacy';
import { MULESOFT_GROWTH_QUESTIONS } from './growth';

export const MULESOFT_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: MULESOFT_LITERACY_QUESTIONS,
  automation: MULESOFT_AUTOMATION_QUESTIONS,
  privacy: MULESOFT_PRIVACY_QUESTIONS,
  growth: MULESOFT_GROWTH_QUESTIONS,
};

export const ALL_MULESOFT_QUESTIONS: CertQuestion[] = [
  ...MULESOFT_LITERACY_QUESTIONS,
  ...MULESOFT_AUTOMATION_QUESTIONS,
  ...MULESOFT_PRIVACY_QUESTIONS,
  ...MULESOFT_GROWTH_QUESTIONS,
];
