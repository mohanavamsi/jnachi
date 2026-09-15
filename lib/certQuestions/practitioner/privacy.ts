import { CertQuestion } from '../types';

export const PRACTITIONER_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'prac_priv_01',
    section: 'privacy',
    prompt: 'A colleague wants to paste customer names, credit card numbers, and raw database dumps into a free public consumer AI web chat. What is the immediate correct action?',
    options: [
      { id: 'a', label: 'Intervene immediately: public consumer tiers default to training on user inputs; PII/PCI data must never be submitted without enterprise Zero Data Retention agreements.' },
      { id: 'b', label: 'Tell them to proceed as long as they delete the chat afterwards.' },
      { id: 'c', label: 'Ask them to use an incognito browser window.' },
      { id: 'd', label: 'Ignore it because AI models forget everything.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_02',
    section: 'privacy',
    prompt: 'What is "Zero Data Retention" (ZDR) in enterprise AI API service agreements?',
    options: [
      { id: 'a', label: 'The provider guarantees that customer prompt and output data is neither stored persistently on server disks after inference nor used for foundation model training.' },
      { id: 'b', label: 'The company deletes its customer database every night.' },
      { id: 'c', label: 'The model has zero memory during a single prompt.' },
      { id: 'd', label: 'A policy forbidding employees from taking notes.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_03',
    section: 'privacy',
    prompt: 'Before using an LLM to analyze internal company performance review feedback, what preprocessing step is mandatory?',
    options: [
      { id: 'a', label: 'Anonymize or pseudonymize all identifying employee names, specific dates, team titles, and unique private project codenames.' },
      { id: 'b', label: 'Publish the reviews on the company public blog.' },
      { id: 'c', label: 'Translate the reviews into Latin.' },
      { id: 'd', label: 'Ask the model to guess who wrote each review.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_04',
    section: 'privacy',
    prompt: 'What constitutes an algorithmic bias risk when using AI to screen incoming job applicant resumes?',
    options: [
      { id: 'a', label: 'Models trained on historical hiring data may systematically favor demographic patterns, phrasing, or prestige proxies present in legacy resumes.' },
      { id: 'b', label: 'The model might run out of memory.' },
      { id: 'c', label: 'The resumes will be converted into PDF format.' },
      { id: 'd', label: 'The model might hire too many robots.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_05',
    section: 'privacy',
    prompt: 'What is a "personal/organizational red line" in AI adoption?',
    options: [
      { id: 'a', label: 'Explicit boundaries defining categories of decisions (e.g., criminal sentencing, termination notices, medical diagnoses) that must NEVER be automated without direct human authority.' },
      { id: 'b', label: 'A red underline showing spelling mistakes.' },
      { id: 'c', label: 'A boundary line drawn around server racks.' },
      { id: 'd', label: 'A maximum limit on keyboard keystrokes.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_06',
    section: 'privacy',
    prompt: 'Why is client-side data redaction (masking PII with tokens like [NAME_1], [COMPANY_A]) safer than asking the LLM in the prompt to "ignore private data"?',
    options: [
      { id: 'a', label: 'If PII is never transmitted to the external API, no prompt injection, logging leak, or model retention flaw can ever expose the sensitive data.' },
      { id: 'b', label: 'Redaction makes the text rhyme.' },
      { id: 'c', label: 'LLMs refuse to read unredacted text.' },
      { id: 'd', label: 'Masking reduces word count by 90%.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_07',
    section: 'privacy',
    prompt: 'Under GDPR and CCPA, if an enterprise incorporates AI tools to process EU/CA citizen data, what legal document must be executed with the AI vendor?',
    options: [
      { id: 'a', label: 'A Data Processing Agreement (DPA) with standard contractual clauses governing data handling, security, and sub-processors.' },
      { id: 'b', label: 'A verbal agreement over the phone.' },
      { id: 'c', label: 'A marketing tweet.' },
      { id: 'd', label: 'No agreement is required for AI tools.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_08',
    section: 'privacy',
    prompt: 'What is the risk of "data leakage" through prompt caching in multi-tenant cloud environments?',
    options: [
      { id: 'a', label: 'If prompt caches are not strictly isolated per organization or tenant, cached context might inadvertently influence or surface in another tenant\'s session.' },
      { id: 'b', label: 'Water leaking onto server hardware.' },
      { id: 'c', label: 'Browser tabs closing automatically.' },
      { id: 'd', label: 'Fonts changing unexpectedly.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_09',
    section: 'privacy',
    prompt: 'How should an organization verify the copyright and licensing risks of AI-generated source code?',
    options: [
      { id: 'a', label: 'Enable public code matching/telemetry filters in AI coding assistants, and run standard dependency/license audit tools on all generated snippets.' },
      { id: 'b', label: 'Assume all AI code is public domain without verification.' },
      { id: 'c', label: 'Never compile the code.' },
      { id: 'd', label: 'Only use code generated on weekends.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_10',
    section: 'privacy',
    prompt: 'When deploying an AI assistant to external users, what transparency requirement is best practice?',
    options: [
      { id: 'a', label: 'Clearly disclose to users that they are interacting with an AI system and provide straightforward avenues to reach human support.' },
      { id: 'b', label: 'Deceive users into believing the AI is a real human employee.' },
      { id: 'c', label: 'Hide all company contact info.' },
      { id: 'd', label: 'Block all user questions.' },
    ],
    correctOptionId: 'a',
  },
];
