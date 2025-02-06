import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Cross icon
import { Link, useLocation } from "react-router-dom";

import { ButtonNavArrow } from "../UI/ButtonNav";
import LinkNav from "../UI/LinkNav";
import { getAuthData } from "../Hooks/useSecurity";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { token } = getAuthData() || {};

  // Navigation links data
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Contact Us", to: "/contactus" },
    ...(!token
      ? [{ label: "Log in", to: "/login" }]
      : [{ label: "Profile", to: "/cardetails" }]),
  ];

  // Function to close the menu
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white bg-opacity-70 shadow-lg text-white py-2">
      <div className="w-[90%] max-w-[1440px] mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-secondary-light">
              <img
                src="logo2.png"
                alt="logo"
                className="md:max-w-40 sm:max-w-30 max-w-24"
              />
            </Link>
          </div>

          {/* Nav Links (Desktop) */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link, index) => (
              <LinkNav
                key={index}
                to={link.to}
                sent="text-primary-dark font-semibold"
                func={link.func}
              >
                {link.label}
              </LinkNav>
            ))}
            <ButtonNavArrow to="location">Get Plan</ButtonNavArrow>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black hover:text-secondary-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden min-h-screen flex flex-col items-center gap-6 text-white p-4  bg-opacity-90">
            {navLinks.map((link, index) => (
              <LinkNav
                key={index}
                to={link.to}
                sent={`text-primary-dark font-semibold ${
                  location.pathname === link.to ? "text-secondary-light" : ""
                }`}
                func={() => {
                  if (link.func) link.func(); // Execute the link-specific function
                  handleCloseMenu();
                }}
              >
                {link.label}
              </LinkNav>
            ))}
            <ButtonNavArrow to="location" func={handleCloseMenu}>
              Get Plan
            </ButtonNavArrow>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
