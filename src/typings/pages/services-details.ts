import type { RiskLevels, TermsConditionsRiskDetails } from '../mocks/services';

export type ServiceDetailsContentProps = {
  details: ServiceDetailsData;
};

export type ServiceDetailsData = {
  type: 'cases' | 'separator';
  risk: RiskLevels;
  items: TermsConditionsRiskDetails[];
};

export type NoDataPlaceholderProps = {
  service: string;
};
