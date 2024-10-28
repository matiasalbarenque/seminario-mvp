import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from '@/components/ui/toaster';
import { useAccountStore } from '@/store/account';
//import { useNotificationStore } from '@/store/notification';
import { Router } from './router.tsx';
import { servicesMock } from '@/assets/mocks/services';

import { getRiskAvgLevel } from '@/assets/utils';
import './index.css';

const App = () => {
  const accountStore = useAccountStore();
  //const notificationStore = useNotificationStore();

  useEffect(() => {
    loadStorageData();
    //notificationStore.initNotifications();
  }, []);

  const loadStorageData = () => {
    // Load services
    const lsServices = localStorage.getItem('account-services');
    const myServices = lsServices ? JSON.parse(lsServices) : [];
    const riskAvgLevel = getRiskAvgLevel(servicesMock, myServices);
    accountStore.setRiskLevel(riskAvgLevel);
    accountStore.setServices(myServices, false);

    // Load account emails
    const lsAccounts = localStorage.getItem('account-emails');
    const accountEmails = lsAccounts
      ? JSON.parse(lsAccounts)
      : ['georgelucas@gmail.com', 'stevenspielberg@gmail.com', 'tarantino@gmail.com'];
    accountStore.setAccounts(accountEmails, false);

    // Load terms accepted
    const lsTermsAccepted = localStorage.getItem('terms-accepted');
    accountStore.setTermsAccepted(JSON.parse(lsTermsAccepted || 'false'), false);
  };

  return (
    <>
      <Router />
      <Toaster />
    </>
  );
};

createRoot(document.getElementById('root')!).render(<App />);
