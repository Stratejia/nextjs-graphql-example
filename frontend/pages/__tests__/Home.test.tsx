import * as React from 'react';
import { create } from 'react-test-renderer';
import Home from '../index.page';
import withContexts from '../../utils-test/withContexts';

describe('Home', () => {
  it('Should render', () => {
    const render = create(withContexts(<Home />)).toJSON();

    expect(render).toMatchSnapshot();
  });
});
