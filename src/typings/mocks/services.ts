import type { PropsWithChildren } from 'react';

export type RiskLevels = 'a' | 'b' | 'c' | 'd' | 'e';

export type ServiceMock = {
  imgUrl: string;
  name: string;
  label: string;
  riskLevel: RiskLevels;
  termsConditionsRisks: TermsConditionsRisks;
  advices?: Advice[];
};

export type TermsConditionsRisks<T = TermsConditionsRiskDetails[]> = {
  a?: T;
  b?: T;
  c?: T;
  d?: T;
  e?: T;
};

export type TermsConditionsRiskDetails = {
  title: string;
  description: string;
  source: string;
  imgUrl?: string;
};

export type Advice = {
  title: string;
  description: string;
};

export type Service = ServiceMock & {
  casesCounter: ServiceCasesCounter;
};

export type ServiceCasesCounter = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
};

export type ServiceCategoryWrapperProps = PropsWithChildren & {
  riskLevel: string;
};
