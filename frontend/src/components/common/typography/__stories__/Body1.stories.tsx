import * as React from 'react';
import Body1 from 'components/common/typography/Body1';

const config = {
  title: 'Components/Typography/Body1',
  component: Body1,
};

function Template({ ...args }) {
  return <Body1 {...args} />;
}

const WithText = Template.bind({}) as any;
WithText.args = {
  children: 'Body 1',
};

const WithoutText = Template.bind({}) as any;
WithoutText.args = {};

export default config;
export { WithText, WithoutText };
