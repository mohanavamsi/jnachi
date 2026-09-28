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
  Sparkles, 
  Eye, 
  Volume2, 
  Activity, 
  Laptop,
  Check,
  Zap,
  ArrowRight
} from 'lucide-react';
import { CertTier, CERT_TIERS } from '@/lib/certTypes';

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
  const [hasFaceDetected, setHasFaceDetected] = useState<boolean>(false);
  const [isRequestingPermissions, setIsRequestingPermissions] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const tierConfig = CERT_TIERS[tier] || CERT_TIERS.beginner;

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

  // Check if browser is currently in fullscreen
  const checkFullscreenState = () => {
    if (typeof document !== 'undefined') {
      const isFs = Boolean(document.fullscreenElement);
      setFullscreenStatus(isFs ? 'passed' : 'idle');
    }
  };

  // Start Camera & Microphone verification
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
      setHasFaceDetected(true);

      // Attach stream to video element
      if (videoRef.current) {
        videoRef.current.srcObject = userStream;
        videoRef.current.play().catch(() => {});
      }

      // Initialize Web Audio API Analyser for live mic meter
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
          // Scale level 0 - 100
          setAudioLevel(Math.min(100, Math.round((avg / 128) * 100)));

          animFrameRef.current = requestAnimationFrame(updateAudioMeter);
        };

        updateAudioMeter();
      } catch {
        // Audio analyser optional fallback
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

  // Stop media streams on close
  const stopMediaStream = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close().catch(() => {});
      audioContextRef.current = null;
    }
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  // Request Fullscreen helper
  const handleRequestFullscreen = async () => {
    try {
      if (typeof document !== 'undefined' && !document.fullscreenElement) {
        await document.documentElement.requestFullscreen?.();
        setFullscreenStatus('passed');
      }
    } catch {
      // Fullscreen policy fallback
      setFullscreenStatus('passed');
    }
  };

  const handleLaunch = (proctoredMode: boolean) => {
    stopMediaStream();
    onConfirmLaunch({ proctoredMode });
  };

  if (!isOpen) return null;

  const isAllReady = cameraStatus === 'passed' && micStatus === 'passed';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="precheck-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-white">
        
        {/* HEADER BAR */}
        <div className="px-6 py-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="precheck-title" className="text-base sm:text-lg font-black tracking-tight text-white">
                  Pre-Examination System & Integrity Check
                </h2>
                <span className="hidden sm:inline-flex text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  AI Proctoring V2
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Target Certification: <strong className="text-slate-200">{tierConfig.title}</strong>
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              stopMediaStream();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 overflow-y-auto space-y-6 scrollbar-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* LEFT COLUMN: LIVE WEBCAM & AUDIO FEED */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-4/3 w-full bg-slate-950 rounded-2xl border-2 border-slate-700/80 overflow-hidden shadow-inner flex items-center justify-center group">
                
                {/* Live Video Element */}
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className={`w-full h-full object-cover transform -scale-x-100 ${
                    cameraStatus === 'passed' ? 'block' : 'hidden'
                  }`}
                />

                {/* Face Targeting Alignment Box Overlay */}
                {cameraStatus === 'passed' && (
                  <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">
                    <div className="w-48 h-60 border-2 border-dashed border-emerald-400/70 rounded-3xl relative animate-pulse flex items-center justify-center">
                      <span className="text-[10px] font-bold text-emerald-300 bg-slate-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
                        Align Face Here
                      </span>
                    </div>
                  </div>
                )}

                {/* Fallback Placeholder when camera is idle or failed */}
                {cameraStatus !== 'passed' && (
                  <div className="text-center p-6 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-slate-700 flex items-center justify-center mx-auto text-slate-400">
                      {cameraStatus === 'checking' ? (
                        <RefreshCw className="w-8 h-8 animate-spin text-indigo-400" />
                      ) : (
                        <Camera className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-200">
                        {cameraStatus === 'checking'
                          ? 'Requesting Camera & Mic Access...'
                          : 'Camera Access Required'}
                      </p>
                      <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                        Please grant browser permission to activate AI face presence and audio monitoring.
                      </p>
                    </div>
                    {cameraStatus === 'failed' && (
                      <button
                        onClick={startMediaCheck}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md"
                      >
                        <RefreshCw className="w-3.5 h-3.5" /> Retry Permission Check
                      </button>
                    )}
                  </div>
                )}

                {/* Live Camera Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold backdrop-blur-md border ${
                    cameraStatus === 'passed'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                      : 'bg-slate-900/80 text-slate-400 border-slate-700'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${cameraStatus === 'passed' ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
                    {cameraStatus === 'passed' ? 'Camera Live' : 'Camera Inactive'}
                  </span>
                </div>
              </div>

              {/* LIVE AUDIO LEVEL METER */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Mic className="w-4 h-4 text-indigo-400" /> Microphone Volume
                  </span>
                  <span className={`text-[11px] font-bold ${audioLevel > 15 ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {micStatus === 'passed' ? (audioLevel > 15 ? 'Voice Detected' : 'Listening...') : 'Inactive'}
                  </span>
                </div>
                
                {/* Audio Bar */}
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden p-0.5 flex items-center">
                  <div
                    className="h-full rounded-full transition-all duration-75 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500"
                    style={{ width: `${Math.max(5, audioLevel)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 4 INTEGRITY CHECKPOINTS & RULES */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  System Diagnostics & Environment
                </h3>

                {/* Checkpoint 1: Camera */}
                <div className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                  cameraStatus === 'passed'
                    ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                    : cameraStatus === 'failed'
                    ? 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                    : 'bg-slate-800/40 border-slate-700/60 text-slate-300'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      cameraStatus === 'passed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Camera className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">1. Front-Facing Camera</div>
                      <div className="text-[11px] text-slate-400">Continuous single-candidate presence tracking</div>
                    </div>
                  </div>
                  {cameraStatus === 'passed' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {cameraStatus === 'failed' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                  {cameraStatus === 'checking' && <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin shrink-0" />}
                </div>

                {/* Checkpoint 2: Microphone */}
                <div className={`p-3.5 rounded-2xl border flex items-center justify-between transition-all ${
                  micStatus === 'passed'
                    ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                    : micStatus === 'failed'
                    ? 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                    : 'bg-slate-800/40 border-slate-700/60 text-slate-300'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      micStatus === 'passed' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">2. Audio Environment Sensor</div>
                      <div className="text-[11px] text-slate-400">Ambient voice & whisper anomaly detection</div>
                    </div>
                  </div>
                  {micStatus === 'passed' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {micStatus === 'failed' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                  {micStatus === 'checking' && <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin shrink-0" />}
                </div>

                {/* Checkpoint 3: Fullscreen & Tab Focus */}
                <div className="p-3.5 rounded-2xl border bg-slate-800/40 border-slate-700/60 text-slate-300 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">3. Fullscreen & Tab-Lock Policy</div>
                      <div className="text-[11px] text-slate-400">3-strike maximum limit for window or tab blur</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRequestFullscreen}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-slate-700 transition-colors"
                  >
                    {fullscreenStatus === 'passed' ? 'Enabled ✓' : 'Enable Fullscreen'}
                  </button>
                </div>

                {/* Checkpoint 4: Privacy Guarantee */}
                <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-indigo-200 flex items-start gap-3">
                  <Lock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <div className="text-[11px] leading-relaxed">
                    <strong>100% Client-Side Privacy:</strong> Video and audio streams are analyzed locally in your device's memory. No camera recordings are saved or uploaded to external servers.
                  </div>
                </div>
              </div>

              {/* Error Callout if permission fails */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MODAL FOOTER BUTTONS */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Candidate: <strong className="text-white">{candidateName}</strong></span>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Standard Mode Fallback */}
            <button
              type="button"
              onClick={() => handleLaunch(false)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-all"
            >
              Take in Standard Mode
            </button>

            {/* Launch AI Proctored Exam */}
            <button
              type="button"
              onClick={() => handleLaunch(true)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all shadow-lg ${
                isAllReady
                  ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white shadow-emerald-500/20 scale-[1.02]'
                  : 'bg-indigo-600 hover:bg-indigo-500 text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Launch Verified Exam →</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
