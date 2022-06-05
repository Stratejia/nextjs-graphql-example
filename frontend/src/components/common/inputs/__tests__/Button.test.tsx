import React from 'react';
import { create } from 'react-test-renderer';
import Button, { ButtonType, ButtonVariant } from 'components/common/inputs/Button';
import withContexts from 'utils-tests/withContexts';

describe('Button', () => {
  describe('Given title and children', () => {
    const title = 'some title';
    const children = <span>Children</span>;

    describe.each([
      ['button', 'contained', true],
      ['button', 'contained', false],
      ['button', 'outlined', true],
      ['button', 'outlined', false],
      ['button', 'text', true],
      ['button', 'text', false],
      ['submit', 'contained', true],
      ['submit', 'contained', false],
      ['submit', 'outlined', true],
      ['submit', 'outlined', false],
      ['submit', 'text', true],
      ['submit', 'text', false],
      ['reset', 'contained', true],
      ['reset', 'contained', false],
      ['reset', 'outlined', true],
      ['reset', 'outlined', false],
      ['reset', 'text', true],
      ['reset', 'text', false],
    ])('Given %s type, %s variant and %s disabled', (buttonType, buttonVariant, disabled) => {
      describe('When rendering', () => {
        const render = create(
          withContexts(
            <Button
              title={title}
              type={buttonType as ButtonType}
              variant={buttonVariant as ButtonVariant}
              disabled={disabled}
            >
              {children}
            </Button>,
          ),
        ).toJSON();

        test('Then match snapshot', () => {
          expect(render).toMatchSnapshot();
        });
      });
    });
  });
});
