import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Icon } from '@/components/ui/icon';
import type { HeaderProps } from '@/typings/components/header';

export const Header = (props: HeaderProps) => {
  const { title } = props;
  const navigate = useNavigate();

  return (
    <header className="w-full p-2 flex gap-2 border-b">
      <button className="w-10 h-10 flex justify-center items-center" onClick={() => navigate(-1)}>
        <Icon icon="solar:arrow-left-outline" size={26} />
      </button>
      <div className="flex-1 flex justify-center items-center font-medium">{title}</div>
      <div className="w-10 h-10 flex justify-center items-center">
        <Avatar>
          <AvatarImage src="/img/avatars/persona1.png" alt="Esteban" />
        </Avatar>
      </div>
    </header>
  );
};
