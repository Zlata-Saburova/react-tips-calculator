import styled from "styled-components";

export const StyledButton = styled.button`
  max-width: 459px;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;

  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;

  background-color: #2ed2c9;

  transition: all 0.3s;

  &:hover {
    background-color: #25ada5;
  }

  &:active {
    background-color: #2ed2c9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    &:hover {
      background-color: #2ed2c9;
    }
  }

  @media (max-width: 1024px) {
    max-width: 332px;
  }
`;
