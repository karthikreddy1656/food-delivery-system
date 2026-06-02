import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", form);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data || "Login failed");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
