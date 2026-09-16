import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { CertTier } from '@/lib/certTypes';

function cleanEnv(val: string | undefined): string {
  if (!val) return '';
  return val.trim().replace(/^["']|["']$/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      tier,
      candidateEmail,
      candidateName,
      isSimulated,
    } = body as {
      razorpay_order_id: string;
      razorpay_payment_id: string;
      razorpay_signature: string;
      tier: CertTier;
      candidateEmail: string;
      candidateName: string;
      isSimulated?: boolean;
    };

    if (isSimulated) {
      // In sandbox mode without production keys
      return NextResponse.json({
        verified: true,
        isSimulated: true,
        paymentId: razorpay_payment_id || `pay_sim_${Date.now()}`,
        orderId: razorpay_order_id,
        tier,
        candidateEmail,
        candidateName,
        message: 'Sandbox payment verified successfully.',
      });
    }

    const keySecret = cleanEnv(process.env.RAZORPAY_KEY_SECRET);
    if (!keySecret) {
      // If secret is missing but not simulated, return error
      return NextResponse.json(
        { error: 'Server configuration error: Razorpay secret key is not set.' },
        { status: 500 }
      );
    }

    // Verify HMAC SHA256 Signature
    const dataToSign = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac('sha256', keySecret)
      .update(dataToSign)
      .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (!isAuthentic) {
      return NextResponse.json(
        { error: 'Payment verification failed. Invalid cryptographic signature.' },
        { status: 400 }
      );
    }

    // Record verified transaction record
    return NextResponse.json({
      verified: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      tier,
      candidateEmail,
      candidateName,
      timestamp: new Date().toISOString(),
      message: 'Payment verified and examination unlocked successfully.',
    });
  } catch (error: unknown) {
    console.error('Razorpay verification error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Payment verification encountered an internal error.',
      },
      { status: 500 }
    );
  }
}
