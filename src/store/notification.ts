import { create } from 'zustand';
import { notificationsMock } from '@/assets/mocks/notifications';
import { getRandomNumberInRange } from '@/assets/utils';
import type { MyNotification, NotificationState } from '@/typings/state/notification';

let interval: NodeJS.Timeout;

export const useNotificationStore = create<NotificationState>()((set, get) => ({
  notifications: [],
  initNotifications: () => {
    interval = setInterval(() => {
      get().sendNotification();
    }, 30000);
  },
  sendNotification: () => {
    const myNotiIds = get().notifications.map(a => a.id);
    const notiAvailable = notificationsMock.filter(a => !myNotiIds.includes(a.id));
    if (notiAvailable.length > 0) {
      const notiIndex = getRandomNumberInRange(0, notiAvailable.length - 1);
      const newNoti = notificationsMock.find(a => a.id === notiAvailable[notiIndex].id);
      if (newNoti) {
        get().setNotifications({
          ...newNoti,
          read: false,
        });
      }
    } else {
      clearInterval(interval);
    }
  },
  setNotifications: (noti: MyNotification) => {
    set({ notifications: [...get().notifications, noti] });
  },
  markNotificationAsRead: (noti: MyNotification) => {
    const myOtherNoti = get().notifications.filter(a => a.id !== noti.id);
    set({
      notifications: [
        ...myOtherNoti,
        {
          ...noti,
          read: true,
        },
      ],
    });
  },
}));
