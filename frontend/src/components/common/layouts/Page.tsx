import React from 'react';
import styled, { css } from 'styled-components';
import Container from 'components/common/layouts/Container';
import { Theme } from 'styles';

type Props = {
  readonly children: React.ReactNode;
};

function Page({ children }: Props) {
  return (
    <Container>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
}

const ContentContainer = styled.div(
  ({ theme }: { readonly theme: Theme }) => css`
    margin: ${theme.spacing.xs};
  `,
);

export default Page;
