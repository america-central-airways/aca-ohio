import type { ChildrenProperties } from "../../common/properties";

const InputField: React.FC<ChildrenProperties> = ({ children }) => {
  return <div className="field">{children}</div>;
};

export default InputField;
