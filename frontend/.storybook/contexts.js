import { ThemeProvider } from 'styled-components';
import { defaultMode } from '../contexts/ThemeProvider';
import { getTheme } from '../styles';

const contexts = [
  {
    icon: 'box',
    title: 'Theme',
    components: [ThemeProvider],
    params: [
      { name: 'Light', props: { theme: getTheme('light') }, default: defaultMode === 'light' },
      { name: 'Dark', props: { theme: getTheme('dark') }, default: defaultMode === 'dark' },
    ],
    options: {
      deep: true,
    },
  },
];

export { contexts };
