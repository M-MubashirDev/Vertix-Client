import axios from "axios";
import { getAuthData } from "../Hooks/useSecurity";

async function postRegistration({ url, data }) {
  const { token } = getAuthData() || {};
  try {
    const response = await axios.post(
      `http://localhost:5000/api/${url}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}
export { postRegistration };
