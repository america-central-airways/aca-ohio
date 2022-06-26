import type { ChildrenProperties } from "../../common/properties";

const Columns: React.FC<ChildrenProperties> = ({ children }) => {
  return <div className="columns">{children}</div>;
};

export default Columns;
