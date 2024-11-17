import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Icon } from '@/components/ui/icon';
import { ServicesDetailsDialog } from '@/components/services-details-dialog';
import { ServicesRiskInfoDialog } from '@/components/services-risk-info-dialog';
import { useAppStore } from '@/store/app';
import { useServiceStore } from '@/store/service';
import { useAccountStore } from '@/store/account';
import type { NoDataPlaceholderProps, ServiceDetailsData } from '@/typings/pages/services-details';
import type { RiskLevels, TermsConditionsRiskDetails } from '@/typings/mocks/services';
import { getColorByRiskLevel, getDescriptionByRiskLevel } from '@/assets/utils';
import antidotoIsotipoSvg from '@/assets/img/antidoto_isotipo.svg';

export const ServicesDetailsPage = () => {
  const params = useParams();
  const appStore = useAppStore();
  const serviceStore = useServiceStore();
  const accountStore = useAccountStore();
  const [dialogData, setDialogData] = useState<TermsConditionsRiskDetails>();
  const [showDialog, setShowDialog] = useState(false);
  const [showRiskInfoDialog, setShowRiskInfoDialog] = useState(false);
  const [riskInfoDialogSelected, setRiskInfoDialogSelected] = useState<string>('');

  const service = serviceStore.services.find(a => a.name === params?.name);

  const serviceDetails = useMemo(() => {
    const details: ServiceDetailsData[] = [];
    const tcr = service?.termsConditionsRisks;
    'edcba'.split('').forEach(item => {
      const risk = item as RiskLevels;
      if (tcr?.[risk]) {
        details.push({
          items: [],
          risk,
          type: 'separator',
        });
        details.push({
          items: Object.values(tcr?.[risk]),
          risk,
          type: 'cases',
        });
      }
    });

    return details;
  }, [service?.name]);

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: `Detalles de ${service?.label}`,
    });
  }, []);

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

  const openDialogHandler = (data: TermsConditionsRiskDetails) => {
    setDialogData(data);
    setShowDialog(true);
  };

  const closeDialogHandler = () => {
    setDialogData(undefined);
    setShowDialog(false);
  };

  const showRiskInfoDialogHandler = (riskLevel: string) => {
    setShowRiskInfoDialog(true);
    setRiskInfoDialogSelected(riskLevel);
  };

  const CategorySeparator = (props: ServiceDetailsData) => {
    const { risk } = props;
    const bgColor = risk ? getColorByRiskLevel(risk) : '';
    const title = risk ? getDescriptionByRiskLevel(risk) : '';
    return (
      <div className={`flex items-center justify-between px-3 py-2 rounded-md ${bgColor}`} key={`sep-${risk}`}>
        <div className="text-lg font-medium text-white tracking-wide drop-shadow">{title}</div>
        <div className="cursor-pointer" onClick={() => showRiskInfoDialogHandler(risk)}>
          <Icon icon="ic:baseline-info" size={24} className="text-white opacity-75" />
        </div>
      </div>
    );
  };

  const ServiceItemSeparator = (props: TermsConditionsRiskDetails) => (
    <div className="flex gap-5" key={`separator-${props.title}`}>
      <div className="w-14" />
      <div className="flex-1 border-b-[1px]" />
    </div>
  );

  const ServiceItem = (props: TermsConditionsRiskDetails) => {
    const imgUrl = props.imgUrl || 'no-image.jpg';
    return (
      <div className="flex gap-3 p-2 rounded-md" key={`case-${props.title}`} onClick={() => openDialogHandler(props)}>
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img
            src={`/img/cases/${imgUrl}`}
            alt={props.title}
            width="48px"
            height="48px"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1 flex items-center">
          <div className="font-medium leading-snug">{props.title}</div>
        </div>
        <div className="w-12 flex justify-center items-center">
          <Icon icon="ic:baseline-keyboard-arrow-right" size={26} className="opacity-60" />
        </div>
      </div>
    );
  };

  const ServiceDetailsContent = (props: ServiceDetailsData) => {
    return props.items.map((a, i) => (
      <div key={`service-details-content-${i}`}>
        {i > 0 && <ServiceItemSeparator {...a} />}
        <ServiceItem {...a} />
      </div>
    ));
  };

  const PremiumFeature = () => {
    const isServiceUsed = accountStore.myServices.find(a => a.name === params?.name)?.usage;
    if (!service?.advices || !isServiceUsed) return <></>;
    return (
      <div className="flex flex-col gap-2.5">
        <div className="premium-separator flex items-center justify-between px-3 py-2 rounded-md">
          <div className="text-lg font-medium text-white tracking-wide drop-shadow-md">Funcionalidades Premium</div>
        </div>
        <Link to={`/premium-advices/${params?.name}`}>
          <div className="flex gap-3 p-2 rounded-md">
            <div className="premium-avatar w-14 h-14 p-1.5 rounded-full overflow-hidden bg-gray-100">
              <img
                src={antidotoIsotipoSvg}
                alt="antidote"
                width="100%"
                height="100%"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 flex items-center">
              <div className="font-medium leading-snug">Aprende cómo reducir los riesgos</div>
            </div>
            <div className="w-12 flex justify-center items-center">
              <Icon icon="ic:baseline-keyboard-arrow-right" size={26} className="opacity-60" />
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      <div className="grid grid-rows-[auto] gap-4">
        <div className="overflow-y-auto overflow-x-hidden">
          <div className="h-0 flex flex-col gap-3">
            {serviceDetails.map((a, i) => (
              <div className={`${a.type} risk-${a.risk}`} key={`service-wrapper-${a.risk}-${a.type}-${i}`}>
                {a.type === 'separator' ? <CategorySeparator {...a} /> : <ServiceDetailsContent {...a} />}
              </div>
            ))}
            <PremiumFeature />
          </div>
        </div>
      </div>
      <ServicesDetailsDialog open={showDialog} onClose={closeDialogHandler} data={dialogData} />
      <ServicesRiskInfoDialog
        open={showRiskInfoDialog}
        riskLevel={riskInfoDialogSelected}
        onClose={() => setShowRiskInfoDialog(false)}
      />
    </>
  );
};
