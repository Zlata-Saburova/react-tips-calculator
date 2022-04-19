import { StyledForm, Title, Text, Total, InputContainer } from "./styles";

import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import React, { useEffect, useState } from "react";
import { ICheque } from "../../types";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { SingleValue } from "react-select";
import { Option } from "../../types/index";

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

  const handleSelect = (e: SingleValue<Option>) => {
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
      <Button></Button>
    </StyledForm>
  );
};