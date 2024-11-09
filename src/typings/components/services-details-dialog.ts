import type { TermsConditionsRiskDetails } from '../mocks/services';

export type ServicesDetailsDialogProps = {
  open: boolean;
  onClose: () => void;
  data?: TermsConditionsRiskDetails;
};
