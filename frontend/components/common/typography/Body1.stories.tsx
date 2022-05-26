import Body1 from './Body1';

const config = {
  title: 'Components/Typography/Body1',
  component: Body1,
};

function Template({ ...args }) {
  return <Body1 {...args} />;
}

const Basic = Template.bind({});
// TODO: Find a way to remove ts-ignore in stories
// @ts-ignore
Basic.args = {
  children: 'Body 1',
};

export default config;
export { Basic };
