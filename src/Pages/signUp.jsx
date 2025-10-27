import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkVeil from "../ReactBits/DarkVeil.jsx";
import "./signUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    setSubmit(true);

    try {
      const response = await fetch("https://studybackend-ctkm.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Signup failed");
        setLoading(false);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      setSuccess("Signed up successfully!");
      setLoading(false);
      navigate("/login");

    } catch (err) {
      setError("Server error. Please try again later.");
      setLoading(false);
    }

  };


  return (
    <div className="formWrapper">
      <DarkVeil />
      <div className="formContainer">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} style={{ backgroundColor: "transparent" }}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
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
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {submit && <p className="success">Signed Up Successfully!</p>}
      </div>
    </div>
  );
}

export default SignUp;
