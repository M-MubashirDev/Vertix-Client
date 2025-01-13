import axios from "axios";

export async function getStations({ url, data }) {
  try {
    const response = await axios.get(`http://localhost:5000/api/${url}`, data);

    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
