import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Import images
import comingSoonImg from '../assets/coming soon.png';
import tictactoeImg from '../assets/tictactoe.png';
import game2048Img from '../assets/2048.png';

const ProjectCard = ({ title, description, image, link }) => (
  <motion.div
    className="rounded-lg overflow-hidden shadow-lg bg-gray-900"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    animate={{ 
      scale: [1, 1.05, 1],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        repeatDelay: 1 
      }
    }}
    transition={{ duration: 0.5 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-3 text-white">
        {title}
      </h3>
      <p className="mb-4 text-gray-300">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        View Project
      </a>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

const Projects = () => {
  const projects = [
    {
      title: "Ultimate Productivity App",
      description: "A full-stack Productivity App built with React and Flask",
      image: comingSoonImg,
      link: "/workshop"
    },
    {
      title: "Tic-Tac-Toe", 
      description: "A clean Tic-Tac-Toe Game built with React",
      image: tictactoeImg,
      link: "https://tictactoe-promise.vercel.app/"
    },
    {
      title: "2048",
      description: "A clean 2048 Game built with React",
      image: game2048Img,
      link: "https://2048-promise.vercel.app/"
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
        className="text-4xl font-bold text-center text-white mb-12"
        animate={{ scale: [1, 1.1, 1] }}  
        transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}>
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;