import axios from "axios";
import { getAuthData } from "../Hooks/useSecurity";

export async function getServices({ url }) {
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
