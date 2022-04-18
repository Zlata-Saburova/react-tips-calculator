import React from "react";
import styled from "styled-components";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <StyledApp>
      <Form></Form>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default App;
