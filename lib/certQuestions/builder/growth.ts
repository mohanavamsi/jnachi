import { CertQuestion } from '../types';

export const BUILDER_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: 'bld_gro_01',
    section: 'growth',
    prompt: 'When deciding whether to build a feature using LLM prompting vs deterministic code (regex, SQL, algorithms), what is the builder\'s primary rule?',
    options: [
      { id: 'a', label: 'Use deterministic code whenever mathematical precision, 100% predictability, or high-throughput low-latency is required; use LLMs for unstructured reasoning, extraction, and synthesis.' },
      { id: 'b', label: 'Always use LLMs for everything, including basic addition.' },
      { id: 'c', label: 'Never use LLMs for any software feature.' },
      { id: 'd', label: 'Flip a coin.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_02',
    section: 'growth',
    prompt: 'What is "synthetic data generation" and how can a builder use it to evaluate edge cases?',
    options: [
      { id: 'a', label: 'Using an LLM to generate diverse, realistic user prompts, adversarial attacks, and edge-case inputs to test the robustness of a production application.' },
      { id: 'b', label: 'Writing fake reviews to boost app store rankings.' },
      { id: 'c', label: 'Generating random binary garbage.' },
      { id: 'd', label: 'Faking database uptime statistics.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_03',
    section: 'growth',
    prompt: 'How does a builder calculate the Unit Economics (Cost per Transaction) of an AI pipeline?',
    options: [
      { id: 'a', label: 'Sum of input/output token costs + vector search infrastructure + compute hosting + fallback latency overhead per user workflow run.' },
      { id: 'b', label: 'The price of the laptop used by the engineer.' },
      { id: 'c', label: 'Dividing total revenue by 2.' },
      { id: 'd', label: 'Token costs are always zero.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_04',
    section: 'growth',
    prompt: 'What is "model cascading" or "tiered routing" in cost/latency optimization?',
    options: [
      { id: 'a', label: 'Using a small, fast, low-cost model (e.g. Flash/Haiku) for 80% of simple tasks, cascading to a large frontier model (e.g. Pro/Opus) only for complex reasoning.' },
      { id: 'b', label: 'Stacking physical servers vertically.' },
      { id: 'c', label: 'Running the same prompt on 100 models simultaneously.' },
      { id: 'd', label: 'Shutting down servers during lunch hours.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_05',
    section: 'growth',
    prompt: 'In LLM evaluation frameworks (e.g. Ragas, DeepEval), what does "faithfulness" measure?',
    options: [
      { id: 'a', label: 'The degree to which the generated answer is strictly supported by the retrieved context documents, without ungrounded factual hallucinations.' },
      { id: 'b', label: 'How polite the model sounds.' },
      { id: 'c', label: 'The length of the response.' },
      { id: 'd', label: 'The user\'s loyalty to the brand.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_06',
    section: 'growth',
    prompt: 'What is the primary trade-off when increasing temperature from 0.0 to 0.9 in an enterprise extraction pipeline?',
    options: [
      { id: 'a', label: 'Higher temperature increases output variance and hallucination likelihood, making strict schema extraction unreliable.' },
      { id: 'b', label: 'Higher temperature makes the server run hotter.' },
      { id: 'c', label: 'Higher temperature reduces token costs.' },
      { id: 'd', label: 'Higher temperature makes responses instantaneous.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_07',
    section: 'growth',
    prompt: 'How should a builder design a telemetry dashboard for monitoring a production LLM feature?',
    options: [
      { id: 'a', label: 'Track token usage, p50/p95/p99 latency, cost per user, schema parse failure rates, and user thumbs-up/down feedback.' },
      { id: 'b', label: 'Only monitor server power cords.' },
      { id: 'c', label: 'Count the total number of lines of code in the repository.' },
      { id: 'd', label: 'Check the dashboard once a year.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_08',
    section: 'growth',
    prompt: 'What is "A/B prompt testing" in production environments?',
    options: [
      { id: 'a', label: 'Splitting live user traffic between Prompt Variant A and Prompt Variant B to compare quantitative conversion, latency, and quality metrics.' },
      { id: 'b', label: 'Testing prompts in alphabetical order.' },
      { id: 'c', label: 'Testing only on Tuesdays.' },
      { id: 'd', label: 'Asking two friends which prompt looks cooler.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_09',
    section: 'growth',
    prompt: 'When fine-tuning a small open-weight model vs using prompt engineering with a frontier model, what is the key decision factor?',
    options: [
      { id: 'a', label: 'Fine-tuning excels at specialized formatting, latency/cost reduction, and privacy air-gaps; prompt engineering excels at broad reasoning, agility, and zero training overhead.' },
      { id: 'b', label: 'Fine-tuning is always cheaper and easier than prompt engineering.' },
      { id: 'c', label: 'Prompt engineering is only for non-engineers.' },
      { id: 'd', label: 'Open-weight models cannot read English.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_10',
    section: 'growth',
    prompt: 'What is the hallmark of a true Jnachi Builder?',
    options: [
      { id: 'a', label: 'The ability to design resilient, production-ready AI workflows from scratch, seamlessly connecting tools, managing state, and mitigating edge-case failures.' },
      { id: 'b', label: 'Copy-pasting generic ChatGPT answers into Slack.' },
      { id: 'c', label: 'Bragging about AI without building anything.' },
      { id: 'd', label: 'Memorizing prompt engineering slogans.' },
    ],
    correctOptionId: 'a',
  },
];
