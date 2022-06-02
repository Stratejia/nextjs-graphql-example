import React from 'react';
import { create } from 'react-test-renderer';
import ThemeSwitcher from 'components/common/navigation/top-bar/ThemeSwitcher';
import withContexts from 'utils-tests/withContexts';

// TODO: When clicking button Then switch theme
// TODO: Given light theme When rendering Then use dark icon (or snapshot?)
// TODO: Given dark theme When rendering Then use light icon (or snapshot?)

describe('ThemeSwitcher', () => {
  describe('When rendering', () => {
    const render = create(withContexts(<ThemeSwitcher />)).toJSON();

    test('Then match snapshot', () => {
      expect(render).toMatchSnapshot();
    });
  });
});
