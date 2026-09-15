import { CertQuestion } from '../types';

export const ARCHITECT_AUTOMATION_QUESTIONS: CertQuestion[] = [
  {
    id: 'mstr_auto_01',
    section: 'automation',
    prompt: 'In high-scale enterprise systems, what is the risk of "cascading AI failures" across deeply interconnected agent microservices?',
    options: [
      { id: 'a', label: 'An early agent\'s undetected hallucination or format mutation propagates through downstream automated tools, causing systemic data corruption or unintended transactions.' },
      { id: 'b', label: 'Hardware cooling fans running at variable revolutions per minute.' },
      { id: 'c', label: 'Client web browsers resetting their theme settings.' },
      { id: 'd', label: 'Employees forgetting their single sign-on credentials.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_02',
    section: 'automation',
    prompt: 'How should an AI Architect implement "Circuit Breakers" in autonomous multi-agent pipelines?',
    options: [
      { id: 'a', label: 'Physical fuse boxes installed in workstation electrical outlets.' },
      { id: 'b', label: 'Erasing the git repository whenever a unit test fails in CI.' },
      { id: 'c', label: 'Permanently disconnecting internet access from the corporate campus.' },
      { id: 'd', label: 'Automatic kill-switches that halt agent execution and alert human operators when anomaly thresholds (e.g. error rate > 5%, cost spike > $50/min, unexpected API loop) are triggered.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'mstr_auto_03',
    section: 'automation',
    prompt: 'What is "vendor lock-in mitigation" in enterprise AI infrastructure?',
    options: [
      { id: 'a', label: 'Entering into 10-year exclusive enterprise licensing agreements with a single model vendor.' },
      { id: 'b', label: 'Abstracting model interactions behind a unified API interface layer (e.g. LiteLLM, LangChain/LlamaIndex providers) to allow swapping underlying model providers without rewriting business logic.' },
      { id: 'c', label: 'Refusing to use any third-party cloud infrastructure.' },
      { id: 'd', label: 'Locking server room doors with physical mechanical keys.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'mstr_auto_04',
    section: 'automation',
    prompt: 'When evaluating the total cost of ownership (TCO) between building custom agent pipelines in-house vs buying a commercial SaaS AI platform, what factors matter most?',
    options: [
      { id: 'a', label: 'Only the initial invoice price displayed on the vendor pricing webpage.' },
      { id: 'b', label: 'The number of animations on the vendor\'s landing page.' },
      { id: 'c', label: 'Maintenance overhead, integration complexity with core systems, proprietary data security, speed-to-market, and long-term differentiation vs commodity functionality.' },
      { id: 'd', label: 'The physical location of the vendor\'s headquarters.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'mstr_auto_05',
    section: 'automation',
    prompt: 'How should an organization manage "Prompt Versioning & CI/CD" across distributed product teams?',
    options: [
      { id: 'a', label: 'Treat prompts as version-controlled code artifacts (Git), run automated regression evaluations in CI pipelines before deployment, and support instant rollbacks.' },
      { id: 'b', label: 'Allow developers to modify production system prompts live in production web consoles.' },
      { id: 'c', label: 'Store system prompts exclusively in personal temporary browser tabs.' },
      { id: 'd', label: 'Freeze prompts permanently and forbid updates after the initial release.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_06',
    section: 'automation',
    prompt: 'What is the role of "Shadow Deployment" when introducing a major prompt or model upgrade in production?',
    options: [
      { id: 'a', label: 'Deploying software at night to reduce visibility among internal stakeholders.' },
      { id: 'b', label: 'Hiding release notes from executive leadership.' },
      { id: 'c', label: 'Running server instances with all monitor screens powered down.' },
      { id: 'd', label: 'Route real user traffic in parallel to the new model variant silently in the background, comparing its performance/latency against production without affecting live users.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'mstr_auto_07',
    section: 'automation',
    prompt: 'How does an Architect prevent "Context Window Bloat" from destroying pipeline economics in multi-turn customer sessions?',
    options: [
      { id: 'a', label: 'Terminating customer chat sessions unconditionally after 2 messages.' },
      { id: 'b', label: 'Implement structured hierarchical state compression: maintain a rolling high-density summary and key entity ledger rather than passing the raw transcript forever.' },
      { id: 'c', label: 'Requiring end-users to provide payment per token in real time.' },
      { id: 'd', label: 'Passing the full unbounded conversation history to the model on every single turn.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'mstr_auto_08',
    section: 'automation',
    prompt: 'What is the primary operational challenge of running local on-premise open-weight LLM clusters compared to managed cloud APIs?',
    options: [
      { id: 'a', label: 'Open-weight models cannot execute on Linux operating systems.' },
      { id: 'b', label: 'Local servers cannot establish standard TCP/IP network sockets.' },
      { id: 'c', label: 'High upfront hardware capital expenditure, complex GPU driver/vLLM orchestration, scaling bottlenecks during traffic spikes, and ongoing maintenance overhead.' },
      { id: 'd', label: 'Managed cloud APIs guarantee 100% zero latency under all worldwide traffic loads.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'mstr_auto_09',
    section: 'automation',
    prompt: 'In an autonomous agent architecture, why should tool execution logs be cryptographically signed or immutable?',
    options: [
      { id: 'a', label: 'Provides non-repudiable audit trails for compliance, security forensics, and legal accountability if an agent executes an unauthorized or erroneous state change.' },
      { id: 'b', label: 'Reduces database storage size by 99%.' },
      { id: 'c', label: 'Enables 3D graphical rendering of execution logs.' },
      { id: 'd', label: 'Converts log files automatically into encrypted audio tracks.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_auto_10',
    section: 'automation',
    prompt: 'What is the primary indicator that an automated AI pipeline is ready for full production scale?',
    options: [
      { id: 'a', label: 'The pipeline executed without errors during a single internal demo meeting.' },
      { id: 'b', label: 'The marketing department published an official press release.' },
      { id: 'c', label: 'Executive management approved the feature concept.' },
      { id: 'd', label: 'Consistent passing of automated regression evals, bounded worst-case latency/cost, graceful error fallbacks, and validated guardrails under peak synthetic loads.' },
    ],
    correctOptionId: 'd',
  },
];
