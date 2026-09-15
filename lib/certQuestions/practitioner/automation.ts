import { CertQuestion } from '../types';

export const PRACTITIONER_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: 'prac_auto_01',
    section: 'automation',
    prompt: 'When building an automated meeting debrief workflow, what is the best practice for handling 90-minute messy transcripts?',
    options: [
      { id: 'a', label: 'A 2-stage pipeline: Stage 1 cleans transcript into speaker-tagged chronological summaries; Stage 2 extracts action items, owners, and deadlines.' },
      { id: 'b', label: 'Send the entire unformatted transcript with a single open-ended prompt: "Summarize everything in 5 words."' },
      { id: 'c', label: 'Rely on the model to deduce missing timestamps and unstated attendee agreements.' },
      { id: 'd', label: 'Truncate the transcript at the 1,000-word mark regardless of meeting content.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_02',
    section: 'automation',
    prompt: 'What constitutes an effective personal or team "Prompt Library"?',
    options: [
      { id: 'a', label: 'An unstructured text file containing copy-pasted web chat URLs.' },
      { id: 'b', label: 'A single generic prompt template applied indiscriminately across all company tasks.' },
      { id: 'c', label: 'A collection of tested, versioned prompts with clear parameter placeholders ({variables}), expected output contracts, and usage context.' },
      { id: 'd', label: 'A list of third-party subscription passwords stored for team sharing.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'prac_auto_03',
    section: 'automation',
    prompt: 'When automating customer feedback extraction from hundreds of reviews, why is batch processing with JSON schema superior to free-form chat querying?',
    options: [
      { id: 'a', label: 'It guarantees that 100% of customer reviews will be scored as positive sentiment.' },
      { id: 'b', label: 'It eliminates the need for internet access and cloud connectivity.' },
      { id: 'c', label: 'It forces the LLM to write poetic prose rather than analytical metrics.' },
      { id: 'd', label: 'It produces predictable structured records (sentiment score, feature mention, bug report) that ingest directly into analytics databases.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'prac_auto_04',
    section: 'automation',
    prompt: 'In a multi-step writing pipeline, why is "clay drafting" (drafting raw content without editing, then passing to a critique/polishing prompt) recommended?',
    options: [
      { id: 'a', label: 'It hides prompt instructions from the model\'s attention mechanism.' },
      { id: 'b', label: 'Separating ideation/content generation from editorial refining prevents cognitive bottlenecks and yields significantly tighter outputs.' },
      { id: 'c', label: 'It reduces the total number of API calls to exactly one.' },
      { id: 'd', label: 'It forces the model to generate content strictly in bullet points.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_auto_05',
    section: 'automation',
    prompt: 'What is the primary risk of chaining five generative prompt steps without intermediate validation schemas?',
    options: [
      { id: 'a', label: 'Error propagation: subtle hallucinations or formatting drift in step 1 compound into total output degeneration by step 5.' },
      { id: 'b', label: 'The prompt text permanently changes its encoding to ASCII binary.' },
      { id: 'c', label: 'The server automatically doubles API token billing rates.' },
      { id: 'd', label: 'The underlying model resets its base neural weights.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_06',
    section: 'automation',
    prompt: 'When automating weekly KPI reports from raw CSV spreadsheets, how should numerical data be passed to the LLM to minimize calculation errors?',
    options: [
      { id: 'a', label: 'Prompt the LLM to calculate multi-digit matrix multiplications mentally in text.' },
      { id: 'b', label: 'Omit all concrete numerical values and ask the LLM to infer trends from company vibes.' },
      { id: 'c', label: 'Increase model temperature to 1.8 for financial calculations.' },
      { id: 'd', label: 'Pre-calculate totals, growth rates, and percentages programmatically via code/formulas, passing the calculated metrics for the LLM to synthesize narrative insights.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'prac_auto_07',
    section: 'automation',
    prompt: 'What is a "micro-task audit" in workflow automation?',
    options: [
      { id: 'a', label: 'Auditing server CPU cache register allocation per millisecond.' },
      { id: 'b', label: 'Reviewing daily work to decompose large ambiguous jobs into discrete 2-5 minute cognitive sub-tasks suitable for AI assistance.' },
      { id: 'c', label: 'Monitoring the physical hardware temperature of workplace laptops.' },
      { id: 'd', label: 'Counting the number of characters in outgoing company emails.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_auto_08',
    section: 'automation',
    prompt: 'How can teams ensure consistency across AI-assisted customer support replies authored by multiple human agents?',
    options: [
      { id: 'a', label: 'Allow each agent to use arbitrary consumer AI tools without organizational guidelines.' },
      { id: 'b', label: 'Disable all template options and require free-form one-shot prompts.' },
      { id: 'c', label: 'Implement standardized prompt macros with pre-defined company tone, approved knowledge base references, and required sign-off policies.' },
      { id: 'd', label: 'Mandate that all customer replies be under 10 words.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'prac_auto_09',
    section: 'automation',
    prompt: 'When an automated AI script encounters an unparsable response format, what is the best architectural fallback?',
    options: [
      { id: 'a', label: 'Catch parsing error, retry once with an explicit correction prompt showing the error, or route to human review queue if retry fails.' },
      { id: 'b', label: 'Write corrupted placeholder strings into the database without alerting operators.' },
      { id: 'c', label: 'Shut down the entire production cluster immediately.' },
      { id: 'd', label: 'Ignore the error and skip all remaining records in the queue.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_auto_10',
    section: 'automation',
    prompt: 'Why should automation prompts use structured markdown headers (e.g. # CONTEXT, # INPUT DATA, # OUTPUT SPEC) rather than unsegmented blocks?',
    options: [
      { id: 'a', label: 'Headers double the inference processing speed on GPU clusters.' },
      { id: 'b', label: 'Unsegmented text triggers security firewalls on enterprise networks.' },
      { id: 'c', label: 'Markdown formatting eliminates all API token costs.' },
      { id: 'd', label: 'Explicit structural boundaries help models segment instructions from data, reducing instruction-following errors.' },
    ],
    correctOptionId: 'd',
  },
];
