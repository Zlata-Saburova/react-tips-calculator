import {
  StyledForm,
  Title,
  Text,
  Total,
  TotalAmount,
  Button,
  Wrapper,
  InputItems,
} from "./styles";

export const Form = () => {
  return (
    <Wrapper>
      <StyledForm>
        <Title>Welcome to App</Title>
        <Text>Let`s go calculate your tips</Text>
        <InputItems></InputItems>
        <Total>Total:</Total>
        <TotalAmount></TotalAmount>
        <Button>Ohhhoooo 🍻 </Button>
      </StyledForm>
    </Wrapper>
  );
};
