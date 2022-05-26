import AppTitle from './AppTitle';

const config = {
  title: 'Components/Typography',
  component: AppTitle,
};

function Template({ ...args }) {
  return <AppTitle {...args} />;
}

const Basic = Template.bind({});
// TODO: Find a way to remove ts-ignore in stories
// @ts-ignore
Basic.args = {
  children: 'App title',
};

export default config;
export { Basic };
