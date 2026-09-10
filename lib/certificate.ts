import { jsPDF } from 'jspdf';
import { Category, CATEGORY_LABELS } from './assessmentData';

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
  ctx.font = 'bold 30px system-ui, -apple-system, sans-serif';
  ctx.fillStyle = '#4f46e5';
  ctx.fillText('jnachi.com/assessment', btnX + btnW / 2, btnY + 48);

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
  // Soft ambient shadow
  ctx.save();
  ctx.shadowColor = 'rgba(15, 23, 42, 0.06)';
  ctx.shadowBlur = 18;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 6;

  ctx.fillStyle = '#ffffff';
  roundRect(ctx, x, y, width, height, radius, true, false);
  ctx.restore();

  // Subtle border
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
  // Standard 9:16 aspect ratio in points
  const pdfWidth = 450;
  const pdfHeight = 800; // 9:16 approx

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: [pdfWidth, pdfHeight],
  });

  const imgData = canvas.toDataURL('image/png', 1.0);
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
  pdf.save(filename);
}
