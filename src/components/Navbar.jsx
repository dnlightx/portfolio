import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ['About', 'Projects', 'Socials'];

  return (
    <>
      <motion.nav
        className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[75%] max-w-4xl"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between px-5 md:px-6 py-3 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 shadow-xl">

          <Link to="/" onClick={() => setIsOpen(false)} className="text-xl md:text-2xl font-bold tracking-tight hover:text-[#0265d8] transition-colors">
            Promise.
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1 border border-gray-200 dark:border-gray-700">
            {navLinks.map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <Link
                  key={item}
                  to={path}
                  className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
                    ? 'text-white bg-[#0265d8] dark:bg-[#0265d8] shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-[#0265d8] dark:hover:text-[#60a5fa]'
                    }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-gray-300 dark:border-gray-700">
              <a href="https://github.com/dnlightx" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#0265d8] transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/promiseomisakin/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-[#0b66c2] transition-colors">
                <FaLinkedin />
              </a>
            </div>
            <ThemeSwitcher />
            <button onClick={toggleMenu} className="md:hidden text-2xl ml-2 text-light-text dark:text-dark-text focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-bold tracking-wide transition-colors ${isActive ? 'text-[#0265d8]' : 'text-gray-800 dark:text-gray-200 hover:text-[#0265d8]'
                    }`}
                >
                  {item}
                </Link>
              );
            })}
            <div className="flex items-center gap-6 mt-8">
              <a href="https://github.com/dnlight" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#0265d8] transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/promise-omisakin-07579a2b8/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-[#0b66c2] transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
