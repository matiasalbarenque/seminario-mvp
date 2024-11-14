import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAccountStore } from '@/store/account';

export const HomeRiskMessage = () => {
  const accountStore = useAccountStore();

  const getRiskMessage = (a: number) => {
    if (a === -1) return 'Selecciona tus servicios';
    if (a < 2) return '🔥 Riesgo elevado 🔥';
    if (a < 4) return '⛔ Riesgo alto ⛔';
    if (a < 6) return '⚠️ Riesgo medio ⚠️';
    if (a < 8) return '✅ Riesgo bajo ✅';
    return '✨ ¡Todo está bien! ✨';
  };

  return (
    <div className="flex justify-center -mb-8 z-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="mx-6 w-full max-w-[300px] p-4 -top-[6vh] rounded-lg bg-white bg-opacity-60 backdrop-blur-[8px] border-t border-white border-opacity-65 shadow-lg">
        <div className="flex flex-col gap-3 text-center font-open-sans">
          <div className="home-message font-dm-sans font-semibold tracking-wide text-lg uppercase">
            {getRiskMessage(accountStore.riskLevel)}
          </div>
          <div>
            {accountStore.riskLevel < 8 && (
              <Button className="rounded-full" asChild>
                <Link to="/services" className="gap-2">
                  Ir a Servicios
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
