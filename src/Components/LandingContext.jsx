import { createContext, useContext } from "react";
const Landing = createContext();

function LandingContext({ children }) {
  return <Landing.Provider value={{}}>{children}</Landing.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLandingContext = function () {
  const context = useContext(Landing);
  if (!context) {
    throw new Error("useLandingContext must be used within an LandingContext");
  }
  return context;
};

export default LandingContext;
