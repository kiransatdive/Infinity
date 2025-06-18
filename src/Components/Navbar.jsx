import React, { useState,  } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";



const Navbar = () => {
  const navItems = [
    { label: "Docs", to: "/docs" },
    { label: "Components", to: "/components" },
    { label: "Figma", to: "/figma" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDarkMode]);

  return (
    <>
    <nav className="w-full bg-white dark:bg-neutral-900 py-6 px-6 sticky top-0 z-50 transition-colors duration-300 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 font-bold text-gray-800 dark:text-white">
          <img src="/infinity.png" alt="Logo" className="h-8 w-8  border-3 " />
          <span className="text-2xl font-bold">Infinity</span>
        </Link>

        <div className="hidden md:flex space-x-7 text-gray-700 dark:text-gray-300 font-bold">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="hover:text-indigo-600 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 dark:text-gray-300"
            />
            <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400 text-sm" />
          </div>

          <a
            href="https://github.com/kiransatdive"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-1 text-sm text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-800 px-3 py-1 rounded-full"
          >
            <FaGithub className="text-lg" />
          </a>

          {/* <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="text-xl text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button> */}

          <div className="hidden md:flex items-center space-x-2">
            <Link to="/signin" className="text-gray-700 dark:text-white px-5 py-2 rounded-3xl text-sm font-medium hover:text-indigo-700 transition">
              Signin
            </Link>
            <Link to="/signup" className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm hover:bg-indigo-700 transition font-medium">
              Sign up
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl text-gray-700 dark:text-gray-300 focus:outline-none"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center text-gray-700 dark:text-gray-300 font-medium">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.to}
              className="block hover:text-indigo-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
   
    </>
  );
};

export default Navbar;
