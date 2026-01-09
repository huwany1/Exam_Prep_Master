import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import { Play, Pause, RotateCcw, X, Timer, Edit3, Minus, Target, Trophy } from 'lucide-react';
import './PomodoroTimer.css';

import { useAudio } from './pomodoro/hooks/useAudio';
import { useNotification } from './pomodoro/hooks/useNotification';
import { usePomodoroTimer } from './pomodoro/hooks/usePomodoroTimer';
import { ProgressRing } from './pomodoro/components/ProgressRing';
import { MiniView } from './pomodoro/components/MiniView';
import { MODES } from './pomodoro/constants';
import { TimerMode, PomodoroTimerProps, PomodoroTimerRef } from './pomodoro/types';

// Re-export types for compatibility
export type { PomodoroTimerRef, PomodoroTimerProps };

/**
 * 番茄时钟组件
 * 
 * 架构重构版：
 * - 逻辑抽离至自定义 Hooks (useAudio, useNotification, usePomodoroTimer)
 * - UI 组件拆分 (ProgressRing, MiniView)
 * - 保持原有功能和样式兼容
 */
export const PomodoroTimer = forwardRef<PomodoroTimerRef, PomodoroTimerProps>(({ onClose }, ref) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const taskInputRef = useRef<HTMLInputElement>(null);

  const { playNotificationSound } = useAudio();
  const { sendNotification, requestPermission } = useNotification();

  // 计时结束时的回调
  const handleTimerComplete = useCallback((completedMode: TimerMode) => {
    sendNotification("番茄钟", `${MODES[completedMode].label}时间结束！`);
    playNotificationSound();
  }, [sendNotification, playNotificationSound]);

  // 使用核心计时逻辑 Hook
  const {
    mode,
    setMode,
    customMinutes,
    initialTime,
    timeLeft,
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
  } = usePomodoroTimer({ onTimerComplete: handleTimerComplete });

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    handleToggle: () => {
      // 任务是否"未完成"：正在运行，或者（处于暂停状态且时间走过了一点）
      const isTaskInProgress = isActive || (timeLeft < initialTime && timeLeft > 0);
      
      if (isTaskInProgress) {
        // 任务进行中，切换折叠状态
        setIsCollapsed(prev => !prev);
      } else {
        // 初始状态或已结束，直接关闭
        onClose();
      }
    }
  }));

  // 处理自定义时间输入框的自动聚焦
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  /**
   * 处理关闭按钮点击
   */
  const handleClose = () => {
    // 任务是否"未完成"：正在运行，或者（处于暂停状态且时间走过了一点）
    const isTaskInProgress = isActive || (timeLeft < initialTime && timeLeft > 0);
    
    if (isTaskInProgress) {
      setIsCollapsed(true);
    } else {
      onClose();
    }
  };

  /**
   * 格式化时间
   */
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  /**
   * 处理键盘事件
   */
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (inputRef.current) {
         handleCustomTimeSubmit(parseInt(inputRef.current.value, 10));
      }
    } else if (e.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <div 
      className={`pomodoro-container pomodoro-mode-${mode} ${isCollapsed ? 'collapsed' : ''}`}
      onClick={(e) => {
          if (isCollapsed) {
              setIsCollapsed(false);
          }
      }}
      title={isCollapsed ? "点击展开" : ""}
    >
      {/* Mini View Component */}
      <MiniView timeLeft={timeLeft} progress={progress} />

      {/* Full View Wrapper */}
      <div className="pomodoro-full-wrapper">
        <div className="pomodoro-header">
            <div className="pomodoro-title">
            <Timer className="w-4 h-4" />
            <span>番茄专注</span>
            </div>
            <div className="pomodoro-header-actions">
            <button 
                onClick={(e) => {
                    e.stopPropagation(); 
                    setIsCollapsed(true);
                }} 
                className="pomodoro-action-btn" 
                title="最小化"
            >
                <Minus className="w-4 h-4" />
            </button>
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                }} 
                className="pomodoro-action-btn" 
                title={isActive || (timeLeft < initialTime && timeLeft > 0) ? "任务进行中，关闭将最小化" : "关闭"}
            >
                <X className="w-4 h-4" />
            </button>
            </div>
        </div>

        <div className="pomodoro-body">
            <div className="pomodoro-tabs">
            {(Object.keys(MODES) as TimerMode[]).map((m) => {
                const isInitialState = !isActive && (timeLeft === initialTime || timeLeft === 0);
                const isCurrentMode = mode === m;
                
                return (
                    <div
                    key={m}
                    className={`pomodoro-tab ${isCurrentMode ? 'active' : ''} ${!isInitialState && !isCurrentMode ? 'disabled' : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        switchMode(m);
                    }}
                    title={!isInitialState && !isCurrentMode ? "计时进行中，请先重置后再切换模式" : ""}
                    style={{
                        cursor: !isInitialState && !isCurrentMode ? 'not-allowed' : 'pointer',
                        opacity: !isInitialState && !isCurrentMode ? 0.5 : 1
                    }}
                    >
                    {MODES[m].label}
                    </div>
                );
            })}
            </div>

            {/* 任务目标输入区 */}
            <div className={`pomodoro-task-wrapper ${mode === 'work' || mode === 'custom' ? 'expanded' : ''}`}>
              <div className="pomodoro-task-inner">
                <div className={`pomodoro-task-section ${isActive ? 'active' : ''}`}>
                  <div className="pomodoro-task-icon-wrapper">
                    <Target className="w-4 h-4" />
                  </div>
                  <input
                    ref={taskInputRef}
                    type="text"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    placeholder="输入当前的专注目标..."
                    className="pomodoro-task-input"
                    disabled={isActive}
                    title={isActive ? "专注中..." : "设定你的专注目标"}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        taskInputRef.current?.blur();
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* 进度环组件 */}
            <ProgressRing radius={88} stroke={5} progress={progress}>
              {isEditing ? (
                  <div className="pomodoro-input-container">
                  <input
                      ref={inputRef}
                      type="number"
                      defaultValue={customMinutes}
                      className="pomodoro-time-input"
                      onBlur={() => inputRef.current && handleCustomTimeSubmit(parseInt(inputRef.current.value, 10))}
                      onKeyDown={handleKeyDown}
                      min="1"
                      onClick={(e) => e.stopPropagation()}
                  />
                  <span className="pomodoro-input-label">分钟</span>
                  </div>
              ) : (
                  <div 
                  className={`pomodoro-timer-display ${mode === 'custom' && !isActive ? 'clickable' : ''}`}
                  onClick={(e) => {
                      e.stopPropagation();
                      if (mode === 'custom' && !isActive) setIsEditing(true);
                  }}
                  title={mode === 'custom' && !isActive ? "点击修改时长" : ""}
                  >
                  {formatTime(timeLeft)}
                  {mode === 'custom' && !isActive && (
                      <Edit3 className="pomodoro-edit-icon" />
                  )}
                  </div>
              )}
            </ProgressRing>

            <div className="pomodoro-controls">
            <button 
                className="pomodoro-btn pomodoro-btn-primary"
                onClick={(e) => {
                    e.stopPropagation();
                    if (!isActive) {
                        requestPermission();
                    }
                    toggleTimer();
                }}
                disabled={isEditing}
            >
                {isActive ? (
                <>
                    <Pause className="w-4 h-4 mr-2" /> 暂停
                </>
                ) : (
                <>
                    {timeLeft === 0 ? <RotateCcw className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />} 
                    {timeLeft === 0 ? "再来一次" : (timeLeft < initialTime ? "继续" : "开始")}
                </>
                )}
            </button>
            
            <button 
                className="pomodoro-btn pomodoro-btn-secondary"
                onClick={(e) => {
                    e.stopPropagation();
                    resetTimer();
                }}
                title="重置"
                disabled={isEditing}
            >
                <RotateCcw className="w-4 h-4" />
            </button>
            </div>
            
            <div className="pomodoro-stats">
                <Trophy className="w-3 h-3 text-yellow-500 mr-1" />
                <span className="text-xs text-slate-500 font-medium">
                    今日专注：{dailyStats.date === new Date().toDateString() ? dailyStats.count : 0} 个番茄
                </span>
            </div>
        </div>
      </div>
    </div>
  );
});

PomodoroTimer.displayName = 'PomodoroTimer';
