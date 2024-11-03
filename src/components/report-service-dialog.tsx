import { HomeMonitorDialogProps } from '@/typings/components/home-monitor-dialog';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { AccountSelectionForm } from '@/typings/pages/accounts-selection';
import { useForm } from 'react-hook-form';
import { RhfInput } from './ui/rhf/rhf-input';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { watch } from 'fs';
import { useState } from 'react';
import { useNotificationStore } from '@/store/notification';
import { useToast } from '@/hooks/use-toast';

type ServiceTypeValues = 'web' | 'app';

const ReportServiceDialog = ({ onClose, open }: HomeMonitorDialogProps) => {
  const [serviceType, setServiceType] = useState<ServiceTypeValues>('web');
  const { toast } = useToast();

  const onSubmit = async () => {
    onClose();

    toast({
      title: 'Servicio reportado con exito',
      description: '¡Te avisaron cuando se haya agregado!',
      duration: 4000,
      variant: 'success',
    });
  };

  const getRadioProps = (v: ServiceTypeValues) => ({
    id: v,
    checked: serviceType === v,
    onClick: () => setServiceType(v),
    type: 'radio',
    className: 'h-5 shadow-none w-min',
    name: 'serviceType',
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reportar servicio</DialogTitle>
          <DialogDescription>
            <form onSubmit={onSubmit}>
              {/* <p>Puedes reportar servicios para que los agreguemos en el futuro.</p> */}
              <div className="grid grid-cols-3 mt-3 items-center">
                <Label className=" mb-0 text-left">Tipo</Label>
                <div className="flex items-center gap-x-4">
                  <label className="text-sm" htmlFor="web">
                    Web
                  </label>
                  <Input {...getRadioProps('web')} />
                </div>
                <div className="flex items-center gap-x-4">
                  <label className="text-sm" htmlFor="app">
                    App
                  </label>
                  <Input {...getRadioProps('app')} />
                </div>
              </div>
              <div className="mt-4 text-left">
                <Input
                  name="url"
                  type="url"
                  placeholder="URL"
                  className="h-11"
                  label={serviceType === 'web' ? 'Enlace web' : 'Enlace a la store'}
                />
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose} variant={'outline'}>
            Cerrar
          </Button>
          <Button onClick={onSubmit} className="mb-2">
            Enviar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReportServiceDialog;
