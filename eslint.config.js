import eslintConfig from '@fit-hub-indonesia/eslint/react.js';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';


export default eslintConfig([
  {
    ignores: [
      'etc/*',
      'dist/*',
      'storybook-static/*',
      'node_modules/*',
      'jest.config.js',
      'coverage/*',
      'dist',
      'rollup.config.mjs',
      "package.json"
    ]
  },
  {
    plugins: {
      'simple-import-sort': eslintPluginSimpleImportSort
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^(react|react-router-dom)'],
            ['^@?\\w'],
            ['@/app', '@/context', '@/modules', '@/repository'],
            ['@/components', '@/hooks'],
            ['@/utils', '@/constant', '@/model', '@/types'],
            [
              '^\\u0000',
              '^\\.\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$'
            ]
          ]
        }
      ]
    }
  },
  {
    files: ['**/*.stories.{jsx,tsx}'],
    rules: {
      'react-hooks/rules-of-hooks': 'off'
    }
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'react/no-unknown-property': ['error', { ignore: ['css'] }]
    }
  },
  {
    files: ['**/*.d.{ts,tsx}'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  }
]);