import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from '@/components/ui/toaster';
import { useAccountStore } from '@/store/account';
import { Router } from './router.tsx';
import './index.css';

const App = () => {
  const accountStore = useAccountStore();

  useEffect(() => {
    // Load services
    const lsServices = localStorage.getItem('account-services');
    const accountServices = lsServices ? JSON.parse(lsServices) : ['instagram', 'youtube'];
    accountStore.setServices(accountServices, false);
    // Load account emails
    const lsAccounts = localStorage.getItem('account-emails');
    const accountEmails = lsAccounts
      ? JSON.parse(lsAccounts)
      : ['georgelucas@gmail.com', 'stevenspielberg@gmail.com', 'tarantino@gmail.com'];
    accountStore.setAccounts(accountEmails, false);
  }, []);

  return (
    <>
      <Router />
      <Toaster />
    </>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
