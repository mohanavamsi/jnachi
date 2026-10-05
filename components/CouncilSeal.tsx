import React from 'react';

interface CouncilSealProps {
  className?: string;
  size?: number;
  variant?: 'brand' | 'gold' | 'silver' | 'dark' | 'monochrome';
}

export function CouncilSeal({
  className = '',
  size = 88,
  variant = 'brand',
}: CouncilSealProps) {
  // Generate a unique ID prefix for SVG paths & masks
  const id = React.useId().replace(/:/g, '');
  const topPathId = `seal-top-path-${id}`;
  const bottomPathId = `seal-bottom-path-${id}`;

  const colors = {
    brand: {
      outerRing: '#5B21B6',
      innerRing: '#7C3AED',
      bg: '#F5F3FF',
      text: '#2E1065',
      star: '#5B21B6',
      emblem: '#5B21B6',
      accent: '#EDE9FE',
      border: '#DDD6FE',
    },
    gold: {
      outerRing: '#92400E',
      innerRing: '#B45309',
      bg: '#FEF3C7',
      text: '#78350F',
      star: '#B45309',
      emblem: '#92400E',
      accent: '#FDE68A',
      border: '#FCD34D',
    },
    silver: {
      outerRing: '#334155',
      innerRing: '#475569',
      bg: '#F1F5F9',
      text: '#0F172A',
      star: '#475569',
      emblem: '#334155',
      accent: '#E2E8F0',
      border: '#CBD5E1',
    },
    dark: {
      outerRing: '#EDE9FE',
      innerRing: '#DDD6FE',
      bg: '#2E1065',
      text: '#FFFFFF',
      star: '#C4B5FD',
      emblem: '#FFFFFF',
      accent: '#4C1D95',
      border: '#6D28D9',
    },
    monochrome: {
      outerRing: '#0F0F14',
      innerRing: '#4B5563',
      bg: '#FFFFFF',
      text: '#0F0F14',
      star: '#0F0F14',
      emblem: '#0F0F14',
      accent: '#F9FAFB',
      border: '#E5E7EB',
    },
  }[variant];

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Jnachi Certification Council Official Seal"
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Top text arc path (Clockwise, 180° to 0°) */}
          <path
            id={topPathId}
            d="M 28 100 A 72 72 0 1 1 172 100"
            fill="none"
          />
          {/* Bottom text arc path (Clockwise from bottom left to bottom right) */}
          <path
            id={bottomPathId}
            d="M 172 100 A 72 72 0 0 1 28 100"
            fill="none"
          />
          {/* Subtle Radial Gradient for Embossed Plate */}
          <radialGradient id={`grad-${id}`} cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.bg} stopOpacity="1" />
          </radialGradient>
        </defs>

        {/* 1. Outer Serrated / Notched Rim */}
        <circle
          cx="100"
          cy="100"
          r="96"
          fill={colors.accent}
          stroke={colors.outerRing}
          strokeWidth="2.5"
          strokeDasharray="3 2"
        />

        {/* 2. Outer Solid Ring */}
        <circle
          cx="100"
          cy="100"
          r="91"
          fill="none"
          stroke={colors.outerRing}
          strokeWidth="2"
        />

        {/* 3. Text Banner Background Ring */}
        <circle
          cx="100"
          cy="100"
          r="73"
          fill={`url(#grad-${id})`}
          stroke={colors.border}
          strokeWidth="1"
        />

        {/* 4. Inner Beaded Border */}
        <circle
          cx="100"
          cy="100"
          r="54"
          fill="none"
          stroke={colors.innerRing}
          strokeWidth="1.5"
          strokeDasharray="2 2"
        />

        {/* 5. Inner Core Plate */}
        <circle
          cx="100"
          cy="100"
          r="49"
          fill={colors.bg}
          stroke={colors.border}
          strokeWidth="1.5"
        />

        {/* 6. Top Text Path: JNACHI CERTIFICATION COUNCIL */}
        <text
          fill={colors.text}
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="2.2"
          fontFamily="'Inter', -apple-system, sans-serif"
        >
          <textPath
            href={`#${topPathId}`}
            startOffset="50%"
            textAnchor="middle"
          >
            JNACHI CERTIFICATION COUNCIL
          </textPath>
        </text>

        {/* 7. Bottom Text Path: VERIFIABLE COMPETENCY STANDARD */}
        <text
          fill={colors.text}
          fontSize="8.5"
          fontWeight="600"
          letterSpacing="1.8"
          fontFamily="'Inter', -apple-system, sans-serif"
        >
          <textPath
            href={`#${bottomPathId}`}
            startOffset="50%"
            textAnchor="middle"
          >
            VERIFIABLE COMPETENCY STANDARD
          </textPath>
        </text>

        {/* 8. Star Accents on Equator */}
        {/* Left Star */}
        <text
          x="23"
          y="103"
          textAnchor="middle"
          fontSize="9"
          fill={colors.star}
        >
          ★
        </text>
        {/* Right Star */}
        <text
          x="177"
          y="103"
          textAnchor="middle"
          fontSize="9"
          fill={colors.star}
        >
          ★
        </text>

        {/* 9. Center Core: Jnachi Emblem (Swept comet + seed of wisdom) */}
        <g transform="translate(76, 68)">
          <svg
            viewBox="0 0 32 32"
            width="48"
            height="48"
            fill="none"
            className="overflow-visible"
          >
            {/* Comet ring */}
            <path
              d="M 28 16 C 28 22.627 22.627 28 16 28 C 9.373 28 4 22.627 4 16 C 4 9.373 9.373 4 16 4 C 18 4 19.8 4.6 21.4 5.5"
              stroke={colors.emblem}
              strokeWidth="2.8"
              strokeLinecap="round"
              opacity="0.85"
            />
            {/* Seed of Knowledge dot */}
            <circle cx="22" cy="10" r="4.2" fill={colors.emblem} />
          </svg>
        </g>

        {/* 10. Center Banner: EST. 2026 */}
        <rect
          x="68"
          y="126"
          width="64"
          height="16"
          rx="3"
          fill={colors.accent}
          stroke={colors.border}
          strokeWidth="0.8"
        />
        <text
          x="100"
          y="138"
          textAnchor="middle"
          fill={colors.text}
          fontSize="8.5"
          fontWeight="800"
          letterSpacing="1.2"
          fontFamily="'Inter', -apple-system, sans-serif"
        >
          EST. 2026
        </text>
      </svg>
    </div>
  );
}
