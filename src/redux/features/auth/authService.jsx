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

const updateUser = async (userData) => {
  const response = await axios.patch(`${apiUrl}update-user`, userData);
  return response.data.user;
};

const sendVerificationEmail = async () => {
  const response = await axios.post(`${apiUrl}send-verification-email`);
  return response.data.message;
};

const verifyUser = async (verificationToken) => {
  const response = await axios.patch(
    `${apiUrl}verify-user/${verificationToken}`
  );
  return response.data.message;
};

const changePassword = async (userData) => {
  const response = await axios.patch(`${apiUrl}change-password`, userData);
  return response.data.message;
};

const forgotPassword = async (userData) => {
  const response = await axios.post(`${apiUrl}forgot-password`, userData);
  return response.data.message;
};

const resetPassword = async (userData, resetToken) => {
  // console.log(userData);
  const response = await axios.patch(
    `${apiUrl}reset-password/${resetToken}`,
    userData
  );
  return response.data.message;
};

const getUsers = async () => {
  const response = await axios.get(`${apiUrl}get-all-users`);
  return response.data.users;
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${apiUrl}delete/${id}`);
  return response.data.message;
};

const upgradeUser = async (userData) => {
  const response = await axios.patch(`${apiUrl}upgrade-user`, userData);
  return response.data.message;
};

const sendLoginCode = async (email) => {
  const response = await axios.post(`${apiUrl}send-login-code/${email}`);
  return response.data.message;
};

const loginWithCode = async (code, email) => {
  const response = await axios.post(`${apiUrl}login-with-code/${email}`, code);
  console.log(response);
  return response.data.user;
};

const authService = {
  register,
  login,
  logout,
  loginStatus,
  getUser,
  updateUser,
  sendVerificationEmail,
  verifyUser,
  changePassword,
  forgotPassword,
  resetPassword,
  getUsers,
  deleteUser,
  upgradeUser,
  sendLoginCode,
  loginWithCode,
};

export default authService;
