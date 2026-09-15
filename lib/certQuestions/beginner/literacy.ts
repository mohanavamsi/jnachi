import { CertQuestion } from '../types';

export const BEGINNER_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'beg_lit_01',
    section: 'literacy',
    prompt: 'What are the three essential components of a well-structured prompt anatomy for business tasks?',
    options: [
      { id: 'a', label: 'Polite greeting, keyword repetition, and emotional appeals' },
      { id: 'b', label: 'Model temperature, API secret keys, and billing tier settings' },
      { id: 'c', label: 'Context & Role, Clear Task/Instruction, and Desired Output Format/Constraints' },
      { id: 'd', label: 'A single open-ended sentence requesting general help' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'beg_lit_02',
    section: 'literacy',
    prompt: 'Why is defining a specific persona (e.g., "Act as a senior cybersecurity auditor") effective in prompt engineering?',
    options: [
      { id: 'a', label: 'It activates relevant domain-specific vocabulary, reasoning patterns, and perspective biases in the model’s attention weights.' },
      { id: 'b', label: 'It permanently overrides the model safety filters and content boundaries.' },
      { id: 'c', label: 'It reduces the total number of API tokens billed for the response.' },
      { id: 'd', label: 'It forces the AI to search live internal enterprise databases without authentication.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_03',
    section: 'literacy',
    prompt: 'What is a "hallucination" in the context of Large Language Models (LLMs)?',
    options: [
      { id: 'a', label: 'A server connection timeout caused by high network traffic.' },
      { id: 'b', label: 'A syntax error when compiling generated programming code.' },
      { id: 'c', label: 'An intentional security guardrail triggered by harmful prompts.' },
      { id: 'd', label: 'When a model generates plausible-sounding but factually false, ungrounded, or fabricated information with high apparent confidence.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'beg_lit_04',
    section: 'literacy',
    prompt: 'What is the primary benefit of "few-shot" prompting over "zero-shot" prompting?',
    options: [
      { id: 'a', label: 'It modifies the foundation model weights permanently on the server.' },
      { id: 'b', label: 'Providing 1-3 concrete input/output examples teaches the model the exact formatting style, tone, and edge-case handling you expect.' },
      { id: 'c', label: 'It eliminates the need to provide any task instructions.' },
      { id: 'd', label: 'It decreases model processing latency to zero.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'beg_lit_05',
    section: 'literacy',
    prompt: 'When you need an AI to produce output in a strict machine-readable format, which approach is most reliable?',
    options: [
      { id: 'a', label: 'Ask the model casually in conversational text and hope for clean parsing' },
      { id: 'b', label: 'Provide an explicit JSON or CSV schema, require raw output only, and forbid conversational preamble or markdown wrappers' },
      { id: 'c', label: 'Capitalize all keywords in the prompt' },
      { id: 'd', label: 'Increase the model temperature to its maximum value' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'beg_lit_06',
    section: 'literacy',
    prompt: 'What happens when you use positive instructions (what to do) instead of solely negative constraints (what not to do)?',
    options: [
      { id: 'a', label: 'LLMs follow positive guidance with significantly higher accuracy because it provides the token predictor with a clear operational pathway.' },
      { id: 'b', label: 'The model rejects the prompt as contradictory.' },
      { id: 'c', label: 'The token consumption doubles unnecessarily.' },
      { id: 'd', label: 'There is no measurable difference in output precision or compliance.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_07',
    section: 'literacy',
    prompt: 'What is the "context window" in large language models?',
    options: [
      { id: 'a', label: 'The visual window size of your web browser interface.' },
      { id: 'b', label: 'The time window during which the API servers accept incoming requests.' },
      { id: 'c', label: 'The maximum capacity of tokens (input plus output) the model can process and retain in active memory during a single interaction.' },
      { id: 'd', label: 'The number of days an enterprise subscription remains active.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'beg_lit_08',
    section: 'literacy',
    prompt: 'When an AI provides an answer that is 80% accurate but contains minor tone flaws or missing details, what is the best next step?',
    options: [
      { id: 'a', label: 'Discard the draft completely and start over with a brand new conversation.' },
      { id: 'b', label: 'Accept the draft as final and distribute it without human review.' },
      { id: 'c', label: 'Re-submit the exact same initial prompt without changes.' },
      { id: 'd', label: 'Iterative calibration: provide targeted feedback specifying which sections to refine, tone adjustments, and missing constraints.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'beg_lit_09',
    section: 'literacy',
    prompt: 'What does the "temperature" parameter generally control in LLMs?',
    options: [
      { id: 'a', label: 'The hardware thermal throttling of the underlying GPU server cluster.' },
      { id: 'b', label: 'The degree of randomness in next-token probability distribution (lower = deterministic/focused; higher = diverse/creative).' },
      { id: 'c', label: 'The speed of network packet transmission between client and server.' },
      { id: 'd', label: 'The maximum allowed length of generated sentences.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'beg_lit_10',
    section: 'literacy',
    prompt: 'Why should complex multi-step reasoning tasks include instructions like "Think step-by-step before answering"?',
    options: [
      { id: 'a', label: 'It encourages Chain-of-Thought reasoning, generating intermediate reasoning tokens that substantially improve analytical and factual accuracy.' },
      { id: 'b', label: 'It forces the AI to output responses in bullet points exclusively.' },
      { id: 'c', label: 'It enables external web search integration automatically.' },
      { id: 'd', label: 'It prevents the model from consuming context window tokens.' },
    ],
    correctOptionId: 'a',
  },
];
