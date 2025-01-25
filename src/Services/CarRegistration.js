import axios from "axios";
import { getAuthData } from "../Hooks/useSecurity";

export async function postCarRegister({ data, url }) {
  const { token } = getAuthData() || {}; // Adjust token retrieval as needed
  try {
    const response = await axios.post(
      `http://localhost:5000/api/${url}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

export async function getShopTiming({ url }) {
  try {
    const response = await axios.get(`http://localhost:5000/api/${url}`);
    // const response = await axios.get(
    //   `http://localhost:5000/api/get-all-station-timings/6780f5b9045a1bd712807aad`
    // );

    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
