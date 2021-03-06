import React from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from 'components/common/navigation/top-bar/ThemeSwitcher';
import Body1 from 'components/common/typography/Body1';
import { Theme } from 'styles/theme';

function TopBar() {
  const { t } = useTranslation();

  // TODO: Add language switcher
  // TODO: Add user menu
  return (
    <TopBarContainer>
      <Body1>{t('nextRecipes')}</Body1>
      <SettingsContainer>
        <Body1>Lang</Body1>
        <ThemeSwitcher />
        <Body1>User</Body1>
      </SettingsContainer>
    </TopBarContainer>
  );
}

const TopBarContainer = styled.div(
  ({ theme }: { readonly theme: Theme }) => css`
    display: flex;
    align-items: start;
    justify-content: space-between;
    background-color: ${theme.colors.surface};
    padding: ${theme.spacing.m};
  `,
);

const SettingsContainer = styled.div(
  ({ theme }: { readonly theme: Theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacing.m};
  `,
);

export default TopBar;
