import { Link } from "react-router-dom";

function LinkGroup({ to, name, children }) {
  return (
    <div className="link-group">
      <Link to={to}>{name}</Link>
      <div className="children">{children}</div>
    </div>
  );
}

export default LinkGroup;
