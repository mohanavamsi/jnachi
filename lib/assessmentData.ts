export type Category = "literacy" | "automation" | "privacy" | "growth";

export interface Option {
  id: string;
  label: string;
  points: number; // 0 - 10
}

export interface Question {
  id: string;
  category: Category;
  prompt: string;
  options: Option[];
}

export interface Finding {
  category: Category;
  scoreRange: [number, number]; // [min, max] inclusive
  strength?: string;
  growthArea?: string;
  actionStep?: {
    title: string;
    description: string;
  };
}

export const CATEGORY_LABELS: Record<Category, string> = {
  literacy: "AI Literacy & Prompting",
  automation: "Workflow Automation",
  privacy: "Data Privacy & Ethics",
  growth: "Growth & Problem Solving"
};

// 9 Questions (distributed across 4 categories)
export const QUESTIONS: Question[] = [
  // Literacy (3 questions)
  {
    id: "q1",
    category: "literacy",
    prompt: "When you ask an AI tool for help, what does your request usually look like?",
    options: [
      { id: "a", label: "A short, general question — like something you'd type into a search engine.", points: 0 },
      { id: "b", label: "A specific question, but without much background or context.", points: 3 },
      { id: "c", label: "A clear ask with context and the format you want back (e.g. \"as a table,\" \"in 3 bullet points\").", points: 7 },
      { id: "d", label: "A structured prompt with role, context, the specific deliverable, and any constraints spelled out.", points: 10 }
    ]
  },
  {
    id: "q2",
    category: "literacy",
    prompt: "If an AI tool gives you an answer that seems off or too generic, what do you usually do?",
    options: [
      { id: "a", label: "Take the answer as-is, or give up on using AI for that task.", points: 0 },
      { id: "b", label: "Ask again with slightly different wording and hope for the best.", points: 3 },
      { id: "c", label: "Add more context or an example of what you actually want, then try again.", points: 7 },
      { id: "d", label: "Break the task into smaller steps or ask the AI to explain its reasoning before refining further.", points: 10 }
    ]
  },
  {
    id: "q3",
    category: "literacy",
    prompt: "How do you currently think about AI \"hallucinations\" (confidently wrong answers)?",
    options: [
      { id: "a", label: "I hadn't really thought about it — I assume the answers are correct.", points: 0 },
      { id: "b", label: "I've heard AI can be wrong, but I don't have a habit of checking.", points: 3 },
      { id: "c", label: "I double-check answers when the stakes are high (numbers, facts, quotes).", points: 7 },
      { id: "d", label: "I routinely verify anything factual and ask the AI to cite or explain its sources.", points: 10 }
    ]
  },
  
  // Automation (2 questions)
  {
    id: "q4",
    category: "automation",
    prompt: "How many of your regular weekly tasks currently involve an AI tool at some point?",
    options: [
      { id: "a", label: "None — I haven't worked AI into my routine yet.", points: 0 },
      { id: "b", label: "One or two, used occasionally.", points: 3 },
      { id: "c", label: "Several tasks, fairly regularly (a few times a week).", points: 7 },
      { id: "d", label: "AI is part of my default workflow for most repetitive tasks.", points: 10 }
    ]
  },
  {
    id: "q5",
    category: "automation",
    prompt: "Have you ever set up a saved prompt, template, or automation so you don't have to re-explain a task to AI every time?",
    options: [
      { id: "a", label: "No, I start from scratch each time.", points: 0 },
      { id: "b", label: "I've thought about it but haven't set anything up.", points: 3 },
      { id: "c", label: "I have a few saved prompts or templates I reuse.", points: 7 },
      { id: "d", label: "I have a small system of saved prompts/templates and update them as I improve them.", points: 10 }
    ]
  },

  // Privacy (2 questions)
  {
    id: "q6",
    category: "privacy",
    prompt: "Before pasting work information (documents, client data, code) into an AI tool, what do you typically do?",
    options: [
      { id: "a", label: "I paste whatever I need without thinking about it much.", points: 0 },
      { id: "b", label: "I'm cautious about obviously sensitive info, but haven't checked the tool's data policy.", points: 3 },
      { id: "c", label: "I know roughly what my organization allows and avoid sharing anything outside that.", points: 7 },
      { id: "d", label: "I actively check data retention/training settings and use privacy-safe options (e.g. zero-data-retention, enterprise settings) when handling sensitive info.", points: 10 }
    ]
  },
  {
    id: "q7",
    category: "privacy",
    prompt: "How would you describe your current understanding of how AI tools use the data you give them?",
    options: [
      { id: "a", label: "I don't really know how it's used.", points: 0 },
      { id: "b", label: "I have a general sense but haven't looked into specifics.", points: 3 },
      { id: "c", label: "I understand the basics of training data vs. session data for the tools I use most.", points: 7 },
      { id: "d", label: "I actively manage settings like opt-out of training, data retention windows, and enterprise/private deployment options.", points: 10 }
    ]
  },
  
  // Growth (2 questions)
  {
    id: "q8",
    category: "growth",
    prompt: "When a new AI tool or feature comes out, what's your usual reaction?",
    options: [
      { id: "a", label: "I mostly ignore it until I have to use it.", points: 0 },
      { id: "b", label: "I hear about it but rarely try it myself.", points: 3 },
      { id: "c", label: "I try new tools/features when they seem relevant to my work.", points: 7 },
      { id: "d", label: "I actively explore new tools and look for ways they could improve how I work.", points: 10 }
    ]
  },
  {
    id: "q9",
    category: "growth",
    prompt: "Think of the last time AI genuinely helped you solve a problem (not just save time). How did that happen?",
    options: [
      { id: "a", label: "I can't think of a specific example.", points: 0 },
      { id: "b", label: "It helped with something small, like fixing a sentence or a formula.", points: 3 },
      { id: "c", label: "It helped me work through a real problem after some back-and-forth.", points: 7 },
      { id: "d", label: "It's become a regular thinking partner I use to work through problems, not just a task-completion tool.", points: 10 }
    ]
  }
];

// Findings Lookup Table
export const FINDINGS: Finding[] = [
  // LITERACY
  {
    category: "literacy",
    scoreRange: [0, 39],
    strength: "You are beginning to explore the fundamentals of AI interaction.",
    growthArea: "Your prompt engineering skills are currently dormant. Moving beyond single-shot questions will drastically improve output quality.",
    actionStep: { title: "Adopt the Persona Pattern", description: "Start your next prompt by assigning the AI a specific role (e.g., 'Act as an expert data analyst...')." }
  },
  {
    category: "literacy",
    scoreRange: [40, 69],
    strength: "You understand the basics of prompt structuring and context provision.",
    growthArea: "You are emerging in AI literacy, but can activate further by mastering chained prompts and system-level instructions.",
    actionStep: { title: "Chain Your Prompts", description: "Instead of asking for a final output immediately, ask the AI to outline its approach first, refine it, and then execute." }
  },
  {
    category: "literacy",
    scoreRange: [70, 100],
    strength: "You have an energized grasp of advanced prompting, capable of steering complex AI reasoning.",
    growthArea: "Push your literacy further by optimizing token efficiency and testing edge-case constraints.",
    actionStep: { title: "Build Reusable Templates", description: "Standardize your best prompts into reusable templates with variable slots for your team to use." }
  },
  
  // AUTOMATION
  {
    category: "automation",
    scoreRange: [0, 39],
    strength: "You rely on strong, foundational manual processes.",
    growthArea: "Your workflow automation is dormant. You are spending valuable energy on repetitive tasks that AI could handle.",
    actionStep: { title: "Audit Your Repetitive Tasks", description: "Write down three tasks you do every week. Pick one to fully automate using AI drafting or summarization." }
  },
  {
    category: "automation",
    scoreRange: [40, 69],
    strength: "You successfully use AI for targeted, ad-hoc productivity boosts.",
    growthArea: "Your automation is emerging. The next step is moving from isolated AI use to connected, multi-step workflows.",
    actionStep: { title: "Connect Tools", description: "Experiment with integrations (like Zapier or native workspace features) to connect AI outputs directly to your task manager." }
  },
  {
    category: "automation",
    scoreRange: [70, 100],
    strength: "Your workflows are highly energized, treating AI as an integrated autonomous partner.",
    growthArea: "Refine your automation by identifying bottlenecks where human-in-the-loop oversight can be optimized.",
    actionStep: { title: "Audit for Agentic AI", description: "Identify a complex workflow and design a small autonomous agent script to handle the routing and execution." }
  },

  // PRIVACY
  {
    category: "privacy",
    scoreRange: [0, 39],
    strength: "You prioritize speed and access in your AI usage.",
    growthArea: "Your data privacy protocols are dormant, exposing you to potential data leakage risks.",
    actionStep: { title: "Establish a Red Line", description: "Create a strict personal rule defining exactly what types of data (e.g., PII, financials) never go into a public model." }
  },
  {
    category: "privacy",
    scoreRange: [40, 69],
    strength: "You have an emerging awareness of data sanitization and ethical AI constraints.",
    growthArea: "You occasionally overlook structural bias or enterprise-level data retention policies.",
    actionStep: { title: "Implement Data Sanitization", description: "Adopt a workflow where sensitive data is systematically replaced with placeholders before prompting." }
  },
  {
    category: "privacy",
    scoreRange: [70, 100],
    strength: "You have an active, rigorous approach to data security, ethics, and model governance.",
    growthArea: "Expand your impact by helping establish organizational guidelines for ethical AI usage.",
    actionStep: { title: "Document Governance Policies", description: "Draft a one-page AI usage and privacy manifesto to share with your team or organization." }
  },

  // GROWTH
  {
    category: "growth",
    scoreRange: [0, 39],
    strength: "You prefer established, proven tools over experimental volatility.",
    growthArea: "Your curiosity regarding new AI capabilities is dormant. You risk falling behind as models evolve multimodally.",
    actionStep: { title: "Test Multimodal Features", description: "This week, upload an image or use a voice-to-text AI feature instead of typing a standard text prompt." }
  },
  {
    category: "growth",
    scoreRange: [40, 69],
    strength: "You are open to adapting and testing new AI tools when they align with your needs.",
    growthArea: "Your growth mindset is emerging, but you often retreat to familiar patterns when faced with friction.",
    actionStep: { title: "Embrace the Friction", description: "Next time an AI fails a task, spend 10 extra minutes trying to engineer a workaround rather than abandoning it." }
  },
  {
    category: "growth",
    scoreRange: [70, 100],
    strength: "You are fully energized in your problem-solving, consistently pushing the boundaries of what AI can do.",
    growthArea: "Maintain your momentum by exploring fundamentally different architectures or specialized open-source models.",
    actionStep: { title: "Explore Niche Models", description: "Step outside the major commercial models and experiment with a specialized open-weight model for a specific task." }
  }
];

// --- SCORING HELPERS ---

export function calculateScores(answers: number[]) {
  const categories: Record<Category, { earned: number; max: number }> = {
    literacy: { earned: 0, max: 0 },
    automation: { earned: 0, max: 0 },
    privacy: { earned: 0, max: 0 },
    growth: { earned: 0, max: 0 },
  };

  let totalEarned = 0;
  let totalMax = 0;

  QUESTIONS.forEach((q, i) => {
    const selectedOptionIndex = answers[i];
    let earnedPoints = 0;
    if (selectedOptionIndex !== undefined && q.options[selectedOptionIndex]) {
      earnedPoints = q.options[selectedOptionIndex].points;
      categories[q.category].earned += earnedPoints;
      totalEarned += earnedPoints;
    }
    const maxPoints = Math.max(...q.options.map(o => o.points));
    categories[q.category].max += maxPoints;
    totalMax += maxPoints;
  });

  const subScores: Record<Category, number> = {
    literacy: 0,
    automation: 0,
    privacy: 0,
    growth: 0,
  };

  (Object.keys(categories) as Category[]).forEach(c => {
    const cat = c as Category;
    if (categories[cat].max > 0) {
      subScores[cat] = Math.round((categories[cat].earned / categories[cat].max) * 100);
    }
  });

  // Overall Score = total points earned across all 9 questions / 90 (max possible) * 100
  const overallScore = totalMax > 0 ? Math.round((totalEarned / totalMax) * 100) : 0;

  const getSubScoreStatus = (score: number) => {
    if (score < 40) return "Dormant";
    if (score < 70) return "Emerging";
    if (score < 90) return "Active";
    return "Fully Activated";
  };

  const getOverallLevel = (score: number) => {
    if (score <= 25) return "Level 1: Explorer Foundation";
    if (score <= 50) return "Level 2: Practitioner";
    if (score <= 75) return "Level 3: Builder";
    return "Level 4: Architect";
  };

  return {
    subScores,
    overallScore,
    overallLevel: getOverallLevel(overallScore),
    getSubScoreStatus,
  };
}

export function getFindings(subScores: Record<Category, number>) {
  const selectedFindings = (Object.keys(subScores) as Category[]).map(c => {
    const cat = c as Category;
    const score = subScores[cat];
    return FINDINGS.find(f => f.category === cat && score >= f.scoreRange[0] && score <= f.scoreRange[1]);
  }).filter(Boolean) as Finding[];

  // Sort categories by score descending (highest to lowest)
  const sortedCategories = (Object.keys(subScores) as Category[]).sort((a, b) => subScores[b] - subScores[a]);
  
  // Only categories with score >= 70 ("Active" or "Fully Activated") qualify as Key Strengths (up to top 2)
  const qualifyingStrengths = sortedCategories
    .filter(cat => subScores[cat] >= 70)
    .slice(0, 2);

  // Growth areas: pull from lowest-scoring categories, but NEVER duplicate a category in Key Strengths
  const sortedAscending = (Object.keys(subScores) as Category[]).sort((a, b) => subScores[a] - subScores[b]);
  const candidateGrowth = sortedAscending.filter(cat => !qualifyingStrengths.includes(cat));
  const bottomCategories = candidateGrowth.slice(0, 2);

  const strengths = qualifyingStrengths.map(cat => {
    const f = selectedFindings.find(f => f.category === cat);
    return { category: cat, label: CATEGORY_LABELS[cat], text: f?.strength || "" };
  });

  const growthAreas = bottomCategories.map(cat => {
    const f = selectedFindings.find(f => f.category === cat);
    return { category: cat, label: CATEGORY_LABELS[cat], text: f?.growthArea || "" };
  });

  // Pull up to 4 action steps starting from the lowest scoring categories
  const allLowestToHighest = [...sortedCategories].reverse();
  const actionSteps = allLowestToHighest.map(cat => {
    const f = selectedFindings.find(f => f.category === cat);
    return f?.actionStep ? { category: cat, label: CATEGORY_LABELS[cat], ...f.actionStep } : null;
  }).filter(Boolean).slice(0, 4) as { category: Category, label: string, title: string, description: string }[];

  return { strengths, growthAreas, actionSteps };
}
