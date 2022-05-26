const storiesDirectories = 'components|pages';
const storiesExtensions = 'mdx|tsx';

// TODO: Lint should keep one item per line in arrays
module.exports = {
  stories: [`../@(${storiesDirectories})/**/*.stories.@(${storiesExtensions})`],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
