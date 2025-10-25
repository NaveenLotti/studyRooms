import { useState } from "react";
import DarkVeil from "../ReactBits/DarkVeil.jsx";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  const Submit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields");
      return;
    }

    setError("");
    setSubmit(true);
  };

  return (
    <div className="loginWrapper">
      <DarkVeil /> {/* motion background */}
      <div className="loginContainer">
        <h1>Login to StudySphere</h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"

        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <button className="btn" type="submit" onClick={Submit}>Login</button>

                {error && <p className="error">{error}</p>}
        {submit && <p className="success">Logged in successfully!</p>}
      </div>
    </div>
  );
}

export default Login;
