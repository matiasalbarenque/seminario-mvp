export type RiskLevels = 'a' | 'b' | 'c' | 'd' | 'e';

export type Service = {
  imgUrl: string;
  name: string;
  label: string;
  riskLevel: RiskLevels;
  termsConditionsRisks?: TermsConditionsRisks;
};

type TermsConditionsRisks = {
  a?: TermsConditionsRiskDetails[];
  b?: TermsConditionsRiskDetails[];
  c?: TermsConditionsRiskDetails[];
  d?: TermsConditionsRiskDetails[];
  e?: TermsConditionsHighRiskDetails[];
};

export type TermsConditionsRiskDetails = {
  title: string;
  description: string;
  source: string;

};export type TermsConditionsHighRiskDetails = {
  title: string;
  description: string;
  source: string;
  imgUrl: string;
};
