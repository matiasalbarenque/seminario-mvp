import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { useAppStore } from '@/store/app';
import type { ServiceCategoryWrapperProps, Service } from '@/typings/mocks/services';
import { useMyServices } from '@/hooks/use-my-services';
import { getDescriptionByRiskLevel, getIconByRiskLevel } from '@/assets/utils';
import { ServicesRiskInfoDialog } from '@/components/services-risk-info-dialog';

export const ServicesPage = () => {
  const appStore = useAppStore();
  const myServices = useMyServices();
  const [showRiskInfoDialog, setShowRiskInfoDialog] = useState(false);
  const [riskInfoDialogSelected, setRiskInfoDialogSelected] = useState<string>('');

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Servicios',
    });
  }, []);

  const showRiskInfoDialogHandler = (riskLevel: string) => {
    setShowRiskInfoDialog(true);
    setRiskInfoDialogSelected(riskLevel);
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

    const riskTitle = getDescriptionByRiskLevel(riskLevel);

    return (
      <div className="flex flex-col">
        <div
          className={`px-2 h-12 flex items-center justify-between rounded-tl-md rounded-tr-md bg-level-${riskLevel}`}
        >
          <div className="flex gap-2 items-center">
            <div className="w-14 h-4 flex justify-center">
              <div
                className={`absolute -top-8 w-14 h-14 p-2 border-[5px] ${borderColor} border-opacity-100 rounded-full`}
                style={{ backgroundColor: '#fff' }}
              >
                <img src={getIconByRiskLevel(riskLevel)} width="100%" height="100%" />
              </div>
            </div>
            <div className="text-lg font-medium text-white tracking-wide drop-shadow-md">{riskTitle}</div>
          </div>
          <div className="cursor-pointer" onClick={() => showRiskInfoDialogHandler(riskLevel)}>
            <Icon icon="ic:baseline-info" size={24} className="text-white opacity-75" />
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

  const ServicesList = (props: { services: Service[] }) => {
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
                  <div className="text-md font-medium line-clamp-1">{c.label}</div>
                </div>
                <div className="w-14 flex justify-center items-center">
                  <Icon icon="ic:baseline-keyboard-arrow-right" size={26} className="opacity-60" />
                </div>
              </div>
            </Link>
          ))}
      </ServiceCategoryWrapper>
    ));
  };

  return (
    <>
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
      <ServicesRiskInfoDialog
        open={showRiskInfoDialog}
        riskLevel={riskInfoDialogSelected}
        onClose={() => setShowRiskInfoDialog(false)}
      />
    </>
  );
};
