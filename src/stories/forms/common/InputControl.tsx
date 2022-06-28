import type { ChildrenProperties } from "../../common/properties";

const InputControl: React.FC<ChildrenProperties> = ({ children }) => {
  return <div className="control">{children}</div>;
};

export default InputControl;
