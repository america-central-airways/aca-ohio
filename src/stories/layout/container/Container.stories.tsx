import type { ComponentMeta } from "@storybook/react";
import Container from "./Container";
import bindJestTests from "../../common/test-utilities/BindJestTests";

const ComponentStory: ComponentMeta<typeof Container> = {
  component: Container,
  title: "Layout/Container",
};

export default ComponentStory;

export const Default = (): JSX.Element => (
  <Container>I am inside a container!</Container>
);

bindJestTests("Container.spec.tsx", Default);
