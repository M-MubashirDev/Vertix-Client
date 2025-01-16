import axios from "axios";

export async function Contectus({ data }) {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/contact-us`,
      data
    );
    return response;
  } catch (error) {
    console.error("Error fetching  data:", error.message);
    throw error;
  }
}

//
