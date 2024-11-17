import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  docs: {
    defaultName: 'Documentation'
  },
  framework: '@storybook/react-webpack5',
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  webpackFinal: async (config) => {
    if (config.module?.rules) {
      config.module.rules.push({
        exclude: /node_modules(?!\/@amplio)/,
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: { syntax: 'typescript', tsx: true },
              transform: {
                react: {
                  importSource: 'react',
                  runtime: 'automatic'
                }
              }
            }
          }
        }
      });

      config.module.rules.push({
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      });
    }

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../')
      };
      config.resolve.extensions?.push('.ts', '.tsx');
    }

    return config;
  }
};

export default config;
