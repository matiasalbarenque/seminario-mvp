import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { LevelIndicator } from '@/components/level-indicator';
import { useAppStore } from '@/store/app';
import { useAccountStore } from '@/store/account';
import { services } from '@/assets/mocks/services';
import { sortCompareStrings } from '@/assets/utils/utils';
import type { Service } from '@/typings/mocks/services';

export const ServicesPage = () => {
  const appStore = useAppStore();
  const accountStore = useAccountStore();
  const [myServices, setMyServices] = useState<Service[]>([]);

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Services',
    });
    const servicesOrdered = services.sort((a, b) => sortCompareStrings(a.name, b.name));
    const servicesSelected = servicesOrdered.filter(a => accountStore.services.some(b => b === a?.name));
    setMyServices(servicesSelected);
  }, [accountStore.services]);

  return (
    <div className="grid grid-rows-[min-content,auto] gap-4">
      <div className="flex justify-end">
        <Button asChild variant="outline">
          <Link to="/services-selection" className="gap-2">
            <Icon icon="mdi:format-list-checks" size={18} />
            Customize list
          </Link>
        </Button>
      </div>
      <div className="overflow-auto">
        <div className="h-0 flex flex-col gap-3">
          {myServices.map(a => (
            <Link to={`/services/${a.name}`} key={a.name}>
              {/* <div className="w-full flex gap-2.5 px-2 py-1.5 rounded-[6px] border shadow-sm overflow-hidden">
                <div className="w-9">
                  <div className="w-9 h-9 p-1.5 border rounded-full overflow-hidden">
                    <img src={`/img/apps/${a.imgUrl}`} alt={a.label} />
                  </div>
                </div>
                <div className="flex-1 flex items-center text-sm">{a.label}</div>
                <div className="w-10 flex items-center">
                  <LevelIndicator riskLevel={a.riskLevel} />
                </div>
              </div> */}
              <div className="w-full h-12 flex gap-2.5 rounded-[6px] border shadow-sm overflow-hidden">
                <div className="w-14 flex items-center">
                  <div className="absolute -left-1 w-16 h-16 p-4 bg-white border rounded-tr-full rounded-br-full overflow-hidden shadow">
                    <img src={`/img/apps/${a.imgUrl}`} alt={a.label} />
                  </div>
                </div>
                <div className="w-full flex justify-between px-2 pl-3 py-1.5">
                  <div className="flex-1 flex items-center text-sm">{a.label}</div>
                  <div className="w-10 flex items-center">
                    <LevelIndicator riskLevel={a.riskLevel} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
