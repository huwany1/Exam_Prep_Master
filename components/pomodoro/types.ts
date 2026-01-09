export type TimerMode = 'work' | 'short' | 'long' | 'custom';

export interface PomodoroState {
  mode: TimerMode;
  customMinutes: number;
  initialTime: number;
  timeLeft: number;
  isActive: boolean;
  endTime: number | null;
  taskName: string;
  dailyStats: { date: string; count: number };
  lastUpdated: number;
}

export interface PomodoroTimerProps {
  onClose: () => void;
}

export interface PomodoroTimerRef {
  handleToggle: () => void;
}
