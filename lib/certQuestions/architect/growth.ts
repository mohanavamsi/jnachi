import { CertQuestion } from '../types';

export const ARCHITECT_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: 'mstr_gro_01',
    section: 'growth',
    prompt: 'What is the ultimate responsibility of a Jnachi Master (Architect) within an organization or community?',
    options: [
      { id: 'a', label: 'To lead with critical judgment—elevating team AI literacy, championing ethical and robust architectures, knowing when NOT to use AI, and unlocking sustainable human-AI momentum.' },
      { id: 'b', label: 'To replace all human coworkers with AI agents.' },
      { id: 'c', label: 'To memorize the most prompt keywords.' },
      { id: 'd', label: 'To write the longest prompts possible.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_02',
    section: 'growth',
    prompt: 'How should an AI Architect design an ongoing continuous learning culture in a fast-evolving AI landscape?',
    options: [
      { id: 'a', label: 'Establish weekly practical hackathons, empirical benchmark reviews of new model capabilities, shared prompt repository audits, and cross-team knowledge sharing.' },
      { id: 'b', label: 'Require everyone to read 10-year-old textbooks.' },
      { id: 'c', label: 'Ban all internal discussion about new technologies.' },
      { id: 'd', label: 'Rely solely on annual vendor webinars.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_03',
    section: 'growth',
    prompt: 'When an executive asks: "Can we replace our entire customer support staff with an LLM by next month?", what is the Master Architect\'s response?',
    options: [
      { id: 'a', label: 'Provide an evidence-based roadmap: start with human-in-the-loop agent copilot tooling, measure deflection vs escalation accuracy, establish guardrails, and scale incrementally based on data.' },
      { id: 'b', label: '"Yes, let\'s fire everyone tomorrow without testing."' },
      { id: 'c', label: '"No, AI will never be able to assist in customer support."' },
      { id: 'd', label: '"Let\'s buy 1,000 servers first."' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_04',
    section: 'growth',
    prompt: 'How does an Architect evaluate whether an AI feature delivers genuine ROI vs superficial novelty?',
    options: [
      { id: 'a', label: 'Measure concrete business metrics: task completion velocity, error reduction rate, cost per resolved transaction, and net user satisfaction against the total operational expenditure.' },
      { id: 'b', label: 'Check if the feature received likes on social media.' },
      { id: 'c', label: 'Assume all AI features are automatically profitable.' },
      { id: 'd', label: 'Count how many AI buzzwords are in the product description.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_05',
    section: 'growth',
    prompt: 'What is "model calibration drift" and how does an Architect detect it before it affects customers?',
    options: [
      { id: 'a', label: 'When the statistical distribution of real-world inputs shifts away from the validation dataset, causing confidence scores and accuracy to decouple; detected via continuous distribution monitoring.' },
      { id: 'b', label: 'When a model runs out of battery power.' },
      { id: 'c', label: 'When keyboard keys become sticky.' },
      { id: 'd', label: 'When server fans slow down.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_06',
    section: 'growth',
    prompt: 'In high-reliability organizations, what is the concept of "Graceful Degradation" for AI systems?',
    options: [
      { id: 'a', label: 'When AI models experience API timeouts or high error rates, the system seamlessly falls back to rule-based heuristics or manual human queues without crashing or losing user state.' },
      { id: 'b', label: 'The screen slowly fading to black.' },
      { id: 'c', label: 'Deleting data gracefully.' },
      { id: 'd', label: 'Displaying an apologetic poem to the user.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_07',
    section: 'growth',
    prompt: 'How should an AI Master handle disagreement among team members regarding which model provider to standardize on?',
    options: [
      { id: 'a', label: 'Conduct an empirical bake-off using the team\'s specific domain test suite, comparing accuracy, latency, cost per 1k tokens, uptime SLA, and contract terms objectively.' },
      { id: 'b', label: 'Pick whichever company has the biggest advertisement billboard.' },
      { id: 'c', label: 'Let the most senior person decide based on personal preference alone.' },
      { id: 'd', label: 'Switch model providers every day at random.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_08',
    section: 'growth',
    prompt: 'Why is "Mentorship and Talent Uplift" a core pillar of the Jnachi Master Architect credential?',
    options: [
      { id: 'a', label: 'True mastery is measured not just by individual skill, but by the ability to systematically elevate organizational capability, instill critical thinking, and build a high-momentum team.' },
      { id: 'b', label: 'To delegate all tedious work to junior developers.' },
      { id: 'c', label: 'To hoard technical knowledge exclusively.' },
      { id: 'd', label: 'To give speeches without ever writing code.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_09',
    section: 'growth',
    prompt: 'What is the relationship between AI capability and human domain expertise?',
    options: [
      { id: 'a', label: 'AI acts as a cognitive lever: the deeper the human\'s domain expertise and critical discernment, the more transformative and effective the AI acceleration becomes.' },
      { id: 'b', label: 'AI eliminates the need for any human domain expertise.' },
      { id: 'c', label: 'Human expertise is a hindrance to AI models.' },
      { id: 'd', label: 'AI models perform best when used by people with zero knowledge.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'mstr_gro_10',
    section: 'growth',
    prompt: 'What is the Jnachi motto that encapsulates the entire 4-tier journey?',
    options: [
      { id: 'a', label: 'Know it. Use it. Prove it.' },
      { id: 'b', label: 'Hype it. Buy it. Forget it.' },
      { id: 'c', label: 'Prompt it. Trust it. Deploy it.' },
      { id: 'd', label: 'Automate everything blindly.' },
    ],
    correctOptionId: 'a',
  },
];
