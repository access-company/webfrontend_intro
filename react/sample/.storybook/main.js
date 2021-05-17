const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    {
      name: '@storybook/preset-create-react-app',
    },
  ],
  webpackFinal: (config) => {
    config.entry.unshift(path.resolve(__dirname, '../src/index.css'));
    console.dir(config.entry);
    return config;
  },
};