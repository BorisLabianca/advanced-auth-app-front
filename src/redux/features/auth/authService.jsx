import axios from "axios";

const backendUrl = import.meta.env.VITE_ADV_AUTH_BACKEND_URL;
const apiUrl = `${backendUrl}/api/users/`;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const register = async (userData) => {
  const response = await axios.post(`${apiUrl}register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${apiUrl}login`, userData);
  return response.data.user;
};

const logout = async () => {
  const response = await axios.get(`${apiUrl}logout`);
  return response.data;
};

const loginStatus = async () => {
  const response = await axios.get(`${apiUrl}login-status`);
  return response.data;
};

const getUser = async () => {
  const response = await axios.get(`${apiUrl}get-user`);
  return response.data.user;
};

const authService = { register, login, logout, loginStatus, getUser };

export default authService;
