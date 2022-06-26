import { Color, determineColor } from "../../common/colors";
import { type ColorProperties } from "../../common/properties";
import ValueDefaults from "../../common/value-defaults/ValueDefaults";

const Button: React.FC<ButtonProperties> = ({
  text,
  onClickHandler,
  type = "button",
  color = Color.Default,
  outlined = false,
}) => {
  const isOutlined = (): string => {
    if (outlined) {
      return "is-outlined";
    }
    return ValueDefaults.string;
  };

  return (
    <button
      className={`button is-responsive ${determineColor(
        color
      )} ${isOutlined()}`}
      onClick={(event): void => {
        onClickHandler(event);
      }}
      type={type}
    >
      {text}
    </button>
  );
};

export interface ButtonProperties extends ColorProperties {
  text: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "reset" | "submit";
  outlined?: boolean;
}

export default Button;
