require('@testing-library/jest-dom');

// eslint-disable-next-line no-undef
jest.mock('next-i18next', () => ({
  useTranslation: () => {
    return {
      t: key => key,
    };
  },
}));
