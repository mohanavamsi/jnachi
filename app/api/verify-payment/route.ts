import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

function cleanEnv(val: string | undefined): string {
  if (!val) return '';
  return val.trim().replace(/^["']|["']$/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const razorpay_order_id = body.razorpay_order_id || body.order_id;
    const razorpay_payment_id = body.razorpay_payment_id || body.payment_id;
    const razorpay_signature = body.razorpay_signature || body.signature;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing required payment verification parameters (order_id, payment_id, signature).' },
        { status: 400 }
      );
    }

    const key_secret = cleanEnv(process.env.RAZORPAY_KEY_SECRET);
    if (!key_secret) {
      return NextResponse.json(
        { error: 'Razorpay secret key not configured in environment.' },
        { status: 500 }
      );
    }

    // HMAC SHA256 Verification: order_id + "|" + payment_id
    const generated_signature = crypto
      .createHmac('sha256', key_secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isMatch = generated_signature === razorpay_signature;

    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: 'Payment signature verification failed. Invalid signature.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      verified: true,
      order_id: razorpay_order_id,
      payment_id: razorpay_payment_id,
      message: 'Payment verified successfully.',
    });
  } catch (error: unknown) {
    console.error('Razorpay payment verification error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal verification error.' },
      { status: 500 }
    );
  }
}
