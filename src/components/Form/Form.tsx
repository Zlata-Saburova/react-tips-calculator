import {
  StyledForm,
  Title,
  Text,
  Total,
  TotalAmount,
  Button,
  Wrapper,
} from "./styles";

export const Form = () => {
  return (
    <Wrapper>
      <StyledForm>
        <Title>Welcome to App</Title>
        <Text>Let`s go calculate your tips</Text>
        <Total>Total:</Total>
        <TotalAmount></TotalAmount>
        <Button>Ohhhoooo 🍻 </Button>
      </StyledForm>
    </Wrapper>
  );
};
