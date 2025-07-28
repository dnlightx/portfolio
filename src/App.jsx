import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkShop from './WorkShop';

const Home = () => (
  <>
    <motion.header 
      id="home"
      className="w-full px-4 pt-40 pb-20 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-5xl font-bold mb-4">Promise Omisakin</h1>
      <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">Full-Stack Developer</p>
    </motion.header>

    <motion.section 
      id="about"
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <p className="text-lg max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300">
        A passionate developer with expertise in modern web technologies.
        I love creating beautiful and functional applications.
      </p>
    </motion.section>

    <Skills />

    <motion.section
      id="get-in-touch"
      className="py-20 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="flex justify-center space-x-6">
        <a
          href="mailto:omifisayopromise5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/promise-omisakin-07579a2b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/dnlightx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl transition-all duration-300 ease-in-out transform hover:scale-125 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <FaXTwitter />
        </a>
      </div>
    </motion.section>
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/workshop" element={<WorkShop />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
