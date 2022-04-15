import { createGlobalStyle } from "styled-components";
import circles from "./assets/circles.svg";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


button {
  border: 0;
  background: none;
  cursor: pointer;
  outline: none;
  font-family: inherit;
}

input, select {
  border: none;

  &:focus{
    outline: none;
  }
}

body {
    background: no-repeat top left url(${circles}) #EAF2F2;
    background-size: 171px 150px;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

export default GlobalStyle;