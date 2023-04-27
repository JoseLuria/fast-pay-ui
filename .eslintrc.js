/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['standard', 'next/core-web-vitals', 'plugin:storybook/recommended'],
  globals: {
    JSX: true
  },
  rules: {
    'space-before-function-paren': 'off'
  }
}
