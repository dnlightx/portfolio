import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, tags, link, github, color }) => (
  <motion.div
    className="group relative rounded-2xl overflow-hidden bg-light-secondary dark:bg-dark-secondary shadow-lg hover:shadow-2xl transition-all duration-500 max-w-2xl mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
  >
    <div className={`h-56 w-full ${color} flex items-center justify-center p-6`}>
      <h3 className="text-3xl md:text-4xl font-bold text-white opacity-80 mix-blend-overlay text-center">{title}</h3>
    </div>

    <div className="p-8">
      <h3 className="text-2xl font-bold mb-3 text-light-text dark:text-dark-text group-hover:text-purple-500 transition-colors">
        {title}
      </h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300 line-clamp-3 text-lg">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-sm font-semibold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-light-text dark:bg-white text-light-background dark:text-black rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "WorkShop",
      description: "Full-stack application for managing tasks and workflows.",
      tags: ["React", "Flask", "PostgreSQL"],
      link: "#",
      github: "https://github.com/dnlight",
      color: "bg-gradient-to-br from-green-500 to-emerald-400"
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 sm:px-6 md:px-12 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="container mx-auto">

        <div className="text-center mb-12 md:mb-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.h1>
        </div>

        <div className="w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;