import { type RenderOptions, render } from "@testing-library/react";
import type { UserEvent } from "@testing-library/user-event/dist/types/setup";
import userEvent from "@testing-library/user-event";

export default function setupUserEvent(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
): UserEvent {
  render(ui, options);

  return userEvent.setup();
}
