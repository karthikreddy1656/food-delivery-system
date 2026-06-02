import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={{ padding: "12px", background: "#ff6600" }}>
      <Link to="/dashboard" style={{ marginRight: 12, color: "#fff" }}>
        Dashboard
      </Link>
      <Link to="/restaurants" style={{ marginRight: 12, color: "#fff" }}>
        Restaurants
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Navbar;
