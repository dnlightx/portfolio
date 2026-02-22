import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text relative overflow-hidden">

            {/* Background blobs for depth */}
            <div className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-96 md:h-96 bg-purple-500/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 md:w-96 md:h-96 bg-blue-500/30 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="container mx-auto max-w-6xl z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-16 md:mt-0">

                <motion.div
                    className="md:w-[55%] space-y-6 md:space-y-8 text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                        Hello I'm <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
                            Promise Omisakin.
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 leading-snug">
                        I build scalable data pipelines and craft fluid user interfaces.
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                        Bridging the gap between rigorous mathematical logic and modern software engineering. building scalable data pipelines and fluid user interfaces.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
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
                    className="md:w-[45%] flex justify-center perspective-1000 w-full"
                    initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Link to="/about" className="block relative w-full max-w-sm aspect-square bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl backdrop-blur-xl border border-white/10 shadow-2xl flex items-center justify-center p-8 transform md:rotate-3 hover:rotate-0 transition-all duration-500 hover:shadow-purple-500/20 group">
                        <div className="text-left space-y-6">
                            <h3 className="text-3xl font-bold group-hover:text-purple-500 transition-colors">About Me</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                I am a 3rd Year Pure Mathematics Undergraduate at the University of Lagos, passionate about software engineering and turning complex logic into elegant solutions.
                            </p>
                            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold group-hover:translate-x-2 transition-transform">
                                Read full story <FaArrowRight />
                            </div>
                        </div>
                    </Link>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;
