import type { Breach } from '../mocks/account';

export type CustomSelectProps = {
  onChange: (value: string) => void;
  options: string[];
  value: string;
};

export type BreachCardProps = {
  breach: Breach;
  index: number;
};
