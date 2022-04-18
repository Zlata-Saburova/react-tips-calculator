import { Select } from "./styles";

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CustomSelect = ({ onChange }: IProps) => {
  return <Select onChange={onChange}></Select>;
};
