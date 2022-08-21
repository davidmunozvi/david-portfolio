import { createGlobalStyle } from 'styled-components';
import reset from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: var(--font-size-base);
    /* min-height: 100vh; */
  }
  html {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyle;
