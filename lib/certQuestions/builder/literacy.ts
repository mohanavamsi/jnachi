import { CertQuestion } from '../types';

export const BUILDER_LITERACY_QUESTIONS: CertQuestion[] = [
  {
    id: 'bld_lit_01',
    section: 'literacy',
    prompt: 'When configuring structured tool/function calling with LLMs, how does the model select which tool to invoke?',
    options: [
      { id: 'a', label: 'The model analyzes the tool JSON definitions, parameter types, and descriptions, generating structured arguments matching the chosen function signature.' },
      { id: 'b', label: 'It executes random code strings in a sandbox until an execution succeeds.' },
      { id: 'c', label: 'It deterministically picks the function with the shortest identifier name.' },
      { id: 'd', label: 'Tool selection is hardcoded on the client operating system kernel.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_02',
    section: 'literacy',
    prompt: 'Why are detailed docstrings and parameter descriptions essential in function calling declarations?',
    options: [
      { id: 'a', label: 'They reduce the binary file size of the backend microservice.' },
      { id: 'b', label: 'They are strictly required by JavaScript syntax compilers.' },
      { id: 'c', label: 'LLMs rely directly on parameter descriptions as context cues to infer semantics, valid formats (e.g. ISO 8601 dates), and edge case constraints.' },
      { id: 'd', label: 'They permanently cache the function output in memory.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'bld_lit_03',
    section: 'literacy',
    prompt: 'In complex prompt routing architectures, what is the role of a lightweight "Router" or "Classifier" model?',
    options: [
      { id: 'a', label: 'Physical routing of network packets across data center switches.' },
      { id: 'b', label: 'Translating all input prompts into binary assembly code.' },
      { id: 'c', label: 'Deleting expired user authentication tokens from Redis caches.' },
      { id: 'd', label: 'Quickly evaluate incoming user intent and dispatch the query to specialized prompt templates, tools, or domain-specific models with minimal latency/cost.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'bld_lit_04',
    section: 'literacy',
    prompt: 'What is the purpose of system prompt modularization using templating engines (e.g., Mustache, Jinja2)?',
    options: [
      { id: 'a', label: 'Permanently locks model sampling temperature to zero.' },
      { id: 'b', label: 'Allows dynamic composition of system context, user roles, permission scopes, and real-time state variables without hardcoding monolithic prompt strings.' },
      { id: 'c', label: 'Encrypts the prompt string so the model cannot read its instructions.' },
      { id: 'd', label: 'Converts English prompt text into machine bytecode.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'bld_lit_05',
    section: 'literacy',
    prompt: 'When an LLM must extract 20 distinct data entities from noisy OCR receipts, which prompt pattern achieves the lowest hallucination rate?',
    options: [
      { id: 'a', label: 'Two-pass extraction: Pass 1 isolates bounding text snippets for each field; Pass 2 validates snippets into a strict typed schema with confidence scores.' },
      { id: 'b', label: 'Single zero-shot prompt asking for "all data found in the image".' },
      { id: 'c', label: 'High-temperature creative sampling set to 1.8.' },
      { id: 'd', label: 'Prompt instructing the model to extrapolate missing numeric values.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_06',
    section: 'literacy',
    prompt: 'What is "context window pruning" in long-running conversational agent workflows?',
    options: [
      { id: 'a', label: 'Terminating active browser windows every 5 minutes.' },
      { id: 'b', label: 'Truncating all user inputs to a maximum of 10 tokens.' },
      { id: 'c', label: 'Deleting compiled neural network checkpoints from disk.' },
      { id: 'd', label: 'Systematically summarizing older conversation turns or evicting low-relevance tool outputs to preserve token budget for crucial context and instructions.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'bld_lit_07',
    section: 'literacy',
    prompt: 'How does constrained decoding (e.g. grammar-based sampling, JSON schema enforcement) differ from post-hoc JSON validation?',
    options: [
      { id: 'a', label: 'Post-hoc validation completely prevents generation latency overhead.' },
      { id: 'b', label: 'Constrained decoding masks invalid tokens during sampling so invalid syntax is impossible to generate, whereas post-hoc validation only catches errors after completion.' },
      { id: 'c', label: 'Constrained decoding runs exclusively on mobile client browsers.' },
      { id: 'd', label: 'There is no difference in syntax reliability between the two methods.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'bld_lit_08',
    section: 'literacy',
    prompt: 'Why should builders avoid putting excessive, contradictory rules in a single 4,000-word system prompt?',
    options: [
      { id: 'a', label: 'Because LLM context windows are capped at 500 characters.' },
      { id: 'b', label: 'Long prompts cause relational databases to lose index integrity.' },
      { id: 'c', label: 'Rule collisions lead to unpredictable instruction following, degradation of core constraints, and increased latency/token costs.' },
      { id: 'd', label: 'System prompts must be written entirely in uppercase.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'bld_lit_09',
    section: 'literacy',
    prompt: 'What is the role of "few-shot negative examples" in prompt engineering for code generation?',
    options: [
      { id: 'a', label: 'Demonstrating common anti-patterns or insecure implementations alongside corrected code snippets to explicitly teach the model what patterns to avoid.' },
      { id: 'b', label: 'Generating deliberately broken code to test continuous integration failures.' },
      { id: 'c', label: 'Forcing the model to output unstructured plain text without syntax highlighting.' },
      { id: 'd', label: 'Reducing model precision to test fuzzy match parsers.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_lit_10',
    section: 'literacy',
    prompt: 'When building an automated document classification pipeline, what metric is most critical for evaluating class imbalance?',
    options: [
      { id: 'a', label: 'Total word count of the generated response.' },
      { id: 'b', label: 'The file size of the Python script on disk.' },
      { id: 'c', label: 'Overall raw accuracy alone without class breakdown.' },
      { id: 'd', label: 'F1-Score (Precision vs Recall) per category, rather than overall raw accuracy alone.' },
    ],
    correctOptionId: 'd',
  },
];
