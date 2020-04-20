module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "google",
    "react-hooks",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint",
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        "args": "none",
      },
    ],
    "max-len": ["error", 120],
    "require-jsdoc": "off",
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off",
      },
    },
  ],
};
