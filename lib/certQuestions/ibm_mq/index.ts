import { CertSection, CertQuestion } from '../types';
import { IBM_MQ_LITERACY_QUESTIONS } from './literacy';
import { IBM_MQ_AUTOMATION_QUESTIONS } from './automation';
import { IBM_MQ_PRIVACY_QUESTIONS } from './privacy';
import { IBM_MQ_GROWTH_QUESTIONS } from './growth';

export const IBM_MQ_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: IBM_MQ_LITERACY_QUESTIONS,
  automation: IBM_MQ_AUTOMATION_QUESTIONS,
  privacy: IBM_MQ_PRIVACY_QUESTIONS,
  growth: IBM_MQ_GROWTH_QUESTIONS,
};

export const ALL_IBM_MQ_QUESTIONS: CertQuestion[] = [
  ...IBM_MQ_LITERACY_QUESTIONS,
  ...IBM_MQ_AUTOMATION_QUESTIONS,
  ...IBM_MQ_PRIVACY_QUESTIONS,
  ...IBM_MQ_GROWTH_QUESTIONS,
];
