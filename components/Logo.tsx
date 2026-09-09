import React from 'react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-indigo-600"
        >
          {/* Swept ring / trailing point (comet orbit) */}
          <path
            d="M 28 16 C 28 22.627 22.627 28 16 28 C 9.373 28 4 22.627 4 16 C 4 9.373 9.373 4 16 4 C 18 4 19.8 4.6 21.4 5.5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="opacity-70"
          />
          {/* Solid dot (seed of knowledge) */}
          <circle cx="22" cy="10" r="5" fill="currentColor" />
        </svg>
      </div>
      <span className="text-xl font-semibold tracking-tight lowercase text-slate-900">jnachi</span>
    </div>
  );
}
