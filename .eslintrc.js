module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    'max-len': ['error', 120],
    'require-jsdoc': 'off',
    indent: ['error', 2],
    'object-curly-spacing': ['error', 'always'],
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 'off',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
