import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkShop from './WorkShop';
import './App.css'

const Home = () => (
  <div className="min-h-screen w-full bg-black">
    {/* Hero Section */}
    <motion.header 
      id="home"
      className="w-full px-4 py-32 text-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-5xl font-bold mb-4 text-white"
        animate={{ scale: [1, 1.1, 1] }}  
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      >
        Promise Omisakin
      </motion.h1>
      <motion.p className="text-xl font-semibold text-gray-300"
      animate={{ scale: [1, 1.1, 1] }}  
      transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}>
        Full-Stack Developer
      </motion.p>
    </motion.header>

    {/* About Section */}
    <motion.section 
      id="about"
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 className="text-4xl font-bold mb-8 text-center text-white"
      animate={{ scale: [1, 1.1, 1] }}  
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}>
        About Me
      </motion.h2>
      <p className="text-lg max-w-3xl mx-auto text-center text-gray-300">
        A passionate developer with expertise in modern web technologies.
        I love creating beautiful and functional applications.
      </p>
    </motion.section>

    {/* Skills Section */}
    <Skills />

    {/* Contact Section */}
    <motion.section
      id="get-in-touch"
      className="py-20 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 className="text-4xl font-bold mb-8 text-center text-white"
      animate={{ scale: [1, 1.1, 1] }}  
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}>
        Contact Me
      </motion.h2>
      <div className="flex justify-center space-x-6">
      <motion.a
          href="mailto:omifisayopromise5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-2xl text-white hover:text-blue-400"
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/promise-omisakin-07579a2b8/"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="text-2xl text-white hover:text-blue-400"
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
      </div>
    </motion.section>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar darkMode={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects darkMode={true} />} />
          <Route path="/workshop" element={<WorkShop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
