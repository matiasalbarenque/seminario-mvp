import { useCallback, useEffect, useRef, useState } from 'react';
import { LevelIndicator } from './level-indicator';
import { useAccountStore } from '@/store/account';
import type { RiskLevels } from '@/typings/mocks/services';

type Direction = 'forward' | 'backward';

export const HomeWelcomeCard = () => {
  const accountStore = useAccountStore();
  const [direction, setDirection] = useState<Direction>('forward');
  const [riskLevel, setRiskLevel] = useState<RiskLevels>('a');
  const interval = useRef<NodeJS.Timeout>();

  const getRiskLevel = (rl: RiskLevels) => {
    if (direction === 'forward') {
      if (rl === 'a') return 'b';
      if (rl === 'b') return 'c';
      if (rl === 'c') return 'd';
      if (rl === 'd') return 'e';
      return 'e';
    } else {
      if (rl === 'e') return 'd';
      if (rl === 'd') return 'c';
      if (rl === 'c') return 'b';
      if (rl === 'b') return 'a';
      return 'a';
    }
  };

  const initAnimation = useCallback(() => {
    if (riskLevel === 'e' && direction === 'forward') {
      setDirection('backward');
    } else if (riskLevel === 'a' && direction === 'backward') {
      setDirection('forward');
    }
    setRiskLevel(getRiskLevel(riskLevel));
  }, [riskLevel, direction]);

  useEffect(() => {
    interval.current = setInterval(initAnimation, 500);
    return () => {
      clearTimeout(interval.current);
    };
  }, [riskLevel, direction]);

  if (accountStore.riskLevel !== '?') {
    clearTimeout(interval.current);
    return <></>;
  }

  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-center">
        <div className="w-20 h-[1px] bg-slate-300" />
      </div>
      <div className="p-4 w-full flex flex-col items-center gap-5">
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-lg text-center">✨ Welcome to Antidote!</div>
          <div className="text-center">
            We are compromised to simplify the way that Terms & Conditions are read and understood by showing a risk
            level of your private information where A is the Lowest Risk and E is the highest.
          </div>
        </div>
        <div className="h-20 flex justify-center items-center gap-5">
          <div className="w-9 h-9 flex justify-center items-center bg-level-a rounded-full text-xl font-medium text-white">
            A<div className="absolute -top-4 -left-4 text-2xl">👍</div>
          </div>
          <div className="w-32 h-20 flex justify-center items-center">
            <LevelIndicator riskLevel={riskLevel} className="scale-[3] -translate-y-1" />
          </div>
          <div className="w-9 h-9 flex justify-center items-center bg-level-e rounded-full text-xl font-medium text-white">
            E<div className="absolute -bottom-4 -right-4 text-2xl">👎</div>
          </div>
        </div>
      </div>
    </div>
  );
};
