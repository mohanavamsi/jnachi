import { CertQuestion } from '../types';

export const BEGINNER_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: 'beg_gro_01',
    section: 'growth',
    prompt: 'How does using an AI as a "Cognitive Sparring Partner" differ from using it as a passive answer generator?',
    options: [
      { id: 'a', label: 'You prompt the model to challenge your logic, find blind spots in your plan, and play devil’s advocate rather than just agreeing with you.' },
      { id: 'b', label: 'You argue angrily with the bot until it apologizes.' },
      { id: 'c', label: 'You play text-based video games with the AI.' },
      { id: 'd', label: 'You let the AI make all personal life decisions for you.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_gro_02',
    section: 'growth',
    prompt: 'What is "Sycophancy" in AI assistants, and why is it dangerous for decision-making?',
    options: [
      { id: 'a', label: 'The tendency of models to overly agree with the user’s leading questions or biases, giving a false sense of validation to flawed ideas.' },
      { id: 'b', label: 'When the model becomes rude and aggressive.' },
      { id: 'c', label: 'When the model speaks only in rhymes.' },
      { id: 'd', label: 'A model running out of memory.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_gro_03',
    section: 'growth',
    prompt: 'When evaluating new AI tools, what is an effective "Anti-Hype Filter"?',
    options: [
      { id: 'a', label: 'Focusing on whether the tool actually solves a painful bottleneck in your workflow better/faster than a standard template, rather than marketing buzz.' },
      { id: 'b', label: 'Buying every new tool that launches on Product Hunt.' },
      { id: 'c', label: 'Refusing to use any software created after 2020.' },
      { id: 'd', label: 'Assuming all AI products are magic.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_gro_04',
    section: 'growth',
    prompt: 'How can multimodal AI (uploading screenshots, diagrams, photos) accelerate problem solving?',
    options: [
      { id: 'a', label: 'By allowing the AI to analyze complex visual data—like UI layout bugs, chart trends, or whiteboard sketches—without tedious manual transcription.' },
      { id: 'b', label: 'By increasing your monitor’s refresh rate.' },
      { id: 'c', label: 'By turning photos into video games.' },
      { id: 'd', label: 'Multimodal AI does not work with images.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_gro_05',
    section: 'growth',
    prompt: 'What is "calibration" in human-AI collaboration?',
    options: [
      { id: 'a', label: 'Developing accurate intuition for what tasks an AI excels at (summarizing, reformatting, brainstorming) vs where it struggles (complex math, strict citations).' },
      { id: 'b', label: 'Adjusting your mouse sensitivity.' },
      { id: 'c', label: 'Setting your computer clock to UTC.' },
      { id: 'd', label: 'Calibrating monitor color balance.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_gro_06',
    section: 'growth',
    prompt: 'When an AI model produces citations, numbers, or URLs, what is the mandatory professional rule?',
    options: [
      { id: 'a', label: 'Zero Trust Verification: Always independently verify facts, links, and calculation results before sharing or publishing.' },
      { id: 'b', label: 'Assume the AI is smarter than humans and never double-check.' },
      { id: 'c', label: 'Only check the first 2 words of the sentence.' },
      { id: 'd', label: 'Delete the citations to save space.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_gro_07',
    section: 'growth',
    prompt: 'What is the hallmark of high "AI Momentum"?',
    options: [
      { id: 'a', label: 'Regularly putting new AI prompt techniques and workflows into real practice, measuring time saved, and continuously refining your approach.' },
      { id: 'b', label: 'Reading AI news headlines without ever using an AI tool.' },
      { id: 'c', label: 'Purchasing 10 expensive software subscriptions you never open.' },
      { id: 'd', label: 'Letting an AI write your social media posts automatically.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_gro_08',
    section: 'growth',
    prompt: 'How should you prompt an AI when learning a completely unfamiliar, complex subject?',
    options: [
      { id: 'a', label: '"Explain this concept to me using simple real-world analogies, outline the 3 key principles, and test my understanding with 2 quiz questions."' },
      { id: 'b', label: '"Write 50,000 words of technical academic jargon."' },
      { id: 'c', label: '"Tell me everything."' },
      { id: 'd', label: '"Make me an expert in 1 second."' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_gro_09',
    section: 'growth',
    prompt: 'What is the Jnachi motto that guides all four competency tracks?',
    options: [
      { id: 'a', label: 'Know it. Use it. Prove it.' },
      { id: 'b', label: 'Hype it. Buy it. Forget it.' },
      { id: 'c', label: 'Prompt it. Trust it. Deploy it.' },
      { id: 'd', label: 'Automate everything blindly.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'beg_gro_10',
    section: 'growth',
    prompt: 'What distinguishes someone who has earned the Jnachi Beginner Certification?',
    options: [
      { id: 'a', label: 'They possess verified foundational fluency—knowing how to craft robust prompts, automate daily micro-tasks, safeguard sensitive data, and critically evaluate outputs.' },
      { id: 'b', label: 'They have memorized hundreds of buzzwords without ever opening an AI app.' },
      { id: 'c', label: 'They believe AI is capable of magic without human supervision.' },
      { id: 'd', label: 'They write the longest prompts possible.' },
    ],
    correctOptionId: 'a',
  },
];
