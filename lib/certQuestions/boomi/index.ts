import { Question } from '../../certTypes';
import { CertSection, CertQuestion } from '../types';
import { boomiLiteracyQuestions } from './literacy';
import { boomiAutomationQuestions } from './automation';
import { boomiPrivacyQuestions } from './privacy';
import { boomiGrowthQuestions } from './growth';

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

export const BOOMI_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: boomiLiteracyQuestions.map(toCertQuestion),
  automation: boomiAutomationQuestions.map(toCertQuestion),
  privacy: boomiPrivacyQuestions.map(toCertQuestion),
  growth: boomiGrowthQuestions.map(toCertQuestion),
};

export const ALL_BOOMI_QUESTIONS: CertQuestion[] = [
  ...BOOMI_QUESTIONS_BY_SECTION.literacy,
  ...BOOMI_QUESTIONS_BY_SECTION.automation,
  ...BOOMI_QUESTIONS_BY_SECTION.privacy,
  ...BOOMI_QUESTIONS_BY_SECTION.growth,
];
