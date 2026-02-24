import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "testuser" && password === "Test123") {
      navigate("/list");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="page-container">
      <h2>Login</h2>
      <div className="card" style={{ width: "300px" }}>
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={inputStyle} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
          <button type="submit" style={{ backgroundColor: "#007BFF", color: "white" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
const inputStyle ={
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontFamily: "Montserrat, sans-serif",
};