import { NextRequest, NextResponse } from 'next/server';
import { submitExamAttempt } from '@/lib/certService';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { attemptId, email, answers, recipientName, location, company } = body;

    if (!attemptId || !email || !answers) {
      return NextResponse.json(
        { error: 'attemptId, email, and answers are required' },
        { status: 400 }
      );
    }

    const result = await submitExamAttempt({
      attemptId,
      email,
      answers,
      recipientName: recipientName || '',
      location: location || '',
      company: company || '',
    });

    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to submit exam attempt';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
