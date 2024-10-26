import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAccountStore } from '@/store/account';

export const HomeRiskMessage = () => {
  const accountStore = useAccountStore();

  const getRiskMessage = (a: string) => {
    if (a === 'a') return '✨ ¡Todo está bien! ✨';
    if (a === 'b') return '✅ Riesgo bajo ✅';
    if (a === 'c') return '⚠️ Riesgo medio ⚠️';
    if (a === 'd') return '⛔ Riesgo alto ⛔';
    if (a === 'e') return '🔥 Riesgo más alto 🔥';
    return 'Selecciona tus servicios';
  };

  return (
    <div className="flex justify-center -mb-8 z-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="min-w-[60%] p-4 -top-[12vw] rounded-lg bg-white bg-opacity-50 backdrop-blur-sm border-t border-white border-opacity-65 shadow-lg">
        <div className="flex flex-col gap-3 text-center font-open-sans">
          <div className="home-message font-dm-sans font-semibold tracking-wide text-lg uppercase">
            {getRiskMessage(accountStore.riskLevel)}
          </div>
          <div>
            <Button className="rounded-full" asChild>
              <Link to="/services" className="gap-2">
                Ir a Servicios
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
