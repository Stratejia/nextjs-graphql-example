import React from 'react';
import ThemeProvider from '../contexts/ThemeProvider';

const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// TODO: Find a way to switch theme easily
const decorators = [
  Story => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

export { parameters, decorators };
