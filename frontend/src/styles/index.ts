import { useTheme as useStyledComponentsTheme } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { getColors } from 'styles/colors';
import spacing from 'styles/spacing';
import fonts from 'styles/fonts';
import { ThemeMode } from 'types/styles';

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
