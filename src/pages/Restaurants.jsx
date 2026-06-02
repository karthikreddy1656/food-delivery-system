import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import Navbar from "../components/Navbar";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("/restaurants").then((res) => setRestaurants(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h2>Restaurants</h2>
        {restaurants.map((r) => (
          <div key={r.id}>
            <b>{r.name}</b> — {r.address}
          </div>
        ))}
      </div>
    </>
  );
};

export default Restaurants;
