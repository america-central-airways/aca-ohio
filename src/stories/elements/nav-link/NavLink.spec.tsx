import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavLink from "./NavLink";

describe("navLink", () => {
  it("has link text", () => {
    render(
      <BrowserRouter>
        <NavLink text="Home" to="/home" />
      </BrowserRouter>
    );

    expect(screen.getByText(/home/iu)).toBeInTheDocument();
  });
});
