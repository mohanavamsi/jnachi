import { jsPDF } from 'jspdf';
import { Category, CATEGORY_LABELS } from './assessmentData';
import { CertTier, CERT_TIERS } from './certTypes';

export interface CertificateData {
  recipientName: string;
  overallScore: number;
  overallLevel: string;
  subScores: Record<Category, number>;
  issuedDate: string;
  certificateId: string;
}

/**
 * Draws a sleek, modern, ultra-professional 9:16 mobile result card.
 * Dimensions: 1080 x 1920 (standard 9:16 ratio).
 */
export function drawCertificate(canvas: HTMLCanvasElement, data: CertificateData) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = 1080;
  const height = 1920;
  canvas.width = width;
  canvas.height = height;

  // Background: Deep executive dark slate canvas with radiant ambient illumination
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#0a0f1d');
  bgGrad.addColorStop(0.35, '#0f172a');
  bgGrad.addColorStop(0.7, '#111827');
  bgGrad.addColorStop(1, '#0b0f19');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Ambient top light burst
  const glowGrad = ctx.createRadialGradient(width / 2, 220, 30, width / 2, 220, 500);
  glowGrad.addColorStop(0, 'rgba(99, 102, 241, 0.18)');
  glowGrad.addColorStop(0.5, 'rgba(79, 70, 229, 0.06)');
  glowGrad.addColorStop(1, 'rgba(99, 102, 241, 0)');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(0, 0, width, 750);

  // Subtle background dot grid pattern
  ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
  for (let x = 40; x < width; x += 32) {
    for (let y = 40; y < height; y += 32) {
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  const margin = 44;
  const contentWidth = width - margin * 2; // 992px
  const innerPad = 36;

  // 1. Header / Brand Bar (y: 65 - 150)
  const headerY = 75;

  // Jnachi Swept Ring Emblem
  const logoCenterX = margin + 34;
  const logoCenterY = headerY + 28;
  const logoR = 24;

  ctx.save();
  ctx.beginPath();
  ctx.arc(logoCenterX, logoCenterY, logoR, 0.4, Math.PI * 1.95, false);
  ctx.strokeStyle = '#6366f1';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(logoCenterX + 12, logoCenterY - 11, 7, 0, Math.PI * 2);
  ctx.fillStyle = '#818cf8';
  ctx.fill();
  ctx.restore();

  // Jnachi Wordmark & Subtitle
  ctx.textAlign = 'left';
  ctx.font = 'bold 36px "Plus Jakarta Sans", "Outfit", system-ui, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Jnachi', logoCenterX + 38, headerY + 32);

  ctx.font = '600 13px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('APPLIED AI INTELLIGENCE', logoCenterX + 38, headerY + 54);

  // Top Right Brand Pill
  const brandPillText = 'jnachi.com';
  ctx.font = 'bold 20px "Plus Jakarta Sans", system-ui, sans-serif';
  const brandPillW = ctx.measureText(brandPillText).width + 32;
  const brandPillH = 44;
  const brandPillX = width - margin - brandPillW;
  const brandPillY = headerY + 6;

  ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
  roundRect(ctx, brandPillX, brandPillY, brandPillW, brandPillH, 22, true, false);
  ctx.strokeStyle = 'rgba(129, 140, 248, 0.5)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, brandPillX, brandPillY, brandPillW, brandPillH, 22, false, true);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#c7d2fe';
  ctx.fillText(brandPillText, brandPillX + brandPillW / 2, brandPillY + 29);

  // Header Divider
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(margin, headerY + 75);
  ctx.lineTo(width - margin, headerY + 75);
  ctx.stroke();

  // 2. Candidate & Assessment Meta Info (y: 185 - 300)
  const metaY = 190;

  // Tag Badge: AI SKILLS ASSESSMENT
  ctx.font = 'bold 13px "Plus Jakarta Sans", system-ui, sans-serif';
  const tagText = 'VERIFIED AI BENCHMARK';
  const tagW = ctx.measureText(tagText).width + 24;
  ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
  roundRect(ctx, margin, metaY, tagW, 28, 14, true, false);
  ctx.strokeStyle = 'rgba(52, 211, 153, 0.4)';
  ctx.lineWidth = 1;
  roundRect(ctx, margin, metaY, tagW, 28, 14, false, true);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#34d399';
  ctx.fillText(tagText, margin + 12, metaY + 19);

  // Recipient Display Name
  const rawName = data.recipientName.trim();
  const displayName = rawName ? `${rawName}` : 'Candidate Result';
  ctx.font = 'bold 44px "Plus Jakarta Sans", "Outfit", system-ui, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(displayName, margin, metaY + 74);

  // Subtitle / Date
  ctx.font = '500 17px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText(`Verified Assessment Result • Issued ${data.issuedDate}`, margin, metaY + 106);

  // 3. Hero Score Card (y: 325 - 735, height = 410)
  const heroCardY = 325;
  const heroCardH = 410;

  // Elevated Glassmorphic Card Container
  drawDarkCard(ctx, margin, heroCardY, contentWidth, heroCardH, 28);

  // Circular Momentum Progress Gauge
  const gaugeCenterX = width / 2;
  const gaugeCenterY = heroCardY + 165;
  const gaugeRadius = 100;
  const gaugeWidth = 18;

  // Background Ring
  ctx.beginPath();
  ctx.arc(gaugeCenterX, gaugeCenterY, gaugeRadius, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = gaugeWidth;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Progress Ring with Gradient Glow
  const progressRatio = Math.max(0.04, Math.min(1, data.overallScore / 100));
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + Math.PI * 2 * progressRatio;

  const ringGrad = ctx.createLinearGradient(
    gaugeCenterX - gaugeRadius,
    gaugeCenterY - gaugeRadius,
    gaugeCenterX + gaugeRadius,
    gaugeCenterY + gaugeRadius
  );
  ringGrad.addColorStop(0, '#6366f1');
  ringGrad.addColorStop(0.5, '#818cf8');
  ringGrad.addColorStop(1, '#38bdf8');

  ctx.beginPath();
  ctx.arc(gaugeCenterX, gaugeCenterY, gaugeRadius, startAngle, endAngle);
  ctx.strokeStyle = ringGrad;
  ctx.lineWidth = gaugeWidth;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Score inside gauge
  ctx.textAlign = 'center';
  ctx.font = 'bold 84px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`${data.overallScore}`, gaugeCenterX, gaugeCenterY + 22);

  ctx.font = 'bold 16px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('OUT OF 100', gaugeCenterX, gaugeCenterY + 52);

  // Standing Level Pill
  ctx.font = 'bold 24px "Plus Jakarta Sans", system-ui, sans-serif';
  const levelText = data.overallLevel;
  const levelW = ctx.measureText(levelText).width + 48;
  const levelH = 48;
  const levelX = (width - levelW) / 2;
  const levelY = heroCardY + 300;

  ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
  roundRect(ctx, levelX, levelY, levelW, levelH, 24, true, false);
  ctx.strokeStyle = 'rgba(129, 140, 248, 0.6)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, levelX, levelY, levelW, levelH, 24, false, true);

  ctx.fillStyle = '#e0e7ff';
  ctx.fillText(levelText, width / 2, levelY + 33);

  // Subtitle
  ctx.font = '500 16px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Applied AI Competency • Knowledge Is Meant To Move', width / 2, heroCardY + 380);

  // 4. Competencies Section Header (y: 765)
  const compSectionY = 765;
  ctx.textAlign = 'left';
  ctx.font = 'bold 15px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('COMPETENCY EVALUATION BREAKDOWN', margin, compSectionY);

  // 5. Category Breakdown Cards (4 Cards)
  const categories: Category[] = ['literacy', 'automation', 'privacy', 'growth'];
  const cardStartY = 790;
  const cardHeight = 135;
  const cardGap = 16;

  categories.forEach((cat, idx) => {
    const cardY = cardStartY + idx * (cardHeight + cardGap);
    const score = data.subScores[cat] || 0;

    let statusLabel = 'Dormant';
    let statusTextColor = '#94a3b8';
    let statusBgColor = 'rgba(148, 163, 184, 0.12)';
    let barColor = '#64748b';

    if (score >= 80) {
      statusLabel = 'Mastery';
      statusTextColor = '#34d399';
      statusBgColor = 'rgba(16, 185, 129, 0.15)';
      barColor = '#10b981';
    } else if (score >= 70) {
      statusLabel = 'Proficient';
      statusTextColor = '#818cf8';
      statusBgColor = 'rgba(99, 102, 241, 0.15)';
      barColor = '#6366f1';
    } else if (score >= 40) {
      statusLabel = 'Emerging';
      statusTextColor = '#fbbf24';
      statusBgColor = 'rgba(245, 158, 11, 0.15)';
      barColor = '#f59e0b';
    }

    // Card dark container
    drawDarkCard(ctx, margin, cardY, contentWidth, cardHeight, 20);

    // Category title
    ctx.textAlign = 'left';
    ctx.font = 'bold 22px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(CATEGORY_LABELS[cat], margin + 28, cardY + 44);

    // Status pill
    ctx.font = 'bold 14px "Plus Jakarta Sans", system-ui, sans-serif';
    const pillText = statusLabel.toUpperCase();
    const pillW = ctx.measureText(pillText).width + 24;
    const pillH = 30;
    const pillX = width - margin - pillW - 28;
    const pillY = cardY + 22;

    ctx.fillStyle = statusBgColor;
    roundRect(ctx, pillX, pillY, pillW, pillH, 15, true, false);
    ctx.textAlign = 'center';
    ctx.fillStyle = statusTextColor;
    ctx.fillText(pillText, pillX + pillW / 2, pillY + 20);

    // Score text
    ctx.textAlign = 'left';
    ctx.font = 'bold 28px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${score}%`, margin + 28, cardY + 98);

    // Progress bar track
    const barX = margin + 115;
    const barY = cardY + 84;
    const barW = contentWidth - 143;
    const barH = 12;

    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    roundRect(ctx, barX, barY, barW, barH, 6, true, false);

    // Progress bar fill
    const fillWidth = Math.max(12, (barW * score) / 100);
    ctx.fillStyle = barColor;
    roundRect(ctx, barX, barY, fillWidth, barH, 6, true, false);
  });

  // 6. Bottom Callout Card with jnachi.com Branding (y: 1425, height: 320)
  const bottomCardY = 1425;
  const bottomCardH = 320;

  const ctaGrad = ctx.createLinearGradient(margin, bottomCardY, width - margin, bottomCardY + bottomCardH);
  ctaGrad.addColorStop(0, '#1e1b4b');
  ctaGrad.addColorStop(1, '#312e81');
  ctx.fillStyle = ctaGrad;
  roundRect(ctx, margin, bottomCardY, contentWidth, bottomCardH, 28, true, false);

  ctx.strokeStyle = 'rgba(129, 140, 248, 0.3)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, margin, bottomCardY, contentWidth, bottomCardH, 28, false, true);

  // Decorative swept ring watermark
  ctx.save();
  ctx.beginPath();
  ctx.arc(width - margin - 80, bottomCardY + 160, 110, 0.4, Math.PI * 1.95, false);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 18;
  ctx.stroke();
  ctx.restore();

  // CTA Text
  ctx.textAlign = 'left';
  ctx.font = 'bold 18px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#a5b4fc';
  ctx.fillText('JNACHI • KNOW IT. USE IT. PROVE IT.', margin + innerPad, bottomCardY + 54);

  ctx.font = 'bold 34px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Measure Your AI Momentum', margin + innerPad, bottomCardY + 100);

  ctx.font = '400 19px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText('Take the free assessment & earn verified credentials:', margin + innerPad, bottomCardY + 140);

  // Brand button
  const btnW = contentWidth - innerPad * 2;
  const btnH = 74;
  const btnX = margin + innerPad;
  const btnY = bottomCardY + 190;

  ctx.fillStyle = '#ffffff';
  roundRect(ctx, btnX, btnY, btnW, btnH, 18, true, false);

  ctx.textAlign = 'center';
  ctx.font = 'bold 30px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#4338ca';
  ctx.fillText('jnachi.com', btnX + btnW / 2, btnY + 47);

  // 7. Verification Footer (y: 1805)
  const footerY = 1810;
  ctx.textAlign = 'center';
  ctx.font = '500 16px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText(`Official Verification ID: ${data.certificateId}`, width / 2, footerY);

  ctx.font = '400 14px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Jnachi Applied Intelligence Council • Verify at jnachi.com', width / 2, footerY + 26);
}

function drawDarkCard(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.save();
  ctx.fillStyle = '#131c31';
  roundRect(ctx, x, y, width, height, radius, true, false);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, x, y, width, height, radius, false, true);
  ctx.restore();
}

export interface BeginnerCertData {
  tier?: CertTier;
  recipientName: string;
  location?: string;
  company?: string;
  overallScore: number;
  overallPercentage: number;
  sectionScores: {
    literacy: { correct: number; total: number; percentage: number };
    automation: { correct: number; total: number; percentage: number };
    privacy: { correct: number; total: number; percentage: number };
    growth: { correct: number; total: number; percentage: number };
  };
  issuedDate: string;
  certificateId: string;
}

export type TierCertData = BeginnerCertData;

/**
 * Draws the official, balanced, world-class landscape diploma for Jnachi Certifications.
 * Dimensions: 1920 x 1080 (16:9 Full HD official credential diploma format).
 */
export function drawBeginnerCertificate(canvas: HTMLCanvasElement, data: BeginnerCertData) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const tier = data.tier || 'beginner';
  const tierConfig = CERT_TIERS[tier] || CERT_TIERS.beginner;

  const width = 1920;
  const height = 1080;
  canvas.width = width;
  canvas.height = height;

  // 1. BASE CANVAS: Luxury Ivory-Pearl Background with Radiant Ambient Glow
  const bgGrad = ctx.createRadialGradient(
    width / 2,
    height / 2,
    150,
    width / 2,
    height / 2,
    width / 1.1
  );
  bgGrad.addColorStop(0, '#ffffff');
  bgGrad.addColorStop(0.55, '#fafcff');
  bgGrad.addColorStop(1, '#f1f5f9');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. FINE SECURITY BACKGROUND WATERMARK (Guilloché Rosette + Dot Matrix)
  drawSecurityGuilloche(ctx, width / 2, height / 2 + 10, 320, tierConfig.colorScheme.primary);

  // Subtle background dot matrix
  ctx.fillStyle = 'rgba(100, 116, 139, 0.035)';
  for (let x = 70; x < width - 70; x += 32) {
    for (let y = 70; y < height - 70; y += 32) {
      ctx.beginPath();
      ctx.arc(x, y, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // 3. NEOCLASSICAL GOLD & OBSIDIAN MULTI-LAYER PRECISION BORDER
  const margin = 48;
  const contentWidth = width - margin * 2;
  const contentHeight = height - margin * 2;
  const centerX = width / 2;

  // Outer primary dark border
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 3.5;
  ctx.strokeRect(margin, margin, contentWidth, contentHeight);

  // Inner metallic gold foil pinstripe
  const innerMargin = margin + 12;
  const innerWidth = width - innerMargin * 2;
  const innerHeight = height - innerMargin * 2;

  const goldGrad = ctx.createLinearGradient(innerMargin, innerMargin, width - innerMargin, height - innerMargin);
  goldGrad.addColorStop(0, '#d97706');
  goldGrad.addColorStop(0.25, '#fbbf24');
  goldGrad.addColorStop(0.5, '#f59e0b');
  goldGrad.addColorStop(0.75, '#fbbf24');
  goldGrad.addColorStop(1, '#b45309');

  ctx.strokeStyle = goldGrad;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(innerMargin, innerMargin, innerWidth, innerHeight);

  // Precision Corner Rosettes & Crosshairs
  drawCornerOrnament(ctx, innerMargin, innerMargin, 28, true, true);
  drawCornerOrnament(ctx, width - innerMargin, innerMargin, 28, false, true);
  drawCornerOrnament(ctx, innerMargin, height - innerMargin, 28, true, false);
  drawCornerOrnament(ctx, width - innerMargin, height - innerMargin, 28, false, false);

  // Microprint security line along bottom border
  ctx.font = '600 11px "Plus Jakarta Sans", monospace, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.textAlign = 'center';
  ctx.fillText(
    `• JNACHI GLOBAL CERTIFICATION REGISTRY • TAMPER-RESISTANT CREDENTIAL ID: ${data.certificateId} • CRYPTOGRAPHICALLY VALIDATED •`,
    centerX,
    height - margin - 4
  );

  // 4. TOP HEADER BAR (y: 80 - 150)
  const headerY = margin + 36;

  // Exact Official Jnachi Logo (Left)
  const logoX = margin + 44;
  const logoY = headerY + 12;
  drawOfficialJnachiLogo(ctx, logoX, logoY, 44, '#4f46e5');

  // Top Right Security Badge & Procedural QR Matrix
  const secBoxW = 270;
  const secBoxH = 68;
  const secBoxX = width - margin - secBoxW - 44;
  const secBoxY = headerY - 14;

  ctx.fillStyle = '#ffffff';
  roundRect(ctx, secBoxX, secBoxY, secBoxW, secBoxH, 14, true, false);
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.5;
  roundRect(ctx, secBoxX, secBoxY, secBoxW, secBoxH, 14, false, true);

  // Mini Digital Matrix / Procedural QR
  drawProceduralQR(ctx, secBoxX + 14, secBoxY + 14, 40, data.certificateId);

  ctx.textAlign = 'left';
  ctx.font = '800 11px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#15803d';
  ctx.fillText('OFFICIALLY VERIFIED', secBoxX + 66, secBoxY + 28);

  ctx.font = '700 12px monospace';
  ctx.fillStyle = '#0f172a';
  ctx.fillText(data.certificateId, secBoxX + 66, secBoxY + 48);

  // Subtle Header Rule
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(margin + 44, headerY + 68);
  ctx.lineTo(width - margin - 44, headerY + 68);
  ctx.stroke();

  // 5. AUTHORITY TITLE & MAIN CERTIFICATE HEADING (y: 195 - 280)
  ctx.textAlign = 'center';
  ctx.font = '700 15px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = tierConfig.colorScheme.primary || '#4f46e5';
  ctx.letterSpacing = '3px';
  ctx.fillText('JNACHI EXECUTIVE LEARNING & CERTIFICATION COUNCIL', centerX, headerY + 105);
  ctx.letterSpacing = '0px';

  ctx.font = '800 48px "Cinzel", "Playfair Display", Georgia, serif';
  ctx.fillStyle = tierConfig.colorScheme.diplomaPrimary || '#0f172a';
  ctx.letterSpacing = '2px';
  ctx.fillText('CERTIFICATE OF ACHIEVEMENT', centerX, headerY + 165);
  ctx.letterSpacing = '0px';

  // 6. CANDIDATE CONFERRAL SECTION (y: 310 - 450)
  ctx.font = '600 16px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('THIS IS TO OFFICIALLY CERTIFY THAT', centerX, headerY + 215);

  // Candidate Name in Majestic Serif Typography
  const candidateName = data.recipientName || 'Candidate';
  ctx.font = '700 52px "Playfair Display", "Plus Jakarta Sans", Georgia, serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText(candidateName, centerX, headerY + 285);

  // Double Underline with Center Diamond Flourish
  const lineW = 340;
  const lineY = headerY + 312;
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(centerX - lineW, lineY);
  ctx.lineTo(centerX - 18, lineY);
  ctx.moveTo(centerX + 18, lineY);
  ctx.lineTo(centerX + lineW, lineY);
  ctx.stroke();

  // Center Diamond
  ctx.fillStyle = tierConfig.colorScheme.diplomaAccent || '#d97706';
  ctx.beginPath();
  ctx.moveTo(centerX, lineY - 6);
  ctx.lineTo(centerX + 7, lineY);
  ctx.lineTo(centerX, lineY + 6);
  ctx.lineTo(centerX - 7, lineY);
  ctx.closePath();
  ctx.fill();

  // Optional Location line
  if (data.location && data.location.trim()) {
    ctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(data.location.trim(), centerX, lineY + 22);
  }

  // Conferral text
  const textOffset = data.location && data.location.trim() ? 28 : 0;
  ctx.font = '400 19px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText(
    'has satisfied all rigorous competency criteria across the proctored examination evaluations',
    centerX,
    headerY + 360 + textOffset
  );
  ctx.fillText(
    'and is hereby conferred the official credential:',
    centerX,
    headerY + 390 + textOffset
  );

  // 7. OFFICIAL CREDENTIAL BOX (y: 490 - 585)
  const plaqueW = 820;
  const plaqueH = 88;
  const plaqueX = centerX - plaqueW / 2;
  const plaqueY = headerY + 420 + textOffset;

  const plaqueGrad = ctx.createLinearGradient(plaqueX, plaqueY, plaqueX + plaqueW, plaqueY + plaqueH);
  plaqueGrad.addColorStop(0, '#0f172a');
  plaqueGrad.addColorStop(0.5, tierConfig.colorScheme.diplomaPrimary || '#1e1b4b');
  plaqueGrad.addColorStop(1, '#0f172a');
  ctx.fillStyle = plaqueGrad;
  roundRect(ctx, plaqueX, plaqueY, plaqueW, plaqueH, 16, true, false);

  ctx.strokeStyle = tierConfig.colorScheme.diplomaAccent || '#d97706';
  ctx.lineWidth = 2;
  roundRect(ctx, plaqueX + 4, plaqueY + 4, plaqueW - 8, plaqueH - 8, 12, false, true);

  // Plaque Title Text
  ctx.fillStyle = tierConfig.colorScheme.diplomaAccent === '#d97706' ? '#fbbf24' : '#ffffff';
  ctx.font = '800 28px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(tierConfig.badgeLabel, centerX, plaqueY + 48);

  ctx.font = '600 13px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
  ctx.fillText(
    `Official Specialization Track • Tier 0${tierConfig.levelNumber} • Proctored Examination Passed`,
    centerX,
    plaqueY + 72
  );

  // 8. FOUR VERIFIED CORE COMPETENCY PILLARS (y: 625 - 735)
  // Perfectly fills the middle section with verified competency detail cards!
  const gridY = plaqueY + 115;
  const competencies = [
    { title: 'AI Literacy & Prompting', desc: 'Precision Reasoning & Instruction Design' },
    { title: 'Workflow Automation', desc: 'Multi-Step Execution & Tool Chaining' },
    { title: 'Data Privacy & Ethics', desc: 'Confidentiality Redlines & Safety Governance' },
    { title: 'Strategic Judgment', desc: 'Critical Evaluation & Applied AI Impact' },
  ];

  const cardW = 320;
  const cardH = 68;
  const cardGapX = 24;
  const cardGapY = 16;
  const gridStartX = centerX - (cardW * 2 + cardGapX) / 2;

  competencies.forEach((comp, idx) => {
    const col = idx % 2;
    const row = Math.floor(idx / 2);
    const cx = gridStartX + col * (cardW + cardGapX);
    const cy = gridY + row * (cardH + cardGapY);

    ctx.fillStyle = '#ffffff';
    roundRect(ctx, cx, cy, cardW, cardH, 12, true, false);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1.5;
    roundRect(ctx, cx, cy, cardW, cardH, 12, false, true);

    // Left green verified checkmark circle
    ctx.fillStyle = '#dcfce7';
    ctx.beginPath();
    ctx.arc(cx + 26, cy + cardH / 2, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#15803d';
    ctx.font = '700 13px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✓', cx + 26, cy + cardH / 2 + 4.5);

    // Competency title & description
    ctx.textAlign = 'left';
    ctx.font = '700 14px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillStyle = '#0f172a';
    ctx.fillText(comp.title, cx + 50, cy + 28);

    ctx.font = '500 11px "Plus Jakarta Sans", system-ui, sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText(comp.desc, cx + 50, cy + 48);
  });

  // Verification status banner line
  const statusLineY = gridY + cardH * 2 + cardGapY + 30;
  ctx.textAlign = 'center';
  ctx.font = '600 14px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText(
    'Official Examination Status: Verified Pass • Conferred by Jnachi Certification Council',
    centerX,
    statusLineY
  );

  // 9. FOOTER AUTHORITY & SIGNATURES BLOCK (y: 890 - 1000)
  const footerBaseY = 920;

  // LEFT AUTHORITY & REGISTRY BLOCK
  const leftAuthX = margin + 50;
  ctx.textAlign = 'left';
  ctx.font = '700 12px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('ISSUING AUTHORITY', leftAuthX, footerBaseY);

  ctx.font = '800 17px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText('Jnachi Certification Council', leftAuthX, footerBaseY + 22);

  ctx.font = '500 13px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Online Verification: jnachi.com/verify', leftAuthX, footerBaseY + 42);

  // CENTER 3D EMBOSSED GOLD FOIL MEDALLION & RIBBON
  const sealCenterX = centerX;
  const sealCenterY = footerBaseY + 12;
  drawEmbossedGoldSeal(ctx, sealCenterX, sealCenterY, 52, tierConfig.colorScheme.diplomaAccent || '#d97706');

  // RIGHT AUTHORIZED SIGNATORY BLOCK (Mohanavamsi Chidipilli)
  const rightAuthX = width - margin - 50;
  ctx.textAlign = 'right';

  // Elegant Executive Script Signature for Mohanavamsi Chidipilli
  drawAuthorizedSignature(ctx, rightAuthX - 220, footerBaseY - 10);

  // Signature Baseline Rule
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(rightAuthX - 240, footerBaseY + 16);
  ctx.lineTo(rightAuthX, footerBaseY + 16);
  ctx.stroke();

  ctx.font = '800 16px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText('Mohanavamsi Chidipilli', rightAuthX, footerBaseY + 36);

  ctx.font = '600 13px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#4f46e5';
  ctx.fillText('Founder & Chair, Certification Council', rightAuthX, footerBaseY + 54);

  ctx.font = '500 12px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText(`Conferred: ${data.issuedDate}`, rightAuthX, footerBaseY + 70);
}

export const drawTierDiploma = drawBeginnerCertificate;

/**
 * Draws the exact official Jnachi comet swept-ring emblem & lowercase wordmark.
 */
function drawOfficialJnachiLogo(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  primaryColor = '#4f46e5'
) {
  ctx.save();
  const scale = size / 32;

  // Comet Swept Ring Path
  // SVG: M 28 16 C 28 22.627 22.627 28 16 28 C 9.373 28 4 22.627 4 16 C 4 9.373 9.373 4 16 4 C 18 4 19.8 4.6 21.4 5.5
  ctx.save();
  ctx.translate(x, y - size / 2);
  ctx.scale(scale, scale);

  ctx.beginPath();
  ctx.moveTo(28, 16);
  ctx.bezierCurveTo(28, 22.627, 22.627, 28, 16, 28);
  ctx.bezierCurveTo(9.373, 28, 4, 22.627, 4, 16);
  ctx.bezierCurveTo(4, 9.373, 9.373, 4, 16, 4);
  ctx.bezierCurveTo(18, 4, 19.8, 4.6, 21.4, 5.5);
  ctx.strokeStyle = primaryColor;
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.globalAlpha = 0.75;
  ctx.stroke();

  // Solid dot (seed of knowledge)
  ctx.beginPath();
  ctx.arc(22, 10, 5, 0, Math.PI * 2);
  ctx.fillStyle = primaryColor;
  ctx.globalAlpha = 1.0;
  ctx.fill();
  ctx.restore();

  // Exact lowercase wordmark "jnachi"
  ctx.textAlign = 'left';
  ctx.font = '700 32px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText('jnachi', x + size + 14, y + 6);

  ctx.font = '700 11px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.letterSpacing = '1px';
  ctx.fillText('APPLIED INTELLIGENCE COUNCIL', x + size + 14, y + 24);
  ctx.letterSpacing = '0px';

  ctx.restore();
}

/**
 * Draws the authorized cursive executive signature for Mohanavamsi Chidipilli.
 */
function drawAuthorizedSignature(ctx: CanvasRenderingContext2D, startX: number, startY: number) {
  ctx.save();
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 2.4;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.beginPath();
  // Capital 'M' with dynamic stroke
  ctx.moveTo(startX, startY + 10);
  ctx.bezierCurveTo(startX + 6, startY - 24, startX + 14, startY - 28, startX + 22, startY - 8);
  ctx.bezierCurveTo(startX + 28, startY + 8, startX + 34, startY - 26, startX + 42, startY - 20);
  ctx.bezierCurveTo(startX + 48, startY - 14, startX + 50, startY + 6, startX + 54, startY + 2);

  // 'Chidipilli' dynamic flourish
  ctx.bezierCurveTo(startX + 65, startY - 18, startX + 78, startY + 4, startX + 90, startY - 14);
  ctx.bezierCurveTo(startX + 100, startY - 28, startX + 112, startY + 6, startX + 125, startY - 10);
  ctx.bezierCurveTo(startX + 138, startY - 24, startX + 152, startY + 4, startX + 165, startY - 8);
  ctx.bezierCurveTo(startX + 178, startY - 20, startX + 190, startY + 2, startX + 205, startY - 6);

  // Confident underline loop & extended flourish
  ctx.bezierCurveTo(startX + 180, startY + 12, startX + 80, startY + 14, startX + 225, startY + 8);
  ctx.stroke();

  ctx.restore();
}

/**
 * Draws an authentic 3D embossed gold foil medallion seal with dual silk ribbon tails.
 */
function drawEmbossedGoldSeal(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  accentColor: string
) {
  ctx.save();

  // Dual Silk Ribbon Tails hanging below seal
  const ribbonW = 26;
  const ribbonH = 48;

  // Left Ribbon (Deep Indigo/Navy Silk)
  ctx.save();
  ctx.translate(cx - 15, cy + 30);
  ctx.rotate(0.2);
  ctx.fillStyle = '#1e1b4b';
  ctx.beginPath();
  ctx.moveTo(-ribbonW / 2, 0);
  ctx.lineTo(ribbonW / 2, 0);
  ctx.lineTo(ribbonW / 2, ribbonH);
  ctx.lineTo(0, ribbonH - 12);
  ctx.lineTo(-ribbonW / 2, ribbonH);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // Right Ribbon (Amber/Gold Silk)
  ctx.save();
  ctx.translate(cx + 15, cy + 30);
  ctx.rotate(-0.2);
  ctx.fillStyle = '#b45309';
  ctx.beginPath();
  ctx.moveTo(-ribbonW / 2, 0);
  ctx.lineTo(ribbonW / 2, 0);
  ctx.lineTo(ribbonW / 2, ribbonH);
  ctx.lineTo(0, ribbonH - 12);
  ctx.lineTo(-ribbonW / 2, ribbonH);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  // 32-Point Scalloped Gold Medallion Outer Ring
  const points = 32;
  const outerR = radius;
  const innerR = radius - 5;

  ctx.beginPath();
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();

  // Shimmering Gold Radial Gradient
  const sealGrad = ctx.createRadialGradient(cx - 15, cy - 15, 5, cx, cy, radius);
  sealGrad.addColorStop(0, '#fef08a');
  sealGrad.addColorStop(0.35, '#f59e0b');
  sealGrad.addColorStop(0.7, '#d97706');
  sealGrad.addColorStop(1, '#92400e');
  ctx.fillStyle = sealGrad;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 4;
  ctx.fill();

  ctx.shadowColor = 'transparent';
  ctx.strokeStyle = '#fde68a';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Inner Concentric Beaded Gold Ring
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 10, 0, Math.PI * 2);
  ctx.strokeStyle = '#78350f';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx, cy, radius - 14, 0, Math.PI * 2);
  ctx.fillStyle = '#b45309';
  ctx.fill();

  // 5 Gold Stars Arc in Medallion Center
  ctx.fillStyle = '#fef08a';
  ctx.textAlign = 'center';
  ctx.font = '800 11px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText('★ ★ ★ ★ ★', cx, cy - 9);

  ctx.font = '900 12px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText('VERIFIED', cx, cy + 6);

  ctx.font = '800 9px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#fde68a';
  ctx.fillText('PASS', cx, cy + 19);

  ctx.restore();
}

/**
 * Draws procedural QR/digital security matrix pattern.
 */
function drawProceduralQR(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  seedStr: string
) {
  const cells = 7;
  const cellSize = size / cells;
  const hash = seedStr.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);

  ctx.save();
  ctx.fillStyle = '#0f172a';

  const drawFinder = (fx: number, fy: number) => {
    ctx.fillRect(fx, fy, cellSize * 2.5, cellSize * 2.5);
    ctx.clearRect(fx + cellSize * 0.5, fy + cellSize * 0.5, cellSize * 1.5, cellSize * 1.5);
    ctx.fillRect(fx + cellSize * 0.8, fy + cellSize * 0.8, cellSize * 0.9, cellSize * 0.9);
  };

  drawFinder(x, y);
  drawFinder(x + size - cellSize * 2.5, y);
  drawFinder(x, y + size - cellSize * 2.5);

  for (let r = 0; r < cells; r++) {
    for (let c = 0; c < cells; c++) {
      if (
        (r < 3 && c < 3) ||
        (r < 3 && c >= cells - 3) ||
        (r >= cells - 3 && c < 3)
      ) {
        continue;
      }
      const val = (hash * (r * 11 + c * 17 + 7)) % 100;
      if (val > 42) {
        ctx.fillRect(x + c * cellSize, y + r * cellSize, cellSize - 0.5, cellSize - 0.5);
      }
    }
  }

  ctx.restore();
}

/**
 * Draws a subtle mathematical harmonic rosette (guilloché security pattern).
 */
function drawSecurityGuilloche(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  color: string
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.globalAlpha = 0.035;
  ctx.lineWidth = 1;

  const R = radius;
  const r = 58;
  const p = 64;

  ctx.beginPath();
  for (let theta = 0; theta < Math.PI * 16; theta += 0.04) {
    const x = cx + (R - r) * Math.cos(theta) + p * Math.cos(((R - r) * theta) / r);
    const y = cy + (R - r) * Math.sin(theta) - p * Math.sin(((R - r) * theta) / r);
    if (theta === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.65, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();
}

/**
 * Draws corner technical rosettes and crosshairs.
 */
function drawCornerOrnament(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  len: number,
  isLeft: boolean,
  isTop: boolean
) {
  const dirX = isLeft ? 1 : -1;
  const dirY = isTop ? 1 : -1;

  ctx.save();
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(x + dirX * len, y);
  ctx.lineTo(x, y);
  ctx.lineTo(x, y + dirY * len);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x + dirX * 6, y + dirY * 6, 2.5, 0, Math.PI * 2);
  ctx.fillStyle = '#d97706';
  ctx.fill();
  ctx.restore();
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill = true,
  stroke = false
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

/**
 * Converts canvas to a PNG Blob with fallback.
 */
export function getCertificateBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    try {
      canvas.toBlob((blob) => {
        if (!blob) {
          try {
            const dataUrl = canvas.toDataURL('image/png', 1.0);
            const byteString = atob(dataUrl.split(',')[1]);
            const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }
            resolve(new Blob([ab], { type: mimeString }));
          } catch (fallbackErr) {
            reject(fallbackErr || new Error('Failed to generate image blob from canvas'));
          }
          return;
        }
        resolve(blob);
      }, 'image/png', 1.0);
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Converts canvas to a PNG File suitable for Web Share API navigator.share({ files: [file] }).
 */
export async function getCertificateFile(canvas: HTMLCanvasElement, filename = 'Jnachi-Certificate.png'): Promise<File> {
  const blob = await getCertificateBlob(canvas);
  return new File([blob], filename, { type: 'image/png' });
}

/**
 * Downloads a crisp PNG image file using Blob Object URL.
 */
export async function downloadCertificatePng(canvas: HTMLCanvasElement, filename = 'Jnachi-Result-Card.png'): Promise<void> {
  try {
    const blob = await getCertificateBlob(canvas);
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = filename;
    link.href = blobUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    }, 500);
  } catch (err) {
    console.warn('Blob download fallback to dataURL:', err);
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png', 1.0);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      document.body.removeChild(link);
    }, 500);
  }
}

/**
 * Universal Share Helper for Canvas.
 */
export async function shareCertificateCanvas(params: {
  canvas: HTMLCanvasElement;
  filename: string;
  title: string;
  text: string;
  url?: string;
}): Promise<{ success: boolean; method: 'native' | 'download_fallback' | 'cancelled' }> {
  const { canvas, filename, title, text, url } = params;
  try {
    const file = await getCertificateFile(canvas, filename);
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({
          files: [file],
          title,
          text: url ? `${text}\n${url}` : text,
          url,
        });
        return { success: true, method: 'native' };
      } catch (shareErr: unknown) {
        if (shareErr instanceof Error && shareErr.name === 'AbortError') {
          return { success: false, method: 'cancelled' };
        }
        console.warn('Native share failed, falling back:', shareErr);
      }
    }
  } catch (err) {
    console.warn('File preparation error:', err);
  }

  await downloadCertificatePng(canvas, filename);
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(url ? `${text}\n${url}` : text);
    } catch {
      // ignore
    }
  }
  return { success: true, method: 'download_fallback' };
}

/**
 * Downloads a 9:16 portrait PDF document.
 */
export function downloadCertificatePdf(canvas: HTMLCanvasElement, filename = 'Jnachi-Result-Card.pdf') {
  const pdfWidth = 450;
  const pdfHeight = 800;

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: [pdfWidth, pdfHeight],
  });

  const imgData = canvas.toDataURL('image/png', 1.0);
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  pdf.save(filename);
}

/**
 * Downloads a crisp landscape Diploma PNG.
 */
export async function downloadBeginnerCertificatePng(canvas: HTMLCanvasElement, filename = 'Jnachi-Certificate.png'): Promise<void> {
  return downloadCertificatePng(canvas, filename);
}

export const downloadTierCertificatePng = downloadBeginnerCertificatePng;

/**
 * Downloads a crisp landscape Diploma PDF in standard A4 Landscape.
 */
export function downloadBeginnerCertificatePdf(canvas: HTMLCanvasElement, filename = 'Jnachi-Certificate.pdf') {
  const pdfWidth = 842;
  const pdfHeight = 595;

  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: [pdfWidth, pdfHeight], // A4 Landscape in pt
  });

  const imgData = canvas.toDataURL('image/png', 1.0);
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  pdf.save(filename);
}

export const downloadTierCertificatePdf = downloadBeginnerCertificatePdf;

/**
 * Builds the official 1-Click LinkedIn "Add to Profile" certification URL.
 */
export function buildLinkedInCertificationUrl(params: {
  certName: string;
  certId: string;
  certUrl?: string;
  issueYear?: number;
  issueMonth?: number;
}): string {
  const base = 'https://www.linkedin.com/profile/add';
  const url = new URL(base);
  url.searchParams.set('startTask', 'CERTIFICATION_NAME');
  url.searchParams.set('name', params.certName);
  url.searchParams.set('organizationName', 'Jnachi');

  const now = new Date();
  const year = params.issueYear || now.getFullYear();
  const month = params.issueMonth || now.getMonth() + 1;
  url.searchParams.set('issueYear', year.toString());
  url.searchParams.set('issueMonth', month.toString());

  if (params.certUrl) {
    url.searchParams.set('certUrl', params.certUrl);
  }
  url.searchParams.set('certId', params.certId);
  return url.toString();
}


