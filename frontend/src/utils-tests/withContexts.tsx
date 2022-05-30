import React from 'react';
import ThemeProvider from 'contexts/ThemeProvider';

function withContexts(children: React.ReactNode) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default withContexts;
