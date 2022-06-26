import type { ChildrenProperties } from "../../common/properties";
import { ColumnSizes } from "./ColumnSizes";
import ValueDefaults from "../../common/value-defaults/ValueDefaults";

const Column: React.FC<ColumnProperties> = ({
  children,
  size = ColumnSizes.Auto,
}) => {
  const determineSize = (): string => {
    switch (size) {
      case ColumnSizes.Auto:
        return ValueDefaults.string;

      case ColumnSizes.IsOneQuarter:
        return "is-one-quarter";
      case ColumnSizes.IsOneThird:
        return "is-one-third";
      case ColumnSizes.IsHalf:
        return "is-half";
      case ColumnSizes.IsTwoThirds:
        return "is-two-thirds";
      case ColumnSizes.IsThreeQuarter:
        return "is-three-quarters";
      case ColumnSizes.IsFull:
        return "is-full";
      default:
        return ValueDefaults.string;
    }
  };

  return <div className={`column ${determineSize()}`}>{children}</div>;
};

interface ColumnProperties extends ChildrenProperties {
  size?: ColumnSizes;
}

export default Column;
