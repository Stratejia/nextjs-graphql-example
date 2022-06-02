import React from 'react';
import { create } from 'react-test-renderer';
import Button from 'components/common/inputs/Button';
import withContexts from 'utils-tests/withContexts';

// TODO: Maybe some more tests with props?
describe('Button', () => {
  describe('Given title and children', () => {
    const title = 'some title';
    const children = <span>Children</span>;

    describe('When rendering', () => {
      const render = create(withContexts(<Button title={title}>{children}</Button>)).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });
  });
});
