import Page from '../../../../components/common/layouts/Page';

const config = {
  title: 'Components/Layouts/Page',
  component: Page,
};

type TemplateProps = {
  children: {
    style: {
      width: string;
      height: string;
      backgroundColor: string;
    };
  };
};

function Template({ children: { style } }: TemplateProps) {
  return (
    <Page>
      <div style={style} />
    </Page>
  );
}

const Basic = Template.bind({}) as any;
Basic.args = {
  children: {
    style: {
      width: '100px',
      height: '100px',
      backgroundColor: 'blue',
    },
  },
};

export default config;
export { Basic };
