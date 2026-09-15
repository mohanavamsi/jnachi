import { CertSection, CertQuestion } from '../types';
import { BEGINNER_LITERACY_QUESTIONS } from './literacy';
import { BEGINNER_AUTOMATION_QUESTIONS } from './automation';
import { BEGINNER_PRIVACY_QUESTIONS } from './privacy';
import { BEGINNER_GROWTH_QUESTIONS } from './growth';

export const BEGINNER_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: BEGINNER_LITERACY_QUESTIONS,
  automation: BEGINNER_AUTOMATION_QUESTIONS,
  privacy: BEGINNER_PRIVACY_QUESTIONS,
  growth: BEGINNER_GROWTH_QUESTIONS,
};

export const ALL_BEGINNER_QUESTIONS: CertQuestion[] = [
  ...BEGINNER_LITERACY_QUESTIONS,
  ...BEGINNER_AUTOMATION_QUESTIONS,
  ...BEGINNER_PRIVACY_QUESTIONS,
  ...BEGINNER_GROWTH_QUESTIONS,
];
