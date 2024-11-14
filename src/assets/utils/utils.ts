import { format } from 'date-fns';
import warningSvg from '@/assets/icons/warning.svg';
import fireSvg from '@/assets/icons/fire.svg';
import noEntrySvg from '@/assets/icons/no-entry.svg';
import questionSvg from '@/assets/icons/question.svg';
import checkSvg from '@/assets/icons/check.svg';
import sparksSvg from '@/assets/icons/sparks.svg';
import type { Service, ServiceCasesCounter } from '@/typings/mocks/services';
import type { MyService } from '@/typings/state/account';
import { servicesMock } from '@/assets/mocks/services';

export const servicesPreparation = (): Service[] => {
  const services: Service[] = servicesMock.map(s => ({
    ...s,
    casesCounter: {
      e: s.termsConditionsRisks?.e ? s.termsConditionsRisks.e.length : 0,
      d: s.termsConditionsRisks?.d ? s.termsConditionsRisks.d.length : 0,
      c: s.termsConditionsRisks?.c ? s.termsConditionsRisks.c.length : 0,
      b: s.termsConditionsRisks?.b ? s.termsConditionsRisks.b.length : 0,
      a: s.termsConditionsRisks?.a ? s.termsConditionsRisks.a.length : 0,
    },
  }));

  const sortService = (a: Service, b: Service, l: keyof ServiceCasesCounter) =>
    b.casesCounter[l] - a.casesCounter[l] || b.riskLevel.localeCompare(a.riskLevel) || a.name.localeCompare(b.name);

  const servicesOrdered = [
    services.filter(s => s.riskLevel === 'e').sort((a, b) => sortService(a, b, 'e')),
    services.filter(s => s.riskLevel === 'd').sort((a, b) => sortService(a, b, 'd')),
    services.filter(s => s.riskLevel === 'c').sort((a, b) => sortService(a, b, 'c')),
    services.filter(s => s.riskLevel === 'b').sort((a, b) => sortService(a, b, 'b')),
    services.filter(s => s.riskLevel === 'a').sort((a, b) => sortService(a, b, 'a')),
  ];

  return servicesOrdered.flat();
};

export const formatDate = (date: string, dateFormat = 'dd/MM/yyyy') => {
  return format(new Date(date), dateFormat);
};

export const getColorByRiskAverage = (a: number) => {
  if (a === -1) return 'bg-gray-400';
  if (a < 2) return 'bg-level-e';
  if (a < 4) return 'bg-level-d';
  if (a < 6) return 'bg-level-c';
  if (a < 8) return 'bg-level-b';
  return 'bg-level-a';
};

export const getColorByRiskLevel = (a: string) => {
  if (a === 'e') return 'bg-level-e';
  if (a === 'd') return 'bg-level-d';
  if (a === 'c') return 'bg-level-c';
  if (a === 'b') return 'bg-level-b';
  if (a === 'a') return 'bg-level-a';
  return 'bg-gray-400';
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

export const getRiskMessage = (riskLevel: string): string => {
  const messages: Record<string, string> = {
    a: 'Son los mejores términos de uso: te tratan justamente, respetan tus derechos y no van a abusar de tus datos.',
    b: 'Los términos de uso son justos para los usuarios pero podrían ser mejorados.',
    c: 'Los términos de uso no están mal pero algunos problemas necesitan tu consideración.',
    d: 'Los términos de uso son muy injustos o hay problemas importantes que exigen tu atención.',
    e: 'Los términos de uso plantean preocupaciones muy serias.',
  };

  return messages[riskLevel] || 'Nivel de riesgo desconocido';
};

export const getIconByRiskLevel = (l: string) => {
  if (l === 'e') return fireSvg;
  if (l === 'd') return noEntrySvg;
  if (l === 'c') return warningSvg;
  if (l === 'b') return checkSvg;
  return sparksSvg;
};

export const getRiskAvgLevel = (services: Service[], myServices: MyService[]) => {
  if (myServices.length === 0) return -1;
  const myServicesNames = myServices.map(a => a.name);
  const servicesSelected = services.filter(a => myServicesNames.some(b => b === a?.name));
  const levels = servicesSelected.map(a => getValueByRiskLevel(a.riskLevel));
  const sum = levels.reduce((a, b) => a + b, 0);
  const avg = sum / levels.length;
  return Math.floor(avg);
};

export const getRandomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
