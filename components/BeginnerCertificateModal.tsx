'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  X,
  Download,
  FileText,
  Sparkles,
  User as UserIcon,
  Share2,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Copy,
  Check,
  CheckCircle2,
  Award,
  ShieldCheck,
  ExternalLink,
  Smartphone,
  RefreshCw,
} from 'lucide-react';
import {
  BeginnerCertData,
  drawBeginnerCertificate,
  downloadBeginnerCertificatePdf,
  downloadBeginnerCertificatePng,
  shareCertificateCanvas,
  buildLinkedInCertificationUrl,
} from '@/lib/certificate';
import { CERT_TIERS } from '@/lib/certTypes';

interface BeginnerCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BeginnerCertData;
  onNameChange?: (name: string) => void;
}

export default function BeginnerCertificateModal({
  isOpen,
  onClose,
  data,
  onNameChange,
}: BeginnerCertificateModalProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [recipientName, setRecipientName] = useState(data.recipientName || 'Candidate');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const tier = data.tier || 'beginner';
  const tierConfig = CERT_TIERS[tier] || CERT_TIERS.beginner;
  const verifyUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/verify/${data.certificateId}`
    : `https://jnachi.com/verify/${data.certificateId}`;

  const renderDiploma = useCallback(() => {
    if (!canvasRef.current) return;
    drawBeginnerCertificate(canvasRef.current, {
      ...data,
      tier,
      recipientName: recipientName.trim() || 'Candidate',
    });
  }, [data, recipientName, tier]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        renderDiploma();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, renderDiploma]);

  if (!isOpen) return null;

  const showStatus = (msg: string) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(null), 5000);
  };

  const handleNameBlur = () => {
    const trimmed = recipientName.trim() || 'Candidate';
    setRecipientName(trimmed);
    if (onNameChange) onNameChange(trimmed);
    renderDiploma();
  };

  const shareTitle = `${tierConfig.title} Certified • Jnachi Applied AI`;
  const shareText = `Proud to announce that I passed the proctored examination and earned my official ${tierConfig.title} credential in Applied AI from Jnachi! View my verified certificate:`;
  const pngFilename = `Jnachi-${tier.toUpperCase()}-Certified-${data.certificateId}.png`;
  const pdfFilename = `Jnachi-${tier.toUpperCase()}-Certified-${data.certificateId}.pdf`;

  // 1. Direct Universal "Share Certificate PNG"
  const handleShareCertificate = async () => {
    if (!canvasRef.current) return;
    setIsSharing(true);
    try {
      const res = await shareCertificateCanvas({
        canvas: canvasRef.current,
        filename: pngFilename,
        title: shareTitle,
        text: shareText,
        url: verifyUrl,
      });

      if (res.method === 'native' && res.success) {
        showStatus('Opened share sheet! Select Story, WhatsApp, LinkedIn, or Save Image.');
      } else if (res.method === 'download_fallback') {
        showStatus('Certificate PNG downloaded & caption copied! Ready to share to Story or post.');
      }
    } catch (err) {
      console.error('Error sharing certificate:', err);
      // Fallback
      await handleDownloadPng();
    } finally {
      setIsSharing(false);
    }
  };

  // 2. Download High-Res PNG
  const handleDownloadPng = async () => {
    if (!canvasRef.current) return;
    setIsGenerating(true);
    try {
      await downloadBeginnerCertificatePng(canvasRef.current, pngFilename);
      showStatus('High-resolution PNG diploma downloaded successfully!');
    } catch (err) {
      console.error('PNG download error:', err);
      showStatus('Unable to generate PNG. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // 3. Download Vector PDF
  const handleDownloadPdf = () => {
    if (!canvasRef.current) return;
    setIsGenerating(true);
    try {
      downloadBeginnerCertificatePdf(canvasRef.current, pdfFilename);
      showStatus('Vector PDF diploma downloaded successfully!');
    } catch (err) {
      console.error('PDF generation error:', err);
      showStatus('Unable to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  // 4. Share to WhatsApp
  const handleShareWhatsApp = async () => {
    if (!canvasRef.current) return;
    setIsSharing(true);
    try {
      const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        const res = await shareCertificateCanvas({
          canvas: canvasRef.current,
          filename: pngFilename,
          title: shareTitle,
          text: `${shareText}\n${verifyUrl}`,
        });
        if (res.method === 'native' && res.success) return;
      }
      // Desktop / direct link fallback
      await downloadBeginnerCertificatePng(canvasRef.current, pngFilename);
      const text = encodeURIComponent(`${shareText}\n${verifyUrl}`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
      showStatus('WhatsApp opened! Certificate PNG also downloaded to attach.');
    } finally {
      setIsSharing(false);
    }
  };

  // 5. Share to Instagram Story
  const handleShareInstagramStory = async () => {
    if (!canvasRef.current) return;
    setIsSharing(true);
    try {
      const res = await shareCertificateCanvas({
        canvas: canvasRef.current,
        filename: pngFilename,
        title: shareTitle,
        text: `${shareText}\n${verifyUrl}`,
      });
      if (res.method === 'native' && res.success) {
        showStatus('Opened share sheet! Select Instagram Story or Direct.');
        return;
      }
      // Desktop fallback
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${shareText}\n${verifyUrl}`);
      }
      showStatus('Certificate PNG saved to photos & caption copied! Open Instagram to share to Story.');
      setTimeout(() => {
        window.open('https://www.instagram.com/', '_blank');
      }, 1000);
    } finally {
      setIsSharing(false);
    }
  };

  const linkedInAddUrl = buildLinkedInCertificationUrl({
    certName: tierConfig.title,
    certId: data.certificateId,
    certUrl: verifyUrl,
    issueYear: new Date().getFullYear(),
    issueMonth: new Date().getMonth() + 1,
  });

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${verifyUrl}`);
      setCopied(true);
      showStatus('Verification link & announcement copied to clipboard!');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleShareLinkedInPost = () => {
    const text = encodeURIComponent(`${shareText}\n${verifyUrl}`);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(verifyUrl)}&text=${text}`,
      '_blank'
    );
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`${shareText}\n${verifyUrl}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                {tierConfig.title} Diploma
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Verified Pass
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Official Credential ID: <span className="font-mono font-semibold text-indigo-900">{data.certificateId}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Status Toast */}
          {statusMessage && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2.5 text-emerald-900 text-xs sm:text-sm font-semibold animate-in fade-in slide-in-from-top-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Name Customizer Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <UserIcon className="w-4 h-4" />
              </div>
              <div>
                <label htmlFor="certNameInput" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Diploma Recipient Name
                </label>
                <p className="text-[11px] text-slate-500">Edit the printed name to match your professional credentials.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="certNameInput"
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                onBlur={handleNameBlur}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleNameBlur();
                }}
                maxLength={60}
                className="w-full sm:w-64 px-3.5 py-1.5 text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
              <button
                type="button"
                onClick={handleNameBlur}
                className="px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors shrink-0 shadow-xs"
              >
                Update
              </button>
            </div>
          </div>

          {/* Landscape Diploma Canvas Preview */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-slate-300 bg-slate-100 shadow-inner flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-auto max-h-[440px] object-contain block mx-auto select-none"
              style={{ aspectRatio: '16/9' }}
            />
          </div>

          {/* HERO SHARE & STORY BANNER */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white shadow-lg space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Instant Social & Story Share
                </div>
                <h3 className="text-base sm:text-lg font-extrabold text-white">
                  Share Your Certificate PNG
                </h3>
                <p className="text-xs text-indigo-200 leading-relaxed max-w-xl">
                  Post your official credential directly to your Instagram Story, WhatsApp Status, LinkedIn, or Save to Camera Roll.
                </p>
              </div>

              {/* Primary Universal Share Button */}
              <button
                type="button"
                onClick={handleShareCertificate}
                disabled={isSharing}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-400/20 transition-all active:scale-95 disabled:opacity-50 shrink-0 cursor-pointer"
              >
                {isSharing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Preparing PNG...</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-slate-950" />
                    <span>Share Certificate PNG</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick 1-Tap Channels */}
            <div className="pt-2 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                type="button"
                onClick={handleShareWhatsApp}
                disabled={isSharing}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-50"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleShareInstagramStory}
                disabled={isSharing}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95 disabled:opacity-50"
              >
                <Instagram className="w-4 h-4" />
                <span>Story / Instagram</span>
              </button>

              <button
                type="button"
                onClick={handleShareLinkedInPost}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-bold rounded-xl transition-all shadow-sm active:scale-95"
              >
                <Linkedin className="w-4 h-4 fill-white" />
                <span>LinkedIn Post</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-bold rounded-xl transition-all active:scale-95"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Action & Download Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Download Files Section */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Download className="w-4 h-4 text-indigo-600" />
                  <span>Download High-Resolution Credential Files</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Export vector PDF for printing or high-DPI 1920x1080 PNG image for resumes & portfolios.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 pt-2">
                <a
                  href={linkedInAddUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0077b5] hover:bg-[#006097] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                >
                  <Linkedin className="w-4 h-4 fill-white" />
                  <span>Add to LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={isGenerating}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm disabled:opacity-50"
                >
                  <FileText className="w-4 h-4" />
                  <span>{isGenerating ? 'Generating...' : 'Download PDF Diploma'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadPng}
                  disabled={isGenerating}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-xl border border-slate-300 transition-all shadow-sm disabled:opacity-50"
                >
                  <Download className="w-4 h-4 text-slate-600" />
                  <span>{isGenerating ? 'Generating...' : 'Download PNG Image'}</span>
                </button>
              </div>
            </div>

            {/* Social Share & Verification Section */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-between space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Public Verification Registry</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your certificate is live on the public verification registry.
                  </p>
                </div>
                <Link
                  href={`/verify/${data.certificateId}`}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-indigo-50 text-indigo-700 text-xs font-bold rounded-xl border border-slate-200 hover:border-indigo-300 transition-all shrink-0"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  <span>View Public Page</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleShareTwitter}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-black hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>X (Twitter)</span>
                </button>
                <button
                  type="button"
                  onClick={handleShareCertificate}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold rounded-xl transition-colors"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Device Share Sheet</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Official Jnachi Certification Council Verification Protocol • jnachi.com</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
