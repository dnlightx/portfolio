import { motion } from 'framer-motion';
import { FaChessKnight, FaUniversity, FaCode, FaDatabase } from 'react-icons/fa';

const About = () => {
    return (
        <div className="min-h-screen pt-24 px-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    {/* Header */}
                    <header className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-4">About Me</h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Data Engineer & Frontend Developer
                        </p>
                    </header>

                    {/* Bio Section */}
                    <section className="grid md:grid-cols-2 gap-8 items-start">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <FaUniversity className="text-light-button/80 dark:text-dark-button/80" />
                                The Academic
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                I am a 3rd Year Pure Mathematics Undergraduate at the University of Lagos.
                                My academic background has instilled in me a rigorous approach to logic and problem-solving,
                                which I apply directly to software engineering.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                                <FaChessKnight className="text-light-button/80 dark:text-dark-button/80" />
                                The Strategist
                            </h2>
                            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                Beyond code and calculus, I am an avid chess player. Strategy, foresight, and
                                pattern recognition are skills I sharpen daily on the board.
                            </p>
                            <a
                                href="https://www.chess.com/member/dnlight"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#7fa650] text-white rounded-lg font-bold hover:bg-[#688f3e] transition-colors"
                            >
                                <FaChessKnight /> Challenge me on Chess.com
                            </a>
                        </div>
                    </section>

                    {/* Technical Expertise */}
                    <section className="bg-light-secondary/50 dark:bg-dark-secondary/50 p-8 rounded-2xl backdrop-blur-sm">
                        <h2 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                    <FaDatabase className="text-blue-500" />
                                    Data Engineering
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    I specialize in building robust ETL pipelines and managing data lakes.
                                    My experience includes working with big data architectures to transform raw data into actionable insights.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['SQL', 'PySpark', 'AWS', 'Databricks', 'Jupyter'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                                    <FaCode className="text-purple-500" />
                                    Frontend Development
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    I am passionate about creating real-world solutions with clean, modern interfaces.
                                    I focus on intuitive UX and responsive design using modern frameworks.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['React 19', 'Tailwind CSS', 'Framer Motion', 'JavaScript'].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default About;
