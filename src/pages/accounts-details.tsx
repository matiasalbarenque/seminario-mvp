import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppStore } from '@/store/app';
import { Icon } from '@/components/ui/icon';
import { accountMock } from '@/assets/mocks/account';
import { formatDate } from '@/assets/utils';
import type { Breach } from '@/typings/mocks/account';

export const AccountsDetailsPage = () => {
  const params = useParams();
  const appStore = useAppStore();
  const [breach, setBreach] = useState<Breach>();
  const [isLoading, setIsLoading] = useState(!true);

  useEffect(() => {
    appStore.setAppConfig({
      pageTitle: 'Detalles',
      hideFooter: true,
    });
    getEmailBreach(params?.email, params?.index);
  }, []);

  const getEmailBreach = async (email: string = '', index: string = '0') => {
    setIsLoading(true);
    await new Promise(a => setTimeout(a, 300));
    if (Object.keys(accountMock).includes(email)) {
      const breaches = accountMock[email].Breaches;
      const breachTmp = breaches[Number.parseInt(index)];
      setBreach(breachTmp);
    } else {
      setBreach(undefined);
    }
    setIsLoading(false);
  };

  // if () {
  //   return (
  //     <div className="grid grid-rows-[min-content,auto] gap-4">
  //       <Button variant="outline" className="h-11" asChild>
  //         <Link to="/accounts-selection" className="flex gap-2">
  //           <Icon icon="material-symbols:add-2" size={20} />
  //           Add account
  //         </Link>
  //       </Button>
  //       <div className="overflow-y-auto overflow-x-hidden">
  //         <Alert>
  //           <Icon icon="carbon:document-unknown" size={18} />
  //           <AlertTitle>No account loaded yet!</AlertTitle>
  //           <AlertDescription>Here you will see the vulnerabilities on your accounts</AlertDescription>
  //         </Alert>
  //       </div>
  //     </div>
  //   );
  // }

  if (isLoading || !breach) {
    return (
      <div className="w-full h-24 flex justify-center items-center">
        <Icon icon="mingcute:loading-line" size={48} className="animate-spin text-slate-600" />
      </div>
    );
  }

  const logo =
    breach?.LogoPath === 'https://haveibeenpwned.com/Content/Images/PwnedLogos/List.png'
      ? '/img/placeholders/no-image.png'
      : breach?.LogoPath;

  return (
    <div className="grid grid-rows-[auto] gap-4">
      <div className="overflow-auto">
        <div className="h-0">
          <div className="flex flex-col items-start gap-3">
            <div className="w-full h-24 flex justify-center">
              <div className="flex justify-center items-center">
                <div className="pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-full shadow-sm">
                  {breach.Name}
                </div>
                <div className="absolute -left-8 w-16 h-16 p-2.5 bg-slate-50 border border-slate-300 rounded-full overflow-hidden shadow-md">
                  <img
                    src={logo}
                    alt={`${breach.Name}-${breach.BreachDate}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="lets-icons:e-mail-light" size={18} className="text-slate-900" />
              <span className="text-sm text-slate-800">
                <span className="font-medium">Email:</span> {params?.email}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="solar:calendar-linear" size={18} className="text-slate-600" />
              <span className="text-sm text-slate-800">
                <span className="font-medium">Fecha de la vulneración:</span> {formatDate(breach.BreachDate || '')}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon="ion:bug-outline" size={18} className="text-slate-600" />
              <span className="text-sm text-slate-800">
                <span className="font-medium">Datos comprometidos:</span>
              </span>
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
            <div className="w-full mt-4 mb-5 border-b border-slate-300" />
          </div>
          <div
            className="text-sm tracking-wide leading-relaxed pointer-events-none"
            dangerouslySetInnerHTML={{ __html: breach.Description }}
          />
        </div>
      </div>
    </div>
  );
};
