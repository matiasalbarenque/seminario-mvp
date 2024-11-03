import { useState } from 'react';
import { useAccountStore } from '@/store/account';
import { getColorByRiskLevel, getIconByRiskAverage } from '@/assets/utils';
import { HeaderAvatar } from './header-avatar';
import { HomeMonitorDialog } from './home-monitor-dialog';

const Waves = () => (
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

export const HomeMonitor = () => {
  const accountStore = useAccountStore();
  const [showDialow, setShowDialow] = useState(false);
  const bgColor = getColorByRiskLevel(accountStore.riskLevel);

  const toggleDialowHandler = () => {
    setShowDialow(a => !a);
  };

  return (
    <>
      <div
        className={`home-monitor min-h-48 h-[45vw] overflow-hidden transition-colors duration-1000 bg-gray-400 ${bgColor}`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white opacity-40 to-transparent to-40%" />
        <Waves />
        <div className="absolute w-full h-full top-0 left-0 pb-10 flex justify-center items-center">
          <div
            className="monitor-risk-level-indicator w-[18vw] h-[18vw] min-w-24 min-h-24 flex justify-center items-center rounded-full animate-in zoom-in-75 duration-700"
            onClick={toggleDialowHandler}
          >
            <div className="home-monitor-pulse absolute w-1 h-1 bg-white rounded-full" />
            <div className="p-4">
              <img
                src={getIconByRiskAverage(accountStore.riskLevel)}
                width="100%"
                height="100%"
                className="home-monitor-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <HeaderAvatar />
      </div>
      <HomeMonitorDialog open={showDialow} onClose={toggleDialowHandler} />
    </>
  );
};
