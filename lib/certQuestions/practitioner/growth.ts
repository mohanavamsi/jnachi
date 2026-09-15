import { CertQuestion } from '../types';

export const PRACTITIONER_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: 'prac_gro_01',
    section: 'growth',
    prompt: 'How can an AI practitioner use an LLM as a "Cognitive Sparring Partner" when preparing for a critical executive presentation?',
    options: [
      { id: 'a', label: 'Instruct the model to adopt the persona of a skeptical CFO, stress-test your assumptions, and challenge every financial metric with counter-arguments.' },
      { id: 'b', label: 'Ask the model to agree with every slide enthusiastically.' },
      { id: 'c', label: 'Have the model write generic praise.' },
      { id: 'd', label: 'Copy-paste the presentation into an email without review.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_02',
    section: 'growth',
    prompt: 'When evaluating new third-party "AI tools" on the market, what is the best "anti-hype" evaluation filter?',
    options: [
      { id: 'a', label: 'Determine whether the tool is a thin wrapper over a basic system prompt, or if it provides defensible proprietary workflows, domain integrations, and data gravity.' },
      { id: 'b', label: 'Count how many times the word "revolutionary" appears on their website.' },
      { id: 'c', label: 'Choose whichever tool has the flashiest logo animation.' },
      { id: 'd', label: 'Pick the most expensive tool automatically.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_03',
    section: 'growth',
    prompt: 'How should a practitioner leverage multimodal vision models when debugging a complex UI/UX layout bug?',
    options: [
      { id: 'a', label: 'Provide screenshot of the broken UI alongside corresponding HTML/CSS code, asking the model to pinpoint CSS property conflicts causing the visual defect.' },
      { id: 'b', label: 'Type a 10-word vague description without screenshots.' },
      { id: 'c', label: 'Take a photo of the monitor with a smartphone from 10 feet away.' },
      { id: 'd', label: 'Convert the image into audio and listen to it.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_04',
    section: 'growth',
    prompt: 'What is the hallmark of high "AI Momentum" in an organization?',
    options: [
      { id: 'a', label: 'Teams actively integrate verified AI prompt patterns into daily workflows, measure time savings and quality improvements, and continuously share best practices.' },
      { id: 'b', label: 'Buying enterprise licenses that no employee ever logs into.' },
      { id: 'c', label: 'Writing press releases about AI without using it.' },
      { id: 'd', label: 'Replacing all human employees overnight.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_05',
    section: 'growth',
    prompt: 'When an AI model produces two contradictory answers in successive chat turns, how should a practitioner resolve the conflict?',
    options: [
      { id: 'a', label: 'Ask the model to isolate the underlying assumptions behind both conclusions, cite primary sources, and reconcile the logic against verified reference facts.' },
      { id: 'b', label: 'Flip a coin to choose which answer to believe.' },
      { id: 'c', label: 'Always trust the longer answer.' },
      { id: 'd', label: 'Restart the computer.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_06',
    section: 'growth',
    prompt: 'What is "calibration" in the context of human-AI collaboration?',
    options: [
      { id: 'a', label: 'Developing an accurate intuition for what types of cognitive tasks an LLM excels at vs where it is prone to hallucination, sycophancy, or failure.' },
      { id: 'b', label: 'Adjusting monitor brightness settings.' },
      { id: 'c', label: 'Measuring typing speed on the keyboard.' },
      { id: 'd', label: 'Setting the computer clock to UTC.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_07',
    section: 'growth',
    prompt: 'Why is "sycophancy" in LLMs a risk for strategic decision-making?',
    options: [
      { id: 'a', label: 'Models tend to agree with the user\'s leading hypotheses and confirm flawed biases rather than pointing out fatal logical gaps.' },
      { id: 'b', label: 'The model becomes excessively rude and insulting.' },
      { id: 'c', label: 'The model refuses to generate text.' },
      { id: 'd', label: 'The model drains token credits twice as fast.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_08',
    section: 'growth',
    prompt: 'How should a practitioner prompt an LLM to actively combat sycophancy and confirmational bias?',
    options: [
      { id: 'a', label: '"Adopt a steel-man posture: independently critique this strategy, outline the 3 most probable failure modes, and provide counter-evidence."' },
      { id: 'b', label: '"Tell me why my idea is the greatest in company history."' },
      { id: 'c', label: '"Be nice and agreeable."' },
      { id: 'd', label: '"Generate 5 compliments about my plan."' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_09',
    section: 'growth',
    prompt: 'When exploring an unfamiliar technical domain, how can an AI practitioner structure a 15-minute learning sprint?',
    options: [
      { id: 'a', label: 'Request a foundational concept breakdown with analogies, follow up on the 3 core bottleneck mechanisms, and test comprehension with AI-generated quiz scenarios.' },
      { id: 'b', label: 'Skim a 500-page textbook in 2 minutes.' },
      { id: 'c', label: 'Ask the AI to do all future thinking for you.' },
      { id: 'd', label: 'Memorize random acronyms without definitions.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_10',
    section: 'growth',
    prompt: 'What distinguishes a true AI Practitioner from a casual AI user?',
    options: [
      { id: 'a', label: 'A Practitioner designs repeatable, calibrated workflows, verifies critical outputs against ground truth, and treats AI as an amplifier of rigorous human judgment.' },
      { id: 'b', label: 'A Practitioner blindly trusts raw model outputs without checking.' },
      { id: 'c', label: 'A Practitioner only uses AI to write social media memes.' },
      { id: 'd', label: 'A Practitioner owns the most expensive subscription tier.' },
    ],
    correctOptionId: 'a',
  },
];
