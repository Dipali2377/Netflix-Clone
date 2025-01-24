import "./SignUp.css";
import logo from "../../assets/Logo.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signUp } from "../../firebase";
export const SignUp = () => {
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  function handleSignup() {
    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    if (registeredUsers.some((user) => user.email === email)) {
      setError("Email is already registered");
      return;
    }
    const newUser = { email, password };

    registeredUsers.push(newUser);

    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/login");
  }

  return (
    <div className="signup-div">
      <div className="navbar-div">
        <img src={logo} alt="" className="logo-img" />
        <div className="nav-buttons">
          <select
            name="language"
            id="language"
            className="language"
            onChange={changeLanguage}
          >
            <option value="eng">English</option>
            <option value="hindi">हिन्दी</option>
          </select>
          <button className="signin-btn" onClick={() => navigate("/login")}>
            {t("navbar.signin")}
          </button>
        </div>
      </div>
      <div className="wrapper">
        <div className="container">
          <div className="text-container">
            <h1 className="heading">
              Unlimited movies, TV <br /> shows and more
            </h1>
            <h4 className="sub-heading">Starts at ₹149. Cancel at any time.</h4>
            <p className="para">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div className="buttons-container">
            <input
              type="text"
              name=""
              id=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="signup-input"
            />
            <input
              type="password"
              name=""
              id=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="signup-input"
            />
            <button className="finish" onClick={handleSignup}>
              Finish
            </button>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
