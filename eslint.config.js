import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    files: [ "**/*.{js,mjs,cjs}" ],
    plugins: { js },
    extends: [
      "js/recommended"
    ],
    languageOptions: {
      globals: globals.browser }
  },
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      '@stylistic/indent': [ 'warn', 2 ],
      '@stylistic/semi': [ 'warn', 'never' ],
      '@stylistic/linebreak-style': [ 'warn', 'windows' ],
      '@stylistic/no-multiple-empty-lines': [ 'warn', { 'max': 1 } ],
      '@stylistic/multiline-comment-style': [ 'warn', 'starred-block' ],
      '@stylistic/curly-newline': [ 'warn', 'always' ],
      '@stylistic/array-bracket-spacing': [ 'warn', 'always' ],
      '@stylistic/block-spacing': [ 'warn', 'always' ],
      '@stylistic/comma-spacing': [ 'warn', { 'before': false, 'after': true } ],
      '@stylistic/computed-property-spacing': [ 'warn', 'always' ],
      '@stylistic/key-spacing': [ 'warn', { "mode": "strict" } ],
      '@stylistic/keyword-spacing': [ 'warn', { "before": true } ],
      // '@stylistic/no-mixed-spaces-and-tabs': [ 'warn', 'smart-tabs' ],
      '@stylistic/no-multi-spaces': [ 'warn' ],
      '@stylistic/no-trailing-spaces': [ 'warn' ],
      '@stylistic/object-curly-spacing': [ 'warn', 'always' ],
      '@stylistic/rest-spread-spacing': [ 'warn', 'never' ],
      '@stylistic/semi-spacing': [ 'warn', { 'before': false, 'after': true } ],
      '@stylistic/space-before-blocks': [ 'warn', 'always' ],
      '@stylistic/spaced-comment': [ 'warn', 'always' ],
      '@stylistic/space-in-parens': [ 'warn', 'never' ],
      '@stylistic/space-before-function-paren': [ 'warn', 'always' ],
      '@stylistic/comma-dangle': [ 'warn', 'never' ],
      '@stylistic/comma-style': [ 'warn', 'last' ]
    }
  }
])
