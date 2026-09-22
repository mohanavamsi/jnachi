import type { Lesson } from '../lessonsData';

export const ROLE_SPECIFIC_LESSONS: Lesson[] = [
  // -------------------------------------------------------------
  // Lesson 43: AI for Account Research, Cold Outreach & Deal Intelligence (Sales)
  // -------------------------------------------------------------
  {
    id: 'lesson-43',
    slug: 'ai-powered-sales-prospecting-research',
    title: 'AI for Account Research, Cold Outreach & Deal Intelligence',
    description: 'Transform enterprise sales prospecting: Generate account intelligence dossiers from 10-K filings, craft hyper-personalized value propositions, and avoid generic outreach templates.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '8 min read',
    lessonNumber: 43,
    difficulty: 'Beginner',
    keyTakeaways: [
      'Generic AI outreach emails sound like spam; high-converting outreach uses AI to synthesize specific account pain points, recent earnings calls, and leadership quotes',
      'Prompt chaining extracts strategic priorities from annual reports (10-K, 10-Q) to map your solution directly to C-suite board priorities',
      'The 3-point personalization framework (Trigger Event + Specific Friction + Tangible Benchmark) outperforms spray-and-pray emails by 4x',
    ],
    tools: ['ChatGPT', 'Claude 3.5 Sonnet', 'Perplexity Pro', 'Salesforce Einstein'],
    relatedCertifications: ['AI for Sales Professionals', 'AI Literacy & Prompting'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Lesson 01: Anatomy of a Great Prompt'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Buyers delete generic cold emails in under two seconds. When sellers ask an LLM to "write a cold email to a VP of Supply Chain," the result is predictable fluff. High-performing revenue teams use AI as a financial research analyst to identify deep operational friction before writing a single word.',
      core: `### The Account Intelligence Extraction Framework

\`\`\`mermaid
graph TD
    RawData["Raw Account Data:<br/>- 10-K Annual Filing<br/>- Recent Press Releases<br/>- LinkedIn Job Postings"] --> LLM_Analyst["AI Prompt: 10-K Financial Analyst Persona"]
    
    LLM_Analyst --> ExtractedDossier["Account Strategic Dossier:<br/>1. Top 3 Strategic Growth Bets<br/>2. Key Operational Cost Bottlenecks<br/>3. Key Executive Terminology / KPIs"]
    
    ExtractedDossier --> EmailSynthesizer["AI Prompt: Enterprise Value Proposition Drafter"]
    EmailSynthesizer --> TailoredEmail["High-Conversion Outreach:<br/>- Mentions specific Q3 supply chain delay<br/>- Quantifies inventory carry cost reduction<br/>- Zero generic marketing jargon"]
\`\`\`

---

### Copyable Prompt: 10-K Account Dossier Synthesizer
\`\`\`markdown
You are an enterprise strategic sales researcher. Analyze the following transcript from [Target Company]'s latest earnings call and 10-K risk section.

Extract a concise 3-part account intelligence dossier:
1. Top Strategic Priorities: What are the CEO/CFO's top 2 stated growth initiatives for the next 12 months?
2. Operational Friction Points: Where are costs rising or margins compressing according to their financial disclosures?
3. Executive Vernacular: What internal acronyms or strategic project names did executives repeatedly use?

Format as bullet points with direct quotes and page/timestamp citations.
\`\`\`

---

### The 3-Point Outreach Formula
* **Point 1 (Trigger Event):** *"Noticed on your Q2 earnings call that inventory holding costs rose 14% due to ERP transition delays."*
* **Point 2 (Specific Friction):** *"Most VPs of Logistics we speak with find that manual EDI reconciliation between SAP and 3PL warehouses creates a 48-hour data lag."*
* **Point 3 (Tangible Benchmark):** *"We helped [Similar Peer Company] automate this sync, cutting fulfillment cycle time by 3.2 days without replacing their legacy WMS."*`,
      tryThis: 'Pick one target target enterprise prospect. Paste their latest press release or annual report summary into Claude/ChatGPT with the Dossier prompt above. Review the extracted operational bottlenecks and draft a 90-word email using the 3-Point formula.',
    },
    quiz: [
      {
        question: 'Why do generic "Write a cold sales email" prompts produce low response rates from enterprise executive buyers?',
        options: [
          'Email servers block all AI-generated words automatically.',
          'They produce generic, flattering marketing fluff that fails to identify specific operational friction or connect to board-level financial priorities.',
          'Executives only read emails written in cursive.',
          'AI models cannot write English.',
        ],
        correctIndex: 1,
        explanation: 'Generic prompts lack specific context; high-converting outreach requires synthesizing deep account data (10-Ks, earnings calls) into concrete business friction points.',
      },
      {
        question: 'In the 3-Point personalization framework, what is the role of the "Trigger Event"?',
        options: [
          'To offer a 50% discount coupon immediately.',
          'To anchor the outreach in an authentic, observable business change (e.g., earnings report disclosure, executive hire, tech migration).',
          'To send 10 automated follow-up messages.',
          'To attach a 100-page product whitepaper.',
        ],
        correctIndex: 1,
        explanation: 'A Trigger Event provides timely relevance, showing the prospect that you have done specific research on their current organizational priorities.',
      },
      {
        question: 'Which AI research prompt approach is most effective when preparing for a discovery call with a Chief Information Officer (CIO)?',
        options: [
          'Asking the model to tell jokes to break the ice.',
          'Prompting the model to synthesize the company’s stated IT modernisation roadmap, recent cloud vendor partnerships, and potential legacy integration risks.',
          'Asking the model to invent fake customer testimonials.',
          'Copying and pasting a competitor’s sales pitch.',
        ],
        correctIndex: 1,
        explanation: 'Grounding the AI on official company disclosures and tech roadmaps equips the account executive with strategic context for deep discovery conversations.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 44: AI-Assisted Objection Handling & Deal Coaching (Sales)
  // -------------------------------------------------------------
  {
    id: 'lesson-44',
    slug: 'ai-sales-objection-handling-deal-coaching',
    title: 'AI-Assisted Objection Handling, Win/Loss Analysis & Deal Coaching',
    description: 'Use AI as a sparring partner to roleplay high-stakes procurement negotiations, counter complex competitor objections, and conduct objective win/loss deal retrospectives.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '8 min read',
    lessonNumber: 44,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Roleplaying with an AI configured as a skeptical CFO or procurement officer exposes deal blind spots before actual customer negotiation meetings',
      'Feeding anonymized call transcripts into an AI coach reveals talk-to-listen ratios, missed buying signals, and weak objection responses',
      'AI-driven win/loss retrospectives identify systemic pricing, product gap, or positioning patterns across dozens of closed deals',
    ],
    tools: ['Gong / Chorus AI', 'Claude 3.5 Sonnet', 'ChatGPT Voice Mode'],
    relatedCertifications: ['AI for Sales Professionals', 'Growth & Problem Solving'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 43: AI-Powered Sales Prospecting'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'The worst place to practice handling a tough objection is in front of the customer. By setting up AI as an adversarial buyer persona, sales teams can pressure-test pricing arguments, technical objections, and multi-year contract negotiations in a zero-risk sandbox.',
      core: `### The Adversarial Buyer Sparring Loop

\`\`\`mermaid
sequenceDiagram
    autonumber
    participant Rep as Account Executive
    participant AI as AI (Skeptical CFO Persona)

    Rep->>AI: "Our platform costs $120,000/yr but saves 400 engineering hours."
    AI-->>Rep: "Every vendor promises engineering savings. We have a hiring freeze. Why shouldn't I postpone this until Q3?"
    Rep->>AI: Refined Response with Hard Cost Takeout Data
    AI-->>Rep: Critiques Rep Response + Pushes on Implementation Risk
\`\`\`

---

### Copyable Prompt: Skeptical CFO Negotiation Sparring Partner
\`\`\`markdown
You are the Chief Financial Officer (CFO) of a Fortune 1000 logistics company. You are fiercely protective of operating cash flow, highly skeptical of software vendor ROI claims, and currently enforcing a strict budget freeze on new SaaS tools.

I am an Account Executive pitching our enterprise software solution ($150,000 annual contract).

Rules for your responses:
1. Do not break character or give me easy praise.
2. Push back aggressively on soft ROI claims (e.g., "employee time saved"). Demand hard cost reduction or direct revenue enablement evidence.
3. Challenge our implementation timeline and change management risk.
4. After 4 rounds of back-and-forth dialogue, step out of character and grade my performance across: Closeness to Value, Calmness under Pressure, and Handling of Risk.

Start by asking me why this purchase cannot wait until next fiscal year.
\`\`\``,
      tryThis: 'Run a 5-minute sparring session with ChatGPT or Claude using the Skeptical CFO prompt above. Test your response when the AI challenges your pricing or implementation timeline.',
    },
    quiz: [
      {
        question: 'When using AI to roleplay sales objections, why is it critical to explicitly prompt the model with an adversarial, skeptical persona?',
        options: [
          'Because LLMs by default are sycophantic and tend to agree politely with user statements, giving false confidence unless instructed to push back fiercely.',
          'Because angry personas consume fewer tokens.',
          'Because AI models cannot understand sales language without negative words.',
          'To test the computer’s speaker volume.',
        ],
        correctIndex: 0,
        explanation: 'Default LLM alignment is agreeable and accommodating; instructing the model to act as a skeptical CFO forces realistic, challenging counterarguments.',
      },
      {
        question: 'How can sales teams use AI to analyze call transcripts without violating privacy or GDPR/enterprise compliance?',
        options: [
          'Upload raw customer credit card details into public forums.',
          'Anonymize all customer names, employee identities, and proprietary numbers before pasting into an enterprise-tier LLM with zero-data-retention agreements.',
          'Delete all audio files after 1 second.',
          'Only record calls that occur in public places.',
        ],
        correctIndex: 1,
        explanation: 'Enterprise data safety requires scrubbing PII and using enterprise LLM contracts that guarantee zero training on customer prompt data.',
      },
      {
        question: 'What is the primary benefit of conducting AI-assisted win/loss deal retrospectives across 50 closed sales opportunities?',
        options: [
          'It replaces human account executives completely.',
          'It identifies systemic patterns in lost deals (e.g., recurring competitor FUD, specific pricing cliff objections, or product feature gaps) across large text datasets.',
          'It automatically issues refunds to lost customers.',
          'It predicts the stock market with 100% accuracy.',
        ],
        correctIndex: 1,
        explanation: 'AI excels at qualitative text synthesis across dozens of CRM opportunity notes, surfacing recurring objections and competitive battleground trends.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 45: Building an AI Content Engine with Consistent Brand Voice (Marketing)
  // -------------------------------------------------------------
  {
    id: 'lesson-45',
    slug: 'ai-content-engine-brand-voice',
    title: 'Building an AI Content Engine with Consistent Brand Voice',
    description: 'Scale marketing content production without losing quality: Calibrate custom brand voice guidelines, repurpose core assets into multi-channel campaigns, and eliminate AI clichés.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '8 min read',
    lessonNumber: 45,
    difficulty: 'Beginner',
    keyTakeaways: [
      'Generic AI marketing copy is recognizable and penalized by audiences due to formulaic transitions, fluff adjectives, and lack of distinct perspective',
      'Codifying brand voice through few-shot exemplar pairs and explicit negative constraints ("banned words list") maintains editorial consistency',
      'The 1-to-10 Content Atomization workflow repurposes one deep technical whitepaper into podcasts scripts, LinkedIn carousels, newsletters, and email drips',
    ],
    tools: ['Claude 3.5 Sonnet', 'ChatGPT Plus', 'Jasper', 'Notion AI'],
    relatedCertifications: ['AI for Marketing Professionals', 'Workflow Automation'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 02: Multi-Turn Conversation Mastery'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'The internet is drowning in bland, generic AI-generated marketing copy filled with words like "delve," "tapestry," "revolutionize," and "game-changer." High-performing marketing teams use AI not to write generic fluff, but as an editorial assembly engine calibrated to their exact brand voice.',
      core: `### The 1-to-10 Content Atomization Pipeline

\`\`\`mermaid
graph TD
    CoreAsset["Core Asset (3,000-word Deep Technical Whitepaper)"] --> AI_Engine["AI Atomization Engine + Brand Voice Guide"]
    
    AI_Engine --> Item1["3x Thought-Leadership LinkedIn Posts"]
    AI_Engine --> Item2["1x Executive Summary Newsletter Edition"]
    AI_Engine --> Item3["5x Micro-Case Study Sales Enablement Slides"]
    AI_Engine --> Item4["1x SEO Blog Post (Targeting Long-Tail Keywords)"]
    AI_Engine --> Item5["4x Video / Podcast Talking Point Outlines"]
\`\`\`

---

### Brand Voice Calibration: The 4-Pillar System Prompt
To prevent generic tone, embed these four pillars in your marketing system prompts:

1. **Tone Attributes with Contrast:** *"We are authoritative but accessible; conversational but never sloppy; technical but free of unnecessary jargon."*
2. **Banned Clichés List:** *"Never use: delve, tapestry, revolutionize, powerhouse, beacon, unleash, paramount, in today's fast-paced world."*
3. **Sentence Structure Constraints:** *"Keep sentences varied in length. Use short, punchy 4-word sentences alongside nuanced explanations. Never begin paragraphs with rhetorical questions."*
4. **Few-Shot Exemplars:** Supply 2 real examples of your best published writing alongside the prompt.`,
      tryThis: 'Create a "Banned Words & Voice Guide" document for your brand. Take a previously written blog post, pass it to an LLM with your voice guide and atomization prompt, and generate 3 LinkedIn posts formatted with hook, bullet points, and CTA.',
    },
    quiz: [
      {
        question: 'Why is providing a "Banned Words & Clichés List" essential when prompting AI for marketing copywriting?',
        options: [
          'Because language models have statistical biases toward overused transition words (e.g., "delve", "testament", "revolutionize") that instantly signal low-effort AI generation to readers.',
          'Because search engines block all websites containing more than 5 adjectives.',
          'Because models stop generating text if they encounter synonyms.',
          'To reduce the billing cost per character.',
        ],
        correctIndex: 0,
        explanation: 'Due to reinforcement learning patterns, LLMs default to overused words; explicitly banning them forces the model to use natural, precise vocabulary.',
      },
      {
        question: 'In content marketing strategy, what does the "1-to-10 Content Atomization" framework describe?',
        options: [
          'Publishing 10 identical copies of an article on social media.',
          'Taking one high-value, deep pillar asset (like a benchmark report) and repurposing its insights into multiple derivative formats (LinkedIn posts, newsletters, sales decks).',
          'Reducing a 10-page document to 1 sentence.',
          'Hiring 10 freelance writers per project.',
        ],
        correctIndex: 1,
        explanation: 'Atomization breaks down a comprehensive pillar asset into dozens of tailored, channel-specific micro-assets, maximizing content ROI.',
      },
      {
        question: 'What technique provides the strongest calibration when training an AI model to write in a company’s exact brand voice?',
        options: [
          'Typing in all capital letters.',
          'Including few-shot input/output exemplars of approved company writing directly in the prompt or system instructions.',
          'Using the lowest possible temperature setting (0.0).',
          'Asking the model to guess your company name.',
        ],
        correctIndex: 1,
        explanation: 'Few-shot prompting with concrete examples of your brand’s actual published writing is the most effective way for the model to match style, rhythm, and tone.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 46: AI-Driven Campaign Strategy, A/B Testing & Audience Segmentation (Marketing)
  // -------------------------------------------------------------
  {
    id: 'lesson-46',
    slug: 'ai-campaign-analytics-experimentation',
    title: 'AI-Driven Campaign Strategy, A/B Testing & Audience Segmentation',
    description: 'Design data-driven marketing campaigns: Construct synthetic buyer persona panels for message testing, generate structured A/B variant matrices, and uncover conversion insights.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '8 min read',
    lessonNumber: 46,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Synthetic persona panels simulate how distinct buyer segments (e.g., frugal CTO vs risk-averse compliance officer) perceive your messaging before ad spend',
      'Systematic A/B test generation tests distinct psychological angles (Risk Avoidance vs Competitive Advantage vs Efficiency Gain) rather than trivial button color tweaks',
      'Feeding customer review datasets into AI uncovers exact customer voice, pain points, and product objections to drive ad messaging',
    ],
    tools: ['Claude 3.5 Sonnet', 'ChatGPT Plus', 'Google Analytics 4', 'Hotjar AI'],
    relatedCertifications: ['AI for Marketing Professionals', 'Growth & Problem Solving'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 45: AI Content Engine'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'A/B testing is often crippled by superficial variations—testing "Click Here" versus "Learn More." True high-velocity growth marketing tests completely different psychological angles and value propositions tailored to distinct customer segments.',
      core: `### The Psychological Angle Testing Matrix

\`\`\`mermaid
graph TD
    Product["Core Product: Cloud Data Integration Platform"] --> Matrix["AI Matrix Generator: 3 Psychological Angles"]
    
    Matrix --> AngleA["Angle 1: Risk & Downtime Avoidance<br/>'Prevent $250k/hr outages during peak retail sales.'"]
    Matrix --> AngleB["Angle 2: Developer Speed & Velocity<br/>'Ship integration pipelines 5x faster with pre-built connectors.'"]
    Matrix --> AngleC["Angle 3: Cost Consolidation & TCO<br/>'Consolidate 4 legacy tools into one modern platform.'"]
    
    AngleA --> Persona1["Target: Chief Information Security Officer (CISO)"]
    AngleB --> Persona2["Target: Lead Software Architect"]
    AngleC --> Persona3["Target: VP of Finance / IT Procurement"]
\`\`\`

---

### Copyable Prompt: Customer Review Mining for Ad Copy Hooks
\`\`\`markdown
You are a conversion rate optimization (CRO) copywriter. Analyze the following 50 customer reviews and G2 feedback comments for our competitor [Competitor Name].

Identify:
1. Top 3 Unmet Needs / Complaints: What features or support issues frustrate customers the most?
2. Exact Emotional Language: What exact phrases do customers use when expressing frustration (e.g., "clunky UI", "hidden pricing fees")?
3. Five High-Converting Ad Hooks: Write 5 distinct ad headline + subheadline pairs addressing these competitor flaws directly without naming the competitor directly.
\`\`\``,
      tryThis: 'Collect 20 publicly available reviews of a competitor product in your niche. Run the Review Mining prompt above to extract customer language and create 3 ad headline variants targeting their biggest frustration.',
    },
    quiz: [
      {
        question: 'When designing A/B test variants with AI assistance, why is testing different psychological angles (e.g., Risk Avoidance vs Speed vs Cost) more effective than micro-copy tweaks?',
        options: [
          'Because psychological angles test fundamental buyer motivations and value drivers, generating statistically significant conversion lifts compared to trivial phrasing tweaks.',
          'Because AI models cannot generate short headlines.',
          'Because Google Ads bans single-word changes.',
          'Because psychological angles make web pages load faster.',
        ],
        correctIndex: 0,
        explanation: 'Testing distinct value propositions uncovers which core benefit resonates most with specific buyer personas, delivering higher conversion impact.',
      },
      {
        question: 'What is a "Synthetic Persona Panel" in AI-driven marketing research?',
        options: [
          'A physical robot attending focus group meetings.',
          'Prompting an LLM with rich persona backstories, goals, and constraints to simulate how different customer segments might evaluate marketing messaging before launching expensive live ad spend.',
          'A fake profile created on social media.',
          'A database table of deleted user records.',
        ],
        correctIndex: 1,
        explanation: 'Synthetic personas simulate stakeholder perspectives, enabling marketing teams to pressure-test value propositions and messaging prior to deploying live budget.',
      },
      {
        question: 'How does mining unstructured customer reviews with AI improve marketing messaging resonance?',
        options: [
          'It captures the exact emotional phrases, pain points, and vocabulary real customers use, allowing marketers to mirror their language in high-converting copy.',
          'It automatically files lawsuits against negative reviewers.',
          'It deletes bad reviews from the internet.',
          'It bypasses search engine algorithms.',
        ],
        correctIndex: 0,
        explanation: 'Customer review mining extracts organic vocabulary and pain points directly from buyers, ensuring copy mirrors the authentic voice of the customer.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 47: AI in Talent Acquisition, Job Calibration & Bias Mitigation (HR)
  // -------------------------------------------------------------
  {
    id: 'lesson-47',
    slug: 'ai-talent-acquisition-job-architecture',
    title: 'AI in Talent Acquisition, Job Calibration & Bias Mitigation',
    description: 'Modernize HR workflows responsibly: Calibrate job specifications, build objective candidate evaluation rubrics, detect gendered bias in job postings, and maintain ethical human guardrails.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '8 min read',
    lessonNumber: 47,
    difficulty: 'Beginner',
    keyTakeaways: [
      'AI transforms job descriptions from unrealistic "wishlists" into structured competency rubrics aligned with actual role performance milestones',
      'Language auditing tools and prompts scan job listings to eliminate subtle gendered and exclusionary phrasing that depresses application rates',
      'AI candidate summarization must be strictly structured against competency rubrics—never delegated as an autonomous hiring decision maker',
    ],
    tools: ['Textio', 'Claude 3.5 Sonnet', 'Workday AI', 'Greenhouse'],
    relatedCertifications: ['AI for HR Professionals', 'Data Privacy & Ethics'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Lesson 10: Workplace Policy & Safe Data Handling'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Human Resources sits at the intersection of organizational efficiency and legal compliance. While AI can draft job architectures in seconds, reckless deployment introduces bias and regulatory liabilities. Ethical HR AI practices combine speed with rigorous human governance.',
      core: `### The Ethical AI Recruiting & Calibration Workflow

\`\`\`mermaid
graph TD
    HiringManager["Hiring Manager Input:<br/>'Need a Senior Integration Architect'"] --> AI_Calibration["AI Role Calibration Prompt"]
    
    AI_Calibration --> Output1["1. Realistic Competency Rubric<br/>(3 Core Skills vs 5 'Nice to Have')"]
    AI_Calibration --> Output2["2. Inclusive Job Description<br/>(Scanned for Gendered & Exclusionary Phrasing)"]
    AI_Calibration --> Output3["3. Structured Interview Question Scorecard"]
    
    Output1 --> HR_Review["Mandatory HR & Legal Human Review"]
    Output2 --> HR_Review
    Output3 --> HR_Review
\`\`\`

---

### Copyable Prompt: Job Description Bias & Realism Auditor
\`\`\`markdown
You are an expert in industrial-organizational psychology and diversity, equity, and inclusion (DEI) in talent acquisition.

Analyze the following draft job description for [Job Title]:
1. Identify Exclusionary Jargon: Highlight aggressive, overly masculine (e.g., "rockstar", "crush it", "dominate"), or corporate jargon that deters diverse applicants.
2. Unrealistic Requirement Check: Flag any contradictory requirements (e.g., "Requires 8 years of experience in a technology released 4 years ago").
3. Structured Rubric Rewrite: Rewrite the job description using clear competency-based language focused on measurable business outcomes rather than arbitrary credential checklists.
\`\`\``,
      tryThis: 'Take a standard job description from your organization. Run it through the Bias & Realism Auditor prompt above. Review the suggested neutral rewrites and outcome-based competency milestones.',
    },
    quiz: [
      {
        question: 'Why should AI tools never be allowed to autonomously filter out or reject job candidates without human review?',
        options: [
          'Because algorithmic screening can perpetuate historical hiring biases, violate employment regulations (e.g., EU AI Act, NYC Local Law 144), and overlook unconventional high-potential talent.',
          'Because AI models cannot read text on PDF resumes.',
          'Because hiring managers prefer doing manual data entry.',
          'Because all resumes look identical.',
        ],
        correctIndex: 0,
        explanation: 'Autonomous AI hiring systems risk encoding historical bias and violating employment discrimination laws; human oversight is legally and ethically mandatory.',
      },
      {
        question: 'What is the primary benefit of replacing arbitrary credential checklists (e.g., "Must have 10 years experience") with outcome-based competency rubrics in job postings?',
        options: [
          'It increases the font size of the job board.',
          'It expands the qualified applicant pool and focuses evaluation on actual performance capabilities rather than arbitrary tenure metrics.',
          'It eliminates the need to conduct interviews.',
          'It automatically sets employee salaries.',
        ],
        correctIndex: 1,
        explanation: 'Competency-based rubrics define what success looks like in the role, attracting capable candidates who may possess non-traditional backgrounds.',
      },
      {
        question: 'What type of language in job postings has research shown to depress application rates from female and underrepresented candidates?',
        options: [
          'Hyper-competitive masculine coded words (e.g., "ninja", "rockstar", "dominate the competition") and excessive arbitrary requirements.',
          'Bullet points with clear punctuation.',
          'Mentioning the company mission statement.',
          'Specifying the office address.',
        ],
        correctIndex: 0,
        explanation: 'Research demonstrates that masculine-coded idioms and bloated requirement lists significantly reduce application rates among underrepresented candidates.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 48: AI-Driven Employee Onboarding, Policies & Internal Knowledge Bots (HR)
  // -------------------------------------------------------------
  {
    id: 'lesson-48',
    slug: 'ai-employee-enablement-onboarding',
    title: 'AI-Driven Employee Onboarding, Policies & Internal Knowledge Bots',
    description: 'Empower employees and reduce HR support ticket load: Build internal policy RAG copilots, generate personalized 30-60-90 day onboarding roadmaps, and automate benefits triage.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '8 min read',
    lessonNumber: 48,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Internal HR policy bots grounded in RAG answer employee benefits, leave, and compliance questions instantly with direct policy handbook citations',
      'Personalized 30-60-90 day onboarding plans map role objectives, key team contacts, and required training modules tailored to new hires',
      'Automating repetitive HR FAQ triage frees HR Business Partners (HRBPs) to focus on strategic talent development and leadership coaching',
    ],
    tools: ['Slack / MS Teams Bots', 'Notion AI', 'Glean', 'Moveworks'],
    relatedCertifications: ['AI for HR Professionals', 'Workflow Automation'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 47: AI in Talent Acquisition'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'HR teams spend up to 40% of their working hours answering repetitive questions: "How many parental leave days do I have?", "What is our 401(k) match policy?", or "Where do I submit expensed travel receipts?" RAG-powered internal knowledge assistants resolve routine questions in seconds with exact policy handbook citations.',
      core: `### The Internal HR Knowledge Assistant Architecture

\`\`\`mermaid
graph TD
    Employee["Employee in Slack/Teams:<br/>'Does our dental plan cover orthodontics?'"] --> HR_Bot["Internal HR Copilot (RAG)"]
    
    subgraph KnowledgeBase["Verified Internal HR Stores"]
        Handbook["Employee Handbook 2026"]
        BenefitsPDF["Benefits Summary PDF"]
        TravelPolicy["Travel & Expense Policy"]
    end

    HR_Bot <-->|Semantic Search + Citation Lookup| KnowledgeBase
    HR_Bot --> VerifiedResponse["Verified Answer:<br/>'Yes, up to $2,500 lifetime maximum.'<br/>Source: Benefits Guide 2026, Page 14<br/>Link: [Open Benefits Portal]"]
    
    VerifiedResponse -.->|If Ambiguous / Complex Issue| HumanHR["Escalate Ticket to HR Business Partner"]
\`\`\`

---

### Copyable Prompt: 30-60-90 Day Personalized Onboarding Generator
\`\`\`markdown
You are an enterprise talent enablement director. Create a structured 30-60-90 day onboarding roadmap for a newly hired [Job Title] joining the [Department Name] team.

Structure the plan into three phases:
1. Days 1–30 (Learn & Absorb): Core system access, key stakeholder meet-and-greets, essential documentation to read, and culture immersion.
2. Days 31–60 (Collaborate & Contribute): First collaborative project milestone, shadowing senior peers, and identifying early process friction.
3. Days 61–90 (Own & Lead): Full ownership of core responsibilities, key KPI targets, and proposing one strategic improvement.

Format as a clean markdown table with Action Items, Key Stakeholders, and Definition of Done.
\`\`\``,
      tryThis: 'Generate a 30-60-90 day onboarding plan for a "Senior Integration Engineer" using the prompt above. Review the milestones for realistic pacing and clear definitions of done.',
    },
    quiz: [
      {
        question: 'What is the primary requirement when deploying an internal AI chatbot for employee policy and benefits questions?',
        options: [
          'The bot must guess answers if policies are unclear.',
          'The bot must strictly ground answers in official, verified company handbooks (via RAG) and include direct policy citations and links to internal portals.',
          'The bot should replace all HR employees immediately.',
          'The bot must only operate on weekends.',
        ],
        correctIndex: 1,
        explanation: 'HR policy bots must provide verifiable answers grounded strictly in official policy documentation to prevent misinforming employees on legal or benefits matters.',
      },
      {
        question: 'How do personalized 30-60-90 day onboarding roadmaps improve new hire retention and time-to-productivity?',
        options: [
          'They provide clear, phased milestones from learning to full ownership, reducing ambiguity and accelerating team integration.',
          'They assign 80 hours of video lectures on the first day.',
          'They eliminate the need for manager 1-on-1 check-ins.',
          'They increase the number of software tools a new hire must install.',
        ],
        correctIndex: 0,
        explanation: 'Structured onboarding plans give new hires clarity on expectations, key stakeholder relationships, and measurable milestones across their first quarter.',
      },
      {
        question: 'What should an internal HR bot do when an employee asks a sensitive, complex, or legally nuanced question (e.g., workplace harassment or medical accommodation)?',
        options: [
          'Post the question in a public company chat room.',
          'Provide a safe, empathetic message and immediately route the inquiry to a confidential human HR Business Partner ticket queue.',
          'Tell the employee to ignore the issue.',
          'Delete the chat history.',
        ],
        correctIndex: 1,
        explanation: 'Sensitive and legally protected HR inquiries must be escalated immediately to trained human HR professionals with strict confidentiality.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 49: AI-Powered Ticket Triage, Sentiment Analysis & First-Contact Resolution (Support)
  // -------------------------------------------------------------
  {
    id: 'lesson-49',
    slug: 'ai-customer-support-triage-resolution',
    title: 'AI-Powered Ticket Triage, Sentiment Analysis & First-Contact Resolution',
    description: 'Transform customer support operations: Automate ticket categorization, detect escalating customer churn/sentiment in real time, and draft empathetic, accurate resolutions.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '8 min read',
    lessonNumber: 49,
    difficulty: 'Beginner',
    keyTakeaways: [
      'AI ticket categorization eliminates manual dispatch bottlenecks, routing issues to specialized engineering tiers in seconds',
      'Real-time sentiment and urgency analysis flags frustrated VIP accounts before SLA breaches trigger customer churn',
      'AI resolution drafting assists human agents by generating complete, verified diagnostic steps while keeping the human in the loop',
    ],
    tools: ['Zendesk AI', 'Intercom Fin', 'Freshdesk', 'Claude 3.5 Sonnet'],
    relatedCertifications: ['AI for Customer Support', 'Workflow Automation'],
    estimatedPracticeTime: '25 mins',
    prerequisites: ['Lesson 04: Structured Output Mastery'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Customer support teams face rising ticket volumes with tight SLAs. When agents spend half their day reading, tagging, and manually routing tickets, first-contact resolution drops. AI-powered triage and resolution drafting empowers agents to act as empathetic problem-solvers rather than ticket routers.',
      core: `### The Automated Support Triage & Resolution Loop

\`\`\`mermaid
graph TD
    IncomingTicket["Inbound Customer Ticket:<br/>'Our payment gateway is down!'"] --> AI_Classifier["AI Triage & Sentiment Engine"]
    
    AI_Classifier --> Tagging["Auto-Classification:<br/>- Category: P0 Outage<br/>- Product: Payment Gateway<br/>- Sentiment: EXTREME_URGENCY"]
    
    Tagging --> Routing["Instant Route to Level 3 On-Call Engineer"]
    Tagging --> KB_Draft["AI Drafts Contextual Response<br/>(Pulls Status Page + Recovery Steps)"]
    
    KB_Draft --> HumanAgent["Human Support Agent Reviews & Personalizes"]
    HumanAgent --> CustomerResponse["Immediate 1-Click Resolution to Customer"]
\`\`\`

---

### Copyable Prompt: Ticket Triage & Resolution Copilot
\`\`\`markdown
You are an expert technical customer support specialist. Analyze the following customer support ticket:

Ticket Text:
"[Customer Ticket Body]"

Perform the following 4 tasks:
1. Intent & Urgency Classification: Classify intent (BUG, BILLING, FEATURE_REQUEST, HOW_TO) and Urgency (LOW, MEDIUM, HIGH, CRITICAL_P0).
2. Sentiment Score: Rate sentiment from 1 (Furious / High Churn Risk) to 5 (Delighted).
3. Root Cause Hypothesis: In 1-2 bullet points, what is the most probable underlying technical issue?
4. Draft Empathetic Customer Response: Write a concise, professional reply acknowledging their frustration, explaining the immediate investigation steps, and providing clear timeline expectations.
\`\`\``,
      tryThis: 'Test the Ticket Triage prompt on a complex mock angry customer complaint. Review the generated empathy framing and ensure the suggested resolution includes concrete next steps.',
    },
    quiz: [
      {
        question: 'How does automated AI ticket triage improve First-Contact Resolution (FCR) in customer support organizations?',
        options: [
          'It automatically closes tickets without telling the customer.',
          'It instantly classifies technical category, severity, and product area, routing tickets directly to the right specialist with pre-drafted context.',
          'It replaces human support agents with unmonitored scripts.',
          'It blocks angry customers from opening tickets.',
        ],
        correctIndex: 1,
        explanation: 'Instant accurate routing and context generation prevents tickets from bouncing across tiers, enabling rapid resolution on first contact.',
      },
      {
        question: 'Why is sentiment and churn risk detection crucial during ticket ingestion?',
        options: [
          'To automatically lower the customer subscription fee.',
          'To prioritize frustrated high-value enterprise accounts for immediate escalation before negative experiences trigger account cancellation.',
          'To disconnect phone lines.',
          'To format tickets in bold text.',
        ],
        correctIndex: 1,
        explanation: 'Real-time sentiment scoring highlights high-risk situations, allowing teams to intervene proactively and prevent customer churn.',
      },
      {
        question: 'What is the recommended best practice for using AI in customer communication for high-severity technical outages?',
        options: [
          'Send 100% automated AI messages without human review.',
          'Use AI to draft the response and technical diagnostics, but mandate human support agent review before hitting send.',
          'Turn off the support portal during outages.',
          'Direct customers to public Twitter feeds.',
        ],
        correctIndex: 1,
        explanation: 'Keeping a human in the loop for high-severity issues ensures empathy, technical accuracy, and adherence to company incident management protocols.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 50: Building Self-Updating Knowledge Bases & Customer Deflection Loops (Support)
  // -------------------------------------------------------------
  {
    id: 'lesson-50',
    slug: 'ai-knowledge-base-deflection-loops',
    title: 'Building Self-Updating Knowledge Bases & Customer Deflection Loops',
    description: 'Close the loop between resolved support tickets and public documentation: Automatically convert solved case histories into help center articles and deflect repetitive volume.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '8 min read',
    lessonNumber: 50,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Knowledge base documentation often rots because agents lack time to write standalone articles after resolving complex tickets',
      'AI documentation pipelines synthesize resolved ticket threads into standardized, searchable troubleshooting guides',
      'Ticket clustering algorithms group thousands of monthly inquiries into clusters to identify undocumented software bugs or UX friction',
    ],
    tools: ['Zendesk Help Center', 'Intercom Articles', 'Claude 3.5 Sonnet', 'Notion AI'],
    relatedCertifications: ['AI for Customer Support', 'Workflow Automation'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 49: AI Support Triage'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'The best support ticket is the one that never needs to be opened. Traditional help centers become obsolete because support teams are too busy answering tickets to write documentation. An AI knowledge loop turns every solved ticket into a published solution automatically.',
      core: `### The Self-Updating Knowledge Base Loop

\`\`\`mermaid
graph TD
    SolvedTicket["Resolved Ticket Thread (Agent + Customer Q&A)"] --> AI_DocEngine["AI Knowledge Extractor"]
    
    AI_DocEngine --> KB_Draft["Standardized Knowledge Article Draft:<br/>- Symptom Description<br/>- Cause Analysis<br/>- Step-by-Step Resolution<br/>- Related Error Codes"]
    
    KB_Draft --> TechnicalLead["1-Click Review & Approval by Tech Lead"]
    TechnicalLead --> PublishedArticle["Published to Public Help Center & Bot Index"]
    
    FutureCustomer["New Customer searches identical error"] --> AI_DeflectionBot["Customer Copilot / Help Center"]
    PublishedArticle --> AI_DeflectionBot
    AI_DeflectionBot --> InstantDeflection["Instant Customer Deflection (Zero Ticket Opened!)"]
\`\`\`

---

### Copyable Prompt: Resolved Ticket $\\rightarrow$ Knowledge Base Article
\`\`\`markdown
You are a senior technical documentation specialist. Convert the following resolved support ticket conversation into a public-facing Knowledge Base Troubleshooting Guide.

Ticket Transcript:
"[Insert Resolved Ticket Thread]"

Format the article with the following standard template:
1. Title: Clear, search-optimized problem statement (e.g., "How to Resolve Error ERR-502 During Batch Upload").
2. Summary: 2-sentence overview of the symptom and cause.
3. Prerequisites: What permissions or versions are required?
4. Step-by-Step Resolution: Numbered, concise diagnostic actions.
5. Verification: How can the user confirm the issue is fixed?
6. Keywords / Tags: 5 relevant search tags.
\`\`\``,
      tryThis: 'Take a solved email support thread from your team. Pass it through the Ticket-to-KB Article prompt above. Observe how raw conversation transcript is transformed into a structured, customer-facing troubleshooting guide.',
    },
    quiz: [
      {
        question: 'What is the core operational concept behind a "Customer Deflection Loop"?',
        options: [
          'Deleting incoming customer emails without answering them.',
          'Converting solved ticket resolutions into public knowledge base articles that AI bots and search engines use to resolve future inquiries before a ticket is filed.',
          'Redirecting all support calls to voicemail.',
          'Charging customers for opening support tickets.',
        ],
        correctIndex: 1,
        explanation: 'A deflection loop captures solutions from resolved tickets to continuously update self-service knowledge bases, empowering customers to self-resolve issues.',
      },
      {
        question: 'How does AI assist in identifying emerging bugs or undocumented friction in new software releases?',
        options: [
          'By clustering thousands of incoming support tickets by semantic similarity, highlighting spikes in new, uncataloged problem categories in real time.',
          'By rewriting the software in Python automatically.',
          'By restarting the production database.',
          'By sending apology letters to all users.',
        ],
        correctIndex: 0,
        explanation: 'Semantic clustering groups similar customer complaints, surfacing newly introduced bugs or UX friction points long before manual reporting catches them.',
      },
      {
        question: 'Why must raw ticket transcripts be sanitized and restructured before publishing as public knowledge base articles?',
        options: [
          'To remove customer PII, internal account IDs, and conversational banter while structuring the technical steps for clear readability.',
          'To translate articles into Latin.',
          'To ensure all articles are under 10 words.',
          'Because search engines reject transcripts.',
        ],
        correctIndex: 0,
        explanation: 'Ticket transcripts contain sensitive customer data, proprietary identifiers, and informal conversation that must be cleaned and structured for public viewing.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 51: AI for Executive Decision-Making, Scenario Planning & Strategy (Managers)
  // -------------------------------------------------------------
  {
    id: 'lesson-51',
    slug: 'ai-executive-decision-making-synthesis',
    title: 'AI for Executive Decision-Making, Scenario Planning & Strategy',
    description: 'Elevate managerial judgment: Conduct AI-assisted pre-mortem risk assessments, synthesize multi-perspective board memos, and simulate competitive market scenarios.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '9 min read',
    lessonNumber: 51,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Leaders who use AI as a cognitive sparring partner surface hidden blind spots, cognitive biases, and unstated operational assumptions',
      'The AI Pre-Mortem technique forces models to imagine project failure 18 months in the future to identify preventative countermeasures',
      'Multi-Perspective Stakeholder Simulation models how proposals will be received by conflicting departments (Sales vs Finance vs Legal)',
    ],
    tools: ['Claude 3.5 Sonnet', 'ChatGPT Plus', 'Perplexity Pro'],
    relatedCertifications: ['AI for Managers & Leaders', 'Growth & Problem Solving'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 14: AI as a Cognitive Sparring Partner'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Management is the art of making high-stakes decisions under uncertainty. Executives who use AI purely to summarize emails miss its greatest capability: acting as an unconstrained strategic devil’s advocate to challenge assumptions before millions of dollars are committed.',
      core: `### The Strategic Decision Sparring Matrix

\`\`\`mermaid
graph TD
    Strategy["Strategic Proposal: Migrate Core ERP to Cloud in 9 Months"] --> AI_Sparring["AI Strategic Challenge Engine"]
    
    AI_Sparring --> View1["1. Pre-Mortem Analysis:<br/>Assume it failed catastrophically in Month 12. Why?"]
    AI_Sparring --> View2["2. Adversarial Stakeholder Simulation:<br/>How will the skeptical CFO and factory plant managers react?"]
    AI_Sparring --> View3["3. Second-Order Consequence Mapping:<br/>What happens to supply chain velocity during the cutover window?"]
    
    View1 --> Synthesis["Synthesized Executive Risk Mitigation Memo"]
    View2 --> Synthesis
    View3 --> Synthesis
\`\`\`

---

### Copyable Prompt: Executive Pre-Mortem Risk Assessment
\`\`\`markdown
You are a veteran enterprise management consultant and risk auditor. We are preparing to launch the following major strategic initiative:

Strategic Initiative Summary:
"[Insert Project Scope, Budget, Timeline, and Goals]"

Execute a rigorous Pre-Mortem Analysis:
1. Fast-forward 18 months: The project has failed completely, exceeding budget by 60% and causing operational disruption.
2. Identify the Top 4 Failure Modes: What went wrong? Group failures into:
   - Technical & Architecture Friction
   - Organizational & Change Management Resistance
   - Unrealistic Assumptions & Vendor Dependencies
3. Early Warning Indicators: What specific metrics in Month 3 and Month 6 would signal this failure is unfolding?
4. Preventative Governance: What 3 concrete governance gates should we institute now to mitigate these risks?
\`\`\``,
      tryThis: 'Take a major project planned for your team this quarter. Run the Executive Pre-Mortem prompt above. Identify at least one unstated assumption or risk that was not previously addressed in your project plan.',
    },
    quiz: [
      {
        question: 'What is the primary objective of conducting an AI-assisted "Pre-Mortem" assessment before launching a major business initiative?',
        options: [
          'To cancel all new company projects immediately.',
          'To assume the initiative has already failed in the future and work backward to uncover blind spots, unstated assumptions, and preventative governance gates.',
          'To automatically write press releases.',
          'To calculate employee payroll taxes.',
        ],
        correctIndex: 1,
        explanation: 'A Pre-Mortem flips standard planning by assuming failure has already occurred, freeing stakeholders to discuss vulnerabilities and design early countermeasures.',
      },
      {
        question: 'How does Multi-Perspective Stakeholder Simulation improve executive decision memos?',
        options: [
          'It generates random numbers for financial spreadsheets.',
          'It models how conflicting departmental leaders (e.g., Sales wanting speed vs Legal wanting compliance) will react to a proposal, preparing leaders for executive alignment.',
          'It eliminates the need for executive team meetings.',
          'It translates business proposals into Japanese.',
        ],
        correctIndex: 1,
        explanation: 'Simulating cross-functional stakeholder perspectives prepares leaders to address legitimate objections and build consensus across departments.',
      },
      {
        question: 'What is the most common pitfall when managers use AI for strategic synthesis?',
        options: [
          'Accepting generic, high-level summaries without forcing the model to provide concrete trade-offs, operational failure modes, and quantified second-order consequences.',
          'Using the tool during morning hours.',
          'Typing prompts longer than 20 words.',
          'Saving output files as PDFs.',
        ],
        correctIndex: 0,
        explanation: 'Superficial summaries provide a false sense of security; executive value comes from pressing the model on second-order impacts, trade-offs, and failure points.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 52: AI Adoption Frameworks, Team Workflow Auditing & Governance (Managers)
  // -------------------------------------------------------------
  {
    id: 'lesson-52',
    slug: 'ai-team-productivity-workflow-auditing',
    title: 'AI Adoption Frameworks, Team Workflow Auditing & Governance',
    description: 'Lead team AI transformation: Audit weekly team workflows for high-ROI automation candidates, establish clear organizational usage policies, and track real productivity velocity.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '8 min read',
    lessonNumber: 52,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Successful team AI adoption starts with a task-level workflow audit, not blanket corporate mandates',
      'The Task Automation Matrix categorizes work into: Fully Automatable, AI-Augmented, and Human-Accountable (Zone 3)',
      'Productivity measurement must track business outcome velocity (cycle time, throughput quality) rather than vanity metrics like "prompts typed"',
    ],
    tools: ['Workflow Auditing Matrix', 'Team Policy Templates', 'Enterprise Copilot Admin'],
    relatedCertifications: ['AI for Managers & Leaders', 'Workflow Automation'],
    estimatedPracticeTime: '30 mins',
    prerequisites: ['Lesson 51: AI Executive Decision-Making'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Telling a team to "start using AI" leads to random experimentation and zero measurable business impact. High-impact engineering, marketing, and operations leaders systematically audit recurring workflows, identify high-friction bottlenecks, and institute clear guardrails.',
      core: `### The Team Workflow Automation Matrix

\`\`\`mermaid
graph TD
    Audit["Weekly Team Workflow Audit"] --> Classify{"Task Classification Matrix"}
    
    Classify -->|High Repetition, Low Nuance| Auto["1. Full Automation Target<br/>- Weekly status data collation<br/>- Routine ticket tagging<br/>- Transcribing standup action items"]
    Classify -->|Medium Nuance, High Volume| Aug["2. AI-Augmented (Co-Pilot)<br/>- First-draft technical specs<br/>- Customer email drafting<br/>- SQL query generation"]
    Classify -->|High Stakes, High Empathy| Human["3. Human Core (Zero AI Delegation)<br/>- Performance reviews<br/>- High-stakes client escalations<br/>- Architecture approval"]
\`\`\`

---

### Key Pillars of a Team AI Charter
Every manager should establish a 1-page **Team AI Operating Charter**:
1. **Data Safety Non-Negotiables:** Never paste customer PII, unreleased financial figures, or proprietary encryption keys into unapproved consumer AI tools.
2. **Accountability Mandate:** The human team member who submits or publishes the work is 100% responsible for every line of code, number, or statement.
3. **Artifact Sharing Culture:** When a team member creates a high-performing prompt or workflow, they must deposit it into the shared team Prompt Library.`,
      tryThis: 'Conduct a 15-minute workflow audit of your team’s weekly recurring tasks. Map 5 common activities into the Automation Matrix (Full Automation, AI-Augmented, or Human Core).',
    },
    quiz: [
      {
        question: 'What is the most effective approach for a manager looking to drive meaningful AI adoption across their team?',
        options: [
          'Mandating that every employee type 50 prompts per day.',
          'Conducting a task-level workflow audit to identify repetitive, high-friction bottlenecks and creating shared, verified prompt workflows for high-ROI tasks.',
          'Banning all software tools except AI.',
          'Replacing the team with an automated script.',
        ],
        correctIndex: 1,
        explanation: 'Targeted workflow audits identify real operational friction, creating focused automation templates that deliver measurable productivity gains.',
      },
      {
        question: 'Why are metrics like "number of prompts submitted" or "hours spent in AI tools" poor indicators of team AI success?',
        options: [
          'They are vanity activity metrics that do not measure business outcome velocity, output quality, or reduction in operational cycle time.',
          'Because computers cannot count prompts.',
          'Because AI tools are illegal to measure.',
          'Because managers should only track keyboard clicks.',
        ],
        correctIndex: 0,
        explanation: 'Activity metrics measure effort rather than value; leaders should measure cycle time reduction, error rate drops, and overall project delivery velocity.',
      },
      {
        question: 'What is the fundamental rule of accountability in enterprise AI governance?',
        options: [
          'If an AI model generates an error in a customer deliverable, the AI vendor is legally responsible.',
          'The human professional who reviews and publishes the deliverable remains 100% accountable for the outcome, correctness, and ethics of the work.',
          'Employees are not responsible for any output generated by computers.',
          'AI governance is only required for financial companies.',
        ],
        correctIndex: 1,
        explanation: 'Regardless of what AI tools were used during generation, the human professional is solely responsible for verifying accuracy and maintaining outcome accountability.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 53: AI-Augmented Software Engineering: Pair Programming & Code Review (Devs)
  // -------------------------------------------------------------
  {
    id: 'lesson-53',
    slug: 'ai-pair-programming-code-review',
    title: 'AI-Augmented Software Engineering: Pair Programming & Code Review',
    description: 'Supercharge developer velocity: Implement AI-assisted Test-Driven Development (TDD), build automated code review review bots, and safely refactor complex legacy codebases.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '9 min read',
    lessonNumber: 53,
    difficulty: 'Intermediate',
    keyTakeaways: [
      'Using AI for Test-Driven Development (TDD)—generating adversarial edge-case unit tests before writing implementation code—dramatically improves code quality',
      'AI code review prompts act as an automated first-pass reviewer, catching memory leaks, SQL injection vulnerabilities, and style violations before human PR review',
      'Refactoring legacy code with AI requires providing complete contextual interfaces and executing incremental, verified unit test cycles',
    ],
    tools: ['GitHub Copilot', 'Cursor IDE', 'Claude 3.5 Sonnet', 'Aider'],
    relatedCertifications: ['Python AI Developer', 'AI for Developers'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 33: Python 3.12+ Foundations'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Developers using AI solely for inline autocomplete are barely scratching the surface. Elite engineers use AI to scaffold comprehensive test suites, explore complex architectural trade-offs, and conduct deep adversarial code reviews before opening Pull Requests.',
      core: `### The AI-Assisted Test-Driven Development (TDD) Loop

\`\`\`mermaid
graph TD
    Spec["Feature Specification:<br/>'Implement Token Bucket Rate Limiter'"] --> AI_Tests["AI Prompt: Generate Adversarial Unit Tests"]
    
    AI_Tests --> TestSuite["Comprehensive Pytest Suite:<br/>- Normal token consumption<br/>- Burst capacity overflow<br/>- Clock drift & concurrency race conditions"]
    
    TestSuite --> DevCode["Developer Implements Code<br/>(AI-Assisted Drafting)"]
    DevCode --> TestRun{"All Tests Pass?"}
    
    TestRun -->|Fails| FixCode["Refine Code & Fix Edge Cases"]
    FixCode --> TestRun
    TestRun -->|Passes| PR_Review["Automated AI Security & Quality PR Review"]
\`\`\`

---

### Copyable Prompt: Adversarial Pull Request Code Reviewer
\`\`\`markdown
You are a Principal Security Engineer and Senior Software Architect reviewing a GitHub Pull Request.

Analyze the following git diff / code implementation:
\`\`\`[language]
[Insert Code Diff or Function]
\`\`\`

Conduct a rigorous technical review across 4 dimensions:
1. Security & Vulnerability Audit: Look for SQL injection, unvalidated inputs, authentication bypass, timing attacks, and sensitive data leakage in logs.
2. Performance & Concurrency: Check for race conditions, thread safety, unclosed socket/connection leaks, N+1 database queries, and blocking operations in async code.
3. Edge Case Coverage: What unexpected inputs (e.g., empty strings, negative numbers, timezone boundary shifts, large payloads) will break this code?
4. Concrete Refactoring Recommendations: Provide modified code snippets demonstrating cleaner, more idiomatic implementations.
\`\`\``,
      tryThis: 'Take a recently written function in your codebase. Run it through the Adversarial Code Review prompt above. Evaluate the suggested edge-case test cases against your existing test suite.',
    },
    quiz: [
      {
        question: 'Why is generating unit tests with AI BEFORE implementing business logic (AI-assisted TDD) an effective engineering practice?',
        options: [
          'It prevents the model from generating sycophantic tests that merely assert whatever bugs exist in the code, forcing explicit definition of edge cases up front.',
          'It makes the code run on iOS devices automatically.',
          'It deletes the need for git commits.',
          'It compiles Python code into Java bytecode.',
        ],
        correctIndex: 0,
        explanation: 'Generating tests first ensures the tests validate actual functional requirements and adversarial edge cases rather than mirroring existing bugs.',
      },
      {
        question: 'What is a major security risk when developers blindly accept AI-generated code suggestions without review?',
        options: [
          'AI models frequently suggest deprecated libraries, hallucinated package names (which attackers exploit via package squatting), and vulnerable coding patterns (e.g., SQL string concatenation).',
          'AI-generated code increases physical computer temperature by 50 degrees.',
          'AI code cannot be formatted by Prettier.',
          'AI code disables operating system firewalls automatically.',
        ],
        correctIndex: 0,
        explanation: 'AI autocomplete can suggest vulnerable syntax or hallucinated package names; human security review is essential for all generated code.',
      },
      {
        question: 'Which capability in modern AI-native developer environments (like Cursor or Aider) provides the highest velocity boost during large refactors?',
        options: [
          'Full-codebase indexing with multi-file contextual editing and automated terminal command execution.',
          'Changing the color scheme of the text editor.',
          'Playing background music while coding.',
          'Generating random variable names.',
        ],
        correctIndex: 0,
        explanation: 'Full-codebase contextual awareness allows AI tools to trace types, imports, and dependencies across multiple files during refactoring operations.',
      },
    ],
  },

  // -------------------------------------------------------------
  // Lesson 54: AI for Technical Architecture Design & Incident Post-Mortems (Devs)
  // -------------------------------------------------------------
  {
    id: 'lesson-54',
    slug: 'ai-system-architecture-incident-postmortems',
    title: 'AI for Technical Architecture Design & Incident Post-Mortems',
    description: 'Master systems-level engineering: Scaffold Architecture Decision Records (ADRs), conduct STRIDE threat modeling with AI, and analyze production incident logs for blameless post-mortems.',
    category: 'Role-Specific AI',
    categoryKey: 'role',
    readTime: '9 min read',
    lessonNumber: 54,
    difficulty: 'Advanced',
    keyTakeaways: [
      'Architecture Decision Records (ADRs) document technical context, evaluated alternatives, and deliberate tradeoffs before code is written',
      'AI-assisted threat modeling (STRIDE) systematically evaluates spoofing, tampering, repudiation, information disclosure, DoS, and elevation of privilege',
      'During major production outages (SEV-1), feeding sanitized log dumps into AI accelerates root cause hypothesis generation and timeline reconstruction',
    ],
    tools: ['Claude 3.5 Sonnet', 'PlantUML / Mermaid', 'STRIDE Framework', 'ADR Templates'],
    relatedCertifications: ['Python AI Developer', 'Enterprise Integration Architect'],
    estimatedPracticeTime: '35 mins',
    prerequisites: ['Lesson 53: AI-Augmented Software Engineering'],
    updatedAt: '2026-09-22',
    body: {
      intro: 'Staff and Principal Engineers are evaluated on architectural foresight and incident resilience. Using AI to stress-test architectural decisions against the STRIDE threat model and synthesize complex production incident timelines enables engineering teams to build robust, resilient distributed systems.',
      core: `### The Blameless Incident Post-Mortem Synthesis Pipeline

\`\`\`mermaid
graph TD
    IncidentData["Raw SEV-1 Outage Data:<br/>- Sanitized Datadog / Splunk Logs<br/>- Slack War Room Transcript<br/>- PagerDuty Incident Milestones"] --> AI_Investigator["AI Root Cause & Timeline Synthesizer"]
    
    AI_Investigator --> Timeline["1. Chronological Event Timeline<br/>(Detection -> Triage -> Mitigation -> Recovery)"]
    AI_Investigator --> RootCause["2. 5-Whys Root Cause Analysis<br/>(Uncapped DB connection pool triggered cascade)"]
    AI_Investigator --> ActionItems["3. Preventative Action Items (Jira Tickets)<br/>- Add Circuit Breakers<br/>- Tune Healthcheck Timeout"]
    
    Timeline --> PostMortemDoc["Blameless Post-Mortem Engineering Review"]
    RootCause --> PostMortemDoc
    ActionItems --> PostMortemDoc
\`\`\`

---

### Copyable Prompt: Architecture Decision Record (ADR) Generator
\`\`\`markdown
You are a Principal Software Architect. Draft a formal Architecture Decision Record (ADR) for the following engineering decision:

Context & Problem Statement:
"[Insert Problem: e.g., Choosing between Kafka vs RabbitMQ vs AWS SQS for order event streaming across 12 microservices]"

Format using the standard Michael Nygard ADR format:
1. Title: ADR-[Number]: [Concise Decision Title]
2. Status: Proposed / Accepted
3. Context: What technical constraints, latency requirements, throughput expectations, and organizational factors drive this decision?
4. Decision: State the chosen architecture clearly.
5. Evaluated Alternatives: Detail at least 2 alternative approaches with their pros and cons.
6. Consequences: Detail positive outcomes, negative trade-offs, and ongoing operational maintenance overhead.
\`\`\``,
      tryThis: 'Draft an ADR for a recent technical choice in your organization (e.g., choosing a database, caching layer, or message broker) using the prompt above. Review the trade-offs and operational consequences section.',
    },
    quiz: [
      {
        question: 'What is the primary purpose of writing an Architecture Decision Record (ADR) when designing software systems?',
        options: [
          'To satisfy legal marketing requirements.',
          'To document the context, evaluated alternatives, and deliberate trade-offs of a significant architectural choice for future engineering teams.',
          'To calculate hardware electricity costs.',
          'To replace software unit tests.',
        ],
        correctIndex: 1,
        explanation: 'ADRs capture the "why" behind architectural decisions, documenting trade-offs and alternatives so future developers understand historical context.',
      },
      {
        question: 'In the STRIDE threat modeling framework, what does the "T" and "D" represent when evaluating system architecture security?',
        options: [
          'Transmission and Decompression',
          'Tampering (unauthorized data alteration) and Denial of Service (exhausting system availability)',
          'Testing and Debugging',
          'Tracking and Deleting',
        ],
        correctIndex: 1,
        explanation: 'STRIDE stands for Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege.',
      },
      {
        question: 'How does AI assist engineering teams during blameless post-mortem analysis following a major production outage?',
        options: [
          'By assigning blame to the junior engineer who committed the code.',
          'By parsing complex log dumps and war room transcripts to reconstruct an accurate chronological timeline, isolate contributing failure factors, and draft preventative action items.',
          'By deleting incident logs from the server.',
          'By automatically emailing excuses to all customers.',
        ],
        correctIndex: 1,
        explanation: 'AI rapidly synthesizes noisy logs and chat timestamps into a structured chronological timeline, helping teams perform constructive root-cause analysis.',
      },
    ],
  },
];
