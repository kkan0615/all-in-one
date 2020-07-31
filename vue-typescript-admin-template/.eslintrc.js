module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'generator-star-spacing': 'off',
    indent: [2, 2, { SwitchCase: 1 }],
    'brace-style': [ 'error', '1tbs' ],
    'no-multiple-empty-lines': [ 'error', { 'max': 2, 'maxBOF': 1 }],
    'no-undef': 'error',
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      'always'
    ],
    'quotes': ['error', 'single'],
    'space-before-blocks': [
      'error',
      'always'
    ],
    "jsx-quotes": [2, "prefer-single"],
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    "keyword-spacing": [
      2,
      {
        before: true,
        after: true
      }
    ],
    "new-cap": [
      2,
      {
        newIsCap: true,
        capIsNew: false
      }
    ],
    'no-empty': 'error',
    'no-duplicate-imports': 'error',
    'semi': ['error', 'never'],
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',

  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
}
