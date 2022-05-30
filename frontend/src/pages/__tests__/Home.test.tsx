import React from 'react';
import { create } from 'react-test-renderer';
import Home from 'pages/index.page';
import withContexts from 'utils-tests/withContexts';

describe('Home', () => {
  describe('When rendering', () => {
    const render = create(withContexts(<Home />)).toJSON();

    test('Then match snapshot', () => {
      expect(render).toMatchSnapshot();
    });
  });
});
