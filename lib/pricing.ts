import { CertTier } from './certTypes';

export interface TierPricing {
  tier: CertTier;
  amountInr: number; // in Rupees
  amountUsd: number; // in USD
  isFree: boolean; // Always free
  isLaunchFree: boolean; // Free during 30-day launch period
  promoPriceInr?: number;
  promoPriceUsd?: number;
}

export const TIER_PRICING: Record<CertTier, TierPricing> = {
  // Core Tier 01: Always 100% Free
  beginner: {
    tier: 'beginner',
    amountInr: 0,
    amountUsd: 0,
    isFree: true,
    isLaunchFree: true,
  },
  // Core Tiers 02 - 04: Paid Core Progression Ladder
  practitioner: {
    tier: 'practitioner',
    amountInr: 1499,
    amountUsd: 29,
    isFree: false,
    isLaunchFree: false,
  },
  builder: {
    tier: 'builder',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    isLaunchFree: false,
  },
  master: {
    tier: 'master',
    amountInr: 3999,
    amountUsd: 79,
    isFree: false,
    isLaunchFree: false,
  },
  // All 6 Role-Based Tracks: 100% Free for the 30-Day Launch Period
  sales: {
    tier: 'sales',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  developers: {
    tier: 'developers',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  marketers: {
    tier: 'marketers',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  support: {
    tier: 'support',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  hr: {
    tier: 'hr',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  managers: {
    tier: 'managers',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  // Python Specialization Tracks: 100% Free for Launch Period
  python_ai: {
    tier: 'python_ai',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  python_dev: {
    tier: 'python_dev',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  // Enterprise Integration & Middleware Tracks: 100% Free for Launch Period
  mulesoft: {
    tier: 'mulesoft',
    amountInr: 3499,
    amountUsd: 69,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  salesforce_integration: {
    tier: 'salesforce_integration',
    amountInr: 3499,
    amountUsd: 69,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  ibm_mq: {
    tier: 'ibm_mq',
    amountInr: 3499,
    amountUsd: 69,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  ibm_ace: {
    tier: 'ibm_ace',
    amountInr: 3499,
    amountUsd: 69,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  boomi: {
    tier: 'boomi',
    amountInr: 3499,
    amountUsd: 69,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  webmethods: {
    tier: 'webmethods',
    amountInr: 3499,
    amountUsd: 69,
    isFree: false,
    isLaunchFree: true,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
};

// Valid promo discount codes
export const VALID_PROMO_CODES: Record<string, { discountPercent: number; description: string }> = {
  LAUNCH30: { discountPercent: 100, description: '30-Day Launch Celebration (100% Off Role Certs)' },
  JNACHIFREE: { discountPercent: 100, description: 'Early Access Candidate Waiver' },
  EARLYBIRD: { discountPercent: 100, description: 'Beta Testing Partner Code' },
};
