import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { useServiceStore } from '@/store/service';
import { useAccountStore } from '@/store/account';
import type { Service } from '@/typings/mocks/services';

const isRiskyService = (service: Service) => {
  if (service.termsConditionsRisks) {
    const tcr = service.termsConditionsRisks;
    if (tcr.e && tcr.e.length > 0) return true;
    if (tcr.d && tcr.d.length > 0) return true;
    if (tcr.c && tcr.c.length > 0) return true;
  }
  return false;
};

export const HomeUsageRisk = () => {
  const serviceStore = useServiceStore();
  const accountStore = useAccountStore();

  const servicesInUsageFiltered = useMemo(
    () => accountStore.myServices.filter(a => a.usage),
    [accountStore.myServices]
  );
  const servicesInUsage = useMemo(
    () =>
      serviceStore.services
        .filter(a => servicesInUsageFiltered.some(b => b.name === a.name))
        .filter(c => isRiskyService(c)),
    [servicesInUsageFiltered]
  );

  if (servicesInUsage.length === 0) {
    return <></>;
  }

  return (
    <div className="p-3">
      <Card className="shadow-none">
        <CardHeader className="py-4">
          <CardTitle>
            Servicios comprometidos{' '}
            <div className="inline-block ml-0.5 w-6 py-0.5 rounded-full bg-red-600 text-sm text-white text-center font-medium">
              {servicesInUsage.length}
            </div>
          </CardTitle>
          <CardDescription>Uno o más servicios que usas podrían estar afectándote</CardDescription>
        </CardHeader>
        <CardContent className="max-h-64 overflow-auto">
          <div className="flex flex-col gap-2.5">
            {servicesInUsage.map(a => (
              <Link to={`/services/${a.name}`} key={a.name}>
                <div className="w-full h-14 flex gap-2 bg-white rounded-md shadow">
                  <div className="w-16 p-2 flex justify-center items-center">
                    <img src={`/img/apps/${a.imgUrl}`} alt={a.label} className="w-8 h-auto" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-md font-medium line-clamp-1">{a.label}</div>
                  </div>
                  <div className="w-14 flex justify-center items-center">
                    <Icon icon="ic:baseline-keyboard-arrow-right" size={26} className="opacity-60" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
