import { CertTier } from './certTypes';
import { CertSection } from './certQuestions/types';

export interface SyllabusSectionTopic {
  title: string;
  description: string;
  skillsAssessed: string[];
}

export interface SyllabusSection {
  id: CertSection;
  title: string;
  weightPercent: number; // e.g., 25%
  overview: string;
  topics: SyllabusSectionTopic[];
  recommendedLessonSlugs?: string[];
}

export interface TierSyllabus {
  tier: CertTier;
  title: string;
  badgeLabel: string;
  levelNumber: number;
  overview: string;
  targetRole: string;
  examSpecs: {
    totalQuestions: number;
    durationMinutes: number;
    passingScorePercent: number;
    questionFormat: string;
    proctoringRules: string[];
  };
  preparationPath: {
    stepNumber: number;
    title: string;
    action: string;
  }[];
  sections: Record<CertSection, SyllabusSection>;
}

export const CERT_SYLLABUS: Record<CertTier, TierSyllabus> = {
  beginner: {
    tier: 'beginner',
    title: 'Jnachi Beginner Certification',
    badgeLabel: 'JNACHI BEGINNER CERTIFIED',
    levelNumber: 1,
    overview: 'The foundational benchmark for applied AI fluency. Verifies that candidates understand core prompt anatomy, context hygiene, basic micro-task automation, corporate privacy redlines, and critical output evaluation.',
    targetRole: 'Professionals, knowledge workers, students, and operational teams starting their AI productivity journey.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      questionFormat: '40 Multiple-Choice Questions (10 per section sampled from an 80-question bank)',
      proctoringRules: [
        'Single-window proctoring with 3-Strike Focus Loss detection',
        'Direct text copying and clipboard shortcuts disabled',
        '80% minimum overall benchmark (at least 32 / 40 correct)',
        '24-Hour attempt cooldown between consecutive attempts',
      ],
    },
    preparationPath: [
      {
        stepNumber: 1,
        title: 'Master Four-Block Prompt Anatomy',
        action: 'Practice structuring every prompt with explicit Role, Context, Deliverable, and Constraints.',
      },
      {
        stepNumber: 2,
        title: 'Conduct a Personal Micro-Task Audit',
        action: 'Identify 3 recurring weekly 2-5 minute tasks and build reusable prompt templates with variable placeholders.',
      },
      {
        stepNumber: 3,
        title: 'Memorize Data Privacy Red Lines',
        action: 'Understand Zero Data Retention (ZDR), consumer vs enterprise data privacy, and client-side PII scrubbing.',
      },
      {
        stepNumber: 4,
        title: 'Practice Cognitive Sparring & Output Verification',
        action: 'Use LLMs as devil\'s advocates to challenge assumptions, and apply zero-trust verification on all factual claims.',
      },
    ],
    sections: {
      literacy: {
        id: 'literacy',
        title: 'AI Literacy & Prompting',
        weightPercent: 25,
        overview: 'Core foundational mechanics of interacting with Large Language Models reliably and deterministically.',
        topics: [
          {
            title: 'Prompt Structure & Anatomy',
            description: 'Role definition, context grounding, specific task directives, positive vs negative constraints, and output format contracts.',
            skillsAssessed: ['Role Persona Modeling', 'Few-Shot Example Tuning', 'Constraint Framing', 'JSON/Markdown Formatting'],
          },
          {
            title: 'Model Parameters & Context Windows',
            description: 'Understanding temperature, token budgeting, context window limits, and the mechanics of token prediction.',
            skillsAssessed: ['Temperature Calibration', 'Token Allocation Awareness', 'Context Hygiene', 'Chain-of-Thought Activation'],
          },
          {
            title: 'Hallucination Mitigation',
            description: 'Recognizing ungrounded assertions, factual drift, and applying grounding techniques to ensure precision.',
            skillsAssessed: ['Zero Trust Verification', 'Citation Enforcement', 'Negative Scope Boundary Setting'],
          },
        ],
        recommendedLessonSlugs: ['anatomy-of-a-great-prompt', 'few-shot-prompting', 'temperature-and-sampling'],
      },
      automation: {
        id: 'automation',
        title: 'Workflow Automation',
        weightPercent: 25,
        overview: 'Transforming recurring manual work into structured, repeatable prompts and multi-stage pipelines.',
        topics: [
          {
            title: 'Micro-Task Auditing & Decomposition',
            description: 'Breaking down complex ambiguous workflows into 2–10 minute discrete sub-tasks suitable for AI acceleration.',
            skillsAssessed: ['Workflow Deconstruction', 'Task Suitability Filtering', 'Bottleneck Identification'],
          },
          {
            title: 'Clay Drafting & Prompt Chaining',
            description: 'Separating generative drafting from editorial refinement; chaining intermediate outputs between prompts.',
            skillsAssessed: ['Two-Pass Generation', 'Prompt Chaining Sequences', 'Intermediate Schema Validation'],
          },
          {
            title: 'Prompt Libraries & System Context',
            description: 'Creating parameterized prompt repositories ({name}, {context}) and configuring persistent custom instructions.',
            skillsAssessed: ['Template Parameterization', 'Custom System Prompts', 'Reusable Macro Design'],
          },
        ],
        recommendedLessonSlugs: ['clay-drafting-workflows', 'building-prompt-libraries', 'prompt-chaining-basics'],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Privacy & Ethics',
        weightPercent: 25,
        overview: 'Safe and responsible AI utilization, safeguarding sensitive data, and adhering to legal compliance standards.',
        topics: [
          {
            title: 'Consumer vs. Enterprise Privacy Tiers',
            description: 'Understanding foundation model training policies, chat history settings, and Zero Data Retention (ZDR) agreements.',
            skillsAssessed: ['ZDR Verification', 'Opt-out Configuration', 'Cloud Storage Boundary Awareness'],
          },
          {
            title: 'Personally Identifiable Information (PII) Scrubbing',
            description: 'Identifying and masking sensitive employee, customer, medical, and financial identifiers prior to prompt submission.',
            skillsAssessed: ['Client-Side Anonymization', 'PCI/HIPAA Basic Guardrails', 'Pseudonymization Patterns'],
          },
          {
            title: 'Algorithmic Bias & Accountability',
            description: 'Recognizing demographic skews in generated text and maintaining human-in-the-loop professional accountability.',
            skillsAssessed: ['Bias Detection', 'Ethical Red Lines', 'Human Verification Governance'],
          },
        ],
        recommendedLessonSlugs: ['data-privacy-and-retention', 'pii-anonymization-guide', 'responsible-ai-ethics'],
      },
      growth: {
        id: 'growth',
        title: 'Growth & Problem Solving',
        weightPercent: 25,
        overview: 'Elevating cognitive leverage, sparring on strategic problems, and building sustainable AI momentum.',
        topics: [
          {
            title: 'Cognitive Sparring & Persona Stress-Testing',
            description: 'Instructing models to roleplay as critical stakeholders (CFO, auditor, customer) to stress-test proposals.',
            skillsAssessed: ['Steel-man Critique Design', 'Counter-Argument Synthesis', 'Blind Spot Identification'],
          },
          {
            title: 'Combating Sycophancy & Confirmation Bias',
            description: 'Preventing models from confirming flawed hypotheses through objective prompt calibration.',
            skillsAssessed: ['Anti-Sycophancy Prompting', 'Factual Reconciliation', 'Adversarial Prompting'],
          },
          {
            title: 'Multimodal Vision Problem Solving',
            description: 'Utilizing screenshots, diagrams, and visual UI layouts to accelerate technical troubleshooting.',
            skillsAssessed: ['Visual Debugging', 'Chart & Trend Extraction', 'Whiteboard Synthesis'],
          },
        ],
        recommendedLessonSlugs: ['cognitive-sparring-techniques', 'anti-hype-evaluation-filters', 'multimodal-problem-solving'],
      },
    },
  },

  practitioner: {
    tier: 'practitioner',
    title: 'Jnachi Practitioner Certification',
    badgeLabel: 'JNACHI PRACTITIONER CERTIFIED',
    levelNumber: 2,
    overview: 'The benchmark for hands-on operators and domain professionals actively deploying AI inside complex daily workflows. Assesses scenario execution, JSON extraction schemas, multi-document synthesis, and enterprise compliance.',
    targetRole: 'Product managers, analysts, senior operators, and consultants driving operational AI adoption.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      questionFormat: '40 In-Depth Scenario Questions (10 per section sampled from an 80-question bank)',
      proctoringRules: [
        'Single-window proctoring with 3-Strike Focus Loss detection',
        'Direct text copying and clipboard shortcuts disabled',
        '80% minimum overall benchmark (at least 32 / 40 correct)',
        '24-Hour attempt cooldown between consecutive attempts',
      ],
    },
    preparationPath: [
      {
        stepNumber: 1,
        title: 'Master Strict JSON Schemas & Negative Constraints',
        action: 'Build prompt templates that output strictly parseable JSON schemas with confidence scores.',
      },
      {
        stepNumber: 2,
        title: 'Implement Multi-Document Synthesis Pipelines',
        action: 'Extract insights across conflicting reports, handling "lost in the middle" context window phenomena.',
      },
      {
        stepNumber: 3,
        title: 'Audit Enterprise Privacy & DPA Workflows',
        action: 'Execute client-side PII masking pipelines and verify Data Processing Agreements.',
      },
      {
        stepNumber: 4,
        title: 'Develop Anti-Hype Evaluation Filters',
        action: 'Evaluate commercial AI wrappers vs defensible domain workflow integrations.',
      },
    ],
    sections: {
      literacy: {
        id: 'literacy',
        title: 'AI Literacy & Prompting',
        weightPercent: 25,
        overview: 'Advanced prompt calibration, regression testing, and strict output contract enforcement.',
        topics: [
          {
            title: 'Strict JSON & Machine-Parsable Schemas',
            description: 'Designing typed prompt schemas that eliminate conversational preamble and parse reliably in downstream code.',
            skillsAssessed: ['Schema Specification', 'Constrained Sampling Awareness', 'Zero-Preamble Directives'],
          },
          {
            title: 'Context Window Optimization & "Lost in the Middle"',
            description: 'Positioning high-priority context tokens at optimal attention boundaries in multi-thousand token contexts.',
            skillsAssessed: ['Attention Density Optimization', 'Chunk Placement Strategy', 'Information Retrieval Grounding'],
          },
          {
            title: 'Prompt Drift & Regression Testing',
            description: 'Detecting subtle shifts in model responses due to provider updates and running assertion test suites.',
            skillsAssessed: ['Prompt Regression Testing', 'Assertion Benchmarks', 'Drift Monitoring'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Workflow Automation',
        weightPercent: 25,
        overview: 'Multi-stage processing pipelines, data transformation, and automated error recovery.',
        topics: [
          {
            title: 'Multi-Stage Transcript & Document Pipelines',
            description: 'Deconstructing 90-minute recordings and reports into structured action items, owners, and deliverables.',
            skillsAssessed: ['Stage-Gated Processing', 'Speaker Diarization Summarization', 'Action Matrix Extraction'],
          },
          {
            title: 'Batch Extraction & Numerical Pre-calculation',
            description: 'Combining programmatic arithmetic calculations with generative qualitative synthesis to eliminate math hallucinations.',
            skillsAssessed: ['Deterministic Pre-calculation', 'Batch Processing Efficiency', 'Structured CSV Ingestion'],
          },
          {
            title: 'Resilient Error Fallbacks & Retry Loops',
            description: 'Architecting graceful degradation when automated responses fail schema validation.',
            skillsAssessed: ['Parsing Exception Recovery', 'Correction Prompt Routing', 'Human Review Queue Dispatch'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Privacy & Ethics',
        weightPercent: 25,
        overview: 'Enterprise compliance frameworks, data processing agreements, and multi-tenant security.',
        topics: [
          {
            title: 'GDPR/CCPA Compliance & Data Processing Agreements',
            description: 'Contractual requirements, sub-processor security disclosures, and enterprise data residency.',
            skillsAssessed: ['DPA Standard Clauses', 'Data Sovereignty', 'Vendor Compliance Auditing'],
          },
          {
            title: 'Client-Side Masking vs Server Redaction',
            description: 'Comparing tokenization masking mechanisms and verifying that confidential keys never egress.',
            skillsAssessed: ['Tokenized PII Replacement', 'Secret Key Isolation', 'Prompt Sanitization'],
          },
          {
            title: 'Code Copyright & Licensing Audits',
            description: 'Configuring telemetry filters in AI coding copilot tools and running open-source license compliance audits.',
            skillsAssessed: ['Code Match Filtering', 'License Scanners', 'Attribution Verification'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Growth & Problem Solving',
        weightPercent: 25,
        overview: 'Strategic reasoning, organizational momentum, and human-in-the-loop decision amplification.',
        topics: [
          {
            title: 'Strategic Anti-Hype Filters',
            description: 'Dissecting third-party AI software to distinguish thin wrappers from defensible domain technology.',
            skillsAssessed: ['Architecture Dissection', 'Moat Evaluation', 'TCO Analysis'],
          },
          {
            title: 'Calibration & Sycophancy Inversion',
            description: 'Developing sharp intuition for model strengths and systematically eliminating flattering confirmational skews.',
            skillsAssessed: ['Cognitive Calibration', 'Adversarial Prompting', 'Bias Disruption'],
          },
          {
            title: 'Multimodal UI/UX & Layout Debugging',
            description: 'Diagnosing complex visual defects by pairing DOM source code with visual render screenshots.',
            skillsAssessed: ['Multimodal Troubleshooting', 'Visual CSS Pinpointing', 'Cross-Platform Inspection'],
          },
        ],
      },
    },
  },

  builder: {
    tier: 'builder',
    title: 'Jnachi Builder Certification',
    badgeLabel: 'JNACHI BUILDER CERTIFIED',
    levelNumber: 3,
    overview: 'The benchmark for technical engineers, tool builders, and pipeline designers. Tests function calling, agent state graphs (ReAct), Retrieval-Augmented Generation (RAG), prompt injection defense, and unit cost economics.',
    targetRole: 'AI engineers, software developers, technical product managers, and automation architects.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      questionFormat: '40 Pipeline, Code & Architecture Questions (10 per section sampled from an 80-question bank)',
      proctoringRules: [
        'Single-window proctoring with 3-Strike Focus Loss detection',
        'Direct text copying and clipboard shortcuts disabled',
        '80% minimum overall benchmark (at least 32 / 40 correct)',
        '24-Hour attempt cooldown between consecutive attempts',
      ],
    },
    preparationPath: [
      {
        stepNumber: 1,
        title: 'Master Structured Tool & Function Calling',
        action: 'Design JSON parameter schemas, docstring cues, and constrained decoding workflows.',
      },
      {
        stepNumber: 2,
        title: 'Build Resilient RAG & State Graph Architectures',
        action: 'Implement chunking strategies, vector index filtering with ACLs, and multi-agent state machines.',
      },
      {
        stepNumber: 3,
        title: 'Harden Pipelines Against Prompt Injections',
        action: 'Isolate untrusted data inputs, apply least privilege tool scopes, and scrub PII traces.',
      },
      {
        stepNumber: 4,
        title: 'Optimize Unit Economics & Evals',
        action: 'Deploy model cascading (Flash -> Pro), rate-limit backoffs, and automated faithfulness evals.',
      },
    ],
    sections: {
      literacy: {
        id: 'literacy',
        title: 'AI Literacy & Prompting',
        weightPercent: 25,
        overview: 'Tool declarations, dynamic prompt templating engines, and constrained sampling decoding.',
        topics: [
          {
            title: 'Structured Tool / Function Calling Declarations',
            description: 'Designing JSON schema parameters, detailed docstrings, and strict type constraints for model tool execution.',
            skillsAssessed: ['Function Signature Design', 'Schema Type Enforcement', 'Docstring Context Grounding'],
          },
          {
            title: 'Dynamic Templating & Router Classifiers',
            description: 'Using Jinja2/Mustache templating to inject session variables and dispatching intent via lightweight classifiers.',
            skillsAssessed: ['Prompt Template Composition', 'Semantic Routing', 'Intent Classification'],
          },
          {
            title: 'Constrained Decoding vs Post-Hoc Validation',
            description: 'Understanding grammar-based sampling, JSON logit masks, and deterministic syntax enforcement.',
            skillsAssessed: ['Logit Bias Masking', 'Grammar Sampling', 'Syntax Guarantee Methods'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Workflow Automation',
        weightPercent: 25,
        overview: 'Autonomous agent loops (ReAct), Retrieval-Augmented Generation, and state management.',
        topics: [
          {
            title: 'Autonomous Agent Loops & Breakpoints',
            description: 'Architecting Reasoning -> Action -> Observation -> Evaluation loops with recursion limit guards.',
            skillsAssessed: ['ReAct Agent Architecture', 'Loop Guardrails', 'Human-in-the-Loop Escalation'],
          },
          {
            title: 'RAG Pipeline Design & Chunking Strategies',
            description: 'Semantic vector search, chunk overlap sizing, hybrid dense/sparse retrieval, and knowledge injection.',
            skillsAssessed: ['Vector Chunk Sizing', 'Embedding Distance Metrics', 'Context Injection Budgets'],
          },
          {
            title: 'Asynchronous Queues & Rate Limiting (TPM/RPM)',
            description: 'Implementing token-bucket rate limiters, exponential backoffs with jitter, and BullMQ/SQS workers.',
            skillsAssessed: ['Rate Limit Throttling', 'Retry Backoff Algorithms', 'Batch Queue Orchestration'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Privacy & Ethics',
        weightPercent: 25,
        overview: 'Prompt injection hardening, ACL-filtered vector retrieval, and least privilege tool scoping.',
        topics: [
          {
            title: 'Direct & Indirect Prompt Injection Defenses',
            description: 'Isolating untrusted third-party data within strict boundary tags and sanitizing input streams.',
            skillsAssessed: ['Data Delimiter Sandboxing', 'Indirect Injection Mitigation', 'Adversarial Input Scrubbing'],
          },
          {
            title: 'ACL & Permission Enforcement in RAG',
            description: 'Filtering vector search queries with tenant metadata to prevent unauthorized document leakage.',
            skillsAssessed: ['Tenant-Isolated Indexing', 'Metadata ACL Filtering', 'Role-Based Vector Retrieval'],
          },
          {
            title: 'Principle of Least Privilege in Tool Design',
            description: 'Scoping agent tools to read-only capabilities and requiring explicit human sign-off for state mutations.',
            skillsAssessed: ['Tool Scope Minimization', 'Read-Only Sandboxing', 'Mutation Verification Gates'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Growth & Problem Solving',
        weightPercent: 25,
        overview: 'Unit economics, model cascading, automated evaluation frameworks, and telemetry.',
        topics: [
          {
            title: 'Unit Economics & Model Cascading',
            description: 'Calculating cost per transaction and routing simple queries to low-cost models and complex reasoning to frontier models.',
            skillsAssessed: ['Token Cost Modeling', 'Tiered Model Cascades', 'Latency vs Cost Trade-offs'],
          },
          {
            title: 'Automated Evaluation Frameworks (Ragas, DeepEval)',
            description: 'Measuring faithfulness, answer relevancy, and context recall using golden benchmark datasets.',
            skillsAssessed: ['Faithfulness Metrics', 'Context Recall Scoring', 'Golden Dataset Assertion'],
          },
          {
            title: 'Production Telemetry & A/B Prompt Testing',
            description: 'Tracking p95 latency, parse failure rates, and running live production A/B prompt variant splits.',
            skillsAssessed: ['A/B Prompt Routing', 'Latency & Error Dashboards', 'User Feedback Signals'],
          },
        ],
      },
    },
  },

  master: {
    tier: 'master',
    title: 'Jnachi Master (Architect) Certification',
    badgeLabel: 'JNACHI MASTER ARCHITECT CERTIFIED',
    levelNumber: 4,
    overview: 'The pinnacle credential. Evaluates strategic governance, model auditing, knowing when NOT to use AI, circuit breakers, EU AI Act compliance, and elevating organizational capability.',
    targetRole: 'Chief AI Officers, enterprise architects, directors of engineering, and senior strategic leaders.',
    examSpecs: {
      totalQuestions: 40,
      durationMinutes: 45,
      passingScorePercent: 80,
      questionFormat: '40 Strategic, Governance & Judgment Questions (10 per section sampled from an 80-question bank)',
      proctoringRules: [
        'Single-window proctoring with 3-Strike Focus Loss detection',
        'Direct text copying and clipboard shortcuts disabled',
        '80% minimum overall benchmark (at least 32 / 40 correct)',
        '24-Hour attempt cooldown between consecutive attempts',
      ],
    },
    preparationPath: [
      {
        stepNumber: 1,
        title: 'Master Governance & the EU AI Act',
        action: 'Formulate conformity assessment frameworks for High-Risk AI systems and establish AI governance boards.',
      },
      {
        stepNumber: 2,
        title: 'Design Circuit Breakers & Fail-Safe Architecture',
        action: 'Architect graceful degradation heuristics, shadow deployments, and cascading error cut-offs.',
      },
      {
        stepNumber: 3,
        title: 'Mitigate Cognitive Offloading & Model Collapse',
        action: 'Enforce zero-trust code review protocols and monitor synthetic recursive training drift.',
      },
      {
        stepNumber: 4,
        title: 'Champion Organizational AI Momentum',
        action: 'Establish empirical model bake-offs, shared prompt audits, and cross-functional mentorship programs.',
      },
    ],
    sections: {
      literacy: {
        id: 'literacy',
        title: 'AI Literacy & Prompting',
        weightPercent: 25,
        overview: 'Strategic discernment, knowing when NOT to use AI, adversarial red teaming, and model auditing.',
        topics: [
          {
            title: 'When NOT to Use Generative AI',
            description: 'Identifying problems requiring 100% deterministic mathematical precision and classic database algorithms.',
            skillsAssessed: ['Deterministic vs Probabilistic Evaluation', 'Liability Assessment', 'Technology Selection'],
          },
          {
            title: 'Adversarial Red Teaming & Jailbreak Auditing',
            description: 'Designing automated penetration tests probing for token smuggling, data extraction, and boundary bypasses.',
            skillsAssessed: ['Red Teaming Architecture', 'Payload Obfuscation Probing', 'Safety Boundary Stress Testing'],
          },
          {
            title: 'Model Collapse & Cognitive Offloading',
            description: 'Diagnosing model collapse in recursive synthetic loops and preventing loss of domain intuition in teams.',
            skillsAssessed: ['Synthetic Training Safeguards', 'Review Quality Maintenance', 'Domain Competency Preservation'],
          },
        ],
      },
      automation: {
        id: 'automation',
        title: 'Workflow Automation',
        weightPercent: 25,
        overview: 'System-level circuit breakers, vendor lock-in mitigation, and CI/CD prompt versioning.',
        topics: [
          {
            title: 'Cascading AI Failures & Circuit Breakers',
            description: 'Implementing automated kill-switches and rate throttles when multi-agent microservices drift.',
            skillsAssessed: ['Systemic Anomaly Detection', 'Circuit Breaker Design', 'Microservice Fault Isolation'],
          },
          {
            title: 'Vendor Abstraction & Lock-in Mitigation',
            description: 'Creating unified provider interfaces to swap underlying model clusters without business code refactors.',
            skillsAssessed: ['Model Gateway Design', 'Multi-Provider Abstraction', 'Failover Orchestration'],
          },
          {
            title: 'Prompt CI/CD & Shadow Deployments',
            description: 'Treating prompts as versioned software artifacts with automated regression gates and silent shadow traffic.',
            skillsAssessed: ['Prompt Version Control', 'Shadow Evaluation Pipelines', 'Automated Rollback Systems'],
          },
        ],
      },
      privacy: {
        id: 'privacy',
        title: 'Data Privacy & Ethics',
        weightPercent: 25,
        overview: 'Global regulatory compliance (EU AI Act), differential privacy, and governance boards.',
        topics: [
          {
            title: 'EU AI Act & High-Risk Conformity Assessments',
            description: 'Evaluating mandatory fundamental rights impact assessments, risk categorizations, and transparency logs.',
            skillsAssessed: ['Regulatory Classification', 'Fundamental Rights Impact Analysis', 'Conformity Auditing'],
          },
          {
            title: 'Differential Privacy & Model Inversion Defense',
            description: 'Applying calibrated statistical noise and safeguarding proprietary weights from adversarial inversion.',
            skillsAssessed: ['Differential Privacy Noise Calibration', 'Model Inversion Resistance', 'Weight Watermarking'],
          },
          {
            title: 'AI Governance Board Leadership',
            description: 'Structuring cross-functional oversight across engineering, legal, security, product, and ethics.',
            skillsAssessed: ['Governance Board Frameworks', 'Disparate Impact Remediation', 'Ethical Review Gates'],
          },
        ],
      },
      growth: {
        id: 'growth',
        title: 'Growth & Problem Solving',
        weightPercent: 25,
        overview: 'Organizational momentum, empirical model bake-offs, and talent uplift mentorship.',
        topics: [
          {
            title: 'Empirical Model Bake-Offs',
            description: 'Conducting objective benchmark evaluations on custom domain datasets comparing latency, accuracy, and SLA.',
            skillsAssessed: ['Domain Benchmarking', 'TCO Comparative Analysis', 'SLA Contract Evaluation'],
          },
          {
            title: 'Graceful Degradation in Critical Infrastructure',
            description: 'Designing fail-safe heuristics that preserve user state and seamlessly transition to manual human queues.',
            skillsAssessed: ['Graceful Failover Heuristics', 'High-Reliability Architecture', 'State Preservation'],
          },
          {
            title: 'Mentorship & Organizational Momentum',
            description: 'Instilling critical discernment across engineering teams and unlocking sustainable human-AI leverage.',
            skillsAssessed: ['Organizational Talent Uplift', 'Culture of Accountable Experimentation', 'AI Capability Mentorship'],
          },
        ],
      },
    },
  },
};
