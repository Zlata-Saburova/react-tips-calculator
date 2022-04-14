import {
  StyledForm,
  Title,
  Text,
  Total,
  TotalAmount,
  Wrapper,
  InputItems,
} from "./styles";

import { Button } from "../Button/Button";

export const Form = () => {
  return (
    <Wrapper>
      <StyledForm>
        <Title>Welcome to App</Title>
        <Text>Let`s go calculate your tips</Text>
        <InputItems></InputItems>
        <Total>Total:</Total>
        <TotalAmount></TotalAmount>
        <Button></Button>
      </StyledForm>
    </Wrapper>
  );
};
