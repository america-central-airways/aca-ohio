import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import NavLink from "./NavLink";
import bindJestTests from "../../common/test-utilities/BindJestTests";

const NavLinkStores: ComponentMeta<typeof NavLink> = {
  component: NavLink,
  title: "Elements/NavLink",
};

export default NavLinkStores;

const Template: ComponentStory<typeof NavLink> = (args) => (
  <BrowserRouter>
    <NavLink {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  text: "Home",
  to: "",
};

bindJestTests("NavLink.spec.tsx", Template);
