import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const AddRestaurant = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState({
    name: "",
    location: "",
    rating: "",
  });

  const handleChange = (e) =>
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/restaurants", restaurant);
    alert("Restaurant added");
    navigate("/restaurants");
  };

  return (
    <div>
      <h2>Add Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /><br />
        <input name="location" placeholder="Location" onChange={handleChange} /><br />
        <input name="rating" placeholder="Rating" onChange={handleChange} /><br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddRestaurant;
