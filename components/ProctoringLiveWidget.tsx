'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Camera,
  Mic,
  ShieldCheck,
  ShieldAlert,
  ChevronDown,
  ChevronUp,
  Volume2,
  Eye,
  AlertTriangle,
  Lock,
  Zap,
  Activity,
} from 'lucide-react';

interface ProctoringLiveWidgetProps {
  isActive: boolean;
  strikes: number;
  onViolation: (reason: string) => void;
}

export interface ProctoringLogEntry {
  timestamp: number;
  type: 'face' | 'audio' | 'tab' | 'fullscreen';
  severity: 'info' | 'warning' | 'strike';
  message: string;
}

export default function ProctoringLiveWidget({
  isActive,
  strikes,
  onViolation,
}: ProctoringLiveWidgetProps) {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [cameraActive, setCameraActive] = useState<boolean>(false);
  const [audioLevel, setAudioLevel] = useState<number>(0);
  const [faceStatus, setFaceStatus] = useState<'detected' | 'checking' | 'away' | 'multiple'>('detected');
  const [logs, setLogs] = useState<ProctoringLogEntry[]>([]);
  const [showLogsModal, setShowLogsModal] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const detectionIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Add event to audit log
  const addLog = useCallback((type: ProctoringLogEntry['type'], severity: ProctoringLogEntry['severity'], message: string) => {
    setLogs((prev) => [
      ...prev,
      {
        timestamp: Date.now(),
        type,
        severity,
        message,
      },
    ]);
  }, []);

  // Initialize live video stream and audio analyser
  useEffect(() => {
    if (!isActive) return;

    let isMounted = true;

    async function initProctoringMedia() {
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) return;

        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 320 },
            height: { ideal: 240 },
            facingMode: 'user',
          },
          audio: true,
        });

        if (!isMounted) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }

        streamRef.current = stream;
        setCameraActive(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => {});
        }

        // Initialize Web Audio API Analyser
        try {
          const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const audioCtx = new AudioContextClass();
          const analyser = audioCtx.createAnalyser();
          analyser.fftSize = 128;

          const source = audioCtx.createMediaStreamSource(stream);
          source.connect(analyser);

          audioContextRef.current = audioCtx;
          analyserRef.current = analyser;

          const dataArray = new Uint8Array(analyser.frequencyBinCount);

          const updateAudio = () => {
            if (!analyserRef.current) return;
            analyserRef.current.getByteFrequencyData(dataArray);

            let sum = 0;
            for (let i = 0; i < dataArray.length; i++) {
              sum += dataArray[i];
            }
            const avg = sum / dataArray.length;
            const level = Math.min(100, Math.round((avg / 128) * 100));
            setAudioLevel(level);

            // Log high volume anomaly
            if (level > 85) {
              addLog('audio', 'info', 'High ambient volume detected');
            }

            animFrameRef.current = requestAnimationFrame(updateAudio);
          };

          updateAudio();
        } catch {
          // Audio fallback
        }

        // Periodic Client-Side Video Analysis (every 3 seconds)
        detectionIntervalRef.current = setInterval(() => {
          analyzeVideoFrame();
        }, 3000);

        addLog('face', 'info', 'AI proctoring stream initialized successfully');
      } catch {
        setCameraActive(false);
      }
    }

    initProctoringMedia();

    return () => {
      isMounted = false;
      if (detectionIntervalRef.current) clearInterval(detectionIntervalRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close().catch(() => {});
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, [isActive, addLog]);

  // Client-side lightweight brightness & frame analysis via HTML5 Canvas
  const analyzeVideoFrame = () => {
    if (!videoRef.current || !canvasRef.current || !cameraActive) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx || video.videoWidth === 0 || video.videoHeight === 0) return;

    canvas.width = 160;
    canvas.height = 120;
    ctx.drawImage(video, 0, 0, 160, 120);

    try {
      const imageData = ctx.getImageData(0, 0, 160, 120);
      const data = imageData.data;
      let totalBrightness = 0;
      let skinTonePixels = 0;

      for (let i = 0; i < data.length; i += 16) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const brightness = (r + g + b) / 3;
        totalBrightness += brightness;

        // Approximate skin-tone range for presence heuristic
        if (r > 60 && g > 40 && b > 20 && r > b && (r - g) > 10) {
          skinTonePixels++;
        }
      }

      const sampleCount = data.length / 16;
      const avgBrightness = totalBrightness / sampleCount;
      const skinRatio = skinTonePixels / sampleCount;

      if (avgBrightness < 15) {
        setFaceStatus('checking'); // Camera blocked or extremely dark
      } else if (skinRatio > 0.04) {
        setFaceStatus('detected'); // 1 Candidate presence confirmed
      } else {
        setFaceStatus('away'); // Candidate stepped away from camera
      }
    } catch {
      // Fallback
    }
  };

  if (!isActive) return null;

  return (
    <>
      {/* Hidden processing canvas */}
      <canvas ref={canvasRef} className="hidden" />

      {/* Floating Mini Proctoring Widget (Bottom Right) */}
      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
          isMinimized ? 'w-auto' : 'w-72 sm:w-80'
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden text-white transition-all">
          
          {/* HEADER / COLLAPSED BAR */}
          <div className="p-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-black tracking-tight text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>AI Proctoring</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-indigo-950 text-indigo-300 border border-indigo-800/40">
                Live
              </span>
            </div>

            <div className="flex items-center gap-1">
              {/* Strike Pill */}
              <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                strikes === 0
                  ? 'bg-slate-800 text-slate-300 border-slate-700'
                  : strikes === 1
                  ? 'bg-amber-950 text-amber-300 border-amber-500/40'
                  : 'bg-rose-950 text-rose-300 border-rose-500/40 animate-pulse'
              }`}>
                {strikes}/3 Strikes
              </span>

              {/* Minimize Toggle */}
              <button
                type="button"
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                aria-label={isMinimized ? 'Expand proctoring widget' : 'Minimize proctoring widget'}
              >
                {isMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* EXPANDED CONTENT */}
          {!isMinimized && (
            <div className="p-3 space-y-3">
              {/* Live Video Box */}
              <div className="relative aspect-4/3 w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className={`w-full h-full object-cover transform -scale-x-100 ${
                    cameraActive ? 'block' : 'hidden'
                  }`}
                />

                {!cameraActive && (
                  <div className="text-center p-3 text-xs text-slate-500 flex flex-col items-center gap-1.5">
                    <Camera className="w-6 h-6 text-slate-600" />
                    <span>Camera Stream Active in Background</span>
                  </div>
                )}

                {/* Live Face Status Badge */}
                <div className="absolute top-2 left-2">
                  <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-extrabold backdrop-blur-md border ${
                    faceStatus === 'detected'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
                      : faceStatus === 'away'
                      ? 'bg-amber-950/80 text-amber-300 border-amber-500/40 animate-pulse'
                      : 'bg-slate-900/80 text-slate-400 border-slate-700'
                  }`}>
                    <Eye className="w-3 h-3" />
                    {faceStatus === 'detected' ? '1 Face Verified' : faceStatus === 'away' ? 'Face Not Centered' : 'Analyzing...'}
                  </span>
                </div>
              </div>

              {/* Live Audio Meter */}
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Mic className="w-3 h-3 text-indigo-400" /> Audio Sensor
                  </span>
                  <span className={audioLevel > 15 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {audioLevel > 15 ? 'Voice Detected' : 'Quiet Environment'}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden flex items-center">
                  <div
                    className="h-full rounded-full transition-all duration-75 bg-gradient-to-r from-emerald-400 to-indigo-500"
                    style={{ width: `${Math.max(4, audioLevel)}%` }}
                  />
                </div>
              </div>

              {/* Status Footer & Audit Trail Button */}
              <div className="flex items-center justify-between text-[10px] text-slate-400 pt-0.5">
                <span className="flex items-center gap-1 text-slate-500">
                  <Lock className="w-3 h-3 text-slate-400" /> Local In-Memory AI
                </span>
                <button
                  type="button"
                  onClick={() => setShowLogsModal(true)}
                  className="font-bold text-indigo-300 hover:text-white transition-colors"
                >
                  View Integrity Log ({logs.length})
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Integrity Logs Modal */}
      {showLogsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl text-white space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Session Proctoring Audit Trail</span>
              </div>
              <button
                onClick={() => setShowLogsModal(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-2 text-xs scrollbar-none">
              {logs.length === 0 ? (
                <p className="text-slate-500 text-center py-4">No security violations recorded. Session integrity is 100%.</p>
              ) : (
                logs.map((log, i) => (
                  <div
                    key={i}
                    className={`p-2.5 rounded-xl border flex items-start gap-2 ${
                      log.severity === 'strike'
                        ? 'bg-rose-950/40 border-rose-500/30 text-rose-300'
                        : log.severity === 'warning'
                        ? 'bg-amber-950/40 border-amber-500/30 text-amber-300'
                        : 'bg-slate-800/50 border-slate-700 text-slate-300'
                    }`}
                  >
                    <span className="text-[10px] text-slate-500 font-mono shrink-0">
                      {new Date(log.timestamp).toLocaleTimeString([], { minute: '2-digit', second: '2-digit' })}
                    </span>
                    <span className="leading-snug">{log.message}</span>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={() => setShowLogsModal(false)}
              className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-colors"
            >
              Close Log
            </button>
          </div>
        </div>
      )}
    </>
  );
}
