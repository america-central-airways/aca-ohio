import type { ChildrenProperties } from "../../common/properties";

const Container: React.FC<ChildrenProperties> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
