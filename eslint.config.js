import js from '@eslint/js'
import checkFile from 'eslint-plugin-check-file'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: { globals: globals.browser },
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'default', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'variable', format: ['camelCase', 'PascalCase', 'UPPER_CASE'], leadingUnderscore: 'allow' },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'parameter', format: ['camelCase', 'PascalCase'], leadingUnderscore: 'allow' },
        { selector: 'import', format: ['camelCase', 'PascalCase', 'UPPER_CASE'] },
        { selector: 'typeLike', format: ['PascalCase'] },
        { selector: 'interface', format: ['PascalCase'], custom: { regex: '^I[A-Z]', match: false } },
        { selector: 'enumMember', format: ['PascalCase'] },
        { selector: ['objectLiteralProperty', 'typeProperty'], format: null },
      ],
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            { regex: '^\\.{1,2}(/|$)', message: 'Use the @/ alias instead of a relative import.' },
          ],
        },
      ],
    },
  },
  {
    files: ['src/**/*.tsx'],
    ignores: ['src/main.tsx'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/filename-naming-convention': ['error', { '**/*.tsx': 'PASCAL_CASE' }],
    },
  },
  {
    files: ['src/hooks/**/*.ts', 'src/features/*/hooks/**/*.ts'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/filename-naming-convention': ['error', { '**/*.ts': 'use[A-Z]*([a-zA-Z0-9])' }],
    },
  },
  {
    files: ['src/**/*.ts'],
    ignores: ['src/hooks/**', 'src/features/*/hooks/**', 'src/**/*.d.ts'],
    plugins: { 'check-file': checkFile },
    rules: {
      'check-file/filename-naming-convention': ['error', { '**/*.ts': 'CAMEL_CASE' }],
    },
  },
])
