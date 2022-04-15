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
import { Input } from "../Input/Input";
import { Select } from "../CustomSelect/styles";

export const Form = () => {
  return (
    <Wrapper>
      <StyledForm>
        <Title>Welcome to App</Title>
        <Text>Let`s go calculate your tips</Text>
        <InputItems>
          <Input type="number" placeholder="Enter bill"></Input>
          <Input type="number" placeholder="Enter  persons"></Input>
          <Select>
            <option>10%</option>
            <option>20%</option>
            <option>30%</option>
          </Select>
        </InputItems>
        <AmountWrapper>
          <Total>Total:</Total>
          <TotalAmount>0.00$</TotalAmount>
        </AmountWrapper>
        <Button></Button>
      </StyledForm>
    </Wrapper>
  );
};
