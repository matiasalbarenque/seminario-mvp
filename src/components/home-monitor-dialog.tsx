import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { useAccountStore } from '@/store/account';
import type { HomeMonitorDialogProps } from '@/typings/components/home-monitor-dialog';

export const HomeMonitorDialog = (props: HomeMonitorDialogProps) => {
  const { onClose, open } = props;
  const accountStore = useAccountStore();

  const description = useMemo(() => {
    if (accountStore.riskLevel === 'a') {
      return '¡Felicitaciones! Según el uso que haces de la aplicación, no corres ningún riesgo.';
    }
    if (accountStore.riskLevel === 'b') {
      return 'Puede existir algún riesgo que le afecte. Le invitamos a validarlo en la sección “Servicios”.';
    }
    if (accountStore.riskLevel === 'c') {
      return 'Uno o varios riesgos pueden estar afectándote, te recomendamos validarlo ingresando a la sección “Servicios”.';
    }
    if (accountStore.riskLevel === 'd') {
      return 'Le recomendamos que valide los riesgos involucrados que pudieran afectarle debido a cualquiera de sus servicios.';
    }
    if (accountStore.riskLevel === 'e') {
      return 'Estás en una situación crítica donde algunos de tus servicios podrían afectarte, te recomendamos ampliamente que lo valides yendo a “Servicios”.';
    }
    return 'Selecciona los servicios que utilizas para que realicemos un análisis en profundidad.';
  }, [accountStore.riskLevel]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent hideClose>
        <DialogHeader>
          <DialogTitle>Estado de tu cuenta</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose}>Aceptar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
