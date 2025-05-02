import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold hover:scale-105 transition-transform duration-300">
          <a
            href="/"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Profile
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a
            href="/"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a
          href="/"
          className="block text-white py-2 px-4 hover:text-yellow-300 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="/about"
          className="block text-white py-2 px-4 hover:text-yellow-300 transition-colors duration-300"
        >
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
