import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    receiveEmailUpdate: false,
  });
  function handleInput(ev) {
    const { name, value } = ev.target;
    console.log([name, value]);
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(ev) {
    ev.preventDefault();
  }
  return (
    <main className="auth-page">
      <section className="auth-section">
        <div>
          <h1 className="auth-section__headline">Register</h1>
          <form className="auth-section__form" onSubmit={handleSubmit}>
            <input
              className="auth-section__input"
              placeholder="First Name"
              type="text"
              name="firstName"
              value={formData.firstName}
              onInput={handleInput}
            />
            <input
              className="auth-section__input"
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formData.lastName}
              onInput={handleInput}
            />
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
            <label htmlFor="receiveEmailUpdate">
              <input
                type="checkbox"
                id="receiveEmailUpdate"
                name="receiveEmailUpdate"
                value={formData.receiveEmailUpdate}
                onInput={(ev) => {
                  console.log(ev.target.checked);
                  setFormData((prev) => {
                    return {
                      ...prev,
                      receiveEmailUpdate: ev.target.checked,
                    };
                  });
                }}
              />
              Receive email updates and special promo offers
            </label>
            <input
              className="auth-section__btn"
              type="submit"
              value={"Create Account"}
            />
          </form>
          <div className="auth-section__links">
            <p>
              Already have an account? <Link to="/auth">Sign in here</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RegisterPage;
