import { useTheme as useStyledComponentsTheme } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { modeToColors } from 'styles/colors';
import spacing from 'styles/spacing';
import fonts from 'styles/fonts';
import { ThemeMode } from 'types/styles';

type Theme = ReturnType<typeof getTheme>;

function getTheme(mode: ThemeMode) {
  return {
    mode,
    colors: modeToColors[mode],
    spacing,
    fonts,
  };
}

// TODO: This is deadcode for now, remove later if unused
function useTheme() {
  const theme = useStyledComponentsTheme();
  return theme as Theme;
}

export { GlobalStyle, getTheme, useTheme };
export type { Theme };
