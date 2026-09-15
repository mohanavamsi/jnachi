export type CertSection = 'literacy' | 'automation' | 'privacy' | 'growth';

export interface CertOption {
  id: string; // 'a' | 'b' | 'c' | 'd'
  label: string;
}

export interface CertQuestion {
  id: string;
  section: CertSection;
  prompt: string;
  options: CertOption[];
  correctOptionId: string;
}

export type ClientCertQuestion = Omit<CertQuestion, 'correctOptionId'>;
