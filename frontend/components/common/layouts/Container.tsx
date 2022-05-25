import styled, { css } from 'styled-components';

const Container = styled.div(
  ({ theme }) => css`
    max-width: ${theme.spacing.container};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    display: block;
  `,
);

export default Container;
