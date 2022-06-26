import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("container", () => {
  it("renders correctly", () => {
    render(<Container>Hello!</Container>);

    expect(screen.getByText(/hello/iu)).toBeInTheDocument();
  });
});
