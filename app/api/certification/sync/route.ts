import { NextRequest, NextResponse } from 'next/server';
import { syncExamProgress } from '@/lib/certService';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { attemptId, email, answers } = body;

    if (!attemptId || !email || !answers) {
      return NextResponse.json(
        { error: 'attemptId, email, and answers are required' },
        { status: 400 }
      );
    }

    const result = await syncExamProgress({
      attemptId,
      email,
      answers,
    });

    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to sync exam progress';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
