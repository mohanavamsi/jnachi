import { CertQuestion } from '../types';

export const ARCHITECT_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: 'mstr_auto_01',
    section: 'automation',
    prompt: 'In high-scale enterprise systems, what is the risk of "cascading AI failures" across deeply interconnected agent microservices?',
    options: [
      { id: 'a', label: 'An early agent\'s undetected hallucination or format mutation propagates through downstream automated tools, causing systemic data corruption or unintended transactions.' },
      { id: 'b', label: 'The office lights flickering.' },
      { id: 'c', label: 'Servers running out of paper.' },
      { id: 'd', label: 'All employees forgetting their passwords.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_02',
    section: 'automation',
    prompt: 'How should an AI Architect implement "Circuit Breakers" in autonomous multi-agent pipelines?',
    options: [
      { id: 'a', label: 'Automatic kill-switches that halt agent execution and alert human operators when anomaly thresholds (e.g. error rate > 5%, cost spike > $50/min, unexpected API loop) are triggered.' },
      { id: 'b', label: 'Physical fuse boxes in the office kitchen.' },
      { id: 'c', label: 'Deleting the codebase whenever an error occurs.' },
      { id: 'd', label: 'Turning off the building Wi-Fi.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_03',
    section: 'automation',
    prompt: 'What is "vendor lock-in mitigation" in enterprise AI infrastructure?',
    options: [
      { id: 'a', label: 'Abstracting model interactions behind a unified API interface layer (e.g. LiteLLM, LangChain/LlamaIndex providers) to allow swapping underlying model providers without rewriting business logic.' },
      { id: 'b', label: 'Signing 10-year exclusive contracts with a single vendor.' },
      { id: 'c', label: 'Never using any third-party software.' },
      { id: 'd', label: 'Locking server room doors with physical keys.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_04',
    section: 'automation',
    prompt: 'When evaluating the total cost of ownership (TCO) between building custom agent pipelines in-house vs buying a commercial SaaS AI platform, what factors matter most?',
    options: [
      { id: 'a', label: 'Maintenance overhead, integration complexity with core systems, proprietary data security, speed-to-market, and long-term differentiation vs commodity functionality.' },
      { id: 'b', label: 'Only the monthly software subscription fee on the invoice.' },
      { id: 'c', label: 'Whichever sales team gives the best free swag.' },
      { id: 'd', label: 'The number of slides in the vendor pitch deck.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_05',
    section: 'automation',
    prompt: 'How should an organization manage "Prompt Versioning & CI/CD" across distributed product teams?',
    options: [
      { id: 'a', label: 'Treat prompts as version-controlled code artifacts (Git), run automated regression evaluations in CI pipelines before deployment, and support instant rollbacks.' },
      { id: 'b', label: 'Edit production prompts directly in web console textareas without testing.' },
      { id: 'c', label: 'Store prompts in temporary chat windows.' },
      { id: 'd', label: 'Never update prompts once created.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_06',
    section: 'automation',
    prompt: 'What is the role of "Shadow Deployment" when introducing a major prompt or model upgrade in production?',
    options: [
      { id: 'a', label: 'Route real user traffic in parallel to the new model variant silently in the background, comparing its performance/latency against production without affecting live users.' },
      { id: 'b', label: 'Deploying software at midnight during a solar eclipse.' },
      { id: 'c', label: 'Hiding software releases from company executives.' },
      { id: 'd', label: 'Running servers in a dark room.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_07',
    section: 'automation',
    prompt: 'How does an Architect prevent "Context Window Bloat" from destroying pipeline economics in multi-turn customer sessions?',
    options: [
      { id: 'a', label: 'Implement structured hierarchical state compression: maintain a rolling high-density summary and key entity ledger rather than passing the raw transcript forever.' },
      { id: 'b', label: 'Cut off customer chats after 3 messages.' },
      { id: 'c', label: 'Ask the customer to pay per token in real-time.' },
      { id: 'd', label: 'Ignore token costs.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_08',
    section: 'automation',
    prompt: 'What is the primary operational challenge of running local on-premise open-weight LLM clusters compared to managed cloud APIs?',
    options: [
      { id: 'a', label: 'High upfront hardware capital expenditure, complex GPU driver/vLLM orchestration, scaling bottlenecks during traffic spikes, and ongoing maintenance overhead.' },
      { id: 'b', label: 'On-premise servers cannot connect to electricity.' },
      { id: 'c', label: 'Cloud APIs never experience outages.' },
      { id: 'd', label: 'Open-weight models cannot run on Linux.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_09',
    section: 'automation',
    prompt: 'In an autonomous agent architecture, why should tool execution logs be cryptographically signed or immutable?',
    options: [
      { id: 'a', label: 'Provides non-repudiable audit trails for compliance, security forensics, and legal accountability if an agent executes an unauthorized or erroneous state change.' },
      { id: 'b', label: 'Makes the log files look more colorful.' },
      { id: 'c', label: 'Compacts the log size by 99%.' },
      { id: 'd', label: 'Enables real-time video playback of the logs.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_10',
    section: 'automation',
    prompt: 'What is the primary indicator that an automated AI pipeline is ready for full production scale?',
    options: [
      { id: 'a', label: 'Consistent passing of automated regression evals, bounded worst-case latency/cost, graceful error fallbacks, and validated guardrails under peak synthetic loads.' },
      { id: 'b', label: 'It worked once without errors in a demo.' },
      { id: 'c', label: 'The marketing team published a press release.' },
      { id: 'd', label: 'The CEO liked the presentation.' },
    ],
    correctOptionId: 'a',
  },
];
