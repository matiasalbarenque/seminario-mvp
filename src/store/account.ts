import { create } from 'zustand';
import { LOCAL_STORAGE } from '@/constants';
import type { AccountState, MyService } from '@/typings/state/account';

export const useAccountStore = create<AccountState>()((set, get) => ({
  accounts: [],
  myServices: [],
  riskLevel: -1,
  termsAccepted: false,
  setAccounts: (accounts: string[], persist: boolean = true) => {
    set({ accounts });
    if (persist) {
      localStorage.setItem(LOCAL_STORAGE.ACCOUNT_EMAILS, JSON.stringify(accounts));
    }
  },
  setMyServices: (myServices: MyService[]) => {
    set({ myServices });
  },
  addMyService: (myService: MyService) => {
    const myServices = [...get().myServices, myService];
    set({ myServices });
    localStorage.setItem(LOCAL_STORAGE.MY_SERVICES, JSON.stringify(myServices));
    return myServices;
  },
  removeMyService: (serviceName: string) => {
    const myServices = get().myServices.filter(a => a.name !== serviceName);
    set({ myServices });
    localStorage.setItem(LOCAL_STORAGE.MY_SERVICES, JSON.stringify(myServices));
    return myServices;
  },
  setRiskLevel: (riskLevel: number) => {
    set({ riskLevel });
  },
  setTermsAccepted: (termsAccepted: boolean, persist: boolean = true) => {
    set({ termsAccepted });
    if (persist) {
      localStorage.setItem(LOCAL_STORAGE.TERMS_ACCEPTED, JSON.stringify(true));
    }
  },
}));
