export type AccountMock = Record<string, Account>;

export type Account = {
  Breaches: Breach[];
  Pastes: unknown;
};

export type Breach = {
  AddedDate: string;
  BreachDate: string;
  DataClasses: string[];
  Description: string;
  Domain: string;
  IsFabricated: boolean;
  IsMalware: boolean;
  IsRetired: boolean;
  IsSensitive: boolean;
  IsSpamList: boolean;
  IsSubscriptionFree: boolean;
  IsVerified: boolean;
  LogoPath: string;
  ModifiedDate: string;
  Name: string;
  PwnCount: number;
  Title: string;
};
