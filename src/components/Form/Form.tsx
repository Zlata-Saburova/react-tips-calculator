import { StyledForm, Title, Text, Total, InputContainer } from "./styles";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import React, { useEffect, useState } from "react";
import { ICheque } from "../../types";
import { SingleValue } from "react-select";
import { IOption } from "../../types/index";
import { CustomSelect } from "../CustomSelect/CustomSelect";

export const Form = () => {
  const [cheque, setCheque] = useState<ICheque>({
    bill: 0,
    persons: 0,
    tip: 10,
    total: 0,
  });

  const handleChangeBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheque({
      ...cheque,
      bill: +e.target.value,
    });
  };

  const handleChangePersons = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheque({
      ...cheque,
      persons: +e.target.value,
    });
  };

  const handleSelect = (e: SingleValue<IOption>) => {
    if (e) {
      setCheque({
        ...cheque,
        tip: e.value,
      });
    }
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sum: number =
      (cheque.bill + cheque.bill * (+cheque.tip / 100)) / cheque.persons;
    if (cheque.bill && cheque.persons) {
      setCheque({
        ...cheque,
        total: sum,
      });
    }
  };

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

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
          type="number"
          placeholder="Enter bill"
          min="0.01"
          step="0.01"
          onChange={handleChangeBill}
        ></Input>
        <Input
          type="number"
          placeholder="Enter  persons"
          min="1"
          onChange={handleChangePersons}
        ></Input>
        <CustomSelect onChange={handleSelect}></CustomSelect>
      </InputContainer>
      <Total>Total: {cheque.total.toFixed(2)}$</Total>
      <Button isDisabled={isBtnDisabled}></Button>
    </StyledForm>
  );
};
