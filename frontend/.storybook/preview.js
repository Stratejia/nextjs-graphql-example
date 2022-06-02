import React from 'react';
import { withContexts } from '@storybook/addon-contexts/react';
import { contexts } from './contexts';
import GlobalStyle from '../src/styles/GlobalStyle';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalNextImage {...props} unoptimized />,
});

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
