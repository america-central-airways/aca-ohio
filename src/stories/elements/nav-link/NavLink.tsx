import { Link } from "react-router-dom";

const NavLink: React.FC<NavLinkProperties> = ({ to, text }) => {
  return (
    <Link className="is-link is-underlined" to={to}>
      {text}
    </Link>
  );
};

interface NavLinkProperties {
  to: string;
  text: string;
}

export default NavLink;
