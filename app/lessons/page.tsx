'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Compass,
  Check,
  Cpu,
  Code2,
  Users2
} from 'lucide-react';
import { LESSONS, CATEGORY_DETAILS, CategoryKey, Lesson } from '@/lib/lessonsData';
import { getLearningProgress, LearningProgressMap } from '@/lib/learningProgress';

export default function LessonsHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [progress, setProgress] = useState<LearningProgressMap>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setProgress(getLearningProgress());
  }, []);

  const completedCount = useMemo(() => {
    return Object.values(progress).filter(p => p.completed).length;
  }, [progress]);

  const filteredLessons = useMemo(() => {
    return LESSONS.filter(lesson => {
      const matchesCat = selectedCategory === 'all' || lesson.categoryKey === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        lesson.title.toLowerCase().includes(query) ||
        lesson.description.toLowerCase().includes(query) ||
        lesson.category.toLowerCase().includes(query) ||
        lesson.body.core.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryIcons: Record<CategoryKey, typeof Sparkles> = {
    literacy: Sparkles,
    automation: Zap,
    privacy: ShieldCheck,
    growth: TrendingUp,
    integration: Cpu,
    python: Code2,
    role: Users2,
  };

  return (
    <div className="w-full bg-slate-50/50 min-h-screen pb-24">
      {/* Hero Header */}
      <section className="w-full bg-white border-b border-slate-200 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{LESSONS.length} Practical Micro-Lessons</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
                The Jnachi Learning Hub
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
                Knowledge is activated through use, not accumulated through reading. 
                Concrete techniques, copyable prompt structures, and 5-minute activation exercises.
              </p>
            </div>

            {/* Assessment Callout */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 md:max-w-xs flex-shrink-0 shadow-sm">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mb-1">
                <Compass className="w-4 h-4" />
                <span>Need a starting point?</span>
              </div>
              <p className="text-slate-600 text-xs mb-3">
                Take the baseline diagnostic to find your exact growth priorities.
              </p>
              <Link
                href="/assessment"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span>Take Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Activation Momentum Tracker */}
          {mounted && (
            <div className="mt-10 pt-8 border-t border-slate-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
                <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  <span>Activation Momentum</span>
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {completedCount} of {LESSONS.length} Lessons Activated ({Math.round((completedCount / LESSONS.length) * 100)}%)
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-600 h-full rounded-full transition-all duration-700 ease-out"
                  style={{ width: `${(completedCount / LESSONS.length) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto max-w-5xl px-4 mt-8">
        {/* Controls: Search & Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-sm">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All Lessons ({LESSONS.length})
            </button>
            {(Object.keys(CATEGORY_DETAILS) as CategoryKey[]).map((key) => {
              const details = CATEGORY_DETAILS[key];
              const count = LESSONS.filter(l => l.categoryKey === key).length;
              const isSelected = selectedCategory === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {details.title.split(' ')[0]} ({count})
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics, prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Current Active Category Description */}
        {selectedCategory !== 'all' && (
          <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
              {(() => {
                const IconComponent = categoryIcons[selectedCategory as CategoryKey];
                return <IconComponent className="w-5 h-5" />;
              })()}
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">
                {CATEGORY_DETAILS[selectedCategory as CategoryKey].title}
              </h2>
              <p className="text-xs text-slate-500">
                {CATEGORY_DETAILS[selectedCategory as CategoryKey].description}
              </p>
            </div>
          </div>
        )}

        {/* Lessons List Grid */}
        {filteredLessons.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-5">
            {filteredLessons.map((lesson) => {
              const isCompleted = progress[lesson.id]?.completed ?? false;
              const hasScore = typeof progress[lesson.id]?.quizScore === 'number';
              const Icon = categoryIcons[lesson.categoryKey];

              return (
                <Link
                  key={lesson.id}
                  href={`/lessons/${lesson.slug}`}
                  className="group block bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                        #{lesson.lessonNumber.toString().padStart(2, '0')}
                      </span>
                      <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md ${CATEGORY_DETAILS[lesson.categoryKey].bg} ${CATEGORY_DETAILS[lesson.categoryKey].color}`}>
                        <Icon className="w-3 h-3" />
                        <span>{lesson.category.split(' ')[0]}</span>
                      </span>
                      {lesson.difficulty && (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                          lesson.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border border-green-200' :
                          lesson.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                          'bg-red-50 text-red-700 border border-red-200'
                        }`}>
                          {lesson.difficulty}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 flex-shrink-0">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{lesson.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2 leading-snug">
                    {lesson.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                    {lesson.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    {isCompleted ? (
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <Check className="w-3.5 h-3.5" />
                        <span>{hasScore ? `Quiz: ${progress[lesson.id].quizScore}/${lesson.quiz.length}` : 'Activated'}</span>
                      </div>
                    ) : (
                      <span className="text-xs font-medium text-slate-400 group-hover:text-slate-600">
                        {lesson.quiz.length}-Question Check included
                      </span>
                    )}

                    <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                      <span>Start Lesson</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No lessons match your search</h3>
            <p className="text-sm text-slate-500 mb-4">
              Try searching with another keyword or select &quot;All Lessons&quot;.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 bg-indigo-50 text-indigo-600 font-semibold text-sm rounded-full hover:bg-indigo-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
