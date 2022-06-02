import React from 'react';
import styled, { css } from 'styled-components';
import Container from 'components/common/layouts/Container';
import TopBar from 'components/common/navigation/TopBar';
import { Theme } from 'styles';

type Props = {
  readonly children: React.ReactNode;
};

function Page({ children }: Props) {
  return (
    <PageContainer>
      <TopBar />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div(
  ({ theme }: { readonly theme: Theme }) => css`
    background-color: ${theme.colors.background};
  `,
);

const ContentContainer = styled(Container)(
  ({ theme }: { readonly theme: Theme }) => css`
    padding: ${theme.spacing.s} 0;
  `,
);

export default Page;
