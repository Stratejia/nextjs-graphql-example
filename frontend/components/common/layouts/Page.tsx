import React, { memo, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Container from './Container';

type Props = {
  children: ReactNode;
};

function Page({ children }: Props) {
  return (
    <Container>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
}

const ContentContainer = styled.div(
  ({ theme }) => css`
    margin: ${theme.spacing.xs};
  `,
);

export default memo(Page);
