import { type } from "os";

export interface ICheque {
  bill: number;
  persons: number;
  tip: number;
  total: number;
}

export interface IOption {
  value: number;
  label: string;
}
