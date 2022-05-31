import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeProvider';
import { ThemeMode } from 'types/styles';

type Props = {
  readonly modeToSet: ThemeMode;
};

function ThemeProviderChild({ modeToSet }: Props) {
  const { mode, setMode, switchMode } = useContext(ThemeContext);

  return (
    <>
      <span data-testid="mode">{mode}</span>
      <button data-testid="switchModeButton" onClick={switchMode} />
      <button data-testid="setModeButton" onClick={() => setMode(modeToSet)} />
    </>
  );
}

export default ThemeProviderChild;
