module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  plugins: ['react', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  globals: {},
  rules: {
    'no-console': 0,
    'no-plusplus': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
  },
};
