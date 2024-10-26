import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Icon } from '@/components/ui/icon';
import { useAppStore } from '@/store/app';
import { useNotificationStore } from '@/store/notification';
import { formatDate } from '@/assets/utils';
import type { MyNotification } from '@/typings/state/notification';

export const NotificationsDetailsPage = () => {
  const params = useParams();
  const appStore = useAppStore();
  const notificationStore = useNotificationStore();
  const [notification, setNotification] = useState<MyNotification>();

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Detalle',
      hideFooter: true,
    });
    const noti = notificationStore.notifications.find(a => a.id === params?.id);
    if (noti) {
      setNotification(noti);
      notificationStore.markNotificationAsRead(noti);
    }
  }, []);

  if (!notification) {
    return <></>;
  }

  return (
    <div className="grid grid-rows-[auto] gap-4">
      <div className="overflow-auto">
        <div className="h-0">
          <div className="flex flex-col items-start gap-3">
            <div className="w-full h-20 flex justify-center items-center">
              <img src={notification?.imgUrl} className="w-16 h-16" />
            </div>
            <div className="flex flex-col justify-center gap-2 text-center">
              <div className="font-semibold text-slate-800">{notification?.title}</div>
              <div className="flex justify-center gap-1">
                <Icon icon="solar:calendar-linear" size={18} className="text-slate-600" />
                <div className="text-sm font-medium text-slate-500">{formatDate(notification?.date || '')}</div>
              </div>
            </div>
          </div>
          <div className="mx-16">
            <div className="w-full my-5 border-b border-slate-300" />
          </div>
          <div className="px-2 text-md text-justify leading-relaxed">{notification?.description}</div>
        </div>
      </div>
    </div>
  );
};
