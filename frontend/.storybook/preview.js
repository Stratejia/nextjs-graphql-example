import React from 'react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const decorators = [withContexts(contexts)];

export { parameters, decorators };
