'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Camera, 
  Mic, 
  ShieldCheck, 
  Maximize2, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw, 
  Lock, 
  X, 
  ArrowRight,
  FileCheck2,
  Clock,
  User,
  AlertTriangle
} from 'lucide-react';
import { CertTier, CERT_TIERS } from '@/lib/certTypes';
import { CouncilSeal } from '@/components/CouncilSeal';

interface ProctoringPreCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: CertTier;
  candidateName: string;
  onConfirmLaunch: (options: { proctoredMode: boolean }) => void;
}

type StepStatus = 'idle' | 'checking' | 'passed' | 'failed';

export default function ProctoringPreCheckModal({
  isOpen,
  onClose,
  tier,
  candidateName,
  onConfirmLaunch,
}: ProctoringPreCheckModalProps) {
  const [cameraStatus, setCameraStatus] = useState<StepStatus>('idle');
  const [micStatus, setMicStatus] = useState<StepStatus>('idle');
  const [fullscreenStatus, setFullscreenStatus] = useState<StepStatus>('idle');
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [acknowledged, setAcknowledged] = useState<boolean>(false);
  const [isRequestingPermissions, setIsRequestingPermissions] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const tierConfig = CERT_TIERS[tier] || CERT_TIERS.beginner;
  const examDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  // Initialize permission check when modal opens
  useEffect(() => {
    if (isOpen) {
      startMediaCheck();
      checkFullscreenState();
    } else {
      stopMediaStream();
    }
    return () => {
      stopMediaStream();
    };
  }, [isOpen]);

  const checkFullscreenState = () => {
    if (typeof document !== 'undefined') {
      const isFs = Boolean(document.fullscreenElement);
      setFullscreenStatus(isFs ? 'passed' : 'idle');
    }
  };

  const startMediaCheck = async () => {
    setErrorMessage(null);
    setIsRequestingPermissions(true);
    setCameraStatus('checking');
    setMicStatus('checking');

    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Camera and microphone Web APIs are not supported on this browser.');
      }

      const userStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user',
        },
        audio: true,
      });

      setStream(userStream);
      setCameraStatus('passed');
      setMicStatus('passed');

      if (videoRef.current) {
        videoRef.current.srcObject = userStream;
        videoRef.current.play().catch(() => {});
      }

      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const audioCtx = new AudioContextClass();
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;

        const source = audioCtx.createMediaStreamSource(userStream);
        source.connect(analyser);

        audioContextRef.current = audioCtx;
        analyserRef.current = analyser;

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        const updateAudioMeter = () => {
          if (!analyserRef.current) return;
          analyserRef.current.getByteFrequencyData(dataArray);

          let sum = 0;
          for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
          }
          const avg = sum / bufferLength;
          setAudioLevel(Math.min(100, Math.round((avg / 128) * 100)));

          animFrameRef.current = requestAnimationFrame(updateAudioMeter);
        };

        updateAudioMeter();
      } catch {
        // Fallback
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Permission denied for camera and microphone.';
      setErrorMessage(msg);
      setCameraStatus('failed');
      setMicStatus('failed');
    } finally {
      setIsRequestingPermissions(false);
    }
  };

  const stopMediaStream = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(() => {});
    }
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const requestFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
        setFullscreenStatus('passed');
      }
    } catch {
      setFullscreenStatus('passed'); // Soft bypass if browser blocks
    }
  };

  const allPassed = cameraStatus === 'passed' && micStatus === 'passed' && acknowledged;

  const handleLaunch = () => {
    if (!allPassed) return;
    onConfirmLaunch({ proctoredMode: true });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0F0F14]/70 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-xl border border-[#D1D5DB] overflow-hidden my-4"
        role="dialog"
        aria-modal="true"
      >
        {/* Ticket Header */}
        <div className="bg-[#2E1065] text-white p-5 border-b border-[#4C1D95] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CouncilSeal size={42} variant="dark" />
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#EDE9FE] block">
                Jnachi Certification Council
              </span>
              <h2 className="font-serif-heading text-lg sm:text-xl text-white">
                Candidate Authorization & Admit Ticket
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-[#EDE9FE]/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Admit Card Metadata Matrix */}
        <div className="p-6 space-y-6">
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-md p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[10px] text-[#6B7280] uppercase font-semibold block">Candidate</span>
              <span className="font-semibold text-[#0F0F14]">{candidateName || 'Authorized Candidate'}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#6B7280] uppercase font-semibold block">Exam Track</span>
              <span className="font-semibold text-[#5B21B6]">{tierConfig.title}</span>
            </div>
            <div>
              <span className="text-[10px] text-[#6B7280] uppercase font-semibold block">Time Allocated</span>
              <span className="font-semibold text-[#0F0F14] font-mono">{tierConfig.durationMinutes} Minutes (40 Qs)</span>
            </div>
            <div>
              <span className="text-[10px] text-[#6B7280] uppercase font-semibold block">Passing Threshold</span>
              <span className="font-semibold text-[#0F766E] font-mono">{tierConfig.passingScorePercent}% Standard</span>
            </div>
          </div>

          {/* Verification Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left: Live Video Feed Slot */}
            <div className="md:col-span-5 space-y-2">
              <span className="text-[11px] font-semibold text-[#4B5563] uppercase tracking-wider block">
                Identity & Proctoring Sensor
              </span>
              <div className="relative aspect-4/3 bg-[#0F0F14] rounded-md overflow-hidden border border-[#D1D5DB] flex items-center justify-center">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className={`w-full h-full object-cover transform -scale-x-100 ${
                    cameraStatus === 'passed' ? 'block' : 'hidden'
                  }`}
                />
                {cameraStatus !== 'passed' && (
                  <div className="text-center p-3 text-xs text-[#9CA3AF] flex flex-col items-center gap-1">
                    <Camera className="w-5 h-5 text-[#6B7280]" />
                    <span>{cameraStatus === 'checking' ? 'Connecting sensor...' : 'Camera verification required'}</span>
                  </div>
                )}
                {cameraStatus === 'passed' && (
                  <span className="absolute bottom-2 left-2 bg-[#0F0F14]/70 text-[#99F6E4] text-[10px] font-mono px-1.5 py-0.5 rounded border border-[#0F766E]/40 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#0F766E]" /> Sensor Active
                  </span>
                )}
              </div>

              {/* Mic Meter */}
              <div className="p-2 rounded bg-[#F9FAFB] border border-[#E5E7EB] space-y-1">
                <div className="flex items-center justify-between text-[10px] text-[#6B7280] font-semibold">
                  <span className="flex items-center gap-1"><Mic className="w-3 h-3 text-[#5B21B6]" /> Audio Level</span>
                  <span>{audioLevel > 10 ? 'Audio detected' : 'Ambient quiet'}</span>
                </div>
                <div className="w-full h-1 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0F766E] transition-all duration-75"
                    style={{ width: `${Math.max(4, audioLevel)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Right: Security Checklist & Fullscreen */}
            <div className="md:col-span-7 space-y-4">
              <span className="text-[11px] font-semibold text-[#4B5563] uppercase tracking-wider block">
                Testing Integrity Requirements
              </span>

              <div className="space-y-2.5 text-xs text-[#4B5563]">
                <div className="p-2.5 rounded bg-[#F9FAFB] border border-[#E5E7EB] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F0F14] block">Focus Lock & Tab Monitoring</strong>
                    <span>Leaving the test tab or switching windows logs a security violation. 3 violations invalidate the session.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-[#F9FAFB] border border-[#E5E7EB] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F0F14] block">24-Hour Preparation Interval</strong>
                    <span>Unsuccessful attempts require 24 hours of syllabus review prior to re-examination.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded bg-[#F9FAFB] border border-[#E5E7EB] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0F0F14] block">Public Registry Recording</strong>
                    <span>Passing scores are permanently cataloged with your verifiable credential ID.</span>
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          </div>

          {/* Candidate Acknowledgment Box */}
          <div className="pt-2 border-t border-[#E5E7EB]">
            <label className="flex items-start gap-3 p-3 bg-[#F5F3FF] border border-[#DDD6FE] rounded-md cursor-pointer select-none">
              <input
                type="checkbox"
                checked={acknowledged}
                onChange={(e) => setAcknowledged(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[#D1D5DB] text-[#5B21B6] focus:ring-[#5B21B6]"
              />
              <span className="text-xs text-[#2E1065] leading-relaxed">
                <strong>Candidate Declaration:</strong> I confirm that I am the registered candidate, testing in an unassisted environment, and I agree to comply with the 45-minute examination time limit and focus integrity monitoring.
              </span>
            </label>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={startMediaCheck}
              disabled={isRequestingPermissions}
              className="btn-secondary text-xs py-2 px-3 w-full sm:w-auto"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRequestingPermissions ? 'animate-spin' : ''}`} />
              <span>Re-check Sensor Devices</span>
            </button>

            <button
              type="button"
              onClick={handleLaunch}
              disabled={!allPassed}
              className="btn-primary text-xs py-2.5 px-6 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Authorize & Launch Examination</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
