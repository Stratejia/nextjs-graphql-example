import React from 'react';
import { create } from 'react-test-renderer';
import Tooltip from 'components/common/data/Tooltip';
import withContexts from 'utils-tests/withContexts';

describe('Tooltip', () => {
  describe('Given title and children', () => {
    const title = 'some title';
    const children = <span>Children</span>;

    describe('When rendering', () => {
      const render = create(withContexts(<Tooltip title={title}>{children}</Tooltip>)).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });
  });
});
