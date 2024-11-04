import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import { useAccountStore } from '@/store/account';
import { getIconByRiskAverage } from '@/assets/utils';
import type { HomeMonitorDialogProps } from '@/typings/components/home-monitor-dialog';

export const HomeMonitorDialog = (props: HomeMonitorDialogProps) => {
  const { onClose, open } = props;
  const accountStore = useAccountStore();

  const getDescription = (a: number) => {
    if (a === -1) {
      return 'Selecciona los servicios que utilizas para que realicemos un análisis en profundidad.';
    }
    if (a < 2) {
      return 'Advertencia: Su perfil de servicios tiene un riesgo elevado. Algunos de los servicios que utiliza presentan factores que podrían comprometer la seguridad o estabilidad de su cuenta, te recomendamos ampliamente que lo valides yendo a “Servicios”.';
    }
    if (a < 4) {
      return 'Te recomendamos que valides los riesgos involucrados que pudieran afectarle debido a cualquiera de sus servicios.';
    }
    if (a < 6) {
      return 'Algunos servicios en su perfil presentan un riesgo moderado. Revise estos servicios en la sección "Servicios" para considerar ajustes de seguridad o configuraciones que puedan disminuir este riesgo.';
    }
    if (a < 8) {
      return 'Su perfil actual presenta un bajo riesgo. Sin embargo, le recomendamos revisar periódicamente sus servicios en la sección "Servicios" para asegurarse de que sus datos están protegidos de forma óptima.';
    }
    return '¡Felicitaciones! Según el uso que haces de la aplicación, no corres ningún riesgo.';
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent hideClose>
        <DialogHeader>
          <DialogTitle>
            <div className="w-full flex justify-center">
              <div className="w-20 h-20">
                <img src={getIconByRiskAverage(accountStore.riskLevel)} width="100%" height="100%" />
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>{getDescription(accountStore.riskLevel)}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose} className="rounded-full min-h-10 tracking-wide">
            Aceptar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
