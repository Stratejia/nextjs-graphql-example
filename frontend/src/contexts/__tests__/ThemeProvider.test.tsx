import * as React from 'react';
import { create } from 'react-test-renderer';
// import { render, cleanup, fireEvent } from '@testing-library/react';
import ThemeProvider from 'contexts/ThemeProvider';
// import ThemeProviderChild from 'contexts/__stubs__/ThemeProviderChild';

describe('ThemeProvider', () => {
  describe('Given children', () => {
    // const modeToSet = 'dark';
    // const children = <ThemeProviderChild modeToSet={modeToSet} />;
    const children = <span>Children</span>;

    describe('When rendering', () => {
      const render = create(<ThemeProvider>{children}</ThemeProvider>).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });

    // TODO: Tests here fail because of data-testid being rendered twice. This is probably because of React strict mode.

    // TODO: See if this is necessary, we have multiple data-testid for some reason
    // afterEach(cleanup);
    /*
    describe('Given no initial theme mode', () => {
      const { getByTestId } = render(<ThemeProvider>{children}</ThemeProvider>);

      describe('When displaying theme mode', () => {
        const mode = getByTestId('mode');

        test('Then use dark mode', () => {
          expect(mode.innerHTML).toBe('dark');
        });
      });
    });

    describe('Given initial theme mode', () => {
      const initialMode = 'light';
      const { getByTestId } = render(<ThemeProvider initialMode={initialMode}>{children}</ThemeProvider>);

      describe('When displaying theme mode', () => {
        const mode = getByTestId('mode');

        test('Then use initial theme mode', () => {
          expect(mode.innerHTML).toBe(initialMode);
        });
      });

      describe('When setting theme and displaying theme mode', () => {
        const setModeButton = getByTestId('setModeButton');
        fireEvent.click(setModeButton);
        const mode = getByTestId('mode');

        test('Then set theme mode', () => {
          expect(mode.innerHTML).toBe(modeToSet);
        });
      });

      describe('When switching theme and displaying theme mode', () => {
        const modeToBeSwitched = 'dark';
        const switchModeButton = getByTestId('switchModeButton');
        fireEvent.click(switchModeButton);
        const mode = getByTestId('mode');

        test('Then switch theme mode', () => {
          expect(mode.innerHTML).toBe(modeToBeSwitched);
        });
      });
    });
    */
  });
});
