export enum Color {
  Default = 0,
  Primary = 1,
  Secondary = 2,
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
    default:
      return "";
  }
};
