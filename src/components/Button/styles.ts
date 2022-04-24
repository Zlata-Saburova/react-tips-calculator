import styled from "styled-components";

interface IProps {
  isDisabled: boolean;
}

export const StyledButton = styled.button<IProps>`
  max-width: 459px;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;

  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: rgb(255, 255, 255);

  background-color: rgb(46, 210, 201);
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};

  transition: background-color 0.3s;

  cursor: ${({ isDisabled }) => (isDisabled ? "default" : "pointer")};

  &:hover {
    background-color: ${({ isDisabled }) =>
      isDisabled ? "rgb(46, 210, 201)" : "rgb(37, 173, 165)"};
  }

  &:active {
    background-color: rgb(46, 210, 201);
  }

  @media (max-width: 1024px) {
    max-width: 332px;
  }
`;
