import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useThemeContext } from 'contexts/ThemeProvider';

function MoonIcon() {
  const { theme } = useThemeContext();

  // TODO: Create component to old color logic (with prop)
  return <FontAwesomeIcon icon={faMoon} color={theme.colors.onBackground} />;
}

export default MoonIcon;
