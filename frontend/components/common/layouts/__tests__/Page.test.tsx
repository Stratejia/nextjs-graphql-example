import * as React from 'react';
import { create } from 'react-test-renderer';
import Page from '../Page';
import withContexts from '../../../../utils-test/withContexts';

describe('Page', () => {
  describe('Given children', () => {
    const children = <span>Children</span>;

    describe('When rendering', () => {
      const render = create(withContexts(<Page>{children}</Page>)).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });
  });
});
