module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    '$': true
  },
  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'generator-star-spacing': 'off',
    '@typescript-eslint/indent': [ 'error', 2 ],
    'indent': [ 'error', 2, { 'SwitchCase' : 1 } ],
    'brace-style': [ 'error', '1tbs' ],
    'no-multiple-empty-lines': [ 'error', { 'max': 2, 'maxBOF': 1 }],
    'no-undef': 'error',
    'space-in-parens': ['error', 'never'],
    'space-before-function-paren': [
      'error',
      'always'
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    '@typescript-eslint/no-empty-function': ['error', { 'allow': ['functions', 'arrowFunctions'] }],
    'no-empty-function': ['error', { 'allow': ['functions', 'arrowFunctions'] }],
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': ['error'],
    'quotes': ['error', 'single'],
    'space-before-blocks': [
      'error',
      'always'
    ],
    '@typescript-eslint/no-use-before-define': [ 'warn', { 'functions': false, 'classes': true, 'variables': false } ],
    'no-use-before-define': [ 'error', { 'functions': false, 'classes': true, 'variables': false } ],
    'no-empty': 'error',
    'no-duplicate-imports': 'error',
    'semi': ['error', 'never'],
    'no-irregular-whitespace': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-namespace': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
