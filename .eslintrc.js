module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'no-labels': 'off',
    camelcase: 'off',
    'quote-props': ['warn', 'consistent'],
    quotes: [2, 'single'],
  },
}
