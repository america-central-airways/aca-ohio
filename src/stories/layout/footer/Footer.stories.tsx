import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";
import bindJestTests from "../../common/test-utilities/BindJestTests";

const FooterStories: ComponentMeta<typeof Footer> = {
  component: Footer,
  title: "Layout/Footer",
};

export default FooterStories;

export const Template: ComponentStory<typeof Footer> = () => <Footer />;

bindJestTests("Footer.spec.tsx", Template);
