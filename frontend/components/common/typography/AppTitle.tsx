import styled, { css } from 'styled-components';
import Typography from './Typography';

const AppTitle = styled.h1(
  ({ theme }) => css`
    ${Typography};
    text-align: center;
    font-size: ${theme.fonts.sizes.xxl};
  `,
);

export default AppTitle;
