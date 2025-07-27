import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text transition-all duration-300 ease-in-out transform hover:scale-110"
    >
      {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
};

export default ThemeSwitcher;
