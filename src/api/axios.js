import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8087/api", // 🔴 backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
