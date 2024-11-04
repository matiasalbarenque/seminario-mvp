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
import { useToast } from '@/hooks/use-toast';
import { RhfSwitch } from '@/components/ui/rhf/rhf-switch';
import ReportServiceDialog from '@/components/report-service-dialog';
import { getRiskAvgLevel } from '@/assets/utils';
import type { defaultValuesType } from '@/typings/pages/services-selection';

export const ServicesSelectionPage = () => {
  const navigate = useNavigate();
  const appStore = useAppStore();
  const serviceStore = useServiceStore();
  const accountStore = useAccountStore();
  const { toast } = useToast();
  const servicesOrderedMemo = useMemo(() => serviceStore.services.sort((a, b) => a.name.localeCompare(b.name)), []);
  const [servicesOrdered, setServicesOrdered] = useState(servicesOrderedMemo);

  const defaultValues = useMemo(() => {
    const defaultValues: defaultValuesType = {};
    servicesOrdered.forEach(a => {
      defaultValues[a?.name] = false;
    });
    return defaultValues;
  }, []);

  const { control, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
  });

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Seleccionar servicios',
      hideFooter: true,
    });
  }, []);

  useEffect(() => {
    const servicesSelected: defaultValuesType = {};
    servicesOrdered.forEach(item => {
      servicesSelected[item?.name] = accountStore.services.some(a => a === item?.name);
    });
    reset(servicesSelected);
  }, [accountStore.services]);

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

  const onSubmit = async (formData: defaultValuesType) => {
    const servicesSelected: string[] = [];
    for (const [key, value] of Object.entries(formData)) {
      if (value) {
        servicesSelected.push(key);
      }
    }

    const riskAvgLevel = getRiskAvgLevel(serviceStore.services, servicesSelected);
    accountStore.setRiskLevel(riskAvgLevel);
    accountStore.setServices(servicesSelected);

    toast({
      title: 'Cambios guardados',
      description: '¡Los servicios seleccionados se han guardado satisfactoriamente!',
      duration: 2000,
      variant: 'success',
    });
    navigate('/');
  };

  const [openReportServiceDialog, setOpenReportServiceDialog] = useState(false);

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
        <form onSubmit={handleSubmit(onSubmit)} id="form" className="h-0">
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
      <Button type="submit" form="form" className="w-full rounded-full min-h-10 tracking-wide">
        Guardar
      </Button>
      <ReportServiceDialog onClose={() => setOpenReportServiceDialog(false)} open={openReportServiceDialog} />
    </div>
  );
};
