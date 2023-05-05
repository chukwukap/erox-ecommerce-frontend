import { Link } from "react-router-dom";

function CategoryNav() {
  return (
    <nav className="nav">
      <Link to={"/acne"}>Acne</Link>
      <Link to={"/sun"}>Sun</Link>
      <Link to={"/ezcema"}>Ezcema</Link>
      <Link to={"/psoriasis"}>Psoriasis</Link>
      <Link to={"/vitiligio"}>vitiligio</Link>
    </nav>
  );
}

export default CategoryNav;
