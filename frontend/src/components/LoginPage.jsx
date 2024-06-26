import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginValidation = (values) => {
    let error = {};
    if (values.email === "") {
      error.email = "email should not be empty";
    } else if (values.password === "") {
      error.password = "Password cannot be empty";
    }
    return error;
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const validationErrors = loginValidation({ email, password });
    if (Object.keys(validationErrors).length > 0) {
      // Handle validation errors
      return;
    }

    try {
      const response = await Axios.post(`http://localhost:8080/api/auth/login`, {
        email: email,
        password: password,
      });

      if (response.data.token) {
        const { role } = response.data;
        // Save token to localStorage or state management
        localStorage.setItem("token", response.data.token);
        // Redirect based on role
        if (role === 'admin') {
          navigate("/dashboard");
        } else {
          navigate("/userdashboard");
        }
      } else {
        alert("Error occurred during login");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="px-4 py-1 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <p className="text-gray-600 text-center mb-6">Welcome to Cine Hub</p>
        <form className="py-1">
          <div className="mb-2">
            <input
              type="email"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter email"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#293A77] text-white px-4 py-2 rounded-lg font-bold focus:outline-none"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <Link to="/register" style={{ textDecoration: 'none' }}>
            <div className="flex justify-between pt-4">
              <p>Don't have an account?</p>
              <button className="bg-[#293A77] p-2 rounded text-light font-bold">SignUp</button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
