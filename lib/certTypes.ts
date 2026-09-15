export type CertTier = 'beginner' | 'practitioner' | 'builder' | 'master';

export interface TierConfig {
  id: CertTier;
  levelNumber: number;
  title: string;
  badgeLabel: string;
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
  beginner: {
    id: 'beginner',
    levelNumber: 1,
    title: 'Jnachi Beginner',
    badgeLabel: 'JNACHI BEGINNER CERTIFIED',
    shortDescription: 'Confirms baseline fluency across core prompting, automation, privacy, and problem-solving.',
    fullDescription: 'Validates foundational literacy and basic practical application of AI tools. Assesses knowledge of effective prompt anatomy, context hygiene, data confidentiality redlines, and basic workflow efficiency.',
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
    levelNumber: 2,
    title: 'Jnachi Practitioner',
    badgeLabel: 'JNACHI PRACTITIONER CERTIFIED',
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
    levelNumber: 3,
    title: 'Jnachi Builder',
    badgeLabel: 'JNACHI BUILDER CERTIFIED',
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
    levelNumber: 4,
    title: 'Jnachi Master (Architect)',
    badgeLabel: 'JNACHI MASTER ARCHITECT CERTIFIED',
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
};

export const TIER_ORDER: CertTier[] = ['beginner', 'practitioner', 'builder', 'master'];
