import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 md:px-12 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10"
                >
                    {/* Header */}
                    <header className="mb-12 md:mb-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">About Me</h1>
                    </header>

                    <article className="space-y-8 text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200">
                        <p className="font-semibold">
                            I specialize in building robust ETL pipelines and managing data lakes.
                            My experience includes working with big data architectures to transform raw data into actionable insights,
                            as well as creating real-world solutions with clean, modern frontend interfaces.
                        </p>

                        <p>
                            I am a 3rd Year Pure Mathematics Undergraduate at the University of Lagos.
                            My academic background has instilled in me a rigorous approach to logic and problem-solving,
                            which I apply directly to software engineering challenges.
                        </p>


                        <p>
                            Beyond code and calculus, I am an avid chess player. Strategy, foresight, and
                            pattern recognition are skills I sharpen daily on the board. You can find me analyzing games or playing online in my free time.
                            Feel free to challenge me on <a href="https://www.chess.com/member/dnlight" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 font-bold hover:underline">Chess.com</a>.
                        </p>
                    </article>

                </motion.div>
            </div>
        </div>
    );
};

export default About;
