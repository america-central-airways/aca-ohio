import type { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInput from "./TextInput";
import bindJestTests from "../../common/test-utilities/BindJestTests";
import useTextInput from "../hooks/UseTextInput";

const TextInputStories: ComponentMeta<typeof TextInput> = {
  component: TextInput,
  title: "Forms/TextInput",
};

export default TextInputStories;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const hook = useTextInput();

  return <TextInput {...args} useInput={hook} />;
};

export const Default = Template.bind({});
Default.args = {
  labelText: "Text Input:",
  placeholder: "Text Input",
};

bindJestTests("../base/BaseTextInput.spec.tsx", Template);
