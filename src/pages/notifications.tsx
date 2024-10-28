import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/store/app';
import { useNotificationStore } from '@/store/notification';
import type { MyNotification } from '@/typings/state/notification';

export const NotificationsPage = () => {
  const appStore = useAppStore();
  const notificationStore = useNotificationStore();

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Notificaciones',
      hideFooter: true,
    });
  }, []);

  const NotificationItem = (props: MyNotification) => {
    const isMsgReadClass = props.read ? 'bg-white border-slate-200' : 'bg-amber-50 border-amber-300';
    return (
      <div className={`flex px-2 py-2.5 gap-3 border rounded-md ${isMsgReadClass}`}>
        <div className="w-10 h-10 mt-0.5 p-0.5">
          <img src={props.imgUrl} alt={`n${props.id}`} />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <div className="text-sm font-semibold text-slate-800 line-clamp-2">{props.title}</div>
          <div className="text-sm text-slate-700 line-clamp-3">{props.description}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-rows-[auto] gap-4">
      <div className="overflow-auto">
        <div className="h-0">
          <div className="flex flex-col gap-3">
            {notificationStore.notifications.map(a => (
              <Link to={`/notifications/${a.id}`} key={`n-${a.id}`}>
                <NotificationItem {...a} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
