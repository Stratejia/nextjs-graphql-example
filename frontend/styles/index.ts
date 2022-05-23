import { useTheme as useStyledComponentsTheme } from 'styled-components';
import { ThemeMode } from '../types/styles';
import GlobalStyle from './GlobalStyle';
import { getColors } from './colors';
import spacing from './spacing';
import fonts from './fonts';

type Theme = ReturnType<typeof getTheme>;

function getTheme(mode: ThemeMode) {
  return {
    mode,
    colors: getColors(mode),
    spacing,
    fonts,
  };
}

function useTheme() {
  const theme = useStyledComponentsTheme();
  return theme as Theme;
}

export { GlobalStyle, getTheme, useTheme };
export type { Theme };
