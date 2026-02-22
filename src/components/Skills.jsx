import { motion } from 'framer-motion';
import {
  FaReact, FaPython, FaAws, FaDocker, FaDatabase
} from 'react-icons/fa';
import {
  SiTailwindcss, SiApachespark, SiDatabricks, SiJupyter, SiPostgresql
} from 'react-icons/si';

const SkillItem = ({ icon: Icon, name, color }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-6 bg-light-secondary dark:bg-dark-secondary rounded-xl hover:bg-white dark:hover:bg-gray-800 shadow-sm hover:shadow-lg transition-all border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
    whileHover={{ scale: 1.05, y: -5 }}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
  >
    <Icon className={`text-5xl mb-4 ${color}`} />
    <span className="font-semibold text-gray-700 dark:text-gray-200">{name}</span>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { icon: SiTailwindcss, name: 'Tailwind CSS', color: 'text-cyan-500' },
    { icon: FaDocker, name: 'Docker', color: 'text-blue-500' },
    { icon: SiPostgresql, name: 'SQL / Postgres', color: 'text-blue-400' },
    { icon: SiApachespark, name: 'PySpark', color: 'text-orange-500' },
    { icon: FaAws, name: 'AWS', color: 'text-yellow-500' },
    { icon: SiJupyter, name: 'Jupyter', color: 'text-orange-600' },
    { icon: SiDatabricks, name: 'Databricks', color: 'text-red-600' },
    { icon: FaReact, name: 'React 19', color: 'text-cyan-400' },
    { icon: FaPython, name: 'Python', color: 'text-yellow-300' },
  ];

  return (
    <section className="py-20 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-gray-600 dark:text-gray-400">Tools and technologies I use to build scalable solutions.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <SkillItem key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
