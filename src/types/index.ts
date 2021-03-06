export interface ICheque {
  bill: string | number;
  persons: string | number;
  tip: IOption["value"];
  total: number;
}

export interface IOption {
  value: number;
  label: string;
}
