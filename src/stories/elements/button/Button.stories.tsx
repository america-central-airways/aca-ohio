import Button from "./Button";
import { Color } from "../../common/properties/Colors";
import type { ComponentMeta } from "@storybook/react";
import bindJestTests from "../../common/test-utilities/BindJestTests";

const ButtonStory: ComponentMeta<typeof Button> = {
  component: Button,
  title: "Elements/Button",
};

export default ButtonStory;

export const Default = (): JSX.Element => <Button>Default</Button>;

export const Secondary = (): JSX.Element => (
  <Button color={Color.Secondary}>Secondary</Button>
);

export const Tertiary = (): JSX.Element => (
  <Button color={Color.Tertiary}>Tertiary</Button>
);

bindJestTests("Button.spec.tsx", Default);
