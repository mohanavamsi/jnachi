import { Question } from '../../certTypes';
import { CertSection, CertQuestion } from '../types';
import { ibmMqLiteracyQuestions } from './literacy';
import { ibmMqAutomationQuestions } from './automation';
import { ibmMqPrivacyQuestions } from './privacy';
import { ibmMqGrowthQuestions } from './growth';

function toCertQuestion(q: Question): CertQuestion {
  return {
    id: q.id,
    section: q.domain,
    prompt: q.text,
    options: [
      { id: 'a', label: q.options.a },
      { id: 'b', label: q.options.b },
      { id: 'c', label: q.options.c },
      { id: 'd', label: q.options.d },
    ],
    correctOptionId: q.correctAnswer,
  };
}

export const IBM_MQ_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: ibmMqLiteracyQuestions.map(toCertQuestion),
  automation: ibmMqAutomationQuestions.map(toCertQuestion),
  privacy: ibmMqPrivacyQuestions.map(toCertQuestion),
  growth: ibmMqGrowthQuestions.map(toCertQuestion),
};

export const ALL_IBM_MQ_QUESTIONS: CertQuestion[] = [
  ...IBM_MQ_QUESTIONS_BY_SECTION.literacy,
  ...IBM_MQ_QUESTIONS_BY_SECTION.automation,
  ...IBM_MQ_QUESTIONS_BY_SECTION.privacy,
  ...IBM_MQ_QUESTIONS_BY_SECTION.growth,
];
