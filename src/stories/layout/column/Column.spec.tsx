import { render, screen } from "@testing-library/react";
import Column from "./Column";
import { ColumnSizes } from "./ColumnSizes";

describe("column", () => {
  it("renders properly", () => {
    render(<Column>column</Column>);

    expect(screen.getByText(/column/iu)).toBeInTheDocument();
  });

  it("default has correct class", () => {
    render(<Column>column</Column>);

    expect(screen.getByText(/column/iu)).not.toHaveClass(
      "is-full",
      "is-one-quarter",
      "is-one-third",
      "is-half",
      "is-two-thirds",
      "is-three-quarters"
    );
  });

  it("size is-full has correct class", () => {
    render(<Column size={ColumnSizes.IsFull}>column</Column>);

    expect(screen.getByText(/column/iu)).toHaveClass("is-full");
  });
});
