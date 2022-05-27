import * as React from 'react';
import { create } from 'react-test-renderer';
import AppTitle from '../AppTitle';
import withContexts from '../../../../utils-test/withContexts';

describe('AppTitle', () => {
  describe('Given no text', () => {
    it('Should render', () => {
      const render = create(withContexts(<AppTitle />)).toJSON();

      expect(render).toMatchSnapshot();
    });
  });

  describe('Given text', () => {
    const text = 'some text';

    it('Should render', () => {
      const render = create(withContexts(<AppTitle>{text}</AppTitle>)).toJSON();

      expect(render).toMatchSnapshot();
    });
  });
});