import React from 'react';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { config } from '@fortawesome/fontawesome-svg-core';
import ThemeProvider from 'contexts/ThemeProvider';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Necessary for fontawesome to be loaded correctly with SSR
// eslint-disable-next-line functional/immutable-data
config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(App);
