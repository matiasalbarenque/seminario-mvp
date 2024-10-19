import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppStore } from '@/store/app';
import { useAccountStore } from '@/store/account';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import { sortCompareStrings } from '@/assets/utils';
import type { AccountSelectionForm } from '@/typings/pages/accounts-selection';
import { RhfInput } from '@/components/ui/rhf/rhf-input';

export const AccountSelectionPage = () => {
  const appStore = useAppStore();
  const accountStore = useAccountStore();
  const { toast } = useToast();

  const [accountsOrdered, setAccountsOrdered] = useState<string[]>([]);

  const { control, handleSubmit, resetField } = useForm<AccountSelectionForm>({
    mode: 'onChange',
    defaultValues: {
      email: '',
    },
  });

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Manage your accounts',
      hideFooter: true,
    });
  }, []);

  useEffect(() => {
    const accounts = accountStore.accounts.sort((a, b) => sortCompareStrings(a, b));
    setAccountsOrdered(accounts);
  }, [accountStore.accounts]);

  const onSubmit = async (formData: AccountSelectionForm) => {
    if (!accountStore.accounts.includes(formData.email)) {
      accountStore.setAccounts([...accountStore.accounts, formData.email]);
      resetField('email', { defaultValue: '', keepDirty: true });
    } else {
      toast({
        title: 'Email already exist in the list!',
        duration: 1500,
        variant: 'error',
      });
    }
  };

  const removeAccountHandler = (account: string) => {
    const accounts = accountStore.accounts.filter(a => a !== account);
    accountStore.setAccounts(accounts);
  };

  return (
    <div className="grid grid-rows-[min-content,auto] gap-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-3">
          <RhfInput
            control={control}
            name="email"
            type="email"
            id="email-input"
            placeholder="Email..."
            className="h-11"
          />
          <Button type="submit" className="h-11 gap-2">
            <Icon icon="lucide:plus" size={20} />
            Add
          </Button>
        </div>
      </form>
      <div className="overflow-auto">
        <div className="h-0 flex flex-col gap-3">
          {accountsOrdered.map(a => (
            <div className="w-full flex gap-2.5 px-2 py-1.5 rounded-[6px] border shadow-sm" key={a}>
              <div className="w-9 h-9 flex justify-center items-center">
                <Icon icon="lets-icons:e-mail-light" size={22} />
              </div>
              <div className="flex-1 flex items-center text-sm">{a}</div>
              <div className="flex items-center">
                <Button variant="ghost" className="px-2" onClick={() => removeAccountHandler(a)}>
                  <Icon icon="solar:trash-bin-minimalistic-linear" size={23} className="text-red-600" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
