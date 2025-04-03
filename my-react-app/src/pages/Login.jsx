


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Attempting login with:", { username, password });

      const response = await api.post("/login/", { username, password });
      console.log("Login successful:", response.data);

      const { access, refresh } = response.data;

      // Store tokens in localStorage
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);

      // Navigate to the tasks page
      navigate("/tasks");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
      console.error("Login failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center text-primary">Login</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <a href="/register" className="text-decoration-none">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
