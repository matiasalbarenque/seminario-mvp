import { create } from 'zustand';
import type { AppConfigState, AppState } from '@/typings/state/app';

export const useAppStore = create<AppState>()(set => ({
  appConfig: {
    pageTitle: '',
  },
  hasSplashScreenShown: false,
  hasHomeMonitorTransitionDone: false,
  setAppConfig: (appConfig: AppConfigState) => {
    set({ appConfig });
  },
  setHasSplashScreenShown: (value: boolean) => {
    set({ hasSplashScreenShown: value });
  },
  setHasHomeMonitorTransitionDone: (value: boolean) => {
    set({ hasHomeMonitorTransitionDone: value });
  },
}));
