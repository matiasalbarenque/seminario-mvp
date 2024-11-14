import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import { getDescriptionByRiskLevel, getRiskMessage } from '@/assets/utils';
import type { ServicesRiskInfoDialogProps } from '@/typings/components/services-risk-info-dialog';

export const ServicesRiskInfoDialog = (props: ServicesRiskInfoDialogProps) => {
  const { riskLevel, onClose, open } = props;

  const riskTitle = getDescriptionByRiskLevel(riskLevel);
  const riskMessage = getRiskMessage(riskLevel);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent hideClose>
        <DialogHeader>
          <DialogTitle className="mb-1.5">{riskTitle}</DialogTitle>
          <DialogDescription className="py-1.5">{riskMessage}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose} className="rounded-full min-h-10 tracking-wide">
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
