import React from 'react';
import Body1 from 'components/common/typography/Body1';
import Tooltip, { TooltipProps } from 'components/common/data/Tooltip';

const config = {
  title: 'Components/Common/Data/Tooltip',
  component: Tooltip,
};

function Template(props: TooltipProps) {
  return <Tooltip {...props} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  title: 'This appears in the tooltip!',
  children: <Body1>Hover me!</Body1>,
};

export default config;
export { Basic };
