import { createGlobalStyle } from "styled-components";
import circles from "./assets/circles.svg";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


button {
  font-family: inherit;

  border: 0;
  background: none;
  outline: none;

  cursor: pointer;
}

input, select {
  border: none;

  &:focus {
    outline: none;
  }
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  background: no-repeat top left url(${circles}) #EAF2F2;
  background-size: 171px 150px;
}
`;

export default GlobalStyles;
