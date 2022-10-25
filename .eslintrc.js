module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'plugin:@next/next/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off'
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
