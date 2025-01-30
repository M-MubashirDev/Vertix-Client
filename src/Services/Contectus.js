import axios from "axios";
import { getAuthData } from "../Hooks/useSecurity";

export async function Contectus({ data }) {
  const { token } = getAuthData() || {};
  try {
    const response = await axios.post(
      `https://vertix-nine.vercel.app/contact-us`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching  data:", error.message);
    throw error;
  }
}

//
