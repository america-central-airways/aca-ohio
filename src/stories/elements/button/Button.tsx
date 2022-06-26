import {
  type ChildrenProperties,
  type ColorProperties,
} from "../../common/properties";
import { Color, determineColor } from "../../common/colors";

const Button: React.FC<ButtonProperties> = ({
  type = "button",
  children,
  color = Color.Default,
}) => {
  return (
    <button className={`button ${determineColor(color)}`} type={type}>
      {children}
    </button>
  );
};

interface ButtonProperties extends ChildrenProperties, ColorProperties {
  type?: "button" | "reset" | "submit";
}

export default Button;
