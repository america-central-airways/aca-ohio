import { render, screen } from "@testing-library/react";
import Column from "./Column";
import { ColumnSizes } from "./ColumnSizes";

describe("column", () => {
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

  it("size is-one-quarter has correct class", () => {
    render(<Column size={ColumnSizes.IsOneQuarter}>column</Column>);

    expect(screen.getByText(/column/iu)).toHaveClass("is-one-quarter");
  });

  it("size is-one-third has correct class", () => {
    render(<Column size={ColumnSizes.IsOneThird}>column</Column>);

    expect(screen.getByText(/column/iu)).toHaveClass("is-one-third");
  });

  it("size is-half has correct class", () => {
    render(<Column size={ColumnSizes.IsHalf}>column</Column>);

    expect(screen.getByText(/column/iu)).toHaveClass("is-half");
  });

  it("size is-two-thirds has correct class", () => {
    render(<Column size={ColumnSizes.IsTwoThirds}>column</Column>);

    expect(screen.getByText(/column/iu)).toHaveClass("is-two-thirds");
  });

  it("size is-three-quarters has correct class", () => {
    render(<Column size={ColumnSizes.IsThreeQuarter}>column</Column>);

    expect(screen.getByText(/column/iu)).toHaveClass("is-three-quarters");
  });

  it("size is-full has correct class", () => {
    render(<Column size={ColumnSizes.IsFull}>column</Column>);

    expect(screen.getByText(/column/iu)).toHaveClass("is-full");
  });
});
