import Select, { SingleValue } from "react-select";
import { Option } from "../../types/index";

const options: Option[] = [
  { value: 10, label: "10%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];

interface ISelect {
  onChange: (newValue: SingleValue<Option>) => void;
}

export const CustomSelect = ({ onChange }: ISelect) => {
  return <Select options={options} onChange={onChange} />;
};
