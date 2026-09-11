'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import {
  X,
  Download,
  FileText,
  CheckCircle2,
  Sparkles,
  User as UserIcon,
  Share2,
  MessageCircle,
  Linkedin,
  Twitter,
  Copy,
  Check,
  ShieldCheck,
  Award,
} from 'lucide-react';
import {
  BeginnerCertData,
  drawBeginnerCertificate,
  downloadBeginnerCertificatePdf,
  downloadBeginnerCertificatePng,
} from '@/lib/certificate';

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

  const cleanShareUrl = 'https://jnachi.com';

  const renderDiploma = useCallback(() => {
    if (!canvasRef.current) return;
    drawBeginnerCertificate(canvasRef.current, {
      ...data,
      recipientName: recipientName.trim() || 'Candidate',
    });
  }, [data, recipientName]);

  useEffect(() => {
    if (isOpen) {
      // Small timeout to allow canvas mounting in DOM
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
      const filename = `Jnachi-Beginner-Certified-${data.certificateId}.png`;
      downloadBeginnerCertificatePng(canvasRef.current, filename);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPdf = () => {
    if (!canvasRef.current) return;
    setIsGenerating(true);
    try {
      const filename = `Jnachi-Beginner-Certified-${data.certificateId}.pdf`;
      downloadBeginnerCertificatePdf(canvasRef.current, filename);
    } finally {
      setIsGenerating(false);
    }
  };

  const shareText = `Proud to announce that I have passed the 100-question exam and earned my official Jnachi Beginner Certification in AI! Credential ID: ${data.certificateId}. Verify or begin your journey:`;

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
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(cleanShareUrl)}&text=${text}`, '_blank');
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
                Official Credential Diploma
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  Verified Pass
                </span>
              </h2>
              <p className="text-xs text-slate-500 font-mono">
                {data.certificateId} • Issued {data.issuedDate}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Name Customization Input */}
          <div className="bg-indigo-50/60 border border-indigo-100 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <UserIcon className="w-4 h-4 text-indigo-600 shrink-0" />
              <div>
                <label htmlFor="modal-cert-name" className="text-xs font-semibold text-indigo-950 uppercase tracking-wider block">
                  Name on Official Diploma
                </label>
                <p className="text-xs text-indigo-700">Customize how your legal or professional name appears on the credential.</p>
              </div>
            </div>
            <div className="flex w-full sm:w-auto items-center gap-2">
              <input
                id="modal-cert-name"
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                onBlur={handleNameBlur}
                onKeyDown={(e) => e.key === 'Enter' && handleNameBlur()}
                placeholder="Full Name"
                className="px-3 py-1.5 text-sm font-medium text-slate-900 bg-white border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-56"
              />
              <button
                onClick={handleNameBlur}
                className="px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shrink-0"
              >
                Update
              </button>
            </div>
          </div>

          {/* Certificate Canvas Preview */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 flex items-center justify-center">
            <canvas
              ref={canvasRef}
              className="w-full h-auto max-h-[460px] object-contain block bg-white"
            />
          </div>

          {/* Download & Sharing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Download Options */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Download className="w-4 h-4 text-slate-600" />
                Download Official Diploma
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Download your credential in high-resolution print-ready formats suitable for framing, portfolios, or resume attachments.
              </p>
              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleDownloadPdf}
                  disabled={isGenerating}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all disabled:opacity-50"
                >
                  <FileText className="w-4 h-4" />
                  Download PDF
                </button>
                <button
                  onClick={handleDownloadPng}
                  disabled={isGenerating}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-sm font-semibold rounded-xl shadow-sm transition-all disabled:opacity-50"
                >
                  <Download className="w-4 h-4 text-slate-600" />
                  Download PNG
                </button>
              </div>
            </div>

            {/* Social Sharing Options */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Share2 className="w-4 h-4 text-slate-600" />
                Share Your Credential
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Announce your verified certification on social channels using canonical link <span className="font-mono font-medium text-slate-700">jnachi.com</span>.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  onClick={handleShareLinkedIn}
                  className="flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#0077B5] hover:bg-[#006097] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </button>
                <button
                  onClick={handleShareWhatsApp}
                  className="flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </button>
                <button
                  onClick={handleShareTwitter}
                  className="flex-1 min-w-[80px] inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-sm transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  X / Post
                </button>
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold rounded-lg shadow-sm transition-colors"
                  title="Copy share message & link"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Cryptographically verifiable credential via Jnachi Authority</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 font-medium px-3 py-1"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
