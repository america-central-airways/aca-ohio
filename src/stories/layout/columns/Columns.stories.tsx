import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Column from "../column/Column";
import Columns from "./Columns";
import bindJestTests from "../../common/test-utilities/BindJestTests";

const ColumnsStories: ComponentMeta<typeof Columns> = {
  component: Columns,
  title: "Layout/Columns",
};

export default ColumnsStories;

const Template: ComponentStory<typeof Columns> = (args) => (
  <Columns {...args} />
);

export const SingleColumn = Template.bind({});
SingleColumn.args = {
  children: <Column>Full Length Column</Column>,
};

export const TwoColumns = Template.bind({});
TwoColumns.args = {
  children: (
    <>
      <Column>First Column</Column>
      <Column>Second Column</Column>
    </>
  ),
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  children: (
    <>
      <Column>First Column</Column>
      <Column>Second Column</Column>
      <Column>Third Column</Column>
    </>
  ),
};

bindJestTests("Columns.spec.tsx", Template);
