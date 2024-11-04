import type { Service } from '@/typings/mocks/services';

export type ServiceState = {
  services: Service[];
  setServices: (services: Service[]) => void;
};
