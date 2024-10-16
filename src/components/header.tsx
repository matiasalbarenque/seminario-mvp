import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Icon } from '@/components/ui/icon';
import type { HeaderProps } from '@/typings/components/header';

export const Header = (props: HeaderProps) => {
  const { title } = props;
  const navigate = useNavigate();

  const notificationCounter = 9;

  return (
    <header className="w-full p-2 flex gap-2 border-b">
      <button className="w-10 h-10 flex justify-center items-center" onClick={() => navigate(-1)}>
        <Icon icon="solar:arrow-left-outline" size={26} />
      </button>
      <div className="flex-1 flex justify-center items-center font-medium">{title}</div>
      <div className="avatar-wrapper w-10 h-10 flex justify-center items-center">
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <div>
              <Avatar>
                <AvatarImage src="/img/avatars/persona1.png" alt="Esteban" />
              </Avatar>
              {notificationCounter > 0 && (
                <div className="absolute w-5 h-5 -left-1 bottom-0 flex justify-center items-center bg-red-600 rounded-full scale-90">
                  <div className="text-sm text-white font-semibold scale-90">{notificationCounter}</div>
                </div>
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Icon icon="solar:user-rounded-linear" size={18} className="mr-2" />
              Profile
            </DropdownMenuItem>
            <Link to="/notifications">
              <DropdownMenuItem>
                <div className="mr-2">
                  <Icon icon="ion:notifications-outline" size={18} />
                  {notificationCounter > 0 && (
                    <div className="absolute w-2 h-2 right-0 top-0 bg-red-600 rounded-full scale-90" />
                  )}
                </div>
                Notifications
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
              <Icon icon="solar:settings-outline" size={18} className="mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Icon icon="solar:logout-outline" size={18} className="mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
