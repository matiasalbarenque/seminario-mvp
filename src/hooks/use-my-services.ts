import { useMemo } from 'react';
import { useServiceStore } from '@/store/service';
import { useAccountStore } from '@/store/account';

export const useMyServices = () => {
  const serviceStore = useServiceStore();
  const accountStore = useAccountStore();
  const myServices = useMemo(
    () => serviceStore.services.filter(a => accountStore.services.some(b => b === a?.name)),
    [accountStore.services]
  );
  return myServices || [];
};
