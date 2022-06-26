export enum Color {
  Primary = 0,
  Secondary = 1,
  Tertiary = 2,
}

export interface ColorProperties {
  color?: Color;
}

export const determineColor = (color: Color): string => {
  switch (color) {
    case Color.Primary:
      return "is-primary";
    case Color.Secondary:
      return "is-secondary";
    case Color.Tertiary:
      return "is-tertiary";
    default:
      return "";
  }
};
