import { Color } from "./Colors";
import ValueDefaults from "../value-defaults/ValueDefaults";

export const determineColor = (color: Color): string => {
  switch (color) {
    case Color.Primary:
      return "is-primary";
    case Color.Secondary:
      return "is-secondary";
    default:
      return ValueDefaults.string;
  }
};
