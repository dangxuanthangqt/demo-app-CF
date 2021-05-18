module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'linebreak-style': 'off',
  },
};
