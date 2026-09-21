import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { CertTier, isValidTier } from '@/lib/certTypes';
import { unlockTierForCandidate } from '@/lib/certService';

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
      promoCode,
      isPromoWaiver,
      isSimulated,
    } = body as {
      razorpay_order_id?: string;
      razorpay_payment_id?: string;
      razorpay_signature?: string;
      tier: CertTier;
      candidateEmail: string;
      candidateName?: string;
      promoCode?: string;
      isPromoWaiver?: boolean;
      isSimulated?: boolean;
    };

    if (!candidateEmail || !candidateEmail.includes('@')) {
      return NextResponse.json({ error: 'Valid candidate email is required for voucher unlock.' }, { status: 400 });
    }

    if (!isValidTier(tier)) {
      return NextResponse.json({ error: 'Invalid certification tier specified.' }, { status: 400 });
    }

    // 1. Promo / Free Waiver Unlock
    if (isPromoWaiver) {
      const unlockResult = await unlockTierForCandidate({
        email: candidateEmail,
        tier,
        paymentId: `waiver_${Date.now()}`,
        orderId: razorpay_order_id || `order_waiver_${Date.now()}`,
        amount: 0,
        promoCode: promoCode || 'LAUNCH_WAIVER',
        candidateName,
        isSimulated: false,
      });

      return NextResponse.json({
        verified: true,
        isWaiver: true,
        paymentId: `waiver_${Date.now()}`,
        orderId: razorpay_order_id,
        tier,
        candidateEmail,
        candidateName,
        unlockedTiers: unlockResult.unlockedTiers,
        message: 'Promotional voucher verified and tier unlocked successfully.',
      });
    }

    // 2. Sandbox / Simulated Mode
    if (isSimulated) {
      const paymentId = razorpay_payment_id || `pay_sim_${Date.now()}`;
      const unlockResult = await unlockTierForCandidate({
        email: candidateEmail,
        tier,
        paymentId,
        orderId: razorpay_order_id || `order_sim_${Date.now()}`,
        amount: 0,
        promoCode,
        candidateName,
        isSimulated: true,
      });

      return NextResponse.json({
        verified: true,
        isSimulated: true,
        paymentId,
        orderId: razorpay_order_id,
        tier,
        candidateEmail,
        candidateName,
        unlockedTiers: unlockResult.unlockedTiers,
        message: 'Sandbox payment verified and tier unlocked successfully.',
      });
    }

    // 3. Real Live Razorpay Verification
    const keySecret = cleanEnv(process.env.RAZORPAY_KEY_SECRET);
    if (!keySecret) {
      return NextResponse.json(
        { error: 'Server configuration error: Razorpay secret key is not set.' },
        { status: 500 }
      );
    }

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing payment signature verification parameters.' },
        { status: 400 }
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

    // Unlock candidate tier in Firestore
    const unlockResult = await unlockTierForCandidate({
      email: candidateEmail,
      tier,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      promoCode,
      candidateName,
      isSimulated: false,
    });

    return NextResponse.json({
      verified: true,
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      tier,
      candidateEmail,
      candidateName,
      unlockedTiers: unlockResult.unlockedTiers,
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
