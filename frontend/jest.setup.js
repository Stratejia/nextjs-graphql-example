require('@testing-library/jest-dom');

jest.mock('next-i18next', () => ({
  useTranslation: () => {
    return {
      t: key => key,
    };
  },
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: key => key,
    };
  },
}));

