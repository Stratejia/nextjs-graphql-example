const storiesDirectories = 'components|pages';
const storiesExtensions = 'mdx|tsx';

module.exports = {
  stories: [`../@(${storiesDirectories})/**/*.stories.@(${storiesExtensions})`],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-contexts',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
