import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text relative overflow-hidden">

            {/* Background blobs for depth */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-500/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="container mx-auto max-w-5xl z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                <motion.div
                    className="md:w-1/2 space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-light-secondary dark:bg-dark-secondary text-sm font-semibold tracking-wide border border-light-button dark:border-dark-button backdrop-blur-md">
                        Data Engineer & Frontend Developer
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Crafting Logic & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                            Digital Experiences
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
                        Bridging the gap between rigorous mathematical logic and modern software engineering. building scalable data pipelines and fluid user interfaces.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Link
                            to="/projects"
                            className="px-8 py-4 bg-light-text dark:bg-white text-light-background dark:text-black rounded-full font-bold text-lg hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                        >
                            View Projects <FaArrowRight />
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-4 border border-light-text dark:border-white rounded-full font-bold text-lg hover:bg-light-text hover:text-white dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center"
                        >
                            About Me
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/2 flex justify-center perspective-1000"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-2xl backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold">Latest Focus</h3>
                            <div className="space-y-2 text-left">
                                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-md">
                                    <span className="text-xs text-purple-300">Currently Building</span>
                                    <p className="font-semibold">Scalable ETL Pipelines</p>
                                </div>
                                <div className="bg-white/10 p-3 rounded-lg backdrop-blur-md">
                                    <span className="text-xs text-blue-300">Exploring</span>
                                    <p className="font-semibold">React 19 Server Components</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;
