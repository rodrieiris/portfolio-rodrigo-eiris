import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function SocialLinks() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="flex justify-center gap-5 py-10 md:gap-20 gap-icons"
        >
            <a
                href="https://github.com/rodrieiris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl text-white hover:text-accent transition"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/rodrigo-eiris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl md:text-4xl text-white hover:text-accent transition"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>
        </motion.div>
    );
}