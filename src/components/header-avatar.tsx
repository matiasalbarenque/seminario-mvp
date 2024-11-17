import { Link } from 'react-router-dom';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';
import { useNotificationStore } from '@/store/notification';

export const HeaderAvatar = () => {
  const notificationStore = useNotificationStore();
  const notiCounter = notificationStore.notifications.filter(a => !a.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <div>
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-20 scale-110" />
          <Avatar>
            <AvatarImage src="/img/avatars/persona1.png" alt="Esteban" />
          </Avatar>
          {notiCounter > 0 && (
            <div className="absolute w-5 h-5 -left-1 bottom-0 flex justify-center items-center bg-red-600 rounded-full scale-90">
              <div className="text-sm text-white font-semibold scale-90">{notiCounter}</div>
            </div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem disabled>
          <Icon icon="solar:user-rounded-linear" size={18} className="mr-2" />
          Mi perfil
        </DropdownMenuItem>
        <Link to="/notifications" className="pointer-events-none">
          <DropdownMenuItem disabled>
            <div className="mr-2">
              <Icon icon="ion:notifications-outline" size={18} />
              {notiCounter > 0 && <div className="absolute w-2 h-2 right-0 top-0 bg-red-600 rounded-full scale-90" />}
            </div>
            Notificaciones
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem disabled>
          <Icon icon="solar:settings-outline" size={18} className="mr-2" />
          Configuración
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>
          <Icon icon="solar:logout-outline" size={18} className="mr-2" />
          Cerrar sesión
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
