import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${(props) => props.theme.background};
  }
`;

export default GlobalStyle;
