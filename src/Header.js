import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="py-3 shadow w-full bg-white">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <h2 className="font-bold text-2xl sm:text-3xl text-primary">
          Register<span className="text-secondary">Karo</span>
        </h2>

        {/* Navigation for larger screens */}
        <div className="hidden md:flex items-center gap-6">
          <a className="hover:text-violet-900 transition" href="/">
            Home
          </a>
          <a className="hover:text-violet-900 transition" href="/">
            Our Services
          </a>
          <a className="hover:text-violet-900 transition" href="/">
            Blog
          </a>
          <a className="hover:text-violet-900 transition" href="/">
            Contact Us
          </a>
          <a className="hover:text-violet-900 transition" href="/">
            About us
          </a>
          <a className="hover:text-violet-900 transition text-xl" href="/">
            <CiSearch />
          </a>
          <a
            className="bg-secondary text-white px-4 py-2 rounded-lg transition hover:bg-secondary-dark"
            href="/"
          >
            Talk An Expert
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-secondary focus:outline-none"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white border-t py-4 px-4">
            <a
              className="block text-primary py-2 hover:text-violet-900 transition"
              href="/"
            >
              Home
            </a>
            <a
              className="block text-primary py-2 hover:text-violet-900 transition"
              href="/"
            >
              Our Services
            </a>
            <a
              className="block text-primary py-2 hover:text-violet-900 transition"
              href="/"
            >
              Blog
            </a>
            <a
              className="block text-primary py-2 hover:text-violet-900 transition"
              href="/"
            >
              Contact Us
            </a>
            <a
              className="block text-primary py-2 hover:text-violet-900 transition"
              href="/"
            >
              About us
            </a>
            <a
              className="block text-primary py-2 flex items-center hover:text-violet-900 transition"
              href="/"
            >
              <CiSearch className="mr-2" />
              Search
            </a>
            <a
              className="block bg-secondary text-white py-2 px-4 rounded-lg mt-4 text-center transition hover:bg-secondary-dark"
              href="/"
            >
              Talk An Expert
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
