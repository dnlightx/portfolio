import { motion } from 'framer-motion';
import {
    FaReact, FaPython, FaAws, FaDatabase
} from 'react-icons/fa';
import {
    SiTailwindcss, SiApachespark, SiDatabricks, SiJupyter, SiPostgresql, SiJavascript
} from 'react-icons/si';

const ToolBadge = ({ icon: Icon, name }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl min-w-[120px] mx-4 hover:shadow-[#0265d8]/20 transition-all hover:scale-105">
        <Icon className="text-4xl md:text-5xl mb-3 text-[#0265d8] dark:text-[#60a5fa]" />
        <span className="font-bold text-sm text-gray-800 dark:text-gray-200 text-center">{name}</span>
    </div>
);

const About = () => {
    const tools = [
        { icon: FaPython, name: 'Python' },
        { icon: SiPostgresql, name: 'SQL' },
        { icon: SiApachespark, name: 'PySpark' },
        { icon: FaAws, name: 'AWS' },
        { icon: SiDatabricks, name: 'Databricks' },
        { icon: SiJupyter, name: 'Jupyter' },
        { icon: FaReact, name: 'React 19' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: SiJavascript, name: 'JavaScript' },
        { icon: FaPython, name: 'Python' },
        { icon: SiPostgresql, name: 'SQL' },
        { icon: SiApachespark, name: 'PySpark' },
        { icon: FaAws, name: 'AWS' },
        { icon: SiDatabricks, name: 'Databricks' },
        { icon: SiJupyter, name: 'Jupyter' },
        { icon: FaReact, name: 'React 19' },
        { icon: SiTailwindcss, name: 'Tailwind CSS' },
        { icon: SiJavascript, name: 'JavaScript' },
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 md:px-12 relative z-10">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-16"
                >
                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">About Me</h1>
                    </header>
                    <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold tracking-tight">Data Engineer and Frontend Developer</h1>

                    <article className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200">
                        <p className="font-semibold">I specialize in building data pipelines. My experience includes working with big data architectures to transform raw data into insights, as well as crafting clean, modern frontend interfaces.
                        </p>

                        <p>
                            I am a 3rd Year Mathematics Undergraduate at the University of Lagos. My academic background has developed my logic and problem-solving skills, which I leverage to solve software engineering challenges.

                        </p>

                        <p>
                            Beyond code and math, I am an avid chess player. You can find me playing online or analyzing games in my free time. Feel free to challenge me on <a href="https://www.chess.com/member/dnlight" target="_blank" rel="noopener noreferrer" className="text-[#3b82f6] dark:text-[#7fa650] font-bold hover:underline">Chess.com</a>.
                        </p>
                    </article>

                    <section className="pt-16 pb-8 overflow-hidden relative">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold tracking-tight">Tools & Technologies</h2>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">The arsenal I use to build scalable solutions.</p>
                        </div>

                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-light-background dark:from-[#050505] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-light-background dark:from-[#050505] to-transparent z-10 pointer-events-none" />

                        <div className="flex w-[200%] mt-8">
                            <motion.div
                                className="flex"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                            >
                                {tools.map((tool, index) => (
                                    <ToolBadge key={index} {...tool} />
                                ))}
                            </motion.div>
                        </div>
                    </section>

                </motion.div>
            </div>
        </div>
    );
};

export default About;
