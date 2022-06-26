import { Color, determineColor } from "../../common/colors";
import { type ColorProperties } from "../../common/properties";

const Button: React.FC<ButtonProperties> = ({
  text,
  onClickHandler,
  type = "button",
  color = Color.Default,
}) => {
  return (
    <button
      className={`button ${determineColor(color)}`}
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
}

export default Button;
