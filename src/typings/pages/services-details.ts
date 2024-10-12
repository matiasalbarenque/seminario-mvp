import type { RiskLevels, TermsConditionsRiskDetails } from '../mocks/services';

export type CustomSelectProps = {
  onChange: (value: RiskLevels) => void;
  options: RiskSelectOption[];
  value: string;
};

export type RiskSelectOption = {
  className: string;
  label: string;
  value: RiskLevels;
};

export type CustomAccordionProps = {
  details: TermsConditionsRiskDetails[];
  riskLevel: string;
};

export type NoDataPlaceholderProps = {
  service: string;
};
