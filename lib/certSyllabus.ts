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
};

export const CERT_SYLLABI = CERT_SYLLABUS;
