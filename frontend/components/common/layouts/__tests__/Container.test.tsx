import * as React from 'react';
import { create } from 'react-test-renderer';
import Container from '../Container';
import withContexts from '../../../../utils-test/withContexts';

describe('Container', () => {
  describe('Given no children', () => {
    it('Should render', () => {
      const render = create(withContexts(<Container />)).toJSON();

      expect(render).toMatchSnapshot();
    });
  });

  describe('Given children', () => {
    const children = <span>Children</span>;

    it('Should render', () => {
      const render = create(withContexts(<Container>{children}</Container>)).toJSON();

      expect(render).toMatchSnapshot();
    });
  });
});
