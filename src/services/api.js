import axios from "axios";

const api = axios.create({
  baseURL: "https://apibirthday.onrender.com/user",
});

export default api;
