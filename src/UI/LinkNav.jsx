/* eslint-disable react/display-name */
// import { Link } from "react-router-dom";

// function LinkNav({ to, children, func, sent }) {
//   return (
//     <li
//       className={`${sent}`}
//       onClick={() => {
//         func ? func() : "";
//       }}
//     >
//       <Link
//         to={to}
//         className="flex items-center space-x-2 hover:text-neutral-light transition duration-200"
//       >
//         <button className="relative text-primary-dark font-semibold text-lg overflow-hidden group">
//           {children}
//           <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-dark transition-all duration-300 group-hover:w-full"></span>
//         </button>
//       </Link>
//     </li>
//   );
// }

// export default LinkNav;
import { Link } from "react-router-dom";

const LinkNav = ({ to, children, func, sent }) => {
  return (
    <li
      className={`${sent}`}
      onClick={() => {
        if (func) func();
      }}
    >
      <Link
        to={to}
        className="flex items-center space-x-2 hover:text-neutral-light transition duration-200"
      >
        <button className="relative text-primary-dark font-semibold text-lg overflow-hidden group">
          {children}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-dark transition-all duration-300 group-hover:w-full"></span>
        </button>
      </Link>
    </li>
  );
};

export default LinkNav;
