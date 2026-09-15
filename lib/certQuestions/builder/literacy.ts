import { CertQuestion } from '../types';

export const BUILDER_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'bld_lit_01',
    section: 'literacy',
    prompt: 'When configuring structured tool/function calling with LLMs, how does the model select which tool to invoke?',
    options: [
      { id: 'a', label: 'The model analyzes the tool JSON definitions, parameter types, and descriptions, generating structured arguments matching the chosen function signature.' },
      { id: 'b', label: 'It executes random code until something works.' },
      { id: 'c', label: 'It picks the function with the shortest name.' },
      { id: 'd', label: 'Tool calling is hardcoded on the user\'s local operating system.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_02',
    section: 'literacy',
    prompt: 'Why are detailed docstrings and parameter descriptions essential in function calling declarations?',
    options: [
      { id: 'a', label: 'LLMs rely directly on parameter descriptions as context cues to infer semantics, valid formats (e.g. ISO 8601 dates), and edge case constraints.' },
      { id: 'b', label: 'They make the API call execute faster.' },
      { id: 'c', label: 'They are legally required by open-source licenses.' },
      { id: 'd', label: 'Without them, the programming language will not compile.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_03',
    section: 'literacy',
    prompt: 'In complex prompt routing architectures, what is the role of a lightweight "Router" or "Classifier" model?',
    options: [
      { id: 'a', label: 'Quickly evaluate incoming user intent and dispatch the query to specialized prompt templates, tools, or domain-specific models with minimal latency/cost.' },
      { id: 'b', label: 'Connect ethernet cables in the data center.' },
      { id: 'c', label: 'Delete user session history.' },
      { id: 'd', label: 'Translate all prompts into Morse code.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_04',
    section: 'literacy',
    prompt: 'What is the purpose of system prompt modularization using templating engines (e.g., Mustache, Jinja2)?',
    options: [
      { id: 'a', label: 'Allows dynamic composition of system context, user roles, permission scopes, and real-time state variables without hardcoding monolithic prompt strings.' },
      { id: 'b', label: 'Converts English prompts into German.' },
      { id: 'c', label: 'Encrypts the prompt so the model cannot read it.' },
      { id: 'd', label: 'Reduces model temperature to zero permanently.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_05',
    section: 'literacy',
    prompt: 'When an LLM must extract 20 distinct data entities from noisy OCR receipts, which prompt pattern achieves the lowest hallucination rate?',
    options: [
      { id: 'a', label: 'Two-pass extraction: Pass 1 isolates bounding text snippets for each field; Pass 2 validates snippets into a strict typed schema with confidence scores.' },
      { id: 'b', label: 'Single prompt asking for "everything in the receipt".' },
      { id: 'c', label: 'Prompt with temperature set to 1.5.' },
      { id: 'd', label: 'Ask the model to guess missing prices.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_06',
    section: 'literacy',
    prompt: 'What is "context window pruning" in long-running conversational agent workflows?',
    options: [
      { id: 'a', label: 'Systematically summarizing older conversation turns or evicting low-relevance tool outputs to preserve token budget for crucial context and instructions.' },
      { id: 'b', label: 'Closing browser windows every 5 minutes.' },
      { id: 'c', label: 'Deleting model weights from memory.' },
      { id: 'd', label: 'Truncating all prompts to 10 tokens.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_07',
    section: 'literacy',
    prompt: 'How does constrained decoding (e.g. grammar-based sampling, JSON schema enforcement) differ from post-hoc JSON validation?',
    options: [
      { id: 'a', label: 'Constrained decoding masks invalid tokens during sampling so invalid syntax is impossible to generate, whereas post-hoc validation only catches errors after completion.' },
      { id: 'b', label: 'Constrained decoding runs in the browser only.' },
      { id: 'c', label: 'Post-hoc validation eliminates latency completely.' },
      { id: 'd', label: 'There is no difference.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_08',
    section: 'literacy',
    prompt: 'Why should builders avoid putting excessive, contradictory rules in a single 4,000-word system prompt?',
    options: [
      { id: 'a', label: 'Rule collisions lead to unpredictable instruction following, degradation of core constraints, and increased latency/token costs.' },
      { id: 'b', label: 'Because LLMs can only read up to 100 words.' },
      { id: 'c', label: 'It causes database indexes to corrupt.' },
      { id: 'd', label: 'System prompts must always be under 5 words.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_09',
    section: 'literacy',
    prompt: 'What is the role of "few-shot negative examples" in prompt engineering for code generation?',
    options: [
      { id: 'a', label: 'Demonstrating common anti-patterns or insecure implementations alongside corrected code snippets to explicitly teach the model what patterns to avoid.' },
      { id: 'b', label: 'Insulting the developer who wrote the code.' },
      { id: 'c', label: 'Generating broken code on purpose to test server crashes.' },
      { id: 'd', label: 'Decreasing model precision.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_10',
    section: 'literacy',
    prompt: 'When building an automated document classification pipeline, what metric is most critical for evaluating class imbalance?',
    options: [
      { id: 'a', label: 'F1-Score (Precision vs Recall) per category, rather than overall raw accuracy alone.' },
      { id: 'b', label: 'Total word count of the output.' },
      { id: 'c', label: 'The file size of the Python script.' },
      { id: 'd', label: 'The number of comments in the code.' },
    ],
    correctOptionId: 'a',
  },
];
