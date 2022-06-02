import * as React from 'react';
import Home from 'pages/index.page';

const config = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
};

function Basic() {
  return <Home />;
}

export default config;
export { Basic };
