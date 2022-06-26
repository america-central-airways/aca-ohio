import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
import { Color } from "../../common/colors/Colors";
import bindJestTests from "../../common/test-utilities/BindJestTests";

const ButtonStory: ComponentMeta<typeof Button> = {
  component: Button,
  title: "Elements/Button",
};

export default ButtonStory;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Template</Button>
);

export const Default = Template.bind({});
Default.args = {
  text: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  color: Color.Primary,
  text: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: Color.Secondary,
  text: "Secondary",
};

bindJestTests("Button.spec.tsx", Template);
