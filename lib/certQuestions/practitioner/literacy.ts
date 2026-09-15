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
      { id: 'd', label: 'Submit the prompt as an unformatted run-on sentence' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_lit_02',
    section: 'literacy',
    prompt: 'When crafting a persona prompt for financial analysis, which approach produces the most reliable, rigorous output?',
    options: [
      { id: 'a', label: '"Act as a genius investor who is never wrong."' },
      { id: 'b', label: 'Define role scope, analytical methodology (e.g. DCF, DuPont analysis), conservative bias assumptions, and mandatory risk citation steps.' },
      { id: 'c', label: 'Tell the model to give optimistic stock price predictions.' },
      { id: 'd', label: 'Use as few words as possible.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_lit_03',
    section: 'literacy',
    prompt: 'In complex multi-document summarization, how do you prevent the "lost in the middle" phenomenon where models miss facts placed in the center of huge context windows?',
    options: [
      { id: 'a', label: 'Place key instructions and high-priority reference text near the very beginning or end of the prompt context, and prompt with step-by-step chunk extraction.' },
      { id: 'b', label: 'Always place all instructions at line 500 of the prompt.' },
      { id: 'c', label: 'Disable the model attention heads.' },
      { id: 'd', label: 'Translate the document into three languages first.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_lit_04',
    section: 'literacy',
    prompt: 'What is the most effective way to test whether an updated system prompt has degraded existing performance across legacy edge cases?',
    options: [
      { id: 'a', label: 'Test once with a casual prompt and deploy immediately if it looks fine' },
      { id: 'b', label: 'Maintain a regression benchmark test suite of diverse input cases with expected assertion criteria and evaluate outputs deterministically' },
      { id: 'c', label: 'Ask the LLM if it thinks the new prompt is better' },
      { id: 'd', label: 'Rely solely on user complaints in production' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_lit_05',
    section: 'literacy',
    prompt: 'Why should negative constraints (e.g., "Do NOT include greetings") be reinforced with positive guidance (e.g., "Begin directly with the raw data table")?',
    options: [
      { id: 'a', label: 'LLMs process attention tokens more reliably when provided with a clear target trajectory rather than solely unbounded negative bounds.' },
      { id: 'b', label: 'Negative words cause immediate model exceptions.' },
      { id: 'c', label: 'Positive prompts cost fewer tokens.' },
      { id: 'd', label: 'Negative words invert the model temperature.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_lit_06',
    section: 'literacy',
    prompt: 'When summarizing a 50-page legal contract, how should a practitioner calibrate the model to prevent speculative interpretation?',
    options: [
      { id: 'a', label: 'Instruct the model to quote exact clause numbers and verbatim text excerpts for every assertion, stating "Not specified in document" when text is absent.' },
      { id: 'b', label: 'Prompt the model to fill in missing clauses using standard industry assumptions.' },
      { id: 'c', label: 'Set temperature to maximum.' },
      { id: 'd', label: 'Ask the model to rewrite the contract as a screenplay.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_lit_07',
    section: 'literacy',
    prompt: 'What distinguishes zero-shot Chain-of-Thought ("Let\'s think step by step") from standard zero-shot prompting?',
    options: [
      { id: 'a', label: 'It encourages the model to generate intermediate reasoning tokens, significantly boosting logical and quantitative accuracy before rendering the final conclusion.' },
      { id: 'b', label: 'It bypasses model context limits entirely.' },
      { id: 'c', label: 'It executes python code in a local kernel without permission.' },
      { id: 'd', label: 'It reduces total token consumption by 50%.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_lit_08',
    section: 'literacy',
    prompt: 'In prompt calibration, what is "prompt drift"?',
    options: [
      { id: 'a', label: 'Physical movement of servers across data centers' },
      { id: 'b', label: 'Changes in model output quality or style over time due to backend model updates, parameter fine-tuning, or shifting input distribution' },
      { id: 'c', label: 'Loss of wifi connectivity during generation' },
      { id: 'd', label: 'Exceeding the monthly subscription budget' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_lit_09',
    section: 'literacy',
    prompt: 'How should a practitioner handle inconsistent classification tags when categorizing customer support tickets into fixed enum values?',
    options: [
      { id: 'a', label: 'Provide the exact enum list in the prompt, include 2 examples per enum category, and mandate single-word or JSON-keyed outputs matching the enum.' },
      { id: 'b', label: 'Allow the model to invent new category names as it pleases.' },
      { id: 'c', label: 'Increase prompt temperature to 1.2.' },
      { id: 'd', label: 'Ask the customer to classify their own ticket.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_lit_10',
    section: 'literacy',
    prompt: 'When drafting automated email responses, what prevents the AI from sounding generic and boilerplate?',
    options: [
      { id: 'a', label: 'Providing a 3-tier style guide (voice, forbidden clichés, concrete sentence structure examples) and contextual variable slots.' },
      { id: 'b', label: 'Adding "Write this in a super energetic and viral style!"' },
      { id: 'c', label: 'Using all capital letters.' },
      { id: 'd', label: 'Inserting 10 emojis in every paragraph.' },
    ],
    correctOptionId: 'a',
  },
];
