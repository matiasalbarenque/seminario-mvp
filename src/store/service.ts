import { create } from 'zustand';
import type { ServiceState } from '@/typings/state/services';
import type { Service } from '@/typings/mocks/services';

export const useServiceStore = create<ServiceState>()(set => ({
  services: [],
  setServices: (services: Service[]) => {
    set({ services });
  },
}));
