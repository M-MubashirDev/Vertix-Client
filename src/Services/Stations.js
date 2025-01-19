import axios from "axios";

export async function getStations({ url }) {
  console.log(url);

  try {
    const token = localStorage.getItem("authToken");
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
