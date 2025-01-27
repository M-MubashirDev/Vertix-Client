import axios from "axios";
import { getAuthData, setAuthData } from "../Hooks/useSecurity";

async function postRegistration({ url, data }) {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/${url}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { token, user } = response.data;
    response;
    console.log("login...", user);
    setAuthData({ token, user });
    console.log(response);
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
}
async function getAllCarRegister({ url }) {
  const { token } = getAuthData() || {};

  try {
    const response = await axios.get(`http://localhost:5000/api/${url}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
export { postRegistration, getAllCarRegister };
