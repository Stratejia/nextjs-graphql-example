import React from 'react';
import styled, { css } from 'styled-components';
import Container from 'components/common/layouts/Container';

type Props = {
  children: React.ReactNode;
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

export default Page;
