import { StyledInput } from "./styles";

interface IProps {
  value: string | number;
  name: string;
  type: string;
  placeholder: string;
  min: string;
  step?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  value,
  type,
  name,
  placeholder,
  min,
  step,
  onChange,
}: IProps) => {
  return (
    <StyledInput
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      min={min}
      step={step}
      onChange={onChange}
    ></StyledInput>
  );
};
