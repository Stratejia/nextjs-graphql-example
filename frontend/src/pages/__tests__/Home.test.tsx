import * as React from 'react';
import { create } from 'react-test-renderer';
import Home from '../index.page';
import withContexts from '../../utils-test/withContexts';

describe('Home', () => {
  describe('When rendering', () => {
    const render = create(withContexts(<Home />)).toJSON();

    test('Then match snapshot', () => {
      expect(render).toMatchSnapshot();
    });
  });
});
