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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Terms and Conditions</DialogTitle>
          <DialogDescription>
            To use the Services and Accounts sections you need to first accept our{' '}
            <Link to="/terms-conditions" className="mt-1 text-blue-500">
              Terms and Conditions.
            </Link>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={acceptTermsHandler}>Accept and continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
