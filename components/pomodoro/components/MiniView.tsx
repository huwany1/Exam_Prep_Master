import React from 'react';
import { Timer } from 'lucide-react';

interface MiniViewProps {
  timeLeft: number;
  progress: number;
}

/**
 * MiniView 组件
 * 最小化时的视图，显示小进度环和剩余分钟数。
 */
export const MiniView: React.FC<MiniViewProps> = ({ timeLeft, progress }) => {
  const miniRadius = 28;
  const miniStroke = 3;
  const miniNormalizedRadius = miniRadius - miniStroke * 2;
  const miniCircumference = miniNormalizedRadius * 2 * Math.PI;
  const miniStrokeDashoffset = miniCircumference - ((100 - progress) / 100) * miniCircumference;

  return (
    <div className="pomodoro-mini-wrapper">
      <svg
        className="pomodoro-mini-progress"
        width={miniRadius * 2}
        height={miniRadius * 2}
        viewBox={`0 0 ${miniRadius * 2} ${miniRadius * 2}`}
      >
        <circle
          className="pomodoro-mini-circle-bg"
          strokeWidth={miniStroke}
          fill="transparent"
          r={miniNormalizedRadius}
          cx={miniRadius}
          cy={miniRadius}
        />
        <circle
          className="pomodoro-mini-circle-fg"
          strokeWidth={miniStroke}
          fill="transparent"
          r={miniNormalizedRadius}
          cx={miniRadius}
          cy={miniRadius}
          style={{ 
            strokeDasharray: miniCircumference + ' ' + miniCircumference, 
            strokeDashoffset: miniStrokeDashoffset 
          }}
        />
      </svg>
      <div className="pomodoro-mini-content">
        <Timer className="pomodoro-mini-icon" />
        <span className="pomodoro-mini-time">{Math.ceil(timeLeft / 60)}m</span>
      </div>
    </div>
  );
};
