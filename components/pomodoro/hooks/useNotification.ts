import { useCallback } from 'react';

/**
 * useNotification Hook
 * 负责管理浏览器通知权限和发送通知。
 */
export const useNotification = () => {
  /**
   * 请求通知权限
   * 建议在用户交互（如点击按钮）时调用
   */
  const requestPermission = useCallback(async () => {
    if ('Notification' in window && Notification.permission === 'default') {
      try {
        await Notification.requestPermission();
      } catch (e) {
        console.error("Failed to request notification permission", e);
      }
    }
  }, []);

  /**
   * 发送桌面通知
   * @param title 通知标题
   * @param body 通知内容
   */
  const sendNotification = useCallback((title: string, body: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, { body, icon: '/favicon.ico' });
      } catch (e) {
        console.error("Failed to send notification", e);
      }
    }
  }, []);

  return { requestPermission, sendNotification };
};
