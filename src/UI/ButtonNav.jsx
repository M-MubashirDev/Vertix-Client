import { useNavigate } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

function ButtonNav({ children }) {
  const navigate = useNavigate();

  return (
    /* From Uiverse.io by EcheverriaJesus */
    <button
      onClick={() => navigate("/")}
      className="flex gap-3 z-40 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900"
    >
      {children}
      <IoArrowForward size={24} className="text-white" />
    </button>
  );
}
export function ButtonNavArrow({ children, to }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      type="submit"
      className="flex text-gray-50 justify-center gap-2 hover:shadow-2xl items-center mx-auto shadow-lg  text-lg bg-primary-dark hover:bg-gray-50 lg:font-semibold isolation-auto border-primary-dark hover:border-primary-dark before:absolute before:w-full before:transition-all before:duration-700 before:rounded-full before:bg-primary-dark hover:before:bg-gray-50 hover:text-primary-dark before:-z-10 before:aspect-square before:scale-150  relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
    >
      {children}
      <svg
        className="w-8 h-8 justify-end rotate-45 group-hover:rotate-90 text-gray-50 group-hover:text-primary-dark ease-linear duration-300 rounded-full border border-gray-50 group-hover:border-primary-dark p-2"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-gray-50 group-hover:fill-primary-dark"
        ></path>
      </svg>
    </button>
  );
}
export default ButtonNav;
