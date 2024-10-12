export type AccountState = {
  services: string[];
  accounts: string[];
  setServices: (services: string[], persist?: boolean) => void;
  setAccounts: (accounts: string[], persist?: boolean) => void;
};
