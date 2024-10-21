import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import debounce from 'lodash.debounce';
import { useAppStore } from '@/store/app';
import { useAccountStore } from '@/store/account';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { RhfSwitch } from '@/components/ui/rhf/rhf-switch';
import { getRiskAvgLevel, getRiskByLevel, sortCompareStrings } from '@/assets/utils';
import type { defaultValuesType } from '@/typings/pages/services-selection';
import { servicesMock } from '@/assets/mocks/services';

export const ServicesSelectionPage = () => {
  const navigate = useNavigate();
  const appStore = useAppStore();
  const accountStore = useAccountStore();
  const { toast } = useToast();
  const servicesOrderedMemo = useMemo(() => servicesMock.sort((a, b) => sortCompareStrings(a.name, b.name)), []);
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
      pageTitle: 'Select your services',
      hideFooter: true,
    });
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

    // if (servicesSelected.length === 0) {
    //   toast({
    //     title: 'Error on saving',
    //     description: 'You must select at least one service!',
    //     duration: 3000,
    //     variant: 'error',
    //   });
    //   return;
    // }

    const riskAvgLevel = getRiskAvgLevel(servicesMock, servicesSelected);
    accountStore.setRiskLevel(getRiskByLevel(riskAvgLevel));
    accountStore.setServices(servicesSelected);

    toast({
      title: 'Changes saved!',
      description: 'All changes have been saved successfully!',
      duration: 1500,
      variant: 'success',
    });
    navigate(-1);
  };

  return (
    <div className="grid grid-rows-[min-content,auto,min-content] gap-4">
      <Input
        id="service-input"
        label="Search service"
        placeholder="Service..."
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
        </form>
      </div>
      <Button type="submit" form="form" variant="default" className="w-full h-11 gap-2">
        <Icon icon="lucide:save" size={18} />
        Save Selection
      </Button>
    </div>
  );
};
