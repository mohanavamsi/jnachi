import { NextRequest, NextResponse } from 'next/server';
import { getCertStatus } from '@/lib/certService';
import { CertTier } from '@/lib/certTypes';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const rawTier = searchParams.get('tier') || 'beginner';
    const tier: CertTier = ['beginner', 'practitioner', 'builder', 'master'].includes(rawTier)
      ? (rawTier as CertTier)
      : 'beginner';

    if (!email) {
      return NextResponse.json({ error: 'Email parameter is required' }, { status: 400 });
    }

    const status = await getCertStatus(email, tier);
    return NextResponse.json(status);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to retrieve certification status';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, tier = 'beginner' } = body;
    const validTier: CertTier = ['beginner', 'practitioner', 'builder', 'master'].includes(tier)
      ? (tier as CertTier)
      : 'beginner';

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const status = await getCertStatus(email, validTier);
    return NextResponse.json(status);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to retrieve certification status';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
