import { Outlet } from 'react-router-dom';
import { useAppStore } from '@/store/app';
import { Header } from '../header';
import { Footer } from '../footer';

export const GeneralLayout = () => {
  const appStore = useAppStore();

  return (
    <div className="min-h-dvh flex flex-col">
      <Header title={appStore.appConfig.pageTitle} />
      <main className="flex-1 p-4 grid">
        <Outlet />
      </main>
      {!appStore.appConfig.hideFooter && <Footer />}
    </div>
  );
};
