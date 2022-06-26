import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("footer", () => {
  it("renders properly", () => {
    render(<Footer />);

    expect(screen.getByText(/first/iu)).toBeInTheDocument();
  });
});
