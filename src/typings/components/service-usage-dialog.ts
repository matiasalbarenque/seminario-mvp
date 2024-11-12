import type { Service } from '../mocks/services';

export type ServiceUsageDialogProps = {
  open: boolean;
  onClose: (params?: onCloseServiceDialogParams) => void;
  service?: Service;
};

export type onCloseServiceDialogParams = {
  usageSelected?: boolean;
  serviceName?: string;
  alreadyUseIt?: boolean;
};
