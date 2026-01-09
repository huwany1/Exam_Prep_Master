import { useCallback } from 'react';

/**
 * useAudio Hook
 * 负责处理音频播放逻辑，特别是风铃声效的生成与播放。
 */
export const useAudio = () => {
  /**
   * 播放提示音
   * 使用 Web Audio API 模拟清脆的风铃声
   */
  const playNotificationSound = useCallback(() => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      
      const ctx = new AudioContext();
      const now = ctx.currentTime;
      
      // 风铃频率：使用五声音阶的高音区 (E6, G6, A6, B6, D7, E7)
      // 这些频率能产生悦耳、清脆、东方的听感
      const frequencies = [1318.51, 1567.98, 1760.00, 1975.53, 2349.32, 2637.02];
      
      // 创建主增益节点来控制整体音量
      const masterGain = ctx.createGain();
      masterGain.gain.value = 0.5;
      masterGain.connect(ctx.destination);

      // 模拟风吹过，触发一串音符 (3-5个)
      const noteCount = 3 + Math.floor(Math.random() * 3);

      for (let i = 0; i < noteCount; i++) {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        
        // 随机选择一个频率
        const freq = frequencies[Math.floor(Math.random() * frequencies.length)];
        
        // 随机延迟启动 (0s - 0.4s)，模拟风铃被风吹动的随机性
        const startTime = now + Math.random() * 0.4;
        
        // 持续时间 (2s - 4s)，长尾韵是风铃的特点
        const duration = 2.0 + Math.random() * 2.0;

        osc.type = 'sine'; // 正弦波最纯净，适合模拟金属风铃
        osc.frequency.setValueAtTime(freq, startTime);
        
        osc.connect(noteGain);
        noteGain.connect(masterGain);

        // 音量包络：快速敲击(Attack)，缓慢消逝(Decay)
        noteGain.gain.setValueAtTime(0, startTime);
        noteGain.gain.linearRampToValueAtTime(0.2 + Math.random() * 0.2, startTime + 0.03); // Attack
        noteGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration); // Decay

        osc.start(startTime);
        osc.stop(startTime + duration);
      }
    } catch (e) {
      console.error("Audio play failed", e);
    }
  }, []);

  return { playNotificationSound };
};
