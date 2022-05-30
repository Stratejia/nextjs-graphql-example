import React from 'react';
import { create } from 'react-test-renderer';
import Container from 'components/common/layouts/Container';
import withContexts from 'utils-tests/withContexts';

describe('Container', () => {
  describe('Given no children', () => {
    describe('When rendering', () => {
      const render = create(withContexts(<Container />)).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });
  });

  describe('Given children', () => {
    const children = <span>Children</span>;

    describe('When rendering', () => {
      const render = create(withContexts(<Container>{children}</Container>)).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });
  });
});
