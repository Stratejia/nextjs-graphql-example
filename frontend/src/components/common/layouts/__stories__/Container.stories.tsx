import React from 'react';
import Container from 'components/common/layouts/Container';

const config = {
  title: 'Components/Common/Layouts/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
};

type TemplateProps = {
  readonly children?: {
    readonly style: {
      readonly width: string;
      readonly height: string;
      readonly backgroundColor: string;
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
