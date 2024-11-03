import { format } from 'date-fns';
import warningSvg from '@/assets/icons/warning.svg';
import fireSvg from '@/assets/icons/fire.svg';
import noEntrySvg from '@/assets/icons/no-entry.svg';
import questionSvg from '@/assets/icons/question.svg';
import checkSvg from '@/assets/icons/check.svg';
import sparksSvg from '@/assets/icons/sparks.svg';
import type { Service } from '@/typings/mocks/services';

export const formatDate = (date: string, dateFormat = 'dd/MM/yyyy') => {
  return format(new Date(date), dateFormat);
};

export const sortCompareStrings = (a: string, b: string) => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};

export const getColorByRiskLevel = (a: number) => {
  if (a === -1) return 'bg-gray-400';
  if (a < 2) return 'bg-level-e';
  if (a < 4) return 'bg-level-d';
  if (a < 6) return 'bg-level-c';
  if (a < 8) return 'bg-level-b';
  return 'bg-level-a';
};

export const getIconByRiskAverage = (a: number) => {
  if (a === -1) return questionSvg;
  if (a < 2) return fireSvg;
  if (a < 4) return noEntrySvg;
  if (a < 6) return warningSvg;
  if (a < 8) return checkSvg;
  return sparksSvg;
};

export const getValueByRiskLevel = (l: string): number => {
  const levels = 'edcba';
  return levels.includes(l) ? levels.indexOf(l) * 2 + 1 : 0;
};

export const getDescriptionByRiskLevel = (l: string): string => {
  if (l === 'e') return 'Riesgo elevado';
  if (l === 'd') return 'Riesgo alto';
  if (l === 'c') return 'Riesgo medio';
  if (l === 'b') return 'Riesgo bajo';
  return 'Sin Riesgo';
};

export const getIconByRiskLevel = (l: string) => {
  if (l === 'e') return fireSvg;
  if (l === 'd') return noEntrySvg;
  if (l === 'c') return warningSvg;
  if (l === 'b') return checkSvg;
  return sparksSvg;
};

export const getRiskAvgLevel = (services: Service[], myServices: string[]) => {
  if (myServices.length === 0) return -1;
  const servicesSelected = services.filter(a => myServices.some(b => b === a?.name));
  const levels = servicesSelected.map(a => getValueByRiskLevel(a.riskLevel));
  const sum = levels.reduce((a, b) => a + b, 0);
  const avg = sum / levels.length;
  return Math.floor(avg);
};

export const getRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
