import React, { createContext, ReactNode, useMemo, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { getTheme, GlobalStyle } from '../styles';
import { ThemeMode } from '../types/styles';

const defaultMode = 'dark';

type Props = {
  children: ReactNode;
  initialMode?: ThemeMode;
};

function ThemeProvider({ children, initialMode = defaultMode }: Props) {
  const [mode, setMode] = useState<ThemeMode>(initialMode);

  const theme = useMemo(() => getTheme(mode), [mode]);

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

const ThemeContext = createContext<{
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  switchMode: () => void;
}>({ mode: defaultMode, setMode: () => void 0, switchMode: () => void 0 });

export default ThemeProvider;
export { defaultMode, ThemeContext };
