import { motion } from 'framer-motion';
import wp1 from './assets/wp1.png';
import wp2 from './assets/wp2.png';

const WorkShop = () => {
    return (
        <div className="min-h-screen w-full bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text pt-20">
            <motion.h2 
                className="text-5xl font-semibold text-center my-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Coming Soon
            </motion.h2>
            <div className="flex flex-col gap-8 p-8 w-full">
                <motion.div 
                    className="w-full h-auto border-2 border-light-secondary dark:border-dark-secondary rounded-lg p-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={wp1} alt="Workshop Image 1" className="w-full h-auto max-h-[80vh] object-contain" />
                </motion.div>
                <motion.div 
                    className="w-full h-auto border-2 border-light-secondary dark:border-dark-secondary rounded-lg p-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={wp2} alt="Workshop Image 2" className="w-full h-auto max-h-[80vh] object-contain" />
                </motion.div>
            </div>
        </div>
    );
};

export default WorkShop;
