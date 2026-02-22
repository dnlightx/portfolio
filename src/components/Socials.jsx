import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';

const SocialLink = ({ href, icon: Icon, label, colorClass }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center p-6 bg-light-secondary dark:bg-dark-secondary rounded-xl shadow-lg hover:shadow-xl transition-shadow group ${colorClass}`}
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
    >
        <Icon className="text-4xl mr-6 group-hover:scale-110 transition-transform duration-300" />
        <div>
            <h3 className="text-xl md:text-2xl font-bold">{label}</h3>
            <p className="text-sm opacity-70 mt-1">Connect with me</p>
        </div>
    </motion.a>
);

const Socials = () => {
    const socials = [
        {
            href: "https://github.com/dnlight",
            icon: FaGithub,
            label: "GitHub",
            colorClass: "hover:text-gray-900 dark:hover:text-white"
        },
        {
            href: "https://www.linkedin.com/in/promise-omisakin-07579a2b8/",
            icon: FaLinkedin,
            label: "LinkedIn",
            colorClass: "hover:text-[#0077b5]"
        },
        {
            href: "https://x.com/dnlightx",
            icon: FaXTwitter,
            label: "X (Twitter)",
            colorClass: "hover:text-black dark:hover:text-white"
        },
        {
            href: "mailto:omifisayopromise5@gmail.com",
            icon: FaEnvelope,
            label: "Email",
            colorClass: "hover:text-red-500"
        },
        {
            href: "https://leetcode.com/u/DnLight/",
            icon: SiLeetcode,
            label: "LeetCode",
            colorClass: "hover:text-[#ffa116]"
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 md:px-12 bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Connect With Me</h1>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {socials.map((social, index) => (
                        <motion.div
                            key={social.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <SocialLink {...social} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Socials;
