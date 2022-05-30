module.exports = {
  ...require('../.prettierrc.base'),
  plugins: [
    // TODO: See if this can somehow be moved to base
    './node_modules/prettier-plugin-multiline-arrays',
  ],
  multilineArraysWrapThreshold: 2,
};
