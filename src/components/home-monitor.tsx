import { useState } from 'react';
import { useAccountStore } from '@/store/account';
import { getColorByRiskAverage, getIconByRiskAverage } from '@/assets/utils';
import { HeaderAvatar } from './header-avatar';
import { HomeMonitorDialog } from './home-monitor-dialog';

const getIsHighRiskLevel = (a: number) => a >= 0 && a < 6;

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

const Pulse = (riskLevel: number) => {
  const pulseColor = getColorByRiskAverage(riskLevel);
  return (
    <div
      className={`background-pulse top-0 left-0 w-full h-full bg-level-c rounded-tl-full rounded-tr-full blur-2xl ${pulseColor} bg-opacity-90`}
    />
  );
};

export const HomeMonitor = () => {
  const accountStore = useAccountStore();
  const [showDialog, setShowDialog] = useState(false);
  const isHighRiskLevel = getIsHighRiskLevel(accountStore.riskLevel);
  const bgColor = isHighRiskLevel ? 'bg-black' : getColorByRiskAverage(accountStore.riskLevel);

  const toggleDialogHandler = () => {
    setShowDialog(a => !a);
  };

  return (
    <>
      <div className={`home-monitor min-h-[230px] h-[30vh] overflow-hidden transition-colors duration-1000 ${bgColor}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white opacity-30 to-transparent to-40% z-10" />
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <svg viewBox="0 0 1440 320" className="absolute left-0 -bottom-[4.25vw] z-10">
            <path fill="#fff" d="m0 192 120 16c120 16 360 48 600 48s480-32 600-48l120-16v128H0Z" />
          </svg>
          {isHighRiskLevel ? Pulse(accountStore.riskLevel) : <Waves />}
        </div>
        <div className="absolute w-full h-full top-0 left-0 pb-8 flex justify-center items-center z-20">
          <div
            className="monitor-risk-level-indicator min-w-24 min-h-24 w-[11vh] h-[11vh] flex justify-center items-center rounded-full animate-in zoom-in-75 duration-700"
            onClick={toggleDialogHandler}
          >
            <div className="home-monitor-pulse absolute w-1 h-1 bg-white rounded-full" />
            <div className="p-4 w-full h-full">
              <img
                src={getIconByRiskAverage(accountStore.riskLevel)}
                width="100%"
                height="100%"
                className={isHighRiskLevel ? 'home-monitor-icon' : ''}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 z-30">
        <HeaderAvatar />
      </div>
      <HomeMonitorDialog open={showDialog} onClose={toggleDialogHandler} />
    </>
  );
};
