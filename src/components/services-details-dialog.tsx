import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from '@/components/ui/dialog';
import type { ServicesDetailsDialogProps } from '@/typings/components/services-details-dialog';

export const ServicesDetailsDialog = (props: ServicesDetailsDialogProps) => {
  const { data, onClose, open } = props;
  const imgUrl = data?.imgUrl || 'no-image.jpg';
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent hideClose>
        <DialogHeader>
          <DialogTitle>
            <div className="w-full flex flex-col justify-center items-center gap-3">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img src={`/img/cases/${imgUrl}`} width="100%" height="100%" className="object-contain" />
              </div>
              <div className="font-bold text-gray-800 leading-snug tracking-normal font-open-sans">{data?.title}</div>
            </div>
          </DialogTitle>
          <DialogDescription className="!mt-3 !mb-3">{data?.description}</DialogDescription>
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
