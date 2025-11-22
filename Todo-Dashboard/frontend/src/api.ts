import axios from "axios";

const api = axios.create({
  baseURL: "https://hatchdev-frontend.onrender.com/",
});

export default api;
