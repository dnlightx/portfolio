import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython } from 'react-icons/fa';

const SkillCard = ({ icon: Icon, name }) => (
  <motion.div
    className="p-6 bg-light-secondary dark:bg-dark-secondary rounded-lg shadow-lg text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1, rotate: 5, y: -10 }}
    transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
  >
    <Icon className="text-5xl mb-4 text-light-text dark:text-dark-text mx-auto" />
    <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{name}</h3>
  </motion.div>
);

const Skills = () => {
  const skills = [
    { icon: FaReact, name: 'React' },
    { icon: FaJs, name: 'JavaScript' },
    { icon: FaPython, name: 'Python' },
    { icon: FaHtml5, name: 'HTML' },
    { icon: FaCss3Alt, name: 'CSS' },
    { icon: FaGitAlt, name: 'Git' },
  ];

  return (
    <section id="skills" className="py-20 bg-light-background dark:bg-dark-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-light-text dark:text-dark-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
