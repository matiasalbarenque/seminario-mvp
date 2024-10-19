export type AppState = {
  appConfig: AppConfigState;
  hasSplashScreenShown: boolean;
  hasHomeMonitorTransitionDone: boolean;
  setAppConfig: (appConfig: AppConfigState) => void;
  setHasSplashScreenShown: (value: boolean) => void;
  setHasHomeMonitorTransitionDone: (value: boolean) => void;
};

export type AppConfigState = {
  hideFooter?: boolean;
  pageTitle: string;
};
