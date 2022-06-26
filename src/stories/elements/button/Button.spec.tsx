import { render, screen } from "@testing-library/react";
import AssertionAttempts from "../../common/test-utilities/AssertionAttempts";
import Button from "./Button";
import { Color } from "../../common/colors";
import setupUserEvent from "../../common/test-utilities/SetupUserEvent";

describe("button", () => {
  it("has correct text", () => {
    render(<Button onClickHandler={jest.fn()} text="Button" />);

    expect(screen.getByText(/button/iu)).toBeInTheDocument();
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

  it("default is not outlined", () => {
    render(<Button onClickHandler={jest.fn()} text="Button" />);

    expect(screen.getByText(/button/iu)).not.toHaveClass("is-outlined");
  });

  it("outlined has correct class", () => {
    render(
      <Button
        color={Color.Primary}
        onClickHandler={jest.fn()}
        outlined
        text="Button"
      />
    );

    expect(screen.getByText(/button/iu)).toHaveClass("is-outlined");
  });
});
