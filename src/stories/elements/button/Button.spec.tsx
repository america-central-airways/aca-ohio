import { render, screen } from "@testing-library/react";
import AssertionAttempts from "../../common/test-utilities/AssertionAttempts";
import Button from "./Button";
import setupUserEvent from "../../common/test-utilities/SetupUserEvent";

describe("button", () => {
  it("has correct text", () => {
    render(<Button onClickHandler={jest.fn()} text="My Button" />);

    expect(screen.getByText(/my button/iu)).toBeInTheDocument();
  });

  it("calls onClickHandler", async () => {
    expect.hasAssertions();
    const handler = jest.fn();

    const user = setupUserEvent(
      <Button onClickHandler={handler} text="My Button" />
    );

    await user.click(screen.getByText(/my button/iu));

    expect(handler.mock.calls).toHaveLength(AssertionAttempts.Once);
  });
});
