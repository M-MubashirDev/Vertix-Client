import axios from "axios";

export async function postCarRegister({ data }) {
  const token = localStorage.getItem("authToken"); // Adjust token retrieval as needed
  try {
    const response = await axios.post(
      `http://localhost:5000/api/create-car-registration`,
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
