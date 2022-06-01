import React from 'react';
import { create } from 'react-test-renderer';
import TopBar from 'components/common/navigation/TopBar';
import withContexts from 'utils-tests/withContexts';

describe('TopBar', () => {
  describe('When rendering', () => {
    const render = create(withContexts(<TopBar />)).toJSON();

    test('Then match snapshot', () => {
      expect(render).toMatchSnapshot();
    });
  });
});
