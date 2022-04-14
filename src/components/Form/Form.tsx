import {
  StyledForm,
  Title,
  Text,
  Total,
  TotalAmount,
  Wrapper,
  InputItems,
  AmountWrapper,
} from "./styles";

import { Button } from "../Button/Button";

export const Form = () => {
  return (
    <Wrapper>
      <StyledForm>
        <Title>Welcome to App</Title>
        <Text>Let`s go calculate your tips</Text>
        <InputItems></InputItems>
        <AmountWrapper>
          <Total>Total:</Total>
          <TotalAmount>0.00$</TotalAmount>
        </AmountWrapper>
        <Button></Button>
      </StyledForm>
    </Wrapper>
  );
};
