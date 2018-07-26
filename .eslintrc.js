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
  globals: {
    __PATH_PREFIX__: false,
  },
  rules: {
    "no-unused-vars": ["error", { args: "none" }],
    "no-underscore-dangle": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/no-danger": "off",
    "react/prop-types": "off",
  },
};
