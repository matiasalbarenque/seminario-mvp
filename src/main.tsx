import { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from '@/components/ui/toaster';
import { useServiceStore } from '@/store/service';
import { useAccountStore } from '@/store/account';
//import { useNotificationStore } from '@/store/notification';
import { LOCAL_STORAGE } from '@/constants';
import { Router } from './router.tsx';

import { getRiskAvgLevel, servicesPreparation } from '@/assets/utils';
import './index.css';

const App = () => {
  const isInit = useRef(false);
  const serviceStore = useServiceStore();
  const accountStore = useAccountStore();
  //const notificationStore = useNotificationStore();

  useEffect(() => {
    if (!isInit.current) {
      isInit.current = true;
      loadStorageData();
      //notificationStore.initNotifications();
    }
  }, []);

  const loadStorageData = () => {
    // Prepare services
    const services = servicesPreparation();
    serviceStore.setServices(services);

    // Load my services
    const lsServices = localStorage.getItem(LOCAL_STORAGE.MY_SERVICES);
    const myServices = lsServices ? JSON.parse(lsServices) : [];
    accountStore.setMyServices(myServices);
    const riskAvgLevel = getRiskAvgLevel(services, myServices);
    accountStore.setRiskLevel(riskAvgLevel);

    // Load account emails
    const lsAccounts = localStorage.getItem(LOCAL_STORAGE.ACCOUNT_EMAILS);
    const accountEmails = lsAccounts
      ? JSON.parse(lsAccounts)
      : ['georgelucas@gmail.com', 'stevenspielberg@gmail.com', 'tarantino@gmail.com'];
    accountStore.setAccounts(accountEmails, false);

    // Load terms accepted
    const lsTermsAccepted = localStorage.getItem(LOCAL_STORAGE.TERMS_ACCEPTED);
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
