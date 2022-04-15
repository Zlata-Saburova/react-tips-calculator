import { StyledInput } from "./styles";

interface IProps {
  type: string;
  placeholder: string;
  min: string;
  step?: string;
}

export const Input = ({ type, placeholder, min, step }: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      min={min}
      step={step}
    ></StyledInput>
  );
};
