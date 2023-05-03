import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main style={{ minHeight: "100vh", fontSize: "2rem", fontWeight: "bold" }}>
      <div>
        <h1>
          We can't seem to find what you are looking for. please go to{" "}
          <Link to={"/"}>Home page</Link> or reenter the url
        </h1>
      </div>
    </main>
  );
}

export default NotFound;
