export type AccountState = {
  accounts: string[];
  myServices: MyService[];
  riskLevel: number; // 0 < riskLevel < 10
  termsAccepted: boolean;
  addMyService: (myService: MyService) => MyService[];
  removeMyService: (serviceName: string) => MyService[];
  setAccounts: (accounts: string[], persist?: boolean) => void;
  setMyServices: (myServices: MyService[]) => void;
  setRiskLevel: (riskLevel: number) => void;
  setTermsAccepted: (termsAccepted: boolean, persist?: boolean) => void;
};

export type MyService = {
  name: string;
  usage: boolean;
};
