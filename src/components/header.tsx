import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/ui/icon';
import { HeaderAvatar } from './header-avatar';
import type { HeaderProps } from '@/typings/components/header';

export const Header = (props: HeaderProps) => {
  const { title } = props;
  const navigate = useNavigate();

  return (
    <header className="w-full p-2 flex gap-2 border-b">
      <button className="w-10 h-10 flex justify-center items-center" onClick={() => navigate(-1)}>
        <Icon icon="solar:arrow-left-outline" size={26} />
      </button>
      <div className="flex-1 px-6 flex justify-center items-center font-medium text-center leading-tight">{title}</div>
      <div className="avatar-wrapper w-10 h-10 flex justify-center items-center">
        <HeaderAvatar />
      </div>
    </header>
  );
};
