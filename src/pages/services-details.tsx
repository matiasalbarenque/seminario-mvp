import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useAppStore } from '@/store/app';
import { useServiceStore } from '@/store/service';
import type {
  CustomAccordionProps,
  CustomSelectProps,
  NoDataPlaceholderProps,
  RiskSelectOption,
} from '@/typings/pages/services-details';
import type { RiskLevels, TermsConditionsRiskDetails } from '@/typings/mocks/services';
import { Icon } from '@/components/ui/icon';
import { getDescriptionByRiskLevel, getIconByRiskLevel } from '@/assets/utils';

export const ServicesDetailsPage = () => {
  const params = useParams();
  const appStore = useAppStore();
  const serviceStore = useServiceStore();
  const [selectValue, setSelectValue] = useState('');
  const [serviceDetails, setServiceDetails] = useState<TermsConditionsRiskDetails[]>([]);

  const service = serviceStore.services.find(a => a.name === params?.name);

  const options = useMemo<RiskSelectOption[]>(() => {
    const opt: RiskSelectOption[] = [];
    if (service?.termsConditionsRisks?.e) {
      opt.push({
        className: 'bg-level-e text-white',
        label: getDescriptionByRiskLevel('e'),
        value: 'e',
      });
    }
    if (service?.termsConditionsRisks?.d) {
      opt.push({
        className: 'bg-level-d text-white',
        label: getDescriptionByRiskLevel('d'),
        value: 'd',
      });
    }
    if (service?.termsConditionsRisks?.c) {
      opt.push({
        className: 'bg-level-c text-black',
        label: getDescriptionByRiskLevel('c'),
        value: 'c',
      });
    }
    if (service?.termsConditionsRisks?.b) {
      opt.push({
        className: 'bg-level-b text-black',
        label: getDescriptionByRiskLevel('b'),
        value: 'b',
      });
    }
    if (service?.termsConditionsRisks?.a) {
      opt.push({
        className: 'bg-level-a text-white',
        label: getDescriptionByRiskLevel('a'),
        value: 'a',
      });
    }
    return opt;
  }, []);

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: `Detalles de ${service?.label}`,
    });
    if (options.length > 0) {
      selectHandler(options[0].value);
    }
  }, []);

  const selectHandler = (value: RiskLevels) => {
    setSelectValue(value);
    let termsConditions: TermsConditionsRiskDetails[] = [];
    if (service?.termsConditionsRisks && service?.termsConditionsRisks[value]) {
      termsConditions = service?.termsConditionsRisks[value];
    }
    setServiceDetails(termsConditions);
  };

  const CustomSelect = (props: CustomSelectProps) => {
    const { value, onChange, options } = props;
    if (options.length === 0) {
      return;
    }
    return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full h-12">
          <SelectValue placeholder="Select un riesgo" />
        </SelectTrigger>
        <SelectContent>
          {options.map(a => (
            <SelectItem value={a.value} key={`select-risk-${a.value}`} className="h-10">
              <div className="flex items-center gap-1.5">
                <img src={getIconByRiskLevel(a.value)} width="24px" height="24px" />
                <div className="font-medium">{a.label}</div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };

  const CustomAccordion = (props: CustomAccordionProps) => {
    const { details } = props;
    return (
      <Accordion type="single" collapsible>
        {details.map((item, index) => {
          const titleMaxLength = 60;
          const title =
            item.title.length <= titleMaxLength ? item.title : `${item.title.substring(0, titleMaxLength)}...`;
          const imgUrl = item.imgUrl || 'no-image.jpg';
          return (
            <AccordionItem value={`accordion-item-${index}`} key={`accordion-item-${index}`}>
              <AccordionTrigger className="gap-2 px-1 py-2 my-1 text-left">
                <div className="flex gap-3 h-14">
                  <div className="shrink-0 flex justify-center items-center">
                    <div className="w-12 h-12 bg-white border border-black border-opacity-60 rounded-full overflow-hidden">
                      <img
                        src={`/img/cases/${imgUrl}`}
                        alt={item.title}
                        width="48px"
                        height="48px"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex items-center no-underline">{title}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-2">{item.description}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  };

  const NoDataPlaceholder = (props: NoDataPlaceholderProps) => (
    <Alert>
      <Icon icon="carbon:document-unknown" size={18} />
      <AlertTitle>Sin información</AlertTitle>
      <AlertDescription>
        Estamos trabajando para agregar detalles para {props.service}. Vuelve pronto para obtener más información.
      </AlertDescription>
    </Alert>
  );

  if (!service?.termsConditionsRisks) {
    return (
      <div>
        <NoDataPlaceholder service={service?.label || ''} />
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[min-content,auto] gap-4">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 p-2.5 border border-black border-opacity-20 rounded-full overflow-hidden shadow-md">
          <img src={`/img/apps/${service?.imgUrl}`} alt={service?.label} />
        </div>
        <div className="flex-1">
          <CustomSelect value={selectValue} options={options} onChange={selectHandler} />
        </div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden">
        <div className="h-0 flex flex-col gap-3">
          <CustomAccordion details={serviceDetails} riskLevel={selectValue} />
        </div>
      </div>
    </div>
  );
};
