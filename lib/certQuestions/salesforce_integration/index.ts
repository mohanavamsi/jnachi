import { Question } from '../../certTypes';
import { CertSection, CertQuestion } from '../types';
import { SALESFORCE_INTEGRATION_LITERACY_QUESTIONS } from './literacy';
import { salesforceAutomationQuestions } from './automation';
import { salesforcePrivacyQuestions } from './privacy';
import { salesforceGrowthQuestions } from './growth';

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

export const SALESFORCE_INTEGRATION_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: SALESFORCE_INTEGRATION_LITERACY_QUESTIONS,
  automation: salesforceAutomationQuestions.map(toCertQuestion),
  privacy: salesforcePrivacyQuestions.map(toCertQuestion),
  growth: salesforceGrowthQuestions.map(toCertQuestion),
};

export const ALL_SALESFORCE_INTEGRATION_QUESTIONS: CertQuestion[] = [
  ...SALESFORCE_INTEGRATION_QUESTIONS_BY_SECTION.literacy,
  ...SALESFORCE_INTEGRATION_QUESTIONS_BY_SECTION.automation,
  ...SALESFORCE_INTEGRATION_QUESTIONS_BY_SECTION.privacy,
  ...SALESFORCE_INTEGRATION_QUESTIONS_BY_SECTION.growth,
];
