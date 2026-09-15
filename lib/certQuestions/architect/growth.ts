import { CertQuestion } from '../types';

export const ARCHITECT_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: 'mstr_gro_01',
    section: 'growth',
    prompt: 'What is the ultimate responsibility of a Jnachi Master (Architect) within an organization or community?',
    options: [
      { id: 'a', label: 'To lead with critical judgment—elevating team AI literacy, championing ethical and robust architectures, knowing when NOT to use AI, and unlocking sustainable human-AI momentum.' },
      { id: 'b', label: 'To replace all human employees with autonomous scripts regardless of performance.' },
      { id: 'c', label: 'To memorize the highest number of prompt templates without implementing systems.' },
      { id: 'd', label: 'To draft the longest system prompt strings possible.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_02',
    section: 'growth',
    prompt: 'How should an AI Architect design an ongoing continuous learning culture in a fast-evolving AI landscape?',
    options: [
      { id: 'a', label: 'Mandate that engineering teams read only 10-year-old textbooks.' },
      { id: 'b', label: 'Establish weekly practical hackathons, empirical benchmark reviews of new model capabilities, shared prompt repository audits, and cross-team knowledge sharing.' },
      { id: 'c', label: 'Prohibit all internal research into newly released open-weight model architectures.' },
      { id: 'd', label: 'Rely solely on marketing brochures from external commercial vendors.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'mstr_gro_03',
    section: 'growth',
    prompt: 'When an executive asks: "Can we replace our entire customer support staff with an LLM by next month?", what is the Master Architect\'s response?',
    options: [
      { id: 'a', label: '"Yes, let\'s terminate all customer support contracts immediately without testing."' },
      { id: 'b', label: '"No, AI will never be able to assist in customer support under any circumstance."' },
      { id: 'c', label: '"Let\'s purchase 10,000 servers before conducting any prompt testing."' },
      { id: 'd', label: 'Provide an evidence-based roadmap: start with human-in-the-loop agent copilot tooling, measure deflection vs escalation accuracy, establish guardrails, and scale incrementally based on data.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'mstr_gro_04',
    section: 'growth',
    prompt: 'How does an Architect evaluate whether an AI feature delivers genuine ROI vs superficial novelty?',
    options: [
      { id: 'a', label: 'Count the frequency of AI marketing buzzwords on promotional material.' },
      { id: 'b', label: 'Assume all generative features produce positive financial returns automatically.' },
      { id: 'c', label: 'Measure concrete business metrics: task completion velocity, error reduction rate, cost per resolved transaction, and net user satisfaction against the total operational expenditure.' },
      { id: 'd', label: 'Monitor social media impression counts exclusively.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'mstr_gro_05',
    section: 'growth',
    prompt: 'What is "model calibration drift" and how does an Architect detect it before it affects customers?',
    options: [
      { id: 'a', label: 'When the statistical distribution of real-world inputs shifts away from the validation dataset, causing confidence scores and accuracy to decouple; detected via continuous distribution monitoring.' },
      { id: 'b', label: 'When server hardware cooling fans run at lower RPM during winter.' },
      { id: 'c', label: 'When user input devices lose Bluetooth wireless connection.' },
      { id: 'd', label: 'When cloud billing tokens run out unexpectedly.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_06',
    section: 'growth',
    prompt: 'In high-reliability organizations, what is the concept of "Graceful Degradation" for AI systems?',
    options: [
      { id: 'a', label: 'The screen slowly fading to black upon network disconnection.' },
      { id: 'b', label: 'Erasing customer records gracefully to prevent database bloat.' },
      { id: 'c', label: 'Displaying decorative poetry to users during application crashes.' },
      { id: 'd', label: 'When AI models experience API timeouts or high error rates, the system seamlessly falls back to rule-based heuristics or manual human queues without crashing or losing user state.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'mstr_gro_07',
    section: 'growth',
    prompt: 'How should an AI Master handle disagreement among team members regarding which model provider to standardize on?',
    options: [
      { id: 'a', label: 'Select whichever vendor has the largest advertisement billboard.' },
      { id: 'b', label: 'Conduct an empirical bake-off using the team\'s specific domain test suite, comparing accuracy, latency, cost per 1k tokens, uptime SLA, and contract terms objectively.' },
      { id: 'c', label: 'Permit the most senior engineer to decide based solely on personal intuition.' },
      { id: 'd', label: 'Switch between model providers randomly on every HTTP request.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'mstr_gro_08',
    section: 'growth',
    prompt: 'Why is "Mentorship and Talent Uplift" a core pillar of the Jnachi Master Architect credential?',
    options: [
      { id: 'a', label: 'To hoard architectural knowledge within an isolated elite group.' },
      { id: 'b', label: 'To offload all implementation tasks to entry-level engineers.' },
      { id: 'c', label: 'True mastery is measured not just by individual skill, but by the ability to systematically elevate organizational capability, instill critical thinking, and build a high-momentum team.' },
      { id: 'd', label: 'To present executive keynotes without engaging in system design.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'mstr_gro_09',
    section: 'growth',
    prompt: 'What is the relationship between AI capability and human domain expertise?',
    options: [
      { id: 'a', label: 'AI acts as a cognitive lever: the deeper the human\'s domain expertise and critical discernment, the more transformative and effective the AI acceleration becomes.' },
      { id: 'b', label: 'AI eliminates the necessity for human domain expertise completely.' },
      { id: 'c', label: 'Deep human domain expertise impedes effective AI model reasoning.' },
      { id: 'd', label: 'Generative models perform optimally when configured by users with zero context.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_10',
    section: 'growth',
    prompt: 'What is the Jnachi motto that encapsulates the entire 4-tier journey?',
    options: [
      { id: 'a', label: 'Hype it. Buy it. Forget it.' },
      { id: 'b', label: 'Prompt it. Trust it. Deploy it.' },
      { id: 'c', label: 'Automate everything blindly.' },
      { id: 'd', label: 'Know it. Use it. Prove it.' },
    ],
    correctOptionId: 'd',
  },
];
