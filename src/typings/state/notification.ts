import type { Notification } from '@/typings/mocks/notifications';

export type NotificationState = {
  notifications: MyNotification[];
  initNotifications: () => void;
  sendNotification: () => void;
  setNotifications: (notification: MyNotification) => void;
  markNotificationAsRead: (notification: MyNotification) => void;
};

export type MyNotification = Notification & {
  read: boolean;
};
