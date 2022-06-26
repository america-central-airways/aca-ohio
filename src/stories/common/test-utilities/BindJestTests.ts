import type { ComponentStory } from "@storybook/react";
import type React from "react";

export default function bindJestTests<T>(
  testFile: Array<string> | string,
  component: ComponentStory<React.FC<T>>
): void {
  component.bind({
    args: {
      text: "Jest results in Storybook",
    },
    parameters: {
      jest: testFile,
    },
  });
}
