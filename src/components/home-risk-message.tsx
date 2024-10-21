import { useAccountStore } from '@/store/account';

export const HomeRiskMessage = () => {
  const accountStore = useAccountStore();

  const getRiskMessage = (l: string) => {
    if (l === 'a') {
      return {
        msg: 'Congratulations! Based on your app usage, you are not running any risk.',
        title: '✨ Lowest Risk (A)',
      };
    }
    if (l === 'b') {
      return {
        msg: 'There may be a risk affecting you. We invite you to validate it in the "Services" section.',
        title: 'Low Risk (B)',
      };
    }
    if (l === 'c') {
      return {
        msg: 'One or more risks may be affecting you, we recommend that you validate it by going to the "Services" section.',
        title: 'Medium Risk (C)',
      };
    }
    if (l === 'd') {
      return {
        msg: 'We highly recommend that you validate the risks involved that could be affecting you due to any of your services.',
        title: 'High Risk (D)',
      };
    }
    if (l === 'e') {
      return {
        msg: 'You are in a critical situation where some of your services could affect you, we strongly recommend that you validate it by going to "Services".',
        title: '🔥 Highest Risk (E)',
      };
    }
    return {
      msg: 'Select the services that you use to know the level of risk you may be facing.',
      title: 'To start go to "Services"',
    };
  };

  const riskMsg = getRiskMessage(accountStore.riskLevel);

  return (
    <div className="flex justify-center -mb-8 z-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
      <div className="w-[75%] px-4 py-3 -top-[12vw] rounded-lg bg-white bg-opacity-50 backdrop-blur-sm border-t border-white border-opacity-65 shadow-lg">
        <div className="flex flex-col gap-1 home-message text-center font-open-sans">
          <div className="font-bold tracking-wider text-lg leading-tight">{riskMsg.title}</div>
          <div className="font-medium tracking-wide">{riskMsg.msg}</div>
        </div>
      </div>
    </div>
  );
};
