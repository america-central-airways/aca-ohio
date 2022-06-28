import BaseTextInput, { type BaseTextInputProperties } from "./BaseTextInput";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import bindJestTests from "../../common/test-utilities/BindJestTests";
import useTextInput from "../hooks/UseTextInput";

const BaseTextInputStories: ComponentMeta<typeof BaseTextInput> = {
  component: BaseTextInput,
  title: "Forms/BaseTextInput",
};

export default BaseTextInputStories;

const Wrapper: React.FC<BaseTextInputProperties> = ({
  labelText,
  placeholder,
}) => {
  const hook = useTextInput();

  return (
    <BaseTextInput
      labelText={labelText}
      placeholder={placeholder}
      useInput={hook}
    />
  );
};

const Template: ComponentStory<typeof BaseTextInput> = (args) => (
  <Wrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelText: "MyInput",
  placeholder: "Placeholder",
};

bindJestTests("BaseTextInput.spec.tsx", Template);
