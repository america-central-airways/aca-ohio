import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("label", () => {
  it("has correct text", () => {
    render(<Label htmlFor="123" text="label" />);

    expect(screen.getByText(/label/iu)).toBeInTheDocument();
  });
});
