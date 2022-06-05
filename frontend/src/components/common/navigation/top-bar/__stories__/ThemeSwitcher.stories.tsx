import React from 'react';
import ThemeSwitcher from 'components/common/navigation/top-bar/ThemeSwitcher';

const config = {
  title: 'Components/Common/Navigation/TopBar/ThemeSwitcher',
  component: ThemeSwitcher,
};

function Template() {
  return <ThemeSwitcher />;
}

const Basic = Template.bind({}) as any;
Basic.args = {};

export default config;
export { Basic };
