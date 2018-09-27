module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  plugins: ['vue'],
  rules: {
    'quotes': [2, 'single', 'avoid-escape'],
    'space-before-function-paren': ['error', 'never'],
    'semi': [2, 'never'],
    'no-console': 2,
    'vue/max-attributes-per-line': 0,
    'vue/require-prop-types': 0,
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'prettier/prettier': ['error', { 'semi': false, 'singleQuote': true }]
  }
}
