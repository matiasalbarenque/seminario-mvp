import { format } from 'date-fns';
import type { Service } from '@/typings/mocks/services';

export const formatDate = (date: string, dateFormat = 'dd/MM/yyyy') => {
  return format(new Date(date), dateFormat);
};

export const sortCompareStrings = (a: string, b: string) => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};

export const getColorByRiskLevel = (a: string) => {
  return 'abcde'.includes(a) ? `bg-level-${a}` : 'bg-gray-400';
};

export const getRiskByLevel = (l: number): string => {
  if (l >= 1 && l <= 5) {
    if (l <= 1.5) return 'a';
    if (l <= 2.5) return 'b';
    if (l <= 3.5) return 'c';
    if (l <= 4.5) return 'd';
    if (l <= 5) return 'e';
  }
  return '?';
};

const getValueByRiskLevel = (l: string): number => {
  const levels = 'abcde';
  return levels.includes(l) ? levels.indexOf(l) + 1 : 1;
};

export const getRiskAvgLevel = (services: Service[], myServices: string[]) => {
  const servicesSelected = services.filter(a => myServices.some(b => b === a?.name));
  const levels = servicesSelected.map(a => getValueByRiskLevel(a.riskLevel));
  const sum = levels.reduce((a, b) => a + b, 0);
  const avg = sum / levels.length;
  return Math.round(avg);
};

export const getRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
