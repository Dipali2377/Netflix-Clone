import "../Login/Login.css";
import logo from "/Netflix_Logo_PMS.png";
import { Link, useNavigate } from "react-router-dom";
// import netflix-spinner from "/netflix-spinner.png"
import loadingImg from "/netflix-spinner.jpeg";

import { useState } from "react";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleLogin() {
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));

    setLoading(true);
    const matchingUser = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (matchingUser) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
    setLoading(false);
  }
  return (
    <>
      {loading ? (
        <div className="loading-spinner">
          <img src={loadingImg} alt="" />
        </div>
      ) : (
        <div className="login-div">
          <img src={logo} alt="" className="login-logo" />
          <div className="login-form">
            <h1 className="heading">Sign In</h1>
            <form>
              <input
                type="text"
                name=""
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email or Mobile Number"
                className="login-input"
              />
              <input
                type="password"
                name=""
                id=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="login-input"
              />
              <button
                className="signin-btn"
                type="button"
                onClick={handleLogin}
              >
                Sign In
              </button>
              {error && <p className="error-message">{error}</p>}{" "}
              {/* Display error */}
              <p className="or-para">OR</p>
              <button className="signin-code">Use a sign-in code</button>
              <div className="help">
                <div className="remember">
                  <span>
                    <input type="checkbox" className="checkbox-input" />
                  </span>
                  <label htmlFor="">Remember Me</label>
                </div>
              </div>
            </form>

            <p className="new">
              New to Neflix?
              <span>
                <Link to="/signup" className="link-style">
                  Sign up now.
                </Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
