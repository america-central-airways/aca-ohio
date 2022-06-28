import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "./Label";
import bindJestTests from "../../common/test-utilities/BindJestTests";

const LabelStories: ComponentMeta<typeof Label> = {
  component: Label,
  title: "Elements/Label",
};

export default LabelStories;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: "123",
  text: "MyLabel",
};

bindJestTests("Label.spec.tsx", Template);
