import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    alert("Registration successful");
    navigate("/");
  };

  return (
    <div className="page-center">
      <div className="card">
        <h2>Create Account</h2>

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

        <button className="btn" onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default Register;
