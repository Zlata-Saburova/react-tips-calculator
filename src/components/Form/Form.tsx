import { StyledForm, Title, Text, Total, InputContainer } from "./styles";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ICheque } from "../../types";
import { IOption } from "../../types/index";
import { CustomSelect } from "../CustomSelect/CustomSelect";

export const Form = () => {
  const [cheque, setCheque] = useState<ICheque>({
    bill: "",
    persons: "",
    tip: 10,
    total: 0,
  });

  const { bill, persons, tip, total } = cheque;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheque({
      ...cheque,
      [name]: value,
    });
  };

  const handleSelect = (value: IOption | null) => {
    if (value) {
      setCheque({
        ...cheque,
        tip: value.value,
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sum = (+bill + +bill * (+tip / 100)) / +persons;
    if (bill && persons) {
      setCheque({
        ...cheque,
        total: sum,
      });
    }
  };

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (bill > 0 && persons > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [bill, persons]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Text>Let`s go calculate your tips</Text>
      <InputContainer>
        <Input
          value={bill}
          name="bill"
          type="number"
          placeholder="Enter bill"
          min="0.01"
          step="0.01"
          handleInput={handleInput}
        />
        <Input
          value={persons}
          name="persons"
          type="number"
          placeholder="Enter  persons"
          min="1"
          handleInput={handleInput}
        />
        <CustomSelect handleSelect={handleSelect} value={tip} />
      </InputContainer>
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};
