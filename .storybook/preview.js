import "../src/styles/index.scss";
import { withTests } from "@storybook/addon-jest";
import results from "../coverage/.jest-test-results.json";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withTests({
    results,
  }),
];
