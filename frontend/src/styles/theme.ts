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

export { getTheme };
export type { Theme };
