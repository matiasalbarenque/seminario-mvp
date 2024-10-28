import { Link, useNavigate } from 'react-router-dom';
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
import scrollSvg from '@/assets/icons/scroll.svg';

export const TermsConditionsDialog = () => {
  const navigate = useNavigate();
  const accountStore = useAccountStore();

  const acceptTermsHandler = () => {
    accountStore.setTermsAccepted(true);
  };

  const declineTermsHandler = () => {
    navigate('/');
  };

  return (
    <Dialog open={!accountStore.termsAccepted} onOpenChange={declineTermsHandler}>
      <DialogContent hideClose>
        <DialogHeader>
          <DialogTitle className="mb-2">
            <div className="w-full flex flex-col items-center gap-4">
              <div>Términos y Condiciones</div>
              <div className="w-20 h-20">
                <img src={scrollSvg} width="100%" height="100%" />
              </div>
            </div>
          </DialogTitle>
          <DialogDescription>
            Para acceder a Cuentas es necesario que leas y aceptes nuestros
            <br />
            <Link to="/terms-conditions" className="mt-1 text-blue-500">
              Términos y Condiciones
            </Link>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={acceptTermsHandler} className="rounded-full min-h-10 tracking-wide">
            Aceptar y continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
