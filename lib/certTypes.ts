export type CertCategory = 'core' | 'role' | 'python';

export type CertTier =
  | 'beginner'
  | 'practitioner'
  | 'builder'
  | 'master'
  | 'sales'
  | 'developers'
  | 'marketers'
  | 'support'
  | 'hr'
  | 'managers'
  | 'python_ai'
  | 'python_dev';

export interface TierConfig {
  id: CertTier;
  category: CertCategory;
  levelNumber: number;
  title: string;
  badgeLabel: string;
  roleName?: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  passingScorePercent: number;
  questionCount: number;
  durationMinutes: number;
  colorScheme: {
    primary: string;
    secondary: string;
    border: string;
    bgBadge: string;
    textBadge: string;
    gradientFrom: string;
    gradientTo: string;
    diplomaParchment: string;
    diplomaPrimary: string;
    diplomaAccent: string;
    sealColor: string;
    sealText: string;
  };
  keyTopics: string[];
}

export const CERT_TIERS: Record<CertTier, TierConfig> = {
  // CORE LEVEL CERTIFICATIONS
  beginner: {
    id: 'beginner',
    category: 'core',
    levelNumber: 1,
    title: 'Jnachi Certified AI Foundations',
    badgeLabel: 'JNACHI CERTIFIED AI FOUNDATIONS',
    shortDescription: 'Confirms baseline fluency across core prompting, automation, privacy, and problem-solving.',
    fullDescription: 'Validates foundational literacy and practical application of generative AI tools. Assesses knowledge of effective prompt anatomy, context hygiene, data confidentiality redlines, and workflow efficiency.',
    targetAudience: 'Professionals, students, and teams starting their applied AI journey.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#4f46e5', // Indigo
      secondary: '#4338ca',
      border: '#c7d2fe',
      bgBadge: '#eef2ff',
      textBadge: '#3730a3',
      gradientFrom: '#1e1b4b',
      gradientTo: '#3730a3',
      diplomaParchment: '#fafaf9',
      diplomaPrimary: '#312e81',
      diplomaAccent: '#d97706',
      sealColor: '#fef3c7',
      sealText: '#b45309',
    },
    keyTopics: [
      'Prompt Anatomy & Instruction Tuning',
      'Hallucination Identification & Guardrails',
      'Confidentiality & Session Data Privacy',
      'Micro-Task Automation & Prompt Libraries',
    ],
  },
  practitioner: {
    id: 'practitioner',
    category: 'core',
    levelNumber: 2,
    title: 'Jnachi Certified AI Practitioner',
    badgeLabel: 'JNACHI CERTIFIED AI PRACTITIONER',
    shortDescription: 'For those actively using AI in real workflows with deep scenario-based execution.',
    fullDescription: 'Evaluates hands-on efficiency in daily tasks. Tests deep prompt calibration, structured JSON schema generation, nuanced persona modeling, domain-specific research synthesis, and rapid iterative refinement.',
    targetAudience: 'Knowledge workers, product managers, analysts, and operators using AI tools daily.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#0284c7', // Sky / Cyan
      secondary: '#0369a1',
      border: '#bae6fd',
      bgBadge: '#f0f9ff',
      textBadge: '#075985',
      gradientFrom: '#082f49',
      gradientTo: '#0369a1',
      diplomaParchment: '#f8fafc',
      diplomaPrimary: '#0c4a6e',
      diplomaAccent: '#0284c7',
      sealColor: '#e0f2fe',
      sealText: '#0369a1',
    },
    keyTopics: [
      'Advanced Few-Shot Prompting & JSON Schemas',
      'Complex Document Synthesis & Extraction',
      'Iterative Prompt Calibration & Quality Checks',
      'Enterprise Data Redaction & ZDR Compliance',
    ],
  },
  builder: {
    id: 'builder',
    category: 'core',
    levelNumber: 3,
    title: 'Jnachi Certified AI Builder',
    badgeLabel: 'JNACHI CERTIFIED AI BUILDER',
    shortDescription: 'Tests the ability to chain tools, automate multi-step processes, and design AI workflows.',
    fullDescription: 'Measures your mastery of building automated AI workflows from scratch. Assesses multi-step agent chaining, custom system instructions, structured data transformation, API/tool augmentation, and prompt routing.',
    targetAudience: 'Engineers, technical operators, no-code builders, and automation architects.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#059669', // Emerald
      secondary: '#047857',
      border: '#a7f3d0',
      bgBadge: '#ecfdf5',
      textBadge: '#065f46',
      gradientFrom: '#022c22',
      gradientTo: '#047857',
      diplomaParchment: '#f0fdf4',
      diplomaPrimary: '#064e3b',
      diplomaAccent: '#059669',
      sealColor: '#d1fae5',
      sealText: '#047857',
    },
    keyTopics: [
      'Multi-Step Agent & Workflow Chaining',
      'Custom Instructions & Dynamic Prompt Templates',
      'Tool-Augmented Retrieval & Function Calling',
      'Resilient Error Handling & Fallback Pipelines',
    ],
  },
  master: {
    id: 'master',
    category: 'core',
    levelNumber: 4,
    title: 'Jnachi Certified AI Master Architect',
    badgeLabel: 'JNACHI CERTIFIED AI MASTER ARCHITECT',
    shortDescription: 'The pinnacle tier. Critical judgment, knowing when NOT to use AI, governance, and mentoring.',
    fullDescription: 'The highest benchmark of AI leadership and architecture. Tests strategic judgment, risk mitigation, adversarial prompt robustness, governance policies, latency vs ROI trade-offs, and critical evaluation of model limitations.',
    targetAudience: 'AI team leads, enterprise architects, directors, and strategic decision-makers.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#7c3aed', // Purple / Gold
      secondary: '#6d28d9',
      border: '#ddd6fe',
      bgBadge: '#f5f3ff',
      textBadge: '#5b21b6',
      gradientFrom: '#2e1065',
      gradientTo: '#581c87',
      diplomaParchment: '#faf5ff',
      diplomaPrimary: '#3b0764',
      diplomaAccent: '#d97706',
      sealColor: '#fef3c7',
      sealText: '#7e22ce',
    },
    keyTopics: [
      'Critical AI Evaluation & "When NOT to Use AI"',
      'Enterprise Governance & Model Bias Mitigation',
      'System Architecture, Latency & Cost Optimization',
      'Adversarial Robustness, Safety & Team Enablement',
    ],
  },

  // ROLE-BASED CERTIFICATIONS
  sales: {
    id: 'sales',
    category: 'role',
    levelNumber: 5,
    title: 'Jnachi for Sales',
    badgeLabel: 'JNACHI CERTIFIED IN APPLIED AI FOR SALES',
    roleName: 'Sales & Revenue',
    shortDescription: 'Master AI-driven prospecting, CRM automation, personalized outreach, and deal support.',
    fullDescription: 'Evaluates high-impact AI application for commercial sales teams. Assesses hyper-personalized outreach at scale, rapid account research, call transcript summarization into CRM, proposal drafting, and client confidentiality boundaries.',
    targetAudience: 'Account Executives, SDRs/BDRs, Sales Leaders, Account Managers, and Revenue Ops.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#d97706', // Amber / Gold
      secondary: '#b45309',
      border: '#fde68a',
      bgBadge: '#fffbeb',
      textBadge: '#92400e',
      gradientFrom: '#451a03',
      gradientTo: '#b45309',
      diplomaParchment: '#fffdf5',
      diplomaPrimary: '#78350f',
      diplomaAccent: '#d97706',
      sealColor: '#fef3c7',
      sealText: '#b45309',
    },
    keyTopics: [
      'AI-Assisted Prospecting & Contextual Outreach',
      'CRM Integration & Call Transcript Summarization',
      'Client Communication & Proposal Drafting',
      'Sales Judgment & Deal Data Protection',
    ],
  },

  developers: {
    id: 'developers',
    category: 'role',
    levelNumber: 6,
    title: 'Jnachi for Developers',
    badgeLabel: 'JNACHI CERTIFIED IN APPLIED AI FOR DEVELOPERS',
    roleName: 'Software Engineering',
    shortDescription: 'Harness AI for code generation, debugging, IDE agents, security reviews, and architecture.',
    fullDescription: 'Evaluates developer fluency in using AI tools responsibly and productively. Assesses contextual code generation, multi-file agent workflows, debugging complex stack traces, security vulnerability audits, and licensing/IP hygiene.',
    targetAudience: 'Software Engineers, Full-Stack Developers, DevOps, Tech Leads, and QA Engineers.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#2563eb', // Royal Blue
      secondary: '#1d4ed8',
      border: '#bfdbfe',
      bgBadge: '#eff6ff',
      textBadge: '#1e40af',
      gradientFrom: '#172554',
      gradientTo: '#1d4ed8',
      diplomaParchment: '#f0f9ff',
      diplomaPrimary: '#1e3a8a',
      diplomaAccent: '#2563eb',
      sealColor: '#dbeafe',
      sealText: '#1e40af',
    },
    keyTopics: [
      'AI-Assisted Coding & Precision Debugging',
      'Tool & Coding Agent Workflows (IDE/CLI)',
      'Code Quality, Security & Hallucination Audits',
      'Responsible AI Use & Codebase Confidentiality',
    ],
  },

  marketers: {
    id: 'marketers',
    category: 'role',
    levelNumber: 7,
    title: 'Jnachi for Marketers',
    badgeLabel: 'JNACHI CERTIFIED IN APPLIED AI FOR MARKETERS',
    roleName: 'Marketing & Growth',
    shortDescription: 'Deliver high-converting campaign ideation, omnichannel copywriting, and marketing analytics.',
    fullDescription: 'Validates marketing professionals on leveraging AI to accelerate content production without sacrificing brand voice or authenticity. Covers multi-channel campaigns, performance analytics narratives, and copyright/ethics safeguards.',
    targetAudience: 'Content Marketers, Growth Leads, Copywriters, Product Marketers, and Digital Strategists.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#db2777', // Pink / Rose
      secondary: '#be185d',
      border: '#fbcfe8',
      bgBadge: '#fdf2f8',
      textBadge: '#9d174d',
      gradientFrom: '#500724',
      gradientTo: '#be185d',
      diplomaParchment: '#fff1f2',
      diplomaPrimary: '#831843',
      diplomaAccent: '#db2777',
      sealColor: '#fce7f3',
      sealText: '#9d174d',
    },
    keyTopics: [
      'AI-Assisted Content Creation & Brand Voice',
      'Campaign Ideation & Multi-Channel Strategy',
      'AI-Assisted Analytics & Reporting Narratives',
      'Brand Voice, Ethics, Originality & Disclosures',
    ],
  },

  support: {
    id: 'support',
    category: 'role',
    levelNumber: 8,
    title: 'Jnachi for Customer Support',
    badgeLabel: 'JNACHI CERTIFIED IN APPLIED AI FOR CUSTOMER SUPPORT',
    roleName: 'Customer Support',
    shortDescription: 'Accelerate resolution times, intelligent ticket triage, empathetic drafting, and escalation.',
    fullDescription: 'Tests front-line customer success and support operators on using AI tools to resolve tickets rapidly while maintaining accuracy, empathy, and customer data privacy.',
    targetAudience: 'Support Specialists, Customer Success Managers, CX Leads, and Helpdesk Admins.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#0d9488', // Teal
      secondary: '#0f766e',
      border: '#99f6e4',
      bgBadge: '#f0fdfa',
      textBadge: '#115e59',
      gradientFrom: '#042f2e',
      gradientTo: '#0f766e',
      diplomaParchment: '#f0fdfa',
      diplomaPrimary: '#134e4a',
      diplomaAccent: '#0d9488',
      sealColor: '#ccfbf1',
      sealText: '#115e59',
    },
    keyTopics: [
      'Ticket Triage & Priority Classification',
      'AI-Assisted Accurate Response Drafting',
      'Escalation Judgment & Empathy Boundaries',
      'Customer PII & Data Privacy Protection',
    ],
  },

  hr: {
    id: 'hr',
    category: 'role',
    levelNumber: 9,
    title: 'Jnachi for HR & People Ops',
    badgeLabel: 'JNACHI CERTIFIED IN APPLIED AI FOR HR & PEOPLE OPS',
    roleName: 'HR & People Ops',
    shortDescription: 'Fair hiring workflows, employee policy drafting, bias mitigation, and workplace governance.',
    fullDescription: 'Validates People Operations professionals on utilizing AI responsibly. Assesses inclusive JD creation, unbiased candidate evaluation guidelines, internal policy communications, and employee confidentiality protection.',
    targetAudience: 'HR Managers, Talent Acquisition Leads, People Ops, Recruiters, and HRBPs.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#ea580c', // Orange
      secondary: '#c2410c',
      border: '#fed7aa',
      bgBadge: '#fff7ed',
      textBadge: '#9a3412',
      gradientFrom: '#431407',
      gradientTo: '#c2410c',
      diplomaParchment: '#fff7ed',
      diplomaPrimary: '#7c2d12',
      diplomaAccent: '#ea580c',
      sealColor: '#ffedd5',
      sealText: '#9a3412',
    },
    keyTopics: [
      'Responsible AI in Hiring & Job Descriptions',
      'Employee Communications & Policy Drafting',
      'Bias Awareness & Candidate Data Privacy',
      'Practical Internal AI Policy & Governance',
    ],
  },

  managers: {
    id: 'managers',
    category: 'role',
    levelNumber: 10,
    title: 'Jnachi for Managers & Team Leads',
    badgeLabel: 'JNACHI CERTIFIED IN APPLIED AI FOR MANAGERS & TEAM LEADS',
    roleName: 'Management & Leadership',
    shortDescription: 'Team AI adoption strategy, tool evaluation, enablement, and measuring sustainable ROI.',
    fullDescription: 'Assesses people managers on leading team-wide AI adoption effectively. Covers identifying high-ROI workflows, evaluating tool security/cost, coaching direct reports, and preventing unhealthy over-reliance.',
    targetAudience: 'Engineering Managers, Department Heads, Team Leads, Directors, and Operations Managers.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#475569', // Slate / Steel
      secondary: '#334155',
      border: '#cbd5e1',
      bgBadge: '#f8fafc',
      textBadge: '#1e293b',
      gradientFrom: '#0f172a',
      gradientTo: '#334155',
      diplomaParchment: '#f8fafc',
      diplomaPrimary: '#0f172a',
      diplomaAccent: '#f59e0b',
      sealColor: '#fef3c7',
      sealText: '#b45309',
    },
    keyTopics: [
      'Team AI Adoption Strategy & Workflow Selection',
      'Evaluating & Selecting AI Tools (Cost/Privacy)',
      'Enabling & Upskilling Direct Reports',
      'Measuring Real Impact & Preventing Skill Atrophy',
    ],
  },

  // PYTHON CERTIFICATIONS
  python_ai: {
    id: 'python_ai',
    category: 'python',
    levelNumber: 11,
    title: 'Jnachi Certified Python for AI & Prompt Engineering',
    badgeLabel: 'JNACHI CERTIFIED PYTHON FOR AI & PROMPT ENGINEERING',
    roleName: 'Python for AI',
    shortDescription: 'Master LLM API integration, LangChain/LlamaIndex, structured Pydantic outputs, function calling, and RAG pipelines in Python.',
    fullDescription: 'Validates Python engineers and AI practitioners on integrating state-of-the-art LLMs into production applications. Assesses OpenAI/Anthropic SDK usage, streaming, structured JSON extraction via Pydantic, vector database embeddings, tool/agent orchestration, and token cost optimization.',
    targetAudience: 'Python Developers, AI Engineers, Data Engineers, and Technical Builders developing LLM-powered applications.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#0284c7', // Python Cyan/Blue & Warm Amber
      secondary: '#0369a1',
      border: '#bae6fd',
      bgBadge: '#f0f9ff',
      textBadge: '#0369a1',
      gradientFrom: '#082f49',
      gradientTo: '#0284c7',
      diplomaParchment: '#f8fafc',
      diplomaPrimary: '#0f172a',
      diplomaAccent: '#eab308',
      sealColor: '#fef3c7',
      sealText: '#b45309',
    },
    keyTopics: [
      'LLM APIs (OpenAI/Anthropic) & Streaming in Python',
      'Structured Outputs, Pydantic & JSON Validation',
      'Function Calling, Tool Execution & Agentic Loops',
      'RAG Pipelines, Vector Embeddings & Token Optimization',
    ],
  },

  python_dev: {
    id: 'python_dev',
    category: 'python',
    levelNumber: 12,
    title: 'Jnachi Certified Applied Python & Automation',
    badgeLabel: 'JNACHI CERTIFIED IN APPLIED PYTHON & AUTOMATION',
    roleName: 'Python & Automation',
    shortDescription: 'Validate mastery in writing idiomatic Python, async workflows, task automation, API orchestration, and resilient backend scripts.',
    fullDescription: 'Evaluates proficiency in writing production-grade, maintainable Python code for automation, backend scripting, and developer workflows. Assesses type annotations, async/await pipelines, HTTP/REST integrations, error handling, secret hygiene, and automated testing.',
    targetAudience: 'Software Engineers, Automation Specialists, Backend Developers, DevOps, and Data Professionals.',
    passingScorePercent: 80,
    questionCount: 40,
    durationMinutes: 45,
    colorScheme: {
      primary: '#16a34a', // Python Green & Slate
      secondary: '#15803d',
      border: '#bbf7d0',
      bgBadge: '#f0fdf4',
      textBadge: '#166534',
      gradientFrom: '#052e16',
      gradientTo: '#15803d',
      diplomaParchment: '#f0fdf4',
      diplomaPrimary: '#14532d',
      diplomaAccent: '#ca8a04',
      sealColor: '#fef9c3',
      sealText: '#854d0e',
    },
    keyTopics: [
      'Idiomatic Python, Typing, Dataclasses & Generators',
      'Asyncio, HTTPX & Concurrent API Orchestration',
      'Robust Error Handling, Retries & Logging Systems',
      'Secure Secret Management, Testing & Package Hygiene',
    ],
  },
};

export const CORE_TIER_ORDER: CertTier[] = ['beginner', 'practitioner', 'builder', 'master'];
export const ROLE_TIER_ORDER: CertTier[] = ['sales', 'developers', 'marketers', 'support', 'hr', 'managers'];
export const PYTHON_TIER_ORDER: CertTier[] = ['python_ai', 'python_dev'];
export const TIER_ORDER: CertTier[] = [...CORE_TIER_ORDER, ...ROLE_TIER_ORDER, ...PYTHON_TIER_ORDER];

export function isValidTier(tier: unknown): tier is CertTier {
  return typeof tier === 'string' && tier in CERT_TIERS;
}


