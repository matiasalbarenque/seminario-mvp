import type { RiskLevels } from '@/typings/mocks/services';

export const sortCompareStrings = (a: string, b: string) => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};

export const getColorByRiskLevel = (level: RiskLevels) => {
  const riskLevelColor = {
    a: 'bg-level-a',
    b: 'bg-level-b',
    c: 'bg-level-c',
    d: 'bg-level-d',
    e: 'bg-level-e',
  };
  return riskLevelColor[level];
};

export const getRiskByLevel = (level: number): RiskLevels => {
  if (level === 1) return 'a';
  if (level === 2) return 'b';
  if (level === 3) return 'c';
  if (level === 4) return 'd';
  if (level === 5) return 'e';
  return 'a';
};

export const getValueByRiskLevel = (level: RiskLevels) => {
  const riskLevelValue = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
  };
  return riskLevelValue[level];
};
