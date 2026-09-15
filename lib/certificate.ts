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
 * Draws a clean, modern 9:16 mobile screenshot / share card.
 * Dimensions: 1080 x 1920 (standard 9:16 ratio for mobile sharing, Instagram Stories, WhatsApp, LinkedIn).
 */
export function drawCertificate(canvas: HTMLCanvasElement, data: CertificateData) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const width = 1080;
  const height = 1920;
  canvas.width = width;
  canvas.height = height;

  // Background: clean modern mobile canvas with subtle ambient tone
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(0.5, '#f1f5f9');
  bgGrad.addColorStop(1, '#eef2ff');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Top decorative ambient glow
  const glowGrad = ctx.createRadialGradient(width / 2, 250, 40, width / 2, 250, 450);
  glowGrad.addColorStop(0, 'rgba(99, 102, 241, 0.08)');
  glowGrad.addColorStop(1, 'rgba(99, 102, 241, 0)');
  ctx.fillStyle = glowGrad;
  ctx.fillRect(0, 0, width, 700);

  // Outer framing / device screenshot bezel feel
  const margin = 36;
  const contentWidth = width - margin * 2; // 1008px
  const innerPad = 40;

  // Header / Top App Bar (y: 60 - 150)
  const headerY = 75;

  // Jnachi Swept Ring Logo (Left)
  const logoCenterX = margin + 36;
  const logoCenterY = headerY + 28;
  const logoR = 24;

  ctx.save();
  ctx.beginPath();
  ctx.arc(logoCenterX, logoCenterY, logoR, 0.4, Math.PI * 1.95, false);
  ctx.strokeStyle = '#4f46e5';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(logoCenterX + 12, logoCenterY - 11, 7.5, 0, Math.PI * 2);
  ctx.fillStyle = '#4f46e5';
  ctx.fill();
  ctx.restore();

  // Jnachi Wordmark
  ctx.textAlign = 'left';
  ctx.font = 'bold 36px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText('Jnachi', logoCenterX + 38, headerY + 40);

  // Top Right jnachi.com Brand Pill
  const brandPillText = 'jnachi.com';
  ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
  const brandPillW = ctx.measureText(brandPillText).width + 36;
  const brandPillH = 46;
  const brandPillX = width - margin - brandPillW;
  const brandPillY = headerY + 5;

  ctx.fillStyle = '#4f46e5';
  roundRect(ctx, brandPillX, brandPillY, brandPillW, brandPillH, 23, true, false);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(brandPillText, brandPillX + brandPillW / 2, brandPillY + 31);

  // Subtle divider
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(margin, headerY + 75);
  ctx.lineTo(width - margin, headerY + 75);
  ctx.stroke();

  // Assessment Meta Info (y: 185 - 280)
  const metaY = 195;

  // Pill badge: AI SKILLS ASSESSMENT
  ctx.font = 'bold 15px system-ui, -apple-system, sans-serif';
  const tagText = 'AI SKILLS ASSESSMENT';
  const tagW = ctx.measureText(tagText).width + 24;
  ctx.fillStyle = '#e0e7ff';
  roundRect(ctx, margin, metaY, tagW, 30, 15, true, false);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#4338ca';
  ctx.fillText(tagText, margin + 12, metaY + 20);

  // Recipient Display Name
  const rawName = data.recipientName.trim();
  const displayName = rawName ? `${rawName}` : 'My Assessment';
  ctx.font = 'bold 44px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText(displayName, margin, metaY + 78);

  // Subtitle / Date
  ctx.font = '500 18px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText(`Verified Result • ${data.issuedDate}`, margin, metaY + 110);

  // 1. Hero Score Card (y: 340 - 740, height = 400)
  const heroCardY = 330;
  const heroCardH = 400;

  // Card shadow & container
  drawElevatedCard(ctx, margin, heroCardY, contentWidth, heroCardH, 32);

  // Circular Momentum Progress Gauge
  const gaugeCenterX = width / 2;
  const gaugeCenterY = heroCardY + 160;
  const gaugeRadius = 100;
  const gaugeWidth = 18;

  // Background Ring
  ctx.beginPath();
  ctx.arc(gaugeCenterX, gaugeCenterY, gaugeRadius, 0, Math.PI * 2);
  ctx.strokeStyle = '#f1f5f9';
  ctx.lineWidth = gaugeWidth;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Value Progress Ring
  const progressRatio = Math.max(0.04, Math.min(1, data.overallScore / 100));
  const startAngle = -Math.PI / 2;
  const endAngle = startAngle + Math.PI * 2 * progressRatio;

  ctx.beginPath();
  ctx.arc(gaugeCenterX, gaugeCenterY, gaugeRadius, startAngle, endAngle);
  ctx.strokeStyle = '#4f46e5';
  ctx.lineWidth = gaugeWidth;
  ctx.lineCap = 'round';
  ctx.stroke();

  // Score inside gauge
  ctx.textAlign = 'center';
  ctx.font = 'bold 80px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText(`${data.overallScore}`, gaugeCenterX, gaugeCenterY + 18);

  ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('OUT OF 100', gaugeCenterX, gaugeCenterY + 48);

  // Standing Level Pill
  ctx.font = 'bold 26px system-ui, -apple-system, sans-serif';
  const levelText = data.overallLevel;
  const levelW = ctx.measureText(levelText).width + 48;
  const levelH = 50;
  const levelX = (width - levelW) / 2;
  const levelY = heroCardY + 295;

  ctx.fillStyle = '#eef2ff';
  roundRect(ctx, levelX, levelY, levelW, levelH, 25, true, false);
  ctx.strokeStyle = '#c7d2fe';
  ctx.lineWidth = 1.5;
  roundRect(ctx, levelX, levelY, levelW, levelH, 25, false, true);

  ctx.fillStyle = '#3730a3';
  ctx.fillText(levelText, width / 2, levelY + 34);

  // Subtitle
  ctx.font = '500 17px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Knowledge is meant to move • Applied AI Momentum', width / 2, heroCardY + 372);

  // 2. Competencies Section Header (y: 770)
  const compSectionY = 765;
  ctx.textAlign = 'left';
  ctx.font = 'bold 16px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('COMPETENCY BREAKDOWN', margin, compSectionY);

  // 3. Category Breakdown Cards (4 Cards)
  const categories: Category[] = ['literacy', 'automation', 'privacy', 'growth'];
  const cardStartY = 795;
  const cardHeight = 135;
  const cardGap = 18;

  categories.forEach((cat, idx) => {
    const cardY = cardStartY + idx * (cardHeight + cardGap);
    const score = data.subScores[cat] || 0;

    let statusLabel = 'Dormant';
    let statusTextColor = '#64748b';
    let statusBgColor = '#f1f5f9';

    if (score >= 80) {
      statusLabel = 'Fully Activated';
      statusTextColor = '#15803d';
      statusBgColor = '#dcfce7';
    } else if (score >= 70) {
      statusLabel = 'Active';
      statusTextColor = '#4338ca';
      statusBgColor = '#e0e7ff';
    } else if (score >= 40) {
      statusLabel = 'Emerging';
      statusTextColor = '#b45309';
      statusBgColor = '#fef3c7';
    }

    // Card white container
    drawElevatedCard(ctx, margin, cardY, contentWidth, cardHeight, 22);

    // Category title
    ctx.textAlign = 'left';
    ctx.font = 'bold 22px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#1e293b';
    ctx.fillText(CATEGORY_LABELS[cat], margin + 28, cardY + 44);

    // Status pill on the right
    ctx.font = 'bold 15px system-ui, -apple-system, sans-serif';
    const pillText = statusLabel.toUpperCase();
    const pillW = ctx.measureText(pillText).width + 24;
    const pillH = 32;
    const pillX = width - margin - pillW - 28;
    const pillY = cardY + 22;

    ctx.fillStyle = statusBgColor;
    roundRect(ctx, pillX, pillY, pillW, pillH, 16, true, false);

    ctx.textAlign = 'center';
    ctx.fillStyle = statusTextColor;
    ctx.fillText(pillText, pillX + pillW / 2, pillY + 21);

    // Score text
    ctx.textAlign = 'left';
    ctx.font = 'bold 28px system-ui, -apple-system, sans-serif';
    ctx.fillStyle = '#0f172a';
    ctx.fillText(`${score}%`, margin + 28, cardY + 98);

    // Progress bar track
    const barX = margin + 115;
    const barY = cardY + 84;
    const barW = contentWidth - 143;
    const barH = 14;

    ctx.fillStyle = '#f1f5f9';
    roundRect(ctx, barX, barY, barW, barH, 7, true, false);

    // Progress bar fill
    const fillWidth = Math.max(12, (barW * score) / 100);
    ctx.fillStyle = score >= 70 ? '#4f46e5' : score >= 40 ? '#f59e0b' : '#94a3b8';
    roundRect(ctx, barX, barY, fillWidth, barH, 7, true, false);
  });

  // 4. Bottom Social Callout Card with jnachi.com Branding (y: 1435, height: 320)
  const bottomCardY = 1435;
  const bottomCardH = 320;

  // Indigo gradient container
  const ctaGrad = ctx.createLinearGradient(margin, bottomCardY, width - margin, bottomCardY + bottomCardH);
  ctaGrad.addColorStop(0, '#1e1b4b');
  ctaGrad.addColorStop(1, '#3730a3');
  ctx.fillStyle = ctaGrad;
  roundRect(ctx, margin, bottomCardY, contentWidth, bottomCardH, 32, true, false);

  // Decorative watermark swept ring
  ctx.save();
  ctx.beginPath();
  ctx.arc(width - margin - 80, bottomCardY + 160, 120, 0.4, Math.PI * 1.95, false);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
  ctx.lineWidth = 20;
  ctx.stroke();
  ctx.restore();

  // CTA Text
  ctx.textAlign = 'left';
  ctx.font = 'bold 20px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#818cf8';
  ctx.fillText('JNACHI • KNOW IT. USE IT. PROVE IT.', margin + innerPad, bottomCardY + 55);

  ctx.font = 'bold 36px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('Measure Your AI Momentum', margin + innerPad, bottomCardY + 104);

  ctx.font = '400 20px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText('Take the free 3-minute assessment & compare scores:', margin + innerPad, bottomCardY + 144);

  // Big Prominent jnachi.com Button/Badge
  const btnW = contentWidth - innerPad * 2;
  const btnH = 76;
  const btnX = margin + innerPad;
  const btnY = bottomCardY + 195;

  ctx.fillStyle = '#ffffff';
  roundRect(ctx, btnX, btnY, btnW, btnH, 20, true, false);

  // Brand button text
  ctx.textAlign = 'center';
  ctx.font = 'bold 32px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#4f46e5';
  ctx.fillText('jnachi.com', btnX + btnW / 2, btnY + 48);

  // 5. Verification Footer (y: 1795 - 1860)
  const footerY = 1815;
  ctx.textAlign = 'center';
  ctx.font = '500 16px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText(`Verified Result ID: ${data.certificateId}`, width / 2, footerY);

  ctx.font = '400 15px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#94a3b8';
  ctx.fillText('Official AI Skills Verification • Jnachi Applied Intelligence', width / 2, footerY + 28);
}

function drawElevatedCard(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.save();
  ctx.shadowColor = 'rgba(15, 23, 42, 0.06)';
  ctx.shadowBlur = 18;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 6;

  ctx.fillStyle = '#ffffff';
  roundRect(ctx, x, y, width, height, radius, true, false);
  ctx.restore();

  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1.5;
  roundRect(ctx, x, y, width, height, radius, false, true);
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
 * Converts canvas to a PNG Blob.
 */
export function getCertificateBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error('Failed to generate image blob from canvas'));
        return;
      }
      resolve(blob);
    }, 'image/png', 1.0);
  });
}

/**
 * Converts canvas to a PNG File suitable for Web Share API navigator.share({ files: [file] }).
 */
export async function getCertificateFile(canvas: HTMLCanvasElement, filename = 'Jnachi-Result-Card.png'): Promise<File> {
  const blob = await getCertificateBlob(canvas);
  return new File([blob], filename, { type: 'image/png' });
}

/**
 * Downloads a crisp 9:16 PNG image file.
 */
export function downloadCertificatePng(canvas: HTMLCanvasElement, filename = 'Jnachi-Result-Card.png') {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png', 1.0);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
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

export interface BeginnerCertData {
  tier?: CertTier;
  recipientName: string;
  location?: string;
  company?: string;
  overallScore: number; // 0-40 correct
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
 * Draws the official landscape diploma for Jnachi Certifications across all 4 tiers.
 * Dimensions: 1920 x 1080 (16:9 full HD official credential diploma format).
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

  // Background - parchment with subtle gradient customized per tier
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, tierConfig.colorScheme.diplomaParchment);
  bgGrad.addColorStop(0.5, '#ffffff');
  bgGrad.addColorStop(1, '#f1f5f9');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Outer decorative border frame
  const margin = 48;
  ctx.strokeStyle = tierConfig.colorScheme.diplomaPrimary;
  ctx.lineWidth = 4;
  ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);

  // Inner subtle accent border
  const innerMargin = margin + 14;
  ctx.strokeStyle = tierConfig.colorScheme.diplomaAccent;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(innerMargin, innerMargin, width - innerMargin * 2, height - innerMargin * 2);

  // Corner ornaments
  const corners = [
    { x: innerMargin, y: innerMargin },
    { x: width - innerMargin, y: innerMargin },
    { x: innerMargin, y: height - innerMargin },
    { x: width - innerMargin, y: height - innerMargin },
  ];
  corners.forEach((c) => {
    ctx.fillStyle = tierConfig.colorScheme.diplomaAccent;
    ctx.beginPath();
    ctx.arc(c.x, c.y, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  // Header Jnachi Emblem
  const centerX = width / 2;
  const logoY = 120;
  const logoR = 28;

  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, logoY, logoR, 0.4, Math.PI * 1.95, false);
  ctx.strokeStyle = tierConfig.colorScheme.primary;
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(centerX, logoY, logoR - 10, Math.PI * 0.9, Math.PI * 2.4, false);
  ctx.strokeStyle = tierConfig.colorScheme.diplomaAccent;
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.stroke();
  ctx.restore();

  // Top Title
  ctx.fillStyle = tierConfig.colorScheme.primary;
  ctx.font = '600 16px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('JNACHI EXECUTIVE LEARNING & CERTIFICATION COUNCIL', centerX, 185);

  // Main Heading: CERTIFICATE OF ACHIEVEMENT
  ctx.fillStyle = tierConfig.colorScheme.diplomaPrimary;
  ctx.font = '700 48px Georgia, serif';
  ctx.fillText('Certificate of Achievement', centerX, 245);

  // Subtitle
  ctx.fillStyle = '#64748b';
  ctx.font = '400 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('THIS IS TO OFFICIALLY CERTIFY THAT', centerX, 290);

  // Recipient Name
  ctx.fillStyle = '#1e293b';
  ctx.font = '700 46px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(data.recipientName || 'Candidate', centerX, 355);

  // Optional Location line (company is excluded)
  const metaLine = data.location ? data.location.trim() : '';
  if (metaLine) {
    ctx.fillStyle = '#64748b';
    ctx.font = '500 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(metaLine, centerX, 385);
  }

  // Underline for name
  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerX - 320, 400);
  ctx.lineTo(centerX + 320, 400);
  ctx.stroke();

  // Achievement description text
  ctx.fillStyle = '#334155';
  ctx.font = '400 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(
    'has satisfied all rigorous competency criteria across the proctored examination evaluations',
    centerX,
    440
  );
  ctx.fillText('and is hereby conferred the official credential:', centerX, 470);

  // Official Credential Badge Box
  const badgeWidth = 640;
  const badgeHeight = 76;
  const badgeX = centerX - badgeWidth / 2;
  const badgeY = 505;

  ctx.fillStyle = tierConfig.colorScheme.diplomaPrimary;
  roundRect(ctx, badgeX, badgeY, badgeWidth, badgeHeight, 14, true, false);

  ctx.strokeStyle = tierConfig.colorScheme.diplomaAccent;
  ctx.lineWidth = 2;
  roundRect(ctx, badgeX + 4, badgeY + 4, badgeWidth - 8, badgeHeight - 8, 10, false, true);

  ctx.fillStyle = tierConfig.colorScheme.diplomaAccent === '#d97706' ? '#fbbf24' : '#ffffff';
  ctx.font = '800 26px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(tierConfig.badgeLabel, centerX, badgeY + 47);

  // 4 Section Competency Cards
  const cardW = 280;
  const cardH = 110;
  const cardGap = 24;
  const startX = centerX - (cardW * 4 + cardGap * 3) / 2;
  const cardY = 635;

  const sections = [
    { title: 'AI Literacy & Prompting', data: data.sectionScores.literacy, color: '#4f46e5' },
    { title: 'Workflow Automation', data: data.sectionScores.automation, color: '#059669' },
    { title: 'Data Privacy & Ethics', data: data.sectionScores.privacy, color: '#0284c7' },
    { title: 'Growth & Problem Solving', data: data.sectionScores.growth, color: '#7c3aed' },
  ];

  sections.forEach((sec, idx) => {
    const x = startX + idx * (cardW + cardGap);
    ctx.fillStyle = '#ffffff';
    roundRect(ctx, x, cardY, cardW, cardH, 12, true, false);

    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    roundRect(ctx, x, cardY, cardW, cardH, 12, false, true);

    // Color top bar
    ctx.fillStyle = sec.color;
    ctx.fillRect(x + 12, cardY, cardW - 24, 4);

    // Section title
    ctx.fillStyle = '#475569';
    ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(sec.title, x + 16, cardY + 36);

    // Track Status (Clean Pass/Mastery status without percentages)
    ctx.fillStyle = '#0f172a';
    ctx.font = '700 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Verified Pass', x + 16, cardY + 74);

    ctx.fillStyle = sec.color;
    ctx.font = '700 13px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('COMPETENCY MET', x + cardW - 16, cardY + 74);
  });

  // Overall Status bar (y: 790 - 860) - Clean pass confirmation without percentage figures
  ctx.fillStyle = '#0f172a';
  ctx.font = '700 20px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(
    'Official Examination Status: Verified Pass • Conferred by Jnachi Certification Council',
    centerX,
    810
  );

  // Footer Signoff & Verification Metadata (y: 880 - 1000)
  const footerY = 930;

  // Left: Verification ID
  ctx.textAlign = 'left';
  ctx.fillStyle = '#64748b';
  ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('VERIFICATION ID', margin + 60, footerY);

  ctx.fillStyle = '#0f172a';
  ctx.font = '700 18px monospace';
  ctx.fillText(data.certificateId, margin + 60, footerY + 28);

  ctx.fillStyle = '#64748b';
  ctx.font = '400 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Verify online at jnachi.com', margin + 60, footerY + 50);

  // Center: Official Seal
  const sealR = 44;
  const sealX = centerX;
  const sealY = footerY + 10;

  ctx.save();
  ctx.beginPath();
  ctx.arc(sealX, sealY, sealR, 0, Math.PI * 2);
  ctx.fillStyle = tierConfig.colorScheme.sealColor;
  ctx.fill();
  ctx.strokeStyle = tierConfig.colorScheme.diplomaAccent;
  ctx.lineWidth = 3;
  ctx.stroke();

  // Inner star ring
  ctx.beginPath();
  ctx.arc(sealX, sealY, sealR - 8, 0, Math.PI * 2);
  ctx.strokeStyle = tierConfig.colorScheme.sealText;
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.fillStyle = tierConfig.colorScheme.sealText;
  ctx.font = '700 12px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('VERIFIED', sealX, sealY - 6);
  ctx.fillText('PASS', sealX, sealY + 12);
  ctx.restore();

  // Right: Date & Authority
  ctx.textAlign = 'right';
  ctx.fillStyle = '#64748b';
  ctx.font = '500 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('CONFERRED DATE', width - margin - 60, footerY);

  ctx.fillStyle = '#0f172a';
  ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(data.issuedDate, width - margin - 60, footerY + 28);

  ctx.fillStyle = '#64748b';
  ctx.font = '400 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Jnachi Certification Authority', width - margin - 60, footerY + 50);
}

export const drawTierDiploma = drawBeginnerCertificate;

/**
 * Downloads a crisp landscape Diploma PNG.
 */
export function downloadBeginnerCertificatePng(canvas: HTMLCanvasElement, filename = 'Jnachi-Certificate.png') {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png', 1.0);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const downloadTierCertificatePng = downloadBeginnerCertificatePng;

/**
 * Downloads a crisp landscape Diploma PDF.
 */
export function downloadBeginnerCertificatePdf(canvas: HTMLCanvasElement, filename = 'Jnachi-Certificate.pdf') {
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'pt',
    format: [842, 595], // A4 Landscape approx in pt
  });

  const imgData = canvas.toDataURL('image/png', 1.0);
  pdf.addImage(imgData, 'PNG', 0, 0, 842, 595, undefined, 'FAST');
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

