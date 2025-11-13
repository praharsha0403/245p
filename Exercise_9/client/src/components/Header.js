import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">MyBrand</Link>
      <div className="headerRight">
        <Link to="/">Landing View</Link>
        <Link to="/exampledataview">Example Data View</Link>
      </div>
    </div>
  );
}

export default Header;
