import { create } from 'zustand';
import type { AccountState } from '@/typings/state/account';

export const useAccountStore = create<AccountState>()(set => ({
  accounts: [],
  services: [],
  riskLevel: '?',
  termsAccepted: false,
  setAccounts: (accounts: string[], persist: boolean = true) => {
    set({ accounts });
    if (persist) {
      localStorage.setItem('account-emails', JSON.stringify(accounts));
    }
  },
  setServices: (services: string[], persist: boolean = true) => {
    set({ services });
    if (persist) {
      localStorage.setItem('account-services', JSON.stringify(services));
    }
  },
  setRiskLevel: (riskLevel: string) => {
    set({ riskLevel });
  },
  setTermsAccepted: (termsAccepted: boolean, persist: boolean = true) => {
    set({ termsAccepted });
    if (persist) {
      localStorage.setItem('terms-accepted', JSON.stringify(true));
    }
  },
}));
