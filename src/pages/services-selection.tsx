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
import { sortCompareStrings } from '@/assets/utils/utils';
import type { defaultValuesType } from '@/typings/pages/services-selection';
import { services } from '@/assets/mocks/services';

export const ServicesSelectionPage = () => {
  const navigate = useNavigate();
  const appStore = useAppStore();
  const accountStore = useAccountStore();
  const { toast } = useToast();
  const servicesOrderedMemo = useMemo(() => services.sort((a, b) => sortCompareStrings(a.name, b.name)), []);
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
        <form onSubmit={handleSubmit(onSubmit)} id="form">
          <div className="h-0 flex flex-col gap-3">
            {servicesOrdered.map(a => (
              <div className="w-full flex gap-2.5 px-2 py-1.5 rounded-[6px] border shadow-sm" key={a.name}>
                <div className="w-9">
                  <div className="w-9 h-9 p-1.5 border rounded-full overflow-hidden">
                    <img src={`/img/apps/${a.imgUrl}`} alt={a.label} />
                  </div>
                </div>
                <div className="flex-1 flex items-center text-sm">{a.label}</div>
                <div className="w-10 flex items-center">
                  <RhfSwitch control={control} id={`${a.name}-id`} name={a.name} />
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
      <Button type="submit" form="form" variant="default" className="w-full h-10 gap-2">
        <Icon icon="lucide:save" size={18} />
        Save Selection
      </Button>
    </div>
  );
};
