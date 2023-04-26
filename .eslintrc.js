/** @type {import('eslint').Linter.Config} */

module.exports = {
  extends: ['standard', 'next/core-web-vitals', 'plugin:storybook/recommended'],
  rules: {
    'space-before-function-paren': 'off'
  }
}
