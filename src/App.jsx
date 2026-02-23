import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Socials from './components/Socials';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-light-background dark:bg-[#050505] text-light-text dark:text-dark-text transition-colors duration-300 relative overflow-hidden">
        <div className="fixed top-[-10%] left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-[#0265d8]/20 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="fixed bottom-[-10%] right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0" />

        <Navbar />
        <main className="relative">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
