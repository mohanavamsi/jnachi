'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Download, FileText, Image as ImageIcon, CheckCircle, Sparkles, User as UserIcon, Smartphone } from 'lucide-react';
import { Category } from '@/lib/assessmentData';
import { drawCertificate, downloadCertificatePdf, downloadCertificatePng } from '@/lib/certificate';
import { useAuth } from './AuthProvider';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  overallScore: number;
  overallLevel: string;
  subScores: Record<Category, number>;
  initialEmail?: string;
  rawAnswers?: string | null;
}

export default function CertificateModal({
  isOpen,
  onClose,
  overallScore,
  overallLevel,
  subScores,
  initialEmail = '',
  rawAnswers = '',
}: CertificateModalProps) {
  const { user } = useAuth();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Derive initial name from user profile or email prefix
  const getDefaultName = () => {
    if (user?.displayName) return user.displayName;
    if (initialEmail) {
      const prefix = initialEmail.split('@')[0];
      return prefix
        .split(/[._-]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
    return '';
  };

  const [recipientName, setRecipientName] = useState(getDefaultName());
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const [isDownloadingPng, setIsDownloadingPng] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  // Deterministic certificate / card ID based on answers hash
  const [certificateId] = useState(() => {
    const seed = (rawAnswers || 'jnachi').split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
    const hex = Math.abs((seed * 9301 + 49297) % 233280).toString(16).toUpperCase().padStart(4, '0');
    return `JNACHI-${new Date().getFullYear()}-${hex}-${Math.floor(1000 + Math.random() * 9000)}`;
  });

  const [issuedDate] = useState(() => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  });

  // Render canvas whenever recipient name or visibility changes
  const renderCanvas = useCallback(() => {
    if (!canvasRef.current) return;
    drawCertificate(canvasRef.current, {
      recipientName: recipientName.trim(),
      overallScore,
      overallLevel,
      subScores,
      issuedDate,
      certificateId,
    });
  }, [recipientName, overallScore, overallLevel, subScores, issuedDate, certificateId]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        renderCanvas();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen, renderCanvas]);

  // Sync to Firestore certifications if logged in
  useEffect(() => {
    if (isOpen && user?.uid) {
      const syncCert = async () => {
        try {
          const certsRef = collection(db, 'users', user.uid, 'certifications');
          const q = query(certsRef, where('certificateId', '==', certificateId));
          const snap = await getDocs(q);
          if (snap.empty) {
            await addDoc(certsRef, {
              certificateId,
              title: `Jnachi: ${overallLevel}`,
              score: overallScore,
              issuedAt: serverTimestamp(),
            });
          }
        } catch (e) {
          console.error('Non-blocking error saving certificate record:', e);
        }
      };
      syncCert();
    }
  }, [isOpen, user, certificateId, overallLevel, overallScore]);

  if (!isOpen) return null;

  const handleDownloadPng = () => {
    if (!canvasRef.current) return;
    setIsDownloadingPng(true);
    setDownloadSuccess(null);
    try {
      const sanitizedName = recipientName.trim().replace(/[^a-zA-Z0-9]/g, '_') || 'Jnachi_Result';
      downloadCertificatePng(canvasRef.current, `Jnachi_Score_${sanitizedName}_9x16.png`);
      setDownloadSuccess('9:16 Share Card downloaded! Ready for WhatsApp, Instagram, or LinkedIn.');
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch (err) {
      console.error('Error generating image:', err);
    } finally {
      setIsDownloadingPng(false);
    }
  };

  const handleDownloadPdf = () => {
    if (!canvasRef.current) return;
    setIsDownloadingPdf(true);
    setDownloadSuccess(null);
    try {
      const sanitizedName = recipientName.trim().replace(/[^a-zA-Z0-9]/g, '_') || 'Jnachi_Result';
      downloadCertificatePdf(canvasRef.current, `Jnachi_Result_${sanitizedName}.pdf`);
      setDownloadSuccess('PDF downloaded successfully!');
      setTimeout(() => setDownloadSuccess(null), 4000);
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsDownloadingPdf(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[94vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Share Your Result Card (9:16)</h3>
              <p className="text-xs text-slate-500">Mobile screenshot ready for WhatsApp, Stories, or LinkedIn</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200/70 text-slate-500 hover:text-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* Customization controls */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium whitespace-nowrap">
              <UserIcon className="w-4 h-4 text-indigo-600" />
              <span>Your Name on Card:</span>
            </div>
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Enter your name (e.g., Alex Morgan)"
              className="flex-1 px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-sm"
              maxLength={36}
            />
          </div>

          {/* Mobile Screenshot Phone Frame Preview */}
          <div className="bg-slate-100/70 rounded-2xl p-4 border border-slate-200 flex flex-col items-center justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[310px] overflow-hidden rounded-[2rem] shadow-2xl border-4 border-slate-800 bg-white ring-1 ring-slate-900/10">
              <canvas
                ref={canvasRef}
                className="w-full h-auto block select-none"
                style={{ aspectRatio: '9 / 16' }}
              />
            </div>
            <p className="text-xs text-slate-500 mt-3 flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> 9:16 mobile format with jnachi.com branding
            </p>
          </div>

          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-emerald-800 text-sm font-medium animate-fadeIn">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{downloadSuccess}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 order-2 sm:order-1">
            Brand: <span className="font-semibold text-slate-600">jnachi.com</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto order-1 sm:order-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isDownloadingPdf}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-xs sm:text-sm hover:bg-slate-50 transition-colors shadow-sm disabled:opacity-50"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              {isDownloadingPdf ? 'PDF...' : 'PDF'}
            </button>

            <button
              onClick={handleDownloadPng}
              disabled={isDownloadingPng}
              className="flex-2 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-xs sm:text-sm hover:bg-indigo-700 transition-all shadow hover:shadow-md active:scale-95 disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              {isDownloadingPng ? 'Generating...' : 'Download 9:16 Image (PNG)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
