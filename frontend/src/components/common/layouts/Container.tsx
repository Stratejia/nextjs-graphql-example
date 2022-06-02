import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';

const Container = styled.div(
  ({ theme }: { readonly theme: Theme }) => css`
    max-width: ${theme.spacing.container};
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    display: block;
  `,
);

export default Container;
