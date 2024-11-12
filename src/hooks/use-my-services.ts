import { useMemo } from 'react';
import { useServiceStore } from '@/store/service';
import { useAccountStore } from '@/store/account';

export const useMyServices = () => {
  const serviceStore = useServiceStore();
  const accountStore = useAccountStore();
  const myServices = useMemo(
    () => serviceStore.services.filter(a => accountStore.myServices.some(b => b.name === a?.name)),
    [accountStore.myServices]
  );
  return myServices || [];
};
