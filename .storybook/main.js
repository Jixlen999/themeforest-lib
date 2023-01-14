const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, '../src/'),
      '@components': path.resolve(__dirname, '../src/components/'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@constants': path.resolve(__dirname, '../src/constants'),
    };
    return config;
  },
};
