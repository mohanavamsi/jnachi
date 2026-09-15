import { CertQuestion } from '../types';

export const BEGINNER_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: 'beg_auto_01',
    section: 'automation',
    prompt: 'What is a "micro-task audit" when looking for opportunities to automate daily work with AI?',
    options: [
      { id: 'a', label: 'Deconstructing your weekly routine into discrete 2–10 minute cognitive tasks (drafting emails, formatting meeting notes, extracting action items) that AI can accelerate.' },
      { id: 'b', label: 'Auditing microprocessors in computer motherboards.' },
      { id: 'c', label: 'Counting how many times you click the mouse.' },
      { id: 'd', label: 'Reviewing minor financial tax receipts.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_02',
    section: 'automation',
    prompt: 'What is the concept of "Clay Drafting" in content creation workflows?',
    options: [
      { id: 'a', label: 'Using AI to quickly produce rough, unpolished first drafts (raw clay) that you then shape, fact-check, and refine with human judgment.' },
      { id: 'b', label: 'Sculpting physical pottery models for AI 3D scanners.' },
      { id: 'c', label: 'Writing articles about geology and soil minerals.' },
      { id: 'd', label: 'Letting AI publish unreviewed articles directly to production.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_03',
    section: 'automation',
    prompt: 'Why should a professional maintain a personal or team "Prompt Library"?',
    options: [
      { id: 'a', label: 'To reuse tested, high-performing prompt templates with parameterized variables ({name}, {context}) instead of reinventing prompts from scratch every time.' },
      { id: 'b', label: 'To store computer passwords insecurely.' },
      { id: 'c', label: 'To keep a history of every website ever visited.' },
      { id: 'd', label: 'Because web browsers do not allow bookmarking.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_04',
    section: 'automation',
    prompt: 'When automating the extraction of key meeting action items from a 60-minute transcript, what is the best strategy?',
    options: [
      { id: 'a', label: 'Feed the clean transcript and request structured output with columns: [Action Item], [Owner], [Deadline], and [Context Quote].' },
      { id: 'b', label: 'Ask the AI: "What happened today?" with no structure.' },
      { id: 'c', label: 'Paste the transcript into an image generator.' },
      { id: 'd', label: 'Delete the transcript without summarizing.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_05',
    section: 'automation',
    prompt: 'What is "prompt chaining" in workflow design?',
    options: [
      { id: 'a', label: 'Breaking a complex multi-stage job into a sequence of smaller, focused prompts where the output of Prompt 1 becomes the input for Prompt 2.' },
      { id: 'b', label: 'Sending the same email to 50 people simultaneously.' },
      { id: 'c', label: 'Connecting multiple laptops with physical USB cables.' },
      { id: 'd', label: 'Looping an AI in an endless conversation with itself.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_06',
    section: 'automation',
    prompt: 'Why is it risky to ask an AI to execute a complex 10-step analytical project in a single prompt?',
    options: [
      { id: 'a', label: 'Monolithic prompts increase cognitive load on attention mechanisms, leading to missed steps, diluted focus, and unspotted errors.' },
      { id: 'b', label: 'Because AI can only process one sentence per hour.' },
      { id: 'c', label: 'It causes database tables to delete automatically.' },
      { id: 'd', label: 'Monolithic prompts are forbidden by internet protocols.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_07',
    section: 'automation',
    prompt: 'When using AI to reformat messy customer survey data into a clean spreadsheet, what is the safest approach?',
    options: [
      { id: 'a', label: 'Have the AI output a CSV format, verify a sample of 5–10 rows against original records, and inspect for alignment errors before importing.' },
      { id: 'b', label: 'Import the raw output directly into the main financial database with zero human review.' },
      { id: 'c', label: 'Assume the AI fixed all data errors without checking.' },
      { id: 'd', label: 'Delete the original survey responses.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_08',
    section: 'automation',
    prompt: 'How can custom instructions (or system prompts) save time in daily AI use?',
    options: [
      { id: 'a', label: 'By pre-configuring your preferred background context, writing style, role, and output rules so you don’t have to re-type them in every new chat.' },
      { id: 'b', label: 'By speeding up your internet bandwidth.' },
      { id: 'c', label: 'By automatically completing your tax returns.' },
      { id: 'd', label: 'By changing your computer’s screen resolution.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_09',
    section: 'automation',
    prompt: 'What type of task is LEAST suitable for pure AI automation without human oversight?',
    options: [
      { id: 'a', label: 'High-stakes legal, medical, or irreversible financial transactions (e.g. sending wire payments or firing employees).' },
      { id: 'b', label: 'Summarizing a publicly available blog post.' },
      { id: 'c', label: 'Generating 5 creative headline ideas.' },
      { id: 'd', label: 'Translating a greeting message into Spanish.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_10',
    section: 'automation',
    prompt: 'What is the goal of applied AI workflow automation?',
    options: [
      { id: 'a', label: 'To eliminate repetitive cognitive friction and empower human professionals to focus on high-judgment, creative, and strategic problem-solving.' },
      { id: 'b', label: 'To replace all human thinking with robot answers.' },
      { id: 'c', label: 'To generate as much spam as possible.' },
      { id: 'd', label: 'To spend 8 hours a day chatting with bots.' },
    ],
    correctOptionId: 'a',
  },
];
