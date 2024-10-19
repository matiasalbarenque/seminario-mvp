import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components/ui/icon';
import { useNotificationStore } from '@/store/notification';

export const NotificationAlert = () => {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const notificationStore = useNotificationStore();

  useEffect(() => {
    if (notificationStore.notifications.length > 0) {
      setIsVisible(true);
      setIsFading(true);
      setTimeout(() => {
        setIsFading(false);
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }, 8000);
    }
  }, [notificationStore.notifications.length]);

  if (!isVisible) {
    return <></>;
  }

  const baseClass =
    'home-notification absolute top-4 right-4 w-11 h-11 flex justify-center items-center rounded-full animate-in zoom-in-75 duration-700';
  return (
    <Link to="/notifications" className={`${baseClass} ${isFading ? 'opacity-100' : 'opacity-0'}`}>
      <Icon icon="line-md:bell-twotone-loop" size={26} className="mb-1 text-white text-opacity-90" />
    </Link>
  );
};
