import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 20px 20px;

  background: rgb(255, 255, 255);
  border-radius: 30px;

  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: rgba(117, 108, 108, 0.6);

  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: rgba(117, 108, 108, 0.6);
  }
`;
