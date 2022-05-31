import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { getTheme, GlobalStyle } from 'styles';
import { ThemeMode } from 'types/styles';

const defaultMode = 'dark';

type Props = {
  readonly children: React.ReactNode;
  readonly initialMode?: ThemeMode;
};

function ThemeProvider({ children, initialMode = defaultMode }: Props) {
  const [mode, setMode] = React.useState<ThemeMode>(initialMode);

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  function switchMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ mode, setMode, switchMode }}>
      <StyledComponentsThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
}

const ThemeContext = React.createContext<{
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
  readonly switchMode: () => void;
}>({ mode: defaultMode, setMode: () => void 0, switchMode: () => void 0 });

export default ThemeProvider;
export { defaultMode, ThemeContext };
