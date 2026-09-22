import { Question } from '../../certTypes';
import { CertSection, CertQuestion } from '../types';
import { ibmAceLiteracyQuestions } from './literacy';
import { ibmAceAutomationQuestions } from './automation';
import { ibmAcePrivacyQuestions } from './privacy';
import { ibmAceGrowthQuestions } from './growth';

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

export const IBM_ACE_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: ibmAceLiteracyQuestions.map(toCertQuestion),
  automation: ibmAceAutomationQuestions.map(toCertQuestion),
  privacy: ibmAcePrivacyQuestions.map(toCertQuestion),
  growth: ibmAceGrowthQuestions.map(toCertQuestion),
};

export const ALL_IBM_ACE_QUESTIONS: CertQuestion[] = [
  ...IBM_ACE_QUESTIONS_BY_SECTION.literacy,
  ...IBM_ACE_QUESTIONS_BY_SECTION.automation,
  ...IBM_ACE_QUESTIONS_BY_SECTION.privacy,
  ...IBM_ACE_QUESTIONS_BY_SECTION.growth,
];
