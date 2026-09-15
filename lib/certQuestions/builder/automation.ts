import { CertQuestion } from '../types';

export const BUILDER_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: 'bld_auto_01',
    section: 'automation',
    prompt: 'What is the fundamental architectural loop in an autonomous AI Agent (e.g. ReAct framework)?',
    options: [
      { id: 'a', label: 'Thought (Reasoning) -> Action (Tool Call) -> Observation (Tool Output) -> Evaluation -> Loop until termination condition is met.' },
      { id: 'b', label: 'Compile Code -> Drop Database Tables -> Restart Server.' },
      { id: 'c', label: 'Infinite while(true) loop generating ungrounded string tokens.' },
      { id: 'd', label: 'Single zero-shot API call with zero tool evaluation feedback.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_02',
    section: 'automation',
    prompt: 'How do you prevent an AI agent from entering an infinite loop when a tool call repeatedly fails or returns ambiguous errors?',
    options: [
      { id: 'a', label: 'Let the agent run indefinitely until the hosting cloud account exhausts its credits.' },
      { id: 'b', label: 'Disable all error logging and exception handlers.' },
      { id: 'c', label: 'Set API connection timeout to 1 millisecond.' },
      { id: 'd', label: 'Implement hard iteration limits (e.g. max 10 steps), error escalation heuristics, and human-in-the-loop fallback breakpoints.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'bld_auto_03',
    section: 'automation',
    prompt: 'In a multi-agent workflow where Agent A produces code and Agent B reviews it, what is the best strategy for state management?',
    options: [
      { id: 'a', label: 'Pass raw unstructured chat strings back and forth across unbounded message logs.' },
      { id: 'b', label: 'Maintain a centralized structured state object (e.g. state graph) tracking current draft, lint errors, test results, and iteration counts.' },
      { id: 'c', label: 'Store ephemeral state exclusively in short-lived browser session cookies.' },
      { id: 'd', label: 'Erase all prior agent state after each execution turn.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'bld_auto_04',
    section: 'automation',
    prompt: 'What is Retrieval-Augmented Generation (RAG) and why is it preferred over fine-tuning for dynamic corporate knowledge bases?',
    options: [
      { id: 'a', label: 'RAG permanently alters neural network weights on hard disks during inference.' },
      { id: 'b', label: 'Fine-tuning is zero-cost and updates foundation model weights instantaneously.' },
      { id: 'c', label: 'RAG retrieves relevant up-to-date document chunks at query time and injects them into the prompt, allowing instant knowledge updates without expensive retraining.' },
      { id: 'd', label: 'RAG replaces all backend relational databases with vector embeddings exclusively.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'bld_auto_05',
    section: 'automation',
    prompt: 'In a RAG pipeline, what is "chunking strategy" and why does chunk size matter?',
    options: [
      { id: 'a', label: 'Too large chunks dilute semantic relevance with extraneous noise; too small chunks lose context necessary for coherent reasoning.' },
      { id: 'b', label: 'Chunk size controls the physical monitor resolution required to view search results.' },
      { id: 'c', label: 'Chunking is only applicable when indexing compressed image files.' },
      { id: 'd', label: 'Every text chunk must be constrained strictly to exactly 1 single token.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_06',
    section: 'automation',
    prompt: 'How should a builder design a webhook pipeline that triggers an LLM summary when new customer support tickets arrive?',
    options: [
      { id: 'a', label: 'Execute synchronous blocking HTTP queries directly inside the primary client thread.' },
      { id: 'b', label: 'Poll the database in a tight 1ms busy-wait loop without backoff.' },
      { id: 'c', label: 'Print tickets to paper and re-scan them into an OCR pipeline.' },
      { id: 'd', label: 'Use an asynchronous queue (e.g. BullMQ, SQS) with retry logic, rate limit throttling, and persistent status logging.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'bld_auto_07',
    section: 'automation',
    prompt: 'What is the role of an "Evaluator/Critic" prompt node in an automated content generation pipeline?',
    options: [
      { id: 'a', label: 'Deletes user database records when generation latency exceeds 2 seconds.' },
      { id: 'b', label: 'Independently inspects generated artifacts against a predefined rubric (tone, accuracy, forbidden words) before publishing or proceeding.' },
      { id: 'c', label: 'Doubles the temperature parameter on each retry attempt.' },
      { id: 'd', label: 'Sends unverified drafts immediately to public distribution channels.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'bld_auto_08',
    section: 'automation',
    prompt: 'When building automated batch workflows processing 10,000 documents, how should rate limits (TPM / RPM) be handled?',
    options: [
      { id: 'a', label: 'Dispatch all 10,000 requests in parallel within a single millisecond burst.' },
      { id: 'b', label: 'Silently drop failed documents whenever a 429 response is encountered.' },
      { id: 'c', label: 'Implement token-bucket or leaky-bucket rate limiting with exponential backoff and jitter on HTTP 429 status codes.' },
      { id: 'd', label: 'Restart the entire batch pipeline from item #1 upon any rate limit warning.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'bld_auto_09',
    section: 'automation',
    prompt: 'What is "semantic routing" in workflow automation?',
    options: [
      { id: 'a', label: 'Computing vector embedding similarity between user input and predefined intent anchors to dynamically trigger specialized sub-flows.' },
      { id: 'b', label: 'Routing internet packet traffic across physical hardware switches.' },
      { id: 'c', label: 'Conducting spell-checking on user prompts.' },
      { id: 'd', label: 'Randomly dispatching tasks to different workers via round-robin.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_auto_10',
    section: 'automation',
    prompt: 'Why should automated AI workflows include a "human-in-the-loop" (HITL) approval step for high-stakes actions (e.g. sending payments, deleting files)?',
    options: [
      { id: 'a', label: 'Because automated AI agents are legally forbidden from transmitting network packets.' },
      { id: 'b', label: 'To intentionally introduce maximum latency into all operations.' },
      { id: 'c', label: 'HITL approval is only applicable in entertainment applications.' },
      { id: 'd', label: 'Probabilistic models can fail unexpectedly; critical state mutations must require explicit human verification to prevent irreversible harm.' },
    ],
    correctOptionId: 'd',
  },
];
