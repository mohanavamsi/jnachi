import { CertQuestion } from '../types';

export const PRACTITIONER_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: 'prac_auto_01',
    section: 'automation',
    prompt: 'When building an automated meeting debrief workflow, what is the best practice for handling 90-minute messy transcripts?',
    options: [
      { id: 'a', label: 'A 2-stage pipeline: Stage 1 cleans transcript into speaker-tagged chronological summaries; Stage 2 extracts action items, owners, and deadlines.' },
      { id: 'b', label: 'Dump the full raw audio file directly into an image generation model.' },
      { id: 'c', label: 'Ask the model in one line: "Summarize everything."' },
      { id: 'd', label: 'Delete the transcript if it exceeds 500 words.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_02',
    section: 'automation',
    prompt: 'What constitutes an effective personal or team "Prompt Library"?',
    options: [
      { id: 'a', label: 'A collection of tested, versioned prompts with clear parameter placeholders ({variables}), expected output contracts, and usage context.' },
      { id: 'b', label: 'A messy unorganized text file of random chat URLs.' },
      { id: 'c', label: 'A single prompt used for all company tasks indiscriminately.' },
      { id: 'd', label: 'A bookmark folder of AI news articles.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_03',
    section: 'automation',
    prompt: 'When automating customer feedback extraction from hundreds of reviews, why is batch processing with JSON schema superior to free-form chat querying?',
    options: [
      { id: 'a', label: 'It produces predictable structured records (sentiment score, feature mention, bug report) that ingest directly into analytics databases.' },
      { id: 'b', label: 'It makes the model respond with humorous poems.' },
      { id: 'c', label: 'It eliminates the need for internet access.' },
      { id: 'd', label: 'It guarantees 100% positive customer reviews.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_04',
    section: 'automation',
    prompt: 'In a multi-step writing pipeline, why is "clay drafting" (drafting raw content without editing, then passing to a critique/polishing prompt) recommended?',
    options: [
      { id: 'a', label: 'Separating ideation/content generation from editorial refining prevents cognitive bottlenecks and yields significantly tighter outputs.' },
      { id: 'b', label: 'Because clay is cheaper than silicon.' },
      { id: 'c', label: 'It forces the model to use British spelling.' },
      { id: 'd', label: 'It hides prompt errors from the user.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_05',
    section: 'automation',
    prompt: 'What is the primary risk of chaining five generative prompt steps without intermediate validation schemas?',
    options: [
      { id: 'a', label: 'Error propagation: subtle hallucinations or formatting drift in step 1 compound into total output degeneration by step 5.' },
      { id: 'b', label: 'The computer fan runs slightly faster.' },
      { id: 'c', label: 'The model permanently shuts down.' },
      { id: 'd', label: 'The prompt text changes color.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_06',
    section: 'automation',
    prompt: 'When automating weekly KPI reports from raw CSV spreadsheets, how should numerical data be passed to the LLM to minimize calculation errors?',
    options: [
      { id: 'a', label: 'Pre-calculate totals, growth rates, and percentages programmatically via code/formulas, passing the calculated metrics for the LLM to synthesize narrative insights.' },
      { id: 'b', label: 'Ask the LLM to multiply 8-digit floating numbers mentally in pure text.' },
      { id: 'c', label: 'Omit all numbers from the prompt.' },
      { id: 'd', label: 'Ask the LLM to guess revenue based on vibes.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_07',
    section: 'automation',
    prompt: 'What is a "micro-task audit" in workflow automation?',
    options: [
      { id: 'a', label: 'Reviewing daily work to decompose large ambiguous jobs into discrete 2-5 minute cognitive sub-tasks suitable for AI assistance.' },
      { id: 'b', label: 'Auditing microchip inventories.' },
      { id: 'c', label: 'Tracking employee mouse clicks per second.' },
      { id: 'd', label: 'Calculating electrical wattage per token.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_08',
    section: 'automation',
    prompt: 'How can teams ensure consistency across AI-assisted customer support replies authored by multiple human agents?',
    options: [
      { id: 'a', label: 'Implement standardized prompt macros with pre-defined company tone, approved knowledge base references, and required sign-off policies.' },
      { id: 'b', label: 'Have all agents share one single login account.' },
      { id: 'c', label: 'Forbid all agents from reading the customer tickets.' },
      { id: 'd', label: 'Randomize the prompt daily.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_09',
    section: 'automation',
    prompt: 'When an automated AI script encounters an unparsable response format, what is the best architectural fallback?',
    options: [
      { id: 'a', label: 'Catch parsing error, retry once with an explicit correction prompt showing the error, or route to human review queue if retry fails.' },
      { id: 'b', label: 'Crash the entire server silently.' },
      { id: 'c', label: 'Insert dummy data into the database and ignore it.' },
      { id: 'd', label: 'Send an angry email to the AI vendor.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_10',
    section: 'automation',
    prompt: 'Why should automation prompts use structured markdown headers (e.g. # CONTEXT, # INPUT DATA, # OUTPUT SPEC) rather than unsegmented blocks?',
    options: [
      { id: 'a', label: 'Explicit structural boundaries help models segment instructions from data, reducing instruction-following errors.' },
      { id: 'b', label: 'Markdown makes the prompt download faster.' },
      { id: 'c', label: 'Headers automatically double the GPU clock speed.' },
      { id: 'd', label: 'It is required by browser HTML standards.' },
    ],
    correctOptionId: 'a',
  },
];
