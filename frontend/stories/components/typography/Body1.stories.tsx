import { Body1 } from '../../../components/common/typography';

const config = {
  title: 'Components/Typography/Body1',
  component: Body1,
};

function Template({ ...args }) {
  return <Body1 {...args} />;
}

const Basic = Template.bind({}) as any;
Basic.args = {
  children: 'Body 1',
};

export default config;
export { Basic };
