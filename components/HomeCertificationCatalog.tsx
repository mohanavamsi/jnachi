'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import {
  CERT_TIERS,
  CORE_TIER_ORDER,
  ROLE_TIER_ORDER,
  PYTHON_TIER_ORDER,
  SYSTEMS_TIER_ORDER,
  INTEGRATION_TIER_ORDER,
  AGENTIC_TIER_ORDER,
  FINANCE_TIER_ORDER,
  CertTier,
  getSlugByTier,
  TOTAL_CERTIFICATIONS_COUNT,
} from '@/lib/certTypes';

type CategoryFilter = 'all' | 'core' | 'role' | 'python' | 'systems' | 'integration';

export function HomeCertificationCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const categories: { id: CategoryFilter; label: string; count: number }[] = [
    { id: 'all', label: 'All Certifications', count: TOTAL_CERTIFICATIONS_COUNT },
    { id: 'core', label: 'Core AI Ladder', count: CORE_TIER_ORDER.length },
    { id: 'role', label: 'Role Specializations', count: ROLE_TIER_ORDER.length + FINANCE_TIER_ORDER.length },
    { id: 'python', label: 'Applied Python & AI Engineering', count: PYTHON_TIER_ORDER.length + AGENTIC_TIER_ORDER.length },
    { id: 'systems', label: 'Software & Systems Infrastructure', count: SYSTEMS_TIER_ORDER.length },
    { id: 'integration', label: 'Enterprise Integration', count: INTEGRATION_TIER_ORDER.length },
  ];

  const getTiersForCategory = (): CertTier[] => {
    switch (activeCategory) {
      case 'core':
        return CORE_TIER_ORDER;
      case 'role':
        return [...ROLE_TIER_ORDER, ...FINANCE_TIER_ORDER];
      case 'python':
        return [...PYTHON_TIER_ORDER, ...AGENTIC_TIER_ORDER];
      case 'systems':
        return SYSTEMS_TIER_ORDER;
      case 'integration':
        return INTEGRATION_TIER_ORDER;
      case 'all':
      default:
        return [
          ...CORE_TIER_ORDER,
          ...ROLE_TIER_ORDER,
          ...FINANCE_TIER_ORDER,
          ...PYTHON_TIER_ORDER,
          ...AGENTIC_TIER_ORDER,
          ...SYSTEMS_TIER_ORDER,
          ...INTEGRATION_TIER_ORDER,
        ];
    }
  };

  const displayedTiers = getTiersForCategory();

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'core':
        return { label: 'Core AI', color: 'bg-[#EDE9FE] text-[#5B21B6]' };
      case 'role':
      case 'finance':
        return { label: 'Role Track', color: 'bg-[#F0FDF4] text-[#166534]' };
      case 'python':
      case 'agentic':
        return { label: 'Python & AI', color: 'bg-[#EFF6FF] text-[#1D4ED8]' };
      case 'systems':
        return { label: 'Systems & Software', color: 'bg-[#F0F9FF] text-[#0369A1]' };
      case 'integration':
        return { label: 'Integration', color: 'bg-[#FFF7ED] text-[#C2410C]' };
      default:
        return { label: 'Certification', color: 'bg-[#F3F4F6] text-[#374151]' };
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Category Tab Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-[#E5E7EB]">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors ${
                isSelected
                  ? 'border-[#5B21B6] text-[#5B21B6]'
                  : 'border-transparent text-[#4B5563] hover:text-[#0F0F14]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isSelected ? 'bg-[#EDE9FE] text-[#5B21B6]' : 'bg-[#F3F4F6] text-[#6B7280]'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Structured Table / List View */}
      <div className="bg-white border border-[#E5E7EB] rounded-lg overflow-hidden shadow-xs divide-y divide-[#E5E7EB]">
        {/* Table Header (Desktop) */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 bg-[#F9FAFB] text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider">
          <div className="col-span-6">Certification Track</div>
          <div className="col-span-2">Category & Level</div>
          <div className="col-span-2">Format & Standard</div>
          <div className="col-span-2 text-right">Details</div>
        </div>

        {/* Rows */}
        {displayedTiers.map((tierKey) => {
          const tier = CERT_TIERS[tierKey];
          const slug = getSlugByTier(tierKey);
          const badge = getCategoryBadge(tier.category);

          return (
            <div
              key={tierKey}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-[#F9FAFB] transition-colors"
            >
              {/* Col 1: Track Name & Description */}
              <div className="col-span-1 md:col-span-6 space-y-1">
                <div className="flex items-center gap-2">
                  <Link
                    href={`/certification/${slug}`}
                    className="text-sm font-semibold text-[#0F0F14] hover:text-[#5B21B6] transition-colors"
                  >
                    {tier.title}
                  </Link>
                </div>
                <p className="text-xs text-[#4B5563] line-clamp-1">
                  {tier.shortDescription}
                </p>
              </div>

              {/* Col 2: Category & Level */}
              <div className="col-span-1 md:col-span-2 flex md:flex-col items-center md:items-start gap-2 md:gap-1">
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${badge.color}`}>
                  {badge.label}
                </span>
                <span className="text-xs text-[#6B7280]">
                  Level {tier.levelNumber}
                </span>
              </div>

              {/* Col 3: Exam Specifications */}
              <div className="col-span-1 md:col-span-2 space-y-0.5 text-xs text-[#4B5563]">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-[#0F0F14]">{tier.questionCount} Questions</span>
                  <span className="text-[#9CA3AF]">•</span>
                  <span>{tier.durationMinutes} min</span>
                </div>
                <div className="text-[11px] text-[#0F766E] font-medium">
                  {tier.passingScorePercent}% passing standard
                </div>
              </div>

              {/* Col 4: Action */}
              <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-[#F3F4F6]">
                <span className="text-xs font-semibold text-[#0F766E] md:hidden">
                  Free launch access
                </span>
                <Link
                  href={`/certification/${slug}`}
                  className="btn-secondary text-xs py-1.5 px-3"
                >
                  <span>View Syllabus</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#6B7280]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between pt-2 text-xs text-[#6B7280]">
        <span>Showing {displayedTiers.length} of {TOTAL_CERTIFICATIONS_COUNT} active credentials</span>
        <Link href="/certification" className="btn-text text-xs">
          Browse complete catalog with learning paths →
        </Link>
      </div>
    </div>
  );
}
