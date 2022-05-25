import type { AppProps } from 'next/app';
import ThemeProvider from '../contexts/ThemeProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
