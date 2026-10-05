import { CertQuestion, CertSection } from '../types';
import { LINUX_SHELL_LITERACY_QUESTIONS } from './literacy';
import { LINUX_SHELL_AUTOMATION_QUESTIONS } from './automation';
import { LINUX_SHELL_PRIVACY_QUESTIONS } from './privacy';
import { LINUX_SHELL_GROWTH_QUESTIONS } from './growth';

export const LINUX_SHELL_QUESTIONS_BY_SECTION: Record<CertSection, CertQuestion[]> = {
  literacy: LINUX_SHELL_LITERACY_QUESTIONS,
  automation: LINUX_SHELL_AUTOMATION_QUESTIONS,
  privacy: LINUX_SHELL_PRIVACY_QUESTIONS,
  growth: LINUX_SHELL_GROWTH_QUESTIONS,
};

export const ALL_LINUX_SHELL_QUESTIONS: CertQuestion[] = [
  ...LINUX_SHELL_LITERACY_QUESTIONS,
  ...LINUX_SHELL_AUTOMATION_QUESTIONS,
  ...LINUX_SHELL_PRIVACY_QUESTIONS,
  ...LINUX_SHELL_GROWTH_QUESTIONS,
];
