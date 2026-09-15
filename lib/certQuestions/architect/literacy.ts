import { CertQuestion } from '../types';

export const ARCHITECT_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'mstr_lit_01',
    section: 'literacy',
    prompt: 'Under what conditions should an AI Architect advise an enterprise team to EXPLICITLY NOT use a generative AI model for a software feature?',
    options: [
      { id: 'a', label: 'When the problem requires deterministic 100% mathematical precision, has strict legal liability for any non-auditable error, and can be solved by classic algorithms or database queries.' },
      { id: 'b', label: 'Whenever the application has a large infrastructure budget.' },
      { id: 'c', label: 'Exclusively when cloud servers operate under high load.' },
      { id: 'd', label: 'Generative AI should always be used for 100% of software features without exception.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_02',
    section: 'literacy',
    prompt: 'What is "model collapse" in synthetic AI training loops?',
    options: [
      { id: 'a', label: 'Physical server hardware failure in enterprise GPU racks.' },
      { id: 'b', label: 'A GPU thermal throttling event during gradient descent backpropagation.' },
      { id: 'c', label: 'A sudden decline in customer adoption of a SaaS platform.' },
      { id: 'd', label: 'Degeneration in model output diversity and accuracy when future generations of models are recursively trained on synthetic data produced by earlier models without sufficient human ground truth.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'mstr_lit_03',
    section: 'literacy',
    prompt: 'How should an AI Architect design an automated auditing framework for detecting subtle semantic drift in mission-critical prompts?',
    options: [
      { id: 'a', label: 'Wait for customer legal complaints before initiating prompt reviews.' },
      { id: 'b', label: 'Continuous shadow evaluation: run a golden test dataset through production prompts daily, asserting semantic similarity against canonical embeddings and statistical variance thresholds.' },
      { id: 'c', label: 'Visually inspect prompt string definitions once every two years.' },
      { id: 'd', label: 'Assume system prompts never drift if the underlying model name remains unchanged.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'mstr_lit_04',
    section: 'literacy',
    prompt: 'What is the risk of "cognitive offloading" when engineering teams rely excessively on automated AI generation without critical code reviews?',
    options: [
      { id: 'a', label: 'Engineers increase their typing velocity beyond operating system thresholds.' },
      { id: 'b', label: 'Generated software takes up less binary storage space on disk.' },
      { id: 'c', label: 'Erosion of deep domain understanding, inability to debug subtle architectural flaws, and accumulation of fragile technical debt.' },
      { id: 'd', label: 'Automated compilers terminate without logging output.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'mstr_lit_05',
    section: 'literacy',
    prompt: 'In prompt security, what is "jailbreaking via token smuggling / base64 obfuscation"?',
    options: [
      { id: 'a', label: 'Adversaries encode harmful payloads into alternative formats (Base64, rot13, foreign languages) to bypass shallow string-matching safety filters during input ingestion.' },
      { id: 'b', label: 'Physical theft of GPU accelerator cards from server centers.' },
      { id: 'c', label: 'Passing cryptographic security keys through URL query strings.' },
      { id: 'd', label: 'Clearing browser cookies and cache files during active sessions.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_06',
    section: 'literacy',
    prompt: 'How should an Architect mentor junior engineers who treat LLM outputs as infallible ground truth?',
    options: [
      { id: 'a', label: 'Instruct them to disable all automated unit tests in CI/CD.' },
      { id: 'b', label: 'Validate their belief that frontier models never produce hallucinated logic.' },
      { id: 'c', label: 'Encourage them to deploy uninspected code directly to production.' },
      { id: 'd', label: 'Establish a "Zero Trust" verification protocol: require evidence citations, cross-verification with deterministic tests, and rigorous edge-case exploration.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'mstr_lit_07',
    section: 'literacy',
    prompt: 'What is the difference between "epistemic uncertainty" (lack of knowledge) and "aleatoric uncertainty" (inherent randomness) in LLM evaluations?',
    options: [
      { id: 'a', label: 'They are identical statistical terms with zero practical distinction in machine learning.' },
      { id: 'b', label: 'Epistemic uncertainty can be reduced by providing relevant retrieved context; aleatoric uncertainty stems from probabilistic token generation across valid alternative phrasings.' },
      { id: 'c', label: 'Aleatoric uncertainty is resolved exclusively by provisioning additional CPU memory.' },
      { id: 'd', label: 'Epistemic uncertainty occurs only in non-relational database schemas.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'mstr_lit_08',
    section: 'literacy',
    prompt: 'When evaluating multi-billion parameter frontier models vs compact edge models, what architectural trade-off governs the decision?',
    options: [
      { id: 'a', label: 'Compact models are unconditionally superior across all complex reasoning domains.' },
      { id: 'b', label: 'Frontier models cannot execute in enterprise cloud environments.' },
      { id: 'c', label: 'Frontier models provide supreme generalized reasoning and world knowledge; compact models offer low latency, deterministic throughput, on-prem privacy, and predictable unit cost.' },
      { id: 'd', label: 'Edge models require zero electrical power to perform inference.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'mstr_lit_09',
    section: 'literacy',
    prompt: 'What constitutes an effective "Red Teaming" exercise for an enterprise customer-facing AI agent?',
    options: [
      { id: 'a', label: 'Adversarial human and automated testing designed to probe for prompt injections, data extraction, toxic outputs, competitor endorsement, and safety boundary violations.' },
      { id: 'b', label: 'Testing the agent using only compliant, friendly user queries in staging.' },
      { id: 'c', label: 'Painting workstation monitors and physical server racks red.' },
      { id: 'd', label: 'Limiting agent access strictly to internal marketing staff.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_10',
    section: 'literacy',
    prompt: 'How does an Architect establish a formal "AI Style & Ethics Guide" for an organization?',
    options: [
      { id: 'a', label: 'Prohibit all employees from utilizing digital communication tools.' },
      { id: 'b', label: 'Delegate all governance decisions to autonomous chatbot agents.' },
      { id: 'c', label: 'Permit individual teams to deploy unvetted AI tools without central guidelines.' },
      { id: 'd', label: 'Define brand voice parameters, mandatory citation rules, safety guardrails, copyright attribution protocols, and clear escalation paths for ambiguous outputs.' },
    ],
    correctOptionId: 'd',
  },
];
