import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[75%] max-w-4xl"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-6 py-3 rounded-full bg-white/70 dark:bg-black/70 backdrop-blur-xl border border-white/20 shadow-xl">

        {/* Logo / Name */}
        <Link to="/" className="text-xl font-bold tracking-tight hover:text-purple-500 transition-colors">
          Promise.
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1 border border-gray-200 dark:border-gray-700">
          {['About', 'Projects', 'Resume', 'Socials'].map((item) => {
            const path = `/${item.toLowerCase()}`;
            const isActive = location.pathname === path;

            return (
              <Link
                key={item}
                to={path}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                    ? 'text-white bg-black dark:bg-white dark:text-black shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-gray-300 dark:border-gray-700">
            <a href="https://github.com/dnlight" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-purple-500 transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/promise-omisakin-07579a2b8/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-500 transition-colors">
              <FaLinkedin />
            </a>
          </div>
          <ThemeSwitcher />
        </div>

      </div>

      {/* Mobile Menu Placeholder - For simplicity in this iteration, we focus on the floating pill. 
                A full mobile menu would go here or be a separate overlay. 
                For now, the pill is responsive but links might wrap or scroll on very small screens if not handled.
                Adding a simple horizontal scroll for links on mobile if they overflow.
            */}
      <div className="md:hidden mt-4 flex justify-center gap-4 overflow-x-auto pb-2">
        {['About', 'Projects', 'Resume', 'Socials'].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className={`text-sm font-medium px-4 py-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border border-white/10 ${location.pathname === `/${item.toLowerCase()}` ? 'text-purple-500' : ''
              }`}
          >
            {item}
          </Link>
        ))}
      </div>

    </motion.nav>
  );
};

export default Navbar;
