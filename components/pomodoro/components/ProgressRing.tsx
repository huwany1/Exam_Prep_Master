import React from 'react';

interface ProgressRingProps {
  radius: number;
  stroke: number;
  progress: number;
  children?: React.ReactNode;
}

/**
 * ProgressRing 组件
 * 显示圆形的进度条背景和前景。
 */
export const ProgressRing: React.FC<ProgressRingProps> = ({ 
  radius, 
  stroke, 
  progress,
  children 
}) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - ((100 - progress) / 100) * circumference;

  return (
    <div className="pomodoro-timer-wrapper">
      <svg
        className="pomodoro-progress-ring"
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      >
        <circle
          className="pomodoro-progress-circle-bg"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="pomodoro-progress-circle-fg"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{ 
            strokeDasharray: circumference + ' ' + circumference, 
            strokeDashoffset 
          }}
        />
      </svg>
      {children}
    </div>
  );
};
