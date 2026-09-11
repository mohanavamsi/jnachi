import { NextRequest, NextResponse } from 'next/server';
import { startExamAttempt } from '@/lib/certService';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, recipientName, location, company } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!recipientName || !recipientName.trim()) {
      return NextResponse.json({ error: 'Full Name is required for certificate issuance' }, { status: 400 });
    }

    if (!location || !location.trim()) {
      return NextResponse.json({ error: 'Location (City, Country) is required before starting the exam' }, { status: 400 });
    }

    if (!company || !company.trim()) {
      return NextResponse.json({ error: 'Current Company / Organization is required before starting the exam' }, { status: 400 });
    }

    const attempt = await startExamAttempt(
      email,
      recipientName || '',
      location || '',
      company || ''
    );
    return NextResponse.json(attempt);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to start exam attempt';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
