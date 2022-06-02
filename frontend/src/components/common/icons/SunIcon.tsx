import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from 'contexts/ThemeProvider';

function SunIcon() {
  const { theme } = useThemeContext();

  return <FontAwesomeIcon icon={faSun} color={theme.colors.onBackground} />;
}

export default SunIcon;
