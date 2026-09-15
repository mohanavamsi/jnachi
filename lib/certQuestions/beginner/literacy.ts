import { CertQuestion } from '../types';

export const BEGINNER_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'beg_lit_01',
    section: 'literacy',
    prompt: 'What are the three essential components of a well-structured prompt anatomy for business tasks?',
    options: [
      { id: 'a', label: 'Context & Role, Clear Task/Instruction, and Desired Output Format/Constraints' },
      { id: 'b', label: 'Polite greeting, keyword repetition, and exclamation marks' },
      { id: 'c', label: 'Model temperature, API secret keys, and billing tier' },
      { id: 'd', label: 'A single vague sentence requesting general help' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_02',
    section: 'literacy',
    prompt: 'Why is defining a specific persona (e.g., "Act as a senior cybersecurity auditor") effective in prompt engineering?',
    options: [
      { id: 'a', label: 'It activates relevant domain-specific vocabulary, reasoning patterns, and perspective biases in the model’s attention weights.' },
      { id: 'b', label: 'It bypasses model subscription fees.' },
      { id: 'c', label: 'It forces the AI to speak only in formal Shakespearean English.' },
      { id: 'd', label: 'It speeds up your internet connection.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_03',
    section: 'literacy',
    prompt: 'What is a "hallucination" in the context of Large Language Models (LLMs)?',
    options: [
      { id: 'a', label: 'When a model generates plausible-sounding but factually false, ungrounded, or fabricated information with high apparent confidence.' },
      { id: 'b', label: 'A graphic distortion on your computer monitor.' },
      { id: 'c', label: 'An optical illusion caused by looking at screens too long.' },
      { id: 'd', label: 'A network timeout error during API connection.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_04',
    section: 'literacy',
    prompt: 'What is the primary benefit of "few-shot" prompting over "zero-shot" prompting?',
    options: [
      { id: 'a', label: 'Providing 1-3 concrete input/output examples teaches the model the exact formatting style, tone, and edge-case handling you expect.' },
      { id: 'b', label: 'It completely disables all model safety filters.' },
      { id: 'c', label: 'It reduces the total number of tokens used to zero.' },
      { id: 'd', label: 'It permanently retrains the foundation model weights.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_05',
    section: 'literacy',
    prompt: 'When you need an AI to produce output in a strict machine-readable format, which approach is most reliable?',
    options: [
      { id: 'a', label: 'Ask the model nicely to format as text and hope for the best' },
      { id: 'b', label: 'Provide an explicit JSON or CSV schema, require raw output only, and forbid conversational filler or conversational wrappers' },
      { id: 'c', label: 'Type the prompt in ALL CAPS' },
      { id: 'd', label: 'Increase temperature to 2.0' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'beg_lit_06',
    section: 'literacy',
    prompt: 'What happens when you use positive instructions (what to do) instead of solely negative constraints (what not to do)?',
    options: [
      { id: 'a', label: 'LLMs follow positive guidance with significantly higher accuracy because it gives the token predictor a clear destination trajectory.' },
      { id: 'b', label: 'The prompt takes twice as long to process.' },
      { id: 'c', label: 'The model becomes overly emotional.' },
      { id: 'd', label: 'There is zero difference in output accuracy.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_07',
    section: 'literacy',
    prompt: 'What is "context window" in large language models?',
    options: [
      { id: 'a', label: 'The maximum amount of text (in tokens) the model can read, process, and retain in memory during a single interaction or session.' },
      { id: 'b', label: 'The physical size of your browser window.' },
      { id: 'c', label: 'The operating system background wallpaper.' },
      { id: 'd', label: 'The duration of your annual software license.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_08',
    section: 'literacy',
    prompt: 'When an AI provides an answer that is 80% accurate but contains minor errors in tone or specifics, what is the best next step?',
    options: [
      { id: 'a', label: 'Iterative calibration: provide specific feedback on what to adjust (e.g. "Tighten section 2, remove the jargon, and make tone more concise").' },
      { id: 'b', label: 'Delete the entire project and give up on AI tools.' },
      { id: 'c', label: 'Accept the flawed text and publish it immediately without changes.' },
      { id: 'd', label: 'Paste the exact same prompt 10 times in a row.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_09',
    section: 'literacy',
    prompt: 'What does the "temperature" parameter generally control in LLMs?',
    options: [
      { id: 'a', label: 'The randomness vs determinism of token selection (lower = focused and predictable; higher = creative and diverse).' },
      { id: 'b', label: 'The physical heat of the server CPU.' },
      { id: 'c', label: 'The weather forecast in the server’s geographic region.' },
      { id: 'd', label: 'The download speed of your internet.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_lit_10',
    section: 'literacy',
    prompt: 'Why should complex multi-step reasoning tasks include phrases like "Think step-by-step before answering"?',
    options: [
      { id: 'a', label: 'It prompts the model to generate intermediate reasoning tokens (Chain-of-Thought), dramatically improving logical and factual accuracy.' },
      { id: 'b', label: 'It makes the AI sound more polite.' },
      { id: 'c', label: 'It automatically saves the chat to a PDF file.' },
      { id: 'd', label: 'It prevents token billing.' },
    ],
    correctOptionId: 'a',
  },
];
