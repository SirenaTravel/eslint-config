module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  rules: {
    'no-console': 2,
    'newline-before-return': 2,
    'arrow-body-style': 2,
    'import/no-default-export': 2,
    'react-extra/no-inline-styles': 2,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'react/jsx-closing-bracket-location': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-wrap-multilines': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-curly-newline': 0,
  },
  overrides: [
    {
      files: ['*.stories.js'],
      rules: {
        'react/prop-types': 0,
        'react/jsx-indent-props': 0,
        'react/forbid-prop-types': 0,
        'react-extra/no-inline-styles': 0,
      },
    },
  ],
};
