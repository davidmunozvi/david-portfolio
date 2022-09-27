import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import reset from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${fonts}

  body {
    color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${({ theme }) => theme.fontFamily[0]}, Arial;
    font-size: var(--font-size-base);
  }
  html {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyle;
