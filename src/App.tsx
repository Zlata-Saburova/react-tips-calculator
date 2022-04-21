import styled from "styled-components";
import { Form } from "./components/Form/Form";

const App = () => {
  return (
    <StyledApp>
      <Form />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default App;
