import { NavLink } from 'react-router-dom';
import { Icon } from '@/components/ui/icon';
import type { FooterProps } from '@/typings/components/footer';

export const Footer = (props: FooterProps) => {
  return (
    <footer className={`w-full h-14 flex bg-white border-t tabs-component ${props.className}`}>
      <div className="flex-1 flex justify-center items-center">
        <NavLink to="/">
          <div className="flex flex-col justify-center items-center gap-1">
            <Icon icon="material-symbols:home-outline-rounded" size={20} />
            <Icon icon="material-symbols:home-rounded" size={20} className="active" />
            <div className="btn-text text-xs leading-tight">Home</div>
          </div>
        </NavLink>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <NavLink to="/services">
          <div className="flex flex-col justify-center items-center gap-1">
            <Icon icon="tabler:apps" size={20} />
            <Icon icon="tabler:apps-filled" size={20} className="active" />
            <div className="btn-text text-xs leading-tight">Services</div>
          </div>
        </NavLink>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <NavLink to="/accounts">
          <div className="flex flex-col justify-center items-center gap-1">
            <Icon icon="ion:mail-outline" size={20} />
            <Icon icon="ion:mail-sharp" size={20} className="active" />
            <div className="btn-text text-xs leading-tight">Accounts</div>
          </div>
        </NavLink>
      </div>
    </footer>
  );
};
