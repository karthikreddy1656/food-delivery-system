import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "CUSTOMER",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/register", form);
      alert(res.data);
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.response?.data || "Registration failed");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        /><br />
        <input name="phone" placeholder="Phone" onChange={handleChange} /><br />

        <select name="role" onChange={handleChange}>
          <option value="CUSTOMER">Customer</option>
          <option value="RESTAURANT">Restaurant</option>
          <option value="DELIVERY">Delivery</option>
        </select>
        <br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
