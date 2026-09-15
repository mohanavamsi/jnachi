import { CertQuestion } from '../types';

export const BUILDER_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: 'bld_gro_01',
    section: 'growth',
    prompt: 'When deciding whether to build a feature using LLM prompting vs deterministic code (regex, SQL, algorithms), what is the builder\'s primary rule?',
    options: [
      { id: 'a', label: 'Use deterministic code whenever mathematical precision, 100% predictability, or high-throughput low-latency is required; use LLMs for unstructured reasoning, extraction, and synthesis.' },
      { id: 'b', label: 'Always use LLMs for all application logic, including arithmetic and relational filtering.' },
      { id: 'c', label: 'Never integrate LLMs into software features under any circumstances.' },
      { id: 'd', label: 'Use LLMs strictly when latency constraints are under 5 milliseconds.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_02',
    section: 'growth',
    prompt: 'What is "synthetic data generation" and how can a builder use it to evaluate edge cases?',
    options: [
      { id: 'a', label: 'Fabricating user analytics data to inflate system usage metrics.' },
      { id: 'b', label: 'Using an LLM to generate diverse, realistic user prompts, adversarial attacks, and edge-case inputs to test the robustness of a production application.' },
      { id: 'c', label: 'Generating randomized binary noise to fill database storage quotas.' },
      { id: 'd', label: 'Automating marketing reviews for mobile app store rankings.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'bld_gro_03',
    section: 'growth',
    prompt: 'How does a builder calculate the Unit Economics (Cost per Transaction) of an AI pipeline?',
    options: [
      { id: 'a', label: 'The total capital expense of developer workstations divided by user count.' },
      { id: 'b', label: 'Dividing total annual software revenue by API token count.' },
      { id: 'c', label: 'Assuming third-party inference costs remain zero in production.' },
      { id: 'd', label: 'Sum of input/output token costs + vector search infrastructure + compute hosting + fallback latency overhead per user workflow run.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'bld_gro_04',
    section: 'growth',
    prompt: 'What is "model cascading" or "tiered routing" in cost/latency optimization?',
    options: [
      { id: 'a', label: 'Stacking physical servers vertically in the data center to improve cooling.' },
      { id: 'b', label: 'Executing the exact same prompt across 50 models simultaneously.' },
      { id: 'c', label: 'Using a small, fast, low-cost model (e.g. Flash/Haiku) for 80% of simple tasks, cascading to a large frontier model (e.g. Pro/Opus) only for complex reasoning.' },
      { id: 'd', label: 'Throttling server CPU clock rates during non-business hours.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'bld_gro_05',
    section: 'growth',
    prompt: 'In LLM evaluation frameworks (e.g. Ragas, DeepEval), what does "faithfulness" measure?',
    options: [
      { id: 'a', label: 'The degree to which the generated answer is strictly supported by the retrieved context documents, without ungrounded factual hallucinations.' },
      { id: 'b', label: 'The degree of polite and friendly phrasing in model conversational turns.' },
      { id: 'c', label: 'The total number of sentences produced in the final response.' },
      { id: 'd', label: 'The frequency of brand keyword mentions in generated text.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_06',
    section: 'growth',
    prompt: 'What is the primary trade-off when increasing temperature from 0.0 to 0.9 in an enterprise extraction pipeline?',
    options: [
      { id: 'a', label: 'Higher temperature reduces per-token inference billing costs.' },
      { id: 'b', label: 'Higher temperature accelerates inference latency by 50%.' },
      { id: 'c', label: 'Higher temperature forces strict adherence to JSON schemas.' },
      { id: 'd', label: 'Higher temperature increases output variance and hallucination likelihood, making strict schema extraction unreliable.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'bld_gro_07',
    section: 'growth',
    prompt: 'How should a builder design a telemetry dashboard for monitoring a production LLM feature?',
    options: [
      { id: 'a', label: 'Monitor only the total lines of source code in the git repository.' },
      { id: 'b', label: 'Track token usage, p50/p95/p99 latency, cost per user, schema parse failure rates, and user thumbs-up/down feedback.' },
      { id: 'c', label: 'Perform manual visual inspection of raw logs once every quarter.' },
      { id: 'd', label: 'Track only client browser window dimensions.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'bld_gro_08',
    section: 'growth',
    prompt: 'What is "A/B prompt testing" in production environments?',
    options: [
      { id: 'a', label: 'Sorting prompts in alphabetical order before execution.' },
      { id: 'b', label: 'Testing prompt variations exclusively on staging environments once per year.' },
      { id: 'c', label: 'Splitting live user traffic between Prompt Variant A and Prompt Variant B to compare quantitative conversion, latency, and quality metrics.' },
      { id: 'd', label: 'Asking team developers which prompt template has the most aesthetically pleasing typography.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'bld_gro_09',
    section: 'growth',
    prompt: 'When fine-tuning a small open-weight model vs using prompt engineering with a frontier model, what is the key decision factor?',
    options: [
      { id: 'a', label: 'Fine-tuning excels at specialized formatting, latency/cost reduction, and privacy air-gaps; prompt engineering excels at broad reasoning, agility, and zero training overhead.' },
      { id: 'b', label: 'Fine-tuning requires zero training data and zero computational resources.' },
      { id: 'c', label: 'Prompt engineering is only supported on legacy closed-source models.' },
      { id: 'd', label: 'Open-weight models cannot process structured JSON schema declarations.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'bld_gro_10',
    section: 'growth',
    prompt: 'What is the hallmark of a true Jnachi Builder?',
    options: [
      { id: 'a', label: 'Copying raw chatbot snippets into team chat channels without modification.' },
      { id: 'b', label: 'Memorizing marketing prompt buzzwords without writing functional code.' },
      { id: 'c', label: 'Relying exclusively on single-turn manual user interfaces for all enterprise workflows.' },
      { id: 'd', label: 'The ability to design resilient, production-ready AI workflows from scratch, seamlessly connecting tools, managing state, and mitigating edge-case failures.' },
    ],
    correctOptionId: 'd',
  },
];
