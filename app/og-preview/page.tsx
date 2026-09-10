'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, RefreshCw, Copy, Check, Eye, Sparkles } from 'lucide-react';

const PRESETS = [
  { name: 'Default Site Preview', params: 'default=true', score: null, level: null },
  { name: 'Score 13 (Level 1: Explorer)', params: 'a=0,0,0,0,0,1,1,1,1', score: 13, level: 'Level 1: Explorer Foundation' },
  { name: 'Score 57 (Level 3: Builder)', params: 'score=57&level=Level+3%3A+Builder', score: 57, level: 'Level 3: Builder' },
  { name: 'Score 84 (Level 4: Architect)', params: 'a=3,3,3,3,2,3,3,2,2', score: 84, level: 'Level 4: Architect' },
];

export default function OgPreviewPage() {
  const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
  const [customParams, setCustomParams] = useState('default=true');
  const [copied, setCopied] = useState<string | null>(null);

  const ogImageUrl = `/api/og?${customParams}`;
  const staticImageUrl = '/og-default.png';

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-2">
              <Eye className="w-3.5 h-3.5" /> OpenGraph &amp; Social Card Inspector
            </div>
            <h1 className="text-3xl font-bold text-slate-900">Jnachi Social Link Previews</h1>
            <p className="text-slate-600 text-sm mt-1">
              Verify how your links appear in Slack, iMessage, Twitter/X, and LinkedIn.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
            >
              Back to Home
            </Link>
            <Link
              href="/assessment"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Take Assessment
            </Link>
          </div>
        </div>

        {/* Preset Selector */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Select Preview Scenario
          </label>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PRESETS.map((preset) => {
              const isSelected = customParams === preset.params;
              return (
                <button
                  key={preset.name}
                  onClick={() => {
                    setSelectedPreset(preset);
                    setCustomParams(preset.params);
                  }}
                  className={`text-left p-4 rounded-xl border transition-all text-sm ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/70 shadow-sm ring-1 ring-indigo-600 font-semibold text-indigo-950'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="font-bold">{preset.name}</div>
                  <div className="text-xs text-slate-500 mt-1 font-mono truncate">
                    ?{preset.params}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Side-by-Side View */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Static Default Asset */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">1. Static Default Image</h3>
                <p className="text-xs text-slate-500">Asset: <code className="bg-slate-100 px-1 py-0.5 rounded">/public/og-default.png</code></p>
              </div>
              <a
                href={staticImageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Open Full Size <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative aspect-[1200/630] w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={staticImageUrl}
                alt="Static OG Default"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
              <span>Standard 1200×630px PNG</span>
              <button
                onClick={() => copyToClipboard('https://jnachi.com/og-default.png', 'static')}
                className="inline-flex items-center gap-1 hover:text-slate-900 font-medium"
              >
                {copied === 'static' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                Copy URL
              </button>
            </div>
          </div>

          {/* Card 2: Dynamic Per-Result Generator */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">2. Dynamic Result Image</h3>
                <p className="text-xs text-slate-500">Generated on-the-fly via <code className="bg-slate-100 px-1 py-0.5 rounded">/api/og</code></p>
              </div>
              <a
                href={ogImageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Open Full Size <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative aspect-[1200/630] w-full rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={ogImageUrl}
                src={ogImageUrl}
                alt="Dynamic OG Result"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-3">
              <span className="font-mono truncate max-w-[280px]">{ogImageUrl}</span>
              <button
                onClick={() => copyToClipboard(`https://jnachi.com${ogImageUrl}`, 'dynamic')}
                className="inline-flex items-center gap-1 hover:text-slate-900 font-medium"
              >
                {copied === 'dynamic' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                Copy URL
              </button>
            </div>
          </div>
        </div>

        {/* Social Card Previews */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900">Simulated Social Link Cards</h3>
            <p className="text-sm text-slate-500 mt-0.5">
              Preview how Twitter, LinkedIn, and messaging apps format the summary card.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Twitter / X Card Simulation */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm max-w-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span>Twitter / X Large Image Card</span>
                <span>jnachi.com</span>
              </div>
              <div className="relative aspect-[1200/630] w-full bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ogImageUrl} alt="Card Preview" className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white">
                <span className="text-xs text-slate-400 uppercase tracking-wider">jnachi.com</span>
                <h4 className="font-bold text-slate-900 text-sm mt-0.5 line-clamp-1">
                  {selectedPreset.score !== null
                    ? `My Jnachi Score: ${selectedPreset.score} — ${selectedPreset.level}`
                    : 'Jnachi | AI Skills Assessment & Learning Hub'}
                </h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {selectedPreset.score !== null
                    ? `I scored ${selectedPreset.score}/100 on the Jnachi AI Skills Assessment. Check how activated your AI knowledge is.`
                    : 'A precise reading of how activated your AI knowledge is. Know it. Use it. Prove it.'}
                </p>
              </div>
            </div>

            {/* iMessage / Slack Simulation */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm max-w-lg">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <span>Slack / iMessage Rich Preview</span>
                <span>1200×630px</span>
              </div>
              <div className="p-4 bg-[#f8fafc]">
                <div className="border-l-4 border-indigo-600 pl-3 bg-white p-3 rounded-r-xl border-y border-r border-slate-200 shadow-sm">
                  <span className="text-xs font-bold text-slate-800">Jnachi</span>
                  <h4 className="font-bold text-indigo-700 text-sm mt-0.5">
                    {selectedPreset.score !== null
                      ? `My Jnachi Score: ${selectedPreset.score} — ${selectedPreset.level}`
                      : 'Jnachi | AI Skills Assessment & Learning Hub'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {selectedPreset.score !== null
                      ? `I scored ${selectedPreset.score}/100 on the Jnachi assessment.`
                      : 'Know it. Use it. Prove it.'}
                  </p>
                  <div className="mt-3 rounded-lg overflow-hidden border border-slate-200 aspect-[1200/630]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ogImageUrl} alt="Slack Preview" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
