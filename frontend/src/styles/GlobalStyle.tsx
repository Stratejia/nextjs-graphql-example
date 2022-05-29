import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './index';

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    html,
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: ${(theme as Theme).colors.background};
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
  `,
);

export default GlobalStyle;
