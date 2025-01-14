import axios from "axios";

export async function getServices({ url }) {
  try {
    const response = await axios.get(`http://localhost:5000/api/${url}`);

    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error(err.message);
  }
}
