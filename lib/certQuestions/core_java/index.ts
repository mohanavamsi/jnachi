import { CertQuestion, CertSection } from '../types';
import { CORE_JAVA_LITERACY_QUESTIONS } from './literacy';
import { CORE_JAVA_AUTOMATION_QUESTIONS } from './automation';
import { CORE_JAVA_PRIVACY_QUESTIONS } from './privacy';
import { CORE_JAVA_GROWTH_QUESTIONS } from './growth';

export const CORE_JAVA_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: CORE_JAVA_LITERACY_QUESTIONS,
  automation: CORE_JAVA_AUTOMATION_QUESTIONS,
  privacy: CORE_JAVA_PRIVACY_QUESTIONS,
  growth: CORE_JAVA_GROWTH_QUESTIONS,
};

export const ALL_CORE_JAVA_QUESTIONS: CertQuestion[] = [
  ...CORE_JAVA_LITERACY_QUESTIONS,
  ...CORE_JAVA_AUTOMATION_QUESTIONS,
  ...CORE_JAVA_PRIVACY_QUESTIONS,
  ...CORE_JAVA_GROWTH_QUESTIONS,
];
