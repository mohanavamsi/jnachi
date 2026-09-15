import { CertQuestion } from '../types';

export const ARCHITECT_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'mstr_priv_01',
    section: 'privacy',
    prompt: 'Under emerging global AI regulations (e.g. EU AI Act), what category of AI systems carries mandatory conformity assessments and fundamental rights impact assessments?',
    options: [
      { id: 'a', label: 'High-Risk AI systems (e.g. critical infrastructure, education scoring, employment recruitment, essential public services, law enforcement).' },
      { id: 'b', label: 'Casual consumer video game NPC dialogue bots.' },
      { id: 'c', label: 'Personal todo-list and note-taking productivity extensions.' },
      { id: 'd', label: 'Local weather summary widgets on operating system desktops.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_02',
    section: 'privacy',
    prompt: 'What is "differential privacy" in AI model training and data aggregation?',
    options: [
      { id: 'a', label: 'Restricting sensitive database records to a secondary internal folder structure.' },
      { id: 'b', label: 'Applying dual-factor authentication on all developer account logins.' },
      { id: 'c', label: 'Sharing anonymized datasets exclusively with verified business partners.' },
      { id: 'd', label: 'A mathematical framework introducing calibrated statistical noise to ensure individual records cannot be reverse-engineered or inferred from aggregate outputs.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'mstr_priv_03',
    section: 'privacy',
    prompt: 'How should an AI Architect handle the "Right to be Forgotten" (GDPR Article 17) if personal data was accidentally included in a model\'s fine-tuning weights?',
    options: [
      { id: 'a', label: 'Inform the data subject that neural networks are legally exempt from data privacy regulations.' },
      { id: 'b', label: 'Recognize that parameter extraction/unlearning is notoriously difficult; retrain the model from clean data checkpoints or implement strict output filter guardrails.' },
      { id: 'c', label: 'Delete the user\'s record from customer support ticket histories only.' },
      { id: 'd', label: 'Perform a standard web server reboot.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'mstr_priv_04',
    section: 'privacy',
    prompt: 'What constitutes an "Adversarial Extraction / Model Inversion" attack?',
    options: [
      { id: 'a', label: 'Physical theft of storage media from a third-party colocation data facility.' },
      { id: 'b', label: 'Inverting system display color profiles on developer workstations.' },
      { id: 'c', label: 'Carefully crafted querying sequences designed to reconstruct training data, proprietary system prompts, or hidden fine-tuning details from model output probabilities.' },
      { id: 'd', label: 'Downloading a public open-source foundation model repository from Hugging Face.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'mstr_priv_05',
    section: 'privacy',
    prompt: 'When establishing an internal "AI Governance Board", who are the essential stakeholders?',
    options: [
      { id: 'a', label: 'Cross-functional representatives: AI Engineering Leads, Legal/Compliance Counsel, Data Security Officers, Product Managers, and Domain Ethics Specialists.' },
      { id: 'b', label: 'Exclusively representatives from the external marketing and public relations team.' },
      { id: 'c', label: 'A single individual software engineer with no organizational oversight.' },
      { id: 'd', label: 'Third-party hardware vendors with no access to internal workflows.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_06',
    section: 'privacy',
    prompt: 'What is the risk of "Automation Bias" in professional decision-makers (doctors, underwriters, judges)?',
    options: [
      { id: 'a', label: 'Domain professionals refusing to use any automated productivity tooling.' },
      { id: 'b', label: 'Automated server instances restarting during operating hours.' },
      { id: 'c', label: 'Software package managers taking longer than expected to resolve dependencies.' },
      { id: 'd', label: 'Humans uncritically deferring to automated AI recommendations and ignoring contradictory real-world evidence or clinical intuition.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'mstr_priv_07',
    section: 'privacy',
    prompt: 'How should an organization protect its proprietary trade secrets when deploying customized AI tools across global teams?',
    options: [
      { id: 'a', label: 'Rely solely on verbal trust that staff will never paste trade secrets into consumer tools.' },
      { id: 'b', label: 'Enforce enterprise Zero Data Retention agreements, strict IAM role-based prompt access, client-side data masking, and network egress firewalls.' },
      { id: 'c', label: 'Publish company trade secrets to open forums to eliminate secrecy concerns.' },
      { id: 'd', label: 'Prohibit international business units from utilizing company laptops.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'mstr_priv_08',
    section: 'privacy',
    prompt: 'What is the ethical responsibility of an AI leader when a deployed AI feature exhibits disparate impact or demographic bias in production?',
    options: [
      { id: 'a', label: 'Suppress internal audit reports and dismiss user feedback.' },
      { id: 'b', label: 'Blame foundation model providers publicly without conducting an internal investigation.' },
      { id: 'c', label: 'Immediately halt or throttle the affected pipeline, conduct transparent root-cause analysis, remediate data imbalance, and publish corrective audit findings.' },
      { id: 'd', label: 'Continue scaling the biased feature until formal regulatory penalties are levied.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'mstr_priv_09',
    section: 'privacy',
    prompt: 'What is "Watermarking" for AI-generated multimedia and text, and what are its current technological limits?',
    options: [
      { id: 'a', label: 'Embedding statistical or visual signatures into outputs; effective for provenance tracking but susceptible to removal via re-encoding, paraphrasing, or editing.' },
      { id: 'b', label: 'Physical water cooling applied to high-density GPU server clusters.' },
      { id: 'c', label: 'An unbreakable cryptographic digital lock that permanently protects generated strings.' },
      { id: 'd', label: 'A digital copyright stamp applicable strictly to PDF document formats.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_priv_10',
    section: 'privacy',
    prompt: 'How should an enterprise AI strategy balance rapid innovation with ethical stewardship?',
    options: [
      { id: 'a', label: 'Halt all artificial intelligence exploration permanently to eliminate organizational risk.' },
      { id: 'b', label: 'Deploy unvetted experimental models directly into customer-facing production with zero guardrails.' },
      { id: 'c', label: 'Delegate all corporate governance and liability to external closed-source AI vendors.' },
      { id: 'd', label: 'By building guardrails into the software development lifecycle, establishing transparent review gates, and fostering an organizational culture of accountable experimentation.' },
    ],
    correctOptionId: 'd',
  },
];
