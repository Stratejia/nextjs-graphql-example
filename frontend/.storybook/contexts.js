import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { defaultMode } from '../src/contexts/ThemeProvider';
import { getTheme } from '../src/styles/theme';
import i18n from './i18n';

const contexts = [
  {
    icon: 'globe',
    title: 'Language',
    components: [I18nextProvider],
    params: [
      // TODO: Default should be based on config
      { name: 'en', props: { i18n }, default: true },
    ],
    options: {
      deep: true,
    },
  },
  {
    icon: 'paintbrush',
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
