import { NavLink } from 'react-router-dom';
import { Icon } from '@/components/ui/icon';

export const Footer = () => {
  return (
    <footer className="w-full h-14 flex border-t tabs-component">
      <div className="flex-1 flex justify-center items-center">
        <NavLink to="/">
          <div className="flex flex-col justify-center items-center gap-1">
            <Icon icon="iconoir:home-alt-slim-horiz" size={20} />
            <div className="btn-text text-xs leading-tight">Home</div>
          </div>
        </NavLink>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <NavLink to="/services">
          <div className="flex flex-col justify-center items-center gap-1">
            <Icon icon="tabler:apps" size={20} />
            <div className="btn-text text-xs leading-tight">Services</div>
          </div>
        </NavLink>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <NavLink to="/accounts">
          <div className="flex flex-col justify-center items-center gap-1">
            <Icon icon="lets-icons:e-mail-light" size={20} />
            <div className="btn-text text-xs leading-tight">Accounts</div>
          </div>
        </NavLink>
      </div>
    </footer>
  );
};
