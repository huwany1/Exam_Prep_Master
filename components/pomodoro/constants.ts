import { TimerMode } from './types';

export const MODES: Record<TimerMode, { label: string; minutes: number }> = {
  work: { label: '专注', minutes: 25 },
  short: { label: '短休', minutes: 5 },
  long: { label: '长休', minutes: 15 },
  custom: { label: '自定义', minutes: 30 },
};

export const STORAGE_KEY = 'pomodoro-storage';
