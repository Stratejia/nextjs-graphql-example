import React from 'react';
import TopBar from 'components/common/navigation/TopBar';

const config = {
  title: 'Components/Common/Navigation/TopBar',
  component: TopBar,
};

function Template() {
  return <TopBar />;
}

const Basic = Template.bind({}) as any;
Basic.args = {};

export default config;
export { Basic };
