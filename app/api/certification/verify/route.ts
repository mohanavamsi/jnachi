import { NextRequest, NextResponse } from 'next/server';
import { getVerifiedCertificate } from '@/lib/certService';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const certId = searchParams.get('certId') || searchParams.get('id');

    if (!certId) {
      return NextResponse.json(
        { error: 'Certificate ID parameter is required (e.g. ?certId=JNACHI-BEG-2026-XXXX-XXXX)' },
        { status: 400 }
      );
    }

    const record = await getVerifiedCertificate(certId);
    if (!record) {
      return NextResponse.json(
        {
          valid: false,
          error: 'Certificate not found or unverified. Please double-check the credential ID.',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      valid: true,
      certificate: record,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal verification failure';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const certId = body.certId || body.id;

    if (!certId) {
      return NextResponse.json(
        { error: 'certId field is required in request body' },
        { status: 400 }
      );
    }

    const record = await getVerifiedCertificate(certId);
    if (!record) {
      return NextResponse.json(
        {
          valid: false,
          error: 'Certificate not found or unverified. Please double-check the credential ID.',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      valid: true,
      certificate: record,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal verification failure';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
