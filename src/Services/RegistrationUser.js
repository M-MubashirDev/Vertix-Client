import axios from "axios";
import { getAuthData, setAuthData } from "../Hooks/useSecurity";

async function postRegistration({ url, data }) {
  try {
    const response = await axios.post(
      `https://vertix-nine.vercel.app/api/${url}`,
      data
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
    const response = await axios.get(
      `https://vertix-nine.vercel.app/api/${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
export { postRegistration, getAllCarRegister };
