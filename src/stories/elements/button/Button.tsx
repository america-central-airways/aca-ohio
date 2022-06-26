import {
  Color,
  type ColorProperties,
  determineColor,
} from "../../common/properties/Colors";
import type ChildrenProperties from "../../common/properties/ChildrenProperties";

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
