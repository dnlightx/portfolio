import { motion } from 'framer-motion';

// Import images
import comingSoonImg from '../assets/coming soon.png';
import tictactoeImg from '../assets/tictactoe.png';
import game2048Img from '../assets/2048.png';

const ProjectCard = ({ title, description, image, link }) => (
  <motion.div
    className="rounded-lg overflow-hidden shadow-lg bg-light-secondary dark:bg-dark-secondary flex flex-col"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10, scale: 1.05, shadow: '2xl' }}
    transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-2xl font-bold mb-3 text-light-text dark:text-dark-text">
        {title}
      </h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300 font-semibold flex-grow">
        {description}
      </p>
      <div className="text-center mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-light-button dark:bg-dark-secondary text-light-text dark:text-dark-text px-4 py-2 rounded-lg font-bold transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          View Project
        </a>
      </div>
    </div>
  </motion.div>
);

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
    <div className="min-h-screen w-full bg-light-background dark:bg-dark-background py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-light-text dark:text-dark-text mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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