import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("section", () => {
  it("renders properly", () => {
    render(<Section>I am a section!</Section>);

    expect(screen.getByText(/i am a section/iu)).toBeInTheDocument();
  });
});
