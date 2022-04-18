import { StyledInput } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
  min: string;
  step?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, min, step, onChange }: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      min={min}
      step={step}
      onChange={onChange}
    ></StyledInput>
  );
};
