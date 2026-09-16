import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

function cleanEnv(val: string | undefined): string {
  if (!val) return '';
  return val.trim().replace(/^["']|["']$/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, currency = 'INR', receipt, notes } = body;

    const amountInPaise = Number(amount);
    if (!amountInPaise || isNaN(amountInPaise) || amountInPaise < 100) {
      return NextResponse.json(
        { error: 'Amount is required and must be at least 100 paise (₹1).' },
        { status: 400 }
      );
    }

    const key_id = cleanEnv(process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);
    const key_secret = cleanEnv(process.env.RAZORPAY_KEY_SECRET);

    if (!key_id || !key_secret) {
      return NextResponse.json(
        { error: 'Razorpay credentials not configured in environment.' },
        { status: 401 }
      );
    }

    const razorpay = new Razorpay({
      key_id,
      key_secret,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(amountInPaise),
      currency: currency || 'INR',
      receipt: receipt || `rcpt_${Date.now()}`,
      notes: notes || {},
    });

    return NextResponse.json({
      success: true,
      order_id: order.id,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key_id,
      keyId: key_id,
      receipt: order.receipt,
    });
  } catch (error: unknown) {
    console.error('Razorpay create-order error:', error);
    const rzpMsg =
      (error as { error?: { description?: string } })?.error?.description ||
      (error as { description?: string })?.description ||
      (error instanceof Error ? error.message : 'Failed to create Razorpay order.');

    return NextResponse.json(
      { error: rzpMsg },
      { status: 500 }
    );
  }
}
