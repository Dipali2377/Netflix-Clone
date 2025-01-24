import logo from "/Netflix_Logo_PMS.png";
import "../Password/Password.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
export const Password = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || "No email found";
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleFinish() {
    if (password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/login");
      } catch (error) {
        setError(error.message);
      }
    } else {
      setError("Please enter your password");
    }
  }
  return (
    <div className="password-div">
      <div className="password-navbar">
        <img src={logo} alt="" className="logo" />
        <Link className="sign-in-link" to={"/login"}>
          Sign In
        </Link>
      </div>
      <div className="container">
        <h1>
          Welcome Back! <br /> Joining Netflix is easy.
        </h1>
        <p>Enter your password and you&apos;ll be watching in no time</p>
        <p>Email</p>
        <p>{email}</p>
        <input
          type="password"
          name=""
          id=""
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button onClick={handleFinish}>Finish</button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};
