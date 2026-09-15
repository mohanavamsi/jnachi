import { CertQuestion } from '../types';

export const PRACTITIONER_GROWTH_QUESTIONS: CertQuestion[] = [
  {
    id: 'prac_gro_01',
    section: 'growth',
    prompt: 'How can an AI practitioner use an LLM as a "Cognitive Sparring Partner" when preparing for a critical executive presentation?',
    options: [
      { id: 'a', label: 'Ask the model to agree with every slide enthusiastically to boost confidence.' },
      { id: 'b', label: 'Instruct the model to adopt the persona of a skeptical CFO, stress-test your assumptions, and challenge every financial metric with counter-arguments.' },
      { id: 'c', label: 'Have the model generate generic motivational quotes for the conclusion.' },
      { id: 'd', label: 'Copy-paste the slide deck into an email and distribute it unreviewed.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_gro_02',
    section: 'growth',
    prompt: 'When evaluating new third-party "AI tools" on the market, what is the best "anti-hype" evaluation filter?',
    options: [
      { id: 'a', label: 'Determine whether the tool is a thin wrapper over a basic system prompt, or if it provides defensible proprietary workflows, domain integrations, and data gravity.' },
      { id: 'b', label: 'Count how many times the word "revolutionary" appears in their marketing videos.' },
      { id: 'c', label: 'Choose whichever tool has the highest price tier and slickest landing page.' },
      { id: 'd', label: 'Pick whichever tool offers the highest referral commission.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_03',
    section: 'growth',
    prompt: 'How should a practitioner leverage multimodal vision models when debugging a complex UI/UX layout bug?',
    options: [
      { id: 'a', label: 'Type a 10-word vague description of the bug without uploading any visual assets.' },
      { id: 'b', label: 'Convert the website DOM into an audio file and ask the model to listen.' },
      { id: 'c', label: 'Provide screenshot of the broken UI alongside corresponding HTML/CSS code, asking the model to pinpoint CSS property conflicts causing the visual defect.' },
      { id: 'd', label: 'Ask the model to redesign the entire operating system.' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'prac_gro_04',
    section: 'growth',
    prompt: 'What is the hallmark of high "AI Momentum" in an organization?',
    options: [
      { id: 'a', label: 'Buying enterprise licenses that no team member ever logs into.' },
      { id: 'b', label: 'Issuing press releases about AI adoption while forbidding employees from using tools.' },
      { id: 'c', label: 'Replacing entire departments overnight without piloting or accuracy testing.' },
      { id: 'd', label: 'Teams actively integrate verified AI prompt patterns into daily workflows, measure time savings and quality improvements, and continuously share best practices.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'prac_gro_05',
    section: 'growth',
    prompt: 'When an AI model produces two contradictory answers in successive chat turns, how should a practitioner resolve the conflict?',
    options: [
      { id: 'a', label: 'Ask the model to isolate the underlying assumptions behind both conclusions, cite primary sources, and reconcile the logic against verified reference facts.' },
      { id: 'b', label: 'Select whichever response contains more complex technical vocabulary.' },
      { id: 'c', label: 'Assume the first response is always factually superior to the second.' },
      { id: 'd', label: 'Restart the browser and ignore the contradiction.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_06',
    section: 'growth',
    prompt: 'What is "calibration" in the context of human-AI collaboration?',
    options: [
      { id: 'a', label: 'Setting hardware display brightness and color temperature profiles.' },
      { id: 'b', label: 'Measuring average typing speed on external keyboards.' },
      { id: 'c', label: 'Synchronizing client server times across distributed database clusters.' },
      { id: 'd', label: 'Developing an accurate intuition for what types of cognitive tasks an LLM excels at vs where it is prone to hallucination, sycophancy, or failure.' },
    ],
    correctOptionId: 'd',
  },
  {
    id: 'prac_gro_07',
    section: 'growth',
    prompt: 'Why is "sycophancy" in LLMs a risk for strategic decision-making?',
    options: [
      { id: 'a', label: 'Models tend to agree with the user\'s leading hypotheses and confirm flawed biases rather than pointing out fatal logical gaps.' },
      { id: 'b', label: 'The model generates offensive remarks and refuses to follow instructions.' },
      { id: 'c', label: 'The model enters an unrecoverable infinite loop during output streaming.' },
      { id: 'd', label: 'The model doubles billing costs for strategic questions.' },
    ],
    correctOptionId: 'a',
  },
  {
    id: 'prac_gro_08',
    section: 'growth',
    prompt: 'How should a practitioner prompt an LLM to actively combat sycophancy and confirmational bias?',
    options: [
      { id: 'a', label: '"Tell me why my proposal is the most innovative solution ever created."' },
      { id: 'b', label: '"Summarize this idea in as agreeable and supportive a tone as possible."' },
      { id: 'c', label: '"Adopt a steel-man posture: independently critique this strategy, outline the 3 most probable failure modes, and provide counter-evidence."' },
      { id: 'd', label: '"Reassure the board that this plan has zero risks."' },
    ],
    correctOptionId: 'c',
  },
  {
    id: 'prac_gro_09',
    section: 'growth',
    prompt: 'When exploring an unfamiliar technical domain, how can an AI practitioner structure a 15-minute learning sprint?',
    options: [
      { id: 'a', label: 'Skim a 500-page academic textbook in 2 minutes without asking questions.' },
      { id: 'b', label: 'Request a foundational concept breakdown with analogies, follow up on the 3 core bottleneck mechanisms, and test comprehension with AI-generated quiz scenarios.' },
      { id: 'c', label: 'Instruct the model to do all domain thinking for you in the future.' },
      { id: 'd', label: 'Memorize random acronyms without understanding their underlying mechanisms.' },
    ],
    correctOptionId: 'b',
  },
  {
    id: 'prac_gro_10',
    section: 'growth',
    prompt: 'What distinguishes a true AI Practitioner from a casual AI user?',
    options: [
      { id: 'a', label: 'A Practitioner blindly accepts raw model outputs without validation.' },
      { id: 'b', label: 'A Practitioner only uses AI tools to generate social media memes.' },
      { id: 'c', label: 'A Practitioner designs repeatable, calibrated workflows, verifies critical outputs against ground truth, and treats AI as an amplifier of rigorous human judgment.' },
      { id: 'd', label: 'A Practitioner maintains the highest number of active software subscriptions.' },
    ],
    correctOptionId: 'c',
  },
];
