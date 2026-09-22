import { CertSection, CertQuestion } from '../types';
import { IBM_ACE_LITERACY_QUESTIONS } from './literacy';
import { IBM_ACE_AUTOMATION_QUESTIONS } from './automation';
import { IBM_ACE_PRIVACY_QUESTIONS } from './privacy';
import { IBM_ACE_GROWTH_QUESTIONS } from './growth';

export const IBM_ACE_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: IBM_ACE_LITERACY_QUESTIONS,
  automation: IBM_ACE_AUTOMATION_QUESTIONS,
  privacy: IBM_ACE_PRIVACY_QUESTIONS,
  growth: IBM_ACE_GROWTH_QUESTIONS,
};

export const ALL_IBM_ACE_QUESTIONS: CertQuestion[] = [
  ...IBM_ACE_LITERACY_QUESTIONS,
  ...IBM_ACE_AUTOMATION_QUESTIONS,
  ...IBM_ACE_PRIVACY_QUESTIONS,
  ...IBM_ACE_GROWTH_QUESTIONS,
];
