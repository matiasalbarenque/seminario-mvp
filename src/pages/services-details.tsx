import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useAppStore } from '@/store/app';
import { servicesMock } from '@/assets/mocks/services';
import type {
  CustomAccordionProps,
  CustomSelectProps,
  NoDataPlaceholderProps,
  RiskSelectOption,
} from '@/typings/pages/services-details';
import type { RiskLevels, TermsConditionsRiskDetails } from '@/typings/mocks/services';
import { Icon } from '@/components/ui/icon';

export const ServicesDetailsPage = () => {
  const params = useParams();
  const appStore = useAppStore();
  const [selectValue, setSelectValue] = useState('');
  const [serviceDetails, setServiceDetails] = useState<TermsConditionsRiskDetails[]>([]);

  const service = servicesMock.find(a => a.name === params?.name);

  const options = useMemo<RiskSelectOption[]>(() => {
    const opt: RiskSelectOption[] = [];
    if (service?.termsConditionsRisks?.e) {
      opt.push({
        className: 'bg-level-e text-white',
        label: 'Riesgo Alto',
        value: 'e',
      });
    }
    if (service?.termsConditionsRisks?.d) {
      opt.push({
        className: 'bg-level-d text-white',
        label: 'wip',
        value: 'd',
      });
    }
    if (service?.termsConditionsRisks?.c) {
      opt.push({
        className: 'bg-level-c text-black',
        label: 'Riesgo Medio',
        value: 'c',
      });
    }
    if (service?.termsConditionsRisks?.b) {
      opt.push({
        className: 'bg-level-b text-black',
        label: 'Low Risk',
        value: 'b',
      });
    }
    if (service?.termsConditionsRisks?.a) {
      opt.push({
        className: 'bg-level-a text-white',
        label: 'Sin riesgo',
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
          <SelectValue placeholder="Select a risk" />
        </SelectTrigger>
        <SelectContent>
          {options.map(a => (
            <SelectItem value={a.value} key={`select-risk-${a.value}`} className="h-10">
              <div className="flex">
                <div className={`w-5 mr-2 flex justify-center rounded-full uppercase ${a.className}`}>{a.value}</div>
                {a.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };

  const CustomAccordion = (props: CustomAccordionProps) => {
    const { details, riskLevel } = props;

    const riskLevelCasted = riskLevel as RiskLevels;
    let className = '';
    if (riskLevelCasted === 'e') {
      className = 'hover:bg-red-50 hover:border-red-300';
    } else if (riskLevelCasted === 'd') {
      className = 'hover:bg-orange-50 hover:border-orange-300';
    } else if (riskLevelCasted === 'c') {
      className = 'hover:bg-yellow-50 hover:border-yellow-300';
    } else if (riskLevelCasted === 'b') {
      className = 'hover:bg-lime-50 hover:border-lime-400';
    } else if (riskLevelCasted === 'a') {
      className = 'hover:bg-green-50 hover:border-green-500';
    }

    return (
      <Accordion type="single" collapsible>
        {details.map((item, index) => {
          const titleMaxLength = 80;
          const title =
            item.title.length <= titleMaxLength ? item.title : `${item.title.substring(0, titleMaxLength)}...`;
          return (
            <AccordionItem value={`accordion-item-${index}`} key={`accordion-item-${index}`}>
              <AccordionTrigger
                className={`px-2.5 py-2 my-3 text-left border border-transparent rounded-md hover:no-underline ${className}`}
              >
                {title}
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
      <AlertTitle>No data available!</AlertTitle>
      <AlertDescription>
        We are working on adding details for {props.service}. Check it out soon to get more information.
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
        <div className="w-12 h-12 p-2.5 border rounded-full overflow-hidden shadow-lg">
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
