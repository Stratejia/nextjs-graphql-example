import * as React from 'react';
import { create } from 'react-test-renderer';
import Body1 from '../Body1';
import withContexts from '../../../../utils-test/withContexts';

describe('Body1', () => {
  describe('Given no text', () => {
    it('Should match snapshot', () => {
      const render = create(withContexts(<Body1 />)).toJSON();

      expect(render).toMatchSnapshot();
    });
  });

  describe('Given text', () => {
    const text = 'some text';

    it('Should match snapshot', () => {
      const render = create(withContexts(<Body1>{text}</Body1>)).toJSON();

      expect(render).toMatchSnapshot();
    });
  });
});
