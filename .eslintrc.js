module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["react"],
  extends: ["airbnb", "plugin:prettier/recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    "react/prefer-stateless-function": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-danger": "off",
  },
};
