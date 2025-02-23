import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-viewport'
  ],
  docs: {
    defaultName: 'Documentation'
  },
  framework: '@storybook/react-webpack5',
  staticDirs: [{ from: '../../public', to: '/assets' }],
  stories: ['../**/*.mdx', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],
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
        exclude: /\.module.s[ac]ss$/,
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed'
              }
            }
          }
        ]
      });

      config.module.rules.push({
        test: /\.module.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed'
              }
            }
          }
        ]
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
