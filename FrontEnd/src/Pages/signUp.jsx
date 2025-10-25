import { useState } from "react";
import DarkVeil from "../ReactBits/DarkVeil.jsx";
import "./signUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
//   const [topics, setTopics] = useState([]);
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill all fields");
      setSubmit(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setSubmit(false);
      return;
    }
    setError("");
    setSubmit(true);
  };

//   const handleTopics = (e) => {
//     const value = e.target.value;
//     const topicsArray = value.split(",").map((topic) => topic.trim());
//     setTopics(topicsArray);
//   };

  return (
    <div className="formWrapper">
      <DarkVeil />
      <div className="formContainer">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit} style={{backgroundColor: "transparent"}}>
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
          {/* <input
            type="text"
            value={topics}
            onChange={handleTopics}
            placeholder="Topics you are interested in (comma-separated)"
          /> */}

          <button type="submit">Sign Up</button>
        </form>

        {error && <p className="error">{error}</p>}
        {submit && <p className="success">Signed Up Successfully!</p>}
      </div>
    </div>
  );
}

export default SignUp;
