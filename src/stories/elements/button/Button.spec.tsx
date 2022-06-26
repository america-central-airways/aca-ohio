import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("button", () => {
  it("button has correct text", () => {
    render(<Button>My Button</Button>);

    expect(screen.getByText(/my button/iu)).toBeInTheDocument();
  });
});
