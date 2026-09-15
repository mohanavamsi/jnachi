import { CertQuestion } from '../types';

export const BEGINNER_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: 'beg_auto_01',
    section: 'automation',
    prompt: 'What is a "micro-task audit" when looking for opportunities to automate daily work with AI?',
    options: [
      { id: 'a', label: 'Auditing microprocessors and cache utilization on employee workstations.' },
      { id: 'b', label: 'Deconstructing your weekly routine into discrete 2–10 minute cognitive tasks (drafting emails, formatting meeting notes, extracting action items) that AI can accelerate.' },
      { id: 'c', label: 'Measuring the total number of keystrokes and mouse movements per hour.' },
      { id: 'd', label: 'Conducting formal audits of minor accounting receipts under $10.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'beg_auto_02',
    section: 'automation',
    prompt: 'What is the concept of "Clay Drafting" in content creation workflows?',
    options: [
      { id: 'a', label: 'Sculpting physical prototypes for 3D computer vision scanners.' },
      { id: 'b', label: 'Publishing unedited, fully autonomous AI articles directly to production feeds.' },
      { id: 'c', label: 'Restricting content prompts exclusively to short, one-word commands.' },
      { id: 'd', label: 'Using AI to quickly produce rough, unpolished first drafts (raw clay) that you then shape, fact-check, and refine with human judgment.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'beg_auto_03',
    section: 'automation',
    prompt: 'Why should a professional maintain a personal or team "Prompt Library"?',
    options: [
      { id: 'a', label: 'To reuse tested, high-performing prompt templates with parameterized variables ({name}, {context}) instead of reinventing prompts from scratch every time.' },
      { id: 'b', label: 'To store internal system credentials and API tokens in plain text.' },
      { id: 'c', label: 'To prevent teammates from accessing generative AI tools independently.' },
      { id: 'd', label: 'To bypass the need for human review on all downstream deliverables.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_04',
    section: 'automation',
    prompt: 'When automating the extraction of key meeting action items from a 60-minute transcript, what is the best strategy?',
    options: [
      { id: 'a', label: 'Submit the prompt: "What happened today?" with no explicit structure or guidelines.' },
      { id: 'b', label: 'Instruct the model to guess attendees\' unspoken thoughts and intentions.' },
      { id: 'c', label: 'Feed the clean transcript and request structured output with columns: [Action Item], [Owner], [Deadline], and [Context Quote].' },
      { id: 'd', label: 'Convert the entire transcript into an image before prompting.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'beg_auto_05',
    section: 'automation',
    prompt: 'What is "prompt chaining" in workflow design?',
    options: [
      { id: 'a', label: 'Sending identical prompts across 10 different browser tabs simultaneously.' },
      { id: 'b', label: 'Breaking a complex multi-stage job into a sequence of smaller, focused prompts where the output of Prompt 1 becomes the input for Prompt 2.' },
      { id: 'c', label: 'Restricting prompt inputs to a maximum of 25 characters.' },
      { id: 'd', label: 'Running an infinite recursive loop that generates text indefinitely without human intervention.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'beg_auto_06',
    section: 'automation',
    prompt: 'Why is it risky to ask an AI to execute a complex 10-step analytical project in a single prompt?',
    options: [
      { id: 'a', label: 'Because LLMs will automatically refuse any prompt with more than 3 bullet points.' },
      { id: 'b', label: 'Single prompts cause immediate network packet loss on client computers.' },
      { id: 'c', label: 'It requires enterprise root permissions to execute multi-step calculations.' },
      { id: 'd', label: 'Monolithic prompts overload attention mechanisms, leading to missed steps, diluted focus, and unspotted hallucinations.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'beg_auto_07',
    section: 'automation',
    prompt: 'When using AI to reformat messy customer survey data into a clean spreadsheet, what is the safest approach?',
    options: [
      { id: 'a', label: 'Have the AI output a structured CSV format, spot-check a sample of rows against original records, and verify column alignment before importing.' },
      { id: 'b', label: 'Ingest raw AI output directly into production accounting systems without human spot-checking.' },
      { id: 'c', label: 'Assume the AI corrected all data inaccuracies without requiring source verification.' },
      { id: 'd', label: 'Permanently delete original raw surveys prior to running the AI transformation.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_08',
    section: 'automation',
    prompt: 'How can custom instructions (or system prompts) save time in daily AI use?',
    options: [
      { id: 'a', label: 'By increasing the local GPU clock speed of the user device.' },
      { id: 'b', label: 'By eliminating the need to provide data inputs for any prompt.' },
      { id: 'c', label: 'By pre-configuring your persistent context, target audience, role, and formatting rules so you do not have to re-type them in every new session.' },
      { id: 'd', label: 'By overriding third-party copyright laws.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'beg_auto_09',
    section: 'automation',
    prompt: 'What type of task is LEAST suitable for pure AI automation without human oversight?',
    options: [
      { id: 'a', label: 'High-stakes legal compliance filings, medical diagnosis notes, or irreversible financial transfers.' },
      { id: 'b', label: 'Drafting 5 alternative subject lines for a general newsletter.' },
      { id: 'c', label: 'Summarizing a publicly published tech industry blog post.' },
      { id: 'd', label: 'Translating a common conversational phrase into German.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_auto_10',
    section: 'automation',
    prompt: 'What is the primary objective of applied AI workflow automation?',
    options: [
      { id: 'a', label: 'To eliminate all human staff and automate corporate decision-making without oversight.' },
      { id: 'b', label: 'To flood external channels with unverified high-volume synthetic content.' },
      { id: 'c', label: 'To maximize total API credit expenditure on daily operations.' },
      { id: 'd', label: 'To eliminate repetitive cognitive friction and empower professionals to focus on high-judgment, creative, and strategic problem-solving.' },
    ],
    correctOptionId: 'd',
  },
];
