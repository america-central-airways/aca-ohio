import type { ChildrenProperties } from "../../common/properties";

const Section: React.FC<ChildrenProperties> = ({ children }) => {
  return <div className="section">{children}</div>;
};

export default Section;
