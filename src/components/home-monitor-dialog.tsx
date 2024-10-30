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
import { getIconByRiskLevel } from '@/assets/utils';
import type { HomeMonitorDialogProps } from '@/typings/components/home-monitor-dialog';

export const HomeMonitorDialog = (props: HomeMonitorDialogProps) => {
  const { onClose, open } = props;
  const accountStore = useAccountStore();

  const getDescription = (a: number) => {
    if (a === -1) {
      return 'Selecciona los servicios que utilizas para que realicemos un análisis en profundidad.';
    }
    if (a < 2) {
      return 'Estás en una situación crítica donde algunos de tus servicios podrían afectarte, te recomendamos ampliamente que lo valides yendo a “Servicios”.';
    }
    if (a < 4) {
      return 'Te recomendamos que valides los riesgos involucrados que pudieran afectarle debido a cualquiera de sus servicios.';
    }
    if (a < 6) {
      return 'Uno o varios riesgos pueden estar afectándote, te recomendamos validarlo ingresando a la sección “Servicios”.';
    }
    if (a < 8) {
      return 'Puede existir algún riesgo que le afecte. Le invitamos a validarlo en la sección “Servicios”.';
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
                <img src={getIconByRiskLevel(accountStore.riskLevel)} width="100%" height="100%" />
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