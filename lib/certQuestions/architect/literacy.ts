import { CertQuestion } from '../types';

export const ARCHITECT_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'mstr_lit_01',
    section: 'literacy',
    prompt: 'Under what conditions should an AI Architect advise an enterprise team to EXPLICITLY NOT use a generative AI model for a software feature?',
    options: [
      { id: 'a', label: 'When the problem requires deterministic 100% mathematical precision, has strict legal liability for any non-auditable error, and can be solved by classic algorithms or database queries.' },
      { id: 'b', label: 'Whenever the company has a large budget.' },
      { id: 'c', label: 'Only when the internet is disconnected.' },
      { id: 'd', label: 'Generative AI should be used for 100% of all software features without exception.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_02',
    section: 'literacy',
    prompt: 'What is "model collapse" in synthetic AI training loops?',
    options: [
      { id: 'a', label: 'Degeneration in model output diversity and accuracy when future generations of models are recursively trained on synthetic data produced by earlier models without sufficient human ground truth.' },
      { id: 'b', label: 'Physical server racks falling over.' },
      { id: 'c', label: 'A GPU overheating during backpropagation.' },
      { id: 'd', label: 'A sudden drop in stock price.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_03',
    section: 'literacy',
    prompt: 'How should an AI Architect design an automated auditing framework for detecting subtle semantic drift in mission-critical prompts?',
    options: [
      { id: 'a', label: 'Continuous shadow evaluation: run a golden test dataset through production prompts daily, asserting semantic similarity against canonical embeddings and statistical variance thresholds.' },
      { id: 'b', label: 'Wait for customers to file lawsuit claims.' },
      { id: 'c', label: 'Check prompt text visually once every two years.' },
      { id: 'd', label: 'Assume prompts never drift if model name is unchanged.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_04',
    section: 'literacy',
    prompt: 'What is the risk of "cognitive offloading" when engineering teams rely excessively on automated AI generation without critical code reviews?',
    options: [
      { id: 'a', label: 'Erosion of deep domain understanding, inability to debug subtle architectural flaws, and accumulation of fragile technical debt.' },
      { id: 'b', label: 'Engineers type too quickly.' },
      { id: 'c', label: 'The code takes up less disk space.' },
      { id: 'd', label: 'Computers become self-aware.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_05',
    section: 'literacy',
    prompt: 'In prompt security, what is "jailbreaking via token smuggling / base64 obfuscation"?',
    options: [
      { id: 'a', label: 'Adversaries encode harmful payloads into alternative formats (Base64, rot13, foreign languages) to bypass shallow string-matching safety filters during input ingestion.' },
      { id: 'b', label: 'Physical theft of computer hardware.' },
      { id: 'c', label: 'Smuggling physical tokens through airport security.' },
      { id: 'd', label: 'Deleting cookies from a web browser.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_06',
    section: 'literacy',
    prompt: 'How should an Architect mentor junior engineers who treat LLM outputs as infallible ground truth?',
    options: [
      { id: 'a', label: 'Establish a "Zero Trust" verification protocol: require evidence citations, cross-verification with deterministic tests, and rigorous edge-case exploration.' },
      { id: 'b', label: 'Forbid them from ever using computers.' },
      { id: 'c', label: 'Agree with them that LLMs are always right.' },
      { id: 'd', label: 'Ignore the problem.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_07',
    section: 'literacy',
    prompt: 'What is the difference between "epistemic uncertainty" (lack of knowledge) and "aleatoric uncertainty" (inherent randomness) in LLM evaluations?',
    options: [
      { id: 'a', label: 'Epistemic uncertainty can be reduced by providing relevant retrieved context; aleatoric uncertainty stems from probabilistic token generation across valid alternative phrasings.' },
      { id: 'b', label: 'They are identical medical terms.' },
      { id: 'c', label: 'Aleatoric uncertainty is solved by buying more RAM.' },
      { id: 'd', label: 'Epistemic uncertainty only occurs in Python.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_08',
    section: 'literacy',
    prompt: 'When evaluating multi-billion parameter frontier models vs compact edge models, what architectural trade-off governs the decision?',
    options: [
      { id: 'a', label: 'Frontier models provide supreme generalized reasoning and world knowledge; compact models offer low latency, deterministic throughput, on-prem privacy, and predictable unit cost.' },
      { id: 'b', label: 'Compact models are always superior for all tasks.' },
      { id: 'c', label: 'Frontier models cannot run in the cloud.' },
      { id: 'd', label: 'Compact models do not consume electricity.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_09',
    section: 'literacy',
    prompt: 'What constitutes an effective "Red Teaming" exercise for an enterprise customer-facing AI agent?',
    options: [
      { id: 'a', label: 'Adversarial human and automated testing designed to probe for prompt injections, data extraction, toxic outputs, competitor endorsement, and safety boundary violations.' },
      { id: 'b', label: 'Painting the server room walls red.' },
      { id: 'c', label: 'Testing the app with only friendly questions.' },
      { id: 'd', label: 'Sending the agent to a conference.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_lit_10',
    section: 'literacy',
    prompt: 'How does an Architect establish a formal "AI Style & Ethics Guide" for an organization?',
    options: [
      { id: 'a', label: 'Define brand voice parameters, mandatory citation rules, safety guardrails, copyright attribution protocols, and clear escalation paths for ambiguous outputs.' },
      { id: 'b', label: 'Copy-paste a generic template from the internet and never review it.' },
      { id: 'c', label: 'Let each individual employee do whatever they want with no oversight.' },
      { id: 'd', label: 'Forbid all employees from writing emails.' },
    ],
    correctOptionId: 'a',
  },
];
