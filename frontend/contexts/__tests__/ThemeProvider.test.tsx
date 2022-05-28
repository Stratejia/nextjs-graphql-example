import * as React from 'react';
import { create } from 'react-test-renderer';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ThemeProvider from '../ThemeProvider';
import ThemeProviderChild from './__stubs__/ThemeProviderChild';

describe('ThemeProvider', () => {
  describe('Given children', () => {
    const modeToSet = 'dark';
    const children = <ThemeProviderChild modeToSet={modeToSet} />;

    // TODO: See if this is necessary, we have multiple data-testid for some reason
    afterEach(cleanup);

    it('Should match snapshot', () => {
      const render = create(<ThemeProvider>{children}</ThemeProvider>).toJSON();

      expect(render).toMatchSnapshot();
    });

    describe('Given no initial mode', () => {
      const { getByTestId } = render(<ThemeProvider>{children}</ThemeProvider>);

      it('Should have dark as its initial mode', () => {
        const mode = getByTestId('mode');

        expect(mode).toBe('dark');
      });
    });

    describe('Given initial mode', () => {
      const initialMode = 'light';
      const { getByTestId } = render(<ThemeProvider initialMode={initialMode}>{children}</ThemeProvider>);

      it('Should have initial mode as its mode', () => {
        const mode = getByTestId('mode');

        expect(mode).toBe(initialMode);
      });

      describe('When setting theme', () => {
        const setModeButton = getByTestId('setModeButton');
        fireEvent.click(setModeButton);

        it('Should set theme', () => {
          const mode = getByTestId('mode');

          expect(mode).toBe(modeToSet);
        });
      });

      describe('When switching theme', () => {
        const modeToBeSwitched = 'dark';

        const switchModeButton = getByTestId('switchModeButton');
        fireEvent.click(switchModeButton);

        it('Should switch theme', () => {
          const mode = getByTestId('mode');

          expect(mode).toBe(modeToBeSwitched);
        });
      });
    });
  });
});
