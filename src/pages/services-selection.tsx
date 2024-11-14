import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import debounce from 'lodash.debounce';
import { useAppStore } from '@/store/app';
import { useServiceStore } from '@/store/service';
import { useAccountStore } from '@/store/account';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { RhfSwitch } from '@/components/ui/rhf/rhf-switch';
import ReportServiceDialog from '@/components/report-service-dialog';
import { getRiskAvgLevel } from '@/assets/utils';
import type { defaultValuesType } from '@/typings/pages/services-selection';
import { ServiceUsageDialog } from '@/components/service-usage-dialog';
import type { Service } from '@/typings/mocks/services';
import type { onCloseServiceDialogParams } from '@/typings/components/service-usage-dialog';
import type { MyService } from '@/typings/state/account';

export const ServicesSelectionPage = () => {
  const navigate = useNavigate();
  const appStore = useAppStore();
  const serviceStore = useServiceStore();
  const accountStore = useAccountStore();
  const [servicesOrdered, setServicesOrdered] = useState<Service[]>([]);
  const [openReportServiceDialog, setOpenReportServiceDialog] = useState(false);
  const [openServiceUsageDialog, setOpenServiceUsageDialog] = useState(false);
  const [serviceSelected, setServiceSelected] = useState<Service>();

  const servicesOrderedMemo = useMemo(
    () => serviceStore.services.toSorted((a, b) => a.name.localeCompare(b.name)),
    [serviceStore.services]
  );

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Seleccionar servicios',
      hideFooter: true,
    });
  }, []);

  const defaultValues = useMemo(() => {
    const defaultValues: defaultValuesType = {};
    servicesOrdered.forEach(a => {
      defaultValues[a?.name] = false;
    });
    return defaultValues;
  }, []);

  const { control, reset, resetField, watch } = useForm({
    mode: 'onChange',
    defaultValues,
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (type === 'change' && name) {
        if (value[name]) {
          setServiceSelected(serviceStore.services.find(a => a.name === name));
          setOpenServiceUsageDialog(true);
        } else {
          const myServices = accountStore.removeMyService(name);
          computeRiskLevel(myServices);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    setServicesOrdered(servicesOrderedMemo);
    const servicesSelected: defaultValuesType = {};
    servicesOrderedMemo.forEach(item => {
      servicesSelected[item?.name] = accountStore.myServices.some(a => a.name === item?.name);
    });
    reset(servicesSelected);
  }, [servicesOrderedMemo.length]);

  const searchInputHandler = debounce((value: string) => {
    if (value === '') {
      setServicesOrdered(servicesOrderedMemo);
    } else {
      const servicesSearched = servicesOrderedMemo.filter(a =>
        a.label.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setServicesOrdered(servicesSearched);
    }
  }, 250);

  const onCloseServiceDialog = (params?: onCloseServiceDialogParams) => {
    if (params?.serviceName) {
      if (params?.usageSelected) {
        const myServices = accountStore.addMyService({
          name: params.serviceName,
          usage: params?.alreadyUseIt ?? false,
        });
        computeRiskLevel(myServices);
      } else {
        resetField(params.serviceName, { defaultValue: false, keepDirty: true });
      }
    }
    setOpenServiceUsageDialog(false);
  };

  const computeRiskLevel = (myServices: MyService[]) => {
    const riskAvgLevel = getRiskAvgLevel(serviceStore.services, myServices);
    accountStore.setRiskLevel(riskAvgLevel);
  };

  return (
    <div className="grid grid-rows-[min-content,auto,min-content] gap-4">
      <Input
        id="service-input"
        label="Buscar servicio"
        placeholder="Servicio..."
        onChange={searchInputHandler}
        className="h-11"
      />
      <div className="overflow-auto">
        <form id="form" className="h-0">
          <div className="flex flex-col gap-3">
            {servicesOrdered.map(a => (
              <div className="w-full h-12 flex gap-2.5 rounded-[6px] border shadow-sm overflow-hidden" key={a.name}>
                <div className="w-14 flex items-center">
                  <div className="absolute -left-1 w-16 h-16 p-4 bg-white border rounded-tr-full rounded-br-full overflow-hidden shadow">
                    <img src={`/img/apps/${a.imgUrl}`} alt={a.label} />
                  </div>
                </div>
                <div className="w-full flex justify-between px-3 py-1.5">
                  <div className="flex-1 flex items-center text-sm">{a.label}</div>
                  <div className="w-10 flex items-center">
                    <RhfSwitch control={control} id={`${a.name}-id`} name={a.name} className="scale-125" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            {servicesOrdered.length === 0 && (
              <Icon icon="material-symbols-light:search-off" size={64} className="mx-auto mb-2" />
            )}
            <h3 className="text-sm mb-1">¿No encontraste lo que buscabas?</h3>
            <button
              onClick={() => {
                setOpenReportServiceDialog(true);
              }}
              className="text-sm text-[#1070ed] font-semibold"
              type="button"
            >
              Sugerir servicio
            </button>
          </div>
        </form>
      </div>
      <Button onClick={() => navigate('/')} className="w-full rounded-full min-h-10 tracking-wide">
        Ver resultados
      </Button>
      <ReportServiceDialog onClose={() => setOpenReportServiceDialog(false)} open={openReportServiceDialog} />
      <ServiceUsageDialog onClose={onCloseServiceDialog} open={openServiceUsageDialog} service={serviceSelected} />
    </div>
  );
};
