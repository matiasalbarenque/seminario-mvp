import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/store/app';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAccountStore } from '@/store/account';
import type { BreachCardProps, CustomSelectProps } from '@/typings/pages/accounts';
import { accountMock } from '@/assets/mocks/account';
import type { Account } from '@/typings/mocks/account';

export const AccountsPage = () => {
  const appStore = useAppStore();
  const accountStore = useAccountStore();
  const [selectValue, setSelectValue] = useState('');
  const [accountData, setAccountData] = useState<Account>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Accounts',
    });
  }, []);

  useEffect(() => {
    const initialValue = accountStore.accounts.length > 0 ? accountStore.accounts[0] : '';
    if (initialValue.length > 0) {
      selectHandler(initialValue);
    }
  }, [accountStore.accounts]);

  const getEmailBreaches = async (email: string) => {
    setIsLoading(true);
    await new Promise(a => setTimeout(a, 300));
    if (Object.keys(accountMock).includes(email)) {
      setAccountData(accountMock[email]);
    } else {
      setAccountData(undefined);
    }
    setIsLoading(false);
  };

  const CustomSelect = (props: CustomSelectProps) => {
    const { value, onChange, options } = props;
    if (options.length === 0) {
      return;
    }
    return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full h-11">
          <SelectValue placeholder="Select a email" />
        </SelectTrigger>
        <SelectContent>
          {options.map(a => (
            <SelectItem value={a} key={`select-email-${a}`} className="h-10">
              {a}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };

  if (accountStore.accounts.length === 0) {
    return (
      <div className="grid grid-rows-[min-content,auto] gap-4">
        <Button variant="outline" className="h-11" asChild>
          <Link to="/accounts-selection" className="flex gap-2">
            <Icon icon="material-symbols:add-2" size={20} />
            Add account
          </Link>
        </Button>
        <div className="overflow-y-auto overflow-x-hidden">
          <Alert>
            <Icon icon="carbon:document-unknown" size={18} />
            <AlertTitle>No account loaded yet!</AlertTitle>
            <AlertDescription>Here you will see the vulnerabilities on your accounts</AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  const selectHandler = (email: string) => {
    setSelectValue(email);
    getEmailBreaches(email);
  };

  const BreachCard = (props: BreachCardProps) => {
    const { breach, index } = props;
    const logo =
      breach.LogoPath === 'https://haveibeenpwned.com/Content/Images/PwnedLogos/List.png'
        ? '/img/placeholders/no-image.png'
        : breach.LogoPath;
    return (
      <div className="w-full p-4 flex gap-4 border rounded-md shadow-sm">
        <div>
          <div className="w-14 h-14 p-2.5 bg-slate-50 border rounded-full overflow-hidden">
            <img src={logo} alt={`${breach.Name}-${breach.BreachDate}`} className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-sm font-medium tracking-wide">{breach.Name}</div>
          <div
            className="text-sm line-clamp-3 pointer-events-none"
            dangerouslySetInnerHTML={{ __html: breach.Description }}
          />
          <div className="flex items-center gap-1">
            <Icon icon="solar:calendar-linear" size={18} className="text-slate-500" />
            <span className="text-sm text-slate-600">Breach date: {breach.BreachDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="ion:bug-outline" size={18} className="text-slate-500" />
            <span className="text-sm text-slate-600">Compromised data:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {breach.DataClasses.map(a => (
              <div
                className="px-2 py-1 w-min whitespace-nowrap border border-slate-300 bg-slate-100 rounded-full text-xs text-slate-900 tracking-wide"
                key={`${breach.Name}-${breach.BreachDate}-${a}`}
              >
                {a}
              </div>
            ))}
          </div>
          <div className="pt-1">
            <Button variant="outline" asChild>
              <Link to={`/accounts/${selectValue}/${index}`}>
                See details
                <Icon icon="solar:arrow-right-outline" size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-rows-[min-content,auto] gap-4">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <CustomSelect value={selectValue} options={accountStore.accounts} onChange={selectHandler} />
        </div>
        <Button variant="outline" className="h-11" asChild>
          <Link to="/accounts-selection">
            <Icon icon="solar:settings-outline" size={20} />
          </Link>
        </Button>
      </div>
      <div className="overflow-y-auto overflow-x-hidden">
        {isLoading ? (
          <div className="w-full h-24 flex justify-center items-center">
            <Icon icon="mingcute:loading-line" size={48} className="animate-spin text-slate-600" />
          </div>
        ) : (
          <div className="h-0 flex flex-col gap-3">
            {accountData?.Breaches.map((a, i) => <BreachCard breach={a} index={i} key={`${a.Name}-${a.BreachDate}`} />)}
          </div>
        )}
      </div>
    </div>
  );
};
