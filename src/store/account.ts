import { create } from 'zustand';
import type { AccountState } from '@/typings/state/account';

export const useAccountStore = create<AccountState>()(set => ({
  services: [],
  accounts: [],
  setServices: (services: string[], persist: boolean = true) => {
    set({ services });
    if (persist) {
      localStorage.setItem('account-services', JSON.stringify(services));
    }
  },
  setAccounts: (accounts: string[], persist: boolean = true) => {
    set({ accounts });
    if (persist) {
      localStorage.setItem('account-emails', JSON.stringify(accounts));
    }
  },
}));
