import { StyledInput } from "./styles";

interface IProps {
  value: string | number;
  name: string;
  type: string;
  placeholder: string;
  min: string;
  step?: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  value,
  type,
  name,
  placeholder,
  min,
  step,
  handleInput,
}: IProps) => {
  return (
    <StyledInput
      value={value}
      type={type}
      name={name}
      placeholder={placeholder}
      min={min}
      step={step}
      onChange={handleInput}
    />
  );
};
