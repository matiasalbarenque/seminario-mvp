export type AccountState = {
  accounts: string[];
  services: string[];
  riskLevel: string;
  termsAccepted: boolean;
  setAccounts: (accounts: string[], persist?: boolean) => void;
  setServices: (services: string[], persist?: boolean) => void;
  setRiskLevel: (riskLevel: string) => void;
  setTermsAccepted: (termsAccepted: boolean, persist?: boolean) => void;
};
