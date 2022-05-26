import ThemeProvider from '../contexts/ThemeProvider';

// TODO: Weirdly, theme isn't re-applied to global styles nor story components
const contexts = [
  {
    icon: 'box',
    title: 'Theme',
    components: [ThemeProvider],
    params: [
      { name: 'Light', props: { initialMode: 'light' } },
      { name: 'Dark', props: { initialMode: 'dark' }, default: true },
    ],
    options: {
      deep: true,
      disable: false,
      cancelable: false,
    },
  },
];

export { contexts };
