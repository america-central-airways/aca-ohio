import type ChildrenProperties from "../../common/properties/ChildrenProperties";

const Container: React.FC<ChildrenProperties> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
