import { resolve } from 'path';

import type { StorybookConfig } from "@storybook/react-vite";

const storiesPath = resolve(__dirname, '..', 'src');

const config: StorybookConfig = {
  stories: [`${storiesPath}/**/*.stories.@(js|jsx|ts|tsx)`],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
