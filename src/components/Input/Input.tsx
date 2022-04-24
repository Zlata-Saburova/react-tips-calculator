import { StyledInput } from "./styles";

interface IProps {
  value: string | number;
  name: string;
  min: string;
  step?: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, name, min, step, handleInput }: IProps) => {
  return (
    <StyledInput
      value={value}
      type="number"
      name={name}
      placeholder={`Enter ${name}`}
      min={min}
      step={step}
      onChange={handleInput}
    />
  );
};
