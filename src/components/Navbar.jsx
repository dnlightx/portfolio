import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="px-4 py-2 rounded-lg bg-light-button dark:bg-dark-secondary text-light-text dark:text-dark-text font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-700"
  >
    {children}
  </Link>
);

const ContactButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 rounded-lg bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700"
  >
    Contact
  </button>
);

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleContactClick = () => {
    navigate('/');
    setTimeout(() => {
      const contactSection = document.getElementById('get-in-touch');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-sm shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}  
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl text-light-text dark:text-dark-text transition-transform duration-300 hover:scale-125">
            <FaHome />
          </Link>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-4">
            <NavLink to="/projects">Projects</NavLink>
            <ContactButton onClick={handleContactClick} />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/dnlight" target="_blank" rel="noopener noreferrer" className="text-2xl text-light-text dark:text-dark-text transition-transform duration-300 hover:scale-125"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/promise-omisakin-07579a2b8/" target="_blank" rel="noopener noreferrer" className="text-2xl text-light-text dark:text-dark-text transition-transform duration-300 hover:scale-125"><FaLinkedin /></a>
            <a href="https://www.instagram.com/dnlightx/" target="_blank" rel="noopener noreferrer" className="text-2xl text-light-text dark:text-dark-text transition-transform duration-300 hover:scale-125"><FaInstagram /></a>
            <a href="https://x.com/dnlight69" target="_blank" rel="noopener noreferrer" className="text-2xl text-light-text dark:text-dark-text transition-transform duration-300 hover:scale-125"><FaXTwitter /></a>
            <a href="https://leetcode.com/u/DnLight/" target="_blank" rel="noopener noreferrer" className="text-2xl text-light-text dark:text-dark-text transition-transform duration-300 hover:scale-125"><SiLeetcode /></a>
            <ThemeSwitcher />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeSwitcher />
            <button onClick={toggleMenu} className="ml-4 text-2xl text-light-text dark:text-dark-text">
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
              <ContactButton onClick={handleContactClick} />
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
