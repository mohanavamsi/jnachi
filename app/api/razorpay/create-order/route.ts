import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { CertTier, CERT_TIERS } from '@/lib/certTypes';
import { TIER_PRICING, VALID_PROMO_CODES } from '@/lib/pricing';

function cleanEnv(val: string | undefined): string {
  if (!val) return '';
  return val.trim().replace(/^["']|["']$/g, '');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      tier,
      candidateEmail,
      candidateName,
      promoCode,
      currency = 'INR',
    } = body as {
      tier: CertTier;
      candidateEmail: string;
      candidateName: string;
      promoCode?: string;
      currency?: 'INR' | 'USD';
    };

    if (!tier || !CERT_TIERS[tier]) {
      return NextResponse.json({ error: 'Invalid or missing certification tier.' }, { status: 400 });
    }

    const tierConfig = CERT_TIERS[tier];
    const pricing = TIER_PRICING[tier];

    // Check if 100% free tier (beginner) or free during 30-day launch (all 6 role tracks)
    if (pricing.isFree || pricing.isLaunchFree) {
      return NextResponse.json({
        isFree: true,
        isLaunchFree: pricing.isLaunchFree,
        message: pricing.isFree
          ? 'Jnachi Certified AI Foundations is 100% free. No payment required.'
          : '30-Day Launch Event: Examination fees for this Role Track are 100% waived.',
        tier,
      });
    }

    // Check if valid promo code applied (e.g. LAUNCH30)
    let discountPercent = 0;
    if (promoCode) {
      const codeUpper = promoCode.trim().toUpperCase();
      if (VALID_PROMO_CODES[codeUpper]) {
        discountPercent = VALID_PROMO_CODES[codeUpper].discountPercent;
      }
    }

    // Calculate final price for paid core ladder tiers (Practitioner, Specialist, Master)
    let baseAmount = currency === 'INR' ? pricing.amountInr : pricing.amountUsd;
    let finalAmount = baseAmount * (1 - discountPercent / 100);

    if (finalAmount <= 0) {
      return NextResponse.json({
        isFree: true,
        discountApplied: true,
        discountPercent: 100,
        message: '100% discount applied. Exam fees waived.',
        tier,
      });
    }

    const keyId = cleanEnv(process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);
    const keySecret = cleanEnv(process.env.RAZORPAY_KEY_SECRET);

    // Convert to smallest currency unit (paise for INR, cents for USD)
    const amountInSmallestUnit = Math.round(finalAmount * 100);
    const receipt = `rcpt_${tier.slice(0, 4)}_${Date.now().toString().slice(-8)}`;

    // If Razorpay keys are configured, create real Razorpay Order
    if (keyId && keySecret && !keyId.includes('placeholder') && !keySecret.includes('placeholder')) {
      try {
        const razorpay = new Razorpay({
          key_id: keyId,
          key_secret: keySecret,
        });

        const order = await razorpay.orders.create({
          amount: amountInSmallestUnit,
          currency,
          receipt,
          notes: {
            tier,
            tierTitle: tierConfig.title,
            candidateEmail: candidateEmail || '',
            candidateName: candidateName || '',
            promoCode: promoCode || 'NONE',
          },
        });

        return NextResponse.json({
          success: true,
          isSimulated: false,
          orderId: order.id,
          amount: order.amount,
          currency: order.currency,
          keyId,
          tier,
          tierTitle: tierConfig.title,
          receipt,
        });
      } catch (rzpErr: unknown) {
        console.error('Razorpay SDK order creation error:', rzpErr);
        const rzpMsg =
          (rzpErr as { error?: { description?: string } })?.error?.description ||
          (rzpErr as { description?: string })?.description ||
          (rzpErr instanceof Error ? rzpErr.message : 'Razorpay gateway error.');

        const isAuthError =
          typeof rzpMsg === 'string' &&
          (rzpMsg.toLowerCase().includes('auth') || rzpMsg.toLowerCase().includes('key'));

        return NextResponse.json(
          {
            error: isAuthError
              ? `Razorpay Authentication Failed: The RAZORPAY_KEY_ID (${keyId.slice(0, 8)}...) and RAZORPAY_KEY_SECRET do not match or are expired in your Razorpay Dashboard. Check Settings -> API Keys (ensure you didn't mix Test and Live keys).`
              : `Razorpay Error: ${rzpMsg}`,
          },
          { status: 400 }
        );
      }
    } else {
      // Fallback Demo / Sandbox Order when keys are pending setup
      const simulatedOrderId = `order_sim_${Date.now().toString()}`;
      return NextResponse.json({
        success: true,
        isSimulated: true,
        orderId: simulatedOrderId,
        amount: amountInSmallestUnit,
        currency,
        keyId: keyId || '',
        tier,
        tierTitle: tierConfig.title,
        receipt,
        message: 'Sandbox / Test Mode active: Configure RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in production.',
      });
    }
  } catch (error: unknown) {
    console.error('Razorpay create-order top-level error:', error);
    const msg =
      (error as { error?: { description?: string } })?.error?.description ||
      (error instanceof Error ? error.message : 'Failed to create payment order.');
    return NextResponse.json(
      {
        error: msg,
      },
      { status: 500 }
    );
  }
}
