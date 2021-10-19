import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Roboto";
  }
  body {
    background-color: #EFF1F5
  }
`;

export default GlobalStyle;
