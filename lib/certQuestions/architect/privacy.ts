import { CertQuestion } from '../types';

export const ARCHITECT_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'mstr_priv_01',
    section: 'privacy',
    prompt: 'Under emerging global AI regulations (e.g. EU AI Act), what category of AI systems carries mandatory conformity assessments and fundamental rights impact assessments?',
    options: [
      { id: 'a', label: 'High-Risk AI systems (e.g. critical infrastructure, education scoring, employment recruitment, essential public services, law enforcement).' },
      { id: 'b', label: 'Casual video game chatbots.' },
      { id: 'c', label: 'Personal todo-list apps.' },
      { id: 'd', label: 'Weather forecast widgets.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_02',
    section: 'privacy',
    prompt: 'What is "differential privacy" in AI model training and data aggregation?',
    options: [
      { id: 'a', label: 'A mathematical framework introducing calibrated statistical noise to ensure individual records cannot be reverse-engineered or inferred from aggregate outputs.' },
      { id: 'b', label: 'Keeping private data in a different folder.' },
      { id: 'c', label: 'Encrypting files with two passwords.' },
      { id: 'd', label: 'Only sharing data with different people.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_03',
    section: 'privacy',
    prompt: 'How should an AI Architect handle the "Right to be Forgotten" (GDPR Article 17) if personal data was accidentally included in a model\'s fine-tuning weights?',
    options: [
      { id: 'a', label: 'Recognize that parameter extraction/unlearning is notoriously difficult; retrain the model from clean data checkpoints or implement strict output filter guardrails.' },
      { id: 'b', label: 'Tell the user that AI models cannot forget anything and ignore the request.' },
      { id: 'c', label: 'Delete the user\'s email address from the newsletter list.' },
      { id: 'd', label: 'Restart the web server.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_04',
    section: 'privacy',
    prompt: 'What constitutes an "Adversarial Extraction / Model Inversion" attack?',
    options: [
      { id: 'a', label: 'Carefully crafted querying sequences designed to reconstruct training data, proprietary system prompts, or hidden fine-tuning details from model output probabilities.' },
      { id: 'b', label: 'Physically stealing hard drives from a data center.' },
      { id: 'c', label: 'Inverting the monitor colors.' },
      { id: 'd', label: 'Downloading a public open-source model.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_05',
    section: 'privacy',
    prompt: 'When establishing an internal "AI Governance Board", who are the essential stakeholders?',
    options: [
      { id: 'a', label: 'Cross-functional representatives: AI Engineering Leads, Legal/Compliance Counsel, Data Security Officers, Product Managers, and Domain Ethics Specialists.' },
      { id: 'b', label: 'Only the marketing department.' },
      { id: 'c', label: 'Only external consultants with no internal knowledge.' },
      { id: 'd', label: 'A single junior developer.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_06',
    section: 'privacy',
    prompt: 'What is the risk of "Automation Bias" in professional decision-makers (doctors, underwriters, judges)?',
    options: [
      { id: 'a', label: 'Humans uncritically deferring to automated AI recommendations and ignoring contradictory real-world evidence or clinical intuition.' },
      { id: 'b', label: 'Humans refusing to use any automated tools.' },
      { id: 'c', label: 'Automated machines breaking down frequently.' },
      { id: 'd', label: 'Software updates taking too long.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_07',
    section: 'privacy',
    prompt: 'How should an organization protect its proprietary trade secrets when deploying customized AI tools across global teams?',
    options: [
      { id: 'a', label: 'Enforce enterprise Zero Data Retention agreements, strict IAM role-based prompt access, client-side data masking, and network egress firewalls.' },
      { id: 'b', label: 'Trust all employees not to share company secrets.' },
      { id: 'c', label: 'Store trade secrets on public pastebins.' },
      { id: 'd', label: 'Forbid international employees from using company computers.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_08',
    section: 'privacy',
    prompt: 'What is the ethical responsibility of an AI leader when a deployed AI feature exhibits disparate impact or demographic bias in production?',
    options: [
      { id: 'a', label: 'Immediately halt or throttle the affected pipeline, conduct transparent root-cause analysis, remediate data imbalance, and publish corrective audit findings.' },
      { id: 'b', label: 'Cover up the issue and delete customer feedback.' },
      { id: 'c', label: 'Blame the third-party AI vendor publicly without investigating.' },
      { id: 'd', label: 'Ignore the problem until legally forced.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_09',
    section: 'privacy',
    prompt: 'What is "Watermarking" for AI-generated multimedia and text, and what are its current technological limits?',
    options: [
      { id: 'a', label: 'Embedding statistical or visual signatures into outputs; effective for provenance tracking but susceptible to removal via re-encoding, paraphrasing, or editing.' },
      { id: 'b', label: 'Dipping computers in water.' },
      { id: 'c', label: 'A 100% unbreakable cryptographic lock on all words.' },
      { id: 'd', label: 'Only used for PDF documents.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_10',
    section: 'privacy',
    prompt: 'How should an enterprise AI strategy balance rapid innovation with ethical stewardship?',
    options: [
      { id: 'a', label: 'By building guardrails into the software development lifecycle, establishing transparent review gates, and fostering an organizational culture of accountable experimentation.' },
      { id: 'b', label: 'By halting all technology adoption permanently.' },
      { id: 'c', label: 'By deploying unvetted experimental models directly into production with zero safeguards.' },
      { id: 'd', label: 'By delegating all ethical decisions to an AI chatbot.' },
    ],
    correctOptionId: 'a',
  },
];
