import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "https://port-0-scb-be-m5papr2jabee49e1.sel4.cloudtype.app/",
  headers: {
    accept: "application/json",
    "X-CSRFTOKEN": process.env.REACT_APP_API_KEY || "",
  },
});

export default api;