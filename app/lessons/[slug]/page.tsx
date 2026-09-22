'use client';

import { useState, useEffect, use, useMemo } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Share2, 
  Check, 
  X, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  BookOpen,
  RotateCcw,
  Copy,
  Cpu,
  Code2,
  Users2
} from 'lucide-react';
import { getLessonBySlug, getAdjacentLessons, CATEGORY_DETAILS, CategoryKey } from '@/lib/lessonsData';
import { getLearningProgress, saveLessonProgress, toggleLessonActivated } from '@/lib/learningProgress';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function LessonDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const lesson = getLessonBySlug(resolvedParams.slug);

  if (!lesson) {
    notFound();
  }

  const { prev, next } = getAdjacentLessons(resolvedParams.slug);

  // Quiz state: selected option per question index
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [copiedLink, setCopiedLink] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const [hasSavedCompletion, setHasSavedCompletion] = useState(false);

  useEffect(() => {
    const progress = getLearningProgress();
    const current = progress[lesson.id];
    if (current?.activated) {
      setIsActivated(true);
    }
  }, [lesson.id]);

  const categoryIcons: Record<CategoryKey, typeof Sparkles> = {
    literacy: Sparkles,
    automation: Zap,
    privacy: ShieldCheck,
    growth: TrendingUp,
    integration: Cpu,
    python: Code2,
    role: Users2,
  };

  const Icon = categoryIcons[lesson.categoryKey];
  const catDetails = CATEGORY_DETAILS[lesson.categoryKey];

  // Calculate quiz score
  const totalAnswered = Object.keys(selectedAnswers).length;
  const correctCount = useMemo(() => {
    return Object.entries(selectedAnswers).filter(([qIndex, optIndex]) => {
      const q = lesson.quiz[Number(qIndex)];
      return q && q.correctIndex === optIndex;
    }).length;
  }, [selectedAnswers, lesson.quiz]);

  const handleSelectOption = (qIndex: number, optIndex: number) => {
    // If already selected, don't change
    if (selectedAnswers[qIndex] !== undefined) return;

    const nextAnswers = { ...selectedAnswers, [qIndex]: optIndex };
    setSelectedAnswers(nextAnswers);

    // If all 3 questions are answered, save progress
    if (Object.keys(nextAnswers).length === lesson.quiz.length) {
      const score = Object.entries(nextAnswers).filter(([idx, opt]) => {
        return lesson.quiz[Number(idx)].correctIndex === opt;
      }).length;
      saveLessonProgress(lesson.id, { quizScore: score, completed: true });
      setHasSavedCompletion(true);
    }
  };

  const handleToggleActivation = () => {
    const state = toggleLessonActivated(lesson.id);
    setIsActivated(state);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setHasSavedCompletion(false);
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="w-full bg-slate-50/50 min-h-screen pb-24">
      {/* Top Breadcrumb & Progress Bar */}
      <div className="w-full bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="container mx-auto max-w-4xl px-4 h-14 flex items-center justify-between text-sm">
          <Link
            href="/lessons"
            className="inline-flex items-center gap-1.5 text-slate-500 hover:text-indigo-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Learning Hub</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-400">
              Lesson #{lesson.lessonNumber} of 17
            </span>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-all"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 mt-8">
        {/* Header Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${catDetails.bg} ${catDetails.color}`}>
              <Icon className="w-3.5 h-3.5" />
              <span>{lesson.category}</span>
            </span>

            <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{lesson.readTime}</span>
            </span>

            {lesson.difficulty && (
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                lesson.difficulty === 'Beginner' ? 'bg-green-50 text-green-700 border-green-200' :
                lesson.difficulty === 'Intermediate' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                'bg-red-50 text-red-700 border-red-200'
              }`}>
                {lesson.difficulty}
              </span>
            )}

            {isActivated && (
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Check className="w-3 h-3" />
                <span>Skill Activated</span>
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
            {lesson.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            {lesson.description}
          </p>

          {lesson.tools && lesson.tools.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Works with:</span>
              {lesson.tools.map(tool => (
                <span key={tool} className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Key Takeaways Card */}
        {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-8">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Key Takeaways</span>
            </h2>
            <ul className="space-y-2">
              {lesson.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-indigo-900">
                  <Check className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* The Problem & Context Callout */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-6 mb-8 text-slate-800">
          <h2 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Diagnostic Context</span>
          </h2>
          <p className="text-slate-700 leading-relaxed text-base">
            {lesson.body.intro}

          </p>
        </div>

        {/* Core Lesson Body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            <span>The Core Technique</span>
          </h2>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-code:text-indigo-600 prose-code:bg-indigo-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-2xl prose-pre:p-5 prose-table:border-collapse prose-th:bg-slate-50 prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-slate-200">
            <Markdown>{lesson.body.core}</Markdown>
          </div>
        </div>

        {/* Try This: 5-Minute Immediate Activation Challenge */}
        <div className="bg-indigo-950 text-white rounded-3xl p-8 sm:p-10 shadow-lg mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                <span>5-Minute Activation Challenge</span>
              </span>

              <button
                onClick={handleToggleActivation}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm ${
                  isActivated
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-white text-indigo-950 hover:bg-indigo-50'
                }`}
              >
                {isActivated ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Activated in Workflow</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4 text-indigo-600" />
                    <span>Mark as Activated</span>
                  </>
                )}
              </button>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Try This Right Now
            </h3>

            <p className="text-indigo-100 text-base leading-relaxed mb-4">
              {lesson.body.tryThis}
            </p>

            <p className="text-xs text-indigo-300 italic">
              Tip: Knowledge only becomes capability once you run the prompt yourself.
            </p>
          </div>
        </div>

        {/* 3-Question Comprehension Check */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Comprehension Check</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Test Your Instincts ({lesson.quiz.length} Questions)
              </h3>
            </div>

            {totalAnswered > 0 && (
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-700">
                  Score: {correctCount} / {lesson.quiz.length}
                </span>
                {totalAnswered === lesson.quiz.length && (
                  <button
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-indigo-600 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake</span>
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="space-y-10">
            {lesson.quiz.map((q, qIndex) => {
              const selectedOpt = selectedAnswers[qIndex];
              const isAnswered = selectedOpt !== undefined;

              return (
                <div key={qIndex} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="w-7 h-7 rounded-full bg-white border border-slate-200 text-indigo-600 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {qIndex + 1}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 leading-snug">
                      {q.question}
                    </h4>
                  </div>

                  <div className="space-y-2.5 ml-0 sm:ml-10">
                    {q.options.map((opt, optIndex) => {
                      const isSelected = selectedOpt === optIndex;
                      const isCorrect = q.correctIndex === optIndex;

                      let btnStyle = 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/30';
                      if (isAnswered) {
                        if (isCorrect) {
                          btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-medium';
                        } else if (isSelected) {
                          btnStyle = 'bg-rose-50 border-rose-300 text-rose-900';
                        } else {
                          btnStyle = 'bg-white border-slate-200 text-slate-400 opacity-60';
                        }
                      }

                      return (
                        <button
                          key={optIndex}
                          onClick={() => handleSelectOption(qIndex, optIndex)}
                          disabled={isAnswered}
                          className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                        >
                          <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                            {isAnswered && isCorrect ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                            ) : isAnswered && isSelected ? (
                              <X className="w-3.5 h-3.5 text-rose-600 font-bold" />
                            ) : (
                              String.fromCharCode(65 + optIndex)
                            )}
                          </span>
                          <span className="flex-1 leading-relaxed">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Callout */}
                  {isAnswered && (
                    <div className="mt-4 ml-0 sm:ml-10 p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed">
                      <span className="font-bold text-slate-900 block mb-1">
                        {selectedOpt === q.correctIndex ? '✓ Correct Reasoning' : '✕ Key Insight'}
                      </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Completion Celebration */}
          {totalAnswered === lesson.quiz.length && (
            <div className="mt-8 p-6 rounded-2xl bg-indigo-50 border border-indigo-200 text-center">
              <CheckCircle2 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                {correctCount === lesson.quiz.length
                  ? 'All Correct — Concept Mastered!'
                  : `Knowledge Check Complete (${correctCount} of ${lesson.quiz.length} correct)`}
              </h4>
              <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">
                Your progress has been recorded. Apply this technique in your next working prompt.
              </p>
              {next && (
                <Link
                  href={`/lessons/${next.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
                >
                  <span>Continue to Lesson #{next.lessonNumber}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Previous / Next Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
          {prev ? (
            <Link
              href={`/lessons/${prev.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-600 text-sm font-medium transition-all shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">Previous Lesson</span>
                <span className="font-semibold line-clamp-1">#{prev.lessonNumber} {prev.title.split('(')[0]}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/lessons/${next.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 text-sm font-medium transition-all shadow-sm"
            >
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-indigo-200 block">Next Lesson</span>
                <span className="font-semibold line-clamp-1">#{next.lessonNumber} {next.title.split('(')[0]}</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/lessons"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-semibold transition-all shadow-sm"
            >
              <span>Back to All 17 Lessons</span>
              <CheckCircle2 className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
