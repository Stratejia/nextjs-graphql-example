import { useTranslation } from 'next-i18next';
import React, { useMemo } from 'react';
import Button from 'components/common/inputs/Button';
import { useThemeContext } from 'contexts/ThemeProvider';
import MoonIcon from 'components/common/icons/MoonIcon';
import SunIcon from 'components/common/icons/SunIcon';
import { ThemeMode } from 'types/styles';

const modeToThemeIcon: Record<ThemeMode, React.ReactElement> = {
  light: <MoonIcon />,
  dark: <SunIcon />,
};

function ThemeSwitcher() {
  const { t } = useTranslation('navigation');
  const { mode, switchMode } = useThemeContext();

  const icon = useMemo(() => modeToThemeIcon[mode], [mode]);

  return (
    <Button title={t('switchTheme')} variant="contained" onClick={switchMode}>
      {icon}
    </Button>
  );
}

export default ThemeSwitcher;
