import axios from "axios";
import { setAuthData } from "../Hooks/useSecurity";

const Login = async ({ email, password }) => {
  try {
    const response = await axios.post(
      "https://vertix-nine.vercel.app/api/login",
      {
        email,
        password,
      }
    );
    if (response?.data?.user?.role !== "user") {
      throw new Error("Wrong Credentials for User");
    }
    const { token, user } = response.data;
    // response;
    console.log("login...", user);
    setAuthData({ token, user });
    return { success: true, token };
  } catch (error) {
    console.error("Login error response:", error.response); // Log server response
    throw error;
  }
};

export default Login;
