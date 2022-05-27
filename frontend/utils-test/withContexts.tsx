import React, { ReactNode } from 'react';
import ThemeProvider from '../contexts/ThemeProvider';

function withContexts(children: ReactNode) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default withContexts;
