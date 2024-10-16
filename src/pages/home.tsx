import { useEffect, useState } from 'react';
import { Footer } from '@/components/footer';
import { useAccountStore } from '@/store/account';
import { services } from '@/assets/mocks/services';
import { getColorByRiskLevel, getRiskByLevel, getValueByRiskLevel } from '@/assets/utils/utils';
import type { RiskLevels } from '@/typings/mocks/services';

export const HomePage = () => {
  const accountStore = useAccountStore();
  const [riskLevel, setRiskLevel] = useState<RiskLevels>('a');
  const [levelColor, setLevelColor] = useState('bg-gray-400');

  const getUserAverageLevel = () => {
    const servicesSelected = services.filter(a => accountStore.services.some(b => b === a?.name));
    const levels = servicesSelected.map(a => getValueByRiskLevel(a.riskLevel));
    const sum = levels.reduce((a, b) => a + b, 0);
    const avg = sum / levels.length;
    return Math.round(avg);
  };

  useEffect(() => {
    if (accountStore.services.length > 0) {
      const level = getUserAverageLevel();
      const riskLevel = getRiskByLevel(level);
      setRiskLevel(riskLevel);
      setLevelColor(getColorByRiskLevel(riskLevel));
    }
  }, [accountStore.services]);

  const Waves = () => {
    return (
      <>
        <svg className="wave1 absolute left-0 -bottom-4" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            d="m0 160 80-10.7c80-10.3 240-32.3 400-10.6C640 160 800 224 960 224s320-64 400-96l80-32v224H0Z"
          />
        </svg>
        <svg className="wave2 absolute left-0 bottom-0" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            d="m0 288 40-42.7C80 203 160 117 240 117.3 320 117 400 203 480 224s160-21 240-58.7c80-37.3 160-69.3 240-80 80-10.3 160-.3 240 21.4 80 21.3 160 53.3 200 69.3l40 16v128H0Z"
          />
        </svg>
        <svg className="wave3 absolute left-0 bottom-0" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            d="m0 256 48-16c48-16 144-48 240-48s192 32 288 53.3C672 267 768 277 864 240s192-123 288-122.7c96-.3 192 85.7 240 128l48 42.7v32H0Z"
          />
        </svg>
        <svg className="wave4 absolute left-0 bottom-0" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            d="m0 192 40 5.3C80 203 160 213 240 224s160 21 240-16S640 85 720 58.7c80-26.7 160 5.3 240 48 80 42.3 160 96.3 240 122.6 80 26.7 160 26.7 200 26.7h40v64H0Z"
          />
        </svg>
      </>
    );
  };

  const HomeMonitor = () => {
    return (
      <div className={`home-monitor min-h-48 h-[45vw] overflow-hidden ${levelColor}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white opacity-40 to-transparent to-40%" />
        <Waves />
        <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
          <div className="monitor-risk-level-indicator w-[18vw] h-[18vw] min-w-24 min-h-24 mb-10 flex justify-center items-center rounded-full animate-in zoom-in-75 duration-700">
            <div className="text-[clamp(3.5rem,11vw,10rem)] text-white font-light uppercase">{riskLevel}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-dvh flex flex-col">
      <section className="flex-1 flex flex-col">
        <HomeMonitor />
        <div className="flex justify-center h-[30vw] z-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
          <div className="absolute w-[75%] h-full px-3 py-2 -top-[11vw] rounded-lg bg-white shadow-lg">hi!</div>
        </div>
        <div className="flex-1 p-4 -mt-8">
          <h1 className="text-2xl font-semibold">HOME</h1>
        </div>
      </section>
      <Footer />
    </div>
  );
};
