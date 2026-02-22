import { motion } from 'framer-motion';
import { FaFileDownload, FaExternalLinkAlt } from 'react-icons/fa';

const Resume = () => {
    return (
        <div className="min-h-screen pt-24 px-4 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full text-center space-y-8"
            >
                <h1 className="text-5xl font-bold mb-8">My Resume</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                    A comprehensive overview of my academic background, technical skills, and professional experience.
                </p>

                <div className="p-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl bg-light-secondary/30 dark:bg-dark-secondary/30">
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        {/* 
                  TODO: Replace with actual Resume PDF link. 
                  For now, we can use a placeholder or remove the download button until the user provides the file.
                  Assuming user might want to add a file later, providing a structure.
                */}
                        <button className="px-8 py-4 bg-light-button dark:bg-dark-button text-light-text dark:text-dark-text rounded-xl font-bold text-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-3">
                            <FaFileDownload /> Download PDF
                        </button>

                        <button className="px-8 py-4 border border-light-text dark:border-dark-text rounded-xl font-bold text-lg hover:bg-light-text hover:text-light-background dark:hover:bg-dark-text dark:hover:text-dark-background transition-colors flex items-center justify-center gap-3">
                            <FaExternalLinkAlt /> View Online
                        </button>
                    </div>
                    <p className="mt-6 text-sm text-gray-500">
                        (Resume file to be linked)
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
