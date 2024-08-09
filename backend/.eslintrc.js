module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        printWidth: 80,
      },
    ],
    'node/no-missing-require': 'error',
    'node/no-unpublished-require': 'warn',
  },
  plugins: ['prettier'],
  settings: {
    node: {
      tryExtensions: ['.js', '.json', '.node'],
    },
  },
};
