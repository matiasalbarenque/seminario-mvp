import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useAppStore } from '@/store/app';
import { useServiceStore } from '@/store/service';

export const PremiumAdvicesPage = () => {
  const params = useParams();
  const appStore = useAppStore();
  const serviceStore = useServiceStore();

  const service = serviceStore.services.find(a => a.name === params?.name);

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Funcionalidades Premium',
      hideFooter: true,
    });
  }, []);

  const AdvicesAccordion = () => {
    if (!service?.advices) return <></>;
    return (
      <Accordion type="single" collapsible className="w-full">
        {service.advices.map((item, index) => {
          return (
            <AccordionItem value={`accordion-item-${index}`} key={`accordion-item-${index}`}>
              <AccordionTrigger className="gap-2 px-1 py-4 text-md">{item.title}</AccordionTrigger>
              <AccordionContent className="px-2 text-md">{item.description}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  };

  return (
    <div className="grid grid-rows-[auto] gap-4">
      <div className="overflow-auto">
        <div className="h-0">
          <div className="flex flex-col items-start gap-3">
            <div className="premium-separator w-full p-3 rounded-2xl shadow-md text-center">
              <span className="text-lg font-medium text-white leading-tight drop-shadow-md">
                Consejos para reducir riesgos de {service?.label}
              </span>
            </div>
            <AdvicesAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};
