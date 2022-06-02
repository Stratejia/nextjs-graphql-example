import React from 'react';
import MoonIcon from 'components/common/icons/MoonIcon';

const config = {
  title: 'Components/Common/Icons/MoonIcon',
  component: MoonIcon,
};

function Template() {
  return <MoonIcon />;
}

const Basic = Template.bind({}) as any;
Basic.args = {};

export default config;
export { Basic };
