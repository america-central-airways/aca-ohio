import { render, screen } from "@testing-library/react";
import Column from "../column/Column";
import Columns from "./Columns";

describe("columns", () => {
  it("renders properly", () => {
    render(
      <Columns>
        <Column>columns</Column>
      </Columns>
    );

    expect(screen.getByText(/columns/iu)).toBeInTheDocument();
  });
});
