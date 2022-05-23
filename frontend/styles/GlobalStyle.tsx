import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './index';

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: ${(theme as Theme).colors.background};
    }
  `,
);

export default GlobalStyle;
