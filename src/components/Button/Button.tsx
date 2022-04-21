import { StyledButton } from "./styles";

interface IButton {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: IButton) => {
  return (
    <StyledButton type="submit" disabled={isDisabled}>
      Ohhhoooo 🍻
    </StyledButton>
  );
};
