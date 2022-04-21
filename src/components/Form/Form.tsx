import { StyledForm, Title, Text, Total, InputContainer } from "./styles";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import React, { ChangeEvent, useEffect, useState } from "react";
import { ICheque } from "../../types";
import { IOption } from "../../types/index";
import { CustomSelect } from "../CustomSelect/CustomSelect";

export const Form = () => {
  const [cheque, setCheque] = useState<ICheque>({
    bill: "",
    persons: "",
    tip: { value: 10, label: "10%" },
    total: 0,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCheque({
      ...cheque,
      [name]: value,
    });
  };

  const handleSelect = (e: IOption | null) => {
    if (e) {
      setCheque({
        ...cheque,
        tip: e,
      });
    }
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sum: number =
      (+cheque.bill + +cheque.bill * (+cheque.tip.value / 100)) /
      +cheque.persons;
    if (cheque.bill && cheque.persons) {
      setCheque({
        ...cheque,
        total: sum,
      });
    }
  };

  const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (cheque.bill > 0 && cheque.persons > 0) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [cheque]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Text>Let`s go calculate your tips</Text>
      <InputContainer>
        <Input
          value={cheque.bill}
          name="bill"
          type="number"
          placeholder="Enter bill"
          min="0.01"
          step="0.01"
          handleInput={handleInput}
        />
        <Input
          value={cheque.persons}
          name="persons"
          type="number"
          placeholder="Enter  persons"
          min="1"
          handleInput={handleInput}
        />
        <CustomSelect handleSelect={handleSelect} value={cheque.tip} />
      </InputContainer>
      <Total>Total: {cheque.total.toFixed(2)}$</Total>
      <Button isDisabled={isBtnDisabled} />
    </StyledForm>
  );
};
