module.exports = {
  ...require('../.prettierrc.base'),
  // Plugin cannot be placed in base config
  plugins: ['./node_modules/prettier-plugin-multiline-arrays'],
  multilineArraysWrapThreshold: 2,
};
