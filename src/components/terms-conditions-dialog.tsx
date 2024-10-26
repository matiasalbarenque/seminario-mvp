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
          <DialogTitle className="mb-1.5">Términos y Condiciones</DialogTitle>
          <DialogDescription className="text-gray-700">
            Para acceder a Cuentas es necesario que leas y aceptes nuestros
            <br />
            <Link to="/terms-conditions" className="mt-1 text-blue-500">
              Términos y Condiciones
            </Link>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={acceptTermsHandler}>Aceptar y continuar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
