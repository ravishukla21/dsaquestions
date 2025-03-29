import { Link, NavLink } from "react-router-dom";
import "./Navbar_css.css";

const Navbar = () => {
  return (
    <div style={{border:1,borderWidth:2,borderColor:"red"}} className="navbar">
      <Link to="/">LoginSignupPage</Link>
      <Link to="/home">Homepage</Link>
      <Link to="/infiniteScroll">InfiniteScroll</Link>
    </div>
  );
};

export default Navbar;
