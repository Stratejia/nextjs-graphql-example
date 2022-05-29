import * as React from 'react';
import Container from '../Container';

const config = {
  title: 'Components/Layouts/Container',
  component: Container,
};

type TemplateProps = {
  children?: {
    style: {
      width: string;
      height: string;
      backgroundColor: string;
    };
  };
};

function Template({ children }: TemplateProps) {
  return <Container>{children ? <div style={children.style} /> : null}</Container>;
}

const WithChildren = Template.bind({}) as any;
WithChildren.args = {
  children: {
    style: {
      width: '100px',
      height: '100px',
      backgroundColor: 'blue',
    },
  },
};

const WithoutChildren = Template.bind({}) as any;
WithoutChildren.args = {};

export default config;
export { WithChildren, WithoutChildren };
