module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "airbnb-typescript"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  ignorePatterns: ["node_modules", "build", "coverage", ".vscode", ".github", ".eslintrc.js"],
  plugins: ["react", "@typescript-eslint"],
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "max-len": "off",
    "click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "import/prefer-default-export": 0,
    "react/no-unused-prop-types": 0,
    "react/destructuring-assignment": 0,
    "react/function-component-definition": 0,
    "react/no-arrow-function-lifecycle":  0,
    "react/no-invalid-html-attribute": 0,
    "react/no-unused-class-component-methods": 0,
  },
};