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
import { Input } from "../Input/Input";
import { Select } from "../CustomSelect/styles";

export const Form = () => {
  return (
    <Wrapper>
      <StyledForm>
        <Title>Welcome to App</Title>
        <Text>Let`s go calculate your tips</Text>
        <InputItems>
          <Input
            type="number"
            placeholder="Enter bill"
            min="0.01"
            step="0.01"
          ></Input>
          <Input type="number" placeholder="Enter  persons" min="1"></Input>
          <Select>
            <option>10%</option>
            <option>20%</option>
            <option>30%</option>
          </Select>
        </InputItems>
        <Total>
          Total: <TotalAmount>0.00</TotalAmount>$
        </Total>
        <Button></Button>
      </StyledForm>
    </Wrapper>
  );
};
