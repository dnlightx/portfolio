import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import PropTypes from 'prop-types';

const SkillCard = ({ icon: Icon, name, years, darkMode }) => (
  <motion.div
    className={`p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}
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
    <Icon className={`text-5xl mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
    <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{name}</h3>
    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{years} {years === 1 ? 'year' : 'years'}</p>
  </motion.div>
);

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  years: PropTypes.number.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

const Skills = () => {
  const skills = [
    { icon: FaPython, name: 'Python', years: 1 },
    { icon: FaHtml5, name: 'HTML', years: 2 },
    { icon: FaCss3Alt, name: 'CSS', years: 2 },
    { icon: FaJs, name: 'JavaScript', years: 1 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center text-white"
          animate={{ scale: [1, 1.1, 1] }}  
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              years={skill.years}
              darkMode={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Skills;
