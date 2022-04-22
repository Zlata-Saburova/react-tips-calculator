import styled from "styled-components";

export const StyledButton = styled.button`
  max-width: 459px;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;

  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: rgb(255, 255, 255);

  background-color: rgb(46, 210, 201);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  transition: background-color 0.3s;

  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:hover {
    background-color: ${(props) =>
      props.disabled ? "rgb(46, 210, 201)" : "rgb(37, 173, 165)"};
  }

  &:active {
    background-color: rgb(46, 210, 201);
  }

  @media (max-width: 1024px) {
    max-width: 332px;
  }
`;
