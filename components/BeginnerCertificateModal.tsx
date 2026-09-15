'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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
  Copy,
  Check,
  Award,
} from 'lucide-react';
import {
  BeginnerCertData,
  drawBeginnerCertificate,
  downloadBeginnerCertificatePdf,
  downloadBeginnerCertificatePng,
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

  const tier = data.tier || 'beginner';
  const tierConfig = CERT_TIERS[tier] || CERT_TIERS.beginner;
  const cleanShareUrl = 'https://jnachi.com';

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

  const handleNameBlur = () => {
    const trimmed = recipientName.trim() || 'Candidate';
    setRecipientName(trimmed);
    if (onNameChange) onNameChange(trimmed);
    renderDiploma();
  };

  const handleDownloadPng = () => {
    if (!canvasRef.current) return;
    setIsGenerating(true);
    try {
      const filename = `Jnachi-${tier.toUpperCase()}-Certified-${data.certificateId}.png`;
      downloadBeginnerCertificatePng(canvasRef.current, filename);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPdf = () => {
    if (!canvasRef.current) return;
    setIsGenerating(true);
    try {
      const filename = `Jnachi-${tier.toUpperCase()}-Certified-${data.certificateId}.pdf`;
      downloadBeginnerCertificatePdf(canvasRef.current, filename);
    } finally {
      setIsGenerating(false);
    }
  };

  const shareText = `Proud to announce that I have passed the 40-question examination (80%+ passing standard) and earned my official ${tierConfig.title} in Applied AI! Credential ID: ${data.certificateId}. Verify or begin your journey:`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${cleanShareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(`${shareText} ${cleanShareUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    const text = encodeURIComponent(`${shareText}\n${cleanShareUrl}`);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(cleanShareUrl)}&text=${text}`,
      '_blank'
    );
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`${shareText}\n${cleanShareUrl}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm shadow-indigo-200">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                {tierConfig.title} Diploma
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  Verified Pass
                </span>
              </h2>
              <p className="text-xs text-slate-500">
                Official Credential ID: <span className="font-mono font-medium">{data.certificateId}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Name Customizer Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                <UserIcon className="w-4 h-4" />
              </div>
              <div>
                <label htmlFor="certNameInput" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Diploma Recipient Name
                </label>
                <p className="text-xs text-slate-500">Edit the printed name to match your professional legal credentials.</p>
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
                className="w-full sm:w-64 px-3 py-1.5 text-sm font-semibold text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
              <button
                type="button"
                onClick={handleNameBlur}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-colors shrink-0"
              >
                Update
              </button>
            </div>
          </div>

          {/* Landscape Diploma Canvas Preview */}
          <div className="relative w-full rounded-xl overflow-hidden border border-slate-300 bg-slate-100 shadow-inner flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-auto max-h-[460px] object-contain block mx-auto"
              style={{ aspectRatio: '16/9' }}
            />
          </div>

          {/* Action & Share Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Export Section */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Download className="w-4 h-4 text-indigo-600" />
                  <span>Download High-Resolution Files</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Export vector PDF for printing or high-DPI 1920x1080 PNG for portfolio resumes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadPdf}
                  disabled={isGenerating}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download PDF Diploma</span>
                </button>
                <button
                  type="button"
                  onClick={handleDownloadPng}
                  disabled={isGenerating}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-300 transition-all shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PNG Image</span>
                </button>
              </div>
            </div>

            {/* Social Share Section */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-indigo-600" />
                  <span>Share Your Credential</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Broadcast your verified score and credential ID to your professional network.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleShareLinkedIn}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0A66C2] hover:bg-[#004182] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </button>
                <button
                  type="button"
                  onClick={handleShareTwitter}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#000000] hover:bg-[#222222] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>X (Twitter)</span>
                </button>
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#1DA851] text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg border border-slate-300 transition-colors inline-flex items-center gap-1"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Official Jnachi Certification Council Verification Protocol</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
