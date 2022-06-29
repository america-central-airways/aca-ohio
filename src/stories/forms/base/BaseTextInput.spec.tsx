import { render, screen } from "@testing-library/react";
import BaseTextInputWrapper from "./BaseTextInputWrapper";

describe("base text input", () => {
  it("has hook value", () => {
    render(<BaseTextInputWrapper />);

    expect(screen.getByLabelText(/label/iu)).toHaveValue("default");
  });
});
