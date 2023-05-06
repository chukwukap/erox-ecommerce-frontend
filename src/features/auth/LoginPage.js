import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });
  function handleInput(ev) {
    const { name, value } = ev.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(ev) {
    ev.preventDefault();
  }
  return (
    <main className="auth-page">
      <section className="auth-section">
        <div>
          <h1 className="auth-section__headline">Login</h1>
          <form className="auth-section__form" onSubmit={handleSubmit}>
            <input
              className="auth-section__input"
              placeholder="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onInput={handleInput}
            />
            <input
              className="auth-section__input"
              placeholder="Password"
              type="password"
              name="password"
              value={formData.password}
              onInput={handleInput}
            />
            <input
              className="auth-section__btn"
              placeholder="Password"
              type="submit"
              value={"Continue"}
            />
          </form>
          <div className="auth-section__links">
            <Link>Forgot your password?</Link>
            <p>
              Don’t have an account?{" "}
              <Link to="/auth/register">Register now.</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
