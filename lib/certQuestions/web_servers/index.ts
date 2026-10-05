import { CertQuestion, CertSection } from '../types';
import { WEB_SERVERS_LITERACY_QUESTIONS } from './literacy';
import { WEB_SERVERS_AUTOMATION_QUESTIONS } from './automation';
import { WEB_SERVERS_PRIVACY_QUESTIONS } from './privacy';
import { WEB_SERVERS_GROWTH_QUESTIONS } from './growth';

export const WEB_SERVERS_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: WEB_SERVERS_LITERACY_QUESTIONS,
  automation: WEB_SERVERS_AUTOMATION_QUESTIONS,
  privacy: WEB_SERVERS_PRIVACY_QUESTIONS,
  growth: WEB_SERVERS_GROWTH_QUESTIONS,
};

export const ALL_WEB_SERVERS_QUESTIONS: CertQuestion[] = [
  ...WEB_SERVERS_LITERACY_QUESTIONS,
  ...WEB_SERVERS_AUTOMATION_QUESTIONS,
  ...WEB_SERVERS_PRIVACY_QUESTIONS,
  ...WEB_SERVERS_GROWTH_QUESTIONS,
];
