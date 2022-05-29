import * as React from 'react';
import AppTitle from 'components/common/typography/AppTitle';

const config = {
  title: 'Components/Typography/AppTitle',
  component: AppTitle,
};

function Template({ ...args }) {
  return <AppTitle {...args} />;
}

const WithText = Template.bind({}) as any;
WithText.args = {
  children: 'App title',
};

const WithoutText = Template.bind({}) as any;
WithoutText.args = {};

export default config;
export { WithText, WithoutText };
