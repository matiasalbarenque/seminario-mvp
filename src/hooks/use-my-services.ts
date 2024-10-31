import { servicesMock } from '@/assets/mocks/services';
import { sortCompareStrings } from '@/assets/utils';
import { useAccountStore } from '@/store/account';
import { Service } from '@/typings/mocks/services';
import { useState, useEffect } from 'react';

const useMyServices = () => {
  const accountStore = useAccountStore();
  const [myServices, setMyServices] = useState<Service[]>([]);

  useEffect(() => {
    const servicesOrdered = servicesMock.sort((a, b) => sortCompareStrings(a.name, b.name));
    const servicesSelected = servicesOrdered.filter(a => accountStore.services.some(b => b === a?.name));
    setMyServices(servicesSelected);
  }, [accountStore.services]);

  return myServices;
};

export default useMyServices;
