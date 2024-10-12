import { create } from 'zustand';
import type { AppConfigState, AppState } from '@/typings/state/app';

export const useAppStore = create<AppState>()(set => ({
  appConfig: {
    pageTitle: '',
  },
  setAppConfig: (appConfig: AppConfigState) => {
    set({ appConfig });
  },
}));
