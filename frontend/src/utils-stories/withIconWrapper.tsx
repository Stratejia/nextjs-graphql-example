import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';

function withIconWrapper(children: React.ReactNode) {
  return <IconStyle>{children}</IconStyle>;
}

const IconStyle = styled.div(
  ({ theme }: { readonly theme: Theme }) => css`
    color: ${theme.colors.onBackground};
  `,
);

export default withIconWrapper;
