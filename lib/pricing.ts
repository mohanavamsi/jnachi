import { CertTier } from './certTypes';

export interface TierPricing {
  tier: CertTier;
  amountInr: number; // in Rupees
  amountUsd: number; // in USD
  isFree: boolean;
  promoPriceInr?: number;
  promoPriceUsd?: number;
}

export const TIER_PRICING: Record<CertTier, TierPricing> = {
  beginner: {
    tier: 'beginner',
    amountInr: 0,
    amountUsd: 0,
    isFree: true,
  },
  practitioner: {
    tier: 'practitioner',
    amountInr: 1499,
    amountUsd: 29,
    isFree: false,
    promoPriceInr: 0, // 30-Day Launch Promo
    promoPriceUsd: 0,
  },
  builder: {
    tier: 'builder',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  master: {
    tier: 'master',
    amountInr: 3999,
    amountUsd: 79,
    isFree: false,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  sales: {
    tier: 'sales',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  developers: {
    tier: 'developers',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  marketers: {
    tier: 'marketers',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  support: {
    tier: 'support',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  hr: {
    tier: 'hr',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
  managers: {
    tier: 'managers',
    amountInr: 2499,
    amountUsd: 49,
    isFree: false,
    promoPriceInr: 0,
    promoPriceUsd: 0,
  },
};

// Valid promo discount codes
export const VALID_PROMO_CODES: Record<string, { discountPercent: number; description: string }> = {
  LAUNCH30: { discountPercent: 100, description: '30-Day Launch Celebration (100% Off)' },
  JNACHIFREE: { discountPercent: 100, description: 'Early Access Candidate Waiver' },
  EARLYBIRD: { discountPercent: 100, description: 'Beta Testing Partner Code' },
};
