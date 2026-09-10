export interface LessonProgress {
  completed: boolean;
  completedAt?: number;
  quizScore?: number; // 0 - 3
  activated?: boolean;
}

export type LearningProgressMap = Record<string, LessonProgress>;

const STORAGE_KEY = 'jnachi_learning_progress';

export function getLearningProgress(): LearningProgressMap {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveLessonProgress(lessonId: string, progress: Partial<LessonProgress>): LearningProgressMap {
  if (typeof window === 'undefined') return {};
  try {
    const all = getLearningProgress();
    all[lessonId] = {
      ...all[lessonId],
      ...progress,
      completed: true,
      completedAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return all;
  } catch {
    return {};
  }
}

export function toggleLessonActivated(lessonId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const all = getLearningProgress();
    const current = all[lessonId]?.activated ?? false;
    all[lessonId] = {
      ...all[lessonId],
      completed: true,
      activated: !current,
      completedAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return !current;
  } catch {
    return false;
  }
}
