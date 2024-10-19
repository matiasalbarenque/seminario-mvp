import { useEffect, useState } from 'react';
import { useAppStore } from '@/store/app';

export const SplashScreen = () => {
  const appStore = useAppStore();
  const [isVanishing, setIsVanishing] = useState(false);

  useEffect(() => {
    if (!appStore.hasSplashScreenShown) {
      setTimeout(() => {
        setIsVanishing(true);
        setTimeout(() => {
          appStore.setHasSplashScreenShown(true);
        }, 500);
      }, 1500);
    }
  }, []);

  if (appStore.hasSplashScreenShown) {
    return <></>;
  }

  const baseClass =
    'absolute top-0 left-0 w-full h-full flex justify-center items-center bg-amber-400 z-50 transition-opacity duration-500';
  return (
    <div className={`${baseClass} ${isVanishing ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-7xl font-squada-one">Antidote</div>
    </div>
  );
};
