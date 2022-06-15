import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from 'components/common/inputs/Button';
import withContexts from 'utils-tests/withContexts';

describe('Button', () => {
  describe('Given children and title', () => {
    const innerText = 'Some text';
    const children = <>{innerText}</>;
    const title = 'Some title';

    describe('When rendering', () => {
      const renderedButton = render(withContexts(<Button title={title}>{children}</Button>));
      // const { getByTestId } = render(withContexts(<Button title={title}>{children}</Button>));
      const button = renderedButton.getByTestId('button');
      const tooltip = renderedButton.getByTestId('tooltip-text');

      test('Then display children', () => {
        expect(button.innerText).toBe('Some text');
      });

      test('Then use tooltip title', () => {
        expect(tooltip.title).toBe(title);
      });

      // Testing default value
      test('Then be enabled', () => {
        expect(button.getAttribute('disabled')).toBeFalsy();
      });

      // Testing default value
      test('Then be of type button', () => {
        // TODO: Test that type is button
      });

      // Testing default value
      test('Then be of variant outlined', () => {
        // TODO: Test that variant is outlined
      });
    });

    describe.each([[true], [false]])('Given disabled = %s', (disabled: boolean) => {
      describe('When rendering', () => {
        const { getByTestId } = render(
          withContexts(
            <Button title={title} disabled={disabled}>
              {children}
            </Button>,
          ),
        );
        const button = getByTestId('button');

        test('Then be disabled', () => {
          expect(button.getAttribute('disabled')).toBeTruthy();
        });
      });
    });

    describe('Given onClick', () => {
      const onClick = jest.fn();

      describe('When rendering and clicking', () => {
        const { getByTestId } = render(
          withContexts(
            <Button title={title} onClick={onClick}>
              {children}
            </Button>,
          ),
        );
        const button = getByTestId('button');
        fireEvent.click(button);

        test('Then trigger onClick', () => {
          // TODO: Test that onClick was triggered
        });
      });
    });

    // TODO: Tests with different types

    // TODO: Tests with different variants
  });
});
