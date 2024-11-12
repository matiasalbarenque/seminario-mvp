import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import type { ServiceUsageDialogProps } from '@/typings/components/service-usage-dialog';

type CustomDialogButtonProps = {
  title: string;
  description: string;
  onClick: () => void;
};

export const ServiceUsageDialog = (props: ServiceUsageDialogProps) => {
  const { onClose, open, service } = props;

  const onClickHandler = (alreadyUseIt: boolean) => {
    onClose({
      alreadyUseIt,
      serviceName: service?.name,
      usageSelected: true,
    });
  };

  const onDismissDialog = () => {
    onClose({
      alreadyUseIt: false,
      serviceName: service?.name,
      usageSelected: false,
    });
  };

  const CustomDialogButton = (props: CustomDialogButtonProps) => {
    const { title, description, onClick } = props;
    return (
      <Button onClick={onClick} variant="outline" className="min-h-20 bg-slate-50 border-slate-300">
        <div className="flex flex-col gap-1 text-left">
          <div className="text-base">{title}</div>
          <div className="whitespace-normal font-normal text-slate-600 leading-tight">{description}</div>
        </div>
      </Button>
    );
  };

  return (
    <Dialog open={open} onOpenChange={onDismissDialog}>
      <DialogContent hideClose>
        <DialogHeader className="mb-1">
          <DialogTitle className="leading-snug">¿Qué uso le das a {service?.label}?</DialogTitle>
          <DialogDescription className="hidden" />
        </DialogHeader>
        <DialogFooter>
          <div className="w-full flex flex-col gap-3.5">
            <CustomDialogButton
              title="Ya uso el servicio"
              description="Además ya acepté sus Términos y Condiciones"
              onClick={() => onClickHandler(true)}
            />
            <CustomDialogButton
              title="Aún no uso el servicio"
              description="Quiero conocer sus posibles riesgos al comenzar a usarlo"
              onClick={() => onClickHandler(false)}
            />
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
