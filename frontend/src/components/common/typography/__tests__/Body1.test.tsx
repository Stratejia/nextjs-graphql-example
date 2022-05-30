import React from 'react';
import { create } from 'react-test-renderer';
import Body1 from 'components/common/typography/Body1';
import withContexts from 'utils-tests/withContexts';

describe('Body1', () => {
  describe('Given no text', () => {
    describe('When rendering', () => {
      const render = create(withContexts(<Body1 />)).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });
  });

  describe('Given text', () => {
    const text = 'some text';

    describe('When rendering', () => {
      const render = create(withContexts(<Body1>{text}</Body1>)).toJSON();

      test('Then match snapshot', () => {
        expect(render).toMatchSnapshot();
      });
    });
  });
});
