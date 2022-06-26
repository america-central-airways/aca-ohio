import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Column from "./Column";
import { ColumnSizes } from "./ColumnSizes";
import Columns from "../columns/Columns";
import bindJestTests from "../../common/test-utilities/BindJestTests";

const ColumnStories: ComponentMeta<typeof Column> = {
  component: Column,
  title: "Layout/Column",
};

export default ColumnStories;

const Template: ComponentStory<typeof Column> = (args) => (
  <Columns>
    <Column {...args} />
    <Column> Second Column </Column>
  </Columns>
);

export const Default = Template.bind({});
Default.args = {
  children: "Auto Sizing",
};

export const IsOneQuarter = Template.bind({});
IsOneQuarter.args = {
  children: "Is One Quarter",
  size: ColumnSizes.IsOneQuarter,
};

export const IsOneThird = Template.bind({});
IsOneThird.args = {
  children: "Is One Third",
  size: ColumnSizes.IsOneThird,
};

export const IsHalf = Template.bind({});
IsHalf.args = {
  children: "Is Half",
  size: ColumnSizes.IsHalf,
};

export const IsTwoThirds = Template.bind({});
IsTwoThirds.args = {
  children: "Is Two Thirds",
  size: ColumnSizes.IsTwoThirds,
};

export const IsThreeQuarters = Template.bind({});
IsThreeQuarters.args = {
  children: "Is Three Quarters",
  size: ColumnSizes.IsThreeQuarter,
};

export const IsFull = Template.bind({});
IsFull.args = {
  children: "Is Full Size",
  size: ColumnSizes.IsFull,
};

bindJestTests("Column.spec.tsx", Template);
