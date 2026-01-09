import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { TimerMode, PomodoroState } from '../types';
import { MODES, STORAGE_KEY } from '../constants';

interface UsePomodoroTimerProps {
  onTimerComplete?: (mode: TimerMode) => void;
}

/**
 * usePomodoroTimer Hook
 * 负责番茄钟的核心计时逻辑、状态管理和持久化。
 */
export const usePomodoroTimer = ({ onTimerComplete }: UsePomodoroTimerProps = {}) => {
  // 从 localStorage 初始化状态
  const loadState = (): PomodoroState | null => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error("Failed to load pomodoro state", e);
    }
    return null;
  };

  const savedState = loadState();

  // 状态管理
  const [mode, setMode] = useState<TimerMode>(savedState?.mode || 'work');
  const [customMinutes, setCustomMinutes] = useState(savedState?.customMinutes || 30);
  const [initialTime, setInitialTime] = useState(savedState?.initialTime || MODES.work.minutes * 60);
  const [timeLeft, setTimeLeft] = useState(savedState?.timeLeft || MODES.work.minutes * 60);
  const [isActive, setIsActive] = useState(false);
  const [endTime, setEndTime] = useState<number | null>(savedState?.endTime || null);
  const [taskName, setTaskName] = useState(savedState?.taskName || '');
  
  // 初始化每日统计
  const [dailyStats, setDailyStats] = useState<{ date: string; count: number }>(() => {
    const today = new Date().toDateString();
    if (savedState?.dailyStats?.date === today) {
      return savedState.dailyStats;
    }
    return { date: today, count: 0 };
  });

  const [isEditing, setIsEditing] = useState(false);
  const originalTitleRef = useRef(document.title);

  // 初始化时检查是否应该继续运行
  useEffect(() => {
    if (savedState && savedState.isActive && savedState.endTime) {
      const now = Date.now();
      const remaining = Math.ceil((savedState.endTime - now) / 1000);
      
      if (remaining > 0) {
        setTimeLeft(remaining);
        setIsActive(true);
        setEndTime(savedState.endTime);
      } else {
        // 时间已过，重置
        setTimeLeft(0);
        setIsActive(false);
        setEndTime(null);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 仅挂载时执行

  // 持久化状态
  useEffect(() => {
    const state: PomodoroState = {
      mode,
      customMinutes,
      initialTime,
      timeLeft,
      isActive,
      endTime,
      taskName,
      dailyStats,
      lastUpdated: Date.now()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [mode, customMinutes, initialTime, timeLeft, isActive, endTime, taskName, dailyStats]);

  // 计时器逻辑
  useEffect(() => {
    let interval: number | undefined;

    if (isActive && endTime) {
      interval = window.setInterval(() => {
        const now = Date.now();
        const remaining = Math.ceil((endTime - now) / 1000);
        
        if (remaining >= 0) {
          setTimeLeft(remaining);
        } else {
          // 时间结束
          setTimeLeft(0);
          setIsActive(false);
          setEndTime(null);
          
          // 只有在专注模式下才计入统计
          if (mode === 'work') {
             setDailyStats(prev => {
                 const today = new Date().toDateString();
                 if (prev.date === today) {
                     return { ...prev, count: prev.count + 1 };
                 } else {
                     return { date: today, count: 1 };
                 }
             });
          }

          // 触发完成回调
          if (onTimerComplete) {
            onTimerComplete(mode);
          }
          
          if (document.hidden) {
            document.title = "⏰ 时间到！ - 番茄钟";
          }
        }
      }, 1000);
    } else if (isActive && !endTime) {
      // 异常情况修复
      setIsActive(false); 
    }

    return () => clearInterval(interval);
  }, [isActive, endTime, mode, onTimerComplete]);

  // 更新页面标题
  useEffect(() => {
    if (isActive) {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      document.title = `${minutes}:${seconds.toString().padStart(2, '0')} - ${MODES[mode].label}`;
    } else if (timeLeft === initialTime && document.title !== originalTitleRef.current) {
      document.title = originalTitleRef.current;
    }
  }, [isActive, timeLeft, mode, initialTime]);

  /**
   * 切换计时器模式
   */
  const switchMode = useCallback((newMode: TimerMode) => {
    // 如果不是初始状态（正在运行，或者暂停但未结束），则禁止切换
    // 如果计时结束(timeLeft === 0)，也允许切换
    const isInitialState = !isActive && (timeLeft === initialTime || timeLeft === 0);
    if (!isInitialState) {
        return;
    }

    setMode(newMode);
    setIsActive(false);
    setEndTime(null);
    setIsEditing(false);

    let newTime;
    if (newMode === 'custom') {
      newTime = customMinutes * 60;
    } else {
      newTime = MODES[newMode].minutes * 60;
    }

    setTimeLeft(newTime);
    setInitialTime(newTime);
  }, [isActive, timeLeft, initialTime, customMinutes]);

  /**
   * 重置当前计时器
   */
  const resetTimer = useCallback(() => {
    setIsActive(false);
    setEndTime(null);
    setIsEditing(false);

    let newTime;
    if (mode === 'custom') {
      newTime = customMinutes * 60;
    } else {
      newTime = MODES[mode].minutes * 60;
    }

    setTimeLeft(newTime);
    setInitialTime(newTime);
  }, [mode, customMinutes]);

  /**
   * 开始/暂停切换
   */
  const toggleTimer = useCallback(() => {
    if (isActive) {
      // 暂停
      setIsActive(false);
      setEndTime(null);
    } else {
      // 开始
      if (timeLeft > 0) {
        setIsActive(true);
        const newEndTime = Date.now() + timeLeft * 1000;
        setEndTime(newEndTime);
      } else if (timeLeft === 0) {
        // 重新开始
        let newTime;
        if (mode === 'custom') {
          newTime = customMinutes * 60;
        } else {
          newTime = MODES[mode].minutes * 60;
        }
        
        setTimeLeft(newTime);
        setInitialTime(newTime);
        setIsActive(true);
        setEndTime(Date.now() + newTime * 1000);
      }
    }
  }, [isActive, timeLeft, mode, customMinutes]);

  /**
   * 处理自定义时间提交
   */
  const handleCustomTimeSubmit = useCallback((value: number) => {
    let val = value;
    if (isNaN(val)) val = 25;
    if (val < 1) val = 1;
    
    setCustomMinutes(val);
    const newTime = val * 60;
    
    setTimeLeft(newTime);
    setInitialTime(newTime);
    setEndTime(null);
    setIsActive(false);
    setIsEditing(false);
  }, []);

  // 计算进度百分比
  const progress = useMemo(() => {
    if (initialTime === 0) return 0;
    return Math.max(0, Math.min(100, ((initialTime - timeLeft) / initialTime) * 100));
  }, [timeLeft, initialTime]);

  return {
    mode,
    setMode,
    customMinutes,
    initialTime,
    timeLeft,
    setTimeLeft,
    isActive,
    taskName,
    setTaskName,
    dailyStats,
    isEditing,
    setIsEditing,
    switchMode,
    resetTimer,
    toggleTimer,
    handleCustomTimeSubmit,
    progress
  };
};
