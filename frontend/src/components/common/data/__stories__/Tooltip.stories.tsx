import React from 'react';
import Body1 from 'components/common/typography/Body1';
import Tooltip from 'components/common/data/Tooltip';

const config = {
  title: 'Components/Common/Data/Tooltip',
  component: Tooltip,
};

type TemplateProps = {
  readonly children: React.ReactElement;
  readonly title: string;
};

function Template({ children, title }: TemplateProps) {
  return <Tooltip title={title}>{children}</Tooltip>;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  title: 'This appears in the tooltip!',
  children: <Body1>Hover me!</Body1>,
};

export default config;
export { Basic };
