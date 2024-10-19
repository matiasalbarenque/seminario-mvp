import { useAccountStore } from '@/store/account';

export const HomeRiskMessage = () => {
  const accountStore = useAccountStore();

  const getRiskMessage = (l: string) => {
    if (l === 'a') return 'Congratulations! Based on your app usage, you are not running any risk.';
    if (l === 'b') return 'There may be a risk affecting you. We invite you to validate it in the "Services" section.';
    if (l === 'c')
      return 'One or more risks may be affecting you, we recommend that you validate it by going to the "Services" section.';
    if (l === 'd')
      return 'We highly recommend that you validate the risks involved that could be affecting you due to any of your services.';
    if (l === 'e')
      return 'You are in a critical situation where some of your services could affect you, we strongly recommend that you validate it by going to "Services".';
    return 'Select your services to know the level of risk you may be facing.';
  };

  return (
    <div className="flex justify-center -mb-12 z-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="w-[75%] px-4 py-3 -top-[12vw] rounded-lg bg-white bg-opacity-50 backdrop-blur-sm border-t border-white border-opacity-65 shadow-lg">
        <div className="home-message font-medium text-center font-open-sans tracking-wide">
          {getRiskMessage(accountStore.riskLevel)}
        </div>
      </div>
    </div>
  );
};
