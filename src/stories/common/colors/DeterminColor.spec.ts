import { Color } from "./Colors";
import ValueDefaults from "../value-defaults/ValueDefaults";
import { determineColor } from "./DetermineColor";

describe("determineColor", () => {
  it("primary returns correct class", () => {
    const result = determineColor(Color.Primary);

    expect(result).toBe("is-primary");
  });

  it("secondary return correct color", () => {
    const result = determineColor(Color.Secondary);

    expect(result).toBe("is-secondary");
  });

  it("default returns empty", () => {
    const result = determineColor(Color.Default);

    expect(result).toBe(ValueDefaults.string);
  });
});
