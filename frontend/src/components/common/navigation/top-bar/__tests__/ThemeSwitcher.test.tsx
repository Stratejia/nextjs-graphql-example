import React from 'react';
import { create } from 'react-test-renderer';
import ThemeSwitcher from 'components/common/navigation/top-bar/ThemeSwitcher';
import withContexts from 'utils-tests/withContexts';

describe('ThemeSwitcher', () => {
  describe('When rendering', () => {
    const render = create(withContexts(<ThemeSwitcher />)).toJSON();

    test('Then match snapshot', () => {
      expect(render).toMatchSnapshot();
    });
  });
});
