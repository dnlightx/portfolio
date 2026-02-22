import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Placeholder or actual images would be imported here. 
// For now using colors/gradients as placeholders if images aren't available to avoid broken images.

const ProjectCard = ({ title, description, tags, link, github, color }) => (
  <motion.div
    className="group relative rounded-2xl overflow-hidden bg-light-secondary dark:bg-dark-secondary shadow-lg hover:shadow-2xl transition-all duration-500"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
  >
    {/* Image/Gradient Area */}
    <div className={`h-48 w-full ${color} flex items-center justify-center p-6`}>
      <h3 className="text-3xl font-bold text-white opacity-80 mix-blend-overlay">{title}</h3>
    </div>

    <div className="p-8">
      <h3 className="text-2xl font-bold mb-3 text-light-text dark:text-dark-text group-hover:text-purple-500 transition-colors">
        {title}
      </h3>
      <p className="mb-6 text-gray-600 dark:text-gray-300 line-clamp-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-light-text dark:bg-white text-light-background dark:text-black rounded-lg font-bold hover:opacity-90 transition-opacity"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
      title: "Data Lake Architecture",
      description: "Designed and implemented a scalable data lake using AWS S3 and Glue. Automated ETL pipelines with PySpark to process over 1TB of daily log data.",
      tags: ["AWS", "PySpark", "Glue", "S3", "Python"],
      link: "#",
      github: "https://github.com/dnlight",
      color: "bg-gradient-to-br from-blue-600 to-cyan-400"
    },
    {
      title: "Real-time Analytics Dashboard",
      description: "A comprehensive dashboard for visualizing streaming data. Built with React, D3.js, and WebSocket integration for live updates.",
      tags: ["React 19", "D3.js", "WebSocket", "Node.js"],
      link: "#",
      github: "https://github.com/dnlight",
      color: "bg-gradient-to-br from-purple-600 to-indigo-400"
    },
    {
      title: "Productivity Suite",
      description: "Full-stack application for managing tasks and workflows. Features drag-and-drop interfaces and team collaboration tools.",
      tags: ["React", "Flask", "PostgreSQL", "Docker"],
      link: "#", // Kept generic as requested to remove specific "Workshop" label but keep project concept
      github: "https://github.com/dnlight",
      color: "bg-gradient-to-br from-green-500 to-emerald-400"
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <div className="container mx-auto">

        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my work in Data Engineering and Frontend Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;