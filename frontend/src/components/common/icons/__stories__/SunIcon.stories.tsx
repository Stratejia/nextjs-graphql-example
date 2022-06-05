import React from 'react';
import SunIcon from 'components/common/icons/SunIcon';
import withIconWrapper from 'utils-stories/withIconWrapper';

const config = {
  title: 'Components/Common/Icons/SunIcon',
  component: SunIcon,
};

function Template() {
  return withIconWrapper(<SunIcon />);
}

const Basic = Template.bind({}) as any;
Basic.args = {};

export default config;
export { Basic };
