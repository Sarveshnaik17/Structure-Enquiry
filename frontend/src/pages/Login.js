import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await res.text();

    if (data.includes("Successful")) {
      localStorage.setItem("user", username);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="page-center">
      <div className="card">
        <h2>Welcome Back</h2>

        <input
          className="input"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button className="btn" onClick={login}>Login</button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          No account? <Link className="link" to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
