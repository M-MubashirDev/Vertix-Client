import axios from "axios";

export async function Contectus({ data }) {
  const token = localStorage.getItem("authToken");
  try {
    const response = await axios.post(
      `http://localhost:5000/api/contact-us`,
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
