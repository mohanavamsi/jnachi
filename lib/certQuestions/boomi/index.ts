import { CertSection, CertQuestion } from '../types';
import { BOOMI_LITERACY_QUESTIONS } from './literacy';
import { BOOMI_AUTOMATION_QUESTIONS } from './automation';
import { BOOMI_PRIVACY_QUESTIONS } from './privacy';
import { BOOMI_GROWTH_QUESTIONS } from './growth';

export const BOOMI_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: BOOMI_LITERACY_QUESTIONS,
  automation: BOOMI_AUTOMATION_QUESTIONS,
  privacy: BOOMI_PRIVACY_QUESTIONS,
  growth: BOOMI_GROWTH_QUESTIONS,
};

export const ALL_BOOMI_QUESTIONS: CertQuestion[] = [
  ...BOOMI_LITERACY_QUESTIONS,
  ...BOOMI_AUTOMATION_QUESTIONS,
  ...BOOMI_PRIVACY_QUESTIONS,
  ...BOOMI_GROWTH_QUESTIONS,
];
