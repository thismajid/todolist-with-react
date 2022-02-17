import axios from "axios";

const access_token = localStorage.getItem("token");

axios.defaults.baseURL = "http://localhost:3001/api";
axios.defaults.headers.common["authorization"] = `Bearer ${access_token}`;

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
