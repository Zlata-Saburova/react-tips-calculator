import { StyledButton } from "./styles";

interface IButton {
  disabled: boolean;
}

export const Button = ({ disabled }: IButton) => {
  return (
    <StyledButton type="submit" disabled={disabled}>
      Ohhhoooo 🍻{" "}
    </StyledButton>
  );
};
