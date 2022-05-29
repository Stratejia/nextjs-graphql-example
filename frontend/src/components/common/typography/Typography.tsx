import { css } from 'styled-components';

const Typography = css(
  ({ theme }) => css`
    margin: 0;
    font-family: sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.sizes.m};
    color: ${theme.colors.onBackground};
    opacity: ${theme.fonts.emphasis.high};
  `,
);

export default Typography;
