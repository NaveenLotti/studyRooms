import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkVeil from "../ReactBits/DarkVeil.jsx";
import "./login.css";
import { useAuth } from "../hooks/useAuth.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

   const { loginUser } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      loginUser(data);


      setLoading(false);
      navigate("/"); 
    } catch (err) {
      setError("Server error. Please try again later.",err);
      setLoading(false);
    }
  };

  return (
    <div className="loginWrapper">
      <DarkVeil />
      <div className="loginContainer">
        <h1>Login to StudySphere</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className="btn" type="submit" onClick={handleLogin}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
