import styled, { css } from 'styled-components';
import Typography from 'components/common/typography/Typography';
import { Theme } from 'styles/theme';

const AppTitle = styled.h1(
  ({ theme }: { readonly theme: Theme }) => css`
    ${Typography};
    text-align: center;
    font-size: ${theme.fonts.sizes.xxl};
  `,
);

export default AppTitle;
