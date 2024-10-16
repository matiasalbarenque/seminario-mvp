import { useEffect } from 'react';
import { useAppStore } from '@/store/app';

export const NotificationsPage = () => {
  const appStore = useAppStore();

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Notifications',
      hideFooter: true,
    });
  }, []);

  return (
    <div className="grid grid-rows-[auto] gap-4">
      <div className="overflow-auto">
        <div className="h-0">
          <div className="flex flex-col items-start gap-3">Notifications</div>
        </div>
      </div>
    </div>
  );
};
