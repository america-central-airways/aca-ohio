import type { ComponentMeta } from "@storybook/react";
import Section from "./Section";
import bindJestTests from "../../common/test-utilities/BindJestTests";

const SectionStory: ComponentMeta<typeof Section> = {
  component: Section,
  title: "Layout/Section",
};

export default SectionStory;

export const Default = (): JSX.Element => <Section>I am in a section!</Section>;

export const Multiple = (): JSX.Element => (
  <>
    <Section>First Section</Section>
    <Section>Second Section</Section>
  </>
);

bindJestTests("Section.spec.tsx", Default);
