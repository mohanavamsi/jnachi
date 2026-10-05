import { CertTier } from './certTypes';
import { CertSection } from './certQuestions/types';

export interface SyllabusTopic {
  title: string;
  description: string;
  skillsAssessed: string[];
}

export interface SyllabusSection {
  id: CertSection;
  title: string;
  weightPercent: number;
  overview: string;
  topics: SyllabusTopic[];
  recommendedLessonSlugs?: string[];
}

export interface CertSyllabusData {
  tier: CertTier;
  title: string;
  overview: string;
  targetRole: string;
  examSpecs: {
    totalQuestions: number;
    durationMinutes: number;
    passingScorePercent: number;
    proctoringRules: string[];
  };
  sections: Record<CertSection, SyllabusSection>;
  preparationPath: Array<{ stepNumber: number; title: string; action: string }>;
}

const COMMON_PROCTORING_RULES = [
  'Proctored tab-switch & focus monitoring (3-strike limit before auto-invalidation)',
  'Direct clipboard & context-menu lock during the examination window',
  '45-minute strict countdown timer with automatic answer state persistence',
  '80% minimum passing score required across 40 randomized scenario questions',
];

const COMMON_PREP_PATH = [
  { stepNumber: 1, title: 'Review Syllabus', action: 'Understand core competencies and domain weights for this tier.' },
  { stepNumber: 2, title: 'Study Lesson Library', action: 'Work through interactive lessons and practical micro-tasks.' },
  { stepNumber: 3, title: 'Scenario Practice', action: 'Practice prompt refactoring, JSON schemas, and privacy rules.' },
  { stepNumber: 4, title: 'Proctored Exam', action: 'Complete the 40-question proctored exam to earn your official diploma.' },
];

export const CERT_SYLLABUS: Record<CertTier, CertSyllabusData> = {
  // 1. BEGINNER (AI FOUNDATIONS)
  beginner: {
    tier: 'beginner',
    title: 'Jnachi Certified AI Foundations (Level 1)',
    overview: 'Validates baseline practical fluency across core prompting anatomy, context hygiene, basic automation, and confidentiality redlines.',
    targetRole: 'Professionals, students, and teams starting their applied AI journey.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'AI Literacy & Prompt Anatomy',
        weightPercent: 25,
        overview: 'Core prompt structure, instructions, role framing, and hallucination management.',
        topics: [
          {
            title: 'Prompt Anatomy & Structure',
            description: 'Decomposing tasks into explicit roles, instructions, context, constraints, and format specs.',
            skillsAssessed: ['Role Prompting', 'Constraint Setting', 'Format Specification'],
          },
          {
            title: 'Hallucination Management',
            description: 'Applying strict grounding rules and uncertainty handling to eliminate false claims.',
            skillsAssessed: ['Grounding Verification', 'Uncertainty Calibration'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Workflow Automation',
        weightPercent: 25,
        overview: 'Standardized prompt templates, batch transformations, and table extractions.',
        topics: [
          {
            title: 'Reusable Prompt Templates',
            description: 'Building parameterized prompt macros for repetitive daily writing and summary tasks.',
            skillsAssessed: ['Template Design', 'Batch Processing'],
          },
          {
            title: 'Structured Extraction',
            description: 'Converting unstructured transcripts and meeting notes into standardized tables.',
            skillsAssessed: ['Information Extraction', 'Table Formatting'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Privacy & Ethics',
        weightPercent: 25,
        overview: 'Client-side PII redaction, Zero Data Retention (ZDR), and enterprise security.',
        topics: [
          {
            title: 'PII Scrubbing & Redaction',
            description: 'Identifying and masking confidential names, tokens, client info, and internal secrets.',
            skillsAssessed: ['PII Masking', 'Data Classification'],
          },
          {
            title: 'Enterprise AI Policies',
            description: 'Understanding vendor data retention policies and public vs. private subscription boundaries.',
            skillsAssessed: ['ZDR Compliance', 'Risk Mitigation'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Critical Judgment & Problem Solving',
        weightPercent: 25,
        overview: 'Fact verification, critical evaluation, and human-in-the-loop sign-off.',
        topics: [
          {
            title: 'Fact Checking & Verification',
            description: 'Auditing AI output for factual errors, outdated claims, and logical inconsistencies.',
            skillsAssessed: ['Fact Checking', 'Critical Evaluation'],
          },
          {
            title: 'Iterative Refinement',
            description: 'Diagnosing flawed AI drafts and steering outputs with targeted feedback loops.',
            skillsAssessed: ['Iterative Prompting', 'Quality Assurance'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 2. PRACTITIONER (AI PRACTITIONER)
  practitioner: {
    tier: 'practitioner',
    title: 'Jnachi Certified AI Practitioner (Level 2)',
    overview: 'Evaluates hands-on efficiency in daily tasks: deep prompt calibration, structured JSON schemas, document synthesis, and enterprise redaction.',
    targetRole: 'Knowledge workers, product managers, analysts, and operators using AI tools daily.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Advanced Prompting & Few-Shot Modeling',
        weightPercent: 25,
        overview: 'Structured JSON schemas, few-shot exemplars, delimiter discipline, and edge-case handling.',
        topics: [
          {
            title: 'Few-Shot Calibration & Exemplars',
            description: 'Using high-variance input/output pairs to guide complex, nuanced formatting requirements.',
            skillsAssessed: ['Few-Shot Design', 'Schema Enforcement'],
          },
          {
            title: 'Strict JSON Schema Enforcement',
            description: 'Enforcing typed JSON/YAML outputs with syntax verification and error guardrails.',
            skillsAssessed: ['JSON Schemas', 'Output Validation'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Deep Document Synthesis',
        weightPercent: 25,
        overview: 'Cross-document analysis, qualitative thematic extraction, and multi-prompt chains.',
        topics: [
          {
            title: 'Cross-Document Research Synthesis',
            description: 'Extracting key themes, contradictions, and data points across disparate PDF reports.',
            skillsAssessed: ['Document Analysis', 'Synthesis'],
          },
          {
            title: 'Prompt Chaining & Extraction',
            description: 'Decomposing complex analysis into sequential extraction, synthesis, and review prompts.',
            skillsAssessed: ['Multi-Step Chaining', 'Pipeline Architecture'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Enterprise Data Governance',
        weightPercent: 25,
        overview: 'Deterministic token masking, vendor DPA evaluation, and regulated data handling.',
        topics: [
          {
            title: 'Deterministic Token Replacement',
            description: 'Masking sensitive entities with reproducible tokens and safe re-identification mapping.',
            skillsAssessed: ['Token Masking', 'Security Hygiene'],
          },
          {
            title: 'Enterprise Vendor Compliance',
            description: 'Auditing third-party LLM vendors for SOC2, DPA, and training opt-out guarantees.',
            skillsAssessed: ['DPA Auditing', 'Regulatory Compliance'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Strategic Output Evaluation',
        weightPercent: 25,
        overview: 'Stress-testing prompts, spotting subtle fallacies, and quality assurance benchmarking.',
        topics: [
          {
            title: 'Stress-Testing & Edge Cases',
            description: 'Subjecting prompts to adversarial, contradictory, and out-of-distribution user inputs.',
            skillsAssessed: ['Edge Case Testing', 'Robustness'],
          },
          {
            title: 'Model Quality & Benchmark Analysis',
            description: 'Evaluating trade-offs between model intelligence, latency, and operational cost.',
            skillsAssessed: ['Model Selection', 'Cost/Latency Optimization'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 3. BUILDER (AI BUILDER)
  builder: {
    tier: 'builder',
    title: 'Jnachi Certified AI Builder (Level 3)',
    overview: 'Measures your mastery of building automated multi-step AI workflows, custom system instructions, function calling, tool augmentation, and error recovery.',
    targetRole: 'Engineers, technical operators, no-code builders, and automation architects.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'System Prompts & Function Calling',
        weightPercent: 25,
        overview: 'Immutable system boundaries, tool calling schemas, and structured error fallbacks.',
        topics: [
          {
            title: 'System Instructions & Boundary Isolation',
            description: 'Crafting immutable system prompts that prevent injection and preserve instructions.',
            skillsAssessed: ['System Prompt Engineering', 'Boundary Enforcement'],
          },
          {
            title: 'JSON Function & Tool Calling',
            description: 'Defining typed function schemas and handling malformed API calls gracefully.',
            skillsAssessed: ['Tool Calling Schemas', 'Parameter Typing'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Multi-Step Agent Pipelines',
        weightPercent: 25,
        overview: 'Sequential pipelines, state handoffs, routing agents, and iterative refinement loops.',
        topics: [
          {
            title: 'Agent Task Decomposition',
            description: 'Decomposing complex workflows into specialized Planner, Worker, and Judge agents.',
            skillsAssessed: ['Agent Architecture', 'State Management'],
          },
          {
            title: 'Prompt Routing & Classification',
            description: 'Dynamically routing queries to specialized model tiers based on intent and cost.',
            skillsAssessed: ['Dynamic Routing', 'Cost Optimization'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'RAG Security & Vector Hygiene',
        weightPercent: 25,
        overview: 'Indirect prompt injection defense, vector chunking, and secrets isolation.',
        topics: [
          {
            title: 'Indirect Prompt Injection Defense',
            description: 'Sanitizing untrusted external documents and web scrapes before feeding into context.',
            skillsAssessed: ['Injection Mitigation', 'Context Sanitization'],
          },
          {
            title: 'Vector Database Hygiene & RBAC',
            description: 'Ensuring strict tenant isolation and access controls across retrieval pipelines.',
            skillsAssessed: ['RAG Architecture', 'Access Control'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Observability & Failure Recovery',
        weightPercent: 25,
        overview: 'Automated evaluation suites, retry budgets, cost tracking, and graceful degradation.',
        topics: [
          {
            title: 'Automated LLM Evaluation',
            description: 'Setting up LLM-as-a-judge pipelines and deterministic regression test suites.',
            skillsAssessed: ['Automated Eval', 'Regression Testing'],
          },
          {
            title: 'Retry Budgets & Fallback Patterns',
            description: 'Preventing cascading timeouts with exponential backoff and degraded-mode logic.',
            skillsAssessed: ['Fault Tolerance', 'Observability'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 4. MASTER (AI MASTER ARCHITECT)
  master: {
    tier: 'master',
    title: 'Jnachi Certified AI Master Architect (Level 4)',
    overview: 'The pinnacle benchmark. Strategic AI evaluation, enterprise governance, knowing when NOT to use AI, and organizational leadership.',
    targetRole: 'AI team leads, enterprise architects, directors, and strategic decision-makers.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Strategic Evaluation & "When NOT to Use AI"',
        weightPercent: 25,
        overview: 'Deterministic vs. probabilistic trade-offs, TCO auditing, and avoiding technical debt.',
        topics: [
          {
            title: 'Deterministic vs. Probabilistic Auditing',
            description: 'Knowing when rules-based code or standard DB lookups vastly outperform AI.',
            skillsAssessed: ['Architecture Trade-offs', 'TCO Analysis'],
          },
          {
            title: 'Technical Debt & Vendor Lock-In',
            description: 'Designing model-agnostic abstraction layers that prevent vendor dependency.',
            skillsAssessed: ['Vendor Agnosticism', 'Debt Mitigation'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Enterprise Architecture & Scale',
        weightPercent: 25,
        overview: 'Hybrid local/cloud models, semantic caching, and high-throughput batch systems.',
        topics: [
          {
            title: 'Hybrid Deployment & Semantic Caching',
            description: 'Deploying on-premise SLMs alongside cloud frontier models with semantic caching.',
            skillsAssessed: ['Hybrid Architecture', 'Semantic Caching'],
          },
          {
            title: 'High-Throughput Batch Processing',
            description: 'Designing resilient queueing architectures for millions of asynchronous inferences.',
            skillsAssessed: ['Queue Management', 'Throughput Scaling'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Governance, Red-Teaming & Compliance',
        weightPercent: 25,
        overview: 'NIST AI RMF, EU AI Act, bias auditing, red-teaming, and liability frameworks.',
        topics: [
          {
            title: 'Regulatory Compliance & Risk Frameworks',
            description: 'Operationalizing EU AI Act, ISO 42001, and NIST AI RMF across business units.',
            skillsAssessed: ['AI Governance', 'Regulatory Compliance'],
          },
          {
            title: 'Enterprise Red-Teaming & Bias Audits',
            description: 'Executing adversarial red-teaming exercises and mitigating demographic bias.',
            skillsAssessed: ['Red-Teaming', 'Bias Auditing'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Organizational Transformation',
        weightPercent: 25,
        overview: 'Building AI centers of excellence, change management, and measuring real ROI.',
        topics: [
          {
            title: 'AI Centers of Excellence (CoE)',
            description: 'Structuring cross-functional enablement programs that scale AI adoption safely.',
            skillsAssessed: ['Enablement', 'Change Management'],
          },
          {
            title: 'Preserving Core Human Judgment',
            description: 'Safeguarding domain critical thinking from cognitive atrophy in AI workflows.',
            skillsAssessed: ['Skill Preservation', 'ROI Measurement'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 5. SALES
  sales: {
    tier: 'sales',
    title: 'Jnachi for Sales (AI-Powered Revenue Operations)',
    overview: 'Master AI-driven prospecting, hyper-personalized outreach at scale, CRM automation, proposal drafting, and client confidentiality in deal cycles.',
    targetRole: 'Account Executives, SDRs/BDRs, Sales Leaders, Account Managers, and Revenue Ops.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'AI-Assisted Prospecting & Outreach',
        weightPercent: 25,
        overview: 'Writing personalized cold outreach at scale, rapid account research, and adaptive sequences.',
        topics: [
          {
            title: 'Hyper-Personalized Outreach at Scale',
            description: 'Crafting non-generic cold emails by fusing account signals with personalized value hooks.',
            skillsAssessed: ['Cold Outreach', 'Personalization'],
          },
          {
            title: '3-Minute Pre-Call Account Research',
            description: 'Extracting key strategic priorities, pain points, and executive quotes using AI.',
            skillsAssessed: ['Account Research', 'Signal Extraction'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'CRM & Workflow Integration',
        weightPercent: 25,
        overview: 'Call transcript extraction, automatic CRM updates, and deal stage recommendations.',
        topics: [
          {
            title: 'Discovery Call Transcript Extraction',
            description: 'Summarizing Gong/Zoom transcripts into clean BANT/MEDDPICC fields and action items.',
            skillsAssessed: ['Transcript Parsing', 'CRM Automation'],
          },
          {
            title: 'Deal Pipeline Automation',
            description: 'Automating pipeline hygiene while catching mismatched or illogical next steps.',
            skillsAssessed: ['Pipeline Management', 'Next-Step Analysis'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Client Communication & Deal Support',
        weightPercent: 25,
        overview: 'Custom proposal drafting, objection handling matrices, and human-in-the-loop sign-off.',
        topics: [
          {
            title: 'Proposals & Objection Matrices',
            description: 'Drafting tailored commercial proposals and dynamic negotiation talking points.',
            skillsAssessed: ['Proposal Drafting', 'Objection Handling'],
          },
          {
            title: 'Relationship Trust vs. Speed',
            description: 'Balancing automated efficiency with genuine executive relationship-building.',
            skillsAssessed: ['Human-in-the-Loop', 'Client Trust'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Judgment & Data Handling in Sales',
        weightPercent: 25,
        overview: 'Protecting confidential deal terms, verifying pricing, and avoiding overconfident claims.',
        topics: [
          {
            title: 'Deal Data Confidentiality Redlines',
            description: 'Strictly preventing proprietary client financials and NDAs from public AI exposure.',
            skillsAssessed: ['Data Redlines', 'NDA Protection'],
          },
          {
            title: 'Fact-Checking Competitor Claims',
            description: 'Eliminating hallucinated battlecard claims and verifying pricing before sharing.',
            skillsAssessed: ['Competitor Verification', 'Pricing Integrity'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 6. DEVELOPERS
  developers: {
    tier: 'developers',
    title: 'Jnachi for Developers (AI-Assisted Software Engineering)',
    overview: 'Accelerate coding velocity, precision debugging, IDE agent workflows, security audits, and responsible code licensing hygiene.',
    targetRole: 'Software Engineers, Full-Stack Developers, DevOps, Tech Leads, and QA Engineers.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'AI-Assisted Coding & Debugging',
        weightPercent: 25,
        overview: 'Code generation, refactoring, context-rich debugging, and iterative code refinement.',
        topics: [
          {
            title: 'Idiomatic Code Generation',
            description: 'Prompting for clean, typed, modular code aligned with project architecture.',
            skillsAssessed: ['Code Generation', 'Boilerplate Reduction'],
          },
          {
            title: 'Precision Root-Cause Debugging',
            description: 'Providing stack traces, environment state, and constraints to isolate bugs quickly.',
            skillsAssessed: ['Stack Trace Debugging', 'Iterative Refinement'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Tool & Coding Agent Workflows',
        weightPercent: 25,
        overview: 'In-IDE assistants, CLI terminal agents, PR reviews, and multi-file code refactoring.',
        topics: [
          {
            title: 'IDE Agents & Task Delegation',
            description: 'Knowing the boundary between inline autocomplete and multi-file agent execution.',
            skillsAssessed: ['Coding Agents', 'IDE Workflows'],
          },
          {
            title: 'CI/CD & Pull Request Automation',
            description: 'Integrating automated PR summarization, test generation, and review comments.',
            skillsAssessed: ['PR Automation', 'CI/CD Integration'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Code Quality, Security & Audits',
        weightPercent: 25,
        overview: 'Static vulnerability review, hallucinated dependencies, and architectural standards.',
        topics: [
          {
            title: 'Security & Vulnerability Auditing',
            description: 'Catching OWASP flaws, injection risks, and insecure defaults in AI code snippets.',
            skillsAssessed: ['Vulnerability Review', 'Dependency Verification'],
          },
          {
            title: 'Testing AI-Generated Code',
            description: 'Writing comprehensive unit and edge-case tests rather than trusting code blindly.',
            skillsAssessed: ['Unit Testing', 'Quality Assurance'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Responsible AI Use in Engineering',
        weightPercent: 25,
        overview: 'Protecting proprietary source code, software licenses, and team contribution clarity.',
        topics: [
          {
            title: 'Proprietary Codebase Hygiene',
            description: 'Safeguarding secret API tokens, database keys, and proprietary IP from leaks.',
            skillsAssessed: ['Secret Isolation', 'Repository Security'],
          },
          {
            title: 'Open Source Licensing & Copyleft',
            description: 'Preventing unintentional GPL copyleft license contamination from AI-suggested code.',
            skillsAssessed: ['License Compliance', 'IP Protection'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 7. MARKETERS
  marketers: {
    tier: 'marketers',
    title: 'Jnachi for Marketers (AI-Powered Growth & Brand Storytelling)',
    overview: 'Master omnichannel content creation, campaign ideation, performance reporting narratives, and brand voice preservation.',
    targetRole: 'Content Marketers, Growth Leads, Copywriters, Product Marketers, and Digital Strategists.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'AI-Assisted Content & Brand Voice',
        weightPercent: 25,
        overview: 'Multi-format copywriting, persona tone guidelines, and eliminating generic tropes.',
        topics: [
          {
            title: 'Omnichannel Brand Copywriting',
            description: 'Generating engaging social hooks, blog drafts, ad copy, and email newsletters.',
            skillsAssessed: ['Copywriting', 'Brand Voice'],
          },
          {
            title: 'Eradicating AI Clichés',
            description: 'Identifying and replacing generic buzzwords with punchy, authentic human prose.',
            skillsAssessed: ['Tone Calibration', 'Editing & Polish'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Campaign Ideation & Multi-Channel Strategy',
        weightPercent: 25,
        overview: 'Brainstorming angles, A/B messaging variants, and cross-channel concept adaptation.',
        topics: [
          {
            title: 'Rapid Campaign Angle Brainstorming',
            description: 'Generating high-contrast messaging angles and creative hooks for buyer personas.',
            skillsAssessed: ['Creative Ideation', 'A/B Variant Generation'],
          },
          {
            title: 'Content Repurposing Workflows',
            description: 'Adapting a single pillar asset across 10+ channel formats with zero tone drift.',
            skillsAssessed: ['Content Repurposing', 'Multi-Channel Strategy'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Analytics & Reporting Narratives',
        weightPercent: 25,
        overview: 'Synthesizing campaign metrics, executive summaries, and avoiding data misinterpretation.',
        topics: [
          {
            title: 'Marketing Performance Narratives',
            description: 'Translating CAC, ROAS, and conversion metrics into clear executive summaries.',
            skillsAssessed: ['Analytics Summarization', 'Narrative Reporting'],
          },
          {
            title: 'Data Integrity & Statistical Verification',
            description: 'Preventing AI oversimplification and false correlation in campaign reporting.',
            skillsAssessed: ['Data Verification', 'Insight Auditing'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Brand Voice, Ethics & Originality',
        weightPercent: 25,
        overview: 'Copyright risks, fact-checking claims, authentic storytelling, and transparency.',
        topics: [
          {
            title: 'Copyright & Plagiarism Safeguards',
            description: 'Ensuring AI-generated creative assets do not mirror copyrighted material.',
            skillsAssessed: ['Copyright Safety', 'Originality'],
          },
          {
            title: 'Public Claim Fact-Checking',
            description: 'Cross-verifying all public statistics, quotes, and product claims before publishing.',
            skillsAssessed: ['Fact Checking', 'Brand Reputation'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 8. CUSTOMER SUPPORT
  support: {
    tier: 'support',
    title: 'Jnachi for Customer Support (Empathetic AI CX & Resolution)',
    overview: 'Accelerate resolution times with AI ticket triage, empathetic on-brand response drafting, human escalation judgment, and customer PII protection.',
    targetRole: 'Support Specialists, Customer Success Managers, CX Leads, and Helpdesk Admins.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Ticket Triage & Prioritization',
        weightPercent: 25,
        overview: 'Intelligent classification, sentiment detection, urgent ticket flagging, and trend detection.',
        topics: [
          {
            title: 'High-Precision Ticket Categorization',
            description: 'Classifying incoming tickets by product area, severity, and customer sentiment.',
            skillsAssessed: ['Ticket Triage', 'Sentiment Analysis'],
          },
          {
            title: 'Bug & Outage Pattern Detection',
            description: 'Detecting emerging product issues across ticket spikes in real time.',
            skillsAssessed: ['Pattern Detection', 'Urgency Flagging'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'AI-Assisted Response Drafting',
        weightPercent: 25,
        overview: 'Accurate product knowledge extraction, empathetic phrasing, and speed optimization.',
        topics: [
          {
            title: 'Empathetic Troubleshooting Drafts',
            description: 'Synthesizing knowledge base articles into clear, step-by-step customer solutions.',
            skillsAssessed: ['Response Drafting', 'Empathetic Tone'],
          },
          {
            title: 'Hallucination & Policy Prevention',
            description: 'Catching and eliminating hallucinated features or unapproved SLA commitments.',
            skillsAssessed: ['Policy Verification', 'Accuracy Assurance'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Escalation Judgment & Boundaries',
        weightPercent: 25,
        overview: 'Managing angry customers, complex billing disputes, and human handover criteria.',
        topics: [
          {
            title: 'Human Handover Triggers',
            description: 'Recognizing when high-stakes, emotionally charged conflicts demand human empathy.',
            skillsAssessed: ['Escalation Criteria', 'De-escalation'],
          },
          {
            title: 'Preventing False Promises',
            description: 'Ensuring AI drafts do not make legally binding refunds or product guarantees.',
            skillsAssessed: ['Risk Boundaries', 'Compliance'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Data Privacy in Support Conversations',
        weightPercent: 25,
        overview: 'Redacting customer credit cards, credentials, medical data, and HIPAA/GDPR rules.',
        topics: [
          {
            title: 'Customer PII Redaction',
            description: 'Scrubbing passwords, credit cards, SSNs, and identity documents before AI prompt.',
            skillsAssessed: ['PII Scrubbing', 'GDPR/CCPA Compliance'],
          },
          {
            title: 'Long-Term Customer Trust',
            description: 'Maintaining transparent, ethical AI assistance that builds customer loyalty.',
            skillsAssessed: ['Trust Preservation', 'Ethical CX'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 9. HR & PEOPLE OPS
  hr: {
    tier: 'hr',
    title: 'Jnachi for HR & People Ops (Fair, Ethical & Productive People Operations)',
    overview: 'Implement fair AI in talent screening, empathetic employee communications, candidate privacy protection, and workplace AI policy governance.',
    targetRole: 'HR Managers, Talent Acquisition Leads, People Ops, Recruiters, and HRBPs.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Responsible AI in Hiring & Screening',
        weightPercent: 25,
        overview: 'Writing unbiased job descriptions, structured rubric generation, and candidate screening.',
        topics: [
          {
            title: 'Inclusive Job Descriptions',
            description: 'Drafting clear, gender-neutral, competency-based job descriptions.',
            skillsAssessed: ['JD Design', 'Inclusive Language'],
          },
          {
            title: 'Structured Interview Rubrics',
            description: 'Generating fair, objective interview rubrics and candidate evaluation criteria.',
            skillsAssessed: ['Rubric Generation', 'Bias Mitigation'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Employee Communication & Policies',
        weightPercent: 25,
        overview: 'Internal handbooks, sensitive announcements, and nuanced compensation discussions.',
        topics: [
          {
            title: 'Internal Policy & Handbook Drafting',
            description: 'Drafting employee guides, onboarding roadmaps, and leave policies in clear language.',
            skillsAssessed: ['Policy Drafting', 'Internal Comms'],
          },
          {
            title: 'Sensitive Communications Calibration',
            description: 'Calibrating appropriate, compassionate tone for PIPs, restructuring, and leaves.',
            skillsAssessed: ['Tone Calibration', 'HR Discretion'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Privacy & Bias Awareness',
        weightPercent: 25,
        overview: 'Safeguarding employee medical, compensation, and review records from data leaks.',
        topics: [
          {
            title: 'Employee Data Redlines',
            description: 'Protecting performance reviews, salaries, and medical notes from external AI tools.',
            skillsAssessed: ['Data Redlines', 'Personnel Privacy'],
          },
          {
            title: 'Auditing for Algorithmic Fairness',
            description: 'Ensuring AI-assisted recruiting pipelines do not introduce demographic bias.',
            skillsAssessed: ['Fairness Auditing', 'Diversity Compliance'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Internal AI Policy & Governance',
        weightPercent: 25,
        overview: 'Drafting employee AI guidelines, safe tool lists, and practical governance rollout.',
        topics: [
          {
            title: 'Workplace AI Acceptable Use Policies',
            description: 'Creating practical, non-technical guidelines that keep employees safe and productive.',
            skillsAssessed: ['Policy Governance', 'Employee Enablement'],
          },
          {
            title: 'Evolving Company AI Guidelines',
            description: 'Iterating workplace AI policies in lockstep with new multimodal and agentic tools.',
            skillsAssessed: ['Governance Strategy', 'Risk Management'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 10. MANAGERS & TEAM LEADS
  managers: {
    tier: 'managers',
    title: 'Jnachi for Managers & Team Leads (AI Leadership & Sustainable Team Enablement)',
    overview: 'Lead high-performing teams through AI adoption: workflow selection, tool security/cost evaluation, team training, and preventing skill atrophy.',
    targetRole: 'Engineering Managers, Department Heads, Team Leads, Directors, and Operations Managers.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Team AI Adoption Strategy',
        weightPercent: 25,
        overview: 'Identifying high-ROI workflows, gradual rollouts, and setting realistic productivity expectations.',
        topics: [
          {
            title: 'High-Impact Workflow Identification',
            description: 'Auditing team tasks to prioritize high-leverage AI opportunities with low error risk.',
            skillsAssessed: ['Workflow Auditing', 'Adoption Strategy'],
          },
          {
            title: 'Realistic Productivity Expectations',
            description: 'Setting grounded benchmarks and avoiding mandates that disrupt core operations.',
            skillsAssessed: ['Expectation Setting', 'Change Management'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Evaluating & Selecting AI Tools',
        weightPercent: 25,
        overview: 'Security vetting, cost-per-seat ROI, small pilots, and avoiding vendor hype.',
        topics: [
          {
            title: 'Vendor Vetting & Pilot Programs',
            description: 'Testing tools in controlled pilots with explicit ROI and security criteria.',
            skillsAssessed: ['Vendor Evaluation', 'Pilot Execution'],
          },
          {
            title: 'TCO & Data Privacy Assessment',
            description: 'Evaluating per-seat licensing, API costs, and corporate DPA compliance.',
            skillsAssessed: ['Cost Analysis', 'Security Assessment'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Enabling & Training Direct Reports',
        weightPercent: 25,
        overview: 'Foundational literacy, psychological safety, and coaching both skeptics and over-reliant users.',
        topics: [
          {
            title: 'Hands-On Team Enablement',
            description: 'Running practical prompt clinics and creating psychological safety for experiments.',
            skillsAssessed: ['Team Coaching', 'Skill Building'],
          },
          {
            title: 'Addressing Over-Reliance & Skepticism',
            description: 'Catching blind trust early while helping hesitant team members build confidence.',
            skillsAssessed: ['Over-Reliance Mitigation', 'Coaching'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Measuring Impact & Avoiding Atrophy',
        weightPercent: 25,
        overview: 'Real business ROI metrics, preventing domain skill atrophy, and executive reporting.',
        topics: [
          {
            title: 'Meaningful AI Adoption Metrics',
            description: 'Tracking quality, speed, and employee satisfaction beyond superficial adoption vanity.',
            skillsAssessed: ['Impact Measurement', 'Executive Reporting'],
          },
          {
            title: 'Preserving Human Expertise',
            description: 'Ensuring core critical thinking and judgment remain strong across the organization.',
            skillsAssessed: ['Skill Preservation', 'Accountability'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 11. PYTHON FOR AI & PROMPT ENGINEERING
  python_ai: {
    tier: 'python_ai',
    title: 'Jnachi Certified Python for AI & Prompt Engineering',
    overview: 'Validates Python engineers and AI practitioners on integrating LLMs into production applications, including OpenAI/Anthropic SDKs, Pydantic structured extraction, function calling, agent loops, RAG, and token cost optimization.',
    targetRole: 'Python Developers, AI Engineers, Data Engineers, and Technical Builders developing LLM-powered applications.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'LLM APIs, Structured Outputs & Streaming',
        weightPercent: 25,
        overview: 'Mastery of official Python SDKs, streaming token generators, Pydantic schema constraints, and prompt formatting.',
        topics: [
          {
            title: 'Official SDKs & Parameter Calibration',
            description: 'Configuring client sessions, temperature, top_p, seeds, and system/user message orchestration.',
            skillsAssessed: ['OpenAI/Anthropic SDKs', 'Async Streaming', 'Temperature Tuning'],
          },
          {
            title: 'Pydantic & Strict Structured Outputs',
            description: 'Using BaseModel schemas to guarantee runtime JSON validation and type safety.',
            skillsAssessed: ['Pydantic Validation', 'Structured Extraction', 'JSON Schemas'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Function Calling, Tools & Agentic Loops',
        weightPercent: 25,
        overview: 'Designing external tool schemas, parsing function call arguments, and building resilient ReAct/graph agent loops.',
        topics: [
          {
            title: 'Function Calling & Tool Execution',
            description: 'Declarative tool schemas, parameter parsing, error boundaries, and dynamic tool selection.',
            skillsAssessed: ['Tool Calling', 'Schema Definition', 'Safe Execution'],
          },
          {
            title: 'Agent Orchestration & ReAct Loops',
            description: 'Implementing multi-step agent iterations, state persistence, recursion breakers, and memory buffers.',
            skillsAssessed: ['Agent Loops', 'State Management', 'Recursion Control'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Security, Key Management & Redaction',
        weightPercent: 25,
        overview: 'Hardening Python AI pipelines against prompt injection, secret leaks, SSRF, and sensitive PII exposure.',
        topics: [
          {
            title: 'Credential Hygiene & Zero Retention',
            description: 'Loading environment variables securely, KMS vaulting, and verifying enterprise ZDR policies.',
            skillsAssessed: ['Secret Management', 'ZDR Policies', 'Security Posture'],
          },
          {
            title: 'Prompt Injection Defense & PII Redaction',
            description: 'Sanitizing dynamic user input with delimiters/guardrails and masking personal identifiers before egress.',
            skillsAssessed: ['Prompt Injection Defense', 'Presidio/PII Masking', 'SSRF Prevention'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'RAG Pipelines, Vector Search & Optimization',
        weightPercent: 25,
        overview: 'Building scalable retrieval pipelines, vector embeddings, re-ranking, token caching, and performance evals.',
        topics: [
          {
            title: 'RAG Architecture & Hybrid Search',
            description: 'Chunking strategies, embedding generation, dense vs. BM25 hybrid search, and cross-encoder re-ranking.',
            skillsAssessed: ['RAG Design', 'Embedding Generation', 'Hybrid Search'],
          },
          {
            title: 'Token Optimization & LLM Evals',
            description: 'Semantic caching, model cascading, prompt compression, and automated evaluation metrics (Faithfulness/Recall).',
            skillsAssessed: ['Cost/Token Optimization', 'Semantic Caching', 'Ragas/Evals'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 12. APPLIED PYTHON & AUTOMATION
  python_dev: {
    tier: 'python_dev',
    title: 'Jnachi Certified Applied Python & Automation',
    overview: 'Evaluates proficiency in writing production-grade, maintainable Python code for task automation, async workflows, HTTP/REST integrations, secret management, and robust backend scripting.',
    targetRole: 'Software Engineers, Automation Specialists, Backend Developers, DevOps, and Data Professionals.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Idiomatic Python, Typing & Data Structures',
        weightPercent: 25,
        overview: 'Modern Python 3.10+ syntax, structural pattern matching, dataclasses, generators, and static typing.',
        topics: [
          {
            title: 'Modern Idioms & Pattern Matching',
            description: 'Utilizing match/case, slots, context managers, and expressive type annotations.',
            skillsAssessed: ['Pattern Matching', 'Dataclasses', 'Type Annotations'],
          },
          {
            title: 'Memory Optimization & Generators',
            description: 'Lazy generator evaluation, iterator protocols, and low-memory data transformation.',
            skillsAssessed: ['Generators', 'Memory Profiling', 'Efficiency'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Async Workflows, Scraping & OS Scripting',
        weightPercent: 25,
        overview: 'Building concurrent network pipelines with asyncio, cross-platform pathlib automation, and subprocess orchestration.',
        topics: [
          {
            title: 'Asyncio & Structured Concurrency',
            description: 'Async task groups, non-blocking HTTP clients (HTTPX), rate limiters, and graceful shutdown handling.',
            skillsAssessed: ['Asyncio', 'TaskGroups', 'Non-blocking I/O'],
          },
          {
            title: 'System & ETL Automation',
            description: 'Pathlib filesystem manipulation, subprocess streaming, streaming CSV/JSON, and CLI development.',
            skillsAssessed: ['Pathlib', 'Subprocess', 'CLI Tooling'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Security, Cryptography & Dependency Auditing',
        weightPercent: 25,
        overview: 'Preventing deserialization vulnerabilities, SQL injection, timing attacks, and securing containerized credentials.',
        topics: [
          {
            title: 'Secure Serialization & Injection Defense',
            description: 'Avoiding unsafe pickle deserialization, parameterized database execution, and path traversal guards.',
            skillsAssessed: ['Safe Serialization', 'SQL Injection Defense', 'Path Sanitization'],
          },
          {
            title: 'Constant-Time Hashing & Dependency Scans',
            description: 'Using `secrets` and constant-time comparison, bcrypt hashing, and automated `pip-audit` security checks.',
            skillsAssessed: ['Constant-Time Auth', 'Password Hashing', 'Vulnerability Auditing'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Resilience, Testing, CI/CD & Performance',
        weightPercent: 25,
        overview: 'Implementing exponential retry backoffs, structured JSON logging, pytest fixtures, and pyproject.toml packaging.',
        topics: [
          {
            title: 'Fault Tolerance & Profiling',
            description: 'Exponential retry decorators (tenacity), circuit breakers, cProfile analysis, and connection pooling.',
            skillsAssessed: ['Tenacity Retries', 'Circuit Breakers', 'cProfile'],
          },
          {
            title: 'Testing, Static Analysis & CI/CD',
            description: 'Advanced pytest fixtures, hypothesis property testing, mypy strict type checking, and modern packaging.',
            skillsAssessed: ['Pytest Fixtures', 'Property Testing', 'Mypy Strict CI'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 13. MULESOFT INTEGRATION ARCHITECT
  mulesoft: {
    tier: 'mulesoft',
    title: 'Jnachi Integration Architect Certification — MuleSoft API-Led Track',
    overview: 'Validates production mastery in 3-Tier API-Led architecture, RAML/OAS design, DataWeave 2.0 transformations, CloudHub 2.0 deployments, and Anypoint security governance.',
    targetRole: 'Integration Architects, MuleSoft Developers, Enterprise Middleware Leads, and API Designers.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'RAML / OAS & API-Led Architecture',
        weightPercent: 25,
        overview: 'Designing RESTful API specifications with RAML 1.0 / OAS 3.0, 3-tier layering (System, Process, Experience), and contract-first workflows.',
        topics: [
          {
            title: 'API-Led Connectivity & Layering',
            description: 'Decomposing monolithic workflows into System, Process, and Experience APIs to maximize reusability and decoupling.',
            skillsAssessed: ['API-Led 3-Tier', 'Reusability', 'Contract Governance'],
          },
          {
            title: 'RAML 1.0 & OAS 3.0 Contract Design',
            description: 'Data types, traits, resource types, mocking service simulation, and API versioning strategies.',
            skillsAssessed: ['RAML 1.0 / OAS 3.0', 'Traits & ResourceTypes', 'Mocking Services'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'DataWeave 2.0 & Workflow Orchestration',
        weightPercent: 25,
        overview: 'Advanced functional transformations with DataWeave 2.0, streaming payloads, batch processing, and connector orchestration.',
        topics: [
          {
            title: 'DataWeave 2.0 Functional Shaping',
            description: 'Pattern matching, higher-order functions, custom modules, XML/JSON/CSV formatting, and memory-efficient streaming.',
            skillsAssessed: ['DataWeave 2.0', 'Streaming Transformations', 'Pattern Matching'],
          },
          {
            title: 'Batch Processing & Messaging Connectors',
            description: 'Batch Jobs with commit steps, For-Each vs Parallel For-Each, Anypoint MQ publish/consume, and Salesforce integration.',
            skillsAssessed: ['Batch Processing', 'Anypoint MQ', 'Salesforce Connector'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Security, Policies & API Governance',
        weightPercent: 25,
        overview: 'Securing APIs with OAuth 2.0, JWT validation, Client ID enforcement, mTLS, VPC peering, and Secrets Manager.',
        topics: [
          {
            title: 'API Manager Policy Enforcement',
            description: 'Configuring rate-limiting, spike control, IP whitelisting, OAuth2 / OpenID Connect token validation, and header injection.',
            skillsAssessed: ['API Policies', 'OAuth2 / OIDC', 'Spike Control'],
          },
          {
            title: 'Transport Security & Secret Management',
            description: 'Mutual TLS (mTLS) on Dedicated Load Balancers (DLB), Anypoint Secrets Manager, VPC peering, and Edge security.',
            skillsAssessed: ['mTLS Security', 'Dedicated Load Balancer', 'Secrets Manager'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'CloudHub 2.0, RTF, Reliability & MUnit',
        weightPercent: 25,
        overview: 'Scaling deployments on CloudHub 2.0 and Runtime Fabric, Mule clustering, automated MUnit test suites, and CI/CD pipelines.',
        topics: [
          {
            title: 'Deployment Models & High Availability',
            description: 'vCore sizing, CloudHub 2.0 shared spaces vs private spaces, Runtime Fabric (RTF) Kubernetes topologies, and zero-downtime releases.',
            skillsAssessed: ['CloudHub 2.0', 'Runtime Fabric', 'Mule Clustering'],
          },
          {
            title: 'MUnit Automated Testing & CI/CD',
            description: 'Unit and integration testing with MUnit, mocking processors, test spy verifications, Maven plugins, and GitHub Actions pipelines.',
            skillsAssessed: ['MUnit Testing', 'Processor Mocking', 'CI/CD Pipelines'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 14. SALESFORCE ENTERPRISE INTEGRATION SPECIALIST
  salesforce_integration: {
    tier: 'salesforce_integration',
    title: 'Jnachi Enterprise Integration Specialist Certification — Salesforce Track',
    overview: 'Validates enterprise integration skills across Salesforce REST/SOAP APIs, Bulk API 2.0, Change Data Capture, Platform Events, Named Credentials, and OData Connect.',
    targetRole: 'Salesforce Developers, Technical Architects, CRM Integrators, and Enterprise Application Leads.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Salesforce API Landscape & Callout Architecture',
        weightPercent: 25,
        overview: 'Architectural selection across REST, SOAP, Bulk API 2.0, Composite Graph APIs, and managing Governor execution limits.',
        topics: [
          {
            title: 'API Selection & Governor Limits Management',
            description: 'Comparing synchronous REST/SOAP vs Bulk API 2.0 vs Composite Graph APIs based on payload size, concurrency, and rate limits.',
            skillsAssessed: ['REST / SOAP APIs', 'Bulk API 2.0', 'Governor Limits'],
          },
          {
            title: 'Apex HTTP Callouts & Mocking',
            description: 'Building robust HttpRequest/HttpResponse handlers, JSON deserialization, and HttpCalloutMock unit test frameworks.',
            skillsAssessed: ['Apex Callouts', 'JSON Parsing', 'HttpCalloutMock'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Event-Driven Architecture & Salesforce Connect',
        weightPercent: 25,
        overview: 'Publishing and subscribing to Platform Events, Change Data Capture (CDC), Async Apex (Queueable/Continuation), and OData External Objects.',
        topics: [
          {
            title: 'Platform Events & Change Data Capture (CDC)',
            description: 'Publishing high-volume events, EmpApi streaming client subscriptions, replay IDs, and Pub/Sub API integration.',
            skillsAssessed: ['Platform Events', 'Change Data Capture', 'Replay ID Recovery'],
          },
          {
            title: 'Salesforce Connect & Asynchronous Apex',
            description: 'Accessing on-prem ERP data via External Objects (OData 2.0/4.0) without data replication, Queueable Apex chaining, and Continuations.',
            skillsAssessed: ['Salesforce Connect', 'OData Adapters', 'Queueable Apex'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Authentication, Named Credentials & Security',
        weightPercent: 25,
        overview: 'Securing integrations with Named Credentials, External Credentials, JWT Bearer OAuth2 flows, mTLS callouts, and Shield monitoring.',
        topics: [
          {
            title: 'Named Credentials & Modern OAuth2 Flows',
            description: 'Eliminating hardcoded secrets with External Credentials, JWT Bearer Token Flow, Web Server Flow, and Connected App policies.',
            skillsAssessed: ['Named Credentials', 'JWT Bearer Flow', 'Connected Apps'],
          },
          {
            title: 'Mutual TLS & Shield Event Auditing',
            description: 'Enforcing client certificate authentication (mTLS) on outbound callouts, IP restrictions, and monitoring API abuse with Shield Event Monitoring.',
            skillsAssessed: ['mTLS Callouts', 'Shield Event Monitoring', 'Field-Level Encryption'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Large Data Volumes (LDV), PK Chunking & Recovery',
        weightPercent: 25,
        overview: 'Ingesting millions of records, eliminating UNABLE_TO_LOCK_ROW race conditions, deterministic external ID upserts, and Dead Letter recovery.',
        topics: [
          {
            title: 'Large Data Volumes & Bulk Processing',
            description: 'Optimizing Bulk API 2.0 ingest with parallel batching, PK Chunking, indexing, and skinny tables for high-throughput sync.',
            skillsAssessed: ['Large Data Volumes', 'PK Chunking', 'Skinny Tables'],
          },
          {
            title: 'Concurrency, Idempotency & Error Recovery',
            description: 'Preventing row locking collisions, designing idempotent upserts keyed on External IDs, and building automated retry/DLQ patterns.',
            skillsAssessed: ['Row Lock Prevention', 'Idempotent Upserts', 'Dead Letter Recovery'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 15. IBM MQ MESSAGING ARCHITECT
  ibm_mq: {
    tier: 'ibm_mq',
    title: 'Jnachi Messaging Architect Certification — IBM MQ Track',
    overview: 'Validates mission-critical messaging competency across IBM MQ Queue Managers, Uniform Clusters, TLS 1.3 Channel Security, Native HA on OpenShift, and XA transactions.',
    targetRole: 'IBM MQ Administrators, Enterprise Messaging Engineers, Middleware Architects, and Infrastructure Engineers.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Queue Manager & Messaging Anatomy',
        weightPercent: 25,
        overview: 'Queue Manager core concepts, Local/Remote/Alias/Model queues, Transmission queues, Message Channel Agents, and MQMD descriptors.',
        topics: [
          {
            title: 'Queue Object Topologies & Message Flow',
            description: 'Designing local, remote, alias, and dynamic model queues, transmission routing, and Message Channel Agent (MCA) topologies.',
            skillsAssessed: ['Queue Topologies', 'Remote Queues', 'Transmission Channels'],
          },
          {
            title: 'Message Descriptors & Grouping',
            description: 'MQMD properties (MsgId, CorrelId, Persistence, Expiry, Priority), message segmentation, and logical message grouping.',
            skillsAssessed: ['MQMD Anatomy', 'Persistence & Expiry', 'Message Segmentation'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Clustering, Routing & Dead Letter Processing',
        weightPercent: 25,
        overview: 'Full and Partial repository clustering, workload balancing algorithms, Pub/Sub topic trees, trigger monitors, and DLQ handler rules.',
        topics: [
          {
            title: 'Queue Manager Clustering & Workload Balancing',
            description: 'Configuring full and partial repositories, cluster queues, cluster sender/receiver channels, and dynamic workload routing.',
            skillsAssessed: ['MQ Clustering', 'Repository Config', 'Workload Balancing'],
          },
          {
            title: 'Topic Trees & Dead Letter Handler Automation',
            description: 'Hierarchical Pub/Sub topic trees, administrative subscriptions, Dead Letter Queue (DLQ) automated rule tables and reprocessing scripts.',
            skillsAssessed: ['Pub/Sub Trees', 'DLQ Rule Tables', 'Trigger Monitors'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Channel Security, Authentication & AMS',
        weightPercent: 25,
        overview: 'Enforcing TLS 1.3 channel encryption, CipherSpecs, CHLAUTH rules, CONNAUTH user mapping, and Advanced Message Security (AMS) payload encryption.',
        topics: [
          {
            title: 'TLS 1.3 Encryption & Channel Authentication (CHLAUTH)',
            description: 'Configuring TLS CipherSpecs, digital certificates (KDB/CMS), blocking unauthorized client connections with CHLAUTH and CONNAUTH.',
            skillsAssessed: ['TLS 1.3 Channels', 'CHLAUTH Rules', 'CONNAUTH Policies'],
          },
          {
            title: 'Object Authority & Advanced Message Security (AMS)',
            description: 'Setting granular queue authorities via `setmqaut`/OAM, and enabling end-to-end payload encryption at rest and in motion using IBM MQ AMS.',
            skillsAssessed: ['OAM Authorities', 'MQ AMS Encryption', 'Audit Logging'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Native HA, OpenShift, XA 2PC & Performance Tuning',
        weightPercent: 25,
        overview: 'Deploying Native HA on Kubernetes/OpenShift, Multi-Instance Queue Managers, Uniform Clusters, XA distributed two-phase commit transactions, and buffer tuning.',
        topics: [
          {
            title: 'High Availability & Containerized OpenShift Topologies',
            description: 'Native HA 3-node Raft consensus on Red Hat OpenShift, Multi-Instance shared disk setups, and Uniform Clusters for automatic client load rebalancing.',
            skillsAssessed: ['Native HA Raft', 'Uniform Clusters', 'OpenShift Containers'],
          },
          {
            title: 'XA Two-Phase Commit & Performance Optimization',
            description: 'Coordinating distributed transactions across MQ and relational databases with XA, linear vs circular logging, and buffer pool optimization.',
            skillsAssessed: ['XA 2-Phase Commit', 'Logging Strategies', 'Buffer Tuning'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 16. IBM APP CONNECT ENTERPRISE (ACE) DEVELOPER
  ibm_ace: {
    tier: 'ibm_ace',
    title: 'Jnachi Integration Developer Certification — IBM App Connect Enterprise (ACE) Track',
    overview: 'Validates developer proficiency in IBM ACE v11/v12 Message Flows, advanced ESQL, DFDL data modeling, Java Compute, REST/SOAP services, and CP4I cloud integration.',
    targetRole: 'ACE / IIB Integration Developers, SOA Architects, ESB Engineers, and Middleware Consultants.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Message Flow Architecture & DFDL Modeling',
        weightPercent: 25,
        overview: 'Integration Node / Server topology, Message Flow lifecycle, Message Tree structure (Root, Properties, Environment, ExceptionList), and DFDL parsing.',
        topics: [
          {
            title: 'Integration Server Topology & Message Trees',
            description: 'Independent Integration Servers, flow lifecycles, and navigating the logical Message Tree (Root, Environment, LocalEnvironment, ExceptionList).',
            skillsAssessed: ['Integration Servers', 'Message Tree Structure', 'Exception Handling'],
          },
          {
            title: 'DFDL Data Modeling & Schema Parsing',
            description: 'Parsing non-XML binary, COBOL copybook, CSV, and fixed-length records using Data Format Description Language (DFDL).',
            skillsAssessed: ['DFDL Modeling', 'Binary / Flat File Parsing', 'MRM Migration'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Advanced ESQL, Java Compute & Connector Orchestration',
        weightPercent: 25,
        overview: 'Developing advanced ESQL transformations, Java Compute nodes, REST / SOAP service provider and consumer flows, and Kafka integration.',
        topics: [
          {
            title: 'Advanced ESQL Scripting & State Management',
            description: 'Manipulating complex ROW/LIST trees, DATABASE queries with passthru statements, user-defined functions, and Environment state propagation.',
            skillsAssessed: ['Advanced ESQL', 'Database Integration', 'ROW/LIST Operations'],
          },
          {
            title: 'Java Compute Nodes & Web Service APIs',
            description: 'Building custom Java Compute logic using `MbMessage`, implementing REST APIs with OpenAPI specifications, and SOAP Web Services.',
            skillsAssessed: ['Java Compute Nodes', 'REST / SOAP Flows', 'Kafka Nodes'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Security Profiles, WS-Security & Policy Projects',
        weightPercent: 25,
        overview: 'Enforcing HTTPS/TLS, WS-Security, Security Profiles with LDAP / WS-Trust, OAuth 2.0 token validation, and ACE v12 Policy Projects.',
        topics: [
          {
            title: 'Security Profiles & Identity Propagation',
            description: 'Configuring Authentication, Authorization, and Identity Propagation on flow input nodes using LDAP and WS-Trust Security Profiles.',
            skillsAssessed: ['Security Profiles', 'LDAP Authentication', 'Identity Propagation'],
          },
          {
            title: 'Transport Security & Policy Projects',
            description: 'Setting up keystores/truststores for HTTPS and MQ nodes, and dynamic configuration via ACE v12 Policy Projects.',
            skillsAssessed: ['HTTPS / SSL Nodes', 'Policy Projects', 'Keystore Config'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'CP4I Cloud Pak, OpenShift, Test Framework & Tuning',
        weightPercent: 25,
        overview: 'Deploying containerized ACE flows to IBM Cloud Pak for Integration (CP4I) and OpenShift, ACE v12 unit test framework, and global cache tuning.',
        topics: [
          {
            title: 'Containerized Deployments on CP4I & OpenShift',
            description: 'Building BAR files, deploying containerized Integration Runtimes on Red Hat OpenShift, App Connect Dashboard monitoring, and autoscaling.',
            skillsAssessed: ['CP4I Cloud Pak', 'OpenShift Runtimes', 'BAR Deployments'],
          },
          {
            title: 'ACE v12 Test Framework & Global Cache Tuning',
            description: 'Automated unit testing with message assembly recorders, using the embedded Global Cache (WXS) for low-latency state sharing.',
            skillsAssessed: ['ACE Test Framework', 'Global Cache', 'Performance Profiling'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 17. BOOMI CLOUD INTEGRATION SPECIALIST
  boomi: {
    tier: 'boomi',
    title: 'Jnachi Cloud Integration Specialist Certification — Boomi Track',
    overview: 'Validates production capabilities in Boomi AtomSphere process architecture, DataHub (MDM), Map Shapes, Groovy scripting, and B2B/EDI trading partner governance.',
    targetRole: 'Boomi Integration Developers, Cloud Architects, iPaaS Specialists, and Enterprise Integrators.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'AtomSphere Runtime Architecture & Process Flow',
        weightPercent: 25,
        overview: 'Atom, Molecule, and Cloud Runtime architecture, Document Flow concepts, Dynamic Document Properties, and Process Properties.',
        topics: [
          {
            title: 'Atom & Molecule Runtime Topologies',
            description: 'Selecting Local Atom vs Molecule (Clustered) vs Boomi Atom Cloud runtime topologies, release lifecycles, and shared directories.',
            skillsAssessed: ['Atom vs Molecule', 'Runtime Topologies', 'Cloud Architecture'],
          },
          {
            title: 'Document Flow & Property Scoping',
            description: 'Understanding single vs batch document execution, Dynamic Document Properties (DDP) vs Dynamic Process Properties (DPP), and document splitting.',
            skillsAssessed: ['Document Flow', 'Property Scoping (DDP vs DPP)', 'Document Splitting'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Data Mapping, Custom Scripting & Process Logic',
        weightPercent: 25,
        overview: 'Designing complex Boomi Map Shapes, Custom Groovy/JavaScript scripting, Map Functions, Business Rules, and Flow Control shapes.',
        topics: [
          {
            title: 'Boomi Map Shapes & Custom Groovy Scripting',
            description: 'Building multi-format maps (XML, JSON, Flat File, Database), Cross Reference Tables (CRT), and inline Groovy transformation scripts.',
            skillsAssessed: ['Map Shape Transformations', 'Groovy Scripting', 'Cross-Reference Tables'],
          },
          {
            title: 'Flow Control, Branching & Decision Logic',
            description: 'Implementing Business Rules shapes, Branch vs Decision shapes, and Flow Control with parallel execution (threads/processes).',
            skillsAssessed: ['Business Rules Shape', 'Parallel Execution', 'Branching Logic'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'API Management & B2B / EDI Governance',
        weightPercent: 25,
        overview: 'Boomi API Gateway governance, API authentication, Trading Partner Management (TPM), AS2 / EDI standards, and PII masking.',
        topics: [
          {
            title: 'API Gateway & Security Policies',
            description: 'Publishing REST/SOAP APIs via Boomi API Management, API Keys, JWT/OAuth2 authentication, and rate limiting.',
            skillsAssessed: ['API Gateway', 'API Authentication', 'Rate Limiting'],
          },
          {
            title: 'B2B / EDI Trading Partner Management',
            description: 'Configuring AS2 communication, EDIFACT / X12 document standards, Trading Partner component routing, and certificate renewals.',
            skillsAssessed: ['AS2 / EDI Standards', 'Trading Partner Setup', 'Certificate Renewal'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Boomi DataHub (MDM), Molecule Tuning & DevOps',
        weightPercent: 25,
        overview: 'Master Data Management with Boomi DataHub (Golden Records, Quarantine), Molecule shared filesystem tuning, Platform APIs, and CI/CD.',
        topics: [
          {
            title: 'Boomi DataHub (MDM) Golden Records & Quarantine',
            description: 'Designing master domain models, source rankings, match rules, staging channels, and resolving quarantine record conflicts.',
            skillsAssessed: ['DataHub (MDM)', 'Golden Records', 'Quarantine Resolution'],
          },
          {
            title: 'Molecule Performance Tuning & Platform CI/CD',
            description: 'Tuning JVM heap, Molecule shared NFS storage, automated deployments using Boomi Platform APIs, and error notification pipelines.',
            skillsAssessed: ['Molecule Tuning', 'Platform APIs', 'CI/CD Pipelines'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 18. IBM WEBMETHODS / SOFTWARE AG INTEGRATION SPECIALIST
  webmethods: {
    tier: 'webmethods',
    title: 'Jnachi Enterprise Integration Specialist Certification — IBM webMethods / Software AG',
    overview: 'Validates enterprise engineering capability across webMethods Integration Server, Universal Messaging, Flow/Java services, API Gateway, Trading Networks (B2B/EDI), and Microservices Runtime (MSR).',
    targetRole: 'webMethods Integration Developers, Enterprise Architects, EDI/B2B Specialists, and Middleware Engineers.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Integration Server Runtime, Flow & Java Services',
        weightPercent: 25,
        overview: 'Integration Server execution model, Flow language steps (MAP, BRANCH, LOOP, REPEAT), IData pipeline manipulation, Document Types, and try-catch error handling.',
        topics: [
          {
            title: 'Flow Service Architecture & Pipeline Lifecycle',
            description: 'Managing IData memory, dropping pipeline variables, BRANCH evaluation modes, LOOP iteration, and try-catch-finally compensation patterns.',
            skillsAssessed: ['Flow Services', 'Pipeline Management', 'Error Handling (pub.flow:getLastError)'],
          },
          {
            title: 'Document Types, Schemas & Java Services',
            description: 'Flat File schemas, XML/JSON parsing, custom Java services using IDataCursor, and package dependency management.',
            skillsAssessed: ['IS Document Types', 'Flat File / JSON Parsing', 'Java Services & IDataCursor'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Universal Messaging, IS Triggers & Adapters',
        weightPercent: 25,
        overview: 'Universal Messaging channels/queues, publish/subscribe messaging, concurrent/serial triggers, exactly-once delivery, and JDBC/SAP adapters.',
        topics: [
          {
            title: 'Universal Messaging & Trigger Governance',
            description: 'Pub/sub event channels, durable subscriptions, trigger retry handling, dead-letter queues, and exactly-once execution.',
            skillsAssessed: ['Universal Messaging', 'IS Triggers', 'Exactly-Once Delivery'],
          },
          {
            title: 'Enterprise Adapters & Transaction Boundaries',
            description: 'JDBC Adapter templates (DynamicSQL, CustomSQL, StoredProcedures), connection pooling, SAP IDoc/BAPI adapters, and XA two-phase commit transactions.',
            skillsAssessed: ['JDBC Adapter', 'SAP Adapter', 'XA Transactions'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'API Gateway Security, OAuth2/JWT & Access Control',
        weightPercent: 25,
        overview: 'webMethods API Gateway policy enforcement, OAuth2 / OpenID Connect, JWT validation, Access Control Lists (ACLs), keystores/truststores, and mTLS security.',
        topics: [
          {
            title: 'API Gateway Policies & Threat Protection',
            description: 'OAuth2/JWT token validation, rate limiting/throttling, threat protection, CORS handling, and outbound payload field redaction.',
            skillsAssessed: ['API Gateway', 'OAuth2 / JWT Policies', 'Rate Limiting'],
          },
          {
            title: 'Integration Server Port Security & Cryptography',
            description: 'Configuring Execute/Read/Write ACLs, IP whitelists/blacklists, HTTPS port certificate configuration (Keystores/Truststores), and pub.security encryption.',
            skillsAssessed: ['Execute ACLs', 'Keystores & mTLS', 'pub.security Services'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Trading Networks (B2B/EDI), MSR Containers & CI/CD',
        weightPercent: 25,
        overview: 'Trading Networks partner profiles and processing rules, ANSI X12 / EDIFACT parsing, AS2/MDN protocol delivery, Microservices Runtime (MSR) containerization, and ABE Deployer CI/CD.',
        topics: [
          {
            title: 'Trading Networks B2B Integration & EDI Standards',
            description: 'Partner profiles, custom document attributes, processing rule execution, ANSI X12 / EDIFACT translation, 997/CONTRL acknowledgements, and AS2/MDN transport.',
            skillsAssessed: ['Trading Networks (TN)', 'EDI Standards (X12/EDIFACT)', 'AS2 / MDN Protocols'],
          },
          {
            title: 'Microservices Runtime (MSR), Terracotta & DevOps',
            description: 'Building lightweight Docker containers with MSR, Kubernetes orchestration, Terracotta clustering, and Asset Build Environment (ABE) Deployer pipelines.',
            skillsAssessed: ['Microservices Runtime (MSR)', 'Terracotta Clustering', 'CI/CD with ABE Deployer'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 19. AGENTIC AI & MULTI-AGENT SYSTEMS ENGINEER
  agentic_ai: {
    tier: 'agentic_ai',
    title: 'Jnachi Certified Agentic AI & Multi-Agent Systems Engineer',
    overview: 'Validates architectural and implementation mastery in designing, orchestrating, and securing autonomous AI agent systems using LangGraph, CrewAI, AutoGen, and Model Context Protocol (MCP).',
    targetRole: 'AI Engineers, Autonomous Agent Developers, AI Solutions Architects, and Technical Leads.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Agentic Paradigms, ReAct Loops & Cognitive Architectures',
        weightPercent: 25,
        overview: 'ReAct cognitive loops, Plan-and-Solve strategies, LLM reasoning patterns, autonomous goal decomposition, and deterministic stop conditions.',
        topics: [
          {
            title: 'ReAct Cognitive Cycles & Plan-and-Solve',
            description: 'Thought-Action-Observation loops, scratchpad memory management, dynamic tool invocation, error correction, and loop breakout mechanisms.',
            skillsAssessed: ['ReAct Architecture', 'Plan-and-Solve', 'Loop Termination'],
          },
          {
            title: 'Tool Use Schemas & Function Calling Standards',
            description: 'JSON Schema definition for tools, deterministic argument extraction, handling malformed tool responses, and structured outputs.',
            skillsAssessed: ['Tool Schemas', 'Function Calling', 'Structured Outputs'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Multi-Agent Orchestration, LangGraph State & Tool Routing',
        weightPercent: 25,
        overview: 'Building multi-agent systems with LangGraph state graphs, hierarchical supervisor-worker delegation, CrewAI processes, and dynamic routing.',
        topics: [
          {
            title: 'LangGraph State Graphs & Checkpointing',
            description: 'State definitions, node execution, conditional edges, cycle handling, time-travel debugging, and SQLite/Postgres checkpointers.',
            skillsAssessed: ['LangGraph State', 'Conditional Routing', 'Checkpointing'],
          },
          {
            title: 'Hierarchical Multi-Agent Teams & Delegation',
            description: 'Supervisor routing patterns, consensus voting, specialized domain agents, sub-task handoffs, and inter-agent communication protocols.',
            skillsAssessed: ['Supervisor Patterns', 'Agent Handoffs', 'Consensus Protocols'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Agent Guardrails, Security, MCP & Sandboxing',
        weightPercent: 25,
        overview: 'Model Context Protocol (MCP) server security, preventing prompt injection through tools, sandboxed code execution, and human-in-the-loop approvals.',
        topics: [
          {
            title: 'Model Context Protocol (MCP) Architecture & Security',
            description: 'MCP client/server communication, JSON-RPC transport, tool exposure scopes, authentication, and secure resource isolation.',
            skillsAssessed: ['MCP Protocol', 'JSON-RPC', 'Resource Isolation'],
          },
          {
            title: 'Agentic Guardrails & Sandboxed Execution',
            description: 'Preventing indirect prompt injection, tool permissions, gVisor/Docker sandboxing for code agents, and human-in-the-loop intervention thresholds.',
            skillsAssessed: ['Indirect Prompt Injection', 'Sandboxing', 'Human-in-the-Loop'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Agent Scalability, Memory Systems, Resiliency & Evaluation',
        weightPercent: 25,
        overview: 'Long-term agent memory architectures (short-term, episodic, semantic), distributed agent execution, token budget management, and agentic benchmarks.',
        topics: [
          {
            title: 'Agent Memory Systems & Episodic Recall',
            description: 'Short-term buffer windows, semantic vector memory, episodic memory storage, summary compression, and cross-session entity retrieval.',
            skillsAssessed: ['Episodic Memory', 'Semantic Recall', 'Context Compression'],
          },
          {
            title: 'Agent Benchmarking, Tracing & Resilience',
            description: 'Evaluating multi-step success rates, tracing agent trajectories with Langfuse/Phoenix, rate-limit fallback retries, and token cost caps.',
            skillsAssessed: ['Agent Evaluation', 'Telemetry & Tracing', 'Resiliency & Backoff'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 20. ENTERPRISE RAG ARCHITECT & VECTOR SPECIALIST
  rag_architect: {
    tier: 'rag_architect',
    title: 'Jnachi Certified Enterprise RAG Architect & Vector Specialist',
    overview: 'Validates deep expertise in architecting, optimizing, and evaluating production-grade Retrieval-Augmented Generation systems with hybrid search, semantic chunking, and knowledge graphs.',
    targetRole: 'RAG Architects, Vector Database Engineers, Search Specialists, and Enterprise AI Leads.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Embedding Models, Vector Indexes & Chunking Strategies',
        weightPercent: 25,
        overview: 'Vector mathematics, embedding dimensionality, HNSW vs IVFFlat indexing, distance metrics, and advanced document chunking algorithms.',
        topics: [
          {
            title: 'Vector Indexing & Distance Metrics',
            description: 'HNSW graph navigation, IVFFlat inverted file lists, cosine similarity vs inner product vs Euclidean distance, and quantization techniques (PQ/SQ).',
            skillsAssessed: ['HNSW Indexing', 'Distance Metrics', 'Product Quantization'],
          },
          {
            title: 'Semantic & Hierarchical Chunking',
            description: 'Semantic boundary chunking, parent-child document relationships, sliding context windows, and table-aware document parsing.',
            skillsAssessed: ['Semantic Chunking', 'Parent-Child Indexing', 'Table Parsing'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Hybrid Search, Reciprocal Rank Fusion & Rerankers',
        weightPercent: 25,
        overview: 'Combining dense vector search with sparse keyword search (BM25), Reciprocal Rank Fusion (RRF), Cross-Encoder reranking, and query transformations.',
        topics: [
          {
            title: 'Hybrid Search & Reciprocal Rank Fusion (RRF)',
            description: 'Merging sparse BM25 inverted index results with dense vector embeddings using RRF scoring algorithms and weighted rank fusion.',
            skillsAssessed: ['Sparse + Dense Search', 'BM25 Indexing', 'RRF Algorithm'],
          },
          {
            title: 'Cross-Encoder Rerankers & Query Transformations',
            description: 'Deploying Cross-Encoder models (Cohere/BGE), Query Rewriting, HyDE (Hypothetical Document Embeddings), and Multi-Query decomposition.',
            skillsAssessed: ['Cross-Encoder Rerankers', 'HyDE', 'Query Expansion'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'RAG Security, Access Control, PII Redaction & Data Governance',
        weightPercent: 25,
        overview: 'Document-level role-based access control (RBAC), metadata pre-filtering, PII token redaction, vector index isolation, and tenant segregation.',
        topics: [
          {
            title: 'Document-Level Access Control & Pre-Filtering',
            description: 'Securing vector retrievals with metadata filtering (ACL tags, tenant IDs), preventing unauthorized document leakage in shared indices.',
            skillsAssessed: ['Metadata Pre-Filtering', 'Document RBAC', 'Multi-Tenant Isolation'],
          },
          {
            title: 'PII Redaction & Retrieval Data Governance',
            description: 'Detecting and masking sensitive enterprise data prior to embedding generation and vector ingestion pipelines.',
            skillsAssessed: ['PII Masking', 'Data Governance', 'Embedding Sanitization'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'RAG Evaluation, Scalability, Graph RAG & Cache Optimization',
        weightPercent: 25,
        overview: 'Automated evaluation frameworks (RAGAS / TruLens RAG Triad), Knowledge Graph RAG (GraphRAG), semantic vector caching, and index sharding.',
        topics: [
          {
            title: 'RAG Triad & Automated Metric Evaluation',
            description: 'Measuring Context Relevance, Groundedness (Faithfulness), and Answer Relevance using RAGAS and TruLens benchmark pipelines.',
            skillsAssessed: ['RAGAS Metrics', 'Groundedness Evaluation', 'TruLens Triad'],
          },
          {
            title: 'Knowledge Graph RAG & Semantic Caching',
            description: 'Extracting entities and relationships for GraphRAG, hybrid graph-vector querying, and prompt semantic caching with Redis/GPTCache.',
            skillsAssessed: ['GraphRAG', 'Knowledge Graphs', 'Semantic Caching'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 21. LLMOPS & MODEL GOVERNANCE SPECIALIST
  llmops: {
    tier: 'llmops',
    title: 'Jnachi Certified LLMOps & Model Governance Specialist',
    overview: 'Validates operational and infrastructural mastery in deploying, monitoring, fine-tuning, and governing enterprise large language models at scale.',
    targetRole: 'LLMOps Engineers, MLOps Practitioners, Platform Engineers, and AI Governance Officers.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'High-Throughput LLM Serving, vLLM & KV Caching',
        weightPercent: 25,
        overview: 'Inference engines, PagedAttention memory management, KV Cache optimization, continuous batching, and speculative decoding.',
        topics: [
          {
            title: 'High-Throughput Inference Engines (vLLM / TGI)',
            description: 'PagedAttention algorithm, KV Cache memory fragmentation reduction, continuous batching, and tensor parallelism across multiple GPUs.',
            skillsAssessed: ['vLLM Architecture', 'PagedAttention', 'Continuous Batching'],
          },
          {
            title: 'Quantization & Speculative Decoding',
            description: 'Deploying AWQ, GPTQ, and FP8 quantized weights for reduced VRAM footprint and draft-target speculative decoding acceleration.',
            skillsAssessed: ['Model Quantization (AWQ/FP8)', 'Speculative Decoding', 'VRAM Profiling'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'CI/CD Prompt Pipelines, Fine-Tuning (LoRA) & Tracing',
        weightPercent: 25,
        overview: 'Prompt version control, automated regression evaluation, LoRA/QLoRA parameter-efficient fine-tuning pipelines, and distributed tracing with OpenTelemetry.',
        topics: [
          {
            title: 'Prompt CI/CD & Automated Regression Testing',
            description: 'Git-backed prompt versioning, automated Golden Dataset regression tests, prompt linting, and canary release traffic splitting.',
            skillsAssessed: ['Prompt Versioning', 'Regression Testing', 'Canary Deployments'],
          },
          {
            title: 'Parameter-Efficient Fine-Tuning (PEFT / LoRA)',
            description: 'LoRA rank/alpha configuration, QLoRA 4-bit fine-tuning, dataset preparation, adapter merging, and validation loss tracking.',
            skillsAssessed: ['LoRA / QLoRA', 'Adapter Merging', 'PEFT Pipelines'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Model Governance, EU AI Act, Red-Teaming & Safety Guardrails',
        weightPercent: 25,
        overview: 'AI regulatory compliance (EU AI Act, NIST AI RMF), red-teaming for jailbreak vulnerabilities, NeMo Guardrails, and enterprise toxicity filtering.',
        topics: [
          {
            title: 'EU AI Act Compliance & Risk Classification',
            description: 'High-risk vs general-purpose AI model obligations, technical documentation, human oversight logs, and audit trail transparency.',
            skillsAssessed: ['EU AI Act', 'NIST AI RMF', 'Compliance Auditing'],
          },
          {
            title: 'Red-Teaming, Jailbreak Defense & NeMo Guardrails',
            description: 'Defending against token smuggling, character roleplay bypasses, Colang guardrail policies, and automated red-teaming pipelines.',
            skillsAssessed: ['Jailbreak Defense', 'NeMo Guardrails', 'Red-Teaming'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'GPU Cluster Autoscaling, Cost Optimization & Drift Detection',
        weightPercent: 25,
        overview: 'Kubernetes GPU cluster autoscaling (KEDA/Ray), inference latency profiling, token drift detection, and OpenTelemetry observability.',
        topics: [
          {
            title: 'Distributed Observability & OpenTelemetry Tracing',
            description: 'Instrumenting LLM pipelines with Langfuse/Phoenix, tracking TTFT (Time to First Token), inter-token latency, and token volume.',
            skillsAssessed: ['OpenTelemetry', 'Langfuse Observability', 'TTFT Profiling'],
          },
          {
            title: 'GPU Cluster Autoscaling & Drift Monitoring',
            description: 'Autoscaling vLLM replicas on Kubernetes with KEDA based on queue depth, monitoring data distribution drift and output degradation.',
            skillsAssessed: ['KEDA GPU Autoscaling', 'Concept Drift', 'Ray Clusters'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 22. AI FOR FINANCIAL MODELING & VALUATION SPECIALIST
  finance_ai: {
    tier: 'finance_ai',
    title: 'Jnachi Certified AI for Financial Modeling & Valuation Specialist',
    overview: 'Validates practical and quantitative mastery in leveraging generative AI and deterministic code interpreters for institutional financial modeling, valuation, SEC filing analysis, and risk simulations.',
    targetRole: 'Financial Analysts, Investment Bankers, PE/VC Associates, Corporate Finance Directors, and FinTech Specialists.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Financial Prompt Engineering & Quantitative Model Foundations',
        weightPercent: 25,
        overview: 'Precision prompt structuring for accounting rules, financial terminology calibration, hallucination prevention in numbers, and structured financial JSON schemas.',
        topics: [
          {
            title: 'Financial Statement Calibration & Number Guardrails',
            description: 'Strict prompting constraints for 3-statement linking, GAAP/IFRS accounting adjustments, and eliminating arithmetic hallucinations.',
            skillsAssessed: ['Financial Prompting', 'GAAP/IFRS Rules', 'Arithmetic Guardrails'],
          },
          {
            title: 'Structured Output Schemas for Financial Datasets',
            description: 'Enforcing JSON schemas for balance sheets, cash flows, and income statement lines with explicit data types and reconciliation tags.',
            skillsAssessed: ['Financial JSON Schemas', 'Reconciliation Tags', 'Data Validation'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Automated DCF, LBO, 3-Statement Modeling & Code Interpreters',
        weightPercent: 25,
        overview: 'Automating Discounted Cash Flow (DCF), Leveraged Buyout (LBO) schedules, sensitivity tables, and deterministic Python calculation engines.',
        topics: [
          {
            title: 'Automated DCF & LBO Model Construction',
            description: 'Generating unlevered free cash flow projections, WACC discounting, terminal value Gordon Growth / exit multiples, and debt paydown cascades.',
            skillsAssessed: ['DCF Modeling', 'LBO Cascades', 'WACC Calculations'],
          },
          {
            title: 'Deterministic Python Code Execution for Valuation',
            description: 'Pairing LLMs with sandboxed Python code interpreters to run exact mathematical operations, financial libraries (numpy/scipy), and matrix calculations.',
            skillsAssessed: ['Python Code Interpreter', 'Numpy Financials', 'Exact Math Execution'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Financial Data Compliance, MNPI Confidentiality & SEC Disclosures',
        weightPercent: 25,
        overview: 'Material Non-Public Information (MNPI) protection, confidential M&A data handling, SEC compliance, and zero data-retention enterprise boundaries.',
        topics: [
          {
            title: 'MNPI & Deal Data Confidentiality Protocol',
            description: 'Zero-retention model configurations, air-gapped financial LLMs, preventing cross-tenant data leakage in investment banking environments.',
            skillsAssessed: ['MNPI Compliance', 'Zero Data Retention', 'Deal Privacy'],
          },
          {
            title: 'SEC 10-K / 10-Q Extraction & XBRL Tagging',
            description: 'Extracting multi-table financial filings from SEC EDGAR, parsing XBRL taxonomies, and reconciling footnote disclosures.',
            skillsAssessed: ['SEC EDGAR Parsing', 'XBRL Taxonomies', 'Footnote Reconciliation'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Monte Carlo Simulations, Sensitivity Tables & Institutional Auditing',
        weightPercent: 25,
        overview: 'Running high-iteration Monte Carlo risk simulations, 2-way sensitivity tables, dynamic scenario analysis, and institutional model audit trails.',
        topics: [
          {
            title: 'Monte Carlo Risk Simulations & Sensitivity Analysis',
            description: 'Executing 10,000+ simulation iterations for revenue and margin distributions, generating Value-at-Risk (VaR) percentiles and tornado charts.',
            skillsAssessed: ['Monte Carlo Simulations', 'Sensitivity Tables', 'VaR Analysis'],
          },
          {
            title: 'Institutional Auditability & Model Verification',
            description: 'Documenting automated formula lineage, cell-level citation tracking, stress-testing macroeconomic shocks, and compliance verification.',
            skillsAssessed: ['Model Lineage', 'Citation Tracking', 'Stress Testing'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },

  // 23. FINOPS & CLOUD AI COST OPTIMIZATION ARCHITECT
  finops_architect: {
    tier: 'finops_architect',
    title: 'Jnachi Certified FinOps & Cloud AI Cost Optimization Architect',
    overview: 'Validates strategic financial engineering and cloud optimization mastery for AI infrastructure, GPU clusters, model routing, prompt caching, and FinOps FOCUS framework allocation.',
    targetRole: 'FinOps Practitioners, Cloud Architects, Engineering Directors, DevOps Leads, and AI Budget Owners.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Cloud AI Cost Fundamentals, GPU Pricing & Token Unit Economics',
        weightPercent: 25,
        overview: 'LLM token unit economic models, pricing differences across proprietary vs open-source models, GPU hourly cost structures, and TCO modeling.',
        topics: [
          {
            title: 'Token Unit Economics & Cost per API Transaction',
            description: 'Calculating input/output token cost formulas, prompt caching discounts, context window expansion overhead, and pricing tier trade-offs.',
            skillsAssessed: ['Token Unit Economics', 'API Pricing Models', 'TCO Calculation'],
          },
          {
            title: 'Cloud GPU Architecture & Cost Profiles (H100/A100/L40S)',
            description: 'Analyzing compute-per-dollar efficiency across GPU classes, reserved vs on-demand vs spot pricing, and inter-node network interconnect costs.',
            skillsAssessed: ['GPU TCO Profiles', 'Spot vs Reserved', 'Interconnect Costs'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Model Cascading, Semantic Caching & Dynamic Routing Pipelines',
        weightPercent: 25,
        overview: 'Automated cost reduction pipelines using semantic response caching, small language model (SLM) triage cascading, and dynamic latency/cost routers.',
        topics: [
          {
            title: 'Semantic Prompt Caching & Redis Integration',
            description: 'Deploying similarity threshold caching (GPTCache/Redis), reducing redundant LLM API calls by 40-70%, and cache invalidation policies.',
            skillsAssessed: ['Semantic Caching', 'Similarity Thresholds', 'Cache Hit Optimization'],
          },
          {
            title: 'Model Cascading & Intelligent LLM Routers',
            description: 'Routing simple queries to lightweight SLMs (Llama 3 8B) and escalating complex reasoning to Frontier models (Claude 3.5 Sonnet / GPT-4o).',
            skillsAssessed: ['Model Cascading', 'Query Classification', 'Cost-Based Routing'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Cost Governance, Multi-Tenant Allocation & Budget Guardrails',
        weightPercent: 25,
        overview: 'FinOps Foundation FOCUS framework, multi-tenant chargeback/showback tagging, hard spending rate limits, and anomaly detection.',
        topics: [
          {
            title: 'Multi-Tenant AI Cost Allocation & FOCUS Standard',
            description: 'Tagging inference workloads by department and product, standardizing cost reports using the FinOps Open Cost & Usage Spec (FOCUS).',
            skillsAssessed: ['FOCUS 1.0 Specification', 'Multi-Tenant Chargeback', 'Tagging Governance'],
          },
          {
            title: 'Budget Enforcers & Automated Rate-Limit Guardrails',
            description: 'Implementing token-bucket rate limiters per API key, automated budget circuit breakers, and anomaly spend alerting.',
            skillsAssessed: ['Budget Circuit Breakers', 'Token Rate Limiting', 'Spend Anomaly Detection'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'GPU Fleet Rightsizing, Spot Orchestration & FinOps FOCUS Scaling',
        weightPercent: 25,
        overview: 'Self-hosted model scaling on Kubernetes, spot instance fault tolerance, dynamic batching economics, and long-term cloud commitment strategies.',
        topics: [
          {
            title: 'GPU Cluster Rightsizing & Spot Orchestration',
            description: 'Deploying Ray / Kubernetes clusters with spot instance preemption handlers, mixed GPU architectures, and dynamic scale-to-zero workloads.',
            skillsAssessed: ['Spot Preemption Handling', 'Scale-to-Zero', 'GPU Rightsizing'],
          },
          {
            title: 'Build vs Buy Decision Modeling & Long-Term Commitments',
            description: 'Quantitative modeling for transitioning from hosted APIs to self-hosted vLLM clusters based on monthly request volume thresholds.',
            skillsAssessed: ['Build vs Buy Modeling', 'Volume Break-Even', 'Commitment Discounts'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },
  // 24. COMPUTER BASICS & ARCHITECTURE
  computer_basics: {
    tier: 'computer_basics',
    title: 'Jnachi Certified Computing Architecture & Digital Systems Essentials',
    overview: 'Validates foundational knowledge of computer hardware, software execution, operating system kernels, memory hierarchies, and networking fundamentals.',
    targetRole: 'Software engineering students, IT support analysts, tech career switchers, and professionals building strong foundational computing literacy.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'CPU Architecture, Memory & Digital Logic',
        weightPercent: 25,
        overview: 'Von Neumann execution cycle, ALU/CU components, cache hierarchy (L1/L2/L3), binary/hex number systems, and data representation.',
        topics: [
          {
            title: 'CPU Instruction Execution & Microarchitecture',
            description: 'Understanding fetch-decode-execute cycles, program counters, registers, and pipelining.',
            skillsAssessed: ['Instruction Cycles', 'Register Operations', 'Cache Latencies'],
          },
          {
            title: 'Binary, Hexadecimal & Data Encoding',
            description: 'Byte representations, two\'s complement, ASCII, UTF-8 character encoding, and bitwise operations.',
            skillsAssessed: ['Number Base Conversion', 'Encoding Standards', 'Data Representation'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Operating Systems, Memory Management & Networking',
        weightPercent: 25,
        overview: 'Virtual memory, paging, process vs thread scheduling, TCP/IP stack, DHCP, and diagnostic CLI tools.',
        topics: [
          {
            title: 'OS Kernel & Memory Management',
            description: 'Process address spaces, context switching, RAM vs swap storage, and page fault resolution.',
            skillsAssessed: ['Virtual Memory', 'Process Scheduling', 'File Systems'],
          },
          {
            title: 'Networking Primitives & Diagnostics',
            description: 'OSI 7-layer model, IPv4 subnetting, DNS resolution, and troubleshooting via ping/traceroute/ipconfig.',
            skillsAssessed: ['TCP/IP Diagnostics', 'Subnet Masking', 'DNS Routing'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Security Primitives, Encryption & Access Control',
        weightPercent: 25,
        overview: 'Symmetric vs asymmetric cryptography, SHA-256 hashing, firewall rules, least privilege, and threat models.',
        topics: [
          {
            title: 'Cryptographic Foundations & Hashing',
            description: 'Public-private key pairs, TLS certificates, password hashing with salt, and integrity verification.',
            skillsAssessed: ['Cryptographic Principles', 'Hashing Algorithms', 'Key Management'],
          },
          {
            title: 'Access Control & Threat Mitigation',
            description: 'Multi-factor authentication (MFA), firewall packet filtering, least privilege, and ransomware defenses.',
            skillsAssessed: ['Access Policies', 'Firewall Rules', 'Incident Mitigation'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Virtualization, Cloud Systems & High Availability',
        weightPercent: 25,
        overview: 'Hypervisors, containers vs VMs, RAID configurations, horizontal scaling, load balancing, and disaster recovery.',
        topics: [
          {
            title: 'Virtualization & Container Runtimes',
            description: 'Hypervisors (ESXi/KVM), OS-level container isolation, and cloud virtual machine hosting.',
            skillsAssessed: ['Hypervisors', 'Container Architecture', 'Resource Provisioning'],
          },
          {
            title: 'High Availability & Storage Redundancy',
            description: 'RAID levels (0, 1, 5, 10), load balancers (L4/L7), CDNs, and disaster recovery metrics (RTO/RPO).',
            skillsAssessed: ['Storage RAID', 'High Availability', 'Disaster Recovery'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },
  // 25. WEB ARCHITECTURE & CLOUD SERVERS
  web_servers: {
    tier: 'web_servers',
    title: 'Jnachi Certified Web Architecture, HTTP & Cloud Server Infrastructure',
    overview: 'Validates practical competence in modern web architecture, HTTP/1.1 vs HTTP/2/3 protocols, TLS/SSL termination, web servers (Nginx/Apache), REST API design, and cloud VM deployments.',
    targetRole: 'Web Developers, Backend Engineers, Cloud Administrators, and Systems Engineers.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'HTTP Protocols, Methods & Status Codes',
        weightPercent: 25,
        overview: 'Client-server request/response lifecycles, HTTP methods, status code families (2xx, 3xx, 4xx, 5xx), and HTTP/2 multiplexing.',
        topics: [
          {
            title: 'HTTP/1.1, HTTP/2 & HTTP/3 Protocol Mechanics',
            description: 'Understanding headers, persistent connections, binary framing, and stream multiplexing.',
            skillsAssessed: ['Protocol Specifications', 'HTTP Methods', 'Status Code Triage'],
          },
          {
            title: 'DNS Resolution & Reverse Proxy Concepts',
            description: 'A/CNAME records, DNS hierarchy, forward vs reverse proxies, and Nginx event-driven architecture.',
            skillsAssessed: ['DNS Hierarchy', 'Proxy Architectures', 'Event Loops'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Server Configuration & Certificate Automation',
        weightPercent: 25,
        overview: 'Nginx `proxy_pass`, static asset caching headers, Brotli/Gzip compression, SPA `try_files`, and Certbot ACME automation.',
        topics: [
          {
            title: 'Nginx Web Server & Reverse Proxy Setup',
            description: 'Configuring upstream backends, SSL parameters, rate limits, and custom log formats.',
            skillsAssessed: ['Nginx Configuration', 'Reverse Proxying', 'Asset Caching'],
          },
          {
            title: 'Automated TLS Certificates & Process Supervision',
            description: 'Let\'s Encrypt automated issuance via Certbot, and systemd / PM2 application daemon supervision.',
            skillsAssessed: ['Certbot Automation', 'Process Supervision', 'Service Reloads'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Web Application Security & Header Hardening',
        weightPercent: 25,
        overview: 'CORS policies, Content Security Policy (CSP), HSTS, HttpOnly/SameSite cookies, clickjacking defense, and SSRF prevention.',
        topics: [
          {
            title: 'Security Headers & Cross-Origin Policies',
            description: 'Configuring CSP, CORS `Access-Control-Allow-Origin`, HSTS preloading, and `X-Frame-Options`.',
            skillsAssessed: ['CORS Configuration', 'Content Security Policy', 'HSTS Enforcing'],
          },
          {
            title: 'Authentication Cookies & Session Hardening',
            description: 'Enforcing `Secure`, `HttpOnly`, `SameSite=Strict` cookie flags and protecting against XSS/CSRF.',
            skillsAssessed: ['Cookie Security', 'CSRF Mitigation', 'Token Protection'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Edge Caching, Microservices & Zero-Downtime Releases',
        weightPercent: 25,
        overview: 'Redis caching layers, Layer 7 load balancing, API gateways, Blue-Green deployments, and edge worker middleware.',
        topics: [
          {
            title: 'Caching Strategies & Layer 7 Load Balancing',
            description: 'In-memory caching with Redis, CDN edge points of presence, and path-based routing.',
            skillsAssessed: ['Redis Caching', 'Layer 7 Routing', 'CDN Acceleration'],
          },
          {
            title: 'Zero-Downtime Deployments & Observability',
            description: 'Blue-Green / Canary deployment mechanics, API gateways, circuit breakers, and SRE golden signals.',
            skillsAssessed: ['Zero-Downtime Deployment', 'API Gateways', 'Golden Signals'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },
  // 26. LINUX SYSTEMS & SHELL SCRIPTING
  linux_shell: {
    tier: 'linux_shell',
    title: 'Jnachi Certified Linux Systems Administration & Shell Scripting Specialist',
    overview: 'Validates hands-on capability in Linux operating system administration, POSIX command-line mastery, and robust Bash automation scripting.',
    targetRole: 'DevOps Engineers, Systems Administrators, Cloud Practitioners, and Backend Software Developers.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Filesystem Hierarchy, Inodes & Process Model',
        weightPercent: 25,
        overview: 'FHS directories (/etc, /var, /proc), hard vs soft links, file permission octals, process states, and standard I/O file descriptors.',
        topics: [
          {
            title: 'Linux Filesystem Hierarchy & Inode Architecture',
            description: 'Understanding directory structures, inode allocation, link mechanics, and mount points.',
            skillsAssessed: ['FHS Standards', 'Inode Management', 'File Permissions'],
          },
          {
            title: 'Process Management & Signals',
            description: 'Process lifecycle, init systemd (PID 1), signals (SIGTERM vs SIGKILL), and standard streams (stdin/stdout/stderr).',
            skillsAssessed: ['Signal Handling', 'Process Trees', 'Standard I/O Streams'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Bash Automation, Text Processing & Cron Scheduling',
        weightPercent: 25,
        overview: 'Bash strict mode (`set -euo pipefail`), stream redirection, text filters (`grep`, `sed`, `awk`, `cut`), `find`, `xargs`, and Cron jobs.',
        topics: [
          {
            title: 'Bash Scripting & Strict Error Handling',
            description: 'Writing reusable shell functions, parameter expansion, exit code validation (`$?`), and pipeline error traps.',
            skillsAssessed: ['Bash Strict Mode', 'Control Flow', 'Function Design'],
          },
          {
            title: 'Text Processing Pipelines & Job Automation',
            description: 'Automating multi-stage text processing with awk/sed, batch processing with find/xargs, and crontab scheduling.',
            skillsAssessed: ['Text Processing (awk/sed)', 'Crontab Automation', 'Batch Operations'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'User Security, SSH Hardening & Kernel Isolation',
        weightPercent: 25,
        overview: '`/etc/shadow` password security, SUID/SGID risk mitigation, sudoers delegation, SSH key-only hardening, and SELinux policies.',
        topics: [
          {
            title: 'Authentication & Sudo Privilege Delegation',
            description: 'User and group management, shadow hashing, umask configuration, and secure visudo rule-sets.',
            skillsAssessed: ['Sudoers Delegation', 'Umask Settings', 'Password Security'],
          },
          {
            title: 'SSH Hardening & Access Isolation',
            description: 'Disabling root password logins in sshd_config, key-based authentication, and SELinux/AppArmor containment.',
            skillsAssessed: ['SSH Hardening', 'SELinux Policies', 'Network Firewall (UFW)'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Performance Tuning, Cgroups, LVM & Kernel Diagnostics',
        weightPercent: 25,
        overview: 'Load average analysis, cgroups v2 resource limits, block I/O profiling (iostat), sysctl kernel tuning, LVM volume management, and strace.',
        topics: [
          {
            title: 'System Diagnostics & Performance Profiling',
            description: 'Interpreting load averages, troubleshooting OOM killer triggers, disk I/O analysis, and system call tracing via strace.',
            skillsAssessed: ['Load Average Analysis', 'OOM Management', 'Strace Diagnostics'],
          },
          {
            title: 'Storage Management & Kernel Optimization',
            description: 'Dynamic partition resizing with LVM, kernel sysctl parameters, log rotation, and automated Infrastructure as Code.',
            skillsAssessed: ['LVM Storage', 'Sysctl Tuning', 'Logrotate Automation'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },
  // 27. RELATIONAL DATABASES & ADVANCED SQL
  sql_database: {
    tier: 'sql_database',
    title: 'Jnachi Certified Relational Database Engineering & Advanced SQL Specialist',
    overview: 'Validates comprehensive knowledge of relational schema modeling, normalization, ACID transactions, complex joins, window functions, and query plan optimization.',
    targetRole: 'Database Developers, Data Analysts, Backend Engineers, Data Engineers, and Application Architects.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'Relational Modeling, Normalization & ACID Properties',
        weightPercent: 25,
        overview: '1NF–BCNF normalization, primary/foreign key constraints, ACID transaction properties, and fundamental JOIN mechanics.',
        topics: [
          {
            title: 'Schema Normalization & Constraints',
            description: 'Designing normalized schemas, primary/unique keys, foreign keys with cascading actions, and data integrity rules.',
            skillsAssessed: ['Normalization (1NF–3NF)', 'Referential Integrity', 'Constraint Design'],
          },
          {
            title: 'ACID Transactions & Core SQL Clauses',
            description: 'Transaction boundaries (COMMIT/ROLLBACK), WHERE vs HAVING filtering, and UNION vs UNION ALL behavior.',
            skillsAssessed: ['ACID Principles', 'Aggregation Filtering', 'Set Operations'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Advanced SQL, Window Functions & CTEs',
        weightPercent: 25,
        overview: 'Window functions (`ROW_NUMBER`, `RANK`, `DENSE_RANK`, `LAG`/`LEAD`), Common Table Expressions (`WITH`), Stored Procedures, Triggers, and Upsert.',
        topics: [
          {
            title: 'SQL Window Functions & Analytical Queries',
            description: 'Writing complex partitioning, ranking, running totals, and offset analytical queries with OVER() clauses.',
            skillsAssessed: ['Window Functions', 'Analytical Ranking', 'Cumulative Sums'],
          },
          {
            title: 'CTEs, Upserts & Stored Procedures',
            description: 'Recursive CTEs, `ON CONFLICT DO UPDATE` upserts, stored procedures, triggers, and schema migrations.',
            skillsAssessed: ['Common Table Expressions', 'Upsert Operations', 'Stored Procedures'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'SQL Injection Defense, Isolation Levels & RBAC',
        weightPercent: 25,
        overview: 'Parameterized queries, Dirty/Non-repeatable/Phantom read anomalies, Serializable isolation, Row-Level Security (RLS), and TDE encryption.',
        topics: [
          {
            title: 'SQLi Defense & Parameterized Queries',
            description: 'Neutralizing SQL injection via prepared statements, ORM parameterization, and input sanitization.',
            skillsAssessed: ['Prepared Statements', 'SQLi Prevention', 'Role-Based Access (GRANT)'],
          },
          {
            title: 'Transaction Isolation & Row-Level Security',
            description: 'Managing isolation levels (Read Committed to Serializable), deadlock resolution, Row-Level Security, and PITR recovery.',
            skillsAssessed: ['Isolation Levels', 'Deadlock Triage', 'Row-Level Security (RLS)'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Indexing Strategies, Query Optimization & Sharding',
        weightPercent: 25,
        overview: 'B-Tree indexes, composite leftmost prefixing, covering indexes, EXPLAIN ANALYZE plan optimization, connection pooling, and sharding.',
        topics: [
          {
            title: 'B-Tree Indexes & Query Execution Plans',
            description: 'Analyzing query plans with EXPLAIN, eliminating sequential table scans, and designing covering indexes.',
            skillsAssessed: ['EXPLAIN Plan Analysis', 'Composite Indexes', 'Index-Only Scans'],
          },
          {
            title: 'Scalability: Partitioning, Replication & Pooling',
            description: 'Table range/hash partitioning, read replica replication, database connection pooling (HikariCP/PgBouncer), and sharding.',
            skillsAssessed: ['Table Partitioning', 'Read Replication', 'Connection Pooling'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },
  // 28. ENTERPRISE CORE JAVA
  core_java: {
    tier: 'core_java',
    title: 'Jnachi Certified Enterprise Core Java Development Specialist',
    overview: 'Validates rigorous understanding of modern Core Java programming (Java 17/21 LTS), OOP principles, JVM memory architecture, Collections, Concurrency, and Streams API.',
    targetRole: 'Java Developers, Backend Software Engineers, Enterprise Application Developers, and Computer Science Students.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      proctoringRules: COMMON_PROCTORING_RULES,
    },
    sections: {
      literacy: {
        id: 'literacy',
        title: 'OOP Foundations, JVM Memory & Classloading',
        weightPercent: 25,
        overview: 'Encapsulation, interfaces vs abstract classes, Stack vs Heap memory, String immutability/pool, equals/hashCode contracts, and modern records.',
        topics: [
          {
            title: 'Core OOP, Interfaces & Java 17/21 Records',
            description: 'Mastering polymorphism, default interface methods, record classes, and compile-time overloading vs runtime overriding.',
            skillsAssessed: ['OOP Principles', 'Interface Design', 'Record Classes'],
          },
          {
            title: 'JVM Memory Architecture & Exception Handling',
            description: 'Stack vs Heap allocation, String pool mechanics, equals/hashCode rules, and Checked vs Unchecked exceptions.',
            skillsAssessed: ['Stack vs Heap', 'String Pool', 'Exception Handling'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Collections Framework, Streams API & Modern Features',
        weightPercent: 25,
        overview: 'Java Collections (List, Set, Map), Functional Streams API pipelines, Try-with-Resources, Optional, Generics, and ExecutorService thread pools.',
        topics: [
          {
            title: 'Functional Streams API & Collections',
            description: 'Intermediate vs terminal operations, lambda expressions, custom collectors, and Collection performance characteristics.',
            skillsAssessed: ['Streams API', 'Collections Selection', 'Lambda Expressions'],
          },
          {
            title: 'Resource Management, Generics & Thread Pools',
            description: 'AutoCloseable resource management, Generics type safety, Optional pattern, and asynchronous CompletableFuture pipelines.',
            skillsAssessed: ['Try-with-Resources', 'CompletableFuture', 'ExecutorService'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Java Concurrency, Memory Model & Security Best Practices',
        weightPercent: 25,
        overview: 'Volatile variable visibility, explicit ReentrantLock, ConcurrentHashMap thread-safety, SecureRandom, password char[] arrays, and memory leak triage.',
        topics: [
          {
            title: 'Java Memory Model (JMM) & Synchronization',
            description: 'Volatile visibility guarantees, intrinsic vs explicit locks, race condition mitigation, and atomic CAS operations.',
            skillsAssessed: ['Volatile Visibility', 'Lock Synchronization', 'ConcurrentHashMap'],
          },
          {
            title: 'Cryptographic Security & Memory Leak Prevention',
            description: 'SecureRandom key generation, defensive copying for immutability, zeroing sensitive char[] arrays, and leak triage.',
            skillsAssessed: ['SecureRandom', 'Defensive Copying', 'Memory Leak Triage'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Garbage Collection Tuning, Virtual Threads & JIT Compilation',
        weightPercent: 25,
        overview: 'Generational GC (G1GC/ZGC), Java 21 Virtual Threads (Project Loom), JIT C1/C2 compilation, escape analysis, heap sizing, and GraalVM Native Image.',
        topics: [
          {
            title: 'Garbage Collection (G1GC/ZGC) & JVM Tuning',
            description: 'Generational GC mechanics, ultra-low-latency ZGC pause times, heap sizing flags (-Xms/-Xmx), and JFR telemetry.',
            skillsAssessed: ['Garbage Collection (ZGC)', 'Heap Tuning', 'JFR Profiling'],
          },
          {
            title: 'Virtual Threads, JIT Compilation & GraalVM',
            description: 'Java 21 Virtual Threads concurrency, JIT escape analysis (stack allocation), false sharing avoidance, and Native Image AOT.',
            skillsAssessed: ['Virtual Threads (Loom)', 'JIT Optimization', 'GraalVM Native Image'],
          },
        ],
      },
    },
    preparationPath: COMMON_PREP_PATH,
  },
};

export const CERT_SYLLABI = CERT_SYLLABUS;
