import Column from "../column/Column";
import Columns from "../columns/Columns";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Columns>
        <Column>first</Column>
        <Column>second</Column>
        <Column>third</Column>
      </Columns>
    </footer>
  );
};

export default Footer;
