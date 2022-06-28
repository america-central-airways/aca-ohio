import { render, screen } from "@testing-library/react";
import InputField from "./InputField";

describe("input field", () => {
  it("renders properly", () => {
    render(
      <InputField>
        <label htmlFor="input">My Input:</label>
        <input id="input" />
      </InputField>
    );

    expect(screen.getByLabelText(/input/iu)).toBeInTheDocument();
  });
});
