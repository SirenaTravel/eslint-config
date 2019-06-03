module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  env: {
    es6: true
  },
  extends: ["airbnb", "prettier"],
  plugins: ["prettier", "prettier"],
  rules: {
    "no-unused-vars": 1,
    "newline-before-return": 2,
    "arrow-body-style": 2,
    "import/no-default-export": 2,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-wrap-multilines": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-closing-bracket-location": 0
  }
};
