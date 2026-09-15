import { CertQuestion } from '../types';

export const BUILDER_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: 'bld_auto_01',
    section: 'automation',
    prompt: 'What is the fundamental architectural loop in an autonomous AI Agent (e.g. ReAct framework)?',
    options: [
      { id: 'a', label: 'Thought (Reasoning) -> Action (Tool Call) -> Observation (Tool Output) -> Evaluation -> Loop until termination condition is met.' },
      { id: 'b', label: 'Generate text -> Delete database -> Restart.' },
      { id: 'c', label: 'Infinite while(true) loop generating random strings.' },
      { id: 'd', label: 'Single zero-shot API call with no feedback.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_02',
    section: 'automation',
    prompt: 'How do you prevent an AI agent from entering an infinite loop when a tool call repeatedly fails or returns ambiguous errors?',
    options: [
      { id: 'a', label: 'Implement hard iteration limits (e.g. max 10 steps), error escalation heuristics, and human-in-the-loop fallback breakpoints.' },
      { id: 'b', label: 'Let the agent run indefinitely until the server runs out of budget.' },
      { id: 'c', label: 'Disable all error messages.' },
      { id: 'd', label: 'Set API timeout to 1 millisecond.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_03',
    section: 'automation',
    prompt: 'In a multi-agent workflow where Agent A produces code and Agent B reviews it, what is the best strategy for state management?',
    options: [
      { id: 'a', label: 'Maintain a centralized structured state object (e.g. state graph) tracking current draft, lint errors, test results, and iteration counts.' },
      { id: 'b', label: 'Pass raw unstructured chat strings back and forth endlessly.' },
      { id: 'c', label: 'Store state only in temporary browser cookies.' },
      { id: 'd', label: 'Discard all state between agent turns.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_04',
    section: 'automation',
    prompt: 'What is Retrieval-Augmented Generation (RAG) and why is it preferred over fine-tuning for dynamic corporate knowledge bases?',
    options: [
      { id: 'a', label: 'RAG retrieves relevant up-to-date document chunks at query time and injects them into the prompt, allowing instant knowledge updates without expensive retraining.' },
      { id: 'b', label: 'RAG replaces GPUs with hard drives.' },
      { id: 'c', label: 'Fine-tuning is always free and instant.' },
      { id: 'd', label: 'RAG permanently modifies model weights on disk.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_05',
    section: 'automation',
    prompt: 'In a RAG pipeline, what is "chunking strategy" and why does chunk size matter?',
    options: [
      { id: 'a', label: 'Too large chunks dilute semantic relevance with extraneous noise; too small chunks lose context necessary for coherent reasoning.' },
      { id: 'b', label: 'Chunk size determines the color of the output text.' },
      { id: 'c', label: 'Chunking is only used for image files.' },
      { id: 'd', label: 'Every chunk must always be exactly 1 word.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_06',
    section: 'automation',
    prompt: 'How should a builder design a webhook pipeline that triggers an LLM summary when new customer support tickets arrive?',
    options: [
      { id: 'a', label: 'Use an asynchronous queue (e.g. BullMQ, SQS) with retry logic, rate limit throttling, and persistent status logging.' },
      { id: 'b', label: 'Trigger synchronous blocking HTTP requests directly in the main UI thread.' },
      { id: 'c', label: 'Poll the database every 1 millisecond in a busy-wait loop.' },
      { id: 'd', label: 'Print the ticket to paper and scan it back in.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_07',
    section: 'automation',
    prompt: 'What is the role of an "Evaluator/Critic" prompt node in an automated content generation pipeline?',
    options: [
      { id: 'a', label: 'Independently inspects generated artifacts against a predefined rubric (tone, accuracy, forbidden words) before publishing or proceeding.' },
      { id: 'b', label: 'Complains about the code without offering solutions.' },
      { id: 'c', label: 'Deletes all user accounts.' },
      { id: 'd', label: 'Slows down generation by 10 hours.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_08',
    section: 'automation',
    prompt: 'When building automated batch workflows processing 10,000 documents, how should rate limits (TPM / RPM) be handled?',
    options: [
      { id: 'a', label: 'Implement token-bucket or leaky-bucket rate limiting with exponential backoff and jitter on HTTP 429 status codes.' },
      { id: 'b', label: 'Send all 10,000 requests simultaneously in 1 millisecond.' },
      { id: 'c', label: 'Ignore rate limit errors and drop failed documents.' },
      { id: 'd', label: 'Shut down the company servers.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_09',
    section: 'automation',
    prompt: 'What is "semantic routing" in workflow automation?',
    options: [
      { id: 'a', label: 'Computing vector embedding similarity between user input and predefined intent anchors to dynamically trigger specialized sub-flows.' },
      { id: 'b', label: 'Routing internet traffic across physical routers.' },
      { id: 'c', label: 'Grammar checking in Microsoft Word.' },
      { id: 'd', label: 'Randomly assigning tasks to different employees.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_10',
    section: 'automation',
    prompt: 'Why should automated AI workflows include a "human-in-the-loop" (HITL) approval step for high-stakes actions (e.g. sending payments, deleting files)?',
    options: [
      { id: 'a', label: 'Probabilistic models can fail unexpectedly; critical state mutations must require explicit human verification to prevent irreversible harm.' },
      { id: 'b', label: 'Because robots are legally barred from typing.' },
      { id: 'c', label: 'To make the process as slow as possible.' },
      { id: 'd', label: 'HITL is only used for entertainment apps.' },
    ],
    correctOptionId: 'a',
  },
];
