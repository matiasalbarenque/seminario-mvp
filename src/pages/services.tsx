import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { LevelIndicator } from '@/components/level-indicator';
import { useAppStore } from '@/store/app';
import { useAccountStore } from '@/store/account';
import { servicesMock } from '@/assets/mocks/services';
import { sortCompareStrings } from '@/assets/utils';
import type { Service } from '@/typings/mocks/services';

export const ServicesPage = () => {
  const appStore = useAppStore();
  const accountStore = useAccountStore();
  const [myServices, setMyServices] = useState<Service[]>([]);

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Services',
    });
  }, []);

  useEffect(() => {
    const servicesOrdered = servicesMock.sort((a, b) => sortCompareStrings(a.name, b.name));
    const servicesSelected = servicesOrdered.filter(a => accountStore.services.some(b => b === a?.name));
    setMyServices(servicesSelected);
  }, [accountStore.services]);

  const ServicesList = (props: { services: Service[] }) => {
    if (props.services.length === 0) {
      return (
        <Alert>
          <Icon icon="healthicons:artificial-intelligence" size={20} />
          <AlertTitle>No service selected yet!</AlertTitle>
          <AlertDescription>Start selecting your services by clicking the "Select Services" button</AlertDescription>
        </Alert>
      );
    }
    return myServices.map(a => (
      <Link to={`/services/${a.name}`} key={a.name}>
        <div className="w-full h-12 flex gap-2.5 rounded-[6px] border shadow-sm overflow-hidden">
          <div className="w-14 flex items-center">
            <div className="absolute -left-1 w-16 h-16 p-4 bg-white border rounded-tr-full rounded-br-full overflow-hidden shadow">
              <img src={`/img/apps/${a.imgUrl}`} alt={a.label} />
            </div>
          </div>
          <div className="w-full flex justify-between px-3 py-1.5">
            <div className="flex-1 flex items-center text-sm">{a.label}</div>
            <div className="w-10 flex items-center">
              <LevelIndicator riskLevel={a.riskLevel} />
            </div>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className="grid grid-rows-[min-content,auto] gap-4">
      <div className="flex justify-end">
        <Button asChild variant="outline">
          <Link to="/services-selection" className="gap-2">
            Select Services
            <Icon icon="radix-icons:switch" size={18} />
          </Link>
        </Button>
      </div>
      <div className="overflow-auto">
        <div className="h-0 flex flex-col gap-3">
          <ServicesList services={myServices} />
        </div>
      </div>
    </div>
  );
};
