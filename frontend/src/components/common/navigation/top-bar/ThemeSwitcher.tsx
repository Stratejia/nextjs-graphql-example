import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { useThemeContext } from 'contexts/ThemeProvider';
import MoonIcon from 'components/common/icons/MoonIcon';
import SunIcon from 'components/common/icons/SunIcon';
import { Theme } from 'styles/theme';
import { ThemeMode } from 'types/styles';

const modeToThemeIcon: Record<ThemeMode, React.ReactElement> = {
  light: <MoonIcon />,
  dark: <SunIcon />,
};

function ThemeSwitcher() {
  const { mode, switchMode } = useThemeContext();

  const icon = useMemo(() => modeToThemeIcon[mode], [mode]);

  return <TempButton onClick={switchMode}>{icon}</TempButton>;
}

// TODO: De-ugly this (create real Button component)
const TempButton = styled.button(
  ({ theme }: { readonly theme: Theme }) => css`
    background-color: transparent;
    border-width: 1px;
    border-color: ${theme.colors.border.main};
  `,
);

export default ThemeSwitcher;
