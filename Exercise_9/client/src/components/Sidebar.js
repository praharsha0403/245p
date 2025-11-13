import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Landing View</Link>
      <Link to="/exampledataview">Example Data View</Link>
    </div>
  );
}

export default Sidebar;
