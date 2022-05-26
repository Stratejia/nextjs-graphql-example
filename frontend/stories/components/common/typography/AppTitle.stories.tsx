import AppTitle from '../../../../components/common/typography/AppTitle';

const config = {
  title: 'Components/Typography/AppTitle',
  component: AppTitle,
};

function Template({ ...args }) {
  return <AppTitle {...args} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  children: 'App title',
};

export default config;
export { Basic };
