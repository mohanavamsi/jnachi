import { CertQuestion } from '../types';

export const PRACTITIONER_PRIVACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'prac_priv_01',
    section: 'privacy',
    prompt: 'A colleague wants to paste customer names, credit card numbers, and raw database dumps into a free public consumer AI web chat. What is the immediate correct action?',
    options: [
      { id: 'a', label: 'Intervene immediately: public consumer tiers default to training on user inputs; PII/PCI data must never be submitted without enterprise Zero Data Retention agreements.' },
      { id: 'b', label: 'Tell them to proceed as long as they manually delete the chat session after generation.' },
      { id: 'c', label: 'Advise them to use an incognito browser window to prevent server-side logging.' },
      { id: 'd', label: 'Allow the submission because foundation models cannot retain numerical data.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_02',
    section: 'privacy',
    prompt: 'What is "Zero Data Retention" (ZDR) in enterprise AI API service agreements?',
    options: [
      { id: 'a', label: 'A security rule requiring companies to delete their internal databases every 30 days.' },
      { id: 'b', label: 'An architectural constraint where the model maintains zero context across prompt tokens.' },
      { id: 'c', label: 'A compliance clause forbidding employees from taking written notes during meetings.' },
      { id: 'd', label: 'The provider guarantees that customer prompt and output data is neither stored persistently on server disks after inference nor used for foundation model training.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'prac_priv_03',
    section: 'privacy',
    prompt: 'Before using an LLM to analyze internal company performance review feedback, what preprocessing step is mandatory?',
    options: [
      { id: 'a', label: 'Upload the unedited review files directly to public repositories.' },
      { id: 'b', label: 'Prompt the model to guess which employee authored each specific criticism.' },
      { id: 'c', label: 'Anonymize or pseudonymize all identifying employee names, specific dates, team titles, and unique private project codenames.' },
      { id: 'd', label: 'Strip all positive remarks to focus exclusively on negative feedback.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'prac_priv_04',
    section: 'privacy',
    prompt: 'What constitutes an algorithmic bias risk when using AI to screen incoming job applicant resumes?',
    options: [
      { id: 'a', label: 'The model converting PDF resumes into standard plain-text strings.' },
      { id: 'b', label: 'Models trained on historical hiring data may systematically favor demographic patterns, phrasing, or prestige proxies present in legacy resumes.' },
      { id: 'c', label: 'The system taking longer than 5 seconds to process lengthy resumes.' },
      { id: 'd', label: 'The AI rejecting applications submitted in non-English fonts.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_priv_05',
    section: 'privacy',
    prompt: 'What is a "personal/organizational red line" in AI adoption?',
    options: [
      { id: 'a', label: 'A maximum threshold for monthly API billing expenditure.' },
      { id: 'b', label: 'A network firewall rule blocking traffic from specific geographic regions.' },
      { id: 'c', label: 'A visual error indicator displayed when input tokens exceed context capacity.' },
      { id: 'd', label: 'Explicit boundaries defining categories of decisions (e.g., criminal sentencing, termination notices, medical diagnoses) that must NEVER be automated without direct human authority.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'prac_priv_06',
    section: 'privacy',
    prompt: 'Why is client-side data redaction (masking PII with tokens like [NAME_1], [COMPANY_A]) safer than asking the LLM in the prompt to "ignore private data"?',
    options: [
      { id: 'a', label: 'If PII is never transmitted to the external API, no prompt injection, logging leak, or model retention flaw can ever expose the sensitive data.' },
      { id: 'b', label: 'Client-side redaction completely eliminates API token charges.' },
      { id: 'c', label: 'LLMs automatically crash if unredacted strings are provided in system prompts.' },
      { id: 'd', label: 'Masking replaces all letters with randomized numbers.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_07',
    section: 'privacy',
    prompt: 'Under GDPR and CCPA, if an enterprise incorporates AI tools to process EU/CA citizen data, what legal document must be executed with the AI vendor?',
    options: [
      { id: 'a', label: 'An informal email confirmation from a customer support representative.' },
      { id: 'b', label: 'A public press release announcing AI tool adoption.' },
      { id: 'c', label: 'A Data Processing Agreement (DPA) with standard contractual clauses governing data handling, security, and sub-processors.' },
      { id: 'd', label: 'No agreement is required if the AI provider has over 1 million users.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'prac_priv_08',
    section: 'privacy',
    prompt: 'What is the risk of "data leakage" through prompt caching in multi-tenant cloud environments?',
    options: [
      { id: 'a', label: 'Network packet loss occurring during database migrations.' },
      { id: 'b', label: 'If prompt caches are not strictly isolated per organization or tenant, cached context might inadvertently influence or surface in another tenant\'s session.' },
      { id: 'c', label: 'Client browsers running out of RAM while loading web applications.' },
      { id: 'd', label: 'Model parameters degrading due to prolonged server uptime.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_priv_09',
    section: 'privacy',
    prompt: 'How should an organization verify the copyright and licensing risks of AI-generated source code?',
    options: [
      { id: 'a', label: 'Enable public code matching/telemetry filters in AI coding assistants, and run standard dependency/license audit tools on all generated snippets.' },
      { id: 'b', label: 'Assume all AI-generated code is automatically public domain and exempt from copyright laws.' },
      { id: 'c', label: 'Refrain from running unit tests on AI-written software components.' },
      { id: 'd', label: 'Avoid deploying code generated during standard business hours.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_priv_10',
    section: 'privacy',
    prompt: 'When deploying an AI assistant to external users, what transparency requirement is best practice?',
    options: [
      { id: 'a', label: 'Mislead users into believing the AI agent is a live human representative.' },
      { id: 'b', label: 'Conceal all corporate contact information to prevent escalation.' },
      { id: 'c', label: 'Disable human support routing entirely to lower operational costs.' },
      { id: 'd', label: 'Clearly disclose to users that they are interacting with an AI system and provide straightforward avenues to reach human support.' },
    ],
    correctOptionId: 'd',
  },
];
