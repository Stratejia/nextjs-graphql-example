// TODO: Could this work with an import?
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  pageExtensions: ['page.tsx'],
};
