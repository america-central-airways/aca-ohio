import Column from "../column/Column";
import Columns from "../columns/Columns";

const Footer: React.FC = () => {
  return (
    <footer className="footer has-background-secondary has-text-white has-text-centered">
      <Columns>
        <Column>first</Column>
        <Column>second</Column>
        <Column>third</Column>
      </Columns>
    </footer>
  );
};

export default Footer;
