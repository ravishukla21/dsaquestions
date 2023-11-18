import { Link, NavLink } from "react-router-dom";
import "./Navbar_css.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">LoginSignupPage</Link>
      <Link to="/home">Homepage</Link>
    </div>
  );
};

export default Navbar;
