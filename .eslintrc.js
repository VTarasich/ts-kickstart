module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "google"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "max-len": ["error", 120],
        "require-jsdoc": "off",
        "indent": ["error", 4],
        "object-curly-spacing": ["error", "always"],
    }
};