import axios from "axios";

const backendUrl = import.meta.env.VITE_ADV_AUTH_BACKEND_URL;
const apiUrl = `${backendUrl}/api/users/`;

// Send automated email
const sendAutomatedEmail = async (emailData) => {
  const response = await axios.post(`${apiUrl}send-automated-email`, emailData);
  return response.data.message;
};

const emailService = { sendAutomatedEmail };

export default emailService;
