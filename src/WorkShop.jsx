import React from 'react';
import { motion } from 'framer-motion';
import './WorkShop.css';

const WorkShop = () => {
    return (
        <div className="workshop-container">
            <motion.h2 
                className="coming-soon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                Coming Soon
            </motion.h2>
            <div className="image-boxes">
                <motion.div 
                    className="image-box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="src\assets\wp1.png" alt="Image 1" />
                </motion.div>
                <motion.div 
                    className="image-box"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="src\assets\wp2.png" alt="Image 2" />
                </motion.div>
            </div>
        </div>
    );
};

export default WorkShop;
