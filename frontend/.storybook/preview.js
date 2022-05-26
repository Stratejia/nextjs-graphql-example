import React from 'react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';
import { GlobalStyle } from '../styles';

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
  withContexts(contexts),
];

export { parameters, decorators };
