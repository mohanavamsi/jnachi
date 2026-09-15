import { CertQuestion } from '../types';

export const PRACTITIONER_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'prac_lit_01',
    section: 'literacy',
    prompt: 'You are generating structured product catalogs. When using an LLM to produce valid JSON, what prompt technique best guarantees machine-parsable syntax?',
    options: [
      { id: 'a', label: 'Ask the model to format nicely with emojis and bullet points' },
      { id: 'b', label: 'Specify a strict JSON schema, supply one-shot valid JSON examples, and explicitly forbid conversational preamble or markdown codeblock wrappers if raw JSON is required' },
      { id: 'c', label: 'Set model temperature to 1.8 to encourage creative parsing' },
      { id: 'd', label: 'Submit the prompt as an unformatted run-on sentence without schema definition' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_lit_02',
    section: 'literacy',
    prompt: 'When crafting a persona prompt for financial analysis, which approach produces the most reliable, rigorous output?',
    options: [
      { id: 'a', label: '"Act as a genius investor who is never wrong and makes quick predictions."' },
      { id: 'b', label: 'Tell the model to give optimistic quarterly revenue projections by default.' },
      { id: 'c', label: 'Use a single-word prompt like "Finance" to avoid biasing the model.' },
      { id: 'd', label: 'Define role scope, analytical methodology (e.g. DCF, DuPont analysis), conservative bias assumptions, and mandatory risk citation steps.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'prac_lit_03',
    section: 'literacy',
    prompt: 'In complex multi-document summarization, how do you prevent the "lost in the middle" phenomenon where models miss facts placed in the center of huge context windows?',
    options: [
      { id: 'a', label: 'Place key instructions and high-priority reference text near the very beginning or end of the prompt context, and prompt with step-by-step chunk extraction.' },
      { id: 'b', label: 'Place all critical extraction instructions exclusively in the middle 50% of the prompt.' },
      { id: 'c', label: 'Disable temperature sampling and force the model to read in reverse.' },
      { id: 'd', label: 'Compress the text into an unpunctuated single-line string.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_lit_04',
    section: 'literacy',
    prompt: 'What is the most effective way to test whether an updated system prompt has degraded existing performance across legacy edge cases?',
    options: [
      { id: 'a', label: 'Run a single casual query and deploy immediately if the output appears reasonable.' },
      { id: 'b', label: 'Ask the LLM in a new chat if it believes the updated prompt is superior.' },
      { id: 'c', label: 'Maintain a regression benchmark test suite of diverse input cases with expected assertion criteria and evaluate outputs deterministically.' },
      { id: 'd', label: 'Rely solely on end-user complaints in production after deployment.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'prac_lit_05',
    section: 'literacy',
    prompt: 'Why should negative constraints (e.g., "Do NOT include greetings") be reinforced with positive guidance (e.g., "Begin directly with the raw data table")?',
    options: [
      { id: 'a', label: 'LLMs process attention tokens more reliably when provided with a clear target trajectory rather than solely unbounded negative bounds.' },
      { id: 'b', label: 'Negative words trigger automatic server-side API error exceptions.' },
      { id: 'c', label: 'Positive prompts cost 50% fewer billing tokens.' },
      { id: 'd', label: 'Negative words invert the model\'s internal sampling temperature.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_lit_06',
    section: 'literacy',
    prompt: 'When summarizing a 50-page legal contract, how should a practitioner calibrate the model to prevent speculative interpretation?',
    options: [
      { id: 'a', label: 'Prompt the model to fill in missing clauses using standard industry conventions.' },
      { id: 'b', label: 'Set temperature to maximum to encourage diverse interpretations.' },
      { id: 'c', label: 'Ask the model to rewrite the contract from memory without referencing text.' },
      { id: 'd', label: 'Instruct the model to quote exact clause numbers and verbatim text excerpts for every assertion, stating "Not specified in document" when text is absent.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'prac_lit_07',
    section: 'literacy',
    prompt: 'What distinguishes zero-shot Chain-of-Thought ("Let\'s think step by step") from standard zero-shot prompting?',
    options: [
      { id: 'a', label: 'It completely bypasses context window token limits.' },
      { id: 'b', label: 'It encourages the model to generate intermediate reasoning tokens, significantly boosting logical and quantitative accuracy before rendering the final conclusion.' },
      { id: 'c', label: 'It automatically invokes external Python code execution without configuration.' },
      { id: 'd', label: 'It eliminates the need to provide task instructions or context.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_lit_08',
    section: 'literacy',
    prompt: 'In prompt calibration, what is "prompt drift"?',
    options: [
      { id: 'a', label: 'Network packet delay caused by high latency server routes.' },
      { id: 'b', label: 'Loss of client authentication tokens during long sessions.' },
      { id: 'c', label: 'Changes in model output quality or style over time due to backend model updates, parameter fine-tuning, or shifting input distribution.' },
      { id: 'd', label: 'Automatic deletion of chat history after 30 days.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'prac_lit_09',
    section: 'literacy',
    prompt: 'How should a practitioner handle inconsistent classification tags when categorizing customer support tickets into fixed enum values?',
    options: [
      { id: 'a', label: 'Allow the model to invent descriptive new category names dynamically.' },
      { id: 'b', label: 'Increase prompt temperature to 1.5 to cover unexpected categories.' },
      { id: 'c', label: 'Prompt the customer to rephrase their inquiry until it matches a single keyword.' },
      { id: 'd', label: 'Provide the exact enum list in the prompt, include 2 examples per enum category, and mandate single-word or JSON-keyed outputs matching the enum.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'prac_lit_10',
    section: 'literacy',
    prompt: 'When drafting automated email responses, what prevents the AI from sounding generic and boilerplate?',
    options: [
      { id: 'a', label: 'Providing a 3-tier style guide (voice, forbidden clichés, concrete sentence structure examples) and contextual variable slots.' },
      { id: 'b', label: 'Adding repetitive hype phrases like "Make this viral and sensational!"' },
      { id: 'c', label: 'Increasing model temperature to 1.9.' },
      { id: 'd', label: 'Writing prompts using exclusively uppercase text.' },
    ],
    correctOptionId: 'a',
  },
];
