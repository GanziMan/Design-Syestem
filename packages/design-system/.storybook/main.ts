import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"], // 스토리 파일 경로
  addons: ["@storybook/addon-essentials", "@storybook/addon-links"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
  docs: {
    autodocs: "tag",
  },
};
