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
};
