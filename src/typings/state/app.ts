export type AppState = {
  appConfig: AppConfigState;
  setAppConfig: (appConfig: AppConfigState) => void;
};

export type AppConfigState = {
  hideFooter?: boolean;
  pageTitle: string;
};
