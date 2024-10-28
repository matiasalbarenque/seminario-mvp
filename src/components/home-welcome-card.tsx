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

  if (accountStore.riskLevel !== -1) {
    clearTimeout(interval.current);
    return <></>;
  }

  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-center">
        <div className="w-20 h-[1px] bg-slate-300" />
      </div>
      <div className="p-4 w-full flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-lg text-center">¡Bienvenido a Antídoto!</div>
          <div className="text-center">
            Estamos comprometidos a simplificar la forma en que se leen y comprenden los Términos y Condiciones.
          </div>
        </div>
        <div className="h-20 flex justify-center items-center gap-5">
          <div className="w-12 h-12 flex justify-center items-center border border-gray-300 bg-gray-50 rounded-full text-3xl font-medium text-white">
            🔥
          </div>
          <div className="w-32 h-20 flex justify-center items-center">
            <LevelIndicator riskLevel={riskLevel} className="scale-[3] -translate-y-1" />
          </div>
          <div className="w-12 h-12 flex justify-center items-center border border-gray-300 bg-gray-50 rounded-full text-3xl font-medium text-white">
            ✨
          </div>
        </div>
      </div>
    </div>
  );
};
