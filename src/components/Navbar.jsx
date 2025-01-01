import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    // Navigate to home page if not already there
    navigate('/');
    
    // Scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById('get-in-touch');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg rounded-b-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}  
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Home icon */}
          <Link
            to="/"
            className="text-2xl text-white hover:text-blue-500 hover:scale-110 transition-all duration-300"
          >
            <FaHome />
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Center - Navigation links (desktop) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <Link
              to="/projects"
              className="text-lg font-semibold text-white hover:text-blue-500 hover:scale-110 transition-all duration-300"
            >
              Projects
            </Link>
            <span
              onClick={handleContactClick}
              className="text-lg font-semibold cursor-pointer text-white hover:text-blue-500 hover:scale-110 transition-all duration-300"
            >
              Contact
            </span>
          </div>

          {/* Right side - Social icons */}
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/dnlightx"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-xl text-white hover:text-blue-500"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/promise-omisakin-07579a2b8/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-xl text-white hover:text-blue-500"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://x.com/dnlight69"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-xl text-white hover:text-blue-500"
            >
              <FaXTwitter />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/dnlightszn/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-xl text-white hover:text-blue-500"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://leetcode.com/u/DnLight/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              className="text-xl text-white hover:text-blue-500"
            >
              <SiLeetcode />
            </motion.a>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-gray-900">
            <div className="px-4 pt-2 pb-4 space-y-4">
              <Link
                to="/projects"
                className="block text-lg font-semibold text-white hover:text-blue-500"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <span
                onClick={() => {
                  handleContactClick();
                  toggleMenu();
                }}
                className="block text-lg font-semibold cursor-pointer text-white hover:text-blue-500"
              >
                Contact
              </span>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool
};

export default Navbar;
