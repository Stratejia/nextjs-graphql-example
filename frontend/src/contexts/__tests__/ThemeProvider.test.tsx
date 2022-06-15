import * as React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import ThemeProvider from 'contexts/ThemeProvider';
import ThemeProviderChild from 'contexts/__stubs__/ThemeProviderChild';

describe('ThemeProvider', () => {
  describe('Given children', () => {
    const modeToSet = 'dark';
    const children = <ThemeProviderChild modeToSet={modeToSet} />;

    describe('When rendering', () => {
      const render = create(<ThemeProvider>{children}</ThemeProvider>).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });

    describe('Given render', () => {
      const { getByTestId, rerender } = render(<ThemeProvider>{children}</ThemeProvider>);

      describe('Given no initial theme mode', () => {
        rerender(<ThemeProvider>{children}</ThemeProvider>);

        describe('When displaying theme mode', () => {
          const mode = getByTestId('mode');

          test('Then use dark mode', () => {
            expect(mode.innerHTML).toBe('dark');
          });
        });
      });

      describe('Given initial theme mode', () => {
        const initialMode = 'light';
        rerender(<ThemeProvider initialMode={initialMode}>{children}</ThemeProvider>);

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
    });
  });
});
