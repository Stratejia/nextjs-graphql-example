import * as React from 'react';
import { create } from 'react-test-renderer';
import AppTitle from 'components/common/typography/AppTitle';
import withContexts from 'utils-test/withContexts';

describe('AppTitle', () => {
  describe('Given no text', () => {
    describe('When rendering', () => {
      const render = create(withContexts(<AppTitle />)).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });
  });

  describe('Given text', () => {
    const text = 'some text';

    describe('When rendering', () => {
      const render = create(withContexts(<AppTitle>{text}</AppTitle>)).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });
  });
});
