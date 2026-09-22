import { ENTERPRISE_INTEGRATION_LESSONS } from './lessons/enterpriseIntegration';
import { PYTHON_DEVELOPMENT_LESSONS } from './lessons/pythonDevelopment';
import { ROLE_SPECIFIC_LESSONS } from './lessons/roleSpecific';

export type LessonCategory = 
  | 'AI Literacy & Prompting'
  | 'Workflow Automation'
  | 'Data Privacy & Ethics'
  | 'Growth & Problem Solving'
  | 'Enterprise Integration'
  | 'Python Development'
  | 'Role-Specific AI';

export type CategoryKey = 'literacy' | 'automation' | 'privacy' | 'growth' | 'integration' | 'python' | 'role';

export type LessonDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: LessonCategory;
  categoryKey: CategoryKey;
  readTime: string;
  lessonNumber: number;
  difficulty?: LessonDifficulty;
  keyTakeaways?: string[];
  tools?: string[];
  relatedCertifications?: string[];
  estimatedPracticeTime?: string;
  prerequisites?: string[];
  updatedAt?: string;
  body: {
    intro: string;
    core: string;
    tryThis: string;
  };
  quiz: QuizQuestion[];
}

export const CATEGORY_DETAILS: Record<CategoryKey, { title: LessonCategory; description: string; color: string; bg: string }> = {
  literacy: {
    title: 'AI Literacy & Prompting',
    description: 'Master structure, context, personas, and output syntax to get predictable results.',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50 border-indigo-200',
  },
  automation: {
    title: 'Workflow Automation',
    description: 'Transform repetitive weekly micro-tasks into reusable pipelines and prompt templates.',
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-200',
  },
  privacy: {
    title: 'Data Privacy & Ethics',
    description: 'Navigate data retention, workplace policy, personal red lines, and confidential data safely.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-200',
  },
  growth: {
    title: 'Growth & Problem Solving',
    description: 'Use AI as a strategic sparring partner, deploy multimodal inputs, and cultivate sharp judgment.',
    color: 'text-purple-600',
    bg: 'bg-purple-50 border-purple-200',
  },
  integration: {
    title: 'Enterprise Integration',
    description: 'Master iPaaS platforms — MuleSoft, Boomi, IBM MQ, IBM ACE, and WebMethods — to design resilient enterprise integration architectures.',
    color: 'text-orange-600',
    bg: 'bg-orange-50 border-orange-200',
  },
  python: {
    title: 'Python Development',
    description: 'Build AI-powered applications, REST APIs, RAG pipelines, and agentic workflows using Python.',
    color: 'text-yellow-700',
    bg: 'bg-yellow-50 border-yellow-200',
  },
  role: {
    title: 'Role-Specific AI',
    description: 'Targeted AI productivity skills for Sales, Marketing, HR, Support, Managers, and Developers.',
    color: 'text-pink-600',
    bg: 'bg-pink-50 border-pink-200',
  },
};

export const LESSONS: Lesson[] = [
  // -------------------------------------------------------------
  // AI Literacy & Prompting
  // -------------------------------------------------------------
  {
    id: 'lesson-01',
    slug: 'anatomy-of-a-great-prompt',
    lessonNumber: 1,
    title: 'The Anatomy of a Great Prompt (role, context, deliverable, constraints)',
    description: 'Build reliable prompts using four core building blocks instead of vague queries.',
    category: 'AI Literacy & Prompting',
    categoryKey: 'literacy',
    readTime: '5 min read',
    difficulty: 'Beginner',
    keyTakeaways: [
      'Role anchors the model\'s perspective and professional vocabulary',
      'Context supplies raw material so the model does not guess',
      'Deliverable names the exact artifact — not just a vague task',
      'Constraints eliminate generic filler and narrow the probability space',
      'All four elements together produce repeatable, predictable outputs',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Mistral'],
    relatedCertifications: ['beginner', 'practitioner'],
    estimatedPracticeTime: '8 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'When prompts produce generic or unhelpful responses, the issue is almost never the model’s vocabulary—it is missing boundaries. Without explicit instructions on perspective and limits, an LLM defaults to the average response across its entire dataset. Structuring your request around four explicit components transforms unpredictable guessing into a repeatable tool.',
      core: `Every dependable prompt contains four core elements:

1. **Role:** Who the model is acting as. This sets tone, vocabulary level, and default assumptions.
   * *Example:* "Act as a senior operations manager reviewing internal documentation."
2. **Context:** The background facts necessary to understand the situation. Provide raw material, the audience, and why the task is happening.
   * *Example:* "Our customer support team is transitioning from email tickets to a live chat widget. Ticket volume is expected to double during daytime hours."
3. **Deliverable:** The exact artifact you want produced.
   * *Example:* "Write a 5-step triage checklist for incoming chat requests."
4. **Constraints:** Rules defining what the model must *not* do or must strictly adhere to (length, format, disallowed phrases, tone boundaries).
   * *Example:* "Keep each step to 2 sentences or fewer. Do not include introductory pleasantries or closing remarks. Avoid technical jargon."

### The Assembled Prompt in Practice

\`\`\`text
Role: Senior Customer Operations Lead
Context: Transitioning our support team from async email to real-time chat with 2x expected daytime volume.
Deliverable: 5-step checklist for prioritizing incoming conversations.
Constraints: Each step must be under 2 sentences. No conversational opening or closing filler. Use active verbs.
\`\`\`

When you assemble these four blocks, the model no longer has to guess what you meant or average out everyone else's ideas on the internet.`,
      tryThis: 'Take a prompt you ran recently that gave you an average or bland answer. Rewrite it on your screen right now by explicitly labeling the four headers (Role:, Context:, Deliverable:, Constraints:). Run both versions side by side in two tabs and compare the precision of the output.',
    },
    quiz: [
      {
        question: 'Why does adding negative constraints (e.g., "Do not include pleasantries") improve prompt results?',
        options: [
          'It speeds up the token generation rate on the server.',
          'It narrows the probability space and prevents the model from defaulting to generic conversational filler.',
          'It forces the model to search external databases for verified facts.',
          'It resets the model\'s memory for the current session.',
        ],
        correctIndex: 1,
        explanation: 'LLMs generate probable text based on prior patterns; negative constraints explicitly eliminate high-probability generic filler, focusing the output on the required substance.',
      },
      {
        question: 'In the four-part prompt framework, which element defines the exact artifact to create (e.g., table, email, checklist)?',
        options: [
          'Role',
          'Context',
          'Deliverable',
          'Constraints',
        ],
        correctIndex: 2,
        explanation: 'The Deliverable specifies the exact output format, asset type, and structural objective of the response.',
      },
      {
        question: 'What is the primary operational failure of a prompt like "Summarize this quarterly report"?',
        options: [
          'It lacks a specific role, audience context, and constraints on summary length or focus.',
          'It contains too many words for modern context windows.',
          'Large language models cannot process financial numbers without plugins.',
          'Words like "summarize" trigger defensive hallucination modes.',
        ],
        correctIndex: 0,
        explanation: 'Without specifying who the summary is for, what metrics matter, and length constraints, the model generates an arbitrary generic summary that may miss key priorities.',
      },
    ],
  },

  {
    id: 'lesson-02',
    slug: 'from-one-shot-to-iteration',
    lessonNumber: 2,
    title: 'From One-Shot to Iteration (why your first prompt is a draft, not a final answer)',
    description: 'Treat the first prompt as a conversation opener, steering subsequent outputs with targeted refinements.',
    category: 'AI Literacy & Prompting',
    categoryKey: 'literacy',
    readTime: '5 min read',
    difficulty: 'Beginner',
    prerequisites: ['anatomy-of-a-great-prompt'],
    keyTakeaways: [
      'Your first prompt is an anchor, not a final answer',
      'Phase 1 generates a baseline; Phase 2 critiques; Phase 3 polishes format',
      'Point to specific sections when requesting adjustments — never rewrite the full prompt',
      'Start a fresh thread when prior context contradicts new instructions',
      'Iteration is faster than crafting the perfect single-turn prompt upfront',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    relatedCertifications: ['beginner', 'practitioner'],
    estimatedPracticeTime: '10 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'Expecting an AI model to produce a publication-ready output on the very first prompt is the equivalent of expecting a human direct report to nail a complex proposal without a preliminary review. When you abandon single-turn expectations, you stop spending twenty minutes crafting an over-engineered first prompt. Real speed comes from fast initial framing followed by deliberate conversational calibration.',
      core: `Single-shot prompting fails because writing all specifications up front requires anticipating every misinterpretation. A multi-turn workflow moves in three distinct phases:

### Phase 1: Baseline Generation (The Anchor)
Give the core instructions, request an outline or initial structure, and let the model produce a starting point.
* *Prompt:* "Draft a 300-word announcement explaining that our software maintenance window is moving from Sunday night to Tuesday morning."

### Phase 2: Targeted Critique (The Pivot)
Do not re-type the original prompt. Point directly to what needs adjustment.
* *Follow-up:* "The tone is too defensive. Rewrite paragraph 2 to highlight that Tuesday morning coincides with our engineering team's active shift, which reduces outage duration."

### Phase 3: Formatting & Surface Polish
* *Follow-up:* "Convert the key schedule changes into a 2-column markdown table and bold the exact start time in UTC."

Iterating in the existing thread preserves context while allowing you to guide tone, emphasis, and structure incrementally.`,
      tryThis: 'Open an AI chat window. Request an outline for a project or email you need to send. When the answer appears, do not rewrite the initial prompt—give two specific critique bullets (e.g., "Make bullet 3 more concise" and "Add a sentence warning about deadline risks") to observe how quickly the draft conforms.',
    },
    quiz: [
      {
        question: 'What is the main advantage of iterative prompting over attempting a "perfect" single-turn prompt?',
        options: [
          'It uses fewer total API tokens across an entire project.',
          'It allows you to diagnose and adjust tone, structure, and depth in rapid increments rather than guessing every variable upfront.',
          'Models erase system memory if a first prompt exceeds 100 words.',
          'Multi-turn prompting automatically bypasses model temperature limits.',
        ],
        correctIndex: 1,
        explanation: 'Iterative prompting lets you inspect the model’s baseline interpretation and steer specific aspects directly without needing to anticipate every nuance in advance.',
      },
      {
        question: 'What is the best follow-up prompt when a model’s initial draft is too formal?',
        options: [
          'Delete everything and start over.',
          'Rewrite paragraphs 2 and 3 using a direct, collaborative tone, replacing passive voice with active verbs.',
          'Be more creative and innovative.',
          'Why did you make this so formal?',
        ],
        correctIndex: 1,
        explanation: 'Specific directional feedback identifying the exact sections and stylistic adjustments gives the model clear constraints to calibrate against.',
      },
      {
        question: 'When does it make sense to start a fresh chat thread rather than continuing to iterate?',
        options: [
          'Whenever a response has a single grammatical typo.',
          'After every 2 prompts.',
          'When the conversational context becomes polluted with contradictory instructions or irrelevant previous drafts.',
          'When you want the model to remember your previous document.',
        ],
        correctIndex: 2,
        explanation: 'Large language models attend to all prior text in the thread; when previous turns contain rejected approaches or conflicting guidance, starting fresh prevents context contamination.',
      },
    ],
  },

  {
    id: 'lesson-03',
    slug: 'spotting-ai-hallucinations',
    lessonNumber: 3,
    title: 'Spotting AI Hallucinations Before They Cost You (verification habits that actually work)',
    description: 'Develop practical verification routines to identify plausible-sounding fabrications before acting on them.',
    category: 'AI Literacy & Prompting',
    categoryKey: 'literacy',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    prerequisites: ['from-one-shot-to-iteration'],
    keyTakeaways: [
      'LLMs generate statistically probable text, not verified facts',
      'Citations, URLs, statistics, and legal references are highest-risk for hallucination',
      'Force source-grounding by pasting reference text directly into the prompt',
      'Use the "Quote It" rule: ask the model to cite the exact sentence justifying its claim',
      'Verify edges independently — three numbers in a paragraph means three individual checks',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity AI'],
    relatedCertifications: ['beginner', 'practitioner', 'builder'],
    estimatedPracticeTime: '12 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'AI models do not lie maliciously; they generate statistically probable sequences of words. When a fact is missing from their training or context window, the model bridges the gap with language that looks right, often in the same authoritative tone as factual statements. Treating AI text as an unverified draft rather than an authoritative source is the foundational safety habit of applied AI work.',
      core: `Hallucinations follow distinct patterns. They most commonly occur when models are asked to produce:
* Exact quotes, citations, legal case names, or ISBN numbers.
* Recent real-time data, specific package version compatibility in code, or granular statistics.
* Summaries of extremely long texts without reference source material provided in the prompt.

To systematically catch fabrications before they circulate:

1. **Force Source Grounding:** Never ask "What are the rules for EU VAT refunds on SaaS?" Instead, paste the official regulatory excerpt into the prompt and specify:
   \`\`\`text
   Extract the VAT requirements using only the provided text below.
   If the text does not explicitly state an answer, respond with:
   "Information not present in source."
   \`\`\`
2. **The "Quote It" Rule:** Ask the model to quote the exact sentence from your uploaded context that justifies its claim.
3. **Targeted Spot Checks:** Check the edges. Verify names, URLs, phone numbers, and figures independently. If a model generates three statistics, do not verify the paragraph—verify the three isolated numbers via primary search or documentation.`,
      tryThis: 'Ask an AI assistant to provide three published academic studies or industry whitepapers supporting a topic in your domain, including the authors, year, and paper title. Take one of the titles and search for it in Google Scholar or standard search. Notice whether the paper actually exists or if the model blended real author names with plausible-sounding paper titles.',
    },
    quiz: [
      {
        question: 'Why do AI models present fabricated citations or figures with high confidence?',
        options: [
          'The models are programmed to defend their conclusions under pressure.',
          'LLMs evaluate linguistic fluency and statistical likelihood, not objective truth or real-world verification.',
          'Fabrications only occur when models have low battery or server latency.',
          'The model actively cross-references Wikipedia and fills gaps with satire.',
        ],
        correctIndex: 1,
        explanation: 'LLMs generate sequences based on token probability rather than checking an internal truth database, meaning fabricated statements sound just as confident and fluent as verified facts.',
      },
      {
        question: 'Which prompt instruction is most effective at reducing hallucinations when analyzing a document?',
        options: [
          'Be completely truthful and do not make mistakes.',
          'Think very hard before answering.',
          'Use only the facts stated in the provided text. If the answer is not mentioned, state "Not found in source".',
          'Search the entire internet to verify this.',
        ],
        correctIndex: 2,
        explanation: 'Explicitly grounding the answer in provided context and giving the model permission to say "not found" removes the pressure to generate a plausible filler answer.',
      },
      {
        question: 'Which types of data are most susceptible to AI hallucinations?',
        options: [
          'General explanations of historical events like the Industrial Revolution.',
          'Specific URLs, legal case names, package version numbers, and paper citations.',
          'Translations between Spanish and English.',
          'Fiction story plot points.',
        ],
        correctIndex: 1,
        explanation: 'Granular, arbitrary alphanumeric strings and citations have low statistical redundancy across training corpora, making them prime candidates for plausible fabrication.',
      },
    ],
  },

  {
    id: 'lesson-04',
    slug: 'the-persona-pattern',
    lessonNumber: 4,
    title: 'The Persona Pattern (how assigning AI a role changes output quality)',
    description: 'Assign specific functional roles to unlock deeper perspective, vocabulary, and professional critique.',
    category: 'AI Literacy & Prompting',
    categoryKey: 'literacy',
    readTime: '5 min read',
    difficulty: 'Beginner',
    prerequisites: ['from-one-shot-to-iteration'],
    keyTakeaways: [
      'Vague personas produce buzzwords; strong personas define function, worldview, and priorities',
      'Specify what the persona cares about most (the metric or goal)',
      'Include what the persona actively looks for — skepticism and bias',
      'Define the vocabulary level and how practitioners at that level communicate',
      'An adversarial persona stress-tests proposals better than any review checklist',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Copilot'],
    relatedCertifications: ['beginner', 'practitioner', 'sales', 'marketers'],
    estimatedPracticeTime: '8 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'When you ask an AI model to "review this proposal," you will usually get surface-level grammar checks and polite encouragement. This happens because the model has no standard for critique. Assigning a sharp, defined persona gives the model an operational worldview, a distinct lens through which to evaluate information, and the vocabulary of a specialist.',
      core: `A weak persona is vague: *"Act as an expert marketer."* This produces buzzwords. A strong persona defines **function, worldview, and priorities**:

* **Perspective & Priority:** What metric or goal does this persona care about most?
* **Skepticism & Biases:** What flaws will this persona actively look for?
* **Tone & Vocabulary:** How do practitioners at this level speak to peers?

Compare these two framing methods:

* *Standard Prompt:* "Review this feature roadmap."
* *Persona Pattern:* "Act as a cynical B2B SaaS Chief Technology Officer focused entirely on technical debt and server scalability. Review this feature roadmap. Identify which 3 features pose the highest maintenance risk and explain why our engineering overhead could spike."

The second prompt suppresses generic cheerleading. It primes the model’s attention mechanism to search for vulnerabilities, edge cases, and architectural trade-offs.`,
      tryThis: 'Take an email, pitch, or memo you are working on. Paste it into an AI chat with this prompt: "Act as an impatient procurement director who has 90 seconds between meetings. Read this memo and list the top three reasons you would reject or delay this request." Review how the pointed critique highlights gaps you missed.',
    },
    quiz: [
      {
        question: 'What is the mechanical benefit of assigning a specific persona to an AI model?',
        options: [
          'It gives the AI access to proprietary private databases from that industry.',
          'It narrows the model’s attention to relevant professional terminology, specific priorities, and domain-appropriate critique criteria.',
          'It changes the underlying temperature parameter of the neural network.',
          'It enables the model to bypass standard word count limits.',
        ],
        correctIndex: 1,
        explanation: 'A persona acts as an attention filter, activating relevant vocabulary, industry concepts, and priority frameworks while suppressing generic, average responses.',
      },
      {
        question: 'Which persona prompt will produce the most actionable critique of a sales pitch?',
        options: [
          'Act as a helpful business expert.',
          'Act as an experienced VP of Enterprise Sales evaluating a junior rep\'s outbound pitch. Flag any unverified claims and identify where the call-to-action is too weak.',
          'You are a friendly assistant who loves marketing.',
          'Pretend you are Steve Jobs presenting on stage.',
        ],
        correctIndex: 1,
        explanation: 'Effective personas specify the role, the specific operational lens (enterprise sales critique), and concrete failure modes to hunt for (unverified claims, weak CTA).',
      },
      {
        question: 'How should you frame a persona prompt if you want to stress-test an internal policy?',
        options: [
          'Instruct the model to role-play as an employee attempting to find loopholes or ambiguities in the policy wording.',
          'Ask the model to confirm that the policy is legally sound.',
          'Tell the model to praise the clear writing of the HR department.',
          'Instruct the model to translate the policy into Latin.',
        ],
        correctIndex: 0,
        explanation: 'Setting an adversarial role (finding loopholes) directs the model to proactively simulate real-world stress tests rather than generating superficial affirmations.',
      },
    ],
  },

  {
    id: 'lesson-05',
    slug: 'prompting-for-format-not-just-content',
    lessonNumber: 5,
    title: 'Prompting for Format, Not Just Content (getting tables, structured lists, specific formats reliably)',
    description: 'Control layout, schema, and structure using precise markup specifications and templates.',
    category: 'AI Literacy & Prompting',
    categoryKey: 'literacy',
    readTime: '5 min read',
    difficulty: 'Beginner',
    prerequisites: ['anatomy-of-a-great-prompt'],
    keyTakeaways: [
      'Prescribe the exact output syntax, not just "make it organized"',
      'Define markdown table columns explicitly to get consistent structure',
      'One-shot schema examples constrain the model to match your pattern',
      'Use negative constraints like "no backticks" to get clean parseable output',
      'Machine-readable formats (JSON, CSV) enable direct integration into tools',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Copilot'],
    relatedCertifications: ['beginner', 'practitioner', 'builder'],
    estimatedPracticeTime: '10 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'Getting good information from an AI model is only half the battle; if it arrives as six meandering paragraphs, you still have to spend ten minutes extracting and reformatting the key takeaways. AI models are native processors of structured syntax. When you explicitly dictate the target output schema, you get clean, copy-paste-ready artifacts immediately.',
      core: `To get exact structural compliance, stop saying "make it organized" and instead prescribe the syntax:

### 1. Markdown Tables with Defined Columns
* *Directive:* "Present the comparison as a markdown table with four exact columns: \`Feature\`, \`Competitor A\`, \`Competitor B\`, and \`Jnachi Advantage\`."

### 2. Schema Modeling (One-Shot Examples)
Show the model an example of the pattern you want:
\`\`\`text
Format each identified bug using this exact template:
- [BUG-ID]: Short descriptive title
- Severity: [Critical | Moderate | Low]
- Root Cause: 1-sentence technical hypothesis
- Suggested Fix: Code or configuration change
\`\`\`

### 3. Machine-Readable Formats
When integrating into spreadsheets or software, request raw formats and explicitly suppress chat wrappers:
* *Directive:* "Output valid JSON with the schema \`{ \"tasks\": [{ \"title\": string, \"priority\": number, \"owner\": string }] }\`. Return raw JSON only—do not include markdown code ticks (\`\`\`), explanations, or introduction."

Specifying the structure also improves reasoning quality: when a model is constrained to fill a schema, it organizes thoughts chronologically and categorically.`,
      tryThis: 'Take raw meeting notes, a project update, or a jumbled paragraph of ideas. Ask your AI tool: "Convert this text into a 3-column markdown table with columns: Action Item, Responsible Party, and Urgency (High/Med/Low). If an owner is not mentioned, write \'Unassigned\'." Paste the text and watch it cleanly tabularize the data.',
    },
    quiz: [
      {
        question: 'What is the most reliable way to prevent a model from adding conversational text around a JSON output?',
        options: [
          'Ask politely: "Please don\'t talk to me."',
          'Include a negative constraint: "Output raw JSON only. Do not include markdown formatting, backticks, introduction, or post-analysis."',
          'Type the prompt in all capital letters.',
          'Run the prompt three times in a row.',
        ],
        correctIndex: 1,
        explanation: 'Clear negative constraints targeting markdown ticks and preamble specifically suppress the model’s default chat manners, returning clean parseable data.',
      },
      {
        question: 'Why does providing an explicit output template (e.g., - [Category]: [Action]) improve consistency?',
        options: [
          'It serves as a visual few-shot template that constrains the model\'s next-token probabilities to mirror the exact syntax.',
          'It unlocks hidden features reserved for enterprise accounts.',
          'It reduces the memory needed to store conversational history.',
          'It allows the model to calculate math faster.',
        ],
        correctIndex: 0,
        explanation: 'LLMs mimic structural patterns in their context window. Supplying a template restricts the format to match the demonstrated structure.',
      },
      {
        question: 'If you want to paste AI outputs directly into a spreadsheet, which format should you request?',
        options: [
          'Narrative paragraph format',
          'Markdown table or comma-separated values (CSV)',
          'Bulleted footnotes',
          'Python script output',
        ],
        correctIndex: 1,
        explanation: 'Markdown tables and CSV structures paste cleanly into Excel, Google Sheets, and Notion databases without requiring manual row-by-row reformatting.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Workflow Automation
  // -------------------------------------------------------------
  {
    id: 'lesson-06',
    slug: 'finding-your-first-automation-win',
    lessonNumber: 6,
    title: 'Finding Your First Automation Win (auditing repetitive weekly tasks worth handing to AI)',
    description: 'Identify high-frequency, low-variability weekly tasks ideal for immediate AI delegation.',
    category: 'Workflow Automation',
    categoryKey: 'automation',
    readTime: '5 min read',
    difficulty: 'Beginner',
    keyTakeaways: [
      'Automate tasks with structured input, predictable transformation, and low consequence for an imperfect first pass',
      'The "Human Copy-Paste Audit" reveals prime automation candidates in your own calendar',
      'Start with micro-tasks (15–30 min weekly) not complex milestones',
      'An 85% correct first draft still saves substantial manual effort',
      'Automation thrives on consistent rules — not high-nuance judgment calls',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Zapier', 'Make.com'],
    relatedCertifications: ['beginner', 'practitioner', 'automation'],
    estimatedPracticeTime: '8 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'Most people stall on workflow automation because they attempt to automate large, complex milestones like "marketing strategy" or "quarterly planning." High-impact automation actually starts with unglamorous, repetitive micro-tasks that consume 15–30 minutes several times a week. Pinpointing where predictable text transformation happens in your schedule is the fastest path to sustainable time reclamation.',
      core: `An automation-ready task meets three specific criteria:

1. **Structured Input:** The raw material arrives in a consistent format (e.g., call transcripts, raw survey responses, customer emails, weekly bullet points from teammates).
2. **Predictable Transformation:** The processing rules do not change drastically each time (e.g., extract action items, categorize complaints by product area, convert technical notes into client-facing bullets).
3. **Low Consequence of an Imperfect First Pass:** A draft that is 85% correct still saves substantial manual effort because you only need to review and polish, rather than generate from scratch.

### The Human Copy-Paste Audit

Review your calendar and sent items from the past two weeks. Look for instances where you engaged in "human copy-pasting"—reading information in one place, summarizing or reformatting it, and pasting it somewhere else.

* **Poor candidate:** "Write a sensitive performance review for a struggling direct report" (high nuance, variable context, high emotional stakes).
* **Prime candidate:** "Convert our 45-minute sprint retro transcript into a 5-bullet summary with assigned action items and post it to Slack" (structured input, consistent output rules, high manual friction).`,
      tryThis: 'Open your calendar or sent email folder right now. Identify one task you performed at least twice this week that involved reformatting, summarizing, or drafting standard responses. Write down the input source, the transformation steps, and the target format in two sentences. That is your candidate for automation.',
    },
    quiz: [
      {
        question: 'Which task characteristics make an activity ideal for an early AI automation win?',
        options: [
          'High strategic ambiguity, high emotional sensitivity, and zero input data.',
          'Consistent input data, repeatable transformation rules, and low penalty for needing minor human review.',
          'Any task that requires signing legal contracts on behalf of an enterprise.',
          'Tasks that happen only once every two years.',
        ],
        correctIndex: 1,
        explanation: 'Reliable automation thrives on structured inputs and consistent rules where an 80–90% complete first pass provides immediate time savings.',
      },
      {
        question: 'Why is "writing an overall product strategy" a poor candidate for initial automation?',
        options: [
          'Models cannot write sentences longer than 15 words.',
          'It requires cross-organizational political alignment, deep institutional intuition, and strategic trade-offs that lack structured rules.',
          'AI tools refuse to generate business plans.',
          'Strategic planning is banned by most AI safety filters.',
        ],
        correctIndex: 1,
        explanation: 'High-level strategy lacks standard rules and clear input-to-output pipelines, making it an ineffective choice for dependable automation compared to discrete operational processes.',
      },
      {
        question: 'What is the primary metric of a successful micro-automation?',
        options: [
          'Eliminating human review entirely from day one.',
          'Reducing the manual friction of generating an initial draft or structure from raw information.',
          'Forcing the entire team to adopt new proprietary programming languages.',
          'Generating at least 5,000 words per output.',
        ],
        correctIndex: 1,
        explanation: 'The goal of micro-automation is turning a 30-minute manual creation task into a 3-minute review-and-edit task.',
      },
    ],
  },

  {
    id: 'lesson-07',
    slug: 'building-a-prompt-library',
    lessonNumber: 7,
    title: 'Building a Prompt Library (saved templates so you stop starting from scratch)',
    description: 'Store modular, parameter-driven prompt templates to standardize repetitive professional tasks across your team.',
    category: 'Workflow Automation',
    categoryKey: 'automation',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    prerequisites: ['finding-your-first-automation-win'],
    keyTakeaways: [
      'Templates use variable slots so instructions stay fixed while raw material changes',
      'Three components: System Objective, Variable Slots, and Execution Trigger',
      'Wrap dynamic inputs in delimiters (triple quotes) to prevent prompt injection',
      'Store templates in tools with near-zero retrieval friction (text expanders, pinned notes)',
      'A reusable template turns a 20-min prompt crafting session into a 30-second paste-and-go',
    ],
    tools: ['ChatGPT', 'Claude', 'Notion', 'Raycast', 'TextExpander'],
    relatedCertifications: ['beginner', 'practitioner'],
    estimatedPracticeTime: '12 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'Typing fresh, off-the-cuff prompts for recurring tasks is like writing a fresh Python script every time you want to calculate a monthly budget. If you find yourself typing instructions like "summarize this clearly, don\'t use buzzwords, and make bullet points" more than once a week, you are wasting operational momentum. A prompt library turns ad-hoc chat sessions into standardized, repeatable internal tooling.',
      core: `A durable prompt template uses **variables** (placeholders inside brackets like \`[INPUT_DATA]\`) so the instructions stay fixed while the raw material changes.

A standard template contains three permanent components:
1. **System Objective & Rules:** The static guidelines, role, and formatting rules that never change.
2. **Variable Slots:** Explicitly demarcated inputs where you paste new content each time.
3. **Execution Trigger:** Clear boundaries telling the model to process only what is inside the delimiter.

### Example Template: Customer Feedback Categorizer

\`\`\`text
Role: Senior Quality Analyst.
Task: Analyze the customer feedback review provided below in [RAW_REVIEW].
Output: Return a 3-part breakdown:
1. Primary Complaint Category: [Billing | UX | Latency | Account Access]
2. Sentiment Severity: [Low | Medium | Critical]
3. 1-Sentence Executive Summary for Product Engineering.

Constraint: If the feedback is ambiguous, tag as 'Unclassified' and list the missing detail.

[RAW_REVIEW]:
"""
{{PASTE_CUSTOMER_FEEDBACK_HERE}}
"""
\`\`\`

Store these templates where you already work—in a pinned Notion page, Apple Notes, Obsidian, a GitHub repo, or your team’s snippet manager (like Raycast, Alfred, or TextExpander).`,
      tryThis: 'Choose one recurring writing or analytical task you do weekly. Create a dedicated note titled "Prompt Library" in your primary note-taking app. Draft a template using [ROLE], [RULES], and {{INPUT}} variables. Save it with a keyboard shortcut or pinned bookmark so it takes under 3 seconds to access.',
    },
    quiz: [
      {
        question: 'What makes a prompt template reusable across different weeks or team members?',
        options: [
          'Writing the prompt in all lowercase letters so it fits anywhere.',
          'Separating static instructions, roles, and constraints from dynamic input variables using distinct placeholders.',
          'Removing all constraints to allow the model maximum creative freedom.',
          'Keeping the prompt under 10 total words.',
        ],
        correctIndex: 1,
        explanation: 'Parameterizing prompts with variables allows you to reuse verified formatting constraints and role directions without re-typing them each time.',
      },
      {
        question: 'Why should you wrap dynamic input variables in delimiters like triple quotes (\"\"\") or markdown blocks?',
        options: [
          'It prevents the model from mistaking user-pasted text for system instructions or prompt injections.',
          'It reduces the cost per token on third-party APIs.',
          'It speeds up the internet connection between your browser and the model.',
          'Delimiters automatically translate the text into foreign languages.',
        ],
        correctIndex: 0,
        explanation: 'Clear delimiters establish boundaries, ensuring the model treats the pasted text purely as data to process rather than conflicting instructions.',
      },
      {
        question: 'Where is the most effective place to store a personal or team prompt library?',
        options: [
          'Scattered across individual closed browser tabs.',
          'Inside accessible, searchable everyday tools (e.g., text expansion shortcuts, pinned team wiki docs, or note managers).',
          'Hand-written in a physical paper notebook.',
          'Only inside the memory of one specific browser extension.',
        ],
        correctIndex: 1,
        explanation: 'A prompt library is only activated if the friction to retrieve and populate the template is virtually zero in your everyday workflow.',
      },
    ],
  },

  {
    id: 'lesson-08',
    slug: 'chaining-ai-tasks-together',
    lessonNumber: 8,
    title: 'Chaining AI Tasks Together (turning a multi-step process into one workflow)',
    description: 'Break complex projects into sequential prompts where the output of step one feeds step two.',
    category: 'Workflow Automation',
    categoryKey: 'automation',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    prerequisites: ['building-a-prompt-library'],
    keyTakeaways: [
      'Each step in a chain has one job: extract, evaluate, or format',
      'Human checkpoints between steps catch errors before they compound',
      'Step 1 should always be pure extraction — never suggest solutions yet',
      'Passing intermediate output as input dramatically improves reasoning depth',
      'Chaining enables quality at each milestone rather than hoping one mega-prompt succeeds',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Zapier'],
    relatedCertifications: ['practitioner', 'builder'],
    estimatedPracticeTime: '15 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'When you ask an AI model to take raw customer interview notes, synthesize the findings, draft a roadmap proposal, and format an executive update all in a single prompt, the result is usually shallow. The model attempts to balance too many cognitive objectives simultaneously, leading to diluted reasoning. Chaining solves this by breaking the project into sequential, bite-sized stages where the output of one step becomes the structured input for the next.',
      core: `In prompt chaining, you manage quality at the checkpoints. Each step has one job:

### Step 1: Extract & Cleanse (Data Normalization)
* *Input:* 5 pages of messy meeting transcripts.
* *Prompt:* "Extract all explicit feature requests, bug mentions, and user pain points from this transcript. Output as a bulleted list categorized by user role. Do not suggest solutions yet."
* *Checkpoint:* Scan the list. Remove duplicate points or irrelevant banter.

### Step 2: Prioritize & Group (Analytical Synthesis)
* *Input:* The cleaned bulleted list from Step 1.
* *Prompt:* "Group these extracted points into 3 thematic problem areas. Rank them by frequency and potential business impact."
* *Checkpoint:* Confirm the thematic grouping reflects your product intuition.

### Step 3: Executive Communication (Deliverable Creation)
* *Input:* The ranked problem areas from Step 2.
* *Prompt:* "Draft a 250-word Slack update to engineering leadership outlining these three prioritized problem areas and proposing our next discovery sprint."

By checking the work between steps, you catch misinterpretations early before they corrupt the final communication.`,
      tryThis: 'Take a long article or internal doc. Run Step 1: "Extract the top 5 arguments from this text as standalone bullets." Once returned, immediately run Step 2 in the same thread: "For each of those 5 arguments, write one counter-argument from the perspective of an industry competitor." Notice how separating extraction from counter-analysis produces sharper depth.',
    },
    quiz: [
      {
        question: 'Why does prompt chaining produce higher quality results than a single mega-prompt?',
        options: [
          'It allows the model to concentrate its reasoning capacity on one specific task (extraction, evaluation, or formatting) at each stage.',
          'It resets the model\'s training weights between messages.',
          'Single prompts are limited to 50 characters in modern browsers.',
          'Chaining is required by law for enterprise data compliance.',
        ],
        correctIndex: 0,
        explanation: 'Multi-step chaining isolates cognitive goals, preventing the model from diluting its attention across competing instructions like simultaneous extraction, prioritization, and tone management.',
      },
      {
        question: 'What is the primary role of the human operator in a manual prompt chain?',
        options: [
          'Retyping every single word manually.',
          'Inspecting and verifying the intermediate output at each checkpoint before passing it to the next prompt.',
          'Refreshing the webpage after every response.',
          'Disabling the model\'s internet access between steps.',
        ],
        correctIndex: 1,
        explanation: 'The human operator provides quality control at intermediate milestones, steering or correcting outputs so errors do not compound down the line.',
      },
      {
        question: 'In a chain designed to turn customer interviews into bug tickets, what should Step 1 focus on?',
        options: [
          'Drafting final executive compensation plans.',
          'Pure extraction and categorization of mentions without premature solution drafting.',
          'Formatting data into HTML landing pages.',
          'Writing legal disclaimers for customers.',
        ],
        correctIndex: 1,
        explanation: 'Good pipelines start with objective data extraction and normalization before moving into analytical synthesis or creative drafting.',
      },
    ],
  },

  {
    id: 'lesson-09',
    slug: 'ai-as-a-first-draft-machine',
    lessonNumber: 9,
    title: 'AI as a First Draft Machine (using AI to eliminate the blank page, not the final decision)',
    description: 'Use AI to generate working clay quickly while reserving judgment and final edits for yourself.',
    category: 'Workflow Automation',
    categoryKey: 'automation',
    readTime: '5 min read',
    difficulty: 'Beginner',
    prerequisites: ['finding-your-first-automation-win'],
    keyTakeaways: [
      'AI generates working clay; you are the editor, not the typist',
      'Provide messy bullet dumps — AI structures them, you refine the result',
      'AI responsibility: rapid structure and generation; Your responsibility: judgment and verification',
      'Blank page resistance drops to near-zero when you have a rough draft to critique',
      'Never copy-paste AI draft directly — always step into the editor chair',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Notion AI'],
    relatedCertifications: ['beginner', 'practitioner'],
    estimatedPracticeTime: '10 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'The psychological friction of starting from a blank page is where projects lose the most time. Staring at an empty white screen invites hesitation, procrastination, and premature editing. When you shift your mental model of AI from an "oracle that gives final answers" to a "first draft machine that generates raw clay," your workflow accelerates dramatically.',
      core: `A first draft does not need to be perfect; it simply needs to exist so you have something tangible to critique, reshape, and refine.

### The Division of Labor

* **AI’s Responsibility (Generation & Assembly):** Rapidly structuring arguments, generating alternative angles, drafting boilerplate transitions, and laying down 500 words of initial structure in 10 seconds.
* **Your Responsibility (Judgment & Verification):** Fact-checking specific claims, injecting personal or institutional context, pruning corporate clichés, and ensuring the strategic intent aligns with reality.

### The 2-Step Protocol

1. **Provide the messy bullet dump:** Dictate or type 6 disjointed ideas into the prompt without worrying about punctuation.
   * *Prompt:* "Here are my rough notes on our Q3 onboarding changes: [messy notes]. Organize these into a structured memo draft with headings for Background, Proposed Changes, and Next Steps. Do not invent new facts—work strictly with what I provided."
2. **Step into the Editor Chair:** When the text generates, do not copy-paste it directly to its final destination. Open your document, paste it, and aggressively edit: delete the generic fluff, sharpen the verbs, and ensure your specific voice leads the narrative.`,
      tryThis: 'Think of an email, brief, or message you have been putting off writing today. Open your voice memos or an AI chat, ramble your unorganized thoughts into text for 60 seconds (or type raw fragments), and add: "Turn these unedited notes into a clean first-pass draft of an email. Keep it under 150 words." Experience how much easier editing a rough draft is compared to starting from scratch.',
    },
    quiz: [
      {
        question: 'What is the psychological advantage of using AI as a "first draft machine"?',
        options: [
          'You never have to read or review the text before sending it to clients.',
          'It eliminates the cognitive resistance of the blank page, shifting your role from creator to editor.',
          'The AI guarantees that every fact and date is automatically verified.',
          'It proves that human writing is no longer necessary in business.',
        ],
        correctIndex: 1,
        explanation: 'Moving from a blank screen to a concrete draft lowers friction; editing and refining working text requires far less activation energy than generating from scratch.',
      },
      {
        question: 'Which part of the writing process should never be outsourced entirely to an AI model?',
        options: [
          'Correcting punctuation mistakes.',
          'Generating candidate headlines or section titles.',
          'Final verification of facts, institutional alignment, and ultimate responsibility for the communication.',
          'Transforming raw bullet points into standard paragraphs.',
        ],
        correctIndex: 2,
        explanation: 'The human operator remains accountable for the accuracy, strategic nuance, and real-world consequences of the final deliverable.',
      },
      {
        question: 'How does a "rough notes dump" prompt prevent AI from writing generic fluff?',
        options: [
          'By instructing the model to work strictly from your provided bullet points and disallowing the invention of unstated facts.',
          'By using exclamation marks throughout the prompt.',
          'By limiting the model to one syllable per word.',
          'By asking the model to write like a college professor.',
        ],
        correctIndex: 0,
        explanation: 'Grounding the draft in your raw, proprietary notes and setting explicit boundaries prevents the model from substituting generic internet tropes.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Data Privacy & Ethics
  // -------------------------------------------------------------
  {
    id: 'lesson-10',
    slug: 'what-happens-to-the-data-you-paste',
    lessonNumber: 10,
    title: 'What Actually Happens to the Data You Paste (training vs. session data, explained plainly)',
    description: 'Understand the technical difference between model training data and transient session memory to protect your information.',
    category: 'Data Privacy & Ethics',
    categoryKey: 'privacy',
    readTime: '5 min read',
    difficulty: 'Beginner',
    keyTakeaways: [
      'Session context is transient working memory — it does not persist after the conversation ends',
      'Consumer-tier prompts may be logged and used to train future model versions',
      'Enterprise/API tiers process data in isolated environments with no training rights granted',
      'Check the Data Controls toggle in settings to see if your account is opted into model training',
      'A Data Processing Agreement (DPA) is the legal guarantee of enterprise data isolation',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot'],
    relatedCertifications: ['beginner', 'practitioner'],
    estimatedPracticeTime: '8 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'When you paste text into an AI chat box, that information is not broadcast to the public immediately, but neither is it a private vault by default. Confusion between what a model holds in memory during your conversation versus what it absorbs into future model updates causes both unnecessary paranoia and reckless data leakage. Knowing the clear technical boundary between session context and training data gives you complete control over your inputs.',
      core: `Every time you interact with an AI model, your data travels along two distinct paths:

1. **Session Context (Transient Working Memory):**
   * This is the active memory window used strictly to formulate the immediate answer in your current thread.
   * When you paste a project outline, the model references those tokens to generate the next response. Once the conversation ends or exceeds its context limit, the model’s active computation forgets that specific instance.
2. **Model Training Pipelines (Long-term Absorption):**
   * On default free or standard consumer tiers, providers log user prompts and completions to retrain or fine-tune future model generations.
   * If proprietary source code, internal salary figures, or customer records enter a training pipeline, fragments of that data can be generalized and surfaced in response to another user’s prompt months later.

### Account Type Differences

* **Consumer Default:** Prompts may be reviewed by human contractors for safety auditing and used to train future foundation models.
* **Enterprise / API / Opt-Out:** Data is processed in an isolated runtime environment with zero training rights granted to the provider, governed by a Data Processing Agreement (DPA).`,
      tryThis: 'Open your primary AI tool’s Settings menu right now. Navigate to the Data Controls or Privacy tab. Look for the toggle labeled "Improve the model for everyone" or "Model Training." Check whether your current account is opted in or out of model training data logging.',
    },
    quiz: [
      {
        question: 'What does it mean when a provider uses your prompt data for "model training"?',
        options: [
          'A human customer service representative reads your prompt in real time over video.',
          'Your inputs and completions are stored in datasets used to adjust future model weights, potentially surfacing in future outputs.',
          'Your computer’s local processor is used to run calculations for other users.',
          'Your account is automatically upgraded to an enterprise plan.',
        ],
        correctIndex: 1,
        explanation: 'Model training incorporates logged user prompts into datasets for iterative model updates, meaning data points can become embedded in the model’s learned associations.',
      },
      {
        question: 'How does "session context" differ from "training data"?',
        options: [
          'Session context is permanent; training data is deleted after 5 minutes.',
          'Session context is temporary working memory used to construct immediate responses; training data alters the model\'s underlying permanent weights.',
          'Session context only accepts numbers, while training data only accepts letters.',
          'There is no technical difference between the two concepts.',
        ],
        correctIndex: 1,
        explanation: 'Session context functions like active RAM during a conversation, whereas training data is baked into the neural network during retraining cycles.',
      },
      {
        question: 'Under standard commercial API agreements or enterprise plans, what is the typical default policy regarding customer prompt data?',
        options: [
          'All inputs are posted to a public bulletin board.',
          'Data is processed in an isolated environment and excluded from model training by default.',
          'Providers sell prompt transcripts to advertising networks.',
          'Prompts are deleted after exactly 3 seconds.',
        ],
        correctIndex: 1,
        explanation: 'Enterprise agreements and commercial APIs generally include strict zero-training clauses and data processing agreements ensuring customer data is never used to train foundation models.',
      },
    ],
  },

  {
    id: 'lesson-11',
    slug: 'setting-your-personal-red-lines',
    lessonNumber: 11,
    title: 'Setting Your Personal Red Lines (deciding what never goes into a public model)',
    description: 'Establish clear, non-negotiable boundaries for sensitive data before interacting with consumer AI tools.',
    category: 'Data Privacy & Ethics',
    categoryKey: 'privacy',
    readTime: '5 min read',
    difficulty: 'Beginner',
    keyTakeaways: [
      'A personal red line is a categorical rule with zero exceptions',
      'The 4 red lines: PII, credentials/keys, unreleased financials, and core IP',
      'Anonymization lets you use AI for sensitive tasks without exposing actual data',
      'Replace names and IDs with generic placeholders like [Customer A] before prompting',
      'Pre-deciding your boundaries turns data security into an automatic reflex, not a judgment call',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    relatedCertifications: ['beginner', 'practitioner'],
    estimatedPracticeTime: '8 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'When you are in the middle of a busy workday trying to finish a deck or debug a problem, you do not have time to conduct a 10-point legal analysis before every prompt. Without pre-decided personal boundaries, convenience wins and sensitive data eventually slips through. Setting clear, simple red lines turns data security from an anxious guessing game into an automatic reflex.',
      core: `A personal red line is a categorical rule: if an input touches this category, it never enters an unverified or consumer AI model—no exceptions.

### The Four Non-Negotiable Red Lines

1. **Personally Identifiable Information (PII) & Customer Data:** Full names paired with emails, phone numbers, home addresses, Social Security numbers, health records, or financial account details.
2. **Authentication Credentials & System Secrets:** API keys, database passwords, private server addresses, SSH keys, or session tokens.
3. **Non-Public Financial & Strategic Data:** Unreleased earnings figures, internal acquisition discussions, unannounced layoffs, or confidential pitch decks under strict NDA.
4. **Proprietary Core Intellectual Property:** Novel patent claims, trade secrets, or core proprietary algorithmic logic that forms your company's competitive moat.

### The Anonymization Workaround

You can often still use AI for these tasks by **abstracting the entity**:
* *Unsafe Prompt:* "Here is Jane Doe’s annual performance review at Acme Corp including her $140k salary: [text]."
* *Safe Prompt:* "Here is an anonymized review for an unnamed Senior Software Engineer at a mid-stage tech company: [sanitized text]."`,
      tryThis: 'Write down your personal "Never-Paste Checklist" on a sticky note or digital memo with these 4 items: No PII, No Passwords/Keys, No Unreleased Financials, No Core IP. Keep it visible next to your monitor so it serves as a reflex check before you press enter.',
    },
    quiz: [
      {
        question: 'Which of the following is considered safe to paste into a standard consumer AI model?',
        options: [
          'An internal export of customer emails and payment records for churn analysis.',
          'An API secret key to ask why an authorization header is returning a 401 error.',
          'An anonymized list of customer feature requests where all names and company identifiers have been stripped.',
          'An unannounced financial press release 24 hours before market open.',
        ],
        correctIndex: 2,
        explanation: 'Anonymizing data by removing identifiers and private details allows you to leverage AI’s pattern recognition without risking data leakage.',
      },
      {
        question: 'Why should database passwords or API keys never be pasted into an AI prompt, even for troubleshooting?',
        options: [
          'AI models will automatically log into your server and delete tables.',
          'Credentials could be stored in plaintext prompt logs, reviewed by third-party human evaluators, or captured in training datasets.',
          'Large language models cannot understand alphanumeric strings that contain punctuation.',
          'It triggers an immediate operating system reboot.',
        ],
        correctIndex: 1,
        explanation: 'Prompt logs are stored on external servers and may be reviewed by auditors or ingested into training corpora, creating direct credential exposure.',
      },
      {
        question: 'What is the best way to get AI assistance on a sensitive customer dispute email without violating privacy?',
        options: [
          'Paste the raw email and tell the AI: "Keep this secret."',
          'Replace customer names, order numbers, and specific transaction amounts with generic placeholders like [Customer A] and [Product X] before prompting.',
          'Type the prompt backwards so the AI has to decode it.',
          'Delete your browser history immediately after sending the prompt.',
        ],
        correctIndex: 1,
        explanation: 'Instructing an AI to "keep a secret" has zero legal or technical enforcement; true protection requires redacting or generalizing the sensitive identifiers beforehand.',
      },
    ],
  },

  {
    id: 'lesson-12',
    slug: 'zero-data-retention-and-enterprise-settings',
    lessonNumber: 12,
    title: 'Zero-Data-Retention and Enterprise Settings, Explained (what these options actually control)',
    description: 'Decode enterprise security controls, data retention windows, and privacy compliance standards in plain English.',
    category: 'Data Privacy & Ethics',
    categoryKey: 'privacy',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    prerequisites: ['what-happens-to-the-data-you-paste'],
    keyTakeaways: [
      'Zero Data Retention (ZDR) means prompts are processed in RAM and never written to disk',
      'No-Training Default legally bars the vendor from using your data to improve models',
      'A DPA is a binding contract making the vendor a processor, not an owner, of your data',
      'SOC 2 Type II confirms third-party auditors have verified internal access controls',
      'TLS (in-transit) + AES-256 (at-rest) encryption together form the full data protection stack',
    ],
    tools: ['ChatGPT Enterprise', 'Claude Teams', 'Microsoft Copilot', 'Google Workspace AI'],
    relatedCertifications: ['practitioner', 'builder'],
    estimatedPracticeTime: '10 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'Enterprise software sales pages are full of security acronyms—ZDR, SOC 2, HIPAA compliance, encryption at rest, and DPA agreements. If you don\'t know what these terms actually guarantee, it is easy to assume you are protected when you aren\'t, or conversely, to block safe AI tools out of fear. Understanding zero-data-retention and enterprise tiers allows you to evaluate software based on real technical controls.',
      core: `Here is what enterprise AI privacy settings actually control under the hood:

### 1. Zero Data Retention (ZDR)
* *What it means:* The AI vendor processes your request entirely in volatile memory (RAM). Once the completion tokens are delivered back to your screen, the prompt and output are wiped from the vendor's persistent disks.
* *Why it matters:* Even in the event of a vendor database breach, your raw prompts do not exist on their servers to be leaked.

### 2. Exclusion from Model Training (No-Training Default)
The provider legally and architecturally guarantees that your inputs, outputs, and uploaded documents will never be used to train, tune, or improve future models for other customers.

### 3. Data Processing Agreements (DPA) & SOC 2 Type II
* A DPA is a legally binding contract establishing that the vendor acts strictly as a data processor on your organization’s behalf, adhering to frameworks like GDPR or CCPA.
* SOC 2 Type II certification confirms that independent third-party auditors have inspected their internal access controls, verifying that employees cannot arbitrarily view user logs.

### 4. Encryption (At-Rest vs. In-Transit)
* *In-Transit (TLS):* Protects your prompts from being intercepted while traveling over the internet between your laptop and their servers.
* *At-Rest (AES-256):* Ensures that any stored data (like your chat history) is encrypted on physical storage drives.`,
      tryThis: 'Go to the documentation or settings page of your team’s primary AI vendor (or review your company’s workspace settings). Search for the term "Data Retention" or "DPA". Note whether data is retained for 30 days for abuse monitoring, wiped under Zero Data Retention, or stored indefinitely in chat logs.',
    },
    quiz: [
      {
        question: 'What does a "Zero Data Retention" (ZDR) policy guarantee?',
        options: [
          'The AI provider deletes your account after 24 hours of inactivity.',
          'Prompts and completions are processed in memory and are not stored on the provider\'s persistent storage disks once generated.',
          'The user is not allowed to save chat history on their local browser.',
          'You are billed zero dollars for any data sent over the network.',
        ],
        correctIndex: 1,
        explanation: 'Zero Data Retention ensures that the provider does not retain logs of your prompts or completions on disk once the request has been served.',
      },
      {
        question: 'What is the primary purpose of a Data Processing Agreement (DPA)?',
        options: [
          'To guarantee that the AI model will never make a factual error.',
          'To legally bind the software vendor to handle organizational data in compliance with privacy regulations like GDPR without sharing or repurposing it.',
          'To speed up prompt processing by routing traffic through specialized servers.',
          'To grant the AI vendor full ownership of all creative writing produced by the user.',
        ],
        correctIndex: 1,
        explanation: 'A DPA is a contractual agreement that legally defines the vendor as a processor, restricting how they handle, protect, and dispose of your data.',
      },
      {
        question: 'Why does standard in-transit encryption (TLS) alone not guarantee full privacy against model training?',
        options: [
          'TLS only protects data during transmission between your browser and the server; once it reaches the server, the provider can still log and train on unencrypted data unless opted out.',
          'TLS is an outdated standard from the 1990s that is easily hacked.',
          'TLS only works if your computer is plugged into an ethernet cable.',
          'Encryption prevents AI models from reading the text.',
        ],
        correctIndex: 0,
        explanation: 'In-transit encryption prevents outside eavesdroppers from intercepting network traffic, but once the data reaches the provider\'s servers, internal data policies determine whether it is logged or trained on.',
      },
    ],
  },

  {
    id: 'lesson-13',
    slug: 'ai-at-work-without-the-legal-headache',
    lessonNumber: 13,
    title: 'AI at Work Without the Legal Headache (company policy basics every employee should know)',
    description: 'Navigate workplace AI policies safely, staying compliant while maximizing personal productivity.',
    category: 'Data Privacy & Ethics',
    categoryKey: 'privacy',
    readTime: '5 min read',
    difficulty: 'Beginner',
    keyTakeaways: [
      'Only use tools that have passed your organization\'s vendor security review',
      'Client NDA agreements can make unauthorized AI tool use a breach of contract',
      'AI-generated content cannot always be copyrighted — humans must own final work products',
      '"Shadow AI" use in personal accounts bypasses corporate compliance and creates career risk',
      'Proactively asking IT for approved tools frames you as a responsible leader, not a risk',
    ],
    tools: ['ChatGPT Enterprise', 'Microsoft Copilot', 'Google Workspace AI'],
    relatedCertifications: ['beginner', 'practitioner'],
    estimatedPracticeTime: '10 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'Many professionals use AI in secret because their organization either has a vague, restrictive policy or no clear guidelines at all. This "shadow AI" habit creates severe career and legal risks—not because using AI is inherently bad, but because unauthorized tools bypass corporate compliance. Knowing how corporate governance actually evaluates AI use allows you to work openly, safely, and with organizational support.',
      core: `Company AI policies are built around three core legal and operational pillars:

### 1. Approved Tooling (The Sandbox)
Most enterprise IT departments forbid pasting work materials into personal, free-tier accounts because those accounts lack enterprise data protections.
* *The rule:* Only use tools that have passed your organization’s vendor security review, or use tools provisioned through your corporate SSO login.

### 2. Client Confidentiality & External Disclosure
If your company signs contracts with clients agreeing not to share their data with third-party software vendors, pasting their materials into an unapproved AI tool can constitute a breach of contract.
* *The rule:* If an engagement is governed by a strict client NDA, treat AI tools as third-party subcontractors: do not share client materials without explicit authorization.

### 3. Intellectual Property & Attribution
In many jurisdictions, raw AI-generated content cannot be copyrighted, and using AI outputs directly in client-facing deliverables without review can expose companies to plagiarism or licensing disputes.
* *The rule:* AI should assist with analysis, structuring, and early drafts, but a human must review, modify, and take ownership of the final work product.

When in doubt, initiate transparency: ask your IT or legal team, *"What is our approved enterprise environment for generative AI tasks?"* Approaching them proactively frames you as a responsible leader rather than an unguided compliance risk.`,
      tryThis: 'Look up your company’s employee handbook or IT security policy on your internal wiki. Search for "Artificial Intelligence," "LLM," or "Acceptable Use Policy." If one exists, read the approved tools section; if none exists, make a note to restrict your work prompts strictly to anonymized, non-sensitive tasks.',
    },
    quiz: [
      {
        question: 'Why do corporate IT departments frequently ban the use of personal, free-tier AI accounts for work tasks?',
        options: [
          'Free accounts do not include company branding on the UI.',
          'Personal accounts typically lack enterprise Data Processing Agreements and may use company data for public model training.',
          'Free accounts consume more office Wi-Fi bandwidth than corporate accounts.',
          'Personal accounts are legally required to notify all company competitors.',
        ],
        correctIndex: 1,
        explanation: 'Personal accounts do not carry organizational data protections, SOC 2 compliance, or zero-training agreements, creating legal and security exposure.',
      },
      {
        question: 'What is the legal risk of pasting client materials into an unauthorized AI tool when operating under a strict client NDA?',
        options: [
          'The AI tool will automatically bill the client directly.',
          'It can violate the non-disclosure agreement by transferring confidential client information to an unapproved third-party vendor.',
          'The client loses ownership of their company trademark immediately.',
          'It triggers an automatic government audit.',
        ],
        correctIndex: 1,
        explanation: 'Sending client data to third-party servers without approval can breach contractual confidentiality agreements, resulting in legal liability.',
      },
      {
        question: 'What is the safest professional approach if your organization currently has no formal AI policy?',
        options: [
          'Stop using all computers entirely.',
          'Use personal AI accounts for top-secret files without telling anyone.',
          'Stick to public, non-proprietary information and anonymize all business context until formal corporate tooling is sanctioned.',
          'Publish internal financial spreadsheets on open AI forums to test them.',
        ],
        correctIndex: 2,
        explanation: 'Anonymizing inputs and avoiding proprietary, secret, or PII data allows you to utilize AI for generic drafting and problem-solving without violating baseline confidentiality obligations.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Growth & Problem Solving
  // -------------------------------------------------------------
  {
    id: 'lesson-14',
    slug: 'using-ai-as-a-thinking-partner',
    lessonNumber: 14,
    title: 'Using AI as a Thinking Partner, Not Just a Task-Doer (moving from completion to collaboration)',
    description: 'Shift from transactional task execution to collaborative sparring, blind-spot identification, and strategic stress-testing.',
    category: 'Growth & Problem Solving',
    categoryKey: 'growth',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    keyTakeaways: [
      'AI\'s greatest capability is cognitive sparring, not just task execution',
      'Premortem prompts overcome optimism bias by assuming failure upfront',
      'Socratic prompts (ask me diagnostic questions) surface implicit assumptions before you commit',
      'Alternative perspective simulation reveals stakeholder objections before the meeting',
      'Steel-manning opposing views ensures your position is truly defensible',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini'],
    relatedCertifications: ['practitioner', 'builder', 'strategist'],
    estimatedPracticeTime: '15 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'Most people treat AI purely as a clerical task-doer: "Summarize this," "Draft this email," or "Fix this code." While this saves time on surface execution, it leaves the model\'s greatest capability untapped: cognitive sparring. When you use AI to challenge your reasoning, surface unexamined assumptions, and explore second-order consequences, your decision-making sharpens before you commit resources.',
      core: `Collaborative thinking requires changing how you prompt: instead of asking for answers, you ask for friction, counter-arguments, and diagnostic questions.

Four high-leverage thinking partner patterns:

### 1. The Devil’s Advocate (Premortem Analysis)
* Don't ask: *"Is this a good launch plan?"*
* Ask: *"Assume our product launch has failed completely six months from now. Write an internal post-mortem detailing the top 3 blind spots, operational bottlenecks, or customer friction points that caused this failure."*

### 2. The Socratic Sparring Partner
Instead of accepting advice, instruct the model to interrogate you:
* *Directive:* *"I want to refine our pricing model from flat-rate to usage-based. Do not give me a pricing plan yet. Ask me 3 challenging diagnostic questions about our customer retention and server costs to help me identify where this could backfire."*

### 3. Alternative Perspective Simulation
Run your logic past stakeholder lenses before presenting in a meeting:
* *Directive:* *"Read this proposal from two distinct perspectives: a skeptical Chief Financial Officer worried about cash flow, and an overworked Customer Success Manager worried about onboarding volume. List their primary objections."*

### 4. Steel-Manning Opposing Views
Before entering a negotiation or debate, ask the model to construct the strongest possible version of your counterpart’s argument. If you cannot dismantle the steel-man, your position is not ready.`,
      tryThis: 'Take a project decision or strategic idea you are considering this week. Prompt an AI assistant: "Here is my hypothesis: [insert your idea]. Point out the 3 weakest assumptions in this thinking and suggest 2 alternative ways to solve the underlying problem." Spend two minutes reviewing where your reasoning was fragile.',
    },
    quiz: [
      {
        question: 'What is the fundamental difference between using AI as a "task-doer" versus a "thinking partner"?',
        options: [
          'Task-doers run on desktop computers, while thinking partners only run on mobile phones.',
          'Task-doers perform linear, transactional commands (e.g., reformatting text), while thinking partners provide iterative critique, challenge assumptions, and simulate counter-arguments.',
          'Thinking partners do not require internet access to operate.',
          'Task-doers use more API tokens per minute.',
        ],
        correctIndex: 1,
        explanation: 'A thinking partner is an interactive sounding board that stress-tests logic and reveals blind spots, whereas a task-doer performs straightforward operational execution.',
      },
      {
        question: 'Why is a "premortem" prompt (assuming a project has already failed) so effective?',
        options: [
          'It triggers the model\'s error-handling protocols.',
          'It overcomes conversational optimism bias and primes the model to actively hunt for operational flaws and hidden failure modes.',
          'It deletes all previous project files from memory.',
          'It allows the model to predict the stock market.',
        ],
        correctIndex: 1,
        explanation: 'Directing the model to assume a post-failure state removes generic positivity and focuses analysis on structural risks, blind spots, and vulnerabilities.',
      },
      {
        question: 'How does asking the AI to "interview you with diagnostic questions" improve your final strategy?',
        options: [
          'It makes the AI do all the typing for you.',
          'It forces you to articulate implicit assumptions and fill gaps in your thinking before you commit resources.',
          'It automatically drafts a slide deck in the background.',
          'It bypasses your company\'s security firewall.',
        ],
        correctIndex: 1,
        explanation: 'Answering targeted diagnostic questions surfaces unexamined premises and clarifies trade-offs in your own mental model before execution.',
      },
    ],
  },

  {
    id: 'lesson-15',
    slug: 'trying-multimodal-features-on-purpose',
    lessonNumber: 15,
    title: 'Trying Multimodal Features on Purpose (voice, image, and document inputs beyond plain text)',
    description: 'Expand beyond text prompts by integrating voice dictation, whiteboard screenshots, UI audits, and multi-page PDFs.',
    category: 'Growth & Problem Solving',
    categoryKey: 'growth',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    prerequisites: ['using-ai-as-a-thinking-partner'],
    keyTakeaways: [
      'Speaking is ~3x faster than typing — use voice for unfiltered brain dumps',
      'Screenshots communicate spatial, visual, and layout information that text cannot',
      'Upload full PDFs to cross-reference across sections rather than copy-pasting excerpts',
      'Multimodal prompts eliminate hours of manual transcription of whiteboards and diagrams',
      'Error code screenshots beat typed descriptions for debugging — the model sees the exact syntax',
    ],
    tools: ['ChatGPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'Copilot'],
    relatedCertifications: ['practitioner', 'builder'],
    estimatedPracticeTime: '12 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'When most people get stuck on a problem, they type long, exhaustive paragraphs into a chat window trying to describe a visual layout, a handwritten diagram, or a complex spreadsheet. This is the slowest possible way to communicate context. Modern multimodal models can see, hear, and parse visual relationships natively. Using image and voice inputs directly bypasses hours of manual transcription and explanation.',
      core: `Multimodality means using the right sensory medium for the information you possess:

### 1. Visual Synthesis (Screenshots & Diagrams)
* *Whiteboard to Jira:* Take a phone snapshot of a messy whiteboard brainstorm from a conference room. Prompt: *"Extract all sticky notes and grouped themes into a prioritized markdown backlog with suggested task owners."*
* *UI/UX Critique:* Take a screenshot of a live web page or Figma mockup. Prompt: *"Analyze this landing page layout. Flag where visual hierarchy is broken, where text contrast fails accessibility standards, and where the primary call to action gets lost."*
* *Error Code Diagnosis:* Screenshot a terminal error, software stack trace, or messy Excel formula error rather than typing out the syntax manually.

### 2. Voice Interaction (Unfiltered Brain Dumps)
Speaking is roughly 3x faster than typing. Use real-time voice mode when walking or between meetings to ramble unstructured thoughts.
* *Voice Prompt:* *"I’m going to talk through our team's hiring priorities for 3 minutes without filtering. Listen to everything I say, filter out the tangents, and return a clean 1-page job specification."*

### 3. Dense Document Grounding
Instead of copying and pasting sections, upload full PDFs (technical manuals, vendor contracts, academic papers). Use the model to cross-reference between distinct sections:
* *Directive:* *"Compare section 4.2's termination clause with the indemnity obligations in Appendix B."*`,
      tryThis: 'Take a photo or screenshot of something visual right now—a slide from a presentation, a messy desk whiteboard, a handwritten note, or an app screen. Upload it to your AI tool and ask: "Explain what this is showing, identify the 2 most important elements, and suggest one way to improve its clarity."',
    },
    quiz: [
      {
        question: 'When is uploading a screenshot superior to typing a text description into an AI prompt?',
        options: [
          'When you want to save battery life on your laptop.',
          'When communicating spatial relationships, user interface layouts, handwritten notes, or complex error logs that are tedious to transcribe.',
          'Only when you have a high-speed fiber internet connection.',
          'Screenshots are never better than plain text.',
        ],
        correctIndex: 1,
        explanation: 'Visual models process spatial arrangement, typographical hierarchy, and visual elements directly, eliminating the friction and inaccuracy of manual text descriptions.',
      },
      {
        question: 'What is the primary operational benefit of using voice input modes with AI assistants?',
        options: [
          'Voice prompts are legally exempt from data privacy laws.',
          'It allows you to rapidly externalize unpolished, complex thoughts at conversational speed, letting the model structure the raw material.',
          'The AI speaks with a more authentic human accent.',
          'Models run faster when processing audio files.',
        ],
        correctIndex: 1,
        explanation: 'Speaking allows rapid cognitive offloading; you can dump unstructured context in minutes and have the model synthesize and organize it.',
      },
      {
        question: 'Which task demonstrates effective use of document-based multimodal prompting?',
        options: [
          'Asking the model to write a fictional sci-fi novel about computers.',
          'Uploading a 40-page vendor contract and asking the model to pinpoint discrepancies between the payment terms on page 8 and the penalty terms on page 34.',
          'Uploading an audio song file and asking the model to play it through your speakers.',
          'Asking the model what year the internet was invented.',
        ],
        correctIndex: 1,
        explanation: 'Modern context windows and document ingestion excel at cross-referencing specific clauses and analyzing structural relationships across large files.',
      },
    ],
  },

  {
    id: 'lesson-16',
    slug: 'staying-current-without-chasing-every-new-tool',
    lessonNumber: 16,
    title: 'Staying Current Without Chasing Every New Tool (a sane way to evaluate what\'s actually worth trying)',
    description: 'Establish a disciplined evaluation filter to ignore tool hype and adopt only high-leverage workflows.',
    category: 'Growth & Problem Solving',
    categoryKey: 'growth',
    readTime: '5 min read',
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Most "new AI tools" are wrappers around the same foundation models — depth beats breadth',
      'Apply the 3-Question Leverage Filter before creating any new AI account',
      'A tool is worth adopting only when it solves an existing, painful bottleneck',
      'Value tools that integrate directly into your primary workspace, not new silos',
      'Tool-churn fatigue is real — mastering two platforms outperforms dabbling in 20',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity AI', 'Copilot'],
    relatedCertifications: ['practitioner', 'builder'],
    estimatedPracticeTime: '10 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'Every single morning, social media feeds declare that three new AI tools will "replace your entire job by Friday." If you spend your time testing every shiny wrapper, browser extension, and niche generator, you will suffer perpetual tool-churn fatigue without building real capability. The professionals gaining genuine advantage are not using 40 different apps—they master core foundation models and apply a strict adoption filter.',
      core: `Most "new AI tools" are simply lightweight wrappers around the exact same underlying foundation models. Before creating a new account or paying a subscription, run the tool through the **3-Question Leverage Filter**:

### 1. Is this a tool or a feature?
If a product merely summarizes PDFs or generates email replies, the major operating systems and foundation models will absorb that capability natively within six months. Do not rebuild your daily workflow around fragile point solutions.

### 2. Where does my data live?
If adopting the tool requires creating yet another fragmented silo of documents, notes, or customer data, the friction of maintaining that silo often exceeds the time saved by the AI feature. Value tools that integrate directly into your primary workspace (your code editor, your email client, your primary doc system).

### 3. Does this solve a friction point I already feel?
Never adopt a tool looking for a problem. Only adopt an AI capability when you have an existing, painful bottleneck that you actively want to eliminate.

Focus your energy on **depth of prompting and workflow integration** within one or two premier platforms rather than shallow experimentation across dozens of disposable utilities.`,
      tryThis: 'Audit your current AI footprint. Open your bookmarks and browser history. List every AI tool or extension you signed up for in the last 90 days. If you haven\'t opened it in the last two weeks, cancel the trial, remove the extension, and delete the bookmark. Commit to mastering your primary foundation model instead.',
    },
    quiz: [
      {
        question: 'Why do experienced practitioners avoid switching to every newly launched AI app?',
        options: [
          'New AI tools are banned by international law.',
          'Most niche apps are thin wrappers around the same foundation models, and tool-hopping creates context fragmentation and learning curve fatigue.',
          'Foundation models stop updating their algorithms after one year.',
          'Niche tools always cost more than $10,000 per month.',
        ],
        correctIndex: 1,
        explanation: 'Chasing ephemeral wrappers wastes operational energy; developing deep fluency with core models and integrated tools yields higher, more durable productivity gains.',
      },
      {
        question: 'What is a "wrapper" in the context of commercial AI software?',
        options: [
          'A protective plastic case for a server rack.',
          'A software product that provides a custom UI while sending the actual prompt to a third-party foundation model via an API.',
          'An encryption protocol used to hide your IP address.',
          'A legal contract between two software engineers.',
        ],
        correctIndex: 1,
        explanation: 'A wrapper is an application that builds a specialized user interface around an underlying foundation model\'s API without training its own proprietary base intelligence.',
      },
      {
        question: 'What is the most reliable signal that a new AI tool is worth adopting into your daily workflow?',
        options: [
          'It went viral on Twitter or TikTok with influencer endorsements.',
          'It directly removes a recurring, painful friction point inside a software environment where your work already lives.',
          'It has the word "quantum" or "revolutionary" in its tagline.',
          'It claims to do 100% of your job with one click.',
        ],
        correctIndex: 1,
        explanation: 'Durable software adoption occurs when a tool solves an existing, verified workflow bottleneck without introducing prohibitive data-management friction.',
      },
    ],
  },

  {
    id: 'lesson-17',
    slug: 'when-to-trust-ai-and-when-to-override-it',
    lessonNumber: 17,
    title: 'When to Trust AI, and When to Override It (building judgment, not just usage habits)',
    description: 'Cultivate professional calibration to know precisely when to delegate, verify, or actively override AI outputs.',
    category: 'Growth & Problem Solving',
    categoryKey: 'growth',
    readTime: '6 min read',
    difficulty: 'Advanced',
    prerequisites: ['spotting-ai-hallucinations', 'using-ai-as-a-thinking-partner'],
    keyTakeaways: [
      'High Delegation Zone: format, brainstorm, transform — Trust & Scan',
      'Calibrated Verification Zone: factual claims, citations, legal, financial — verify at source',
      'Human Override Zone: ethics, novel judgment, interpersonal decisions — model informs, human decides',
      'Domain expertise should feel dissonance when trusting AI outputs in your specialty',
      'The ultimate mark of AI literacy is knowing when to discard AI\'s output, not just use it',
    ],
    tools: ['ChatGPT', 'Claude', 'Gemini', 'Copilot'],
    relatedCertifications: ['practitioner', 'builder', 'strategist'],
    estimatedPracticeTime: '15 min practice',
    updatedAt: '2026-09-01',
    body: {
      intro: 'The ultimate mark of AI literacy is not how frequently you use the technology—it is how accurately you know when to discard its recommendations. Blind acceptance leads to catastrophic blunders in public, while cynical refusal to use AI leads to severe operational inefficiency. Professional mastery means developing an internal calibration matrix: knowing when the model is in its zone of genius and when human expertise must step in and override it.',
      core: `Calibrate your reliance across three distinct operational zones:

### Zone 1: High Delegation (Low Risk, High Verification Speed)
* *Characteristics:* Pure text restructuring, brainstorming variations, syntax transformations, summarizing user-provided text.
* *Recommended Stance:* **Trust & Scan:** Skim the output to confirm instructions were followed, then use.
* *Examples:* Formatting tables, generating email subject lines, refactoring boilerplate code functions.

### Zone 2: Collaborative Review (Moderate Risk, Medium Ambiguity)
* *Characteristics:* Synthesizing business strategy, writing client-facing proposals, diagnosing system architectures.
* *Recommended Stance:* **Trust but Verify:** Check the logic, question the reasoning, verify key assumptions, and edit for institutional nuance.
* *Examples:* Drafting customer dispute resolutions, outlining marketing campaigns, synthesizing user interview themes.

### Zone 3: Active Override (High Stakes, Zero Tolerance for Error)
* *Characteristics:* Mathematical calculations without code execution, legal interpretations, moral or ethical judgments, final hiring decisions, reading organizational politics.
* *Recommended Stance:* **Do Not Delegate:** Use human expertise as the primary driver; use AI strictly for exploratory devil’s advocacy.
* *Examples:* Signing compliance documents, assessing employee integrity, committing budget allocations, legal filings.

**The Golden Rule:** The model is responsible for the tokens; you are responsible for the outcome. If a model hallucinates a stat in a presentation to your board of directors, the board will not blame the model—they will blame you.`,
      tryThis: 'Look at the next AI-generated output you receive today. Before using it, pause and classify it into Zone 1, 2, or 3. If it’s Zone 2 or 3, perform one active override: identify at least one sentence where the model was too generic or strategically naive, delete it, and replace it with your own specific institutional knowledge.',
    },
    quiz: [
      {
        question: 'Which task falls into "Zone 3" where human judgment must strictly override automated AI output?',
        options: [
          'Reformatting a list of names into alphabetical order.',
          'Making the final hiring or termination decision regarding a team member based on cultural and performance nuance.',
          'Generating 10 alternative subject lines for an internal newsletter.',
          'Converting Markdown syntax to HTML tags.',
        ],
        correctIndex: 1,
        explanation: 'High-stakes human, ethical, and organizational decisions require contextual judgment, emotional intelligence, and accountability that cannot be outsourced to statistical models.',
      },
      {
        question: 'Why are mathematical calculations without code interpreter tools risky when performed by pure language models?',
        options: [
          'Language models do not calculate like calculators; they predict the most probable sequence of numeric characters, which frequently leads to arithmetic errors.',
          'Numbers are not allowed in the training datasets of modern models.',
          'Calculators are patented and cannot be replicated digitally.',
          'Language models automatically round all numbers to the nearest hundred.',
        ],
        correctIndex: 0,
        explanation: 'Unless an LLM executes real Python code or calculator tools in the background, it generates numbers based on probabilistic token prediction rather than deterministic mathematical calculation.',
      },
      {
        question: 'What is the single guiding principle of accountability when using AI in a professional environment?',
        options: [
          'If the model makes a mistake, the software provider is legally liable.',
          'The human operator remains completely responsible for the accuracy, ethics, and outcomes of any output they share or implement.',
          'Always include an AI disclaimer at the bottom of every text message.',
          'Human review is only necessary if the model gives an explicit warning message.',
        ],
        correctIndex: 1,
        explanation: 'Regardless of which tools assisted in drafting, the human professional who reviews and presents the work is solely accountable for the real-world results.',
      },
    ],
  },
  // -------------------------------------------------------------
  // Enterprise Integration (Lessons 18–32)
  // -------------------------------------------------------------
  ...ENTERPRISE_INTEGRATION_LESSONS,
  // -------------------------------------------------------------
  // Python Development (Lessons 33–42)
  // -------------------------------------------------------------
  ...PYTHON_DEVELOPMENT_LESSONS,
  // -------------------------------------------------------------
  // Role-Specific AI (Lessons 43–54)
  // -------------------------------------------------------------
  ...ROLE_SPECIFIC_LESSONS,
];

export function getAllLessons(): Lesson[] {
  return LESSONS;
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return LESSONS.find(l => l.slug === slug || l.id === slug);
}

export function getLessonsByCategory(categoryKey: CategoryKey): Lesson[] {
  return LESSONS.filter(l => l.categoryKey === categoryKey);
}

export function getAdjacentLessons(currentSlug: string) {
  const index = LESSONS.findIndex(l => l.slug === currentSlug || l.id === currentSlug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? LESSONS[index - 1] : null,
    next: index < LESSONS.length - 1 ? LESSONS[index + 1] : null,
  };
}
