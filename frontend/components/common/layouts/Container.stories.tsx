import Container from './Container';

const config = {
  title: 'Components/Layouts/Container',
  component: Container,
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
    <Container>
      <div style={style} />
    </Container>
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
