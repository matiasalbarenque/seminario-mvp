export type AccountState = {
  accounts: string[];
  services: string[];
  riskLevel: number; // 0 < riskLevel < 10
  termsAccepted: boolean;
  setAccounts: (accounts: string[], persist?: boolean) => void;
  setServices: (services: string[], persist?: boolean) => void;
  setRiskLevel: (riskLevel: number) => void;
  setTermsAccepted: (termsAccepted: boolean, persist?: boolean) => void;
};
