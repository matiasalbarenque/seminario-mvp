import { useMemo } from 'react';
import { servicesMock } from '@/assets/mocks/services';
import { useAccountStore } from '@/store/account';

export const useMyServices = () => {
  const accountStore = useAccountStore();
  const servicesOrdered = useMemo(
    () => servicesMock.sort((a, b) => b.riskLevel.localeCompare(a.riskLevel) || a.name.localeCompare(b.name)),
    []
  );
  const myServices = servicesOrdered.filter(a => accountStore.services.some(b => b === a?.name));
  return myServices || [];
};
