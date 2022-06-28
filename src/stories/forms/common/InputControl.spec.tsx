import { render, screen } from "@testing-library/react";
import InputControl from "./InputControl";

describe("input control", () => {
  it("renders properly", () => {
    render(
      <>
        <label htmlFor="input">My Input:</label>
        <InputControl>
          <input id="input" />
        </InputControl>
      </>
    );

    expect(screen.getByLabelText(/input/iu)).toBeInTheDocument();
  });
});
