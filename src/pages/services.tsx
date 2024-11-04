import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { useAppStore } from '@/store/app';
import type { ServiceMock, ServiceCategoryWrapperProps, TermsConditionsRisks } from '@/typings/mocks/services';
import { useMyServices } from '@/hooks/use-my-services';
import { getDescriptionByRiskLevel, getIconByRiskLevel } from '@/assets/utils';

export const ServicesPage = () => {
  const appStore = useAppStore();
  const myServices = useMyServices();

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Servicios',
    });
  }, []);

  const getServiceTermsConditionsRisks = (tcr?: TermsConditionsRisks) => {
    const cases: string[] = [];
    if (tcr?.e) {
      const aCases = tcr?.e.map(a => a.imgUrl);
      cases.push(...aCases.filter(a => typeof a === 'string'));
    }
    if (tcr?.d) {
      const aCases = tcr?.d.map(a => a.imgUrl);
      cases.push(...aCases.filter(a => typeof a === 'string'));
    }
    if (tcr?.c) {
      const aCases = tcr?.c.map(a => a.imgUrl);
      cases.push(...aCases.filter(a => typeof a === 'string'));
    }
    if (tcr?.b) {
      const aCases = tcr?.b.map(a => a.imgUrl);
      cases.push(...aCases.filter(a => typeof a === 'string'));
    }
    if (tcr?.a) {
      const aCases = tcr?.a.map(a => a.imgUrl);
      cases.push(...aCases.filter(a => typeof a === 'string'));
    }
    return cases.slice(0, 4);
  };

  const ServiceCases = (props: { service: ServiceMock }) => {
    const { service } = props;
    const serviceCases = getServiceTermsConditionsRisks(service.termsConditionsRisks);
    return (
      <div className="w-24 h-10">
        {serviceCases.map((imgUrl, index) => (
          <div
            className={`absolute top-0 w-10 h-10 bg-white border border-black rounded-full overflow-hidden`}
            style={{ right: index * 18, zIndex: index }}
            key={imgUrl}
          >
            <img src={`/img/cases/${imgUrl}`} alt={imgUrl} className="w-full h-full" />
          </div>
        ))}
      </div>
    );
  };

  const ServiceCategoryWrapper = (props: ServiceCategoryWrapperProps) => {
    const { children, riskLevel } = props;

    let borderColor = '';
    if (riskLevel === 'e') {
      borderColor = 'border-level-e';
    } else if (riskLevel === 'd') {
      borderColor = 'border-level-d';
    } else if (riskLevel === 'c') {
      borderColor = 'border-level-c';
    } else if (riskLevel === 'b') {
      borderColor = 'border-level-b';
    } else if (riskLevel === 'a') {
      borderColor = 'border-level-a';
    }

    return (
      <div className="flex flex-col">
        <div className={`px-2 h-12 flex items-center rounded-tl-md rounded-tr-md bg-level-${riskLevel}`}>
          <div className="flex gap-2 items-center">
            <div className="w-14 h-4 flex justify-center">
              <div
                className={`absolute -top-8 w-14 h-14 p-2 border-[5px] ${borderColor} border-opacity-100 rounded-full`}
                style={{ backgroundColor: '#fff' }}
              >
                <img src={getIconByRiskLevel(riskLevel)} width="100%" height="100%" />
              </div>
            </div>
            <div className="text-lg text-white tracking-wide drop-shadow-md">
              {getDescriptionByRiskLevel(riskLevel)}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col gap-1.5 p-1.5 bg-level-${riskLevel} bg-opacity-60 rounded-bl-sm rounded-br-sm shadow`}
        >
          {children}
        </div>
      </div>
    );
  };

  const ServicesListCase = ({ cases }: { cases: number }) => {
    if (cases === 0) return <></>;
    return (
      <div className="text-xs text-gray-500">
        {cases} {cases > 1 ? 'casos' : 'caso'}
      </div>
    );
  };

  const ServicesList = (props: { services: ServiceMock[] }) => {
    if (props.services.length === 0) {
      return (
        <Alert>
          <Icon icon="healthicons:artificial-intelligence" size={20} />
          <AlertTitle>Ningún servicio seleccionado</AlertTitle>
          <AlertDescription>Comienza haciendo clic en el botón "Seleccionar servicios"</AlertDescription>
        </Alert>
      );
    }
    const riskLevels = [...new Set(myServices.map(a => a.riskLevel))];
    return riskLevels.map(a => (
      <ServiceCategoryWrapper riskLevel={a} key={a}>
        {myServices
          .filter(b => b.riskLevel === a)
          .map(c => (
            <Link to={`/services/${c.name}`} key={c.name}>
              <div className="w-full h-14 flex gap-3 rounded-[3px] bg-white overflow-hidden">
                <div className="w-[72px] p-2 flex justify-center items-center border-r">
                  <img src={`/img/apps/${c.imgUrl}`} alt={c.label} className="w-8 h-auto" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-sm font-semibold line-clamp-1">{c.label}</div>
                  <ServicesListCase cases={c.casesCounter[a]} />
                </div>
                <div className="w-28 flex justify-center items-center">
                  <ServiceCases service={c} />
                </div>
              </div>
            </Link>
          ))}
      </ServiceCategoryWrapper>
    ));
  };

  return (
    <div className="grid grid-rows-[auto] gap-4">
      <div className="overflow-auto">
        <div className="h-0 flex flex-col gap-8">
          <Button asChild className="min-h-10 tracking-wide rounded-full">
            <Link to="/services-selection">Seleccionar servicios</Link>
          </Button>
          <div className="flex flex-col gap-8">
            <ServicesList services={myServices} />
          </div>
        </div>
      </div>
    </div>
  );
};
